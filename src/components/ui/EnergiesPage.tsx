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
import PageLayout from "@/components/ui/PageLayout";

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
    <PageLayout
      className="[.light_&]:text-slate-900"
      hero={{
        eyebrow: "Energy Markets",
        title: "Energies Trading",
        description:
          "Trade Crude Oil, Brent Oil and Natural Gas. Take advantage of volatility in the energy markets.",
        imageSrc: "/discover/offerings.webp",
        imageAlt:
          "AI generated brokerage offering suite with commodity market visuals and trading modules.",
        stats: [
          { value: "Oil", label: "WTI and Brent" },
          { value: "Gas", label: "Energy CFDs" },
          { value: "1:50", label: "Max leverage" },
        ],
        children: (
          <Button asChild className="h-12 rounded-lg px-7 text-sm">
            <Link href="#energy-commodities">
              Start Trading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ),
      }}
    >
      {/* Prices Table */}
      <section
        id="energy-commodities"
        className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-4"
      >
        <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-bg-secondary/70 px-4 py-8 shadow-[0_32px_100px_rgba(2,8,20,0.4)] backdrop-blur-xl sm:px-6 lg:px-8 [.light_&]:border-blue-100 [.light_&]:bg-surface [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-brand-glow)/0.08,transparent_28%),radial-gradient(circle_at_bottom,var(--color-brand-secondary)/0.06,transparent_36%)]" />

          <div className="relative text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary [.light_&]:text-[#111827]">
              Energy Commodities
            </h2>
            <p className="mt-3 text-sm text-text-secondary [.light_&]:text-slate-500">
              The market operates Monday - Friday 00:05 - 23:58 (GMT + 2)
            </p>

            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setPricingMode("standard")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  pricingMode === "standard"
                    ? "bg-white text-slate-950 shadow-sm [.light_&]:bg-gradient-to-r [.light_&]:from-brand-primary [.light_&]:to-brand-secondary [.light_&]:text-white"
                    : "text-text-secondary hover:text-text-primary [.light_&]:text-slate-600 [.light_&]:hover:text-slate-900"
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setPricingMode("ultra-low-standard")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  pricingMode === "ultra-low-standard"
                    ? "bg-white text-slate-950 shadow-sm [.light_&]:bg-gradient-to-r [.light_&]:from-brand-primary [.light_&]:to-brand-secondary [.light_&]:text-white"
                    : "text-text-secondary hover:text-text-primary [.light_&]:text-slate-600 [.light_&]:hover:text-slate-900"
                }`}
              >
                Ultra Low Standard
              </button>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[26px] border border-white/8 bg-bg-dark/55 [.light_&]:border-blue-100 [.light_&]:bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="border-b border-white/8 bg-white/[0.02] [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
                  <tr className="text-xs uppercase tracking-[0.16em] text-text-secondary [.light_&]:text-slate-500">
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
                          <span className="text-sm font-semibold text-text-primary [.light_&]:text-slate-900">
                            {row.symbol}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-text-secondary [.light_&]:text-slate-600">{row.name}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-text-primary [.light_&]:text-slate-900">{row.avgSpread}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-text-primary [.light_&]:text-slate-900">{row.lowAsk}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-brand-success">{row.leverage}</td>
                      <td className="px-5 py-4 text-right">
                        <Button size="sm" className="h-9 px-4 text-xs">Trade</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="relative mt-8 text-center">
            <p className="text-sm text-text-secondary [.light_&]:text-slate-500">Ready to discover more instruments?</p>
            <div className="mt-4">
              <Button className="h-11 px-6 text-sm">Register To See More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade */}
      <section className="relative w-full bg-bg-secondary/30 py-20 [.light_&]:bg-bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[36px] border border-brand-glow/10 bg-bg-secondary/70 px-6 py-10 text-center shadow-[0_28px_80px_rgba(2,8,20,0.22)] sm:px-8 sm:py-12 [.light_&]:border-blue-100 [.light_&]:bg-surface [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-brand-glow)/0.08,transparent_28%)]" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary [.light_&]:text-[#111827]">
                Why Trade Energies With Us?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary [.light_&]:text-slate-600">
                Enter the world&apos;s most liquid markets with the confidence of having a leading broker at your side.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="group relative overflow-hidden rounded-[24px] border border-brand-glow/10 bg-bg-dark/60 p-6 text-left shadow-[0_18px_50px_rgba(2,8,20,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-glow/25 [.light_&]:border-blue-100 [.light_&]:bg-surface [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
                    >
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-glow/20 bg-bg-secondary text-brand-glow [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-600">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary [.light_&]:text-slate-900">{card.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-text-secondary [.light_&]:text-slate-600">{card.description}</p>
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

      {/* Final CTA */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-20 text-center">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-bg-secondary/70 px-6 py-14 shadow-[0_28px_90px_rgba(2,8,20,0.42)] sm:px-10 [.light_&]:border-blue-100 [.light_&]:bg-surface [.light_&]:ring-1 [.light_&]:ring-blue-100/70">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-brand-glow)/0.12,transparent_28%)]" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-glow/20 bg-bg-secondary text-brand-glow [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-600">
              <Fuel className="h-7 w-7" strokeWidth={1.9} />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl [.light_&]:text-[#111827]">
              Ready to Trade Energies With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary [.light_&]:text-slate-600">
              Join a truly global and regulated broker to explore your trading potential. Open an account within seconds.
            </p>
            <div className="mt-8">
              <Button className="h-12 px-7 text-sm">Start Trading Now</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
