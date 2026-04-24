"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  delay?: number;
  label: string;
  start: boolean;
  suffix?: string;
  value: number;
};

const stats = [
  { value: 60, suffix: "+", label: "Currency Pairs" },
  { value: 10, suffix: "+", label: "Major Currency Pair" },
  { value: 50, suffix: "+", label: "Minor Currency Pair" },
];

function Counter({
  delay = 0,
  label,
  start,
  suffix = "",
  value,
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!start || hasAnimated) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setDisplayValue(value);
        setHasAnimated(true);
      });

      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let animationFrame = 0;
    let timeoutId = 0;
    let animationStart = 0;
    const duration = 3200;

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const animateValue = (timestamp: number) => {
      if (animationStart === 0) {
        animationStart = timestamp;
      }

      const progress = Math.min((timestamp - animationStart) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateValue);
        return;
      }

      setDisplayValue(value);
      setHasAnimated(true);
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(animateValue);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, hasAnimated, start, value]);

  return (
    <div className="group relative flex flex-col items-center justify-center overflow-hidden px-6 py-8 text-center transition-all duration-300 hover:scale-105 hover:bg-white/[0.03] hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] sm:px-8 sm:py-10 [.light_&]:hover:bg-blue-50/80 [.light_&]:hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)]">
      <div className="absolute inset-x-10 top-1/2 h-24 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-300/20 [.light_&]:bg-sky-400/10 [.light_&]:group-hover:bg-sky-300/20" />

      <div className="relative">
        <div className="absolute inset-x-2 top-1/2 h-16 -translate-y-1/2 rounded-full bg-blue-500/15 blur-2xl animate-pulse [.light_&]:bg-blue-500/10" />
        <span className="relative font-display text-5xl font-semibold tracking-[-0.06em] text-white tabular-nums sm:text-6xl [.light_&]:text-[#111827]">
          {displayValue}
          {suffix}
        </span>
      </div>

      <p className="relative mt-4 text-sm font-medium tracking-[0.14em] text-cyan-300 [.light_&]:text-blue-700">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView || !sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(145deg,rgba(6,11,24,0.96),rgba(2,6,18,0.98))] px-6 py-10 shadow-[0_24px_80px_rgba(2,12,27,0.55)] sm:px-8 sm:py-12 lg:px-12 lg:py-14 [.light_&]:border [.light_&]:border-gray-200 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] [.light_&]:shadow-[0_20px_54px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.10),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0))]" />
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-sky-400/12" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-sky-300/10" />
            <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl [.light_&]:bg-blue-200/12" />
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-[0.32em] text-cyan-200 [.light_&]:text-blue-700">
                OVER 35K+ CLIENT
              </p>

              <h2 className="mt-5 bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-3xl font-semibold tracking-[-0.05em] text-transparent sm:text-4xl lg:text-5xl [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
                Trusted &amp; Regulated Forex Brokerage
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base [.light_&]:text-slate-600">
                Utilize cutting-edge technology and insights to gain an edge in
                today&rsquo;s fast-paced forex markets.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] [.light_&]:bg-blue-50/70 [.light_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 [.light_&]:divide-gray-200">
                {stats.map((stat, index) => (
                  <Counter
                    key={stat.label}
                    delay={index * 180}
                    label={stat.label}
                    start={isInView}
                    suffix={stat.suffix}
                    value={stat.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
