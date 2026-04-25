"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Code,
  FileText,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { usePageVisibility } from "@/lib/usePageVisibility";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: keyof typeof iconMap;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  href?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const iconMap = {
  Calendar,
  FileText,
  Code,
  User,
  Clock,
};

const AUTO_ROTATE_DEGREES_PER_SECOND = 6;
const ROTATION_FRAME_INTERVAL_MS = 1000 / 24;
const MOBILE_ROTATION_FRAME_INTERVAL_MS = 1000 / 18;

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isContainerInView, setIsContainerInView] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const isPageVisible = usePageVisibility();

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === containerRef.current || event.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId: number) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((previous) => {
      const next = { ...previous };

      Object.keys(next).forEach((key) => {
        if (Number(key) !== id) next[Number(key)] = false;
      });

      next[id] = !previous[id];

      if (!previous[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }

      return next;
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const syncWidth = (nextWidth: number) => {
      setContainerWidth((current) =>
        current === nextWidth ? current : nextWidth,
      );
    };

    syncWidth(container.clientWidth);

    if (typeof ResizeObserver === "undefined") {
      const handleResize = () => syncWidth(container.clientWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width ?? container.clientWidth;
      syncWidth(nextWidth);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const nextEntry = entries[0];
        setIsContainerInView(nextEntry?.isIntersecting ?? true);
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const isMobileLayout = containerWidth > 0 && containerWidth < 640;
  const rotationFrameInterval = isMobileLayout
    ? MOBILE_ROTATION_FRAME_INTERVAL_MS
    : ROTATION_FRAME_INTERVAL_MS;
  const shouldAnimateOrbit = autoRotate && isPageVisible && isContainerInView;

  useEffect(() => {
    if (!shouldAnimateOrbit) {
      return;
    }

    let animationFrameId = 0;
    let previousTime = 0;

    const animate = (currentTime: number) => {
      if (previousTime === 0) {
        previousTime = currentTime;
      }

      const deltaTime = currentTime - previousTime;

      if (deltaTime >= rotationFrameInterval) {
        previousTime = currentTime;

        setRotationAngle((previous) => {
          const next =
            previous + (deltaTime / 1000) * AUTO_ROTATE_DEGREES_PER_SECOND;
          return next % 360;
        });
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [rotationFrameInterval, shouldAnimateOrbit]);
  const centerOffset = {
    x: 0,
    y:
      containerWidth <= 0
        ? 56
        : containerWidth < 640
          ? 24
          : containerWidth < 1024
            ? 40
            : 64,
  };

  const orbitRadius =
    containerWidth <= 0
      ? 300
      : containerWidth < 640
        ? Math.max(92, Math.min(118, containerWidth * 0.3))
        : containerWidth < 1024
          ? Math.max(180, Math.min(240, containerWidth * 0.3))
          : 300;

  const orbitDiameter = orbitRadius * 2;
  const innerRingSize = orbitDiameter * 0.84;
  const centerNodeSize = isMobileLayout ? 56 : 64;
  const iconSize = isMobileLayout ? 16 : 18;
  const backgroundGlobeOffsetY = isMobileLayout ? -220 : 0;
  const detailCardWidth = isMobileLayout
    ? "min(16rem, calc(100vw - 2.5rem))"
    : "18rem";
  const centerNodeStyle = {
    width: `${centerNodeSize}px`,
    height: `${centerNodeSize}px`,
    transform: `translateY(${backgroundGlobeOffsetY}px)`,
    backgroundImage:
      "linear-gradient(135deg, var(--achiever-lightning-start, #38bdf8), var(--achiever-lightning-mid, #3b82f6), var(--achiever-lightning-end, #22d3ee))",
    boxShadow: "0 0 32px var(--achiever-lightning-glow, rgba(59,130,246,0.34))",
  };
  const centerNodeSoftStyle = {
    color: "var(--achiever-lightning-soft, rgba(224,242,254,0.82))",
    textShadow: "0 0 18px var(--achiever-lightning-glow, rgba(59,130,246,0.34))",
  };
  const centerNodeTextStyle = {
    textShadow: "0 0 20px var(--achiever-lightning-glow-strong, rgba(59,130,246,0.52))",
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = orbitRadius * Math.cos(radian);
    const y = orbitRadius * Math.sin(radian) + backgroundGlobeOffsetY;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.72, Math.min(1, 0.72 + 0.28 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, zIndex, opacity };
  };

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  return (
    <div
      className="relative flex h-full min-h-[40rem] w-full flex-col items-center justify-center overflow-visible rounded-none bg-transparent shadow-none after:pointer-events-none after:absolute after:inset-0 after:bg-none sm:h-[820px] sm:min-h-0 sm:overflow-visible sm:rounded-none sm:bg-transparent sm:shadow-none sm:after:bg-none lg:h-[960px]"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative flex h-full w-full max-w-5xl items-center justify-center px-3 sm:px-6 lg:px-0">
        <div
          className="absolute flex h-full w-full items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div
            data-orbit-center-anchor
            className="absolute z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400"
            style={centerNodeStyle}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute text-[38px] font-black leading-none sm:text-[44px]"
              style={centerNodeSoftStyle}
            >
              $
            </span>
            <span
              className="relative translate-y-[-1px] text-[34px] font-black leading-none text-white sm:text-[40px]"
              style={centerNodeTextStyle}
            >
              $
            </span>
          </div>

          {!isMobileLayout ? (
            <>
              <div
                className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_25%_90%,_#1e386b_15%,_#000000de_70%,_#000000ed_100%)] opacity-90 backdrop-blur-3xl"
                style={{ transform: `translateY(${backgroundGlobeOffsetY}px)` }}
              />
              <div
                className="pointer-events-none absolute h-[900px] w-[900px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"
                style={{ transform: `translateY(${backgroundGlobeOffsetY}px)` }}
              />
            </>
          ) : null}

          <div
            className="pointer-events-none absolute flex items-center justify-center"
            style={{
              transform: `translateY(${backgroundGlobeOffsetY}px)`,
            }}
          >
            <div
              className="absolute rounded-full border border-white/12"
              style={{
                width: `${orbitDiameter}px`,
                height: `${orbitDiameter}px`,
              }}
            />
            <div
              className="absolute rounded-full border border-dashed border-white/[0.16] opacity-90"
              style={{
                width: `${orbitDiameter}px`,
                height: `${orbitDiameter}px`,
              }}
            />
            <div
              className="absolute rounded-full border border-white/[0.09]"
              style={{
                width: `${innerRingSize}px`,
                height: `${innerRingSize}px`,
              }}
            />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/55" />
            <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/35" />
          </div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.id}
                ref={(element) => {
                  nodeRefs.current[item.id] = element;
                }}
                className={`group absolute cursor-pointer will-change-transform ${
                  autoRotate
                    ? ""
                    : "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                }`}
                style={{
                  transform: `translate3d(${position.x.toFixed(3)}px, ${position.y.toFixed(3)}px, 0)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : Number(position.opacity.toFixed(3)),
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleItem(item.id);
                }}
                suppressHydrationWarning
                >
                <div
                  className={`
                    relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-10 sm:w-10
                    ${isExpanded ? "scale-125 border-white/40 bg-white/10 text-white shadow-none" : ""}
                    ${!isExpanded && isRelated ? "animate-pulse border-white/35 bg-white/10 text-white shadow-none" : ""}
                    ${!isExpanded && !isRelated ? "border-white/20 bg-black/45 text-white shadow-none group-hover:scale-105 group-hover:border-white/30 group-hover:bg-black/55 group-hover:text-white" : ""}
                  `}
                >
                  <Icon
                    size={iconSize}
                    className={
                      isExpanded || isRelated
                        ? "text-white"
                        : "text-white"
                    }
                  />
                </div>

                <div
                  className={`
                    absolute left-1/2 top-11 w-32 -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-center text-[10px] font-semibold leading-4 tracking-[0.12em] text-white/95 shadow-none backdrop-blur-none drop-shadow-none transition-all duration-300 whitespace-normal [.light_&]:border-slate-200/80 [.light_&]:bg-white/96 [.light_&]:text-slate-700 [.light_&]:shadow-none [.light_&]:drop-shadow-none sm:left-0 sm:top-12 sm:w-auto sm:translate-x-0 sm:px-4 sm:text-xs sm:leading-normal sm:tracking-[0.18em] sm:whitespace-nowrap
                    ${isExpanded ? "scale-110 border-white/20 bg-black/70 text-white [.light_&]:border-slate-300 [.light_&]:bg-slate-50 [.light_&]:text-slate-700" : "group-hover:border-white/15 group-hover:bg-black/65 group-hover:text-white [.light_&]:group-hover:border-slate-300/70 [.light_&]:group-hover:bg-slate-50 [.light_&]:group-hover:text-slate-700"}
                  `}
                >
                  {item.title}
                </div>

                {isExpanded ? (
                  <Card
                    className="absolute left-1/2 top-20 -translate-x-1/2 overflow-visible border-white/10 bg-black/80 shadow-[0_24px_60px_rgba(2,12,27,0.45)] backdrop-blur-none [.light_&]:border-gray-200 [.light_&]:bg-white/[0.98] [.light_&]:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                    style={{ width: detailCardWidth }}
                  >
                    <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-white/25 [.light_&]:bg-slate-300/70" />
                    <CardHeader className="pb-2">
                      <CardTitle className="mt-2 text-sm tracking-[0.02em] text-white [.light_&]:text-slate-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80 [.light_&]:text-slate-600">
                      <p>{item.content}</p>

                      <div className="mt-4 border-t border-white/10 pt-4 [.light_&]:border-gray-200">
                        <Button
                          variant="primary"
                          className="w-full flex items-center justify-center py-2"
                          onClick={(event) => {
                            event.stopPropagation();
                            window.location.href = item.href || "#";
                          }}
                        >
                          Open Link <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
