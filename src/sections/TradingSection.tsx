"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import TradingViewWidget from "@/components/ui/TradingViewWidget";

const forexPairs = [
  { symbol: "FX:EURUSD", label: "EUR/USD" },
  { symbol: "FX:USDCAD", label: "USD/CAD" },
  { symbol: "FX:GBPUSD", label: "GBP/USD" },
  { symbol: "FX:GBPJPY", label: "GBP/JPY" },
  { symbol: "FX:USDJPY", label: "USD/JPY" },
  { symbol: "FX:USDCHF", label: "USD/CHF" },
];

type ThemeMode = "dark" | "light";

export default function TradingSection() {
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
    <SectionWrapper className="relative overflow-hidden bg-transparent pb-24 pt-8 lg:pb-28 lg:pt-10 [.light_&]:bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-60 w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_58%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(37,99,235,0.11),transparent_58%)]" />
        <div className="absolute left-[8%] top-20 h-48 w-48 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-sky-400/10" />
        <div className="absolute right-[8%] bottom-12 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl [.light_&]:bg-sky-300/12" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200 [.light_&]:text-blue-700">
            Live Forex Widgets
          </p>
          <h2 className="mt-5 inline-block px-2 pb-1 bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-3xl font-semibold leading-[1.15] tracking-[-0.05em] text-transparent sm:px-3 sm:text-4xl sm:leading-[1.12] lg:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
            Track Major Currency Pairs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base [.light_&]:text-slate-600">
            Monitor mini symbol overviews for key forex pairs through the same
            TradingView widget output in a cleaner, reusable layout.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {forexPairs.map((pair, index) => (
            <motion.div
              key={pair.symbol}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TradingViewWidget
                symbol={pair.symbol}
                label={pair.label}
                theme={theme}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
