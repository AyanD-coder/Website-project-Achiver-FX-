import Link from "next/link";
import type { SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type BenefitCard = {
  accent: string;
  description: string;
  icon: LucideIcon;
  title: string;
};

type PlatformCard = {
  badge?: string;
  ctaLabel: string;
  description: string;
  kind: "desktop" | "mobile" | "web";
  platform: string;
  title: string;
};

type TradingFeature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const benefitCards: BenefitCard[] = [
  {
    title: "Lightning Fast",
    description:
      "Execute trades with zero latency on our optimized servers.",
    icon: Zap,
    accent:
      "border-sky-300/26 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(14,165,233,0.03))] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.9),rgba(255,255,255,0.88))]",
  },
  {
    title: "Secure & Reliable",
    description:
      "Your funds are protected with top-tier encryption standards.",
    icon: ShieldCheck,
    accent:
      "border-emerald-300/26 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(16,185,129,0.03))] [.light_&]:border-emerald-200 [.light_&]:bg-[linear-gradient(180deg,rgba(220,252,231,0.9),rgba(255,255,255,0.88))]",
  },
  {
    title: "Advanced Tools",
    description:
      "Access 80+ indicators and professional charting tools.",
    icon: BarChart3,
    accent:
      "border-blue-300/26 bg-[linear-gradient(180deg,rgba(59,130,246,0.12),rgba(59,130,246,0.03))] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,rgba(219,234,254,0.9),rgba(255,255,255,0.88))]",
  },
];

const platformCards: PlatformCard[] = [
  {
    title: "Mobile App",
    platform: "iOS ANDROID",
    description:
      "Trade on the go with our award-winning mobile app. Full charting capabilities in your pocket.",
    ctaLabel: "App Store",
    kind: "mobile",
  },
  {
    title: "RTX5 Desktop",
    platform: "WINDOWS",
    description:
      "The ultimate trading powerhouse. Advanced technical analysis, algorithmic trading, and zero latency.",
    ctaLabel: "Download Now",
    badge: "Professional Choice",
    kind: "desktop",
  },
  {
    title: "WebTrader",
    platform: "BROWSER BASED",
    description:
      "Trade directly from any browser without installation. Instant access to global markets.",
    ctaLabel: "Launch WebTrader",
    kind: "web",
  },
];

const tradingFeatures: TradingFeature[] = [
  {
    title: "Multi-Asset Workspace",
    description:
      "Monitor multiple markets in one streamlined environment with flexible watchlists and layouts.",
    icon: Layers3,
  },
  {
    title: "Professional Charting",
    description:
      "Use advanced chart types, drawing tools, and responsive analysis panels built for active traders.",
    icon: TrendingUp,
  },
  {
    title: "Real-Time Market Depth",
    description:
      "Stay closer to price action with fast updates, deeper visibility, and precise execution flows.",
    icon: Globe2,
  },
  {
    title: "Smart Device Continuity",
    description:
      "Move between desktop, browser, and mobile without losing your trading rhythm.",
    icon: Smartphone,
  },
];

function SectionBadge({
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

function BenefitCard({ accent, description, icon: Icon, title }: BenefitCard) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.55rem] border p-5 shadow-[0_18px_44px_rgba(2,8,20,0.14)] transition-all duration-300 hover:-translate-y-1 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.06)]",
        accent,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.dark_&]:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_38%)]" />
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/90 text-slate-900 shadow-[0_10px_22px_rgba(15,23,42,0.12)] [.dark_&]:border-white/10 [.dark_&]:bg-white/10 [.dark_&]:text-white [.dark_&]:shadow-[0_10px_24px_rgba(2,8,20,0.18)]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950 [.dark_&]:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 [.dark_&]:text-slate-300">
          {description}
        </p>
      </div>
    </article>
  );
}

function AppStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M15.9 4.7c-.7.8-1.1 1.9-1.1 3c1 .1 2.1-.5 2.8-1.4c.7-.8 1.1-1.8 1-2.9c-1 .1-2.1.6-2.7 1.3Z"
        fill="currentColor"
      />
      <path
        d="M18.6 10.8c0-1.8 1.4-2.7 1.5-2.8c-.8-1.2-2.1-1.4-2.6-1.4c-1.1-.1-2.1.7-2.7.7s-1.4-.7-2.3-.7c-1.5 0-2.9.9-3.7 2.3c-1.6 2.8-.4 6.9 1.2 9.2c.8 1.1 1.7 2.4 2.9 2.3c1.1 0 1.5-.8 3-.8c1.4 0 1.8.8 3 .8c1.2 0 2-1.1 2.8-2.2c.9-1.3 1.3-2.6 1.3-2.7c-.1 0-2.8-1.1-2.8-3.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.6 4.3L13.4 12L4.6 19.7c-.4-.4-.6-.9-.6-1.7V6c0-.7.2-1.3.6-1.7Z" fill="#00d084" />
      <path d="M13.4 12l2.5-2.4l3.3 1.9c.8.5.8 1.3 0 1.8l-3.3 1.9L13.4 12Z" fill="#fbbf24" />
      <path d="M4.6 4.3l9.5 5.3L13.4 12L4.6 4.3Z" fill="#38bdf8" />
      <path d="M4.6 19.7l8.8-7.7l.7 2.4l-9.5 5.3Z" fill="#f43f5e" />
    </svg>
  );
}

