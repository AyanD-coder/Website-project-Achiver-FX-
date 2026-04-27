import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  Layers,
  LineChart,
  Newspaper,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import PageLayout from "@/components/ui/PageLayout";
import { cn } from "@/lib/utils";

type DiscoverFeature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type DiscoverStat = {
  label: string;
  value: string;
};

type DiscoverResource = {
  description: string;
  icon: LucideIcon;
  label: string;
};

export type DiscoverPageData = {
  accent: "blue" | "emerald" | "amber";
  description: string;
  eyebrow: string;
  finalCta: {
    description: string;
    href: string;
    label: string;
    title: string;
  };
  features: DiscoverFeature[];
  heroImage: string;
  heroImageAlt: string;
  primaryCta: {
    href: string;
    label: string;
  };
  resources: DiscoverResource[];
  secondaryCta?: {
    href: string;
    label: string;
  };
  stats: DiscoverStat[];
  story: {
    body: string;
    kicker: string;
    points: string[];
    title: string;
  };
  title: string;
};

const accentClasses = {
  amber: {
    badge:
      "border-amber-300/25 bg-amber-300/12 text-amber-100 [.light_&]:border-amber-200 [.light_&]:bg-amber-50 [.light_&]:text-amber-700",
    icon:
      "border-amber-300/18 bg-amber-300/10 text-amber-100 [.light_&]:border-amber-200 [.light_&]:bg-amber-50 [.light_&]:text-amber-700",
    ring: "group-hover:border-amber-300/30 [.light_&]:group-hover:border-amber-200",
  },
  blue: {
    badge:
      "border-sky-300/25 bg-sky-300/12 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    icon:
      "border-sky-300/18 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    ring: "group-hover:border-sky-300/30 [.light_&]:group-hover:border-sky-200",
  },
  emerald: {
    badge:
      "border-emerald-300/25 bg-emerald-300/12 text-emerald-100 [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700",
    icon:
      "border-emerald-300/18 bg-emerald-300/10 text-emerald-100 [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700",
    ring: "group-hover:border-emerald-300/30 [.light_&]:group-hover:border-emerald-200",
  },
} satisfies Record<
  DiscoverPageData["accent"],
  { badge: string; icon: string; ring: string }
>;

