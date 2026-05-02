"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BarChart3,
  CandlestickChart,
  Globe2,
  Zap,
} from "lucide-react";

const trackedMarkets = [
  {
    icon: CandlestickChart,
    title: "Forex",
    description: "Follow major and minor FX pairs with a clean momentum read.",
  },
  {
    icon: BarChart3,
    title: "Indices",
    description: "Spot risk-on and risk-off moves across benchmark indices.",
  },
  {
    icon: Globe2,
    title: "Commodities",
    description: "Track energy, metals, and macro-sensitive commodity flows.",
  },
];

const heroSignals = [
  "Multi-asset coverage",
  "Real-time market pulse",
  "Built for mobile and desktop",
];

export default function MarketOverviewHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#040814] pb-16 pt-32 font-light text-white antialiased md:pb-24 md:pt-36"
      style={{
        background: "linear-gradient(135deg, #040814 0%, #08111f 48%, #0b1528 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(37,99,235,0.14),transparent_22%),radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.08),transparent_32%)]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl md:h-96 md:w-96" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-cyan-200">
            Live Multi-Asset Market Overview
          </span>
          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-light leading-tight md:text-5xl lg:text-7xl">
            Read Global Market Momentum with{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              AI-assisted clarity
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-300 md:text-xl">
            Monitor forex, indices, equities, commodities, and precious metals
            from one responsive overview built to surface trend shifts faster.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/discover/analysis-report"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(56,189,248,0.28)] relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-cyan-400/30 sm:w-auto"
            >
              View Analysis Report
            </Link>
            <a
              href="#market-highlights"
              className="flex w-full items-center justify-center gap-2 text-slate-300 transition-colors hover:text-white sm:w-auto"
            >
              <span>See tracked markets</span>
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur"
              >
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative mx-auto mb-6 flex h-44 w-44 items-center justify-center md:mb-8 md:h-56 md:w-56">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80"
                alt="Earth viewed from space"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-cover opacity-80"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(56,189,248,0.14)]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-slate-950/10 to-slate-950/60" />
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/45 px-4 py-3 text-left text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md md:px-6">
              <span>Market Pulse Dashboard</span>
              <span>New York | London | Tokyo</span>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=80"
              alt="Trading desk with live market charts"
              width={1800}
              height={1100}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/20 to-transparent" />
            <div
              id="market-highlights"
              className="absolute inset-x-0 bottom-0 z-20 grid gap-3 p-4 md:grid-cols-3 md:p-6"
            >
              {trackedMarkets.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 text-left backdrop-blur-xl"
                >
                  <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-medium text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-3 text-left text-sm text-slate-300 md:mt-10 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
            <span className="mb-2 inline-flex items-center gap-2 text-cyan-200">
              <Zap className="h-4 w-4" />
              Fast read
            </span>
            <p>Highlight trend direction, volatility pockets, and key sessions at a glance.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
            <span className="mb-2 inline-flex items-center gap-2 text-cyan-200">
              <BarChart3 className="h-4 w-4" />
              Broad coverage
            </span>
            <p>Keep equities, indices, FX, and commodities in one decision-ready snapshot.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
            <span className="mb-2 inline-flex items-center gap-2 text-cyan-200">
              <Globe2 className="h-4 w-4" />
              Global context
            </span>
            <p>Designed to stay readable across desktop layouts and smaller mobile screens.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
