"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CandlestickChart,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  number: string;
  positionClassName: string;
  title: string;
};

type CounterStat = {
  description: string;
  label: string;
  suffix?: string;
  value: number;
};

const features: Feature[] = [
  {
    number: "01",
    title: "A wide range of equities & emerging markets available for trading",
    icon: CandlestickChart,
    positionClassName: "left-0 top-8",
  },
  {
    number: "02",
    title: "Competitive pricing & Ultra-fast trading execution",
    icon: WalletCards,
    positionClassName: "left-8 top-[34%]",
  },
  {
    number: "03",
    title: "Powerful trading platforms with advanced tools",
    icon: Smartphone,
    positionClassName: "right-0 top-10",
  },
  {
    number: "04",
    title: "24x5 dedicated multilingual service desk",
    icon: Users,
    positionClassName: "right-8 top-[35%]",
  },
  {
    number: "05",
    title: "Access to high leverage and liquidity",
    icon: TrendingUp,
    positionClassName: "bottom-8 left-[10%]",
  },
  {
    number: "06",
    title: "Platforms ensure high levels of security by encrypting all data",
    icon: ShieldCheck,
    positionClassName: "bottom-10 right-[10%]",
  },
];

const counterStats: CounterStat[] = [
  {
    value: 60,
    suffix: "+",
    label: "Forex Instruments",
    description: "Built to track broad market opportunity from the same trading ecosystem.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Commodities",
    description: "Coverage expands beyond shares with access to key commodity markets.",
  },
  {
    value: 150,
    suffix: "+",
    label: "Equities",
    description: "Trade a deeper catalogue of listed shares across major global exchanges.",
  },
];

const connectionPaths = [
  "M232 134C342 158 412 214 494 292",
  "M266 344C362 342 430 338 500 338",
  "M968 146C850 172 786 222 706 292",
  "M936 350C836 348 768 344 700 342",
  "M346 678C458 610 508 528 552 446",
  "M854 676C742 608 694 528 648 446",
];

const particles = [
  { top: "9%", left: "10%", size: 2, duration: "5.4s", delay: "0s" },
  { top: "12%", left: "78%", size: 3, duration: "6s", delay: "0.5s" },
  { top: "24%", left: "18%", size: 2, duration: "5.7s", delay: "1s" },
  { top: "28%", left: "88%", size: 2, duration: "6.3s", delay: "0.3s" },
  { top: "48%", left: "6%", size: 3, duration: "5.1s", delay: "0.7s" },
  { top: "52%", left: "92%", size: 2, duration: "5.9s", delay: "0.4s" },
  { top: "72%", left: "14%", size: 2, duration: "5.4s", delay: "1.1s" },
  { top: "78%", left: "82%", size: 3, duration: "6.2s", delay: "0.8s" },
];

function FeatureCard({
  feature,
  index,
  className,
  shouldReduceMotion,
}: {
  feature: Feature;
  index: number;
  className?: string;
  shouldReduceMotion: boolean;
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.03 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_24px_52px_rgba(2,8,18,0.32)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/18 hover:shadow-[0_30px_60px_rgba(14,165,233,0.18)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_22px_46px_rgba(14,165,233,0.14)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)] opacity-90 [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.18)_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-sky-300/80" />
      <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/16" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,182,212,0.22),rgba(37,99,235,0.14))] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.16)] transition-transform duration-300 group-hover:scale-105 [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_30px_rgba(14,165,233,0.12)]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/45 [.light_&]:text-sky-700/45">
            {feature.number}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-200 [.light_&]:text-slate-700">{feature.title}</p>
      </div>
    </motion.article>
  );
}

function CenterVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[24rem]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_65%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.07] [.light_&]:border-sky-200/60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.09] [.light_&]:border-sky-200/75" />

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{
          duration: 6.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div className="absolute -right-10 top-10 hidden w-[12.25rem] rotate-[12deg] rounded-[2rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(13,22,42,0.92),rgba(6,12,24,0.92))] p-3 shadow-[0_28px_60px_rgba(2,8,18,0.34)] sm:block [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_20px_44px_rgba(14,165,233,0.1)]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#050914]/92 p-3 [.light_&]:border-sky-100 [.light_&]:bg-white/90">
            <div className="flex items-center justify-between">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/55 [.light_&]:text-sky-700/60">
                Trade Ticket
              </p>
              <Activity className="h-4 w-4 text-cyan-200 [.light_&]:text-sky-600" />
            </div>

            <div className="mt-4 space-y-2.5">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-2 [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  Watchlist
                </p>
                <p className="mt-1 text-sm font-semibold text-white [.light_&]:text-slate-900">AAPL / NVDA</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-2 [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  Spread
                </p>
                <p className="mt-1 text-sm font-semibold text-white [.light_&]:text-slate-900">0.2 pts</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-2 [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  Routing
                </p>
                <p className="mt-1 text-sm font-semibold text-white [.light_&]:text-slate-900">Instant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-[15.5rem] rounded-[2.7rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(14,24,46,0.96),rgba(6,12,24,0.96))] p-3 shadow-[0_36px_100px_rgba(2,8,18,0.5)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_24px_56px_rgba(14,165,233,0.12)]">
          <div className="rounded-[2.2rem] border border-white/10 bg-[#050914]/94 p-4 [.light_&]:border-sky-100 [.light_&]:bg-white/92">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/55 [.light_&]:text-sky-700/60">
                  Equities OS
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white [.light_&]:text-slate-900">
                  Mobile trading
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-400/10 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cyan-100/80 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.72)] [.light_&]:bg-sky-500 [.light_&]:shadow-[0_0_10px_rgba(14,165,233,0.35)]" />
                Live
              </div>
            </div>

            <div className="mt-4 rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.78))]">
              <div className="flex items-center justify-between">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-slate-500 [.light_&]:text-slate-500">
                  Market pulse
                </p>
                <BarChart3 className="h-4 w-4 text-cyan-200 [.light_&]:text-sky-600" />
              </div>

              <svg
                viewBox="0 0 240 132"
                className="mt-4 h-32 w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="equities-phone-line" x1="16" y1="24" x2="224" y2="114">
                    <stop stopColor="#7dd3fc" />
                    <stop offset="1" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="equities-phone-fill" x1="120" y1="28" x2="120" y2="128">
                    <stop stopColor="rgba(56,189,248,0.28)" />
                    <stop offset="1" stopColor="rgba(56,189,248,0)" />
                  </linearGradient>
                </defs>

                <path
                  d="M16 98C34 90 42 86 58 72C74 58 88 48 106 52C124 56 134 78 152 76C170 74 182 44 198 40C210 38 218 44 224 32V128H16V98Z"
                  fill="url(#equities-phone-fill)"
                />
                <path
                  d="M16 98C34 90 42 86 58 72C74 58 88 48 106 52C124 56 134 78 152 76C170 74 182 44 198 40C210 38 218 44 224 32"
                  stroke="url(#equities-phone-line)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {[16, 58, 106, 152, 198, 224].map((point, index) => {
                  const values = [98, 72, 52, 76, 40, 32];
                  return (
                    <g key={point}>
                      <circle cx={point} cy={values[index]} r="6" fill="rgba(6,182,212,0.18)" />
                      <circle cx={point} cy={values[index]} r="3.5" fill="#cffafe" />
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  Liquidity
                </p>
                <p className="mt-2 text-sm font-semibold text-white [.light_&]:text-slate-900">High depth</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  Security
                </p>
                <p className="mt-2 text-sm font-semibold text-white [.light_&]:text-slate-900">Encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CounterCard({
  delay = 0,
  shouldReduceMotion,
  start,
  stat,
}: {
  delay?: number;
  shouldReduceMotion: boolean;
  start: boolean;
  stat: CounterStat;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!start || hasAnimated) {
      return;
    }

    if (shouldReduceMotion) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setDisplayValue(stat.value);
        setHasAnimated(true);
      });

      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let animationFrame = 0;
    let timeoutId = 0;
    let animationStart = 0;
    const duration = 2600;

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const animateValue = (timestamp: number) => {
      if (animationStart === 0) {
        animationStart = timestamp;
      }

      const progress = Math.min((timestamp - animationStart) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setDisplayValue(Math.round(stat.value * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateValue);
        return;
      }

      setDisplayValue(stat.value);
      setHasAnimated(true);
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(animateValue);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, hasAnimated, shouldReduceMotion, start, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.64,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_44px_rgba(2,8,18,0.26)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/18 hover:shadow-[0_28px_56px_rgba(14,165,233,0.16)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_22px_48px_rgba(14,165,233,0.12)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_42%)] opacity-90 [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.16)_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-80 [.light_&]:via-sky-300/80" />
      <div className="pointer-events-none absolute -right-10 top-5 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/16" />

      <div className="relative z-10">
        <div className="font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl [.light_&]:text-slate-900">
          {displayValue}
          {stat.suffix}
        </div>
        <p className="mt-3 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/75 [.light_&]:text-sky-700/80">
          {stat.label}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">{stat.description}</p>
      </div>
    </motion.div>
  );
}

