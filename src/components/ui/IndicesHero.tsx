"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Landmark,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const heroSignals = [
  { label: "Global Benchmarks", value: "30+", detail: "tradable indices" },
  { label: "Sector Rotation", value: "24/5", detail: "market coverage" },
  { label: "Execution Speed", value: "<50ms", detail: "optimized routing" },
];

const dashboardStats = [
  { label: "S&P 500", value: "5,514.9", change: "+1.18%" },
  { label: "NASDAQ 100", value: "18,942.2", change: "+2.41%" },
  { label: "DAX 40", value: "18,421.7", change: "+0.76%" },
];

const sectorCards = [
  { label: "Technology", value: "68%", icon: TrendingUp },
  { label: "Financials", value: "54%", icon: Landmark },
  { label: "Industrials", value: "49%", icon: BarChart3 },
];

const marketChips = [
  { label: "NASDAQ", className: "left-8 top-[54%]" },
  { label: "S&P 500", className: "right-14 top-[62%]" },
];

export default function IndicesHero({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.12),transparent_22%),linear-gradient(180deg,rgba(4,8,20,0.92)_0%,rgba(3,8,20,0.78)_48%,rgba(4,8,20,0)_100%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.16),transparent_22%),linear-gradient(180deg,rgba(248,252,255,0.96)_0%,rgba(240,249,255,0.82)_48%,rgba(245,251,255,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />
        <div className="absolute left-[12%] top-14 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/30" />
        <div className="absolute right-[10%] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/28" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-3xl [.light_&]:bg-cyan-200/30" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-400/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80 shadow-[0_0_22px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-white/85 [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_30px_rgba(56,189,248,0.12)]">
            {compact ? "Indices Dashboard" : "Trade Indices"}
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
            {compact ? "Track the global sector pulse" : "Trade Sectors with "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-500 bg-clip-text text-transparent [.light_&]:from-sky-600 [.light_&]:via-cyan-500 [.light_&]:to-blue-600">
              {compact ? "" : "Achiever Indices"}
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
            {compact
              ? "Use a clean dashboard view to compare global benchmarks, sector movement, and trading-session context."
              : "Gain broad market exposure by trading global indices. With Achiever, you can access major stock markets worldwide, allowing you to speculate on the performance of entire sectors or economies with a single trade."}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
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
              <Link href="/discover/analysis-report">Demo Trading</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center backdrop-blur-xl lg:text-left [.light_&]:border-sky-100 [.light_&]:bg-white/82 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                  {signal.label}
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 lg:justify-start">
                  <span className="text-xl font-semibold tracking-[-0.04em] text-white [.light_&]:text-slate-900">
                    {signal.value}
                  </span>
                  <span className="text-sm text-slate-400 [.light_&]:text-slate-600">{signal.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[40rem]"
        >
          <div className="pointer-events-none absolute inset-x-10 bottom-6 h-[78%] rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(56,189,248,0.16),rgba(37,99,235,0.04))] blur-3xl [.light_&]:bg-[linear-gradient(180deg,rgba(56,189,248,0.18),rgba(59,130,246,0.08))]" />

          {marketChips.map((chip, index) => (
            <motion.div
              key={chip.label}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: index === 0 ? [0, -6, 0] : [0, 6, 0],
                    }
              }
              transition={{
                duration: 5.2 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute z-30 hidden rounded-full border border-cyan-300/12 bg-cyan-400/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/80 shadow-[0_16px_34px_rgba(2,8,18,0.26)] backdrop-blur-xl md:block [.light_&]:border-sky-200/90 [.light_&]:bg-white/86 [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_32px_rgba(14,165,233,0.12)]",
                chip.className,
              )}
            >
              {chip.label}
            </motion.div>
          ))}

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative z-10 rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_36px_90px_rgba(2,8,18,0.38)] backdrop-blur-2xl sm:p-5 [.light_&]:border-sky-100 [.light_&]:bg-white/72 [.light_&]:shadow-[0_30px_70px_rgba(14,165,233,0.12)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_26%,rgba(255,255,255,0.02)_100%)] [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.3)_26%,rgba(255,255,255,0.1)_100%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:2.8rem_2.8rem] [.light_&]:opacity-[0.1]" />

            <div className="relative z-10">
              <div className="flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.82),rgba(3,8,20,0.92))] p-4 shadow-[0_24px_60px_rgba(2,8,18,0.34)] sm:p-5 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,249,255,0.96))] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/60 [.light_&]:text-sky-700/70">
                      Indices Dashboard
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl [.light_&]:text-slate-900">
                      Global sector pulse
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-400/10 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/80 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)] [.light_&]:bg-sky-500" />
                    Realtime
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {dashboardStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-white/86"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500 [.light_&]:text-slate-500">
                        {stat.label}
                      </p>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <span className="text-lg font-semibold tracking-[-0.04em] text-white [.light_&]:text-slate-900">
                          {stat.value}
                        </span>
                        <span className="text-sm font-medium text-cyan-200 [.light_&]:text-sky-600">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.5rem] border border-white/8 bg-[#060b15]/80 p-4 [.light_&]:border-sky-100 [.light_&]:bg-[#f9fdff]/95">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white [.light_&]:text-slate-900">Sector performance</p>
                      <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-600">
                        One-trade visibility across multiple global benchmarks.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.22em] text-slate-400 [.light_&]:border-sky-100 [.light_&]:bg-sky-50 [.light_&]:text-slate-600">
                      <Globe2 className="h-3.5 w-3.5 text-cyan-200 [.light_&]:text-sky-600" />
                      New York / London / Frankfurt
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-3 py-4 sm:px-4 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(240,249,255,0.7))]">
                    <svg
                      viewBox="0 0 560 240"
                      className="h-44 w-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="indices-line"
                          x1="42"
                          y1="24"
                          x2="496"
                          y2="212"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#7dd3fc" />
                          <stop offset="1" stopColor="#0ea5e9" />
                        </linearGradient>
                        <linearGradient
                          id="indices-area"
                          x1="280"
                          y1="36"
                          x2="280"
                          y2="228"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="rgba(56,189,248,0.38)" />
                          <stop offset="1" stopColor="rgba(56,189,248,0)" />
                        </linearGradient>
                      </defs>

                      {Array.from({ length: 5 }).map((_, index) => (
                        <line
                          key={`h-${index}`}
                          x1="20"
                          x2="540"
                          y1={38 + index * 42}
                          y2={38 + index * 42}
                          stroke="rgba(148,163,184,0.18)"
                          strokeDasharray="5 8"
                        />
                      ))}

                      {Array.from({ length: 6 }).map((_, index) => (
                        <line
                          key={`v-${index}`}
                          y1="24"
                          y2="214"
                          x1={44 + index * 96}
                          x2={44 + index * 96}
                          stroke="rgba(148,163,184,0.12)"
                          strokeDasharray="5 8"
                        />
                      ))}

                      <path
                        d="M42 184C74 170 94 164 124 142C154 120 176 108 210 116C244 124 264 158 302 148C340 138 358 90 394 84C430 78 448 110 482 102C508 96 523 72 540 58V214H42V184Z"
                        fill="url(#indices-area)"
                      />
                      <path
                        d="M42 184C74 170 94 164 124 142C154 120 176 108 210 116C244 124 264 158 302 148C340 138 358 90 394 84C430 78 448 110 482 102C508 96 523 72 540 58"
                        stroke="url(#indices-line)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      {[42, 124, 210, 302, 394, 482, 540].map((point, index) => {
                        const pointsY = [184, 142, 116, 148, 84, 102, 58];
                        return (
                          <g key={`point-${point}`}>
                            <circle
                              cx={point}
                              cy={pointsY[index]}
                              r="8"
                              fill="rgba(6,182,212,0.22)"
                            />
                            <circle
                              cx={point}
                              cy={pointsY[index]}
                              r="4"
                              fill="#cffafe"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {sectorCards.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-white/86"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-white [.light_&]:text-slate-900">{label}</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/12 bg-cyan-400/10 text-cyan-200 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-600">
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/6 [.light_&]:bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                          style={{ width: value }}
                        />
                      </div>
                      <p className="mt-3 text-sm text-slate-400 [.light_&]:text-slate-600">{value} relative strength</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-2 left-1/2 h-10 w-[82%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/30" />
        </motion.div>
      </div>
    </section>
  );
}
