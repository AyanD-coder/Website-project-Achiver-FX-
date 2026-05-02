"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Gauge,
  Layers,
  LockKeyhole,
  MonitorUp,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import PageLayout from "@/components/ui/PageLayout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type ToolCategory = {
  description: string;
  icon: LucideIcon;
  label: string;
};

type FeatureItem = {
  body: string;
  icon: LucideIcon;
  title: string;
};

const toolCategories: ToolCategory[] = [
  {
    icon: BarChart3,
    label: "Analysis",
    description: "Daily technical context, market structure, and setup notes.",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    description: "Event timing for rates, inflation, jobs data, and volatility.",
  },
  {
    icon: MonitorUp,
    label: "Platform",
    description: "Charting, order flow, alerts, and platform workflow support.",
  },
  {
    icon: RadioTower,
    label: "VPS",
    description: "Low-latency hosting support for active trading routines.",
  },
];

const vpsBadges = [
  { icon: Gauge, label: "Low latency" },
  { icon: Clock3, label: "99.9% uptime" },
  { icon: ShieldCheck, label: "Secure access" },
];

const terms = [
  "Keep your trading account active and in good standing.",
  "Meet the required monthly trading volume for VPS support.",
  "Use the VPS for trading platform access and account-related workflows.",
  "Availability may vary by account type, region, and internal review.",
];

const featureItems: FeatureItem[] = [
  {
    icon: Activity,
    title: "Market Prep Dashboard",
    body: "Group analysis, watchlists, calendar context, and session notes into a cleaner pre-trade routine.",
  },
  {
    icon: Zap,
    title: "Execution-Focused VPS",
    body: "Support platform uptime and latency-sensitive workflows with a hosted environment built for consistency.",
  },
  {
    icon: LockKeyhole,
    title: "Risk-Aware Workflow",
    body: "Use reminders, event timing, and review points to make decisions with more structure before execution.",
  },
  {
    icon: Layers,
    title: "Connected Resources",
    body: "Move between analysis reports, economic calendar pages, and platform tools without losing context.",
  },
];

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IconBadge({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/18 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100 backdrop-blur-md [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}

function ToolCategoryTabs() {
  const [active, setActive] = useState(toolCategories[0]);

  return (
    <SectionWrapper className="py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Tool Categories
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
            Choose the support layer for today&apos;s session.
          </h2>
        </div>

        <Card
          variant="outline"
          className="rounded-2xl border-white/10 bg-white/[0.035] p-3 shadow-[0_22px_70px_rgba(2,8,20,0.2)] backdrop-blur-md [.light_&]:bg-white"
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {toolCategories.map((category) => {
              const isActive = active.label === category.label;
              const Icon = category.icon;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActive(category)}
                  className={cn(
                    "group min-h-[5.75rem] rounded-xl border px-4 py-4 text-left transition-all duration-300",
                    isActive
                      ? "border-sky-300/45 bg-sky-300/12 shadow-[0_0_34px_rgba(56,189,248,0.18)]"
                      : "border-white/10 bg-white/[0.025] hover:-translate-y-0.5 hover:border-sky-300/24 hover:bg-white/[0.055]",
                    "[.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_24px_rgba(15,23,42,0.04)] [.light_&]:hover:border-sky-200",
                    isActive &&
                      "[.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:shadow-[0_12px_30px_rgba(37,99,235,0.1)]",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300",
                        isActive
                          ? "border-sky-300/35 bg-sky-300/16 text-sky-100"
                          : "border-white/10 bg-white/[0.04] text-white/70 group-hover:text-sky-100",
                        "[.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                      {category.label}
                    </span>
                  </span>
                  <span className="mt-3 block text-xs leading-5 text-slate-400 [.light_&]:text-slate-600">
                    {category.description}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}

function VpsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.13),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(37,99,235,0.12),transparent_26%)] [.light_&]:bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.07),transparent_26%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.32)] backdrop-blur-sm [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src="/tools/vps-server-stack.webp"
              alt="Futuristic VPS server stack with blue glowing edges."
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(2,6,23,0.46)_100%)]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              VPS Hosting
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Keep your trading platform closer to the market.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              A VPS setup helps active traders keep terminals available, reduce
              local-device dependency, and support cleaner execution routines
              during busy sessions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {vpsBadges.map((badge) => (
                <IconBadge key={badge.label} {...badge} />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto">
                <Link href="/platform">
                  Explore Platforms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 w-full rounded-lg border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/16 hover:text-white sm:w-auto [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-800"
              >
                <Link href="/markets/account-types">Compare Accounts</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FreeVpsCard() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <Card
          variant="glow"
          className="rounded-2xl border-sky-300/18 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(4,20,36,0.95))] p-0 shadow-[0_30px_90px_rgba(2,8,20,0.32)] backdrop-blur-md hover:border-sky-300/38 hover:shadow-[0_30px_90px_rgba(56,189,248,0.14)] [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)]"
        >
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
            <div>
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Free VPS
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                Qualifying traders can request VPS support.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Keep your workflow stable with secure cloud hosting designed for
                platform availability, remote access, and uninterrupted market
                monitoring.
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#06101d] [.light_&]:border-slate-200">
              <Image
                src="/tools/secure-cloud-vps.webp"
                alt="Secure cloud server with shield in a blue neon minimal style."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(2,6,23,0.18)_58%,rgba(2,6,23,0.58)_100%)]" />
            </div>
          </div>
        </Card>
      </FadeIn>
    </SectionWrapper>
  );
}

