"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChartCandlestick,
  Clock3,
  Coins,
  Globe2,
  MonitorSmartphone,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

type TradeAdvantage = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const tradeAdvantages: TradeAdvantage[] = [
  {
    title: "Access Global Leaders",
    description:
      "Trade flagship benchmarks across the US, UK, Europe, and Asia from one focused market view.",
    icon: Globe2,
  },
  {
    title: "Round-the-Clock Trading",
    description:
      "Stay responsive through major global sessions with extended index market coverage.",
    icon: Clock3,
  },
  {
    title: "Flexible Leverage",
    description:
      "Amplify market exposure efficiently while keeping more control over capital deployment.",
    icon: Coins,
  },
  {
    title: "Two-Way Opportunity",
    description:
      "Position for rising or falling index momentum with strategies built for both directions.",
    icon: ChartCandlestick,
  },
  {
    title: "Advanced Platforms",
    description:
      "Use fast, intuitive tools with charting, execution controls, and cross-market visibility.",
    icon: MonitorSmartphone,
  },
];

const liveMarketSnapshot = [
  { label: "US 500", value: "+1.18%" },
  { label: "DAX 40", value: "+0.76%" },
  { label: "FTSE 100", value: "+0.42%" },
  { label: "NASDAQ", value: "+0.92%" },
];

