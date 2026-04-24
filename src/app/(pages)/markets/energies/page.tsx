"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Fuel,
  Gauge,
  Globe2,
  Newspaper,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

type EnergyRow = {
  symbol: string;
  name: string;
  avgSpread: string;
  lowAsk: string;
  leverage: string;
  badge: string;
  accent: string;
};

type PricingMode = "standard" | "ultra-low-standard";

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const standardEnergyRows: EnergyRow[] = [
  {
    symbol: "USOIL",
    name: "US Crude Oil",
    avgSpread: "0.05",
    lowAsk: "0.04",
    leverage: "1:50",
    badge: "US",
    accent: "from-[#60A5FA] to-[#2563EB]",
  },
  {
    symbol: "UKOIL",
    name: "Brent Crude Oil",
    avgSpread: "0.06",
    lowAsk: "0.05",
    leverage: "1:50",
    badge: "UK",
    accent: "from-[#F59E0B] to-[#D97706]",
  },
  {
    symbol: "NGAS",
    name: "Natural Gas",
    avgSpread: "0.01",
    lowAsk: "0.008",
    leverage: "1:20",
    badge: "NG",
    accent: "from-[#14B8A6] to-[#0EA5E9]",
  },
];

const ultraLowStandardEnergyRows: EnergyRow[] = [
  {
    symbol: "USOIL",
    name: "US Crude Oil",
    avgSpread: "0.04",
    lowAsk: "0.03",
    leverage: "1:50",
    badge: "US",
    accent: "from-[#60A5FA] to-[#2563EB]",
  },
  {
    symbol: "UKOIL",
    name: "Brent Crude Oil",
    avgSpread: "0.05",
    lowAsk: "0.04",
    leverage: "1:50",
    badge: "UK",
    accent: "from-[#F59E0B] to-[#D97706]",
  },
  {
    symbol: "NGAS",
    name: "Natural Gas",
    avgSpread: "0.008",
    lowAsk: "0.005",
    leverage: "1:20",
    badge: "NG",
    accent: "from-[#14B8A6] to-[#0EA5E9]",
  },
];

const featureCards: FeatureCard[] = [
  {
    title: "High Volatility",
    description:
      "Trade energy instruments that can react quickly to macro, geopolitical, and inventory-driven market shifts.",
    icon: TrendingUp,
  },
  {
    title: "Global Benchmarking",
    description:
      "Track Brent and WTI benchmarks that influence institutional pricing across worldwide crude markets.",
    icon: Globe2,
  },
  {
    title: "Low Margin",
    description:
      "Build energy exposure with efficient margin requirements designed for fast-moving commodity opportunities.",
    icon: Gauge,
  },
  {
    title: "News Trading",
    description:
      "React to supply updates, production cuts, and inventory releases that frequently move energy prices.",
    icon: Newspaper,
  },
];

