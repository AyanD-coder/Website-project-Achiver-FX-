"use client";

import Link from "next/link";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";
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

interface MarketDataTableProps {
  title: string;
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

const stockdioAppKey =
  process.env.NEXT_PUBLIC_STOCKDIO_APP_KEY ?? "C616805A464B45429FC46CBB62D3FC4E";

const tradingViewPageUri = "achieverfinancials.com/economic-cal/";

type TradingViewWidgetKind = "technical-analysis" | "symbol-info";
type TradingViewTheme = "dark" | "light";

interface TradingViewLiveWidgetProps {
  height: number;
  kind: TradingViewWidgetKind;
  symbol: string;
  title: string;
}

interface StockdioNewsWidgetProps {
  height: number;
  iframeId: string;
  symbol: string;
  title: string;
}

const symbolInfoWidgets = [
  { symbol: "NASDAQ:AAPL", title: "Apple Inc." },
  { symbol: "OANDA:XAUUSD", title: "Gold" },
  { symbol: "OANDA:XAGUSD", title: "Silver" },
] satisfies Array<Pick<TradingViewLiveWidgetProps, "symbol" | "title">>;

function useTradingViewTheme(): TradingViewTheme {
  const [theme, setTheme] = useState<TradingViewTheme>("dark");

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setTheme(root.classList.contains("light") ? "light" : "dark");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributeFilter: ["class", "data-theme"],
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}

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

function createTradingViewWidgetSrc({
  height,
  kind,
  symbol,
  theme,
}: Pick<TradingViewLiveWidgetProps, "height" | "kind" | "symbol"> & {
  theme: TradingViewTheme;
}) {
  const baseUrl = `https://www.tradingview-widget.com/embed-widget/${kind}/`;
  const search =
    kind === "symbol-info" ? `?locale=en&symbol=${encodeURIComponent(symbol)}` : "?locale=en";
  const config =
    kind === "technical-analysis"
      ? {
          interval: "1m",
          width: "100%",
          isTransparent: false,
          height,
          symbol,
          showIntervalTabs: true,
          displayMode: "single",
          colorTheme: theme,
          locale: "en",
          utm_source: "achieverfinancials.com",
          utm_medium: "widget",
          utm_campaign: "technical-analysis",
          "page-uri": tradingViewPageUri,
        }
      : {
          symbol,
          width: "100%",
          colorTheme: theme,
          isTransparent: false,
          height,
          locale: "en",
          utm_source: "achieverfinancials.com",
          utm_medium: "widget",
          utm_campaign: "symbol-info",
          "page-uri": tradingViewPageUri,
        };

  return `${baseUrl}${search}#${encodeURIComponent(JSON.stringify(config))}`;
}

function createStockdioNewsSrc({
  iframeId,
  symbol,
}: Pick<StockdioNewsWidgetProps, "iframeId" | "symbol">) {
  const params = new URLSearchParams({
    "app-key": stockdioAppKey,
    symbol,
    palette: "Financial-Light",
    title: "News",
    onload: iframeId,
  });

  return `https://api.stockdio.com/visualization/financial/charts/v1/News?${params.toString()}`;
}

function createTradingViewEventsSrc(theme: TradingViewTheme) {
  const config = {
    colorTheme: theme,
    isTransparent: true,
    width: 970,
    height: 550,
    importanceFilter: "0,1",
    countryFilter: "us",
    utm_source: "achieverfinancials.com",
    utm_medium: "widget",
    utm_campaign: "events",
    "page-uri": tradingViewPageUri,
  };

  return `https://www.tradingview-widget.com/embed-widget/events/?locale=en#${encodeURIComponent(JSON.stringify(config))}`;
}

function createTradingViewScreenerSrc(theme: TradingViewTheme) {
  const config = {
    width: "100%",
    height: 400,
    defaultColumn: "overview",
    defaultScreen: "general",
    market: "forex",
    showToolbar: true,
    colorTheme: theme,
    isTransparent: true,
    enableScrolling: true,
    utm_source: "achieverfinancials.com",
    utm_medium: "widget",
    utm_campaign: "forexscreener",
    "page-uri": tradingViewPageUri,
  };

  return `https://www.tradingview-widget.com/embed-widget/screener/?locale=en#${encodeURIComponent(JSON.stringify(config))}`;
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
                Desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white [.light_&]:text-slate-950">
                Economic Calendar
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
        {/* <p className="max-w-xl text-sm leading-7 text-slate-300/72 [.light_&]:text-slate-600">
          Fast market context from major regions, structured for quick scanning before key releases.
        </p> */}
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
  const tradingViewTheme = useTradingViewTheme();

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
              src={createTradingViewEventsSrc(tradingViewTheme)}
              title="events TradingView widget"
              lang="en"
              key={`events-${tradingViewTheme}`}
              className="block h-full w-full select-none"
            />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function LiveWidgetFrame({
  children,
  height,
  title,
}: {
  children: ReactNode;
  height: number;
  title: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-xl border border-sky-300/12 bg-[#08192d] p-3 shadow-[0_18px_50px_rgba(2,8,20,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/32 [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-100 [.light_&]:text-blue-700">
          {title}
        </h3>
        <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-emerald-200 [.light_&]:text-emerald-700">
          Live
        </span>
      </div>
      <div
        className="relative overflow-hidden rounded-lg bg-white ring-1 ring-white/8 [.light_&]:ring-slate-200"
        style={{ minHeight: height }}
      >
        {children}
      </div>
    </motion.article>
  );
}

function TradingViewLiveWidget({
  height,
  kind,
  symbol,
  title,
}: TradingViewLiveWidgetProps) {
  const tradingViewTheme = useTradingViewTheme();

  return (
    <LiveWidgetFrame height={height} title={title}>
      <iframe
        scrolling="no"
        {...tradingViewIframeAttributes}
        frameBorder="0"
        src={createTradingViewWidgetSrc({
          height,
          kind,
          symbol,
          theme: tradingViewTheme,
        })}
        title={`${title} ${kind} TradingView widget`}
        lang="en"
        key={`${kind}-${symbol}-${tradingViewTheme}`}
        loading="lazy"
        className="block h-full w-full select-none"
        style={{ minHeight: height }}
      />
    </LiveWidgetFrame>
  );
}

function StockdioNewsWidget({
  height,
  iframeId,
  symbol,
  title,
}: StockdioNewsWidgetProps) {
  return (
    <LiveWidgetFrame height={height} title={title}>
      <iframe
        id={iframeId}
        frameBorder="0"
        scrolling="no"
        width="100%"
        height={height}
        src={createStockdioNewsSrc({ iframeId, symbol })}
        title={`${title} Stockdio news widget`}
        loading="lazy"
        className="block w-full"
        style={{ height }}
      />
    </LiveWidgetFrame>
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
        className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] xl:grid-cols-1">
          <TradingViewLiveWidget
            height={450}
            kind="technical-analysis"
            symbol="NASDAQ:AAPL"
            title="AAPL Technical Analysis"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {symbolInfoWidgets.map((widget) => (
              <TradingViewLiveWidget
                key={widget.symbol}
                height={238}
                kind="symbol-info"
                symbol={widget.symbol}
                title={widget.title}
              />
            ))}
          </div>
        </div>
        <div className="xl:sticky xl:top-28 xl:self-start">
          <StockdioNewsWidget
            height={960}
            iframeId="achiever-stockdio-news"
            symbol="AAPL"
            title="Latest Market News"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export function MarketDataTable({ title }: MarketDataTableProps) {
  const tradingViewTheme = useTradingViewTheme();

  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20">
      <SectionHeading
        title={title}
        description="Stay connected with seamless live forex screener updates wherever you trade."
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-xl border border-sky-300/12 bg-[#07182b] shadow-[0_22px_70px_rgba(2,8,20,0.24)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
      >
        <div className="h-[400px] w-full bg-[#07182b]">
          <iframe
            {...tradingViewIframeAttributes}
            frameBorder="0"
            src={createTradingViewScreenerSrc(tradingViewTheme)}
            title="forex screener TradingView widget"
            lang="en"
            key={`forex-screener-${tradingViewTheme}`}
            loading="lazy"
            className="block h-full w-full select-none"
          />
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
        autoComplete="off"
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
              id="economic-calendar-demo-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder={placeholder}
              aria-label="Email address"
              required
            />
            <SiteButton
              asChild
              className="h-12 shrink-0 rounded-full px-6 text-sm shadow-[0_12px_30px_rgba(14,165,233,0.26)] hover:shadow-[0_18px_42px_rgba(56,189,248,0.36)]"
            >
              <Link href="/register">
                {buttonLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
      <MarketDataTable title="Cutting-Edge Real-Time Data" />
      <CTASection
        title="Get in Touch with Us Right Now"
        description="Speak with our team about platform access, market tools, and how Achiever Financials can support your trading workflow."
        placeholder="Enter your email"
        buttonLabel="Get a Demo"
      />
    </>
  );
}
