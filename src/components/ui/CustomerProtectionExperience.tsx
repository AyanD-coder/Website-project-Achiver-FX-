"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Banknote,
  Gauge,
  ShieldCheck,
  WalletCards,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type ImageAsset = {
  alt: string;
  src: string;
};

type Cta = {
  href: string;
  label: string;
};

type PillData = {
  icon: LucideIcon;
  label: string;
};

type ProtectionCardData = {
  cta?: Cta;
  description: string;
  icon: LucideIcon;
  title: string;
};

type SplitSectionProps = {
  content: {
    description: string;
    title: string;
  };
  image: ImageAsset;
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

function IconShell({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 transition-all duration-300 group-hover:border-sky-300/40 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
      <Icon className="h-5 w-5" />
    </div>
  );
}

export function FeaturePill({ icon: Icon, label }: PillData) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-sky-300/18 bg-sky-300/[0.075] px-4 py-3 text-sm font-semibold text-sky-100 shadow-[0_14px_36px_rgba(2,8,20,0.12)] backdrop-blur-sm transition-colors duration-300 hover:border-sky-300/36 hover:bg-sky-300/[0.11] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700"
    >
      <Icon className="h-4 w-4 shrink-0" />
      {label}
    </motion.div>
  );
}

export function HeroSecuritySection({
  description,
  image,
  pills,
  title,
}: {
  description: string;
  image: ImageAsset;
  pills: PillData[];
  title: string;
}) {
  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Client Security
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {pills.map((pill) => (
                  <FeaturePill key={pill.label} {...pill} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(2,6,23,0.42)_100%)]" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ProtectionCard({
  cta,
  description,
  icon,
  title,
}: ProtectionCardData) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        variant="glow"
        className="flex h-full flex-col items-center px-6 py-8 text-center"
      >
        <IconShell icon={icon} />
        <h3 className="mt-5 text-xl font-semibold leading-tight tracking-normal text-white [.light_&]:text-slate-950">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </p>
        {cta ? (
          <a
            href={cta.href}
            className="mt-5 text-sm font-semibold text-sky-100 transition-colors duration-300 hover:text-white [.light_&]:text-blue-700 [.light_&]:hover:text-blue-800"
          >
            {cta.label}
          </a>
        ) : null}
      </Card>
    </motion.div>
  );
}

export function ProtectionGrid({
  description,
  items,
  title,
}: {
  description: string;
  items: ProtectionCardData[];
  title: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Protection Grid
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              {description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <ProtectionCard {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InfoCard({
  description,
  icon,
  title,
}: {
  description: string;
  icon?: LucideIcon;
  title: string;
}) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-sky-300/18 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(4,23,42,0.92))] p-6 shadow-[0_30px_90px_rgba(2,8,20,0.28)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(56,189,248,0.16),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_84%_20%,rgba(37,99,235,0.08),transparent_30%)]" />
      <div className="relative">
        {Icon ? <IconShell icon={Icon} /> : null}
        <h2
          className={cn(
            "text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950",
            Icon ? "mt-6" : "",
          )}
        >
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function SplitSection({ content, image }: SplitSectionProps) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(2,6,23,0.38)_100%)]" />
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <InfoCard
            icon={ShieldCheck}
            title={content.title}
            description={content.description}
          />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

const securityPills: PillData[] = [
  { icon: ShieldCheck, label: "Secure Capital" },
  { icon: BadgeCheck, label: "Bold Decisions" },
  { icon: Gauge, label: "Risk Control" },
  { icon: Zap, label: "Easy Execution" },
];

const protectionCards: ProtectionCardData[] = [
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "Clear disclosures and practical safeguards help clients understand leveraged trading before taking action.",
  },
  {
    icon: WalletCards,
    title: "Segregation of Funds",
    description:
      "Client money handling principles are presented with clarity, helping traders understand how account care is structured.",
  },
  {
    icon: Banknote,
    title: "Quick Withdrawals",
    description:
      "Support-led withdrawal workflows keep client access, documentation, and account requests moving with less friction.",
  },
];

export default function CustomerProtectionExperience() {
  return (
    <>
      <HeroSecuritySection
        title="Protected Capital. Confident Trading Ahead."
        description="Trade with a clearer view of account safeguards, risk controls, and support routes built around practical client protection."
        image={{
          src: "/company/customer-protection-modern/customer-protection-hero-optimized.webp",
          alt: "Secure customer protection visual with account safeguards and support highlights.",
        }}
        pills={securityPills}
      />

      <ProtectionGrid
        title="Client Protection Always Comes First."
        description="Every trading journey should make risk, funding, and account access easier to understand before clients commit capital."
        items={protectionCards}
      />

      <SplitSection
        image={{
          src: "/company/customer-protection-modern/customer-protection-optimized.webp",
          alt: "Customer protection visual showing secure trading safeguards and support.",
        }}
        content={{
          title: "Trade Smart. Stay Protected!",
          description:
            "Achiever FX connects platform access with visible safeguards, support pathways, and risk-aware information so traders can focus on execution without losing sight of protection.",
        }}
      />
    </>
  );
}
