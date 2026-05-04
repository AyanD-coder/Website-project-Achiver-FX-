import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gem, ShieldCheck, Wallet, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/precious-metals");

type MetalQuote = {
  symbol: string;
  instrument: string;
  market: string;
  price: string;
  changePercent: string;
  changeValue: string;
  badge: string;
  spark: number[];
};

type SetupStep = {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

type Insight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const metalQuotes: MetalQuote[] = [
  {
    symbol: "XAUUSD",
    instrument: "GOLD SPOT / U.S. DOLLAR",
    market: "Spot Gold",
    price: "4,692.39",
    changePercent: "-0.01%",
    changeValue: "(0.64)",
    badge: "Au",
    spark: [0.08, 0.07, 0.09, 0.08, 0.12, 0.16, 0.22, 0.28, 0.26, 0.34, 0.48, 0.56, 0.52, 0.6, 0.58, 0.44],
  },
  {
    symbol: "PLATINUM",
    instrument: "PLATINUM (XPTUSD)",
    market: "Platinum",
    price: "1,985.05",
    changePercent: "-1.02%",
    changeValue: "(20.50)",
    badge: "Pt",
    spark: [0.12, 0.14, 0.2, 0.24, 0.18, 0.22, 0.26, 0.24, 0.28, 0.34, 0.42, 0.56, 0.5, 0.48, 0.52, 0.44],
  },
  {
    symbol: "XAGUSD",
    instrument: "SILVER / U.S. DOLLAR",
    market: "Spot Silver",
    price: "74.793",
    changePercent: "-0.87%",
    changeValue: "(0.66)",
    badge: "Ag",
    spark: [0.04, 0.05, 0.06, 0.08, 0.09, 0.12, 0.16, 0.18, 0.22, 0.26, 0.38, 0.52, 0.42, 0.46, 0.4, 0.36],
  },
  {
    symbol: "XPDUSD",
    instrument: "CFDS ON PALLADIUM",
    market: "Palladium",
    price: "1,450.385",
    changePercent: "-0.09%",
    changeValue: "(1.32)",
    badge: "Pd",
    spark: [0.16, 0.15, 0.18, 0.22, 0.2, 0.24, 0.26, 0.3, 0.36, 0.46, 0.56, 0.52, 0.66, 0.58, 0.62, 0.54],
  },
];

const setupSteps: SetupStep[] = [
  {
    number: "1",
    title: "Register & Create Account",
    description:
      "Choose an account type & Register with Achiever Global Markets LTD.",
  },
  {
    number: "2",
    title: "Verify Your Identity",
    description: "Upload your documents to verify your account.",
    highlighted: true,
  },
  {
    number: "3",
    title: "Deposit Wallet Funding",
    description: "Login to your Client Portal and Deposit Funds.",
  },
  {
    number: "4",
    title: "Begin Trade Journey",
    description: "Start Trading on more than 165 instruments.",
    highlighted: true,
  },
];

const insights: Insight[] = [
  {
    title: "Safe-Haven Assets",
    description:
      "Gold, silver, palladium and platinum often attract demand during periods of economic uncertainty.",
    icon: ShieldCheck,
  },
  {
    title: "Inflation Hedge",
    description:
      "Precious metals can help traders balance exposure when inflation and market volatility rise.",
    icon: Gem,
  },
  {
    title: "Portfolio Diversification",
    description:
      "Adding metals to your strategy can broaden exposure beyond traditional currency and index positions.",
    icon: Wallet,
  },
];

function Sparkline({ points, id }: { points: number[]; id: string }) {
  const width = 320;
  const height = 116;
  const linePath = points
    .map((value, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - value * 88 - 10;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      aria-hidden="true"
      className="h-32 w-full"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.44)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </linearGradient>
        <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${id}-fill)`} />
      <path
        d={linePath}
        stroke={`url(#${id}-stroke)`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PreciousMetalsPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Precious Metals",
        title: "Start trading with precious metals",
        description:
          "Trade gold, silver, palladium, and platinum with platform tools and market insight designed for fast-moving macro conditions.",
        imageSrc: "/discover/analysis-report.webp",
        imageAlt:
          "AI generated trading research desk with precious metals market charts.",
        actions: [
          { href: "#metals-board", label: "View Metals Board" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "Gold", label: "XAUUSD" },
          { value: "Silver", label: "XAGUSD" },
          { value: "Metals", label: "Spot CFDs" },
        ],
      }}
    >
        <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-4">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-cyan-300/10 bg-[#050b16] shadow-[0_30px_90px_rgba(2,8,20,0.38)] sm:min-h-[460px] lg:h-full [.light_&]:border-blue-100 [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <Image
                src="/markets/precious-metal.png"
                alt="Gold, silver, and platinum bars with market chart data."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,20,0.24),rgba(2,8,20,0.02)),linear-gradient(180deg,rgba(2,8,20,0.08),rgba(2,8,20,0.22))]" />
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,16,30,0.88)_0%,rgba(5,11,24,0.98)_100%)] px-6 py-8 shadow-[0_30px_90px_rgba(2,8,20,0.38)] sm:px-8 sm:py-10 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_30%)]" />
              <div className="relative flex flex-col items-start">
                <span className="inline-flex items-center rounded-full border border-brand-glow/20 bg-brand-glow/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-brand-glow [.light_&]:border-brand-primary/20 [.light_&]:bg-brand-primary/5 [.light_&]:text-brand-primary">
                  Get To Know
                </span>
                <h2 className="mt-4 bg-gradient-to-b from-white via-cyan-100 to-slate-200 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
                  About Precious Metals
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 [.light_&]:text-slate-600">
                  <p>
                    Precious metals like gold, silver, palladium and platinum
                    offer a unique opportunity for forex traders to diversify
                    their portfolios. These metals often serve as safe-haven
                    assets during economic uncertainty, influencing currency
                    values.
                  </p>
                  <p>
                    Trading precious metals can provide a hedge against
                    inflation and market volatility. With MetaTrader 5, you can
                    easily incorporate precious metals into your trading
                    strategy, leveraging market fluctuations to maximize
                    returns.
                  </p>
                  <p>
                    Key factors influencing precious metal prices include
                    economic indicators, geopolitical events, and market
                    sentiment. Staying informed about these factors can help
                    traders make informed decisions and capitalize on market
                    opportunities.
                  </p>
                </div>

                <div className="mt-8">
                  <Button asChild className="h-12 px-7 text-sm">
                    <Link href="#metals-board">
                      Start Trading Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {insights.map((insight) => {
                    const Icon = insight.icon;

                    return (
                      <div
                        key={insight.title}
                        className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-white"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,24,44,0.96),rgba(8,15,31,0.92))] text-cyan-100 shadow-[0_0_20px_rgba(56,189,248,0.12)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] [.light_&]:text-blue-600 [.light_&]:shadow-[0_8px_20px_rgba(37,99,235,0.1)]">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                          {insight.title}
                        </h3>
                        <p className="mt-2 text-xs leading-6 text-slate-400 [.light_&]:text-slate-600">
                          {insight.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="metals-board" className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-8">
          <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,14,28,0.94)_0%,rgba(5,10,22,0.98)_100%)] p-5 shadow-[0_36px_100px_rgba(2,8,20,0.42)] sm:p-6 lg:p-8 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_32%)]" />
            <div className="relative grid gap-5 md:grid-cols-2">
              {metalQuotes.map((quote) => (
                <article
                  key={quote.symbol}
                  className="group overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,18,34,0.88)_0%,rgba(7,14,26,0.96)_100%)] p-5 shadow-[0_20px_44px_rgba(2,8,20,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)] [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.18),rgba(37,99,235,0.28))] text-sm font-bold tracking-[0.12em] text-sky-200 [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,#e0f2fe_0%,#bae6fd_100%)] [.light_&]:text-sky-700">
                        {quote.badge}
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white [.light_&]:text-slate-900">
                          {quote.symbol}
                        </div>
                        <div className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 [.light_&]:text-slate-500">
                          {quote.instrument}
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.18em] text-slate-400 [.light_&]:border-blue-100 [.light_&]:bg-slate-50 [.light_&]:text-slate-500">
                      TV
                    </span>
                  </div>

                  <div className="mt-6 flex items-end gap-3">
                    <div className="text-4xl font-semibold tracking-tight text-white [.light_&]:text-slate-900">
                      {quote.price}
                    </div>
                    <div className="pb-1 text-sm font-medium text-red-400">
                      {quote.changePercent} {quote.changeValue}
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[22px] border border-white/6 bg-[linear-gradient(180deg,rgba(9,16,30,0.72),rgba(8,14,28,0.28))] px-3 pt-4 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)]">
                    <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
                    <Sparkline points={quote.spark} id={quote.symbol.toLowerCase()} />
                    <div className="mt-[-0.4rem] flex justify-between px-1 pb-3 text-[0.68rem] uppercase tracking-[0.16em] text-slate-500 [.light_&]:text-slate-500">
                      <span>May</span>
                      <span>Aug</span>
                      <span>2026</span>
                      <span>Apr</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-6">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex rounded-full border border-blue-200/20 bg-blue-500/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue-300 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
                Quick Setup
              </span>
              <h2 className="mt-4 max-w-md bg-gradient-to-b from-white via-cyan-100 to-slate-200 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
                Diversify Your Portfolio Beyond Traditional Securities
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                Start trading with Achiever Financials Ltd
              </p>
              <div className="mt-8">
                <Button className="h-11 px-6 text-sm">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {setupSteps.map((step, index) => (
                <article
                  key={step.number}
                  className={`relative overflow-hidden rounded-[28px] border p-6 shadow-[0_24px_60px_rgba(2,8,20,0.22)] transition-all duration-300 hover:-translate-y-1 ${
                    step.highlighted
                      ? "border-blue-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.94)_100%)] text-slate-900 shadow-[0_22px_56px_rgba(59,130,246,0.18)]"
                      : "border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,16,30,0.92)_0%,rgba(5,11,24,0.98)_100%)] text-white"
                  } ${index % 2 === 0 ? "sm:translate-y-4" : ""}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%)] opacity-80" />
                  <div className="relative">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/80">
                      #{step.number}
                    </div>
                    <div
                      className={`mt-3 text-5xl font-black tracking-[-0.08em] ${
                        step.highlighted ? "text-blue-600" : "text-blue-400"
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3
                      className={`mt-5 text-xl font-semibold ${
                        step.highlighted ? "text-blue-700" : "text-cyan-100"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-6 ${
                        step.highlighted ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
