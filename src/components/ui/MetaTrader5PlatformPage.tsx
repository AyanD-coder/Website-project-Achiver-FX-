import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PowerFeature = {
  number: string;
  title: string;
};

type WhyChooseCard = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type StartStep = {
  description: string;
  number: string;
  title: string;
};

type DownloadBadge = {
  label: string;
  prefix: string;
  store: "windows" | "apple" | "app-store" | "app-gallery" | "google-play" | "linux";
};

const powerFeatures: PowerFeature[] = [
  { number: "01", title: "Advanced Charting Tools" },
  { number: "02", title: "Built-in Technical Indicators" },
  { number: "03", title: "Algorithmic & Automated Trading" },
  { number: "04", title: "Multi-Asset Market Access" },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "Fast Execution",
    description: "Quick trades when every second counts.",
    icon: Zap,
  },
  {
    title: "Smart Analytics",
    description:
      "Analyze their success metrics, performance history, and strategies.",
    icon: BarChart3,
  },
  {
    title: "Seamless Access",
    description:
      "Mirror their trades automatically and grow your portfolio with confidence.",
    icon: MonitorSmartphone,
  },
];

const startSteps: StartStep[] = [
  {
    number: "1",
    title: "Download the Platform",
    description:
      "Pick the version that fits your device and install Achievers MT5 to unlock pro-grade trading tools.",
  },
  {
    number: "2",
    title: "Log In to Your Account",
    description:
      "Enter your Achievers credentials to access live market data, smart analytics, and expert-driven insights.",
  },
  {
    number: "3",
    title: "Begin Trading",
    description:
      "Trade fast and smart on any device with Achievers MT5 built for performance and precision.",
  },
];

const downloadBadges: DownloadBadge[] = [
  { label: "Windows", prefix: "Download for", store: "windows" },
  { label: "Mac OS", prefix: "Download for", store: "apple" },
  { label: "App Store", prefix: "Download on the", store: "app-store" },
  { label: "AppGallery", prefix: "Explore it on", store: "app-gallery" },
  { label: "Google Play", prefix: "Get it on", store: "google-play" },
  { label: "Linux", prefix: "Download for", store: "linux" },
];

function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-cyan-300/16 bg-cyan-400/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/78 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

function DeviceFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.98),rgba(3,7,16,0.96))] p-[0.42rem] shadow-[0_30px_90px_rgba(2,8,20,0.52)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(24,34,57,0.98),rgba(10,18,34,0.98))] [.light_&]:shadow-[0_22px_60px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <div className="rounded-[2.35rem] border border-white/8 bg-[#050914] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [.light_&]:border-white/10 [.light_&]:bg-[#091224]">
        <div className="flex justify-center pt-2">
          <div className="h-1.5 w-20 rounded-full bg-white/12" />
        </div>
        <div className="px-3 pb-3 pt-2">{children}</div>
      </div>
    </div>
  );
}

