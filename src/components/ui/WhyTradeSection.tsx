"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CandlestickChart,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { Button } from "@/components/ui/Button";

type Feature = {
  eyebrow: string;
  icon: LucideIcon;
  signal: string;
  title: string;
};

const leftFeatures: Feature[] = [
  {
    eyebrow: "Equities & Emerging Markets",
    title: "A wide range of equities & emerging markets available for trading",
    icon: CandlestickChart,
    signal: "Available for trading",
  },
  {
    eyebrow: "Pricing & Execution",
    title: "Competitive pricing & Ultra-fast trading execution",
    icon: WalletCards,
    signal: "Ultra-fast execution",
  },
  {
    eyebrow: "Trading Platforms",
    title: "Powerful trading platforms with advanced tools",
    icon: Smartphone,
    signal: "Advanced tools",
  },
];

const rightFeatures: Feature[] = [
  {
    eyebrow: "Client Support",
    title: "24x5 dedicated multilingual service desk",
    icon: Users,
    signal: "24x5 support",
  },
  {
    eyebrow: "Trading Conditions",
    title: "Access to high leverage and liquidity",
    icon: TrendingUp,
    signal: "Leverage & liquidity",
  },
  {
    eyebrow: "Security",
    title: "Platforms ensure high levels of security by encrypting all data.",
    icon: ShieldCheck,
    signal: "Encrypted data",
  },
];

const particles = [
  { top: "8%", left: "10%", size: 3, duration: "4.5s", delay: "0s" },
  { top: "12%", left: "78%", size: 2, duration: "5.8s", delay: "0.4s" },
  { top: "22%", left: "20%", size: 2, duration: "5.2s", delay: "0.8s" },
  { top: "24%", left: "88%", size: 3, duration: "6.4s", delay: "0.2s" },
  { top: "38%", left: "6%", size: 2, duration: "5.4s", delay: "1.1s" },
  { top: "40%", left: "84%", size: 2, duration: "4.8s", delay: "0.6s" },
  { top: "62%", left: "14%", size: 3, duration: "6.2s", delay: "0.9s" },
  { top: "66%", left: "92%", size: 2, duration: "5.6s", delay: "0.3s" },
  { top: "78%", left: "24%", size: 2, duration: "5s", delay: "1.3s" },
  { top: "82%", left: "72%", size: 3, duration: "6s", delay: "0.7s" },
];

