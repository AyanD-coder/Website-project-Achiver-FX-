"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Coffee, Flower2, Leaf, Wheat } from "lucide-react";

import { cn } from "@/lib/utils";

type CommodityCard = {
  className?: string;
  description: string;
  icon: LucideIcon;
  title: string;
};

const commodityCards: CommodityCard[] = [
  {
    title: "Coffee",
    description:
      "Track price swings driven by harvest cycles, weather shifts, and global demand for one of the market's most active soft commodities.",
    icon: Coffee,
    className: "md:-translate-y-1",
  },
  {
    title: "Sugar",
    description:
      "Access a globally consumed staple shaped by export flows, seasonal production changes, and broader macro supply dynamics.",
    icon: Wheat,
    className: "md:translate-y-3",
  },
  {
    title: "Cocoa",
    description:
      "Trade a commodity influenced by crop quality, regional output, and demand sentiment across food and consumer markets.",
    icon: Leaf,
    className: "md:translate-y-4",
  },
  {
    title: "Cotton",
    description:
      "Follow textile-linked pricing moves connected to agricultural output, international trade conditions, and manufacturing demand.",
    icon: Flower2,
    className: "md:translate-y-1",
  },
];

const particles = [
  { top: "12%", left: "10%", size: 2, duration: "5.2s", delay: "0s" },
  { top: "18%", left: "84%", size: 3, duration: "6s", delay: "0.6s" },
  { top: "30%", left: "18%", size: 2, duration: "5.6s", delay: "0.9s" },
  { top: "42%", left: "90%", size: 2, duration: "5.9s", delay: "0.4s" },
  { top: "64%", left: "8%", size: 3, duration: "5.4s", delay: "1s" },
  { top: "72%", left: "78%", size: 2, duration: "6.1s", delay: "0.5s" },
  { top: "84%", left: "20%", size: 2, duration: "5.7s", delay: "1.2s" },
];

function CommodityCardItem({
  card,
  index,
  shouldReduceMotion,
}: {
  card: CommodityCard;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.58,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_22px_48px_rgba(14,165,233,0.08)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/22 hover:shadow-[0_30px_60px_rgba(14,165,233,0.16)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_22px_46px_rgba(14,165,233,0.14)]",
        card.className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_44%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.18)_44%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400/0 via-cyan-300/85 to-sky-400/0 opacity-80 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-sky-300/85" />
      <div className="pointer-events-none absolute -right-10 top-5 h-24 w-24 rounded-full bg-cyan-400/12 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/16" />

      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(6,182,212,0.2),rgba(37,99,235,0.14))] text-cyan-100 shadow-[0_0_22px_rgba(56,189,248,0.12)] transition-transform duration-300 group-hover:scale-105 [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_30px_rgba(14,165,233,0.12)]">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white [.light_&]:text-slate-900">
          {card.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">{card.description}</p>
      </div>
    </motion.article>
  );
}

export default function CommoditiesTradeSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full overflow-hidden px-4 pb-24 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:4.6rem_4.6rem] [.light_&]:opacity-[0.12]" />
        <div className="absolute left-[10%] top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/22" />
        <div className="absolute right-[8%] top-14 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/18" />
        <div className="absolute right-[16%] top-[50%] h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-cyan-200/28" />

        {particles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.42)] animate-pulse [.light_&]:bg-sky-400/50 [.light_&]:shadow-[0_0_10px_rgba(14,165,233,0.16)]"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl pb-12 text-center sm:pb-14 lg:pb-16">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-cyan-100/65 [.light_&]:text-sky-700/70">
            Welcome to Commodities
          </p>
          <h1 className="mt-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl [.light_&]:from-slate-950 [.light_&]:to-sky-700">
            Discover new ways to trade Commodities
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 [.light_&]:text-slate-600">
            Trade commodities with confidence using advanced tools and expert
            support.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start xl:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="xl:sticky xl:top-32 xl:mt-28"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,14,28,0.9),rgba(6,10,22,0.96))] p-7 shadow-[0_30px_80px_rgba(2,8,18,0.34)] sm:p-8 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_22px_56px_rgba(15,23,42,0.06)]">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:3.2rem_3.2rem] [.light_&]:opacity-[0.1]" />
                <div className="absolute -bottom-10 left-1/2 h-36 w-[80%] -translate-x-1/2 rounded-full bg-cyan-400/14 blur-3xl [.light_&]:bg-sky-300/22" />
                <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/18" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent [.light_&]:via-sky-300/90" />

              <div className="relative z-10 space-y-5">
                <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-400/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80 shadow-[0_0_22px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-white/86 [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_32px_rgba(14,165,233,0.12)]">
                  COMMODITIES
                </span>

                <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
                  Trade Commodities With Achiever
                </h1>

                <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
                  Explore market diversity with metals, energy, and agriculture
                  at your fingertips.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-10 top-12 h-[75%] rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(56,189,248,0.14),rgba(37,99,235,0.04))] blur-3xl [.light_&]:bg-[linear-gradient(180deg,rgba(56,189,248,0.16),rgba(59,130,246,0.08))]" />

            <div className="relative grid gap-6 md:grid-cols-2">
              {commodityCards.map((card, index) => (
                <CommodityCardItem
                  key={card.title}
                  card={card}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
