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

import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

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

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === containerRef.current || event.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
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

        const relatedItems = getRelatedItems(id);
        const nextPulseEffect: Record<number, boolean> = {};

        relatedItems.forEach((relatedId) => {
          nextPulseEffect[relatedId] = true;
        });

        setPulseEffect(nextPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return next;
    });
  };

  useEffect(() => {
    if (!autoRotate) {
      return;
    }

    let animationFrameId = 0;
    let previousTime: number | null = null;

    const animate = (currentTime: number) => {
      if (previousTime === null) {
        previousTime = currentTime;
      }

      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      setRotationAngle((previous) => {
        const next = previous + (deltaTime / 1000) * AUTO_ROTATE_DEGREES_PER_SECOND;
        return next % 360;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
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
      className="relative flex h-[680px] w-full flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_28%),linear-gradient(180deg,#020617_0%,#050b16_48%,#020617_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,transparent_38%,rgba(1,7,18,0.62)_100%)]"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <AnimatedShaderBackground className="pointer-events-none absolute inset-0 z-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.16),transparent_26%),radial-gradient(circle_at_center,rgba(8,15,30,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(1,6,18,0.14),rgba(1,6,18,0.04)_24%,rgba(1,6,18,0.2)_58%,rgba(1,6,18,0.28)_100%),radial-gradient(circle_at_center,rgba(8,15,30,0.02),rgba(2,8,23,0.24)_70%,rgba(2,8,23,0.48)_100%)]" />

      <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
        <div
          className="absolute flex h-full w-full items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 shadow-[0_0_35px_rgba(56,189,248,0.38)]">
            <div className="absolute h-20 w-20 animate-ping rounded-full border border-cyan-100/30 opacity-80" />
            <div
              className="absolute h-24 w-24 animate-ping rounded-full border border-cyan-100/20 opacity-60"
              style={{ animationDelay: "0.5s" }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute text-[44px] font-black leading-none text-cyan-200/70 blur-[3px] drop-shadow-[0_0_22px_rgba(56,189,248,0.82)]"
            >
              $
            </span>
            <span className="relative translate-y-[-1px] text-[40px] font-black leading-none text-white drop-shadow-[0_0_18px_rgba(14,165,233,0.7)]">
              $
            </span>
          </div>

          <div className="pointer-events-none absolute flex items-center justify-center">
            <div className="absolute h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.12] blur-3xl" />
            <div className="absolute h-[23rem] w-[23rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_68%)] blur-3xl" />
            <div className="absolute h-[25rem] w-[25rem] rounded-full border border-cyan-400/[0.22] shadow-[0_0_65px_rgba(56,189,248,0.18),inset_0_0_22px_rgba(56,189,248,0.12)]" />
            <div className="absolute h-[25rem] w-[25rem] rounded-full border border-dashed border-white/[0.16] opacity-90" />
            <div className="absolute h-[21rem] w-[21rem] rounded-full border border-white/[0.09]" />
            <div
              className="absolute h-[25rem] w-[25rem] rounded-full opacity-85 blur-[1px]"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0) 0deg, rgba(56,189,248,0.5) 40deg, rgba(56,189,248,0) 92deg, rgba(125,211,252,0.14) 180deg, rgba(56,189,248,0) 298deg, rgba(56,189,248,0.42) 338deg, rgba(56,189,248,0) 360deg)",
                animation: "spin 26s linear infinite",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 1px))",
                mask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 1px))",
              }}
            />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(125,211,252,0.95)]" />
            <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
          </div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
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
                  className={`absolute -inset-1 rounded-full blur-xl ${isPulsing ? "animate-pulse duration-1000 opacity-100" : "opacity-80"}`}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(103,232,249,0.38) 0%, rgba(56,189,248,0.2) 38%, rgba(255,255,255,0) 74%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                <div
                  className={`
                    relative flex h-10 w-10 items-center justify-center rounded-full border-2 backdrop-blur-md transition-all duration-300 before:absolute before:inset-[-8px] before:-z-10 before:rounded-full before:bg-cyan-300/18 before:blur-xl
                    ${isExpanded ? "scale-150 border-cyan-100 bg-white text-slate-950 shadow-[0_0_36px_rgba(255,255,255,0.35)]" : ""}
                    ${!isExpanded && isRelated ? "animate-pulse border-cyan-100/85 bg-cyan-100/80 text-slate-950 shadow-[0_0_34px_rgba(125,211,252,0.5)]" : ""}
                    ${!isExpanded && !isRelated ? "border-cyan-200/60 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.24),rgba(2,6,23,0.96)_72%)] text-white shadow-[0_0_30px_rgba(56,189,248,0.42)] group-hover:scale-105 group-hover:border-cyan-200/80 group-hover:text-white group-hover:shadow-[0_0_42px_rgba(56,189,248,0.72)]" : ""}
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      isExpanded || isRelated
                        ? "text-slate-950 drop-shadow-[0_0_6px_rgba(255,255,255,0.18)]"
                        : "text-white drop-shadow-[0_0_10px_rgba(125,211,252,0.8)]"
                    }
                  />
                </div>

                <div
                  className={`
                    absolute top-12 whitespace-nowrap rounded-full border border-cyan-200/15 bg-slate-950/84 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/95 shadow-[0_0_24px_rgba(56,189,248,0.18)] backdrop-blur-md drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-300 [.light_&]:border-blue-200/80 [.light_&]:bg-white/96 [.light_&]:text-slate-700 [.light_&]:shadow-[0_12px_28px_rgba(37,99,235,0.12)] [.light_&]:drop-shadow-none
                    ${isExpanded ? "scale-125 border-cyan-300/30 bg-cyan-500/12 text-white shadow-[0_0_28px_rgba(56,189,248,0.28)] [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700 [.light_&]:shadow-[0_14px_30px_rgba(37,99,235,0.16)]" : "group-hover:border-cyan-300/30 group-hover:bg-cyan-500/12 group-hover:text-white group-hover:shadow-[0_0_32px_rgba(56,189,248,0.32)] [.light_&]:group-hover:border-blue-300/70 [.light_&]:group-hover:bg-blue-50 [.light_&]:group-hover:text-blue-700 [.light_&]:group-hover:shadow-[0_16px_34px_rgba(37,99,235,0.18)]"}
                  `}
                >
                  {item.title}
                </div>

                {isExpanded ? (
                  <Card className="absolute left-1/2 top-20 w-72 -translate-x-1/2 overflow-visible border-cyan-300/20 bg-slate-950/88 shadow-[0_24px_60px_rgba(2,12,27,0.55),0_0_35px_rgba(56,189,248,0.16)] backdrop-blur-xl [.light_&]:border-gray-200 [.light_&]:bg-white/[0.98] [.light_&]:shadow-[0_24px_60px_rgba(37,99,235,0.12)]">
                    <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-cyan-200/60 [.light_&]:bg-blue-300/70" />
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