function ChartPhone({ className }: { className?: string }) {
  return (
    <DeviceFrame className={cn("w-[13.6rem]", className)}>
      <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,15,28,0.96),rgba(4,8,18,0.92))] p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/52">
              MT5 Live
            </p>
            <p className="mt-2 text-sm font-semibold text-white">EUR/USD</p>
          </div>
          <div className="rounded-full border border-emerald-400/16 bg-emerald-400/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            +1.24%
          </div>
        </div>

        <div className="mt-4 rounded-[1.6rem] border border-white/8 bg-[#040813] p-3">
          <svg
            viewBox="0 0 220 280"
            className="h-60 w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="mt5-hero-line" x1="20" y1="24" x2="210" y2="240">
                <stop stopColor="#22d3ee" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="mt5-hero-fill" x1="110" y1="60" x2="110" y2="260">
                <stop stopColor="rgba(56,189,248,0.36)" />
                <stop offset="1" stopColor="rgba(56,189,248,0)" />
              </linearGradient>
            </defs>

            {Array.from({ length: 6 }).map((_, index) => (
              <line
                key={`row-${index}`}
                x1="8"
                x2="212"
                y1={34 + index * 38}
                y2={34 + index * 38}
                stroke="rgba(148,163,184,0.16)"
                strokeDasharray="4 7"
              />
            ))}

            {Array.from({ length: 5 }).map((_, index) => (
              <line
                key={`column-${index}`}
                y1="16"
                y2="252"
                x1={22 + index * 46}
                x2={22 + index * 46}
                stroke="rgba(148,163,184,0.1)"
                strokeDasharray="4 7"
              />
            ))}

            <path
              d="M18 198C34 190 42 170 54 162C70 151 84 156 96 132C110 104 124 72 140 88C154 101 165 138 178 128C190 118 198 82 210 64V252H18V198Z"
              fill="url(#mt5-hero-fill)"
            />
            <path
              d="M18 198C34 190 42 170 54 162C70 151 84 156 96 132C110 104 124 72 140 88C154 101 165 138 178 128C190 118 198 82 210 64"
              stroke="url(#mt5-hero-line)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {[54, 96, 140, 210].map((point, index) => {
              const pointsY = [162, 132, 88, 64];
              return (
                <g key={`${point}-${pointsY[index]}`}>
                  <circle cx={point} cy={pointsY[index]} r="8" fill="rgba(34,211,238,0.16)" />
                  <circle cx={point} cy={pointsY[index]} r="4" fill="#cffafe" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {["Trend", "Scalping", "Alerts", "Signals"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/78"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </DeviceFrame>
  );
}

function QuotesPhone({ className }: { className?: string }) {
  const quotes = [
    { pair: "GBP/USD", value: "1.2741", change: "-0.15%" },
    { pair: "USD/JPY", value: "154.38", change: "+0.21%" },
    { pair: "XAU/USD", value: "2342.5", change: "+0.42%" },
    { pair: "BTC/USD", value: "63820", change: "-0.28%" },
    { pair: "NAS100", value: "18254", change: "+0.36%" },
  ];

  return (
    <DeviceFrame className={cn("w-[11.3rem]", className)}>
      <div className="rounded-[1.9rem] border border-white/8 bg-white/95 p-3 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-sky-700/70">
              Quotes
            </p>
            <p className="mt-2 text-sm font-semibold">Live Market Watch</p>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.35)]" />
        </div>

        <div className="mt-4 space-y-2">
          {quotes.map((quote) => (
            <div
              key={quote.pair}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {quote.pair}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quote.value}
                  </p>
                </div>
                <p
                  className={cn(
                    "text-[0.64rem] font-semibold",
                    quote.change.startsWith("+")
                      ? "text-emerald-600"
                      : "text-rose-500",
                  )}
                >
                  {quote.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DeviceFrame>
  );
}

function PowerFeatureCard({ number, title }: PowerFeature) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,13,26,0.94),rgba(4,8,18,0.98))] p-4 shadow-[0_18px_44px_rgba(2,8,20,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_24px_52px_rgba(14,165,233,0.14)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,249,255,0.94))] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_18px_40px_rgba(37,99,235,0.1)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_28%)]" />
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-400/10 text-lg font-semibold tracking-[0.08em] text-cyan-100 shadow-[0_0_22px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
          {number}
        </div>
        <p className="text-sm font-semibold leading-6 text-white [.light_&]:text-slate-900">
          {title}
        </p>
      </div>
    </div>
  );
}

function WhyChooseCard({ description, icon: Icon, title }: WhyChooseCard) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,14,29,0.96),rgba(4,8,18,0.98))] p-6 text-center shadow-[0_24px_68px_rgba(2,8,20,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/26 hover:shadow-[0_30px_74px_rgba(14,165,233,0.16)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,250,255,0.95))] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_36%)]" />
      <div className="relative">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white [.light_&]:text-slate-900">
          {title}
        </h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}

