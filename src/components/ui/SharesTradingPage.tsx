"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Clock3,
  FileText,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AccountType = "standard" | "ultraLowStandard";

type ShareRow = {
  badgeGradient: string;
  badgeText: string;
  leverage: string;
  lowAsk: Record<AccountType, string>;
  name: string;
  symbol: string;
  avgSpread: Record<AccountType, string>;
};

type InsightCard = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const shareRows: ShareRow[] = [
  {
    symbol: "NFLX",
    name: "Netflix Inc.",
    badgeText: "N",
    badgeGradient: "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)",
    avgSpread: {
      standard: "0.20",
      ultraLowStandard: "0.16",
    },
    lowAsk: {
      standard: "0.10",
      ultraLowStandard: "0.08",
    },
    leverage: "1:5",
  },
  {
    symbol: "BABA",
    name: "Alibaba Group",
    badgeText: "A",
    badgeGradient: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
    avgSpread: {
      standard: "0.25",
      ultraLowStandard: "0.19",
    },
    lowAsk: {
      standard: "0.15",
      ultraLowStandard: "0.10",
    },
    leverage: "1:5",
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    badgeText: "V",
    badgeGradient: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
    avgSpread: {
      standard: "0.15",
      ultraLowStandard: "0.11",
    },
    lowAsk: {
      standard: "0.08",
      ultraLowStandard: "0.05",
    },
    leverage: "1:5",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase",
    badgeText: "J",
    badgeGradient: "linear-gradient(135deg, #475569 0%, #0f172a 100%)",
    avgSpread: {
      standard: "0.18",
      ultraLowStandard: "0.13",
    },
    lowAsk: {
      standard: "0.10",
      ultraLowStandard: "0.07",
    },
    leverage: "1:5",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    badgeText: "W",
    badgeGradient: "linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)",
    avgSpread: {
      standard: "0.12",
      ultraLowStandard: "0.09",
    },
    lowAsk: {
      standard: "0.05",
      ultraLowStandard: "0.03",
    },
    leverage: "1:5",
  },
];

const heroInsights: InsightCard[] = [
  {
    title: "2,000+ global names",
    description:
      "Access well-known companies across multiple regions from one trading account.",
    icon: Building2,
  },
  {
    title: "Up to 1:5 leverage",
    description:
      "Scale market exposure more efficiently while keeping capital deployment flexible.",
    icon: TrendingUp,
  },
  {
    title: "Competitive conditions",
    description:
      "Trade leading brands with transparent pricing and professional execution standards.",
    icon: ShieldCheck,
  },
  {
    title: "Monday to Friday access",
    description:
      "Stay active through core market sessions, earnings catalysts, and sector rotation.",
    icon: Clock3,
  },
];

const whyTradeCards: InsightCard[] = [
  {
    title: "Thousands of Stocks",
    description:
      "Choose from a broad list of popular shares spanning technology, finance, retail, and more.",
    icon: Building2,
  },
  {
    title: "Earn Dividends",
    description:
      "Benefit from dividend adjustments on eligible share CFDs while staying active in the market.",
    icon: CircleDollarSign,
  },
  {
    title: "Earning Reports",
    description:
      "Take positions around earnings season and major company announcements with confidence.",
    icon: FileText,
  },
  {
    title: "Low Fees",
    description:
      "Keep trading costs efficient with competitive spreads and a streamlined pricing model.",
    icon: WalletCards,
  },
];

const accountLabels: Record<AccountType, string> = {
  standard: "Standard",
  ultraLowStandard: "Ultra Low Standard",
};

function CompanyBadge({
  badgeGradient,
  badgeText,
}: Pick<ShareRow, "badgeGradient" | "badgeText">) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.24)]"
      style={{ background: badgeGradient }}
    >
      {badgeText}
    </span>
  );
}

