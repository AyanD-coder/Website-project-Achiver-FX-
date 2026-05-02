"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Handshake,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

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

type ValueCardData = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type BulletData = {
  icon: LucideIcon;
  label: string;
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

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-5 w-5" />
    </div>
  );
}

export function SectionHeader({
  align = "center",
  description,
  eyebrow,
  title,
}: {
  align?: "center" | "left";
  description: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <FadeIn>
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? (
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            {eyebrow}
          </Badge>
        ) : null}
        <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

function HeroParticles() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{ opacity: [0.16, 0.5, 0.16], y: [0, -14, 0] }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.18,
            ease: "easeInOut",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.55)]"
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${14 + ((index * 23) % 66)}%`,
          }}
        />
      ))}
    </div>
  );
}

export function PartnerHero({
  cta,
  description,
  title,
}: {
  cta: Cta;
  description: string;
  title: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <HeroParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_50%_56%,rgba(37,99,235,0.12),transparent_38%)] [.light_&]:bg-[radial-gradient(circle_at_50%_18%,rgba(37,99,235,0.11),transparent_34%),radial-gradient(circle_at_50%_56%,rgba(14,165,233,0.08),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Introducing Broker
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl [.light_&]:text-slate-950">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
              {description}
            </p>
            <div className="mt-9 flex justify-center">
              <CTAButton cta={cta} />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export function ValueCard({ description, icon, title }: ValueCardData) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.24, ease: "easeOut" }} className="h-full">
      <Card variant="glow" className="h-full rounded-2xl p-6">
        <IconBox icon={icon} />
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

export function ValueCardGrid({ items }: { items: ValueCardData[] }) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <ValueCard {...item} />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function SplitEarningsSection({
  cta,
  description,
  image,
  title,
}: {
  cta: Cta;
  description: string;
  image: ImageAsset;
  title: string;
}) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] p-6 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(56,189,248,0.16),transparent_32%)] [.light_&]:bg-[radial-gradient(circle_at_78%_24%,rgba(37,99,235,0.08),transparent_32%)]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Earnings
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-8">
                <CTAButton cta={cta} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(56,189,248,0.12)] [.light_&]:border-slate-200 [.light_&]:bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function BulletItem({ icon, label }: BulletData) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-sky-300/14 bg-sky-300/[0.055] px-4 py-3 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-sky-300/28 hover:bg-sky-300/[0.09] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-4 w-4 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
      {label}
    </div>
  );
}

export function FeatureListSection({
  bullets,
  description,
  image,
  title,
}: {
  bullets: BulletData[];
  description: string;
  image: ImageAsset;
  title: string;
}) {
  return (
    <SectionWrapper className="pb-24 pt-16 lg:pb-28 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div>
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Partner Benefits
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              {description}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <BulletItem key={bullet.label} {...bullet} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

const valueCards: ValueCardData[] = [
  {
    icon: Handshake,
    title: "Refer, Earn, Grow",
    description:
      "Introduce qualified traders to Achiever and build recurring commission potential as your network expands.",
  },
  {
    icon: Sparkles,
    title: "Support That Delivers",
    description:
      "Work with a responsive partner team that helps you onboard, educate, and retain your referred clients.",
  },
  {
    icon: BarChart3,
    title: "Track, Analyze, Optimize",
    description:
      "Use clear reporting to monitor referrals, understand conversion activity, and refine your growth strategy.",
  },
];

const benefitBullets: BulletData[] = [
  { icon: WalletCards, label: "Fast Payouts" },
  { icon: Globe2, label: "Global Reach" },
  { icon: ShieldCheck, label: "Compliance" },
  { icon: Megaphone, label: "Marketing Tools" },
  { icon: LineChart, label: "Smart Dashboard" },
];

export default function IntroducingBrokerPage() {
  return (
    <div className="w-full">
      <PartnerHero
        title="Grow With Achiever"
        description="Build a high-value partnership channel with a broker ecosystem designed for referrals, transparent tracking, and long-term earning potential."
        cta={{ href: "/company/contact-us", label: "Become an IB" }}
      />

      <ValueCardGrid items={valueCards} />

      <SectionWrapper className="py-16 lg:py-20">
        <SectionHeader
          eyebrow="Achiever Partner"
          title="Become an Achiever Partner Today"
          description="The Achiever IB program is built for people and institutions ready to turn trusted market relationships into a scalable opportunity."
        />
      </SectionWrapper>

      <SplitEarningsSection
        title="Unlock Earnings With Achiever"
        description="Access a partnership model focused on transparent referral activity, strong support, and the potential to grow commissions as your client base develops."
        cta={{ href: "/company/contact-us", label: "Start Earning Today" }}
        image={{
          src: "/partner/introducing-broker/earnings-growth.webp",
          alt: "Blue fintech income growth visualization with premium 3D panels.",
        }}
      />

      <FeatureListSection
        title="Grow with Achiever Start Earning"
        description="Bring your audience into a trading environment backed by partner support, useful marketing resources, and a clear dashboard for monitoring progress."
        bullets={benefitBullets}
        image={{
          src: "/partner/introducing-broker/network-visual.webp",
          alt: "Mobile partner analytics interface with blue user connection nodes.",
        }}
      />
    </div>
  );
}
