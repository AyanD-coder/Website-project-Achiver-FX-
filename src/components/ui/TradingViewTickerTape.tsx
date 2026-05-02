"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const tickerTapeConfig = {
  symbols: [
    {
      proName: "SP:SPX",
      title: "S&P 500",
    },
    {
      proName: "NASDAQ:NDX",
      title: "NASDAQ 100",
    },
    {
      proName: "FX:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "BTC/USD",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "ETH/USD",
    },
  ],
  showSymbolLogo: true,
  isTransparent: true,
  displayMode: "adaptive",
  colorTheme: "dark",
  locale: "en",
};

export default function TradingViewTickerTape() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const loadWidget = () => {
      if (loadedRef.current || !containerRef.current) {
        return;
      }

      loadedRef.current = true;
      containerRef.current.innerHTML = "";

      const widgetHost = document.createElement("div");
      widgetHost.className = "tradingview-widget-container__widget h-full";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify(tickerTapeConfig);

      containerRef.current.appendChild(widgetHost);
      containerRef.current.appendChild(script);
    };

    if (!("IntersectionObserver" in window)) {
      loadWidget();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          loadWidget();
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#06101d]/80 px-4 py-4 backdrop-blur-md [.light_&]:border-slate-200 [.light_&]:bg-white/80 sm:px-6 lg:px-8">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="group relative min-h-[68px] overflow-hidden rounded-2xl border border-sky-300/18 bg-[linear-gradient(135deg,rgba(8,15,30,0.82),rgba(4,23,42,0.66))] p-2 shadow-[0_18px_54px_rgba(2,8,20,0.18)] backdrop-blur-md transition-all duration-300 hover:border-sky-300/30 hover:brightness-110 hover:shadow-[0_18px_58px_rgba(56,189,248,0.1)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/45 to-transparent" />
          <div className="pointer-events-none absolute -left-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div
            ref={containerRef}
            className="tradingview-widget-container relative z-10 h-[52px] min-h-[52px] w-full"
            aria-label="Market ticker tape"
          />
        </div>
      </motion.div>
    </section>
  );
}