export default function EnergiesPage() {
  const [pricingMode, setPricingMode] =
    useState<PricingMode>("ultra-low-standard");
  const energyRows =
    pricingMode === "ultra-low-standard"
      ? ultraLowStandardEnergyRows
      : standardEnergyRows;

  return (
    <>
      <Navbar solidLightModeAtTop />
      <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-[#040814] pt-24 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_38%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_28%,#060b15_64%,#070d17_100%)] [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_34%,#f8fafc_68%,#ffffff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),radial-gradient(circle_at_50%_38%,rgba(20,184,166,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_50%_38%,rgba(20,184,166,0.06),transparent_30%)]" />
        </div>

        <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-14 pt-16 text-center text-white [.light_&]:text-[#111827]">
          <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sky-200 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
            Energy Markets
          </span>

          <h1 className="mt-6 max-w-4xl bg-gradient-to-b from-white via-sky-100 to-slate-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl [.light_&]:from-[#111827] [.light_&]:via-[#1d4ed8] [.light_&]:to-[#0ea5e9]">
            Energies Trading
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
            Trade Crude Oil, Brent Oil and Natural Gas. Take advantage of
            volatility in the energy markets.
          </p>

          <div className="mt-8">
            <Button asChild className="h-12 px-7 text-sm">
              <Link href="#energy-commodities">
                Start Trading Forex
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section
          id="energy-commodities"
          className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-4"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,23,0.84)_0%,rgba(5,8,18,0.96)_100%)] px-4 py-8 shadow-[0_32px_100px_rgba(2,8,20,0.4)] backdrop-blur-xl sm:px-6 lg:px-8 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(20,184,166,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_26%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_34%)]" />

            <div className="relative text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                Energy Commodities
              </h2>
              <p className="mt-3 text-sm text-slate-400 [.light_&]:text-slate-600">
                The market operates Monday - Friday 00:05 - 23:58 (GMT + 2)
              </p>

              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
                <button
                  type="button"
                  onClick={() => setPricingMode("standard")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    pricingMode === "standard"
                      ? "bg-white text-slate-950 shadow-[0_8px_18px_rgba(255,255,255,0.08)] [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white"
                      : "text-slate-400 hover:text-white [.light_&]:text-slate-500 [.light_&]:hover:text-blue-700"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setPricingMode("ultra-low-standard")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    pricingMode === "ultra-low-standard"
                      ? "bg-white text-slate-950 shadow-[0_8px_18px_rgba(255,255,255,0.08)] [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white"
                      : "text-slate-400 hover:text-white [.light_&]:text-slate-500 [.light_&]:hover:text-blue-700"
                  }`}
                >
                  Ultra Low Standard
                </button>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[26px] border border-white/8 bg-slate-950/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] [.light_&]:border-blue-100 [.light_&]:bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="border-b border-white/8 bg-white/[0.02] [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
                    <tr className="text-xs uppercase tracking-[0.16em] text-slate-400 [.light_&]:text-slate-500">
                      <th className="px-5 py-4 font-semibold">Instrument</th>
                      <th className="px-5 py-4 font-semibold">Name</th>
                      <th className="px-5 py-4 font-semibold">Average Spread</th>
                      <th className="px-5 py-4 font-semibold">Low Ask</th>
                      <th className="px-5 py-4 font-semibold">Max Leverage</th>
                      <th className="px-5 py-4 text-right font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {energyRows.map((row) => (
                      <tr
                        key={row.symbol}
                        className="border-b border-white/8 last:border-b-0 [.light_&]:border-blue-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${row.accent} text-[10px] font-black tracking-[0.06em] text-white shadow-[0_10px_20px_rgba(15,23,42,0.22)]`}
                            >
                              {row.badge}
                            </span>
                            <span className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                              {row.symbol}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300 [.light_&]:text-slate-600">
                          {row.name}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {row.avgSpread}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {row.lowAsk}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-emerald-300 [.light_&]:text-blue-700">
                          {row.leverage}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Button size="sm" className="h-9 px-4 text-xs">
                            Trade
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative mt-8 text-center">
              <p className="text-sm text-slate-400 [.light_&]:text-slate-600">
                Ready to discover more instruments?
              </p>
              <div className="mt-4">
                <Button className="h-11 px-6 text-sm">Register To See More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#0a1c2b_0%,#0b2233_100%)] py-20 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_48%,#ffffff_100%)]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(9,20,35,0.86)_0%,rgba(8,17,31,0.92)_100%)] px-6 py-10 text-center shadow-[0_28px_80px_rgba(2,8,20,0.22)] sm:px-8 sm:py-12 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(20,184,166,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_34%)]" />

              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                  Why Trade Energies With Us?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  Enter the world&apos;s most liquid markets with the confidence
                  of having a leading broker at your side.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {featureCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <article
                        key={card.title}
                        className="group relative overflow-hidden rounded-[24px] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(12,23,39,0.88)_0%,rgba(7,15,28,0.94)_100%)] p-6 text-left shadow-[0_18px_50px_rgba(2,8,20,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_26px_60px_rgba(14,165,233,0.12)] [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.06)] [.light_&]:hover:border-blue-200 [.light_&]:hover:ring-blue-200/70 [.light_&]:hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent_38%)]" />
                        <div className="relative flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,24,44,0.96),rgba(8,15,31,0.92))] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.12)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] [.light_&]:text-blue-600 [.light_&]:shadow-[0_10px_24px_rgba(37,99,235,0.1)]">
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white [.light_&]:text-slate-900">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-20 text-center">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,29,0.94)_0%,rgba(5,9,20,0.98)_100%)] px-6 py-14 shadow-[0_28px_90px_rgba(2,8,20,0.42)] sm:px-10 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_16px_44px_rgba(15,23,42,0.07)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_32%)]" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,24,44,0.96),rgba(8,15,31,0.92))] text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.98))] [.light_&]:text-blue-600 [.light_&]:shadow-[0_10px_26px_rgba(37,99,235,0.12)]">
                <Fuel className="h-7 w-7" strokeWidth={1.9} />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl [.light_&]:text-[#111827]">
                Ready to Trade Forex With Us?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
                Join a truly global and regulated broker to explore your forex
                trading potential. Open an account within seconds.
              </p>

              <div className="mt-8">
                <Button className="h-12 px-7 text-sm">Start Trading Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
