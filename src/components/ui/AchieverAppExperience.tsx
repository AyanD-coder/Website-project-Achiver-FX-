"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Download,
  Layers,
  LineChart,
  LockKeyhole,
  Smartphone,
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

type FeaturePill = {
  icon: LucideIcon;
  label: string;
};

type BenefitCard = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const featurePills: FeaturePill[] = [
  { icon: Zap, label: "Real-time Access" },
  { icon: Smartphone, label: "Precision Execution" },
  { icon: BarChart3, label: "Powerful Analytics" },
  { icon: LockKeyhole, label: "Secure Trading" },
];

const benefitCards: BenefitCard[] = [
  {
    icon: Layers,
    title: "Advanced & Pending Orders",
    description: "Place market, limit, and pending orders with mobile control.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Stay aware of account activity and market movement on the go.",
  },
  {
    icon: LineChart,
    title: "Superior Analytical Tools",
    description: "Use chart views and indicators to evaluate setups quickly.",
  },
  {
    icon: CheckCircle2,
    title: "Seamless Functionality",
    description: "Move from watchlist to chart to trade with fewer interruptions.",
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

function StoreButtons() {
  return (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto">
        <Link href="/markets/account-types">
          <Download className="mr-2 h-4 w-4" />
          Download Android App
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="min-h-12 w-full rounded-lg border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/16 hover:text-white sm:w-auto [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-800"
      >
        <Link href="/markets/account-types">
          <Download className="mr-2 h-4 w-4" />
          Download iOS App
        </Link>
      </Button>
    </div>
  );
}

function AppIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [18, -18]);

  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Achiever App
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                Your Trading Advantage, Wherever You Are
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                Monitor markets, review charts, manage positions, and stay close
                to opportunity with a mobile trading experience built for clear,
                confident decisions.
              </p>
              <StoreButtons />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              style={{ y: phoneY }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src="/achiever-app/app-hero-phone-full.webp"
                alt="Modern smartphone with a dark trading app interface and blue candlestick charts."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(2,6,23,0.34)_100%)]" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function FeatureHighlightSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <FadeIn>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src="/achiever-app/app-feature-phone.webp"
              alt="Smartphone showing a professional dark stock trading chart interface."
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Mobile Trading
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Your Ultimate Mobile Trading Companion
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              The Achiever App keeps essential market tools within reach, with a
              dark mobile interface designed for chart review, trade management,
              and secure account access.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featurePills.map((feature, index) => {
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

function ValueSection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Why This App
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
            Achieve More with the Achiever FX App
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            Built for traders who need clarity away from the desk, the app pairs
            portable access with analysis, alerts, and order control in one
            streamlined mobile workflow.
          </p>
          <div className="mx-auto mt-8 h-px max-w-xl bg-gradient-to-r from-transparent via-sky-300/34 to-transparent [.light_&]:via-blue-200" />
          <StoreButtons />
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}

function BenefitCardsSection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefitCards.map((benefit, index) => {
          const Icon = benefit.icon;
          const isActive = index === 0;

          return (
            <FadeIn key={benefit.title} delay={index * 0.05}>
              <Card
                variant="glow"
                className={cn(
                  "h-full rounded-xl p-6",
                  isActive &&
                    "border-sky-300/38 bg-[linear-gradient(180deg,rgba(56,189,248,0.09),rgba(255,255,255,0.015)),var(--color-bg-secondary)] shadow-[0_22px_60px_rgba(56,189,248,0.14)]",
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  {benefit.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function BottomCtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
        <Image
          src="/achiever-app/app-analytics-cta.webp"
          alt=""
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 1180px, 100vw"
          className="object-cover opacity-[0.54]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.78)_48%,rgba(2,6,23,0.36)_100%)] [.light_&]:bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(248,251,255,0.78)_54%,rgba(248,251,255,0.46)_100%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Analytics
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Advanced Analytics on the Go
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
              Pair the mobile app with Achiever trading tools for deeper market
              context before and during active sessions.
            </p>
          </div>

          <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm sm:w-auto">
            <Link href="/discover/trading-tools">
              Discover Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function AchieverAppExperience() {
  return (
    <>
      <AppIntroSection />
      <FeatureHighlightSection />
      <ValueSection />
      <BenefitCardsSection />
      <BottomCtaSection />
    </>
  );
}
