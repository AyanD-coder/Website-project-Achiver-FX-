"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flame, TrendingUp, Wheat } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

const visualNodes = [
  { Icon: Flame, className: "left-5 top-6" },
  { Icon: TrendingUp, className: "right-5 top-10" },
  { Icon: Wheat, className: "bottom-6 left-8" },
];

export default function CommoditiesQuickAccessSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full overflow-hidden px-4 pb-24 pt-2 sm:px-6 lg:px-8 lg:pb-28 lg:pt-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_60%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#020617_0%,#020817_100%)] p-6 shadow-[0_28px_80px_rgba(2,8,18,0.28)] sm:p-8 lg:p-10 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.94))] [.light_&]:shadow-[0_24px_56px_rgba(15,23,42,0.06)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_78%_34%,rgba(37,99,235,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_24%_28%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_78%_34%,rgba(59,130,246,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.1]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent [.light_&]:via-sky-300/80" />
          </div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-sm"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 6.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative mx-auto aspect-[0.96] w-full"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/12 blur-3xl [.light_&]:bg-sky-300/22" />

                {visualNodes.map(({ Icon, className }, index) => (
                  <motion.div
                    key={className}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 4.8 + index * 0.4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className={`absolute z-20 ${className}`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/14 bg-white/[0.05] text-cyan-100 shadow-[0_16px_30px_rgba(2,8,18,0.26)] backdrop-blur-md [.light_&]:border-sky-200 [.light_&]:bg-white/92 [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_28px_rgba(14,165,233,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </motion.div>
                ))}

                <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_24px_50px_rgba(2,8,18,0.34)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_20px_46px_rgba(15,23,42,0.06)]">
                  <div className="h-full rounded-[1.65rem] border border-white/8 bg-[linear-gradient(180deg,rgba(5,10,22,0.96),rgba(5,9,18,0.88))] p-4 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,249,255,0.92))]">
                    <div className="flex items-center justify-between">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)] [.light_&]:bg-sky-500 [.light_&]:shadow-[0_0_10px_rgba(14,165,233,0.35)]" />
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/15 [.light_&]:bg-slate-300" />
                        <span className="h-2 w-2 rounded-full bg-white/15 [.light_&]:bg-slate-300" />
                        <span className="h-2 w-2 rounded-full bg-white/15 [.light_&]:bg-slate-300" />
                      </div>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-3 py-4 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.78))]">
                      <svg
                        viewBox="0 0 280 190"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-44 w-full"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="commodities-mid-line"
                            x1="24"
                            y1="24"
                            x2="250"
                            y2="166"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7dd3fc" />
                            <stop offset="1" stopColor="#0ea5e9" />
                          </linearGradient>
                          <linearGradient
                            id="commodities-mid-fill"
                            x1="140"
                            y1="36"
                            x2="140"
                            y2="178"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="rgba(56,189,248,0.22)" />
                            <stop offset="1" stopColor="rgba(56,189,248,0)" />
                          </linearGradient>
                        </defs>

                        {Array.from({ length: 4 }).map((_, index) => (
                          <line
                            key={`h-${index}`}
                            x1="18"
                            x2="262"
                            y1={34 + index * 36}
                            y2={34 + index * 36}
                            stroke="rgba(148,163,184,0.16)"
                            strokeDasharray="4 8"
                          />
                        ))}

                        {Array.from({ length: 5 }).map((_, index) => (
                          <line
                            key={`v-${index}`}
                            x1={32 + index * 54}
                            x2={32 + index * 54}
                            y1="24"
                            y2="166"
                            stroke="rgba(148,163,184,0.12)"
                            strokeDasharray="4 8"
                          />
                        ))}

                        <path
                          d="M24 136C44 126 58 118 78 94C98 70 114 62 136 72C158 82 166 120 186 116C206 112 214 72 230 66C242 62 248 70 256 54V176H24V136Z"
                          fill="url(#commodities-mid-fill)"
                        />
                        <path
                          d="M24 136C44 126 58 118 78 94C98 70 114 62 136 72C158 82 166 120 186 116C206 112 214 72 230 66C242 62 248 70 256 54"
                          stroke="url(#commodities-mid-line)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />

                        {[24, 78, 136, 186, 230, 256].map((x, index) => {
                          const y = [136, 94, 72, 116, 66, 54][index];
                          return (
                            <g key={`${x}-${y}`}>
                              <circle
                                cx={x}
                                cy={y}
                                r="6"
                                fill="rgba(6,182,212,0.18)"
                              />
                              <circle cx={x} cy={y} r="3.5" fill="#cffafe" />
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-14 rounded-2xl border border-white/8 bg-white/[0.03] [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80" />
                      <div className="h-14 rounded-2xl border border-white/8 bg-white/[0.03] [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80" />
                      <div className="h-14 rounded-2xl border border-white/8 bg-white/[0.03] [.light_&]:border-sky-100 [.light_&]:bg-sky-50/80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-7 shadow-[0_18px_40px_rgba(2,8,18,0.22)] backdrop-blur-sm sm:p-8 [.light_&]:border-sky-100 [.light_&]:bg-white/88 [.light_&]:shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
            >
              <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-400/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80 shadow-[0_0_20px_rgba(56,189,248,0.1)] [.light_&]:border-sky-200 [.light_&]:bg-white/90 [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_30px_rgba(14,165,233,0.12)]">
                QUICK ACCESS
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl [.light_&]:text-slate-950">
                Smart Commodity Trading Made Simple
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Access global markets, manage risk, and seize opportunities
                with confidence.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  className="h-12 rounded-full px-7 text-sm shadow-[0_16px_38px_rgba(56,189,248,0.24)] hover:scale-[1.03] hover:shadow-[0_22px_44px_rgba(56,189,248,0.32)]"
                >
                  <Link href="/register">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
