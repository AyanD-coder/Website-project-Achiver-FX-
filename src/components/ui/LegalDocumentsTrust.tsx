"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Landmark,
  LockKeyhole,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Cta = {
  href: string;
  label: string;
};

type LegalImage = {
  alt: string;
  src: string;
};

type FeaturePillData = {
  icon: LucideIcon;
  label: string;
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function FadeIn({ children, className, delay = 0 }: FadeInProps) {
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

export function FeaturePill({
  icon: Icon,
  label,
}: FeaturePillData) {
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

export function FeaturePillList({ items }: { items: FeaturePillData[] }) {
  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <FeaturePill key={item.label} {...item} />
      ))}
    </div>
  );
}

export function TrustHeroCard({
  cta,
  description,
  image,
  title,
}: {
  cta: Cta;
  description: string;
  image: LegalImage;
  title: string;
}) {
  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_22%_22%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative mx-auto aspect-square w-full max-w-[24rem] overflow-hidden rounded-2xl border border-sky-300/20 bg-[#06101d] shadow-[0_28px_80px_rgba(56,189,248,0.12)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_0%,rgba(2,6,23,0.18)_58%,rgba(2,6,23,0.62)_100%)]" />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Legal Trust
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-8">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function HighlightCard({
  cta,
  description,
  image,
  title,
}: {
  cta: Cta;
  description: string;
  image: LegalImage;
  title: string;
}) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-sky-300/18 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(4,23,42,0.92))] p-6 shadow-[0_30px_90px_rgba(2,8,20,0.28)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(56,189,248,0.16),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_78%_28%,rgba(37,99,235,0.08),transparent_30%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                License
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-8">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_24px_70px_rgba(56,189,248,0.1)] [.light_&]:border-slate-200 [.light_&]:bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </SectionWrapper>
  );
}

export function RegulationBanner({
  cta,
  description,
  image,
  title,
}: {
  cta: Cta;
  description: string;
  image: LegalImage;
  title: string;
}) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 text-center shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(56,189,248,0.16),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_50%_22%,rgba(37,99,235,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-3xl">
            <div className="relative mx-auto mb-7 h-24 w-24 overflow-hidden rounded-2xl border border-sky-300/18 bg-[#06101d] shadow-[0_18px_54px_rgba(56,189,248,0.14)] [.light_&]:border-slate-200 [.light_&]:bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              {description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

const oversightPills: FeaturePillData[] = [
  { icon: Landmark, label: "Licensed by top regulators" },
  { icon: Globe2, label: "Global compliance" },
  { icon: LockKeyhole, label: "Safe and secure funds" },
  { icon: BadgeCheck, label: "Trusted trading partner" },
];

function TrustedOversightSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
            <Image
              src="/company/legal-trust/secure-platform.webp"
              alt="Secure digital fintech platform with blockchain protection and blue shield glow."
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
              Oversight
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
              Trusted Oversight
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Legal documents and licensing information help clients understand
              the standards, controls, and protection principles behind their
              trading relationship.
            </p>
            <FeaturePillList items={oversightPills} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function LegalDocumentsTrust() {
  return (
    <>
      <TrustHeroCard
        title="Regulations and Licenses"
        description="Review the legal and regulatory information that supports a clearer trading relationship with Achiever Financials Ltd."
        cta={{ href: "/markets/account-types", label: "Trade With Us" }}
        image={{
          src: "/company/legal-trust/trust-badge.webp",
          alt: "Glowing blue fintech security badge seal.",
        }}
      />
      <TrustedOversightSection />
      <HighlightCard
        title="Licensed by Global Authorities & Secured for Your Peace of Mind"
        description="Access licensing information and business documentation designed to make account decisions more transparent."
        cta={{
          href: "mailto:support@achieverfinancials.com?subject=Global%20Business%20License%20Request",
          label: "View Global Business License",
        }}
        image={{
          src: "/company/legal-trust/license-certificate.webp",
          alt: "License certificate document with blue shield hologram.",
        }}
      />
      <RegulationBanner
        title="Regulated by Mauritius FSC"
        description="Review the investment dealer license and request current documentation from the Achiever support team."
        cta={{
          href: "mailto:support@achieverfinancials.com?subject=Investment%20Dealer%20License%20Request",
          label: "View Investment Dealer License",
        }}
        image={{
          src: "/company/legal-trust/compliance-check.webp",
          alt: "Compliance verification checkmark in a glowing fintech interface.",
        }}
      />
    </>
  );
}
