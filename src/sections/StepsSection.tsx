"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CandlestickChart,
  UserRound,
  WalletCards,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

type Step = {
  desc: string;
  icon: LucideIcon;
  num: string;
  title: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Register",
    desc: "Create your account in under 60 seconds with simple secure KYC.",
    icon: UserRound,
  },
  {
    num: "02",
    title: "Verify",
    desc: "Upload your ID and get approved instantly by our automated system.",
    icon: BadgeCheck,
  },
  {
    num: "03",
    title: "Fund",
    desc: "Deposit instantly with crypto, cards, or wire transfers via secure gateways.",
    icon: WalletCards,
  },
  {
    num: "04",
    title: "Trade",
    desc: "Access the markets via MT5 and start achieving your trading goals.",
    icon: CandlestickChart,
  },
];

const particles = [
  { top: "10%", left: "8%", delay: "0s", duration: "4.8s" },
  { top: "14%", left: "86%", delay: "0.3s", duration: "5.2s" },
  { top: "28%", left: "18%", delay: "0.7s", duration: "5.6s" },
  { top: "36%", left: "76%", delay: "1.1s", duration: "4.9s" },
  { top: "58%", left: "12%", delay: "0.4s", duration: "5.4s" },
  { top: "66%", left: "88%", delay: "1.3s", duration: "5.8s" },
  { top: "82%", left: "24%", delay: "0.6s", duration: "4.6s" },
  { top: "86%", left: "72%", delay: "1s", duration: "5.1s" },
];

function StepCard({
  step,
  index,
}: {
  step: Step;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
            y: -8,
            scale: 1.05,
          }
      }
      className="group relative"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[linear-gradient(135deg,rgba(103,232,249,0.34),rgba(59,130,246,0.12),transparent_75%)] opacity-0 blur transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(14,165,233,0.08),transparent_75%)]" />

      <div className="relative rounded-[1.9rem] border border-white/10 bg-white/[0.05] p-6 pt-14 shadow-[0_22px_60px_rgba(2,12,27,0.44)] backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/35 group-hover:shadow-[0_28px_80px_rgba(14,165,233,0.22)] lg:min-h-[18rem] [.light_&]:border-blue-100 [.light_&]:bg-white [.light_&]:shadow-[0_12px_28px_rgba(148,163,184,0.18)] [.light_&]:ring-1 [.light_&]:ring-slate-100/80 [.light_&]:group-hover:border-blue-200 [.light_&]:group-hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)]">
        <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.02)_100%)] [.light_&]:bg-[linear-gradient(180deg,rgba(37,99,235,0.05),transparent_38%,rgba(14,165,233,0.02)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-80 [.light_&]:via-blue-200/90" />
        <div className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-400/12" />
        <div className="pointer-events-none absolute right-6 top-6 text-7xl font-black tracking-[-0.08em] text-white/[0.05] sm:right-8 sm:text-8xl lg:bottom-5 lg:right-8 lg:top-auto [.light_&]:text-blue-100/80 [.light_&]:drop-shadow-[0_0_20px_rgba(191,219,254,0.28)]">
          {step.num}
        </div>

        <div className="absolute left-6 top-1 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(9,18,37,0.92),rgba(8,14,28,0.9))] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/40 group-hover:text-white group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] [.light_&]:text-blue-600 [.light_&]:shadow-[0_5px_20px_rgba(37,99,235,0.15)] [.light_&]:group-hover:border-blue-300 [.light_&]:group-hover:text-blue-700 [.light_&]:group-hover:shadow-[0_8px_26px_rgba(14,165,233,0.2)]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)] [.light_&]:bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)]" />
            <Icon className="relative h-5 w-5" />
          </div>
        </div>

        <div className="relative">
          <h3 className="text-xl font-bold text-white [.light_&]:text-[#111827]">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary [.light_&]:text-slate-600">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StepsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="relative overflow-hidden bg-transparent pb-24 pt-24 lg:pb-32 lg:pt-28 [.light_&]:bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-[72rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_58%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_58%)]" />
        <div className="absolute left-[-8%] top-24 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute right-[-8%] bottom-10 h-56 w-56 rounded-full bg-brand-secondary/10 blur-3xl" />

        {particles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.55)] animate-pulse [.light_&]:bg-blue-200/80 [.light_&]:shadow-[0_0_10px_rgba(37,99,235,0.18)]"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="mx-auto mb-4 max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text pb-1 text-2xl font-extrabold leading-tight text-transparent sm:text-3xl md:text-5xl md:leading-tight [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
            Fast Account Opening in 4 Steps
          </h2>
          <p className="text-lg text-text-secondary [.light_&]:text-slate-600">
            Start trading on a premium environment in minutes, not days.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,14,28,0.94),rgba(3,8,20,0.98))] px-5 py-8 shadow-[0_28px_90px_rgba(2,12,27,0.5)] backdrop-blur-xl sm:px-6 lg:px-8 lg:py-10 [.light_&]:border-blue-100 [.light_&]:bg-white/80 [.light_&]:bg-none [.light_&]:shadow-[0_12px_30px_rgba(148,163,184,0.14)] [.light_&]:ring-1 [.light_&]:ring-slate-100/80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_24%),radial-gradient(circle_at_50%_36%,rgba(37,99,235,0.10),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_50%_36%,rgba(14,165,233,0.05),transparent_30%)]" />

          <div className="pointer-events-none absolute bottom-8 left-7 top-8 w-px bg-white/10 lg:hidden [.light_&]:bg-blue-100" />
          <motion.div
            aria-hidden
            initial={shouldReduceMotion ? { height: "100%" } : { height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.05, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/90 to-cyan-300/0 shadow-[0_0_18px_rgba(34,211,238,0.45)] lg:hidden [.light_&]:via-sky-300/90 [.light_&]:shadow-[0_0_18px_rgba(37,99,235,0.24)]"
          />

          <div className="pointer-events-none absolute left-[11%] right-[11%] top-[3.1rem] hidden h-px bg-white/10 lg:block [.light_&]:bg-blue-100" />
          <motion.div
            aria-hidden
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-[11%] right-[11%] top-[3.1rem] hidden h-px origin-left bg-gradient-to-r from-cyan-300/0 via-cyan-300/90 to-cyan-300/0 shadow-[0_0_20px_rgba(34,211,238,0.5)] lg:block [.light_&]:via-sky-300/90 [.light_&]:shadow-[0_0_20px_rgba(37,99,235,0.24)]"
          />

          <div className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <StepCard key={step.num} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center lg:mt-20">
          <Button
            asChild
            variant="primary"
            className="group relative h-14 overflow-hidden rounded-full px-8 text-base shadow-[0_0_34px_rgba(14,165,233,0.22)] hover:scale-105 hover:shadow-[0_0_46px_rgba(56,189,248,0.34)] sm:px-10 sm:text-lg"
          >
            <Link href="/register">
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.34)_50%,transparent_80%)] transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Open Your Account Now</span>
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
