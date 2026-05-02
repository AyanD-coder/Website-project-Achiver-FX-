"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Box,
  BriefcaseBusiness,
  DatabaseZap,
  Gauge,
  Layers,
  LockKeyhole,
  PackageOpen,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import TradingViewTickerTape from "@/components/ui/TradingViewTickerTape";
import { cn } from "@/lib/utils";

type CardItem = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const missionCards: CardItem[] = [
  {
    icon: Gauge,
    title: "Our Mission",
    description:
      "Make global market access clearer, faster, and more practical for traders at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Our Vision",
    description:
      "Build a trusted trading environment where platform quality, education, and service work together.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Our Services",
    description:
      "Provide account access, platforms, market resources, and support through one connected experience.",
  },
];

const trustCards: CardItem[] = [
  {
    icon: LockKeyhole,
    title: "Encrypted Data Protection",
    description:
      "Security-conscious workflows support safer access to account and platform resources.",
  },
  {
    icon: BarChart3,
    title: "Diverse Trading Instruments",
    description:
      "Access forex, indices, metals, commodities, shares, crypto CFDs, and more.",
  },
  {
    icon: Box,
    title: "Zero Commission, Maximum Profit",
    description:
      "Transparent trading conditions help clients focus on market decisions and execution.",
  },
];

const platformFeatures: CardItem[] = [
  {
    icon: PackageOpen,
    title: "Wide Product Range",
    description: "Explore a broad set of markets and account pathways.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Broker",
    description: "Work inside a platform ecosystem built around clarity.",
  },
  {
    icon: SlidersHorizontal,
    title: "Narrow Trading Range",
    description: "Review trading conditions with a focus on efficient access.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Keep costs and account choices visible before you trade.",
  },
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description: "Connect platforms, tools, research, and support in one flow.",
  },
  {
    icon: DatabaseZap,
    title: "Deep Liquidity",
    description: "Support market access with infrastructure made for active sessions.",
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

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function AboutCompanySection() {
  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                About Company
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                About Achiever Financials Ltd
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                Achiever Financials Ltd brings market access, platform support,
                education, and client service into a trading environment built
                around transparency, security, and practical decision-making.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href="/company/customer-protection">
                    Security
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-lg border-white/20 bg-white/10 px-7 py-3 text-sm text-white hover:bg-white/16 hover:text-white [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-800"
                >
                  <Link href="/discover/analysis-report">Insights</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <Image
                src="/company/about-trust/about-businessman.webp"
                alt="Professional businessman using a smartphone in a premium fintech trading environment."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(2,6,23,0.38)_100%)]" />
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <FadeIn>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Mission & Vision
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Everything you need to Trade Forex in one Place
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              From account choice to platform access, Achiever keeps the trading
              journey connected so clients can move from information to action
              with fewer gaps.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {missionCards.map((item, index) => {
            const isActive = index === 1;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <Card
                  variant="glow"
                  className={cn(
                    "h-full rounded-xl p-6",
                    isActive &&
                      "border-sky-300/38 bg-[linear-gradient(180deg,rgba(56,189,248,0.09),rgba(255,255,255,0.015)),var(--color-bg-secondary)] shadow-[0_22px_60px_rgba(56,189,248,0.14)]",
                  )}
                >
                  <IconBox icon={item.icon} />
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
    </section>
  );
}

function TrustSection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Broker Strength
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
            A trusted STP broker
          </h2>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {trustCards.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <Card
              variant="glow"
              className="h-full rounded-xl border-sky-300/18 bg-[linear-gradient(180deg,rgba(56,189,248,0.055),rgba(255,255,255,0.012)),var(--color-bg-secondary)] p-6"
            >
              <IconBox icon={item.icon} />
              <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                {item.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

function PlatformFeaturesSection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Platforms
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
            Experience Our Trading Platforms
          </h2>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.04}>
            <Card variant="glow" className="h-full rounded-xl p-6">
              <IconBox icon={item.icon} />
              <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                {item.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

function AboutCtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.12]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Build your trading journey with Achiever.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Connect with the team for account, platform, or partnership
              support.
            </p>
          </div>

          <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm sm:w-auto">
            <Link href="/company/contact-us">
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function AboutTrustOverview() {
  return (
    <>
      <AboutCompanySection />
      <MissionVisionSection />
      <TrustSection />
      <TradingViewTickerTape />
      <PlatformFeaturesSection />
      <AboutCtaSection />
    </>
  );
}