function MonitorVisual() {
  return (
    <div className="relative mx-auto h-[14rem] w-full max-w-[18rem]">
      <div className="absolute left-1/2 top-2 h-36 w-36 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl [.light_&]:bg-emerald-300/28" />
      <div className="relative mx-auto w-[16rem] rounded-[1.6rem] border border-white/14 bg-[linear-gradient(180deg,rgba(16,27,45,0.98),rgba(7,14,24,0.98))] p-3 shadow-[0_26px_60px_rgba(2,8,20,0.24)] [.light_&]:border-slate-200/80 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(226,232,240,0.94))] [.light_&]:shadow-[0_24px_56px_rgba(15,23,42,0.12)]">
        <div className="rounded-[1.1rem] border border-white/8 bg-[#05101b] p-3 [.light_&]:border-slate-200/80 [.light_&]:bg-[linear-gradient(180deg,rgba(248,251,255,0.96),rgba(231,239,249,0.94))]">
          <svg viewBox="0 0 240 120" className="h-28 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="rtx-desktop-line" x1="16" y1="10" x2="226" y2="98">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            {Array.from({ length: 4 }).map((_, index) => (
              <line
                key={`desktop-row-${index}`}
                x1="10"
                x2="230"
                y1={20 + index * 24}
                y2={20 + index * 24}
                stroke="rgba(148,163,184,0.22)"
                strokeDasharray="4 8"
              />
            ))}
            <path
              d="M16 84C36 80 48 52 66 58C84 64 94 26 118 30C140 34 154 74 174 68C194 62 208 34 224 22"
              stroke="url(#rtx-desktop-line)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mx-auto mt-3 h-3 w-16 rounded-full bg-white/12 [.light_&]:bg-slate-300/80" />
      </div>
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="relative mx-auto h-[14rem] w-full max-w-[18rem]">
      <div className="absolute left-1/2 top-6 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400/14 blur-3xl [.light_&]:bg-sky-300/28" />
      <div className="absolute left-5 top-7 h-5 w-5 rotate-12 rounded-md border border-sky-300/40 bg-sky-300/12 [.light_&]:border-sky-300/50 [.light_&]:bg-sky-100/80" />
      <div className="absolute right-7 top-5 h-4 w-4 rounded-full border border-white/16 bg-white/10 [.light_&]:border-slate-300/50 [.light_&]:bg-white/60" />
      <div className="absolute bottom-7 left-8 h-4 w-4 rounded-full border border-white/16 bg-white/10 [.light_&]:border-slate-300/50 [.light_&]:bg-white/70" />
      <div className="absolute left-1/2 top-4 w-[9.7rem] -translate-x-1/2 -rotate-[18deg] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(11,19,34,0.98),rgba(4,9,18,0.98))] p-[0.38rem] shadow-[0_28px_70px_rgba(2,8,20,0.26)] [.light_&]:border-slate-200/80 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(226,232,240,0.94))] [.light_&]:shadow-[0_28px_64px_rgba(15,23,42,0.14)]">
        <div className="rounded-[1.7rem] border border-white/10 bg-[#04101c] p-3 [.light_&]:border-slate-100/90 [.light_&]:bg-[linear-gradient(180deg,rgba(246,250,255,0.98),rgba(225,236,248,0.98))] [.light_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
          <div className="mx-auto h-1.5 w-14 rounded-full bg-white/10 [.light_&]:bg-slate-400/30" />
          <svg viewBox="0 0 120 220" className="mt-3 h-44 w-full text-slate-400/20 [.light_&]:text-slate-400/40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="rtx-mobile-line" x1="8" y1="20" x2="104" y2="198">
                <stop stopColor="#22d3ee" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
            {Array.from({ length: 5 }).map((_, index) => (
              <line
                key={`mobile-row-${index}`}
                x1="8"
                x2="110"
                y1={24 + index * 34}
                y2={24 + index * 34}
                stroke="currentColor"
                strokeDasharray="4 8"
              />
            ))}
            <path
              d="M12 170C24 164 30 146 42 128C54 110 60 130 72 106C84 82 92 50 106 34"
              stroke="url(#rtx-mobile-line)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BrowserVisual() {
  return (
    <div className="relative mx-auto h-[14rem] w-full max-w-[18rem]">
      <div className="absolute right-8 top-1 h-28 w-28 rounded-full bg-blue-400/14 blur-3xl [.light_&]:bg-violet-300/30" />
      <div className="absolute left-1/2 top-6 w-[16.5rem] -translate-x-1/2 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(18,30,54,0.96),rgba(7,15,28,0.98))] p-3 shadow-[0_24px_56px_rgba(2,8,20,0.22)] [.light_&]:border-slate-200/80 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,245,255,0.96))] [.light_&]:shadow-[0_24px_52px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mt-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-3 [.light_&]:border-slate-200/70 [.light_&]:bg-white/90">
          <svg viewBox="0 0 220 110" className="h-28 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="rtx-web-line" x1="12" y1="12" x2="210" y2="82">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#c084fc" />
              </linearGradient>
            </defs>
            <path
              d="M18 82C38 72 50 36 74 42C98 48 112 84 136 70C160 56 178 34 202 20"
              stroke="url(#rtx-web-line)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ badge, ctaLabel, description, kind, platform, title }: PlatformCard) {
  const isMobile = kind === "mobile";
  const isDesktop = kind === "desktop";
  const lightGlowClass = isMobile
    ? "[.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]"
    : isDesktop
      ? "[.light_&]:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_34%)]"
      : "[.light_&]:bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.14),transparent_34%)]";

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,248,255,0.96))] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.12)] [.dark_&]:border-cyan-300/12 [.dark_&]:bg-[linear-gradient(180deg,rgba(8,15,29,0.96),rgba(4,8,18,0.98))] [.dark_&]:shadow-[0_24px_60px_rgba(2,8,20,0.24)] [.dark_&]:hover:border-cyan-300/24 [.dark_&]:hover:shadow-[0_30px_70px_rgba(14,165,233,0.16)]">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.dark_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_32%)]",
          lightGlowClass,
        )}
      />
      <div className="relative">
        <div className="min-h-[15rem]">
          {isMobile ? <PhoneVisual /> : isDesktop ? <MonitorVisual /> : <BrowserVisual />}
        </div>

        <div className="mt-2 text-center">
          {badge ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-emerald-700 [.dark_&]:border-emerald-300/16 [.dark_&]:bg-emerald-400/10 [.dark_&]:text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </span>
          ) : null}
          <h3 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.05em] text-slate-950 [.dark_&]:text-white">
            {title}
          </h3>
          <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500 [.dark_&]:text-cyan-100/55">
            {platform}
          </p>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-slate-600 [.dark_&]:text-slate-400">
            {description}
          </p>
        </div>

        <div className="mt-8">
          {isMobile ? (
            <div className="grid gap-3">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0f172a] px-5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(15,23,42,0.16)] [.light_&]:border-slate-300 [.light_&]:bg-white [.light_&]:text-slate-900 [.light_&]:shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
              >
                <AppStoreIcon className="h-5 w-5" />
                App Store
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 text-sm font-semibold text-white [.light_&]:border-slate-300 [.light_&]:bg-white [.light_&]:text-slate-900 [.light_&]:shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
              >
                <PlayIcon className="h-5 w-5" />
                Google Play
              </Link>
            </div>
          ) : (
            <Button
              asChild
              className="h-12 w-full rounded-full text-sm"
            >
              <Link href="#" className="inline-flex items-center justify-center gap-2">
                {isDesktop ? <ArrowRight className="h-4 w-4" /> : <Globe2 className="h-4 w-4" />}
                {ctaLabel}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ description, icon: Icon, title }: TradingFeature) {
  return (
    <article className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,248,255,0.95))] p-6 shadow-[0_18px_46px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_50px_rgba(37,99,235,0.1)] [.dark_&]:border-cyan-300/12 [.dark_&]:bg-[linear-gradient(180deg,rgba(8,14,28,0.96),rgba(4,8,18,0.98))] [.dark_&]:hover:border-cyan-300/24 [.dark_&]:hover:shadow-[0_24px_56px_rgba(14,165,233,0.14)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.dark_&]:bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%)]" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50/90 text-sky-700 [.dark_&]:border-cyan-300/16 [.dark_&]:bg-cyan-400/10 [.dark_&]:text-cyan-100">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950 [.dark_&]:text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 [.dark_&]:text-slate-400">
          {description}
        </p>
      </div>
    </article>
  );
}