export default function IndicesWhyTradeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full px-4 pb-24 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,10,22,0.98),rgba(4,8,18,0.94))] p-4 shadow-[0_36px_120px_rgba(2,8,18,0.42)] sm:p-6 lg:p-8 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,249,255,0.96))] [.light_&]:shadow-[0_36px_100px_rgba(14,165,233,0.08)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.08),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(186,230,253,0.24),transparent_34%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:4.75rem_4.75rem] [.light_&]:opacity-[0.12]" />
            <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/30" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/26" />
          </div>

          <div className="relative z-10 grid items-start gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-10">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[32rem]"
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -4, 0],
                        }
                  }
                  transition={{
                    duration: 5.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-[1.7rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(9,15,28,0.7),rgba(5,10,20,0.82))] px-5 py-5 shadow-[0_22px_56px_rgba(8,20,40,0.24)] backdrop-blur-md sm:px-6 [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,249,255,0.94))] [.light_&]:shadow-[0_22px_56px_rgba(14,165,233,0.08)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_36%,rgba(255,255,255,0.02)_100%)] [.light_&]:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(240,249,255,0.6)_36%,rgba(255,255,255,0.2)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="pointer-events-none absolute right-3 top-3 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl [.light_&]:bg-sky-300/30" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/12 bg-cyan-400/10 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-cyan-100/75 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/70" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)] [.light_&]:bg-sky-500" />
                          </span>
                          Live Market
                        </div>
                        <h3 className="mt-4 text-xl font-semibold tracking-[-0.045em] text-white sm:text-2xl [.light_&]:text-slate-900">
                          Global Indices Snapshot
                        </h3>
                      </div>

                      <div className="hidden rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 backdrop-blur-xl sm:block [.light_&]:border-sky-100 [.light_&]:bg-white/86">
                        <svg
                          viewBox="0 0 132 44"
                          className="h-10 w-28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 30C16 27 20 21 30 18C40 15 44 23 54 20C64 17 70 8 80 10C90 12 96 24 106 21C114 19 120 12 128 8"
                            stroke="url(#snapshot-line)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="snapshot-line"
                              x1="4"
                              y1="8"
                              x2="128"
                              y2="32"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#67e8f9" />
                              <stop offset="1" stopColor="#2563eb" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {liveMarketSnapshot.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-white/88"
                        >
                          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-slate-500 [.light_&]:text-slate-500">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold tracking-[-0.03em] text-cyan-100 sm:text-base [.light_&]:text-sky-700">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.9),rgba(5,9,20,0.96))] p-5 shadow-[0_18px_48px_rgba(2,8,18,0.26)] sm:p-6 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,249,255,0.94))] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:3.3rem_3.3rem] [.light_&]:opacity-[0.1]" />
                    <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-cyan-400/12 blur-3xl [.light_&]:bg-sky-300/28" />
                    <div className="absolute bottom-[10%] right-[6%] h-36 w-36 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/26" />
                  </div>

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/55 [.light_&]:text-sky-700/70">
                        Indices Opportunity
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-[2rem] [.light_&]:text-slate-900">
                        One view into global market momentum
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-cyan-400/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/80 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)] [.light_&]:bg-sky-500" />
                      Live Flow
                    </div>
                  </div>

                  <div className="relative mt-6 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,24,0.94),rgba(5,8,18,0.88))] p-4 shadow-[0_18px_40px_rgba(2,8,18,0.24)] sm:p-5 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,250,255,0.94))] [.light_&]:shadow-[0_16px_36px_rgba(14,165,233,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_42%)]" />

                    <div className="relative z-10">
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#050912]/88 px-3 py-4 sm:px-4 [.light_&]:border-sky-100 [.light_&]:bg-[#f9fdff]">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                        <svg
                          viewBox="0 0 560 260"
                          className="h-52 w-full"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient
                              id="why-trade-line"
                              x1="36"
                              y1="22"
                              x2="530"
                              y2="220"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#67e8f9" />
                              <stop offset="1" stopColor="#2563eb" />
                            </linearGradient>
                            <linearGradient
                              id="why-trade-area"
                              x1="280"
                              y1="40"
                              x2="280"
                              y2="230"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="rgba(56,189,248,0.34)" />
                              <stop offset="1" stopColor="rgba(56,189,248,0)" />
                            </linearGradient>
                          </defs>

                          {Array.from({ length: 5 }).map((_, index) => (
                            <line
                              key={`row-${index}`}
                              x1="18"
                              x2="542"
                              y1={38 + index * 44}
                              y2={38 + index * 44}
                              stroke="rgba(148,163,184,0.16)"
                              strokeDasharray="5 8"
                            />
                          ))}

                          {Array.from({ length: 6 }).map((_, index) => (
                            <line
                              key={`column-${index}`}
                              y1="20"
                              y2="234"
                              x1={48 + index * 90}
                              x2={48 + index * 90}
                              stroke="rgba(148,163,184,0.12)"
                              strokeDasharray="5 8"
                            />
                          ))}

                          <path
                            d="M36 188C76 170 92 156 126 122C160 88 190 78 226 102C262 126 286 166 324 154C362 142 380 86 418 74C456 62 484 82 520 54V234H36V188Z"
                            fill="url(#why-trade-area)"
                          />
                          <path
                            d="M36 188C76 170 92 156 126 122C160 88 190 78 226 102C262 126 286 166 324 154C362 142 380 86 418 74C456 62 484 82 520 54"
                            stroke="url(#why-trade-line)"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />

                          {[36, 126, 226, 324, 418, 520].map((point, index) => {
                            const pointsY = [188, 122, 102, 154, 74, 54];
                            return (
                              <g key={`marker-${point}`}>
                                <circle
                                  cx={point}
                                  cy={pointsY[index]}
                                  r="8"
                                  fill="rgba(6,182,212,0.2)"
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

                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Macro trends", "24/5 sessions", "Multi-market access"].map(
                            (label) => (
                              <span
                                key={label}
                                className="rounded-full border border-cyan-300/12 bg-cyan-400/8 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/75 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700"
                              >
                                {label}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.9),rgba(4,8,18,0.94))] shadow-[0_20px_50px_rgba(2,8,18,0.24)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,250,255,0.94))] [.light_&]:shadow-[0_20px_50px_rgba(14,165,233,0.08)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%)] [.light_&]:bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.64),transparent_32%)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src="/indices-dummy-visual.svg"
                      alt="Indices market dummy visual"
                      fill
                      sizes="(min-width: 1280px) 32rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.88),rgba(5,8,18,0.94))] p-6 shadow-[0_26px_70px_rgba(2,8,18,0.32)] sm:p-8 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,249,255,0.96))] [.light_&]:shadow-[0_26px_70px_rgba(14,165,233,0.08)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_34%,rgba(255,255,255,0.02)_100%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.24)_34%,rgba(255,255,255,0.08)_100%)]" />

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-cyan-300/14 bg-cyan-400/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/75 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                  Trade Indices
                </span>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
                  Why Trade Indices{" "}
                  <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-500 bg-clip-text text-transparent [.light_&]:from-sky-600 [.light_&]:via-cyan-500 [.light_&]:to-blue-600">
                    with Achiever?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
                  Trade global markets with greater efficiency through index
                  CFDs. With broad market exposure, you can access entire
                  sectors or national economies using just a single position
                  ideal for those who want to follow big-picture trends instead
                  of analyzing individual stocks. The high liquidity and
                  extended trading hours of indices ensure smoother order
                  execution and more flexibility, allowing you to react to
                  market movements across different time zones. Plus, with
                  leverage through CFDs, you can control larger positions using
                  less capital, aiming for greater returns though it&apos;s
                  important to manage the increased risk that comes with it.
                </p>

                <div className="mt-8 grid gap-4">
                  {tradeAdvantages.map(({ description, icon: Icon, title }) => (
                    <div
                      key={title}
                      className="group flex gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/18 hover:bg-cyan-400/[0.05] hover:shadow-[0_20px_44px_rgba(8,145,178,0.16)] sm:px-5 [.light_&]:border-sky-100 [.light_&]:bg-white/86 [.light_&]:hover:border-sky-200 [.light_&]:hover:bg-sky-50/80 [.light_&]:hover:shadow-[0_18px_40px_rgba(14,165,233,0.1)]"
                    >
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(37,99,235,0.2))] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.86))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_26px_rgba(14,165,233,0.1)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-white [.light_&]:text-slate-900">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-[0.98rem] [.light_&]:text-slate-600">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <Button
                    asChild
                    variant="primary"
                    className="relative z-10 h-12 w-full min-w-[13rem] justify-center rounded-full px-7 text-sm text-white shadow-[0_16px_42px_rgba(56,189,248,0.24)] hover:scale-[1.03] hover:shadow-[0_22px_48px_rgba(56,189,248,0.32)] sm:w-fit sm:shrink-0"
                  >
                    <Link
                      href="/platform"
                      aria-label="Start trading now on the Achiever platform"
                    >
                      <span>Start Trading Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                    </Link>
                  </Button>

                  <p className="max-w-md text-sm leading-7 text-slate-500 md:text-right [.light_&]:text-slate-600">
                    Built for traders who want cleaner macro exposure, stronger
                    execution tools, and a more focused way to trade global
                    market direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
