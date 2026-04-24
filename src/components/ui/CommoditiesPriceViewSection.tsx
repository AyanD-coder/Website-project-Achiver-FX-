"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import TradingViewWidget from "@/components/ui/TradingViewWidget";

const commodityWidgets = [
  { symbol: "CFI:WTI", label: "WTI Crude" },
  { symbol: "CFI:BRENT", label: "Brent Crude" },
  { symbol: "THINKMARKETS:NGAS", label: "Natural Gas" },
  { symbol: "PEPPERSTONE:COCOA", label: "Cocoa" },
];

type ThemeMode = "dark" | "light";

export default function CommoditiesPriceViewSection() {
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
    <section className="relative w-full overflow-hidden px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-28 lg:pt-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[72rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_60%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(37,99,235,0.1),transparent_60%)]" />
        <div className="absolute left-[10%] top-20 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-sky-400/10" />
        <div className="absolute right-[10%] bottom-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-blue-300/12" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/65">
            Live Commodities
          </p> */}
          <h2 className="mt-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-5xl [.light_&]:from-[#111827] [.light_&]:to-[#2563EB]">
            Track Key Commodity Prices
          </h2>

        </div>

        <div className="mt-10 rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-3 shadow-[0_28px_90px_rgba(2,8,18,0.18)] sm:p-4 [.light_&]:border-gray-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.88))] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {commodityWidgets.map((widget, index) => (
              <motion.div
                key={widget.symbol}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.46,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TradingViewWidget
                  symbol={widget.symbol}
                  label={widget.label}
                  theme={theme}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
