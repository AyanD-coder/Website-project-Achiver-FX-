"use client";

import { useMemo, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CandlestickChart,
  Clock3,
  Coins,
  Globe2,
  TrendingUp,
  Zap,
} from "lucide-react";

interface OrbitalFeature {
  label: string;
  description: string;
  icon: LucideIcon;
}

const orbitalFeatures: OrbitalFeature[] = [
  {
    label: "Currencies",
    description: "Follow major and minor FX pairs with precision-led access.",
    icon: Globe2,
  },
  {
    label: "Metals",
    description: "Track gold and silver opportunities through fast-moving macro cycles.",
    icon: Coins,
  },
  {
    label: "Indices",
    description: "Monitor benchmark markets with a clean global risk snapshot.",
    icon: CandlestickChart,
  },
  {
    label: "Equities",
    description: "Stay aligned with sector momentum and blue-chip market breadth.",
    icon: TrendingUp,
  },
  {
    label: "Energies",
    description: "Watch oil and gas pricing shifts with responsive positioning tools.",
    icon: Zap,
  },
  {
    label: "Futures",
    description: "Navigate forward-looking contracts with structured market visibility.",
    icon: Clock3,
  },
];

const orbitDurationInSeconds = 28;

const createStars = () =>
  Array.from({ length: 28 }, (_, index) => ({
    id: `orbital-star-${index}`,
    top: `${(index * 17 + 9) % 100}%`,
    left: `${(index * 29 + 13) % 100}%`,
    size: index % 4 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
    opacity: 0.18 + (index % 5) * 0.08,
    duration: `${4 + (index % 6)}s`,
    delay: `${(index % 7) * 0.45}s`,
  }));

