"use client";

import type { InputHTMLAttributes } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Clock3,
  Globe2,
  LineChart,
  Newspaper,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button as SiteButton } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

export { SiteButton as Button };

type Signal = "Buy" | "Sell" | "Hold";

interface HeroStat {
  label: string;
  value: string;
}

interface CalendarHeroProps {
  title: string;
  description: string;
  stats?: HeroStat[];
}

interface NewsItemProps {
  icon?: LucideIcon;
  region: string;
  headline: string;
  time: string;
}

interface NewsTickerProps {
  title: string;
  items: NewsItemProps[];
}

interface EconomicCalendarTableProps {
  title: string;
  subtitle?: string;
  description?: string;
}

interface MarketWidgetCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  stance: Signal;
  summary: string;
  levels: string[];
}

interface NewsFeedItemProps {
  category: string;
  headline: string;
  time: string;
}

interface NewsFeedProps {
  title: string;
  items: NewsFeedItemProps[];
}

interface MarketDataRow {
  symbol: string;
  bid: string;
  ask: string;
  change: string;
  signal: Signal;
}

interface MarketDataTableProps {
  title: string;
  rows: MarketDataRow[];
}

interface CTASectionProps {
  title: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const tradingViewIframeAttributes = {
  allowtransparency: "true",
} as const;

const heroStats: HeroStat[] = [
  { value: "24/5", label: "Market coverage" },
  { value: "6", label: "Core assets" },
  { value: "Live", label: "News context" },
];

const topStories: NewsItemProps[] = [
  {
    icon: Globe2,
    region: "US",
    headline: "Fed speakers keep dollar traders focused before the next inflation print.",
    time: "12 min ago",
  },
  {
    icon: TrendingUp,
    region: "EU",
    headline: "Eurozone inflation preview sets the tone for EUR volatility.",
    time: "18 min ago",
  },
  {
    icon: Newspaper,
    region: "UK",
    headline: "Sterling holds steady as labor data and BoE remarks approach.",
    time: "27 min ago",
  },
  {
    icon: BarChart3,
    region: "JP",
    headline: "Yen watch continues as global yields move higher.",
    time: "35 min ago",
  },
];

const marketWidgets: MarketWidgetCardProps[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "184.32",
    change: "+0.82%",
    stance: "Buy",
    summary: "Momentum remains constructive while price holds above the short-term support band.",
    levels: ["Support 181.40", "Pivot 183.20", "Resistance 187.80"],
  },
  {
    symbol: "XAUUSD",
    name: "Gold",
    price: "2,342.80",
    change: "+0.38%",
    stance: "Hold",
    summary: "Gold is consolidating near resistance as traders wait for dollar and yield confirmation.",
    levels: ["Support 2,318", "Pivot 2,336", "Resistance 2,366"],
  },
  {
    symbol: "XAGUSD",
    name: "Silver",
    price: "28.44",
    change: "-0.21%",
    stance: "Sell",
    summary: "Silver needs a clean reclaim of the intraday pivot to reduce downside pressure.",
    levels: ["Support 28.05", "Pivot 28.60", "Resistance 29.20"],
  },
];

const newsFeedItems: NewsFeedItemProps[] = [
  {
    category: "Forex",
    headline: "Dollar index pauses after stronger labor-market release.",
    time: "09:42 GMT",
  },
  {
    category: "Metals",
    headline: "Gold traders monitor real yields after fresh US data.",
    time: "09:26 GMT",
  },
  {
    category: "Equities",
    headline: "US futures hold a narrow range before opening bell.",
    time: "09:11 GMT",
  },
  {
    category: "Macro",
    headline: "Risk sentiment improves as energy prices stabilize.",
    time: "08:58 GMT",
  },
  {
    category: "Asia",
    headline: "Yen pairs remain active after overnight yield moves.",
    time: "08:35 GMT",
  },
];