function SupportSeal() {
  return (
    <div className="relative mx-auto h-48 w-48">
      <div className="absolute inset-0 rounded-full bg-emerald-300/34 blur-3xl [.dark_&]:bg-emerald-400/18" />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-emerald-300/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(236,253,245,0.96))] shadow-[0_22px_50px_rgba(15,118,110,0.16)] [.dark_&]:border-emerald-400 [.dark_&]:bg-[linear-gradient(180deg,rgba(6,21,20,0.98),rgba(7,31,29,0.96))] [.dark_&]:shadow-[0_22px_56px_rgba(5,150,105,0.24)]">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-50 text-emerald-700 [.dark_&]:border-emerald-300/24 [.dark_&]:bg-emerald-400/10 [.dark_&]:text-emerald-300">
            <BadgeCheck className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RTX5PlatformPage({
  showHero = true,
}: {
  showHero?: boolean;
} = {}) {
  return (
    <div className="w-full">
      {showHero ? (
        <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,18,28,0.94),rgba(5,10,20,0.98))] px-6 py-14 shadow-[0_34px_120px_rgba(2,8,20,0.3)] sm:px-8 sm:py-16 lg:px-10 [.light_&]:border-sky-100/90 [.light_&]:bg-[linear-gradient(180deg,rgba(249,253,255,0.98),rgba(239,249,246,0.96))] [.light_&]:shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(52,211,153,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(16,185,129,0.1),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_36%)]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.07]" />
          </div>

          <div className="relative text-center">
            <SectionBadge>Platforms</SectionBadge>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
              Get Flexy Markets RTX5
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
              Begin trading on one of the industry&apos;s top multi-asset
              platforms and harness the strength of a trusted global broker.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
              {benefitCards.map((card) => (
                <BenefitCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
        </section>
      ) : null}

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="pointer-events-none absolute inset-x-8 top-0 -z-10 h-56 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_70%)] blur-3xl [.dark_&]:hidden" />
        <div className="grid gap-6 lg:grid-cols-3">
          {platformCards.map((card) => (
            <PlatformCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section
        id="advanced-features"
        className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge className="justify-center">TRADING FEATURES</SectionBadge>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
            Advanced Trading Features
          </h2>
          <p className="mt-4 text-base text-slate-400 [.light_&]:text-slate-600">
            Explore our platform with instant features, advanced tools, and more!
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-10 top-24 -z-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.1),transparent_66%)] blur-3xl [.dark_&]:hidden" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tradingFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,248,255,0.96))] px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-14 [.dark_&]:border-cyan-300/12 [.dark_&]:bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] [.dark_&]:shadow-[0_30px_80px_rgba(2,8,20,0.22)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.1),transparent_24%),radial-gradient(circle_at_18%_24%,rgba(59,130,246,0.1),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.8),transparent_28%)] [.dark_&]:bg-[radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_18%_24%,rgba(37,99,235,0.14),transparent_26%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-5xl [.dark_&]:text-white">
                Rely on Award-Winning
                <br />
                Support
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 [.dark_&]:text-slate-400">
                Whenever you need us we&apos;re just a few seconds away, 24/7,
                in extensive language options.
              </p>
              <div className="mt-8">
                <Button asChild className="h-12 rounded-full px-7 text-sm">
                  <Link href="/company/contact-us" className="inline-flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <SupportSeal />
          </div>
        </div>
      </section>
    </div>
  );
}
