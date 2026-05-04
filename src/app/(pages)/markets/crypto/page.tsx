import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CircleDollarSign,
  Coins,
  LockKeyhole,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/crypto");

type CryptoRow = {
  symbol: string;
  name: string;
  avgSpread: string;
  lowAsk: string;
  leverage: string;
  accent: string;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: typeof Activity;
};

const cryptoRows: CryptoRow[] = [
  {
    symbol: "BTCUSD",
    name: "Bitcoin vs US Dollar",
    avgSpread: "25.00",
    lowAsk: "15.00",
    leverage: "1:50",
    accent: "from-[#f7931a] to-[#ffb85c]",
  },
  {
    symbol: "ETHUSD",
    name: "Ethereum vs US Dollar",
    avgSpread: "1.50",
    lowAsk: "0.80",
    leverage: "1:50",
    accent: "from-[#627eea] to-[#8ea2ff]",
  },
  {
    symbol: "SOLUSD",
    name: "Solana vs US Dollar",
    avgSpread: "0.05",
    lowAsk: "0.03",
    leverage: "1:20",
    accent: "from-[#14f195] to-[#9945ff]",
  },
  {
    symbol: "ADAUSD",
    name: "Cardano vs US Dollar",
    avgSpread: "0.002",
    lowAsk: "0.001",
    leverage: "1:20",
    accent: "from-[#2a6df4] to-[#7ba7ff]",
  },
  {
    symbol: "XRPUSD",
    name: "Ripple vs US Dollar",
    avgSpread: "0.003",
    lowAsk: "0.002",
    leverage: "1:20",
    accent: "from-[#8a94a6] to-[#c4ccd8]",
  },
];

const featureCards: FeatureCard[] = [
  {
    title: "24/7 Trading",
    description:
      "Trade major cryptocurrencies 24 hours a day, 7 days a week.",
    icon: Activity,
  },
  {
    title: "Deep Liquidity",
    description:
      "Reliable liquidity with stable pricing and enhanced execution quality.",
    icon: Waves,
  },
  {
    title: "Wide Range",
    description:
      "Access a diverse crypto basket including Bitcoin, Ethereum, and altcoins.",
    icon: Coins,
  },
  {
    title: "Secure Wallet",
    description:
      "Trade with confidence using our regulated and secure environment.",
    icon: LockKeyhole,
  },
];

export default function CryptoPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Crypto Markets",
        title: "Discover Crypto Derivatives Trading",
        description: "Trade Crypto derivatives including Bitcoin at real-time prices with unparalleled conditions.",
        imageSrc: "/discover/trading-tools.webp",
        imageAlt:
          "AI generated professional trading toolkit with crypto market dashboard modules.",
        stats: [
          { value: "24/7", label: "Trading access" },
          { value: "1:50", label: "Max leverage" },
          { value: "Crypto CFDs", label: "Market type" },
        ],
        children: (
          <Button asChild className="h-12 rounded-lg px-7 text-sm">
            <Link href="#crypto-prices">
              Start Trading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ),
      }}
    >
        <section
          id="crypto-prices"
          className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-8"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,23,0.82)_0%,rgba(5,8,18,0.96)_100%)] px-4 py-8 shadow-[0_32px_100px_rgba(2,8,20,0.4)] backdrop-blur-xl sm:px-6 lg:px-8 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_26%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_34%)]" />

            <div className="relative text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                Crypto Market Prices
              </h2>
              <p className="mt-3 text-sm text-slate-400 [.light_&]:text-slate-600">
                The market operates Monday - Friday 00:01 - 23:58 (GMT + 2)
              </p>

              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_8px_18px_rgba(255,255,255,0.08)] [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white">
                  Standard
                </span>
                <span className="px-4 py-2 text-sm font-medium text-slate-400 [.light_&]:text-slate-500">
                  Ultra Low Standard
                </span>
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
                    {cryptoRows.map((row) => (
                      <tr
                        key={row.symbol}
                        className="border-b border-white/8 last:border-b-0 [.light_&]:border-blue-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${row.accent} text-[10px] font-black tracking-[0.06em] text-white shadow-[0_10px_20px_rgba(15,23,42,0.22)]`}
                            >
                              {row.symbol.slice(0, 3)}
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
                <Button asChild className="h-11 px-6 text-sm">
                  <Link href="/register">Register to See More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#0a182b_0%,#0b2033_100%)] py-20 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_48%,#ffffff_100%)]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(9,19,35,0.82)_0%,rgba(8,17,31,0.9)_100%)] px-6 py-10 text-center shadow-[0_28px_80px_rgba(2,8,20,0.22)] sm:px-8 sm:py-12 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_34%)]" />

              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                  Why Trade Crypto With Us?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  Enter the world&apos;s most liquid market with the confidence of
                  having a leading broker at your side.
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
                <CircleDollarSign className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl [.light_&]:text-[#111827]">
                Ready to Trade Forex With Us?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
                Join a truly global and regulated broker to explore your forex
                trading potential. Open an account within seconds.
              </p>

              <div className="mt-8">
                <Button asChild className="h-12 px-7 text-sm">
                  <Link href="/register">Start Trading Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
