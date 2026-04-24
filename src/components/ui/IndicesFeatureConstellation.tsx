"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CandlestickChart,
  Clock3,
  Globe2,
  MonitorSmartphone,
  TrendingUp,
  Users,
} from "lucide-react";

type OrbitFeature = {
  angle: number;
  description: string;
  floatDuration: number;
  floatOffset: number;
  icon: LucideIcon;
  mobileAlign: string;
  number: string;
  radius: string;
  title: string;
  widthClassName: string;
};

const orbitFeatures: OrbitFeature[] = [
  {
    number: "01",
    title: "Access Leading Global Indices",
    description:
      "Tap into benchmark markets across major global economies from one trading environment.",
    icon: Globe2,
    angle: 232,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[14.75rem]",
    mobileAlign: "mr-auto max-w-[16rem]",
    floatOffset: -8,
    floatDuration: 5.6,
  },
  {
    number: "02",
    title: "Trade Around the Clock",
    description:
      "Stay aligned with global sessions and respond quickly as market leadership shifts.",
    icon: Clock3,
    angle: 286,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[14.25rem]",
    mobileAlign: "ml-auto max-w-[15.5rem]",
    floatOffset: 10,
    floatDuration: 6,
  },
  {
    number: "03",
    title: "Leverage Your Investment",
    description:
      "Increase your market reach with efficient capital use and flexible trade sizing.",
    icon: TrendingUp,
    angle: 342,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[14.5rem]",
    mobileAlign: "mr-auto max-w-[15.75rem]",
    floatOffset: -9,
    floatDuration: 5.8,
  },
  {
    number: "04",
    title: "Profit in Any Market Condition",
    description:
      "Position for upward momentum or downward pressure with two-way index exposure.",
    icon: CandlestickChart,
    angle: 28,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[15rem]",
    mobileAlign: "ml-auto max-w-[16rem]",
    floatOffset: 10,
    floatDuration: 6.3,
  },
  {
    number: "05",
    title: "Advanced Trading Platforms",
    description:
      "Move from analysis to execution with charting, risk tools, and responsive controls.",
    icon: MonitorSmartphone,
    angle: 92,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[15.25rem]",
    mobileAlign: "mr-auto max-w-[16rem]",
    floatOffset: -8,
    floatDuration: 5.9,
  },
  {
    number: "06",
    title: "Dedicated Customer Support",
    description:
      "Lean on a responsive support team when market volatility demands quick action.",
    icon: Users,
    angle: 156,
    radius: "clamp(22rem, 29vw, 24rem)",
    widthClassName: "w-[14.5rem]",
    mobileAlign: "ml-auto max-w-[15.75rem]",
    floatOffset: 9,
    floatDuration: 5.5,
  },
];

const orbitDurationInSeconds = 34;

const particles = [
  { top: "9%", left: "12%", size: 2, duration: "5.2s", delay: "0s" },
  { top: "13%", left: "78%", size: 3, duration: "6.1s", delay: "0.5s" },
  { top: "22%", left: "21%", size: 2, duration: "5.7s", delay: "0.9s" },
  { top: "27%", left: "89%", size: 2, duration: "5.3s", delay: "0.2s" },
  { top: "42%", left: "8%", size: 3, duration: "6.4s", delay: "0.8s" },
  { top: "46%", left: "84%", size: 2, duration: "5.8s", delay: "0.3s" },
  { top: "63%", left: "15%", size: 2, duration: "5.5s", delay: "1.1s" },
  { top: "66%", left: "76%", size: 3, duration: "6.2s", delay: "0.6s" },
  { top: "79%", left: "18%", size: 2, duration: "5.6s", delay: "0.9s" },
  { top: "84%", left: "67%", size: 2, duration: "5.4s", delay: "0.7s" },
];

function FeatureCard({
  feature,
  desktop = false,
  index,
}: {
  desktop?: boolean;
  feature: OrbitFeature;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = feature.icon;

  const desktopPositionStyle = desktop
    ? ({
        transform: `translate(-50%, -50%) rotate(${feature.angle}deg) translateX(${feature.radius}) rotate(${-feature.angle}deg)`,
      } as CSSProperties)
    : undefined;
  const orbitTransition = {
    duration: orbitDurationInSeconds,
    repeat: Number.POSITIVE_INFINITY,
    ease: "linear" as const,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.58,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative ${desktop ? `absolute left-1/2 top-1/2 z-10 ${feature.widthClassName}` : `z-20 w-full ${feature.mobileAlign}`}`}
      style={desktopPositionStyle}
    >
      <motion.div
        animate={
          desktop && !shouldReduceMotion ? { rotate: -360 } : undefined
        }
        transition={desktop && !shouldReduceMotion ? orbitTransition : undefined}
        className="will-change-transform"
      >
        <motion.div
          animate={
            !desktop && !shouldReduceMotion
              ? {
                  y: [0, feature.floatOffset, 0],
                }
              : undefined
          }
          transition={
            !desktop && !shouldReduceMotion
              ? {
                  duration: feature.floatDuration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
              : undefined
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -10,
                  scale: 1.02,
                }
          }
          className="relative will-change-transform"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(8,14,28,0.8),rgba(3,8,20,0.9))] px-5 py-5 shadow-[0_20px_46px_rgba(2,12,27,0.44)] backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/18 group-hover:shadow-[0_28px_56px_rgba(8,145,178,0.24)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_36%,rgba(255,255,255,0.01)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -right-8 top-5 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(6,182,212,0.22),rgba(37,99,235,0.14))] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/45">
                  {feature.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

function CenterPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -6, 0],
            }
      }
      className="relative z-20 mx-auto w-full max-w-[28rem]"
    >
      <motion.div
        aria-hidden
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [0.985, 1.02, 0.985],
                opacity: [0.4, 0.78, 0.4],
              }
        }
        transition={{
          duration: 4.4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-[-14px] rounded-[2.75rem] border border-cyan-300/18"
      />
      <div className="pointer-events-none absolute inset-[-12px] rounded-[2.8rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_66%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.35rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(8,14,28,0.96),rgba(2,7,18,0.98))] px-7 py-8 text-center shadow-[0_34px_120px_rgba(2,12,27,0.68)] sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-[2.15rem]">
            Unlock Global Markets with Achiever Indices
          </h3>
          <p className="mx-auto mt-4 max-w-[22rem] text-sm leading-7 text-slate-400 sm:text-base">
            Gain worldwide exposure by trading leading indices with Achiever
            today.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndicesFeatureConstellation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.12),transparent_18%),radial-gradient(circle_at_22%_24%,rgba(37,99,235,0.08),transparent_18%),radial-gradient(circle_at_82%_74%,rgba(14,165,233,0.08),transparent_20%)]" />
        <div className="absolute left-1/2 top-[44%] h-[27rem] w-[27rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-[10%] top-[26%] h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-[16%] h-52 w-52 rounded-full bg-cyan-400/8 blur-3xl" />

        {particles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.45)] animate-pulse"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="xl:hidden">
          <CenterPanel />
          <div className="mt-8 flex flex-col gap-4">
            {orbitFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden xl:block xl:min-h-[60rem]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.05]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.06]" />

          <CenterPanel />

          <motion.div
            className="absolute inset-0 will-change-transform"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: orbitDurationInSeconds,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }
            }
          >
            {orbitFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                desktop
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
