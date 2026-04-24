"use client";

import { useEffect, useRef, useState } from "react";

import { useDeferredMount } from "@/lib/useDeferredMount";

interface TradingViewWidgetProps {
  label?: string;
  symbol: string;
  theme?: "dark" | "light";
}

const widgetScriptSrc =
  "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";

function createWidgetConfig(symbol: string, theme: "dark" | "light") {
  return {
    symbol,
    width: "100%",
    height: "100%",
    locale: "en",
    dateRange: "12M",
    colorTheme: theme,
    isTransparent: true,
    autosize: true,
    largeChartUrl: "",
    chartOnly: false,
    noTimeScale: false,
  };
}

export default function TradingViewWidget({
  label,
  symbol,
  theme = "dark",
}: TradingViewWidgetProps) {
  const { ref: deferredRef, shouldMount } = useDeferredMount<HTMLDivElement>({
    rootMargin: "280px 0px",
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    if (!shouldMount) {
      return;
    }

    const container = containerRef.current;
    let bootDelay: number | undefined;
    let idleHandle: number | undefined;

    if (!container) {
      return;
    }

    setHasError(false);
    setIsBooting(true);
    container.innerHTML = "";

    const widgetRoot = document.createElement("div");
    widgetRoot.className = "tradingview-widget-container__widget";
    widgetRoot.style.height = "100%";
    widgetRoot.style.width = "100%";

    const script = document.createElement("script");
    script.src = widgetScriptSrc;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(createWidgetConfig(symbol, theme));
    script.onload = () => {
      bootDelay = window.setTimeout(() => setIsBooting(false), 350);
    };
    script.onerror = () => {
      setHasError(true);
      setIsBooting(false);
    };

    const attachWidget = () => {
      container.appendChild(widgetRoot);
      container.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(attachWidget, {
        timeout: 900,
      });
    } else {
      attachWidget();
    }

    return () => {
      if (bootDelay) {
        window.clearTimeout(bootDelay);
      }

      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }

      container.innerHTML = "";
    };
  }, [shouldMount, symbol, theme]);

  const showLoader = !hasError && (!shouldMount || isBooting);

  return (
    <div
      ref={deferredRef}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_0_28px_rgba(56,189,248,0.12)] backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(56,189,248,0.24)] [.light_&]:border-gray-200 [.light_&]:bg-white/95 [.light_&]:shadow-[0_12px_34px_rgba(15,23,42,0.06)] [.light_&]:hover:shadow-[0_16px_36px_rgba(37,99,235,0.16)]"
    >
      {label ? (
        <div className="mb-3 px-1">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80 [.light_&]:text-blue-700">
            {label}
          </p>
        </div>
      ) : null}

      <div className="relative overflow-hidden rounded-xl bg-[#050a14] ring-1 ring-white/5 [.light_&]:bg-[#f8fbff] [.light_&]:ring-gray-200">
        <div
          ref={containerRef}
          className="tradingview-widget-container h-[220px] w-full"
        />

        {showLoader ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#050a14]/60 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100/75 backdrop-blur-[2px] [.light_&]:bg-[#f8fbff]/75 [.light_&]:text-blue-700/80">
            Loading chart
          </div>
        ) : null}

        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-rose-200 [.light_&]:text-rose-600">
            The market chart could not be loaded right now.
          </div>
        ) : null}
      </div>
    </div>
  );
}