function DownloadBadgeIcon({ store }: Pick<DownloadBadge, "store">) {
  if (store === "windows") {
    return (
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="11" height="11" fill="#f25022" rx="1.4" />
        <rect x="15" y="2" width="11" height="11" fill="#7fba00" rx="1.4" />
        <rect x="2" y="15" width="11" height="11" fill="#00a4ef" rx="1.4" />
        <rect x="15" y="15" width="11" height="11" fill="#ffb900" rx="1.4" />
      </svg>
    );
  }

  if (store === "apple" || store === "app-store") {
    return (
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M18 6.1c-.9 1.1-1.5 2.6-1.4 4.1c1.4.1 2.8-.8 3.7-1.9c.9-1.1 1.5-2.5 1.3-4c-1.3.1-2.8.8-3.6 1.8Z" />
        <path d="M21.6 14.3c0-2.4 2-3.6 2.1-3.7c-1.1-1.7-2.9-1.9-3.5-1.9c-1.5-.2-2.9.9-3.7.9s-1.9-.9-3.1-.9c-2 0-3.9 1.2-5 3c-2.1 3.8-.5 9.3 1.6 12.4c1 1.5 2.3 3.2 3.9 3.1c1.5-.1 2.1-1 4-1s2.4 1 4 1c1.7 0 2.7-1.5 3.7-3c1.2-1.8 1.8-3.6 1.8-3.7c-.1 0-3.8-1.5-3.8-5.2Z" />
      </svg>
    );
  }

  if (store === "app-gallery") {
    return (
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M14 5.4c1.3 0 2.3 1 2.3 2.3S15.3 10 14 10s-2.3-1-2.3-2.3S12.7 5.4 14 5.4Z"
          fill="#ef4444"
        />
        <path
          d="M20 8.4c1.2 0 2.2 1 2.2 2.2S21.2 12.8 20 12.8s-2.2-1-2.2-2.2S18.8 8.4 20 8.4Z"
          fill="#ef4444"
        />
        <path
          d="M8 8.4c1.2 0 2.2 1 2.2 2.2S9.2 12.8 8 12.8s-2.2-1-2.2-2.2S6.8 8.4 8 8.4Z"
          fill="#ef4444"
        />
        <path
          d="M18.2 13.3c1.1 0 2 .9 2 2c0 4-2.7 6.8-6.2 6.8s-6.2-2.8-6.2-6.8c0-1.1.9-2 2-2c1 0 1.7.7 2.1 1.4c.5.8 1.1 1.7 2.1 1.7s1.6-.9 2.1-1.7c.4-.7 1.1-1.4 2.1-1.4Z"
          fill="#ef4444"
        />
      </svg>
    );
  }

  if (store === "google-play") {
    return (
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M5.2 4.8L15.5 15L5.2 25.2c-.4-.4-.7-1-.7-1.8V6.6c0-.8.3-1.4.7-1.8Z" fill="#00d084" />
        <path d="M15.5 15L19 11.5l4.2 2.4c1.1.6 1.1 1.7 0 2.3L19 18.5L15.5 15Z" fill="#ffb703" />
        <path d="M5.2 4.8l13 7.3L15.5 15L5.2 4.8Z" fill="#00a4ef" />
        <path d="M5.2 25.2L15.5 15l2.7 2.9l-13 7.3Z" fill="#ef476f" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 28 28"
      className="h-7 w-7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="14" cy="9" rx="5.2" ry="5.8" fill="#111827" />
      <ellipse cx="14" cy="18" rx="6.6" ry="7.2" fill="#111827" />
      <ellipse cx="11.3" cy="8.4" rx="1" ry="1.4" fill="white" />
      <ellipse cx="16.7" cy="8.4" rx="1" ry="1.4" fill="white" />
      <path d="M12.4 10.8h3.2l-1.6 1.8l-1.6-1.8Z" fill="#fbbf24" />
      <ellipse cx="11" cy="24" rx="2.2" ry="1.1" fill="#fbbf24" />
      <ellipse cx="17" cy="24" rx="2.2" ry="1.1" fill="#fbbf24" />
    </svg>
  );
}

function DownloadBadge({ label, prefix, store }: DownloadBadge) {
  return (
    <div className="group flex min-h-[4rem] items-center gap-3 rounded-[1rem] border border-white/10 bg-[#06090f] px-3.5 py-2.5 shadow-[0_14px_34px_rgba(2,8,20,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/24 hover:shadow-[0_18px_40px_rgba(14,165,233,0.14)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-white">
        <DownloadBadgeIcon store={store} />
      </div>
      <div className="min-w-0">
        <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-white/58">
          {prefix}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-white">
          {label}
        </p>
      </div>
    </div>
  );
}

function StartStepCard({
  className,
  description,
  highlighted = false,
  number,
  title,
}: StartStep & {
  className?: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_22px_60px_rgba(2,8,20,0.18)]",
        highlighted
          ? "z-20 border-sky-300/28 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] text-slate-900"
          : "border-cyan-300/12 bg-[linear-gradient(180deg,rgba(8,16,32,0.96),rgba(4,8,18,0.98))] text-white [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,249,255,0.94))] [.light_&]:text-slate-900",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_36%)]" />
      <div className="relative">
        <p
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.32em]",
            highlighted ? "text-slate-500" : "text-cyan-100/58 [.light_&]:text-sky-700/60",
          )}
        >
          #
        </p>
        <p
          className={cn(
            "mt-3 text-6xl font-semibold tracking-[-0.08em]",
            highlighted
              ? "text-[#1d4ed8]"
              : "bg-gradient-to-b from-sky-300 to-cyan-400 bg-clip-text text-transparent [.light_&]:from-sky-600 [.light_&]:to-blue-600",
          )}
        >
          {number}
        </p>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em]">{title}</h3>
        <p
          className={cn(
            "mt-4 text-sm leading-7",
            highlighted ? "text-slate-600" : "text-slate-400 [.light_&]:text-slate-600",
          )}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function MetaTrader5PlatformPage() {
  return (
    <div className="w-full">
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(3,11,28,0.98),rgba(2,8,20,0.96))] px-6 py-10 shadow-[0_34px_120px_rgba(2,8,20,0.34)] sm:px-8 sm:py-12 lg:px-10 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,249,255,0.96))] [.light_&]:shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.72),transparent_36%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.12]" />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">
            <div className="max-w-xl">
              <SectionLabel>WELCOME TO MT5 PLATFORM</SectionLabel>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.9rem] [.light_&]:text-slate-950">
                Level Up Your Trading
                <br />
                with Achievers MT5
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
                Experience advanced tools, ultra-fast execution, and a
                powerful multi-asset platform - designed for traders who aim
                higher.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Fast execution", "Multi-asset", "Pro-grade tools"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/14 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[29rem] sm:h-[31rem] lg:h-[33rem]">
              <div className="absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_52%)] [.light_&]:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_52%)]" />
              <ChartPhone className="absolute left-[10%] top-0 -rotate-[11deg]" />
              <QuotesPhone className="absolute right-[4%] top-16 rotate-[9deg]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid items-center gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:gap-14">
          <div className="relative order-2 xl:order-1">
            <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/14 blur-3xl [.light_&]:bg-sky-300/22" />
            <div className="pointer-events-none absolute right-12 top-20 h-32 w-32 rounded-full bg-blue-500/12 blur-3xl [.light_&]:bg-blue-300/18" />

            <div className="relative h-[33rem]">
              <div className="absolute left-4 top-8 rounded-[1.6rem] border border-sky-200 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(37,99,235,0.12)] [.dark_&]:border-cyan-300/16 [.dark_&]:bg-[linear-gradient(180deg,rgba(9,17,32,0.96),rgba(4,8,18,0.98))] [.dark_&]:shadow-[0_20px_50px_rgba(2,8,20,0.22)]">
                <p className="text-sm font-semibold text-sky-700 [.dark_&]:text-cyan-100">
                  Algorithmic
                  <br />
                  Trading
                </p>
              </div>

              <div className="absolute right-8 top-32 rounded-[1.6rem] border border-sky-200 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(37,99,235,0.12)] [.dark_&]:border-cyan-300/16 [.dark_&]:bg-[linear-gradient(180deg,rgba(9,17,32,0.96),rgba(4,8,18,0.98))] [.dark_&]:shadow-[0_20px_50px_rgba(2,8,20,0.22)]">
                <p className="text-sm font-semibold text-sky-700 [.dark_&]:text-cyan-100">
                  Technical
                  <br />
                  Indicators
                </p>
              </div>

              <div className="absolute right-6 bottom-16 rounded-[1.6rem] border border-sky-200 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(37,99,235,0.12)] [.dark_&]:border-cyan-300/16 [.dark_&]:bg-[linear-gradient(180deg,rgba(9,17,32,0.96),rgba(4,8,18,0.98))] [.dark_&]:shadow-[0_20px_50px_rgba(2,8,20,0.22)]">
                <p className="text-sm font-semibold text-sky-700 [.dark_&]:text-cyan-100">
                  Multi-Asset
                  <br />
                  Support
                </p>
              </div>

              <div className="absolute left-[16%] top-[12%]">
                <ChartPhone className="w-[15.5rem] -rotate-[13deg]" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-2">
            <SectionLabel>MT5 PLATFORM FEATURES</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
              Discover the Power of
              <br />
              Achievers MT5
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
              Unlock next-level trading with precision tools and versatile
              features - built for serious market players.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {powerFeatures.map((item) => (
                <PowerFeatureCard key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">WHY MT5</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
            Why Choose Achievers MT5?
          </h2>
          <p className="mt-4 text-base text-slate-400 [.light_&]:text-slate-600">
            Trade smarter. Anywhere. Anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {whyChooseCards.map((card) => (
            <WhyChooseCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section
        id="get-started"
        className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="grid items-start gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
          <div className="max-w-md">
            <SectionLabel>GET STARTED</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
              Get Started
              <br />
              with
              <br />
              Achievers
              <br />
              MT5
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Unlock a powerful platform built for all traders - fast,
              reliable, and packed with pro-level tools.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {downloadBadges.map((badge) => (
                <DownloadBadge key={badge.label} {...badge} />
              ))}
            </div>

            <div className="mt-8">
              <Button asChild className="h-12 rounded-full px-7 text-sm">
                <Link href="#subscribe-demo" className="inline-flex items-center gap-2">
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-3 xl:items-center">
            <StartStepCard {...startSteps[0]} className="xl:translate-y-6" />
            <StartStepCard {...startSteps[1]} highlighted className="xl:z-20 xl:scale-[1.03]" />
            <StartStepCard {...startSteps[2]} className="xl:translate-y-6" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] px-6 py-14 shadow-[0_32px_110px_rgba(2,8,20,0.3)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,255,0.94))] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),transparent_34%)]" />
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.1]" />
          </div>

          <div className="relative flex min-h-[24rem] items-center justify-center">
            <div className="w-full max-w-2xl text-center">
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl [.light_&]:text-slate-950">
                We Do It
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl [.light_&]:text-slate-950">
                In all Over the World
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                We trades in all kind of Stocks, Crypto, Currencies, Metals,
                Instruments &amp; All kind of potential assets which will gives
                the profit
              </p>

              <div className="mt-8">
                <Button asChild className="h-12 rounded-full px-7 text-sm">
                  <Link href="/markets/account-types" className="inline-flex items-center gap-2">
                    Explore All
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="subscribe-demo"
        className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-dark border border-white/5 shadow-2xl items-center grid grid-cols-1 lg:grid-cols-2">
          <div className="absolute inset-0 bg-brand-primary opacity-5 blur-[120px] [.light_&]:bg-[radial-gradient(circle_at_22%_28%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_52%_78%,rgba(56,189,248,0.1),transparent_36%)] [.light_&]:opacity-100 [.light_&]:blur-[96px]" />
          <div className="p-10 lg:p-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Stay Ahead of the Market
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-md">
              Subscribe to our weekly newsletter for exclusive trade setups,
              macroeconomic breakdowns, and proprietary platform updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all"
                required
              />
              <button
                className="relative inline-flex items-center justify-center font-semibold tracking-[0.01em] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-glow focus:ring-offset-2 focus:ring-offset-bg-dark disabled:pointer-events-none disabled:opacity-50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_46%)] before:opacity-70 border border-white/10 bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_12px_32px_rgba(14,165,233,0.24)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(56,189,248,0.34)] [.light_&]:border-transparent [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white [.light_&]:shadow-[0_10px_26px_rgba(37,99,235,0.24)] [.light_&]:hover:from-[#1D4ED8] [.light_&]:hover:to-[#0284C7] [.light_&]:hover:shadow-[0_14px_34px_rgba(37,99,235,0.3)] h-12 rounded-xl py-3 whitespace-nowrap px-8"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-text-secondary mt-4">
              We respect your privacy. No spam ever.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center p-16 relative min-h-[400px]">
            <div className="absolute w-64 h-64 border border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-80 h-80 border border-brand-glow/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="relative w-48 h-48 bg-gradient-to-tr from-brand-primary/80 to-brand-secondary/80 rounded-2xl shadow-[0_0_50px_rgba(14,165,233,0.4)] backdrop-blur-md transform rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-700 ease-in-out border border-white/20 flex flex-col justify-between p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full" />
              <div className="space-y-2">
                <div className="w-full h-2 bg-white/20 rounded-full" />
                <div className="w-2/3 h-2 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="absolute right-[20%] top-[25%] w-16 h-16 bg-brand-glow/30 backdrop-blur border border-white/10 rounded-xl shadow-lg transform -rotate-12 animate-pulse" />
            <div
              className="absolute left-[20%] bottom-[30%] w-20 h-20 bg-brand-secondary/30 backdrop-blur border border-white/10 rounded-xl shadow-lg transform rotate-6 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
