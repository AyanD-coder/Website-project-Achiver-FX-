"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ChartColumn,
  LayoutDashboard,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

type OrbitFeature = {
  angle: number;
  icon: LucideIcon;
  title: string;
};

const orbitFeatures: OrbitFeature[] = [
  {
    angle: 225,
    icon: MonitorSmartphone,
    title: "Access markets from any device, anywhere",
  },
  {
    angle: 315,
    icon: ChartColumn,
    title: "Real-time data for informed decisions",
  },
  {
    angle: 45,
    icon: LayoutDashboard,
    title: "User-friendly platform designed for all levels",
  },
  {
    angle: 135,
    icon: ShieldCheck,
    title: "Secure and fast trade execution anytime",
  },
];

const particles = [
  { top: "10%", left: "14%", size: 2, duration: "5.6s", delay: "0s" },
  { top: "14%", left: "82%", size: 3, duration: "6.3s", delay: "0.6s" },
  { top: "26%", left: "8%", size: 2, duration: "5.2s", delay: "0.8s" },
  { top: "34%", left: "90%", size: 2, duration: "5.8s", delay: "0.2s" },
  { top: "62%", left: "10%", size: 3, duration: "5.5s", delay: "1s" },
  { top: "72%", left: "84%", size: 2, duration: "6.1s", delay: "0.5s" },
  { top: "86%", left: "20%", size: 2, duration: "5.7s", delay: "1.1s" },
  { top: "90%", left: "72%", size: 3, duration: "6.4s", delay: "0.7s" },
];

const ORBIT_RADIUS = 255;
const ORBIT_DURATION = 32;
const ORBIT_X_OFFSET = 80;
const ORBIT_Y_OFFSET = 60;

function OrbitCard({
  feature,
  index,
  shouldReduceMotion,
}: {
  feature: OrbitFeature;
  index: number;
  shouldReduceMotion: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      className="absolute z-20"
      style={{
        left: `calc(50% + ${ORBIT_X_OFFSET}px)`,
        top: `calc(50% + ${ORBIT_Y_OFFSET}px)`,
      }}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              rotate: [feature.angle, feature.angle + 360],
            }
        }
        transition={{
          duration: ORBIT_DURATION,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{ transformOrigin: "0 0" }}
        className="absolute left-0 top-0"
      >
        <div
          className="absolute left-0 top-0"
          style={{ transform: `translateX(${ORBIT_RADIUS}px)` }}
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                  rotate: [-feature.angle, -(feature.angle + 360)],
                }
            }
            transition={{
              duration: ORBIT_DURATION,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="absolute left-0 top-0"
          >
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.52,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.03 }}
              className="group relative w-[13.75rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800/40 p-5 shadow-[0_22px_52px_rgba(2,8,18,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/22 hover:shadow-[0_28px_62px_rgba(14,165,233,0.16)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_22px_46px_rgba(14,165,233,0.14)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_44%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.18)_44%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-80 [.light_&]:via-sky-300/80" />
              <div className="pointer-events-none absolute -right-10 top-5 h-24 w-24 rounded-full bg-amber-300/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/16" />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/18 bg-[linear-gradient(180deg,rgba(255,215,0,0.16),rgba(14,165,233,0.14))] text-amber-200 shadow-[0_0_24px_rgba(245,158,11,0.16)] transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-100 [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_30px_rgba(14,165,233,0.12)]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm font-semibold leading-7 text-white [.light_&]:text-slate-900">
                  {feature.title}
                </p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function CenterDollar({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? undefined
          : {
            y: [0, -10, 0],
          }
      }
      transition={{
        duration: 6.8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative z-30 flex h-[22.5rem] w-[22.5rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_38%,rgba(255,215,0,0.18),rgba(245,158,11,0.1)_30%,rgba(14,165,233,0.09)_64%,rgba(2,6,23,0.9)_100%)] shadow-[0_48px_128px_rgba(2,8,18,0.5)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-[radial-gradient(circle_at_50%_38%,rgba(255,239,156,0.62),rgba(245,158,11,0.18)_28%,rgba(125,211,252,0.24)_64%,rgba(255,255,255,0.88)_100%)] [.light_&]:shadow-[0_26px_72px_rgba(245,158,11,0.16)]"
    >
      <div className="pointer-events-none absolute inset-[-3.5rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.18),rgba(14,165,233,0.1)_44%,transparent_70%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(245,158,11,0.2),rgba(56,189,248,0.12)_44%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-[-1.55rem] rounded-full border border-amber-300/10 [.light_&]:border-amber-200/30" />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.18),transparent_50%),radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.16),transparent_18%)] [.light_&]:bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.24),transparent_48%),radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.6),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-[1.25rem] rounded-full border border-cyan-200/8 [.light_&]:border-sky-200/40" />
      <div className="pointer-events-none absolute inset-[2rem] rounded-full border border-amber-200/12 [.light_&]:border-amber-200/35" />
      <div className="pointer-events-none absolute top-[17%] h-[4.5rem] w-40 rotate-[-18deg] rounded-full bg-white/28 blur-md" />
      <div className="pointer-events-none absolute bottom-9 h-10 w-44 rounded-full bg-amber-500/24 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-2.7rem] left-1/2 h-10 w-[13rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.3),rgba(245,158,11,0.08)_58%,transparent_76%)] blur-xl" />
      <div className="pointer-events-none absolute bottom-[-1.2rem] left-1/2 h-4 w-[10.5rem] -translate-x-1/2 rounded-full border border-amber-300/10 bg-[linear-gradient(180deg,rgba(255,215,0,0.12),rgba(180,83,9,0.02))]" />

      <div className="relative flex h-[14rem] w-[14rem] items-center justify-center rounded-full border border-white/8 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06),rgba(15,23,42,0.08)_42%,transparent_76%)] [.light_&]:border-white/40 [.light_&]:bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.58),rgba(255,255,255,0.18)_42%,transparent_76%)]">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_46%_30%,rgba(255,255,255,0.08),transparent_18%)] [.light_&]:bg-[radial-gradient(circle_at_46%_30%,rgba(255,255,255,0.5),transparent_18%)]" />
        <span className="absolute translate-x-3 translate-y-4 text-[11rem] font-black text-amber-950/38 blur-[1px] [.light_&]:text-amber-900/18">
          $
        </span>
        <span className="relative bg-[linear-gradient(180deg,#FFF4A3_0%,#FFD700_22%,#F59E0B_58%,#B45309_100%)] bg-clip-text text-[11rem] font-black leading-none text-transparent drop-shadow-[0_12px_24px_rgba(245,158,11,0.3)]">
          $
        </span>
        <span className="pointer-events-none absolute top-[2.25rem] h-3 w-[4.5rem] rounded-full bg-white/28 blur-sm [.light_&]:bg-white/50" />
      </div>
    </motion.div>
  );
}

export default function CommoditiesSetupOrbitSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#030712_46%,#000814_100%)] [.light_&]:bg-[linear-gradient(180deg,#f7fcff_0%,#eef8ff_40%,#f8fdff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,158,11,0.14),transparent_18%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.12),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_50%_42%,rgba(245,158,11,0.18),transparent_18%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.14),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.12]" />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                x: [0, 22, 0],
                y: [0, -10, 0],
              }
          }
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -left-[10%] top-[18%] h-px w-[28rem] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent blur-[2px] [.light_&]:via-sky-300/55"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                x: [0, -24, 0],
                y: [0, 12, 0],
              }
          }
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[62%] h-px w-[30rem] rotate-[-16deg] bg-gradient-to-r from-transparent via-amber-300/45 to-transparent blur-[2px] [.light_&]:via-amber-300/55"
        />

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
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80 backdrop-blur-md [.light_&]:border-sky-200 [.light_&]:bg-white/88 [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_30px_rgba(14,165,233,0.12)]">
            QUICK SETUP
          </span>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-cyan-300 bg-clip-text text-transparent">
              Anywhere, Anytime
            </span>{" "}
            Trading Made Easy
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            Global markets, instant access everywhere.
          </p>
        </div>

        <div className="relative mx-auto mt-20 hidden h-[56rem] max-w-[76rem] lg:block xl:h-[60rem]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.04] [.light_&]:border-sky-200/60" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[33rem] w-[33rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.05] [.light_&]:border-sky-200/75" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/[0.08] [.light_&]:border-amber-200/60" />

          <div className="absolute inset-0">
            {orbitFeatures.map((feature, index) => (
              <OrbitCard
                key={feature.title}
                feature={feature}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <CenterDollar shouldReduceMotion={shouldReduceMotion} />
          </div>
        </div>

        <div className="mt-14 lg:hidden">
          <div className="flex justify-center">
            <CenterDollar shouldReduceMotion />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {orbitFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800/40 p-5 shadow-[0_22px_50px_rgba(2,8,18,0.28)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.18)_42%)]" />
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/18 bg-[linear-gradient(180deg,rgba(255,215,0,0.16),rgba(14,165,233,0.14))] text-amber-200 shadow-[0_0_24px_rgba(245,158,11,0.16)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_30px_rgba(14,165,233,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-7 text-white [.light_&]:text-slate-900">
                      {feature.title}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
