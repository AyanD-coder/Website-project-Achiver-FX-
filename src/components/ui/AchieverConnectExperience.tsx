"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Clock3,
  Copy,
  Download,
  GraduationCap,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type ConnectCard = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const journeyCards: ConnectCard[] = [
  {
    icon: Users,
    title: "Discover Skilled Traders",
    description:
      "Browse strategy providers and identify traders aligned with your market goals.",
  },
  {
    icon: BarChart3,
    title: "Evaluate Trading Insights",
    description:
      "Review performance behavior, drawdowns, consistency, and strategy context.",
  },
  {
    icon: Bot,
    title: "Copy and Trade",
    description:
      "Follow selected strategies while keeping control over allocation and exposure.",
  },
];

const whyCards: ConnectCard[] = [
  {
    icon: GraduationCap,
    title: "Beginner-Friendly",
    description: "Start with guided strategy discovery instead of building alone.",
  },
  {
    icon: Clock3,
    title: "Time-Saving",
    description: "Reduce research friction by following structured trader profiles.",
  },
  {
    icon: TrendingUp,
    title: "For All Levels",
    description: "Use copy trading for learning, diversification, or workflow speed.",
  },
  {
    icon: BookOpen,
    title: "Smart Learning",
    description: "Observe professional decisions and turn market activity into context.",
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
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto">
        <Link href="/markets/account-types">
          <Download className="mr-2 h-4 w-4" />
          App Store
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="min-h-12 w-full rounded-lg border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/16 hover:text-white sm:w-auto [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-800"
      >
        <Link href="/markets/account-types">
          <Download className="mr-2 h-4 w-4" />
          Google Play
        </Link>
      </Button>
    </div>
  );
}

function ConnectHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dashboardY = useTransform(
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
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Achiever Connect
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                Simplify Success Trade Smarter with Achiever FX
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                Discover proven strategies, evaluate trader performance, and
                copy market decisions through a clean trading workflow built for
                confidence.
              </p>
              <div className="mt-8">
                <Button asChild className="min-h-12 rounded-lg px-6 py-3 text-sm">
                  <Link href="/markets/account-types">
                    Trade on Achiever Connect
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              style={{ y: dashboardY }}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src="/achiever-connect/connect-dashboard.webp"
                alt="Realistic dark trading dashboard with blue candlestick charts and analytics panels."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(2,6,23,0.32)_100%)]" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function DiscoverCopyTradingSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <FadeIn>
          <Card
            variant="outline"
            className="rounded-2xl border-sky-300/15 bg-white/[0.04] p-7 shadow-[0_28px_80px_rgba(2,8,20,0.22)] backdrop-blur-md [.light_&]:bg-white sm:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
              <Copy className="h-6 w-6" />
            </div>
            <Badge className="mt-7 border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Copy Trading
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Discover Copy Trading
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
              Connect with skilled traders, compare strategy signals, and follow
              decisions with a copy trading experience designed to make market
              participation more structured.
            </p>
            <StoreButtons />
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src="/achiever-connect/connect-phones.webp"
              alt="Multiple smartphones showing dark copy trading portfolio dashboards and analytics."
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
          Copy Trading Journey
        </Badge>
        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
          Start Your Journey with Copy Trading at Achiever FX
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {journeyCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <FadeIn key={card.title} delay={index * 0.06}>
              <Card variant="glow" className="h-full rounded-xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  {card.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
          <Link href="/markets/account-types">
            Use Achiever Connect
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071827_0%,#050b16_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Why Choose Us
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
              Why Choose Achiever FX for Copy Trading?
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_22px_70px_rgba(2,8,20,0.18)] backdrop-blur-md [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_34px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
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
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
        <Image
          src="/achiever-connect/connect-network-cta.webp"
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
              Achiever Connect
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Copy trading built for cleaner decisions.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
              Connect with strategy providers, follow trading insights, and move
              into the market with more structure.
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

export default function AchieverConnectExperience() {
  return (
    <>
      <ConnectHeroSection />
      <DiscoverCopyTradingSection />
      <JourneySection />
      <WhyChooseSection />
      <FinalCtaSection />
    </>
  );
}
