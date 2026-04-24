"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  Coins,
  Globe2,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";

import TradingViewWidget from "@/components/ui/TradingViewWidget";
import { cn } from "@/lib/utils";

type ShowcaseCard = {
  description: string;
  gradientFrom: string;
  gradientTo: string;
  icon: LucideIcon;
  number: string;
  title: string;
};

type GradientCardShowcaseProps = {
  cards?: ShowcaseCard[];
  className?: string;
  description?: string;
  title?: string;
};

type ThemeMode = "dark" | "light";

const defaultCards: ShowcaseCard[] = [
  {
    number: "01",
    title: "Access Leading Global Indices",
    description: "Smart trading solutions",
    icon: Globe2,
    gradientFrom: "#22d3ee",
    gradientTo: "#2563eb",
  },
  {
    number: "02",
    title: "Trade Around the Clock",
    description: "Round-the-clock trading",
    icon: Clock3,
    gradientFrom: "#38bdf8",
    gradientTo: "#0ea5e9",
  },
  {
    number: "03",
    title: "Leverage Your Investment",
    description: "Control larger positions",
    icon: Coins,
    gradientFrom: "#67e8f9",
    gradientTo: "#2563eb",
  },
  {
    number: "04",
    title: "Profit in Any Market Condition",
    description: "Flexible market opportunities",
    icon: PieChart,
    gradientFrom: "#22d3ee",
    gradientTo: "#0ea5e9",
  },
  {
    number: "05",
    title: "Advanced Trading Platforms",
    description: "Intuitive platform access",
    icon: TrendingUp,
    gradientFrom: "#38bdf8",
    gradientTo: "#2563eb",
  },
  {
    number: "06",
    title: "Dedicated Customer Support",
    description: "Expert multilingual support",
    icon: Users,
    gradientFrom: "#67e8f9",
    gradientTo: "#0ea5e9",
  },
];

const indicesWidgets = [
  { symbol: "CAPITALCOM:US500", label: "US 500" },
  { symbol: "CAPITALCOM:US100", label: "US 100" },
  { symbol: "BLACKBULL:US30", label: "US 30" },
  { symbol: "CAPITALCOM:UK100", label: "UK 100" },
  { symbol: "CAPITALCOM:DXY", label: "DXY" },
  { symbol: "FOREXCOM:JP225", label: "JP 225" },
];

const cardIconContainerClassName =
  "flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(37,99,235,0.22))] text-cyan-100 shadow-[0_0_26px_rgba(56,189,248,0.16)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.88))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_14px_34px_rgba(14,165,233,0.12)]";

const cardTitleClassName =
  "mx-auto mt-7 max-w-[15rem] text-center text-[1.65rem] font-semibold leading-tight tracking-[-0.04em] text-white [.light_&]:text-slate-900";

const cardDescriptionClassName =
  "mx-auto mt-3.5 max-w-[14rem] text-center text-[0.98rem] leading-7 text-slate-400 [.light_&]:text-slate-600";

export default function GradientCardShowcase({
  cards = defaultCards,
  className,
  description = "Gain worldwide exposure by trading leading indices with Achiever today.",
  title = "Unlock Global Markets with Achiever Indices",
}: GradientCardShowcaseProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () =>
      setTheme(root.classList.contains("light") ? "light" : "dark");

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-4 pb-24 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20",
        className,
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent md:text-6xl [.light_&]:from-slate-950 [.light_&]:to-sky-700">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-400 [.light_&]:text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-3 shadow-[0_28px_90px_rgba(2,8,18,0.2)] sm:p-4 lg:mt-16 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,249,255,0.92))] [.light_&]:shadow-[0_28px_90px_rgba(14,165,233,0.08)]">
          <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.number}
                  className="gradient-card group relative h-[320px] w-full max-w-[320px] transition-transform duration-500 hover:-translate-y-2"
                >
                  <span
                    className="absolute left-[50px] top-0 h-full w-1/2 rounded-[1.5rem] transition-all duration-500 [transform:skewX(15deg)] group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:[transform:skewX(0deg)]"
                    style={{
                      background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})`,
                    }}
                  />
                  <span
                    className="absolute left-[50px] top-0 h-full w-1/2 rounded-[1.5rem] blur-[30px] transition-all duration-500 [transform:skewX(15deg)] group-hover:left-[20px] group-hover:w-[calc(100%-90px)] group-hover:[transform:skewX(0deg)]"
                    style={{
                      background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})`,
                    }}
                  />

                  <span className="pointer-events-none absolute inset-0 z-10">
                    <span className="gradient-card-blob gradient-card-blob-one absolute left-0 top-0 h-0 w-0 rounded-[1.2rem] bg-white/10 opacity-0 backdrop-blur-xl shadow-[0_8px_24px_rgba(8,15,30,0.22)] transition-all duration-500 group-hover:left-[48px] group-hover:top-[-34px] group-hover:h-[104px] group-hover:w-[104px] group-hover:opacity-100 [.light_&]:bg-sky-100/70 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.12)]" />
                    <span className="gradient-card-blob gradient-card-blob-two absolute bottom-0 right-0 h-0 w-0 rounded-[1.2rem] bg-cyan-100/10 opacity-0 backdrop-blur-xl shadow-[0_8px_24px_rgba(8,15,30,0.22)] transition-all duration-500 group-hover:bottom-[-38px] group-hover:right-[34px] group-hover:h-[112px] group-hover:w-[112px] group-hover:opacity-100 [.light_&]:bg-sky-50/80 [.light_&]:shadow-[0_10px_24px_rgba(37,99,235,0.12)]" />
                  </span>

                  <div className="relative z-20 flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.78),rgba(4,8,20,0.92))] px-6 py-7 text-white shadow-[0_28px_60px_rgba(2,8,18,0.5)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-x-4 group-hover:border-cyan-300/25 group-hover:px-8 group-hover:py-9 group-hover:shadow-[0_32px_70px_rgba(14,165,233,0.22)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.94))] [.light_&]:text-slate-900 [.light_&]:shadow-[0_22px_48px_rgba(15,23,42,0.06)] [.light_&]:group-hover:border-sky-200 [.light_&]:group-hover:shadow-[0_24px_54px_rgba(14,165,233,0.14)]">
                    <div className={cardIconContainerClassName}>
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className={cardTitleClassName}>{card.title}</h3>
                    <p className={cardDescriptionClassName}>{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent md:text-5xl [.light_&]:from-slate-950 [.light_&]:to-sky-700">
              Live Indices Price View
            </h3>
            {/* <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-400">
              Monitor major benchmark markets and sentiment gauges through live
              TradingView mini charts directly on the indices page.
            </p> */}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-3 shadow-[0_28px_90px_rgba(2,8,18,0.18)] sm:p-4 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,249,255,0.9))] [.light_&]:shadow-[0_24px_60px_rgba(14,165,233,0.08)]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {indicesWidgets.map((widget) => (
                <TradingViewWidget
                  key={widget.symbol}
                  symbol={widget.symbol}
                  label={widget.label}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-card-blob {
          0%,
          100% {
            transform: translate3d(0, 10px, 0);
          }
          50% {
            transform: translate3d(-10px, -8px, 0);
          }
        }

        .gradient-card-blob {
          animation: gradient-card-blob 5.4s ease-in-out infinite;
        }

        .gradient-card-blob-one {
          animation-delay: -0.4s;
        }

        .gradient-card-blob-two {
          animation-delay: -1.8s;
        }
      `}</style>
    </section>
  );
}
