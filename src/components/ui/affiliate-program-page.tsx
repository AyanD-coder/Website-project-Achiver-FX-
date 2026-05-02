"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Globe2,
  Headphones,
  LineChart,
  Megaphone,
  MousePointerClick,
  Network,
  Smartphone,
  Target,
  Users2,
  type LucideIcon,
} from "lucide-react";
import { useEffect, type ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type Cta = {
  href: string;
  label: string;
};

type ImageAsset = {
  alt: string;
  src: string;
};

type StatData = {
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
};

type BulletData = {
  icon: LucideIcon;
  label: string;
};

type BenefitData = {
  description: string;
  icon: LucideIcon;
  title: string;
};

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

function formatStat(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(value >= 1000000 ? 1 : 0)}${value >= 1000000 ? "M" : "K"}` : `${value}`;
}

export function StatsCard({ label, prefix = "", suffix = "", value }: StatData) {
  const spring = useSpring(0, { stiffness: 80, damping: 24, mass: 0.8 });
  const display = useTransform(spring, (latest) => `${prefix}${formatStat(Math.round(latest))}${suffix}`);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="rounded-2xl border border-sky-300/16 bg-[#07111f]/88 px-5 py-4 text-left shadow-[0_18px_48px_rgba(2,8,20,0.24)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.07)]"
    >
      <motion.p className="text-2xl font-semibold tracking-normal text-white sm:text-3xl [.light_&]:text-slate-950">
        {display}
      </motion.p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 [.light_&]:text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}

export function CTAButton({ cta, variant = "primary" }: { cta: Cta; variant?: "primary" | "outline" }) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        "min-h-12 rounded-lg px-7 py-3 text-sm",
        variant === "outline" &&
          "border-white/20 bg-white/10 text-white hover:bg-white/16 hover:text-white [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-800",
      )}
    >
      <Link href={cta.href}>
        {cta.label}
        {variant === "primary" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

export function AffiliateHero({
  cta,
  description,
  image,
  stats,
  title,
}: {
  cta: Cta;
  description: string;
  image: ImageAsset;
  stats: StatData[];
  title: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_50%_64%,rgba(37,99,235,0.12),transparent_40%)] [.light_&]:bg-[radial-gradient(circle_at_50%_18%,rgba(37,99,235,0.1),transparent_34%),radial-gradient(circle_at_50%_64%,rgba(14,165,233,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Affiliate Program
              </Badge>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl [.light_&]:text-slate-950">
                {title}
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-9">
                <CTAButton cta={cta} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative">
              <motion.div
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-sky-300/15 bg-[#06101d] shadow-[0_30px_100px_rgba(2,8,20,0.36)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:-mt-12 lg:px-6">
                {stats.map((stat) => (
                  <StatsCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function SplitSection({
  description,
  image,
  title,
}: {
  description: string;
  image: ImageAsset;
  title: string;
}) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image src={image.src} alt={image.alt} fill loading="lazy" sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              CPA Overview
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              {description}
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

export function BulletItem({ icon, label }: BulletData) {
  const Icon = icon;

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-sky-300/14 bg-sky-300/[0.055] px-4 py-3 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-sky-300/28 hover:bg-sky-300/[0.09] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-4 w-4 shrink-0 text-sky-300 transition-transform duration-300 group-hover:scale-110 [.light_&]:text-blue-600" />
      {label}
    </div>
  );
}

export function FeatureList({
  cta,
  items,
  title,
}: {
  cta: Cta;
  items: BulletData[];
  title: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Key Features
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              {title}
            </h2>
          </div>
        </FadeIn>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.04}>
              <BulletItem {...item} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <CTAButton cta={cta} />
        </div>
      </div>
    </section>
  );
}

export function AudienceSection({
  audiences,
  description,
  image,
  title,
}: {
  audiences: BulletData[];
  description: string;
  image: ImageAsset;
  title: string;
}) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <FadeIn>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Who Can Join
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              {description}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <BulletItem key={audience.label} {...audience} />
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white">
            <Image src={image.src} alt={image.alt} fill loading="lazy" sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

export function BenefitCard({ description, icon, title }: BenefitData) {
  const Icon = icon;

  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.24, ease: "easeOut" }} className="h-full">
      <Card variant="glow" className="h-full rounded-2xl p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}

export function BenefitGrid({ items, title }: { items: BenefitData[]; title: string }) {
  return (
    <SectionWrapper className="pb-24 pt-16 lg:pb-28 lg:pt-20">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Benefits
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
            {title}
          </h2>
        </div>
      </FadeIn>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <BenefitCard {...item} />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

const stats: StatData[] = [
  { value: 1000, suffix: "+", label: "Partners" },
  { value: 1300000, prefix: "$", label: "Paid" },
  { value: 240000, prefix: "$", label: "Monthly Payout" },
];

const features: BulletData[] = [
  { icon: BadgeDollarSign, label: "Attractive CPA payout" },
  { icon: BarChart3, label: "Real-time conversion reports" },
  { icon: Network, label: "Multi-channel tracking" },
  { icon: Globe2, label: "Global coverage" },
  { icon: Megaphone, label: "Marketing support" },
];

const audiences: BulletData[] = [
  { icon: CheckCircle2, label: "Bloggers" },
  { icon: Target, label: "Digital marketers" },
  { icon: Users2, label: "Influencers" },
  { icon: MousePointerClick, label: "Media buyers" },
  { icon: Network, label: "Agencies" },
];

const benefits: BenefitData[] = [
  {
    icon: Network,
    title: "Multi-tiered revenue structure",
    description: "Build earning potential across scalable partner activity.",
  },
  {
    icon: LineChart,
    title: "Flexible & scalable model",
    description: "Grow campaigns from focused placements to broader media funnels.",
  },
  {
    icon: BadgeDollarSign,
    title: "Lifetime rebates",
    description: "Benefit from long-term value as referred traders stay active.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "Access responsive assistance for campaign and partner questions.",
  },
  {
    icon: Target,
    title: "Conversion optimization",
    description: "Use performance insight to improve traffic quality and outcomes.",
  },
  {
    icon: Smartphone,
    title: "Full desktop & mobile access",
    description: "Track partner activity across devices with a modern workflow.",
  },
];

export default function AffiliateProgramPage() {
  return (
    <div className="w-full">
      <AffiliateHero
        title="Affiliate Program"
        description="Scale performance campaigns with a fintech partner program built around transparent reporting, strong payouts, and global trading demand."
        cta={{ href: "/company/contact-us", label: "Apply Now" }}
        stats={stats}
        image={{
          src: "/partner/affiliate-program/affiliate-hero.webp",
          alt: "Dark fintech affiliate earnings dashboard with blue glowing metrics.",
        }}
      />

      <SplitSection
        title="CPA Affiliate Program"
        description="Promote Achiever FX across qualified traffic channels and earn through a CPA model designed for transparent conversions, campaign clarity, and scalable performance."
        image={{
          src: "/partner/affiliate-program/cpa-performance.webp",
          alt: "Digital marketing conversion performance visualization in dark fintech style.",
        }}
      />

      <FeatureList
        title="CPA Affiliate Program Key Features"
        items={features}
        cta={{ href: "/company/contact-us", label: "Apply Now" }}
      />

      <AudienceSection
        title="Who can join the CPA Affiliate Program?"
        description="The program is designed for performance-driven partners who can connect relevant audiences with a trusted trading platform."
        audiences={audiences}
        image={{
          src: "/partner/affiliate-program/mobile-trading.webp",
          alt: "Smartphone trading app with blue analytics charts and affiliate data panels.",
        }}
      />

      <BenefitGrid title="CPA Affiliate Program Benefits" items={benefits} />
    </div>
  );
}