function FeatureCard({
  feature,
  index,
  side,
}: {
  feature: Feature;
  index: number;
  side: "left" | "right";
}) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, var(--color-brand-glow)/0.18, transparent 42%)`;
  const Icon = feature.icon;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width;
    const offsetY = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((offsetX - 0.5) * 14);
    rotateX.set((0.5 - offsetY) * 14);
    glowX.set(offsetX * 100);
    glowY.set(offsetY * 100);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <div className="relative h-full [perspective:1600px]">
      {side === "left" ? (
        <>
          <div className="pointer-events-none absolute -right-28 top-1/2 z-0 hidden h-px w-28 -translate-y-1/2 bg-gradient-to-r from-brand-glow/90 via-brand-secondary/45 to-transparent xl:block [.light_&]:from-brand-primary/90 [.light_&]:via-brand-secondary/40" />
          <div className="pointer-events-none absolute -right-28 top-1/2 z-0 hidden h-6 w-28 -translate-y-1/2 bg-[radial-gradient(circle_at_left,var(--color-brand-glow)/0.38),transparent_68%)] blur-sm xl:block [.light_&]:bg-[radial-gradient(circle_at_left,var(--color-brand-primary)/0.28),transparent_68%)]" />
          <div className="pointer-events-none absolute -right-1 top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-brand-glow shadow-[0_0_14px_var(--color-brand-glow)/0.95] xl:block [.light_&]:bg-brand-primary [.light_&]:shadow-[0_0_12px_var(--color-brand-primary)/0.45]" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -left-28 top-1/2 z-0 hidden h-px w-28 -translate-y-1/2 bg-gradient-to-l from-brand-glow/90 via-brand-secondary/45 to-transparent xl:block [.light_&]:from-brand-primary/90 [.light_&]:via-brand-secondary/40" />
          <div className="pointer-events-none absolute -left-28 top-1/2 z-0 hidden h-6 w-28 -translate-y-1/2 bg-[radial-gradient(circle_at_right,var(--color-brand-glow)/0.38),transparent_68%)] blur-sm xl:block [.light_&]:bg-[radial-gradient(circle_at_right,var(--color-brand-primary)/0.28),transparent_68%)]" />
          <div className="pointer-events-none absolute -left-1 top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-brand-glow shadow-[0_0_14px_var(--color-brand-glow)/0.95] xl:block [.light_&]:bg-brand-primary [.light_&]:shadow-[0_0_12px_var(--color-brand-primary)/0.45]" />
        </>
      )}
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.72,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.05 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative z-10 h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_60px_rgba(2,12,27,0.42)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_32px_75px_rgba(8,145,178,0.28)] [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)] [.light_&]:hover:shadow-[0_22px_44px_rgba(37,99,235,0.16)]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: glow }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.02)_100%)] [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent_34%,rgba(248,250,252,0.4)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-glow/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-brand-primary/70" />
        <div className="pointer-events-none absolute -right-10 top-6 h-28 w-28 rounded-full bg-brand-primary/12 blur-3xl transition-opacity duration-300 group-hover:opacity-90 [.light_&]:bg-brand-secondary/10" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-brand-glow/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90 [.light_&]:bg-brand-secondary/10" />

        <div className="relative z-10 flex h-full flex-col" style={{ transform: "translateZ(48px)" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-300/16 group-hover:text-white [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-600 [.light_&]:shadow-[0_8px_22px_rgba(37,99,235,0.14)] [.light_&]:group-hover:bg-blue-100 [.light_&]:group-hover:text-blue-700">
              <Icon size={22} />
            </div>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-cyan-100/55 [.light_&]:text-blue-700/55">
              0{index + 1}
            </span>
          </div>

          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-cyan-200/70 [.light_&]:text-blue-700/75">
            {feature.eyebrow}
          </p>

          <h3 className="mt-3 text-xl font-semibold leading-8 tracking-[-0.03em] text-white [.light_&]:text-[#111827]">
            {feature.title}
          </h3>

          <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-cyan-100 [.light_&]:text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.95)] [.light_&]:bg-sky-400 [.light_&]:shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {feature.signal}
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function CenterDevice() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[22rem]"
    >
      <div className="pointer-events-none absolute inset-x-6 top-8 h-64 rounded-full bg-[radial-gradient(circle,var(--color-brand-glow)/0.24,transparent_68%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,var(--color-brand-primary)/0.2,transparent_68%)]" />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              y: [0, -10, 0],
            }
        }
        transition={{
          duration: 5.8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="relative"
      >
        <div className="absolute inset-0 translate-y-8 scale-95 rounded-[2.6rem] bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-400/10" />
        <div className="relative rounded-[2.6rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,18,38,0.96),rgba(4,9,22,0.92))] p-3 shadow-[0_36px_100px_rgba(2,12,27,0.62)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] [.light_&]:shadow-[0_22px_54px_rgba(15,23,42,0.08)]">
          <div className="rounded-[2.1rem] border border-white/10 bg-slate-950/80 p-4 [.light_&]:border-gray-200 [.light_&]:bg-white/92">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/55 [.light_&]:text-blue-700/55">
                  Live Trading UI
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white [.light_&]:text-[#111827]">
                  Forex Dashboard
                </h3>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Live
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 [.light_&]:border-gray-200 [.light_&]:bg-blue-50/70">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400 [.light_&]:text-slate-500">
                  Execution
                </p>
                <p className="mt-2 text-lg font-semibold text-white [.light_&]:text-[#111827]">
                  Competitive
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 [.light_&]:border-gray-200 [.light_&]:bg-blue-50/70">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400 [.light_&]:text-slate-500">
                  Support
                </p>
                <p className="mt-2 text-lg font-semibold text-white [.light_&]:text-[#111827]">
                  24x5
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 [.light_&]:border-gray-200 [.light_&]:bg-[linear-gradient(180deg,rgba(248,250,252,0.72),rgba(255,255,255,0.92))]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400 [.light_&]:text-slate-500">
                    Market View
                  </p>
                  <p className="mt-2 text-base font-semibold text-white [.light_&]:text-[#111827]">
                    Global pairs
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-600">
                  <Zap size={18} />
                </div>
              </div>

              <svg
                className="mt-5 h-32 w-full"
                viewBox="0 0 280 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="why-trade-chart-line" x1="0" y1="0" x2="280" y2="0">
                    <stop stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>
                  <linearGradient id="why-trade-chart-fill" x1="140" y1="0" x2="140" y2="120">
                    <stop stopColor="rgba(56,189,248,0.32)" />
                    <stop offset="1" stopColor="rgba(56,189,248,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 105 C 24 100, 44 96, 60 88 C 84 76, 92 54, 118 50 C 140 46, 156 68, 180 64 C 206 60, 218 24, 244 20 C 257 18, 268 22, 280 18 L 280 120 L 0 120 Z"
                  fill="url(#why-trade-chart-fill)"
                />
                <path
                  d="M 0 105 C 24 100, 44 96, 60 88 C 84 76, 92 54, 118 50 C 140 46, 156 68, 180 64 C 206 60, 218 24, 244 20 C 257 18, 268 22, 280 18"
                  stroke="url(#why-trade-chart-line)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="244" cy="20" r="5.5" fill="#A5F3FC" />
              </svg>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Liquidity", "Security", "Platforms"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cyan-100/80 [.light_&]:border-gray-200 [.light_&]:bg-white/90 [.light_&]:text-blue-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute -left-2 top-16 hidden rounded-2xl border border-cyan-300/15 bg-white/[0.06] px-4 py-3 text-left shadow-[0_20px_40px_rgba(2,12,27,0.4)] backdrop-blur-xl sm:block [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
      >
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/55 [.light_&]:text-blue-700/55">
          Service
        </p>
        <p className="mt-2 text-sm font-medium text-white [.light_&]:text-[#111827]">24x5 Desk</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="absolute -right-3 bottom-20 hidden rounded-2xl border border-blue-300/15 bg-white/[0.06] px-4 py-3 text-left shadow-[0_20px_40px_rgba(2,12,27,0.4)] backdrop-blur-xl sm:block [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:shadow-[0_14px_32px_rgba(15,23,42,0.06)]"
      >
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/55 [.light_&]:text-blue-700/55">
          Security
        </p>
        <p className="mt-2 text-sm font-medium text-white [.light_&]:text-[#111827]">Encrypted</p>
      </motion.div>
    </motion.div>
  );
}

export default function WhyTradeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-bg-dark px-6 py-12 shadow-[0_28px_90px_rgba(2,12,27,0.56)] sm:px-8 lg:px-10 lg:py-14 [.light_&]:border [.light_&]:border-gray-200 [.light_&]:bg-surface [.light_&]:shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0))]" />
            <div className="absolute -left-14 top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-400/10" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-sky-300/10" />
            <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-300/8 blur-3xl [.light_&]:bg-blue-200/12" />

            {particles.map((particle) => (
              <span
                key={`${particle.top}-${particle.left}`}
                className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.5)] animate-pulse [.light_&]:bg-blue-200/80 [.light_&]:shadow-[0_0_10px_rgba(37,99,235,0.18)]"
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

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200 [.light_&]:text-blue-700">
              Premium Trading Infrastructure
            </p>
            <h2 className="mt-5 bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-3xl font-semibold tracking-[-0.05em] text-transparent sm:text-4xl lg:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
              Why Trade Forex With Us
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base [.light_&]:text-slate-600">
              Built to deliver the clarity, speed, support, and protection that
              serious traders expect from a high-performance trading platform.
            </p>
          </motion.div>

          <div className="relative mt-14 xl:min-h-[40rem]">
            <svg
              aria-hidden
              viewBox="0 0 1200 640"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
            >
              <defs>
                <filter id="why-trade-pulse-glow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.circle
                cx="600"
                cy="320"
                r="9"
                fill="#A5F3FC"
                filter="url(#why-trade-pulse-glow)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              />
              <motion.circle
                cx="600"
                cy="320"
                r="28"
                fill="none"
                stroke="rgba(103,232,249,0.35)"
                strokeWidth="2"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                      scale: [1, 1.45, 1],
                      opacity: [0.6, 0.12, 0.6],
                    }
                }
                transition={{
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </svg>

            <div className="relative z-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem_minmax(0,1fr)] xl:items-center xl:gap-8">
              <div className="order-2 grid gap-5 sm:grid-cols-2 xl:order-1 xl:grid-cols-1">
                {leftFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                    index={index}
                    side="left"
                  />
                ))}
              </div>

              <div className="order-1 xl:order-2">
                <CenterDevice />
              </div>

              <div className="order-3 grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
                {rightFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                    index={index + leftFeatures.length}
                    side="right"
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-14 max-w-3xl rounded-[1.75rem] border border-white/8 bg-white/[0.04] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:px-8 [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:shadow-[0_18px_36px_rgba(15,23,42,0.05)]"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl [.light_&]:text-[#111827]">
              We Do It
              <br />
              In all Over the World
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base [.light_&]:text-slate-600">
              We trades in all kind of Stocks, Currencies, Commodities, Metals,
              Instruments &amp; All kind of potential assets which will gives
              the profit
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild className="w-full sm:w-auto h-12 rounded-full px-7">
                <Link href="/markets/account-types" className="inline-flex items-center gap-2">
                  Explore All
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
