"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type LogoNode = {
  className: string;
  name: string;
  symbol: "apple" | "nvidia" | "ethereum" | "dropbox" | "slack" | "nasdaq";
};

const logoNodes: LogoNode[] = [
  {
    name: "Apple",
    symbol: "apple",
    className: "left-[8%] top-[14%]",
  },
  {
    name: "Nvidia",
    symbol: "nvidia",
    className: "right-[10%] top-[16%]",
  },
  {
    name: "Ethereum",
    symbol: "ethereum",
    className: "left-[4%] top-[42%]",
  },
  {
    name: "Dropbox",
    symbol: "dropbox",
    className: "right-[4%] top-[44%]",
  },
  {
    name: "Slack",
    symbol: "slack",
    className: "left-[16%] bottom-[10%]",
  },
  {
    name: "Nasdaq",
    symbol: "nasdaq",
    className: "right-[16%] bottom-[10%]",
  },
];

const mobileLogoNodes = [
  "apple",
  "nvidia",
  "ethereum",
  "dropbox",
  "slack",
  "nasdaq",
] as const;

const particles = [
  { top: "10%", left: "12%", size: 2, duration: "5.3s", delay: "0s" },
  { top: "16%", left: "82%", size: 3, duration: "6.2s", delay: "0.6s" },
  { top: "32%", left: "18%", size: 2, duration: "5.8s", delay: "0.9s" },
  { top: "36%", left: "90%", size: 2, duration: "6s", delay: "0.3s" },
  { top: "62%", left: "10%", size: 3, duration: "5.4s", delay: "1s" },
  { top: "68%", left: "80%", size: 2, duration: "5.9s", delay: "0.5s" },
  { top: "84%", left: "24%", size: 2, duration: "5.6s", delay: "1.1s" },
  { top: "88%", left: "72%", size: 3, duration: "6.1s", delay: "0.7s" },
];