export default function OrbitalFeatures() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(
    orbitalFeatures[0]?.label ?? null,
  );
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  const stars = useMemo(() => createStars(), []);

  const currentFeature =
    orbitalFeatures.find(
      (feature) => feature.label === (hoveredItem ?? activeItem),
    ) ?? orbitalFeatures[0];
  const CurrentFeatureIcon = currentFeature.icon;

  const stageStyle = {
    "--orbit-radius": "clamp(10rem, 27vw, 17rem)",
  } as CSSProperties;

  const orbitRingStyle = {
    width: "calc(var(--orbit-radius) * 2)",
    height: "calc(var(--orbit-radius) * 2)",
  } as CSSProperties;

  const outerRingStyle = {
    width: "calc(var(--orbit-radius) * 2.55)",
    height: "calc(var(--orbit-radius) * 2.55)",
  } as CSSProperties;

  const orbitAnimationStyle = {
    animation: `spin ${orbitDurationInSeconds}s linear infinite`,
    animationPlayState: isOrbitPaused ? "paused" : "running",
  } as CSSProperties;

  const counterRotationStyle = {
    animation: `spin ${orbitDurationInSeconds}s linear infinite reverse`,
    animationPlayState: isOrbitPaused ? "paused" : "running",
  } as CSSProperties;

  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#02050c] px-4 pb-16 pt-28 sm:px-6 lg:px-8 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_46%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.16),transparent_20%),radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.16),transparent_18%),radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.10),transparent_18%),linear-gradient(180deg,#01040b_0%,#030813_48%,#040b18_100%)] [.light_&]:bg-[radial-gradient(circle_at_50%_18%,rgba(37,99,235,0.14),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.10),transparent_18%),radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.09),transparent_18%),linear-gradient(180deg,#f8fbff_0%,#f8fbff_48%,#ffffff_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.12] blur-3xl sm:h-[36rem] sm:w-[36rem] [.light_&]:bg-sky-400/[0.12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(1,4,11,0.62)_78%,rgba(1,4,11,0.88)_100%)] [.light_&]:bg-[radial-gradient(circle_at_center,transparent_36%,rgba(248,250,252,0.18)_72%,rgba(255,255,255,0.84)_100%)]" />

        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-cyan-100 shadow-[0_0_12px_rgba(125,211,252,0.55)] animate-pulse [.light_&]:bg-blue-200/80 [.light_&]:shadow-[0_0_10px_rgba(37,99,235,0.18)]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          className="relative mx-auto flex aspect-square w-[min(96vw,52rem)] items-center justify-center scale-[0.72] sm:scale-[0.84] lg:scale-100"
          style={stageStyle}
        >
          <div className="pointer-events-none absolute inset-[9%] rounded-full border border-white/[0.06] bg-white/[0.015] [.light_&]:border-gray-200 [.light_&]:bg-white/65" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.18] shadow-[0_0_80px_rgba(56,189,248,0.08)] [.light_&]:border-blue-300/35 [.light_&]:shadow-[0_0_60px_rgba(37,99,235,0.1)]"
            style={orbitRingStyle}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] [.light_&]:border-gray-200"
            style={outerRingStyle}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.12] blur-3xl [.light_&]:bg-sky-400/[0.1]" />

          <div className="relative z-20 flex h-[56%] w-[56%] max-h-[24rem] max-w-[24rem] flex-col items-center justify-center rounded-full border border-white/10 bg-slate-950/60 p-8 text-center shadow-[0_0_45px_rgba(56,189,248,0.18)] backdrop-blur-2xl [.light_&]:border-gray-200 [.light_&]:bg-white/80 [.light_&]:shadow-[0_18px_48px_rgba(14,165,233,0.12)]">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
              Market Overview
            </span>

            <h2 className="max-w-[16rem] bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text text-center text-3xl font-semibold leading-tight tracking-[-0.05em] text-transparent sm:max-w-[20rem] sm:text-4xl lg:max-w-[24rem] lg:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
              Choose your market category
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300 sm:text-[0.95rem] [.light_&]:text-slate-600">
              {currentFeature.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 shadow-[0_0_20px_rgba(56,189,248,0.15)] [.light_&]:border-gray-200 [.light_&]:bg-blue-50/80 [.light_&]:text-blue-700 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.12)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-400/10 text-cyan-200 shadow-[0_0_16px_rgba(56,189,248,0.18)] [.light_&]:border-blue-200 [.light_&]:bg-white [.light_&]:text-blue-600 [.light_&]:shadow-[0_6px_16px_rgba(37,99,235,0.16)]">
                <CurrentFeatureIcon className="h-4 w-4" />
              </span>
              {currentFeature.label}
            </div>
          </div>

          <div
            className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            style={orbitRingStyle}
            onMouseEnter={() => setIsOrbitPaused(true)}
            onMouseLeave={() => {
              setIsOrbitPaused(false);
              setHoveredItem(null);
            }}
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/[0.12] [.light_&]:border-blue-300/30" />

            <div className="absolute inset-0" style={orbitAnimationStyle}>
              {orbitalFeatures.map((feature, index) => {
                const angle = (360 / orbitalFeatures.length) * index - 90;
                const isActive = activeItem === feature.label;
                const isHovered = hoveredItem === feature.label;
                const isHighlighted = isActive || isHovered;
                const FeatureIcon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div style={counterRotationStyle}>
                      <button
                        type="button"
                        aria-pressed={isActive}
                        onClick={() =>
                          setActiveItem((current) =>
                            current === feature.label ? null : feature.label,
                          )
                        }
                        onMouseEnter={() => setHoveredItem(feature.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => {
                          setHoveredItem(feature.label);
                          setIsOrbitPaused(true);
                        }}
                        onBlur={() => {
                          setHoveredItem(null);
                          setIsOrbitPaused(false);
                        }}
                        className={`group relative flex min-w-[10.5rem] items-center justify-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 ${isHighlighted
                            ? "scale-110 border-cyan-400/50 bg-cyan-500/10 text-white shadow-[0_0_20px_rgba(56,189,248,0.6)] [.light_&]:border-blue-300/60 [.light_&]:bg-blue-500/10 [.light_&]:text-[#111827] [.light_&]:shadow-[0_12px_28px_rgba(37,99,235,0.2)]"
                            : "border-white/10 bg-white/5 text-white/80 shadow-[0_0_22px_rgba(56,189,248,0.14)] hover:scale-110 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] [.light_&]:border-gray-200 [.light_&]:bg-white/82 [.light_&]:text-slate-700 [.light_&]:shadow-[0_10px_24px_rgba(15,23,42,0.06)] [.light_&]:hover:border-blue-300/70 [.light_&]:hover:bg-blue-50/90 [.light_&]:hover:text-[#111827] [.light_&]:hover:shadow-[0_14px_30px_rgba(37,99,235,0.18)]"
                          }`}
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border p-1 transition-all duration-300 ${isHighlighted
                              ? "border-cyan-300/30 bg-cyan-400/15 text-cyan-100 shadow-[0_0_16px_rgba(125,211,252,0.85)] [.light_&]:border-blue-300/50 [.light_&]:bg-white [.light_&]:text-blue-600 [.light_&]:shadow-[0_8px_20px_rgba(37,99,235,0.18)]"
                              : "border-white/10 bg-cyan-500/10 text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.35)] group-hover:border-cyan-300/25 group-hover:bg-cyan-400/15 group-hover:text-cyan-100 [.light_&]:border-gray-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-600 [.light_&]:shadow-[0_8px_18px_rgba(37,99,235,0.12)] [.light_&]:group-hover:border-blue-300/60 [.light_&]:group-hover:bg-white [.light_&]:group-hover:text-blue-700"
                            }`}
                        >
                          <FeatureIcon className="h-4 w-4" />
                        </span>
                        <span className="whitespace-nowrap transition-colors duration-300 group-hover:text-white [.light_&]:group-hover:text-[#111827]">
                          {feature.label}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
