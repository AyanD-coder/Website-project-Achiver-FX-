"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  ChartCandlestick,
  LockKeyhole,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type Item = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const featureButtons = [
  { icon: Zap, label: "Instant" },
  { icon: MousePointerClick, label: "Precise" },
  { icon: ShieldCheck, label: "Secure" },
  { icon: Sparkles, label: "Simple" },
];

const coreFeatures: Item[] = [
  {
    icon: TrendingUp,
    title: "Live Market Updates",
    description: "Track market movement, watchlists, and price shifts in a clean browser workspace.",
  },
  {
    icon: BarChart3,
    title: "Smart Chart Tools",
    description: "Review chart structure, indicators, and market behavior with focused visual tools.",
  },
  {
    icon: MousePointerClick,
    title: "Smooth Order Placement",
    description: "Move from market review to order entry through a fast, no-install workflow.",
  },
  {
    icon: LockKeyhole,
    title: "Protected Access",
    description: "Use secure browser access designed for reliable trading sessions and account flow.",
  },
];

const userTypes: Item[] = [
  {
    icon: ChartCandlestick,
    title: "Active Traders",
    description: "For traders who need quick chart access and market visibility throughout the session.",
  },
  {
    icon: UserRound,
    title: "Newcomers",
    description: "A simpler browser workspace for learning markets without heavy platform setup.",
  },
  {
    icon: Briefcase,
    title: "Busy Traders",
    description: "Launch from the browser and check markets when your day keeps moving.",
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
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function WebTraderHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [16, -16],
  );

  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute left-10 top-10 h-2 w-2 rounded-full bg-sky-300/50 shadow-[0_0_24px_rgba(56,189,248,0.55)]" />
        <div className="pointer-events-none absolute right-[22%] top-16 h-1.5 w-1.5 rounded-full bg-sky-200/40 shadow-[0_0_20px_rgba(56,189,248,0.45)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Achiever WebTrader
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                Achiever WebTrader – Trade Anytime, Anywhere
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                Launch a refined browser workspace for live charts, market
                watchlists, and fast order preparation without installing
                desktop software.
              </p>
              <div className="mt-8">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href="/markets/account-types">
                    Trade Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src="/achiever-web-trader/webtrader-dashboard.webp"
                alt="Clean dark web trading platform interface with blue candlestick chart, order panel, and price list."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(2,6,23,0.28)_100%)]" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function FeatureIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src="/achiever-web-trader/webtrader-screens-replacement.jfif"
              alt="Desktop and tablet trading screens with clean dark charts and market watchlist."
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Browser Platform
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Trade Smarter, Wherever You Are
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              WebTrader gives you a focused browser experience for checking
              prices, reading charts, and preparing trades across devices.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featureButtons.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[0_18px_50px_rgba(2,8,20,0.16)] backdrop-blur-sm hover:border-sky-300/30 hover:shadow-[0_20px_54px_rgba(56,189,248,0.12)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(56,189,248,0.035),transparent_36%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Core Features
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
              WebTrader – Simplified Trading at Your Fingertips
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_22px_70px_rgba(2,8,20,0.18)] backdrop-blur-md [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_34px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={cn(
                  "group relative p-6 transition-colors duration-300 hover:bg-sky-300/[0.055] [.light_&]:hover:bg-sky-50",
                  index > 0 &&
                    "lg:border-l lg:border-white/10 [.light_&]:lg:border-slate-200",
                  index % 2 === 1 &&
                    "sm:border-l sm:border-white/10 lg:border-l [.light_&]:sm:border-slate-200",
                  index > 1 &&
                    "sm:border-t sm:border-white/10 lg:border-t-0 [.light_&]:sm:border-slate-200",
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UserTypesSection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <FadeIn>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              WebTrader Users
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Who Can Benefit from WebTrader?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              A flexible browser trading workspace for different levels of
              market experience.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {userTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <Card variant="glow" className="h-full rounded-xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
        <Image
          src="/achiever-web-trader/webtrader-cta.webp"
          alt=""
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 1180px, 100vw"
          className="object-cover opacity-[0.56]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.76)_48%,rgba(2,6,23,0.36)_100%)] [.light_&]:bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(248,251,255,0.78)_54%,rgba(248,251,255,0.46)_100%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              WebTrader Access
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Trade from the browser with clarity.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
              Open a streamlined WebTrader workspace whenever you need quick
              market access.
            </p>
          </div>

          <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm sm:w-auto">
            <Link href="/markets/account-types">
              Trade Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function AchieverWebTraderExperience() {
  return (
    <>
      <WebTraderHeroSection />
      <FeatureIntroSection />
      <CoreFeaturesSection />
      <UserTypesSection />
      <FinalCtaSection />
    </>
  );
}
