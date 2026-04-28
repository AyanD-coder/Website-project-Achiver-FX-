"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";
import type { SplineProps } from "@splinetool/react-spline";

import { cn } from "@/lib/utils";

const ROBOT_ROOT_MARGIN = "360px 0px";
const SMALL_SCREEN_QUERY = "(max-width: 639px)";

export interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

function useViewportVisibility<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const nextVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible((current) =>
          current === nextVisible ? current : nextVisible,
        );
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible };
}

function useDocumentVisibility() {
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof document === "undefined" ||
      document.visibilityState === "visible",
  );

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const syncVisibility = () => {
      const nextVisible = document.visibilityState === "visible";
      setIsVisible((current) =>
        current === nextVisible ? current : nextVisible,
      );
    };

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  return isVisible;
}

function getMediaQueryMatch(query: string) {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(query).matches
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMediaQueryMatch(query));

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    const syncMatch = () => {
      setMatches((current) =>
        current === mediaQueryList.matches ? current : mediaQueryList.matches,
      );
    };

    syncMatch();

    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", syncMatch);

      return () => {
        mediaQueryList.removeEventListener("change", syncMatch);
      };
    }

    mediaQueryList.addListener(syncMatch);

    return () => {
      mediaQueryList.removeListener(syncMatch);
    };
  }, [query]);

  return matches;
}

function syncSplinePlayback(app: Application, shouldPlay: boolean) {
  try {
    if (shouldPlay) {
      if (app.isStopped) {
        app.play();
      }
      return;
    }

    if (!app.isStopped) {
      app.stop();
    }
  } catch {
    // The Spline React wrapper owns disposal; ignore calls racing unmount.
  }
}

export function RobotSplineFallback() {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-transparent text-white [.light_&]:text-slate-700",
      )}
    >
      <svg
        className="mr-3 h-5 w-5 animate-spin text-white [.light_&]:text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
        />
      </svg>
      <span className="text-sm text-text-secondary [.light_&]:text-slate-500">Loading 3D robot...</span>
    </div>
  );
}

const Spline = dynamic<SplineProps>(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <RobotSplineFallback />,
});

export const InteractiveRobotSpline = memo(function InteractiveRobotSpline({
  scene,
  className,
}: InteractiveRobotSplineProps) {
  const { ref, isVisible } =
    useViewportVisibility<HTMLDivElement>(ROBOT_ROOT_MARGIN);
  const isDocumentVisible = useDocumentVisibility();
  const isSmallScreen = useMediaQuery(SMALL_SCREEN_QUERY);
  const appRef = useRef<Application | null>(null);
  const shouldMountSpline = isVisible && !isSmallScreen;
  const shouldPlaySpline = shouldMountSpline && isDocumentVisible;
  const shouldPlayRef = useRef(shouldPlaySpline);

  useEffect(() => {
    shouldPlayRef.current = shouldPlaySpline;

    const app = appRef.current;
    if (!app) {
      return;
    }

    syncSplinePlayback(app, shouldPlaySpline);
  }, [shouldPlaySpline]);

  useEffect(() => {
    if (!shouldMountSpline) {
      appRef.current = null;
    }
  }, [shouldMountSpline]);

  useEffect(() => {
    return () => {
      const app = appRef.current;
      appRef.current = null;

      if (app) {
        syncSplinePlayback(app, false);
      }
    };
  }, []);

  const handleLoad = useCallback((app: Application) => {
    appRef.current = app;
    app.setGlobalEvents(true);
    syncSplinePlayback(app, shouldPlayRef.current);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {shouldMountSpline ? (
        <Spline
          scene={scene}
          onLoad={handleLoad}
          renderOnDemand
          className="[&_a]:!hidden [&>div:last-child]:!hidden h-full w-full translate-y-18"
        >
          <RobotSplineFallback />
        </Spline>
      ) : (
        <RobotSplineFallback />
      )}
    </div>
  );
});