const marketRows: MarketDataRow[] = [
  { symbol: "EURUSD", bid: "1.0842", ask: "1.0844", change: "+0.12%", signal: "Buy" },
  { symbol: "GBPUSD", bid: "1.2648", ask: "1.2651", change: "+0.05%", signal: "Hold" },
  { symbol: "USDJPY", bid: "154.82", ask: "154.85", change: "-0.18%", signal: "Sell" },
  { symbol: "XAUUSD", bid: "2342.6", ask: "2343.1", change: "+0.38%", signal: "Buy" },
  { symbol: "XAGUSD", bid: "28.43", ask: "28.46", change: "-0.21%", signal: "Sell" },
  { symbol: "AAPL", bid: "184.30", ask: "184.36", change: "+0.82%", signal: "Buy" },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mb-8 max-w-3xl"
    >
      <h2 className="text-2xl font-semibold tracking-normal text-white sm:text-3xl [.light_&]:text-slate-950">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-300/76 [.light_&]:text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function SignalBadge({ signal }: { signal: Signal }) {
  const className =
    signal === "Buy"
      ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-200 [.light_&]:text-emerald-700"
      : signal === "Sell"
        ? "border-red-300/30 bg-red-400/10 text-red-200 [.light_&]:text-red-700"
        : "border-amber-300/30 bg-amber-400/10 text-amber-200 [.light_&]:text-amber-700";

  return (
    <span
      className={cn(
        "inline-flex min-w-16 items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold",
        className,
      )}
    >
      {signal}
    </span>
  );
}

function CalendarVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const bars = [34, 58, 42, 76, 51, 88, 68, 96];

  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-2xl border border-sky-300/15 bg-[#06111f] p-5 shadow-[0_28px_90px_rgba(2,8,20,0.38),0_0_44px_rgba(14,165,233,0.12)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_22px_52px_rgba(37,99,235,0.12)] sm:p-6">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(56,189,248,0.22),transparent_34%),linear-gradient(135deg,rgba(14,165,233,0.08),transparent_42%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]"
      />

      <div className="relative grid h-full gap-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80 [.light_&]:text-blue-700">
                Macro desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white [.light_&]:text-slate-950">
                April Calendar
              </p>
            </div>
            <span className="rounded-full border border-cyan-300/24 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 [.light_&]:text-blue-700">
              High impact
            </span>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-2 text-center">
            {days.map((day) => (
              <span
                key={day}
                className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-slate-400 [.light_&]:text-slate-500"
              >
                {day}
              </span>
            ))}
            {Array.from({ length: 21 }, (_, index) => {
              const active = [3, 8, 11, 16].includes(index);
              return (
                <span
                  key={index}
                  className={cn(
                    "grid aspect-square place-items-center rounded-lg border text-xs font-semibold",
                    active
                      ? "border-sky-300/45 bg-sky-300/16 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.16)] [.light_&]:text-blue-700"
                      : "border-white/8 bg-white/[0.03] text-slate-400 [.light_&]:border-slate-200 [.light_&]:bg-white",
                  )}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr]">
          <div className="rounded-xl border border-white/10 bg-[#07182b]/86 p-4 [.light_&]:border-slate-200 [.light_&]:bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Volatility
              </span>
              <LineChart className="h-4 w-4 text-sky-200 [.light_&]:text-blue-700" />
            </div>
            <div className="mt-5 flex h-24 items-end gap-2">
              {bars.map((bar, index) => (
                <span
                  key={`${bar}-${index}`}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-300"
                  style={{ height: `${bar}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {["USD", "EUR", "XAU"].map((asset, index) => (
              <div
                key={asset}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 [.light_&]:border-slate-200 [.light_&]:bg-slate-50"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-white [.light_&]:text-slate-950">
                    {asset}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      index === 1 ? "text-red-200 [.light_&]:text-red-600" : "text-emerald-200 [.light_&]:text-emerald-700",
                    )}
                  >
                    {index === 1 ? "-0.08%" : "+0.24%"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CalendarHero({ title, description, stats = [] }: CalendarHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 lg:px-8 lg:pt-14">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_70%_10%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(180deg,rgba(14,165,233,0.08),transparent_58%)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:text-blue-700">
            Economic Calendar
          </Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300/78 [.light_&]:text-slate-600 sm:text-lg">
            {description}
          </p>
          {stats.length ? (
            <div className="mt-8 grid gap-3 min-[520px]:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-lg border border-sky-300/14 bg-white/[0.04] px-4 py-3 [.light_&]:border-sky-100 [.light_&]:bg-white"
                >
                  <p className="text-xl font-semibold text-white [.light_&]:text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 [.light_&]:text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
        >
          <CalendarVisual />
        </motion.div>
      </div>
    </section>
  );
}

export function NewsItem({ icon: Icon = Bell, region, headline, time }: NewsItemProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group min-w-[18rem] flex-1 rounded-xl border border-sky-300/12 bg-[#08192d] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/36 hover:bg-[#0B1F3A] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:hover:border-sky-200"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-sky-300/18 bg-sky-300/10 text-sky-100 [.light_&]:text-blue-700">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.65rem] font-bold text-sky-100 [.light_&]:border-slate-200 [.light_&]:text-blue-700">
              {region}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Clock3 className="h-3 w-3" />
              {time}
            </span>
          </div>
          <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-white transition-colors group-hover:text-sky-100 [.light_&]:text-slate-950 [.light_&]:group-hover:text-blue-700">
            {headline}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

export function NewsTicker({ title, items }: NewsTickerProps) {
  return (
    <SectionWrapper className="py-12 sm:py-14 lg:py-16">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading title={title} />
        <p className="max-w-xl text-sm leading-7 text-slate-300/72 [.light_&]:text-slate-600">
          Fast market context from major regions, structured for quick scanning before key releases.
        </p>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex gap-4 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <NewsItem key={`${item.region}-${item.headline}`} {...item} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

export function EconomicCalendarTable({
  title,
  subtitle = "MAJOR UPCOMING EVENTS",
  description = "Get to know trending & important events and updates for your upcoming successful trade.",
}: EconomicCalendarTableProps) {
  return (
    <SectionWrapper className="hidden py-12 sm:block sm:py-16 lg:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200 [.light_&]:text-blue-700">
          {subtitle}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/76 [.light_&]:text-slate-600 sm:text-base">
          {description}
        </p>

        <div className="mt-9 w-full overflow-hidden rounded-xl border border-sky-300/12 bg-[#07182b]/72 shadow-[0_22px_70px_rgba(2,8,20,0.24)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
          <div className="tradingview-widget-container mx-auto h-[550px] w-full max-w-[970px]">
            <iframe
              scrolling="no"
              {...tradingViewIframeAttributes}
              frameBorder="0"
              src='https://www.tradingview-widget.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A970%2C%22height%22%3A550%2C%22importanceFilter%22%3A%220%2C1%22%2C%22countryFilter%22%3A%22us%22%2C%22utm_source%22%3A%22achieverfinancials.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%2C%22page-uri%22%3A%22achieverfinancials.com%2Feconomic-cal%2F%22%7D'
              title="events TradingView widget"
              lang="en"
              className="block h-full w-full select-none"
            />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export function MarketWidgetCard({
  symbol,
  name,
  price,
  change,
  stance,
  summary,
  levels,
}: MarketWidgetCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-xl border border-sky-300/12 bg-[#08192d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/32 [.light_&]:border-sky-100 [.light_&]:bg-white"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80 [.light_&]:text-blue-700">
            {symbol}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white [.light_&]:text-slate-950">
            {name}
          </h3>
        </div>
        <SignalBadge signal={stance} />
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold text-white [.light_&]:text-slate-950">{price}</p>
          <p className={cn("mt-1 text-sm font-semibold", change.startsWith("-") ? "text-red-200 [.light_&]:text-red-600" : "text-emerald-200 [.light_&]:text-emerald-700")}>
            {change}
          </p>
        </div>
        <div className="flex h-16 w-28 items-end gap-1">
          {[32, 48, 38, 62, 54, 78, 70, 86].map((height, index) => (
            <span
              key={`${symbol}-${height}-${index}`}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300/78 [.light_&]:text-slate-600">
        {summary}
      </p>
      <div className="mt-4 grid gap-2">
        {levels.map((level) => (
          <span
            key={level}
            className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-300 [.light_&]:border-slate-200 [.light_&]:bg-slate-50 [.light_&]:text-slate-700"
          >
            {level}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function NewsFeedItem({ category, headline, time }: NewsFeedItemProps) {
  return (
    <article className="group rounded-lg border border-white/8 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-sky-300/24 hover:bg-sky-300/[0.06] [.light_&]:border-slate-200 [.light_&]:bg-slate-50 [.light_&]:hover:bg-sky-50">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-sky-100 [.light_&]:text-blue-700">
          {category}
        </span>
        <span className="text-xs text-slate-400 [.light_&]:text-slate-500">{time}</span>
      </div>
      <h3 className="mt-3 text-sm font-semibold leading-6 text-white transition-colors group-hover:text-sky-100 [.light_&]:text-slate-950 [.light_&]:group-hover:text-blue-700">
        {headline}
      </h3>
    </article>
  );
}

export function NewsFeed({ title, items }: NewsFeedProps) {
  return (
    <motion.aside
      variants={fadeUp}
      className="rounded-xl border border-sky-300/12 bg-[#07182b] p-5 [.light_&]:border-sky-100 [.light_&]:bg-white"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white [.light_&]:text-slate-950">{title}</h3>
        <Newspaper className="h-5 w-5 text-sky-200 [.light_&]:text-blue-700" />
      </div>
      <div className="max-h-[31rem] space-y-3 overflow-y-auto pr-1">
        {items.map((item) => (
          <NewsFeedItem key={`${item.category}-${item.headline}`} {...item} />
        ))}
      </div>
    </motion.aside>
  );
}

function MarketAnalysisSection() {
  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20">
      <SectionHeading
        title="Market Analysis & News"
        description="Technical snapshots sit beside a compact news feed so traders can connect price action with market catalysts."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {marketWidgets.map((widget) => (
            <MarketWidgetCard key={widget.symbol} {...widget} />
          ))}
        </div>
        <NewsFeed title="Latest Market News" items={newsFeedItems} />
      </motion.div>
    </SectionWrapper>
  );
}

export function MarketDataTable({ title, rows }: MarketDataTableProps) {
  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20">
      <SectionHeading
        title={title}
        description="Clean live-style quotes with bid, ask, net change, and signal status for quick comparison."
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-xl border border-sky-300/12 bg-[#07182b] [.light_&]:border-sky-100 [.light_&]:bg-white"
      >
        <div className="max-h-[28rem] overflow-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-[#0B1F3A] text-xs uppercase tracking-[0.16em] text-slate-300 [.light_&]:bg-slate-50 [.light_&]:text-slate-600">
              <tr>
                {["Symbol", "Bid", "Ask", "Change", "Signal"].map((column) => (
                  <th key={column} className="border-b border-white/10 px-5 py-4 font-semibold [.light_&]:border-slate-200">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/8 [.light_&]:divide-slate-100">
              {rows.map((row) => (
                <tr
                  key={row.symbol}
                  className="transition-colors duration-200 hover:bg-sky-300/[0.07] [.light_&]:hover:bg-sky-50"
                >
                  <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-950">
                    {row.symbol}
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-300 [.light_&]:text-slate-700">{row.bid}</td>
                  <td className="px-5 py-4 text-sm text-slate-300 [.light_&]:text-slate-700">{row.ask}</td>
                  <td className={cn("px-5 py-4 text-sm font-semibold", row.change.startsWith("-") ? "text-red-200 [.light_&]:text-red-600" : "text-emerald-200 [.light_&]:text-emerald-700")}>
                    {row.change}
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <SignalBadge signal={row.signal} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export function InputField({ label, className, ...props }: InputFieldProps) {
  return (
    <label className="block w-full">
      {label ? (
        <span className="mb-2 block text-sm font-semibold text-slate-300 [.light_&]:text-slate-700">
          {label}
        </span>
      ) : null}
      <input
        className={cn(
          "h-12 w-full rounded-full border border-sky-300/18 bg-white/[0.06] px-5 text-sm text-white outline-none transition-colors placeholder:text-slate-400 focus:border-sky-300/54 focus:bg-white/[0.08] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-950",
          className,
        )}
        {...props}
      />
    </label>
  );
}

function FintechDeviceVisual() {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-sky-300/14 bg-[#06111f] p-6 [.light_&]:border-sky-100 [.light_&]:bg-slate-50">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.22),transparent_32%),linear-gradient(145deg,rgba(14,165,233,0.08),transparent_48%)]"
      />
      <div className="relative mx-auto flex h-64 max-w-sm items-center justify-center">
        <div className="absolute h-48 w-32 rotate-[-10deg] rounded-[1.7rem] border border-sky-300/24 bg-[#08192d] p-3 shadow-[0_24px_70px_rgba(2,8,20,0.34)]">
          <div className="h-full rounded-[1.2rem] border border-white/8 bg-[#020817] p-3">
            <div className="mx-auto h-1.5 w-10 rounded-full bg-slate-600" />
            <div className="mt-6 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-300 text-white shadow-[0_0_34px_rgba(56,189,248,0.28)]">
                <Zap className="h-8 w-8" />
              </span>
            </div>
            <div className="mt-6 space-y-2">
              {[70, 45, 82].map((width) => (
                <span
                  key={width}
                  className="block h-2 rounded-full bg-sky-300/20"
                  style={{ width: `${width}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-8 top-10 rounded-xl border border-sky-300/18 bg-white/[0.06] px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            Demo ready
          </p>
          <p className="mt-1 text-lg font-semibold text-white [.light_&]:text-slate-950">15 min</p>
        </div>
        <div className="absolute bottom-7 left-6 rounded-xl border border-sky-300/18 bg-white/[0.06] px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-semibold text-slate-300 [.light_&]:text-slate-600">
            Platform access
          </p>
        </div>
      </div>
    </div>
  );
}

export function CTASection({
  title,
  description,
  placeholder,
  buttonLabel,
}: CTASectionProps) {
  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 rounded-2xl border border-sky-300/14 bg-[#07182b] p-6 shadow-[0_24px_80px_rgba(2,8,20,0.26)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_0.86fr] lg:p-10"
      >
        <div className="flex flex-col justify-center">
          <Badge className="w-fit border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.18em] text-sky-100 [.light_&]:text-blue-700">
            Contact
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/76 [.light_&]:text-slate-600 sm:text-base">
            {description}
          </p>
          <form
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <InputField
              type="email"
              name="email"
              placeholder={placeholder}
              aria-label="Email address"
              required
            />
            <SiteButton
              type="submit"
              className="h-12 shrink-0 rounded-full px-6 text-sm shadow-[0_12px_30px_rgba(14,165,233,0.26)] hover:shadow-[0_18px_42px_rgba(56,189,248,0.36)]"
            >
              {buttonLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </SiteButton>
          </form>
        </div>
        <FintechDeviceVisual />
      </motion.div>
    </SectionWrapper>
  );
}

export default function EconomicCalendarPageExperience() {
  return (
    <>
      <CalendarHero
        title="Economic Calendar & Forex News"
        description="Follow global macro events, forex news, and live-style market data in a clean trading dashboard built for fast, informed decisions."
        stats={heroStats}
      />
      <NewsTicker title="Top Stories Around the World" items={topStories} />
      <EconomicCalendarTable title="Watch Economic Calendar" />
      <MarketAnalysisSection />
      <MarketDataTable title="Cutting-Edge Real-Time Data" rows={marketRows} />
      <CTASection
        title="Get in Touch with Us Right Now"
        description="Speak with our team about platform access, market tools, and how Achiever Financials can support your trading workflow."
        placeholder="Enter your email"
        buttonLabel="Get a Demo"
      />
    </>
  );
}