function LogoGlyph({
  symbol,
  className,
}: {
  symbol: LogoNode["symbol"];
  className?: string;
}) {
  if (symbol === "apple") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7", className)}
        aria-hidden="true"
      >
        <path
          d="M30.6 17.2c-2.1 0-4.1 1.2-5.4 1.2c-1.3 0-3.1-1.1-5.2-1.1c-3.4 0-6.6 2-8.3 5.1c-3.6 6.1-.9 15.1 2.6 20.2c1.7 2.5 3.7 5.3 6.4 5.2c2.5-.1 3.5-1.6 6.6-1.6c3.1 0 4 1.6 6.7 1.5c2.8 0 4.5-2.5 6.2-5.1c2-2.9 2.8-5.8 2.9-6c-.1 0-5.7-2.2-5.8-8.7c-.1-5.5 4.5-8.2 4.7-8.3c-2.5-3.7-6.5-4.2-7.4-4.4c-3.2-.2-5.8 1.8-7 1.8Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M28.8 12.6c1.4-1.7 2.3-4 2.1-6.3c-2 .1-4.4 1.4-5.8 3.1c-1.2 1.4-2.3 3.8-2 6.1c2.2.2 4.3-1.1 5.7-2.9Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (symbol === "nvidia") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7", className)}
        aria-hidden="true"
      >
        <path
          d="M8 24c5.4-7.6 14.2-12 23.3-12c4.1 0 7.8.9 11.1 2.5c-4.8.7-9.4 2.8-13 6.1c-3 2.8-4.8 6.1-5.8 9.3c-2.1-2.8-5.5-4.6-9.3-4.6c-2 0-4 .5-6.3 1.4c.1-.2 0-.1 0-.7Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 24c2.8-2.5 6-3.8 9.2-3.8c5.3 0 9.6 3.8 10.6 9.1c-2.5 3.7-6.7 6.1-11.4 6.1c-5.1 0-9.3-2.6-11.7-6.6c.8-2 1.8-3.5 3.3-4.8Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <circle cx="25.8" cy="27.8" r="3.6" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (symbol === "ethereum") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7", className)}
        aria-hidden="true"
      >
        <path d="M24 6l10 17.1L24 28.7L14 23.1L24 6Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M24 31l10-5.7L24 42L14 25.3L24 31Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      </svg>
    );
  }

  if (symbol === "dropbox") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7", className)}
        aria-hidden="true"
      >
        <path d="M13 11l11 7l-7 5l-11-7l7-5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M35 11l7 5l-11 7l-7-5l11-7Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M13 25l11 7l-7 5l-11-7l7-5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M35 25l7 5l-11 7l-7-5l11-7Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      </svg>
    );
  }

  if (symbol === "slack") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7", className)}
        aria-hidden="true"
      >
        <path d="M17 8a4 4 0 1 1 0 8H9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M9 20a4 4 0 1 1 8 0v19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M40 17a4 4 0 1 1-8 0V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M28 9a4 4 0 1 1 0 8H9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M31 40a4 4 0 1 1 0-8h8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M39 28a4 4 0 1 1-8 0V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M8 31a4 4 0 1 1 8 0v8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M20 39a4 4 0 1 1 0-8h19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <path d="M12 36V12h10.5c7.7 0 13.5 5.1 13.5 12s-5.8 12-13.5 12H12Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M20 30l8-12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M20 18h8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M20 30h8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function FloatingLogoNode({
  className,
  index,
  name,
  symbol,
}: {
  className?: string;
  index: number;
  name: string;
  symbol: LogoNode["symbol"];
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute z-20 hidden xl:block", className)}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
              }
        }
        whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.04 }}
        transition={{
          duration: 5.3 + index * 0.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] px-4 py-4 shadow-[0_22px_48px_rgba(2,8,18,0.28)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/20 hover:shadow-[0_26px_56px_rgba(14,165,233,0.16)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_16px_36px_rgba(15,23,42,0.05)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_42%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.78),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent opacity-80 [.light_&]:via-sky-300/80" />

          <div className="relative z-10 flex min-w-[9rem] items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,182,212,0.18),rgba(37,99,235,0.12))] text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.1)]">
              <LogoGlyph symbol={symbol} />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/45 [.light_&]:text-sky-700/45">
                Global node
              </p>
              <p className="mt-1 text-sm font-semibold text-white [.light_&]:text-slate-900">
                {name}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EquitiesGlobalMarketsSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_18%_32%,rgba(37,99,235,0.12),transparent_20%),radial-gradient(circle_at_82%_36%,rgba(14,165,233,0.1),transparent_18%)] [.light_&]:bg-[radial-gradient(circle_at_50%_16%,rgba(56,189,248,0.16),transparent_18%),radial-gradient(circle_at_18%_32%,rgba(59,130,246,0.1),transparent_20%),radial-gradient(circle_at_82%_36%,rgba(125,211,252,0.14),transparent_18%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.1]" />
        <div className="absolute left-[12%] top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-300/18" />
        <div className="absolute right-[10%] top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/16" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-cyan-200/22" />

        {particles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-100/70 shadow-[0_0_12px_rgba(125,211,252,0.42)] animate-pulse [.light_&]:bg-sky-400/50 [.light_&]:shadow-[0_0_10px_rgba(14,165,233,0.18)]"
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
        <div className="relative hidden xl:block xl:min-h-[42rem]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.05] [.light_&]:border-sky-200/50" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08] [.light_&]:border-sky-200/65" />

          <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-[34rem] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.9),rgba(4,8,20,0.96))] px-8 py-10 text-center shadow-[0_28px_80px_rgba(2,8,18,0.32)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_20px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent [.light_&]:via-sky-300/80" />

              <div className="relative z-10">
                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
                  We Do It In all Over the World
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base [.light_&]:text-slate-600">
                  We trades in all kind of Stocks, Currencies, Commodities,
                  Metals, Instruments &amp; All kind of potential assets which
                  will gives the profit
                </p>
                <div className="mt-8 flex justify-center">
                  <Button asChild className="h-12 rounded-full px-7">
                    <Link href="/markets/account-types" className="inline-flex items-center gap-2">
                      Explore All
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {logoNodes.map((node, index) => (
            <FloatingLogoNode
              key={node.name}
              className={node.className}
              index={index}
              name={node.name}
              symbol={node.symbol}
            />
          ))}
        </div>

        <div className="xl:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.9),rgba(4,8,20,0.96))] px-6 py-8 text-center shadow-[0_24px_60px_rgba(2,8,18,0.28)] backdrop-blur-xl [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent [.light_&]:via-sky-300/80" />

            <div className="relative z-10">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl [.light_&]:text-slate-950">
                We Do It In all Over the World
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                We trades in all kind of Stocks, Currencies, Commodities,
                Metals, Instruments &amp; All kind of potential assets which
                will gives the profit
              </p>
              <div className="mt-7 flex justify-center">
                <Button asChild className="h-12 rounded-full px-7">
                  <Link href="/markets/account-types" className="inline-flex items-center gap-2">
                    Explore All
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {mobileLogoNodes.map((symbol, index) => {
              const name = logoNodes.find((node) => node.symbol === symbol)?.name ?? symbol;

              return (
                <motion.div
                  key={symbol}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-4 py-4 shadow-[0_18px_40px_rgba(2,8,18,0.24)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_58%)]" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,182,212,0.18),rgba(37,99,235,0.12))] text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.1)]">
                      <LogoGlyph symbol={symbol} />
                    </div>
                    <span className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                      {name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