function EquitiesCounterStrip({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView || !sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative mt-20 w-full">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,24,0.92),rgba(3,8,20,0.98))] px-6 py-10 shadow-[0_28px_80px_rgba(2,8,18,0.34)] sm:px-8 sm:py-12 lg:px-10 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.94))] [.light_&]:shadow-[0_22px_54px_rgba(15,23,42,0.06)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
          <div className="absolute left-[12%] top-8 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/18" />
          <div className="absolute right-[10%] bottom-6 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/16" />
        </div>

        <div className="relative z-10">
          <div className="grid gap-5 md:grid-cols-3">
            {counterStats.map((stat, index) => (
              <CounterCard
                key={stat.label}
                delay={index * 140}
                shouldReduceMotion={shouldReduceMotion}
                start={isInView}
                stat={stat}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EquitiesFeatureOrbit({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full overflow-hidden px-4 pb-24 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(37,99,235,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.32)_1px,transparent_1px)] [background-size:4.4rem_4.4rem] [.light_&]:opacity-[0.12]" />
        <div className="absolute left-[10%] top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/18" />
        <div className="absolute right-[8%] top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/16" />
        <div className="absolute left-1/2 top-[54%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-cyan-200/24" />

        {particles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.42)] animate-pulse [.light_&]:bg-sky-400/50 [.light_&]:shadow-[0_0_10px_rgba(14,165,233,0.18)]"
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
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-cyan-100/65 [.light_&]:text-sky-700/70">
            {compact ? "Equities Workflow" : "Trade Equities"}
          </p>
          <h2 className="mt-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl [.light_&]:from-slate-950 [.light_&]:to-sky-700">
            {compact ? "A clearer way to scan equity opportunities" : "Trade CFD Shares"}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 [.light_&]:text-slate-600">
            {compact
              ? "Review platform access, pricing, execution, support, and security signals before moving into regional equity markets."
              : "Trade in the world's largest companies equities across the UK, EU and the US. We offer popular shares listed on the NYSE, NASDAQ, London Stock Exchange and others"}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 rounded-full px-7 text-sm shadow-[0_16px_40px_rgba(56,189,248,0.28)] hover:scale-[1.03] hover:shadow-[0_22px_46px_rgba(56,189,248,0.34)]"
            >
              <Link href="/platform">
                Live Trading
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-7 text-sm text-white hover:scale-[1.03] hover:text-white [.light_&]:text-slate-700 [.light_&]:hover:text-slate-900"
            >
              <Link href="/tools/analysis-report">Demo Trading</Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-14 xl:hidden">
          <CenterVisual shouldReduceMotion={shouldReduceMotion} />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.number}
                feature={feature}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-16 hidden xl:block xl:min-h-[52rem]">
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.05] [.light_&]:border-sky-200/50" />
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08] [.light_&]:border-sky-200/70" />

          <svg
            aria-hidden="true"
            viewBox="0 0 1200 820"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {connectionPaths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke="rgba(125,211,252,0.18)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 -translate-y-1/2">
            <CenterVisual shouldReduceMotion={shouldReduceMotion} />
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={cn("absolute z-30 w-[16rem]", feature.positionClassName)}
            >
              <FeatureCard
                feature={feature}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          ))}
        </div>

        <EquitiesCounterStrip shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}
