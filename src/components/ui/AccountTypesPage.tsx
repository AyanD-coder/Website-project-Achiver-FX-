import {
  BarChart3,
  ChartCandlestick,
  Gift,
  Users,
  WalletCards,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import PageLayout from "@/components/ui/PageLayout";

type AccountStat = {
  label: string;
  value: string;
};

type AccountPlan = {
  description: string;
  eyebrow: string;
  icon: LucideIcon;
  name: string;
  stats: AccountStat[];
};

const accountPlans: AccountPlan[] = [
  {
    name: "No Deposit Bonus",
    description: "Start trading with a bonus without making a deposit",
    eyebrow: "Bonus Access",
    icon: Gift,
    stats: [
      { label: "Minimum Deposit", value: "$0" },
      { label: "Spread", value: "From 0.3" },
      { label: "Commission", value: "0" },
      { label: "Leverage", value: "1:500" },
    ],
  },
  {
    name: "ECN",
    description: "Direct market pricing with fixed commission",
    eyebrow: "Raw Pricing",
    icon: BarChart3,
    stats: [
      { label: "Minimum Deposit", value: "$10,000" },
      { label: "Spread", value: "From 0.0" },
      { label: "Commission", value: "4" },
      { label: "Leverage", value: "1:300" },
    ],
  },
  {
    name: "Pro",
    description: "Instant or market execution with tighter spreads",
    eyebrow: "Active Traders",
    icon: ChartCandlestick,
    stats: [
      { label: "Minimum Deposit", value: "$1,000" },
      { label: "Spread", value: "From 0.5" },
      { label: "Commission", value: "0" },
      { label: "Leverage", value: "1:500" },
    ],
  },
  {
    name: "Superfast",
    description: "Instant or market execution with Superfast Speed",
    eyebrow: "Execution Focus",
    icon: Zap,
    stats: [
      { label: "Minimum Deposit", value: "$500" },
      { label: "Spread", value: "From 0.5" },
      { label: "Commission", value: "0" },
      { label: "Leverage", value: "1:500" },
    ],
  },
  {
    name: "Social",
    description: "Made for all traders, Best for IB",
    eyebrow: "Community Ready",
    icon: Users,
    stats: [
      { label: "Minimum Deposit", value: "$100" },
      { label: "Spread", value: "From 0.2" },
      { label: "Commission", value: "0" },
      { label: "Leverage", value: "1:500" },
    ],
  },
  {
    name: "Standard",
    description: "Low minimum deposit with no commission",
    eyebrow: "Everyday Trading",
    icon: WalletCards,
    stats: [
      { label: "Minimum Deposit", value: "$100" },
      { label: "Spread", value: "From 0.5" },
      { label: "Commission", value: "0" },
      { label: "Leverage", value: "1:500" },
    ],
  },
];

function AccountTypeCard({
  plan,
}: {
  plan: AccountPlan;
}) {
  const Icon = plan.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-bg-secondary p-6 shadow-[0_26px_80px_rgba(2,8,20,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/35 hover:shadow-[0_30px_90px_rgba(14,165,233,0.18)] [.light_&]:border-blue-100 [.light_&]:bg-surface [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_14px_36px_rgba(15,23,42,0.07)] [.light_&]:hover:border-blue-200 [.light_&]:hover:ring-blue-200/70 [.light_&]:hover:shadow-[0_20px_48px_rgba(37,99,235,0.14)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_30%)] opacity-80 [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.4),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent [.light_&]:via-blue-300/80" />
      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
              {plan.eyebrow}
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                {plan.name}
              </h2>
              <p className="mt-2 max-w-[24ch] text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                {plan.description}
              </p>
            </div>
          </div>

          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-[linear-gradient(180deg,rgba(10,24,44,0.96),rgba(8,15,31,0.92))] text-sky-100 shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.98))] [.light_&]:text-blue-600 [.light_&]:shadow-[0_10px_26px_rgba(37,99,235,0.12)]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_72%)] [.light_&]:bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_72%)]" />
            <Icon className="relative h-5 w-5" strokeWidth={1.9} />
          </div>
        </div>

        <div className="mb-6 rounded-[22px] border border-white/10 bg-slate-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] [.light_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_20px_rgba(37,99,235,0.05)]">
          <dl className="space-y-3">
            {plan.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-b-0 last:pb-0 [.light_&]:border-slate-200"
              >
                <dt className="text-sm text-slate-400 [.light_&]:text-slate-600">
                  {stat.label}
                </dt>
                <dd className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Button className="mt-auto h-11 w-full text-sm font-semibold">
          Select Plan
        </Button>
      </div>
    </article>
  );
}

export default function AccountTypesPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Account Types",
        title: "Open your account",
        description:
          "Compare account structures, trading conditions, spreads, commission, and leverage before choosing the setup that fits your goals.",
        imageSrc: "/discover/offerings.webp",
        imageAlt:
          "AI generated brokerage offering suite with account cards and market visuals.",
        actions: [
          { href: "#plans", label: "Choose Your Plan" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "$0", label: "Bonus access" },
          { value: "1:500", label: "Max leverage" },
          { value: "6", label: "Account types" },
        ],
      }}
    >
        <section
          id="plans"
          className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-4"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,23,0.7)_0%,rgba(5,8,18,0.92)_100%)] p-4 shadow-[0_32px_100px_rgba(2,8,20,0.35)] backdrop-blur-xl sm:p-6 lg:p-8 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(248,250,252,0.96)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_26%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_30%)]" />

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {accountPlans.map((plan) => (
                <AccountTypeCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-5xl px-4 pb-8 pt-12 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
            All accounts offer negative balance protection, hedging and Islamic
            options as standard. If the currency you deposit into your account
            is not USD, amount shown is the equivalent in the deposit currency.
          </p>
        </section>

        <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-4">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,29,0.94)_0%,rgba(5,9,20,0.98)_100%)] px-6 py-12 text-center shadow-[0_28px_90px_rgba(2,8,20,0.42)] sm:px-10 [.light_&]:border-blue-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,250,252,0.98)_100%)] [.light_&]:ring-1 [.light_&]:ring-blue-100/70 [.light_&]:shadow-[0_16px_44px_rgba(15,23,42,0.07)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.1),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.38),transparent_32%)]" />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sky-200 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
                Demo Account
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl [.light_&]:text-[#111827]">
                Want to Practice Trading for Free?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
                Use your Demo Account and test your trading strategies risk-free
                with virtual funds in a simulated environment. Then switch to a
                Real Account when you are ready.
              </p>

              <div className="mt-8">
                <Button className="w-full sm:w-auto h-12 px-7 text-sm">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
