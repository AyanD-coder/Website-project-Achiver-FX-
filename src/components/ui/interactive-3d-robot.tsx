"use client";

import { Suspense, lazy } from "react";

import { useDeferredMount } from "@/lib/useDeferredMount";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({
  scene,
  className,
}: InteractiveRobotSplineProps) {
  const { ref, shouldMount } = useDeferredMount<HTMLDivElement>({
    rootMargin: "360px 0px",
  });

  const fallback = (
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

  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {shouldMount ? (
        <Suspense fallback={fallback}>
          <Spline
            scene={scene}
            className="[&_a]:!hidden [&>div:last-child]:!hidden h-full w-full translate-y-18"
          />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