function TermsSection() {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,#071827_0%,#050b16_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <FadeIn>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Terms & Conditions
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Simple checks before VPS access.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              The checklist keeps requirements readable without changing the
              page&apos;s calm trading-tool tone.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card
              variant="outline"
              className="rounded-2xl border-white/10 bg-white/[0.035] p-0 shadow-[0_22px_70px_rgba(2,8,20,0.18)] backdrop-blur-md [.light_&]:bg-white"
            >
              <div className="divide-y divide-white/10 [.light_&]:divide-slate-200">
                {terms.map((term, index) => (
                  <div
                    key={term}
                    className="flex items-start gap-4 px-5 py-5 sm:px-6"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 [.light_&]:text-blue-600">
                        Requirement {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                        {term}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FeatureAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  item: FeatureItem;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  const contentId = `${item.title.toLowerCase().replaceAll(" ", "-")}-content`;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border bg-white/[0.035] shadow-[0_18px_50px_rgba(2,8,20,0.16)] backdrop-blur-md transition-all duration-300 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
        isOpen
          ? "border-sky-300/35 shadow-[0_22px_70px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200"
          : "border-white/10 hover:border-sky-300/24 [.light_&]:border-slate-200",
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="flex min-w-0 items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
            <Icon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-normal text-white [.light_&]:text-slate-950">
              {item.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
              {item.body}
            </span>
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-600"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6">
              <div className="h-px w-full bg-gradient-to-r from-sky-300/24 via-white/10 to-transparent [.light_&]:from-blue-200/50 [.light_&]:via-blue-100" />
              <p className="mt-5 text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                Designed to fit a daily rhythm: scan what moved, identify what
                matters next, then move into platform action with fewer context
                switches.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

function KeyFeaturesSection() {
  const [openItem, setOpenItem] = useState(featureItems[0].title);

  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <FadeIn>
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Key Features
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
            Built around focused trading workflows.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            The accordion keeps deeper details available without crowding the
            page.
          </p>
        </FadeIn>

        <div className="grid gap-4">
          {featureItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <FeatureAccordionItem
                item={item}
                isOpen={openItem === item.title}
                onToggle={() =>
                  setOpenItem((current) =>
                    current === item.title ? "" : item.title,
                  )
                }
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[72svh] w-full items-end overflow-hidden px-4 pb-10 pt-28 sm:min-h-[78svh] sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
      <Image
        src="/tools/trading-tools-hero.webp"
        alt="Dark trading chart lines with soft blue glow."
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.74)_48%,rgba(2,6,23,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.32)_0%,rgba(2,6,23,0.36)_48%,rgba(4,8,20,0.96)_100%)]" />
      <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]"></div>

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100">
            Trading Tools
          </Badge>

          <h1 className="mt-5 max-w-full text-3xl font-semibold leading-[1.06] tracking-normal text-white min-[380px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
            Tools built for daily market decisions
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76 sm:text-base sm:leading-8 lg:text-lg">
            Use analysis resources, calendar context, platform workflows, and
            structured watch tools to prepare and act with more confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto">
              <Link href="/discover/analysis-report">
                View Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-12 w-full rounded-lg border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/16 hover:text-white hover:shadow-[0_14px_30px_rgba(56,189,248,0.14)] sm:w-auto"
            >
              <Link href="/discover/economic-calendar">Open Calendar</Link>
            </Button>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 min-[520px]:grid-cols-3">
            {[
              { value: "Signals", label: "Context tools" },
              { value: "Calendar", label: "Event planning" },
              { value: "Reports", label: "Market prep" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_14px_34px_rgba(2,8,20,0.2)] backdrop-blur-md"
              >
                <p className="text-lg font-semibold tracking-normal text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/64">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function TradingToolsPage() {
  return (
    <PageLayout className="pt-0">
      <Hero />
      <ToolCategoryTabs />
      <VpsSection />
      <FreeVpsCard />
      <TermsSection />
      <KeyFeaturesSection />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.12]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                Bring your tools and platform together.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Explore RTX 5 and MT5 platform pages to connect research with
                execution.
              </p>
            </div>

            <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm sm:w-auto">
              <Link href="/platform">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