export default function SharesTradingPage() {
  const [accountType, setAccountType] = useState<AccountType>("standard");

  return (
    <div className="w-full">
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,32,0.94)_0%,rgba(5,11,21,0.98)_52%,rgba(6,18,26,0.94)_100%)] px-6 py-14 text-center shadow-[0_36px_120px_rgba(2,8,20,0.36)] sm:px-8 sm:py-16 lg:px-12 lg:py-20 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(248,252,255,0.98)_0%,rgba(239,246,255,0.96)_52%,rgba(255,255,255,0.98)_100%)] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(37,99,235,0.14),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(59,130,246,0.12),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_30%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.12]" />
            <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-cyan-400/16 blur-3xl [.light_&]:bg-sky-300/26" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Global Shares
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
              Discover Share Trading
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300/88 sm:text-lg [.light_&]:text-slate-600">
              Invest in the world&apos;s most popular companies. Buy and sell
              shares of top global brands with competitive conditions.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-full px-7 text-sm"
              >
                <Link href="#popular-shares" className="inline-flex items-center gap-2">
                  Start Trading Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-4 text-left md:grid-cols-2 xl:grid-cols-4">
              {heroInsights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_50px_rgba(2,8,20,0.22)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-white/92 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_28%)]" />
                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white [.light_&]:text-slate-900">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="popular-shares"
        className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,29,0.9)_0%,rgba(6,11,22,0.98)_100%)] px-5 py-8 shadow-[0_32px_100px_rgba(2,8,20,0.28)] backdrop-blur-xl sm:px-6 sm:py-10 lg:px-8 [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_36%)]" />

          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem] [.light_&]:text-slate-950">
                Popular Shares
              </h2>
              <p className="mt-3 text-sm text-slate-400 [.light_&]:text-slate-600">
                The market operates Monday - Friday 06:35 - 20:55 GMT +2
              </p>
            </div>

            <div className="mt-7 flex justify-center">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-sm [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                {(Object.keys(accountLabels) as AccountType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={accountType === type}
                    onClick={() => setAccountType(type)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                      accountType === type
                        ? "bg-[linear-gradient(135deg,#2563eb,#0ea5e9)] text-white shadow-[0_10px_24px_rgba(14,165,233,0.18)]"
                        : "text-slate-400 hover:text-white [.light_&]:text-slate-500 [.light_&]:hover:text-slate-900",
                    )}
                  >
                    {accountLabels[type]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:hidden">
              {shareRows.map((row) => (
                <article
                  key={row.symbol}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_44px_rgba(2,8,20,0.2)] backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-white/96 [.light_&]:shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CompanyBadge
                        badgeGradient={row.badgeGradient}
                        badgeText={row.badgeText}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {row.symbol}
                        </p>
                        <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-600">
                          {row.name}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="h-9 rounded-full px-4 text-xs"
                    >
                      Trade
                    </Button>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Avg Spread
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white [.light_&]:text-slate-900">
                        {row.avgSpread[accountType]}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Low Ask
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white [.light_&]:text-slate-900">
                        {row.lowAsk[accountType]}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Leverage
                      </p>
                      <p className="mt-2 text-sm font-semibold text-cyan-200 [.light_&]:text-blue-700">
                        {row.leverage}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-8 hidden overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:block [.light_&]:border-slate-200 [.light_&]:bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="border-b border-white/10 bg-white/[0.03] [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
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
                    {shareRows.map((row) => (
                      <tr
                        key={row.symbol}
                        className="border-b border-white/8 transition-colors last:border-b-0 hover:bg-white/[0.03] [.light_&]:border-slate-100 [.light_&]:hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <CompanyBadge
                              badgeGradient={row.badgeGradient}
                              badgeText={row.badgeText}
                            />
                            <span className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                              {row.symbol}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300 [.light_&]:text-slate-600">
                          {row.name}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {row.avgSpread[accountType]}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {row.lowAsk[accountType]}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-cyan-200 [.light_&]:text-blue-700">
                          {row.leverage}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Button
                            size="sm"
                            className="h-9 rounded-full px-4 text-xs"
                          >
                            Trade
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 [.light_&]:text-slate-600">
                Ready to discover more instruments?
              </p>
              <div className="mt-4">
                <Button className="h-11 rounded-full px-6 text-sm">
                  Register to See More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[linear-gradient(180deg,#0a182b_0%,#0b2033_52%,#0b1525_100%)] py-20 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_48%,#ffffff_100%)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(9,19,35,0.88)_0%,rgba(8,17,31,0.94)_100%)] px-6 py-10 shadow-[0_28px_80px_rgba(2,8,20,0.24)] sm:px-8 sm:py-12 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.1),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_34%)]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.28)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.1]" />
            </div>

            <div className="relative">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem] [.light_&]:text-slate-950">
                  Why Trade Shares With Us?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300/85 [.light_&]:text-slate-600">
                  Invest in leading companies with the support of a regulated
                  broker, robust pricing, and tools built for decisive market
                  participation.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {whyTradeCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.title}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-cyan-300/12 bg-white/[0.04] p-6 text-left shadow-[0_18px_46px_rgba(2,8,20,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_24px_56px_rgba(14,165,233,0.12)] [.light_&]:border-slate-200 [.light_&]:bg-white/96 [.light_&]:hover:border-blue-200 [.light_&]:hover:shadow-[0_18px_40px_rgba(37,99,235,0.08)]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_28%)]" />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.12)] [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
                          <Icon className="h-5 w-5" />
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

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,29,0.94)_0%,rgba(5,9,20,0.98)_100%)] px-6 py-14 text-center shadow-[0_28px_90px_rgba(2,8,20,0.32)] sm:px-10 [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:shadow-[0_16px_44px_rgba(15,23,42,0.07)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_32%)]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
              <CircleDollarSign className="h-7 w-7" strokeWidth={1.8} />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl [.light_&]:text-slate-950">
              Ready to Trade Shares With Us?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
              Join a truly global and regulated broker to explore your share
              trading potential. Open an account within seconds.
            </p>

            <div className="mt-8">
              <Button className="h-12 rounded-full px-7 text-sm">
                Start Trading Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