export const discoverPages = {
  analysisReport: {
    accent: "blue",
    eyebrow: "News & Analysis",
    title: "Market analysis for sharper decisions",
    description:
      "Read practical market commentary, technical context, and event-aware research built for traders who want a cleaner view of what matters next.",
    heroImage: "/discover/analysis-report.png",
    heroImageAlt:
      "AI generated market analysis desk with abstract charts and research screens.",
    primaryCta: { href: "/markets/account-types", label: "Open Account" },
    secondaryCta: { href: "/tools/economic-calendar", label: "View Calendar" },
    stats: [
      { value: "Daily", label: "Market notes" },
      { value: "Multi-asset", label: "Coverage" },
      { value: "Macro + tech", label: "Context" },
    ],
    features: [
      {
        icon: Newspaper,
        title: "Market Briefs",
        description:
          "Follow concise updates across currencies, commodities, indices, and digital assets.",
      },
      {
        icon: LineChart,
        title: "Technical Setups",
        description:
          "Spot key levels, trend shifts, and price zones before you place a trade.",
      },
      {
        icon: Search,
        title: "Macro Context",
        description:
          "Connect price action to rates, inflation, employment, and risk sentiment.",
      },
    ],
    story: {
      kicker: "Research Workflow",
      title: "From headline noise to trade-ready context.",
      body: "Each analysis page is shaped to help you scan quickly, compare instruments, and decide what deserves more attention before the next session opens.",
      points: [
        "Clear market drivers",
        "Actionable support and resistance areas",
        "Event risk called out before volatility expands",
      ],
    },
    resources: [
      {
        icon: BarChart3,
        label: "Technical View",
        description: "Trend, momentum, and volatility clues in one place.",
      },
      {
        icon: Globe2,
        label: "Global Themes",
        description: "Macro developments across major trading sessions.",
      },
      {
        icon: Clock3,
        label: "Session Prep",
        description: "A practical rhythm for London, New York, and Asia.",
      },
    ],
    finalCta: {
      title: "Pair research with live market access.",
      description:
        "Use Achiever account types and platform tools to move from analysis to execution with more confidence.",
      href: "/markets/account-types",
      label: "Compare Accounts",
    },
  },
  blogs: {
    accent: "amber",
    eyebrow: "Blogs",
    title: "Trading ideas with useful context",
    description:
      "Explore market explainers, platform tips, and trading perspectives written to make daily decision-making less noisy.",
    heroImage: "/discover/blogs.png",
    heroImageAlt:
      "AI generated editorial trading blog workspace with abstract articles and charts.",
    primaryCta: { href: "/tools/analysis-report", label: "Read Analysis" },
    secondaryCta: { href: "/tools/education", label: "Start Learning" },
    stats: [
      { value: "Guides", label: "For every level" },
      { value: "Ideas", label: "Market themes" },
      { value: "Tips", label: "Platform habits" },
    ],
    features: [
      {
        icon: PenLine,
        title: "Practical Articles",
        description:
          "Readable posts focused on market behavior, platform use, and trader routines.",
      },
      {
        icon: Target,
        title: "Strategy Angles",
        description:
          "Simple frameworks for thinking about entries, exits, and risk.",
      },
      {
        icon: Sparkles,
        title: "Fresh Perspectives",
        description:
          "Timely ideas that help you build a broader market vocabulary.",
      },
    ],
    story: {
      kicker: "Editorial Lens",
      title: "Content built for real trading days.",
      body: "The blog experience keeps explanations focused and scan-friendly, so readers can learn a concept, connect it to current markets, and keep moving.",
      points: [
        "Plain-language explainers",
        "Market structure and platform tips",
        "Risk-aware takeaways at the end of each read",
      ],
    },
    resources: [
      {
        icon: FileText,
        label: "Market Explainers",
        description: "Break down topics without burying the useful part.",
      },
      {
        icon: BarChart3,
        label: "Chart Lessons",
        description: "Understand patterns, levels, and timing cues.",
      },
      {
        icon: ShieldCheck,
        label: "Risk Notes",
        description: "Keep trade planning grounded before position sizing.",
      },
    ],
    finalCta: {
      title: "Turn reading into a stronger trading routine.",
      description:
        "Move from blog ideas to structured education or deeper market reports whenever you are ready.",
      href: "/tools/education",
      label: "Explore Education",
    },
  },
  economicCalendar: {
    accent: "emerald",
    eyebrow: "Economic Calendar",
    title: "Track events before they move markets",
    description:
      "Prepare for inflation releases, rate decisions, jobs data, and other macro events that can reshape volatility across assets.",
    heroImage: "/discover/economic-calendar.png",
    heroImageAlt:
      "AI generated economic calendar dashboard with abstract event timelines and world map accents.",
    primaryCta: { href: "/markets/account-types", label: "Open Account" },
    secondaryCta: { href: "/tools/analysis-report", label: "Read Analysis" },
    stats: [
      { value: "Global", label: "Event coverage" },
      { value: "Impact", label: "Priority signals" },
      { value: "Session", label: "Planning view" },
    ],
    features: [
      {
        icon: CalendarDays,
        title: "Event Planning",
        description:
          "Prepare around high-impact economic releases before volatility arrives.",
      },
      {
        icon: Bell,
        title: "Impact Awareness",
        description:
          "See which releases may matter most for currencies, indices, and commodities.",
      },
      {
        icon: Clock3,
        title: "Session Timing",
        description:
          "Build a trading plan around regional sessions and scheduled data windows.",
      },
    ],
    story: {
      kicker: "Calendar Workflow",
      title: "Know when the market may get louder.",
      body: "The economic calendar page is designed around preparation: what is coming, why it may matter, and how traders can avoid being surprised by scheduled risk.",
      points: [
        "Filter by event importance",
        "Connect releases to watched instruments",
        "Review upcoming macro clusters before sessions begin",
      ],
    },
    resources: [
      {
        icon: Globe2,
        label: "Global Releases",
        description: "Track data across major economies and sessions.",
      },
      {
        icon: TrendingUp,
        label: "Volatility Windows",
        description: "Plan for spreads, slippage, and fast price moves.",
      },
      {
        icon: CheckCircle2,
        label: "Prep Checklist",
        description: "Review exposure before high-impact events land.",
      },
    ],
    finalCta: {
      title: "Trade scheduled volatility with a plan.",
      description:
        "Combine event awareness with platform tools, account choice, and disciplined risk controls.",
      href: "/platform",
      label: "Explore Platform",
    },
  },
  education: {
    accent: "blue",
    eyebrow: "Education",
    title: "Build trading knowledge one clear lesson at a time",
    description:
      "Learn market foundations, platform workflows, and risk habits through structured education designed for new and developing traders.",
    heroImage: "/discover/education.png",
    heroImageAlt:
      "AI generated trading education desk with abstract course cards and charting tablet.",
    primaryCta: { href: "/markets/account-types", label: "Start Trading" },
    secondaryCta: { href: "/tools/blogs", label: "Read Blogs" },
    stats: [
      { value: "Beginner", label: "Friendly tracks" },
      { value: "Risk-first", label: "Planning habits" },
      { value: "Platform", label: "MT5 guidance" },
    ],
    features: [
      {
        icon: BookOpen,
        title: "Core Lessons",
        description:
          "Understand market types, order flow basics, leverage, and trading terminology.",
      },
      {
        icon: ShieldCheck,
        title: "Risk Foundations",
        description:
          "Learn position sizing, stop placement, and practical exposure control.",
      },
      {
        icon: BarChart3,
        title: "Chart Fluency",
        description:
          "Build confidence reading trends, support, resistance, and volatility.",
      },
    ],
    story: {
      kicker: "Learning Path",
      title: "A calmer way to learn markets.",
      body: "Education pages should help traders move from curiosity to capability without flooding them with jargon. Each section supports a focused next step.",
      points: [
        "Short lessons with clear outcomes",
        "Examples connected to live market categories",
        "Risk and psychology included from the beginning",
      ],
    },
    resources: [
      {
        icon: Layers,
        label: "Foundations",
        description: "Start with the market mechanics every trader should know.",
      },
      {
        icon: Target,
        label: "Practice Plans",
        description: "Use structured routines before moving into live decisions.",
      },
      {
        icon: Zap,
        label: "Platform Skills",
        description: "Get comfortable with tools, charts, orders, and alerts.",
      },
    ],
    finalCta: {
      title: "Keep learning while you explore the markets.",
      description:
        "Move from education into account types, platform tools, and market pages when you are ready to compare your next step.",
      href: "/markets/account-types",
      label: "View Account Types",
    },
  },
  offerings: {
    accent: "emerald",
    eyebrow: "Offerings",
    title: "A complete trading suite in one place",
    description:
      "Explore account access, platforms, instruments, insights, and support designed to help traders work with more clarity.",
    heroImage: "/discover/offerings.png",
    heroImageAlt:
      "AI generated brokerage offering suite with abstract product cards and market visuals.",
    primaryCta: { href: "/markets/account-types", label: "Compare Accounts" },
    secondaryCta: { href: "/platform", label: "Explore Platform" },
    stats: [
      { value: "3000+", label: "Instruments" },
      { value: "MT5", label: "Platform access" },
      { value: "Multi-asset", label: "Market range" },
    ],
    features: [
      {
        icon: Briefcase,
        title: "Account Choice",
        description:
          "Compare account structures based on deposits, spreads, leverage, and trading needs.",
      },
      {
        icon: Globe2,
        title: "Market Access",
        description:
          "Trade across forex, metals, indices, commodities, energies, shares, and crypto CFDs.",
      },
      {
        icon: Wrench,
        title: "Platform Tools",
        description:
          "Use charting, execution tools, analysis resources, and calendar context together.",
      },
    ],
    story: {
      kicker: "Product Suite",
      title: "Everything should connect cleanly.",
      body: "The offerings page brings the broker experience together, giving visitors a single place to understand what they can trade, how they can trade, and what support is available.",
      points: [
        "Account, platform, and market pages linked together",
        "Tools and analysis positioned as practical support",
        "Clear next actions for registration and comparison",
      ],
    },
    resources: [
      {
        icon: Layers,
        label: "Account Types",
        description: "Choose the structure that fits your trading approach.",
      },
      {
        icon: LineChart,
        label: "Markets",
        description: "Find the instruments and conditions that matter to you.",
      },
      {
        icon: ShieldCheck,
        label: "Support",
        description: "Use guided resources before and after opening an account.",
      },
    ],
    finalCta: {
      title: "Explore the Achiever trading environment.",
      description:
        "Start with account types or review the platform to see how the pieces work together.",
      href: "/markets/account-types",
      label: "Compare Accounts",
    },
  },
  tradingTools: {
    accent: "blue",
    eyebrow: "Trading Tools",
    title: "Tools built for daily market decisions",
    description:
      "Use analysis resources, calendar context, platform workflows, and structured watch tools to prepare and act with more confidence.",
    heroImage: "/discover/trading-tools.png",
    heroImageAlt:
      "AI generated professional trading toolkit with abstract multi-screen dashboard modules.",
    primaryCta: { href: "/tools/analysis-report", label: "View Analysis" },
    secondaryCta: { href: "/tools/economic-calendar", label: "Open Calendar" },
    stats: [
      { value: "Signals", label: "Context tools" },
      { value: "Calendar", label: "Event planning" },
      { value: "Reports", label: "Market prep" },
    ],
    features: [
      {
        icon: BarChart3,
        title: "Analysis Reports",
        description:
          "Review market structure, trend context, and active trading themes.",
      },
      {
        icon: CalendarDays,
        title: "Economic Calendar",
        description:
          "Plan around scheduled data releases and potential volatility spikes.",
      },
      {
        icon: Bell,
        title: "Watch Routines",
        description:
          "Build repeatable habits around alerts, levels, and session preparation.",
      },
    ],
    story: {
      kicker: "Decision Support",
      title: "A focused toolkit for preparation and timing.",
      body: "Trading tools should reduce friction, not add another dashboard to babysit. This page groups the resources a trader reaches for before and during active sessions.",
      points: [
        "Analysis and calendar pages kept one click away",
        "Tool categories organized by trading workflow",
        "Clear calls to action for research, platform, and account setup",
      ],
    },
    resources: [
      {
        icon: Newspaper,
        label: "News & Analysis",
        description: "Read market notes before choosing your next setup.",
      },
      {
        icon: CalendarDays,
        label: "Calendar",
        description: "Prepare around economic releases and central bank events.",
      },
      {
        icon: Target,
        label: "Trade Prep",
        description: "Create a practical watchlist before execution.",
      },
    ],
    finalCta: {
      title: "Bring your tools and platform together.",
      description:
        "Explore RTX 5 and MT5 platform pages to connect research with execution.",
      href: "/platform",
      label: "Explore Platform",
    },
  },
} satisfies Record<string, DiscoverPageData>;

function HeroStat({ label, value }: DiscoverStat) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_14px_34px_rgba(2,8,20,0.2)] backdrop-blur-md">
      <p className="text-xl font-semibold tracking-normal text-white">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/64">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ accent, description, icon: Icon, title }: DiscoverFeature & {
  accent: DiscoverPageData["accent"];
}) {
  const styles = accentClasses[accent];

  return (
    <Card
      variant="glow"
      className={cn(
        "group h-full rounded-lg border-white/10 p-0",
        styles.ring,
      )}
    >
      <CardHeader className="p-6">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg border",
            styles.icon,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </div>
        <CardTitle className="mt-5 text-xl tracking-normal">{title}</CardTitle>
        <CardDescription className="text-sm leading-6">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function ResourceItem({
  accent,
  description,
  icon: Icon,
  label,
}: DiscoverResource & {
  accent: DiscoverPageData["accent"];
}) {
  const styles = accentClasses[accent];

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.05)] [.light_&]:hover:border-sky-200">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
            styles.icon,
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-normal text-white [.light_&]:text-slate-950">
            {label}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function DiscoverPage({ page }: { page: DiscoverPageData }) {
  const styles = accentClasses[page.accent];

  return (
    <PageLayout>
      <section className="relative flex min-h-[78svh] w-full items-end overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_46%,rgba(2,6,23,0.3)_100%),linear-gradient(180deg,rgba(2,6,23,0.42)_0%,rgba(2,6,23,0.32)_48%,rgba(4,8,20,0.95)_100%)]" />
          <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]" />

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <Badge className={cn("px-4 py-1.5 uppercase tracking-[0.2em]", styles.badge)}>
                {page.eyebrow}
              </Badge>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                {page.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-lg px-6 text-sm">
                  <Link href={page.primaryCta.href}>
                    {page.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {page.secondaryCta ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-lg border-white/20 bg-white/10 px-6 text-sm text-white hover:bg-white/16 hover:text-white"
                  >
                    <Link href={page.secondaryCta.href}>
                      {page.secondaryCta.label}
                    </Link>
                  </Button>
                ) : null}
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {page.stats.map((stat) => (
                  <HeroStat key={`${stat.value}-${stat.label}`} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              className={cn(
                "px-4 py-1.5 uppercase tracking-[0.2em]",
                styles.badge,
              )}
            >
              Discover
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Built around the way traders prepare.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Each page keeps its content focused, practical, and connected to
              the wider Achiever trading experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                accent={page.accent}
                {...feature}
              />
            ))}
          </div>
        </SectionWrapper>

        <section className="relative w-full bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <Image
                src={page.heroImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(2,6,23,0.54)_100%)]" />
            </div>

            <div>
              <Badge
                className={cn(
                  "px-4 py-1.5 uppercase tracking-[0.2em]",
                  styles.badge,
                )}
              >
                {page.story.kicker}
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                {page.story.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                {page.story.body}
              </p>

              <div className="mt-7 grid gap-3">
                {page.story.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                    <p className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <Badge
                className={cn(
                  "px-4 py-1.5 uppercase tracking-[0.2em]",
                  styles.badge,
                )}
              >
                Resources
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                What visitors can explore next.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Fast paths into the parts of Discover that help traders learn,
                prepare, and act.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {page.resources.map((resource) => (
                <ResourceItem
                  key={resource.label}
                  accent={page.accent}
                  {...resource}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.12]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                  {page.finalCta.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                  {page.finalCta.description}
                </p>
              </div>

              <Button asChild className="h-12 rounded-lg px-7 text-sm">
                <Link href={page.finalCta.href}>
                  {page.finalCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
