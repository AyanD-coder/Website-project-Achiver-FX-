import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/spotlight-card";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: FeatureCardProps) {
  if (highlighted) {
    return (
      <GlowCard
        glowColor="blue"
        customSize
        className="h-full min-h-[320px] w-full rounded-[28px] bg-transparent shadow-[0_30px_80px_rgba(29,78,216,0.20)] transition-all duration-300 hover:scale-105 hover:shadow-[0_40px_100px_rgba(29,78,216,0.28)]"
      >
        <article
          className={cn(
            "group relative flex min-h-[320px] h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[#081a43] via-[#0d2c74] to-[#1d4ed8] p-8 text-white",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.34),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.36),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_35%,rgba(255,255,255,0.02)_100%)]" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-xl">
              <ArrowRight size={20} />
            </div>

            <div className="mt-8 max-w-xs">
              <h3 className="text-2xl font-semibold leading-tight">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-blue-100/78">
                {description}
              </p>
            </div>

            <div className="mt-auto pt-8">
              <button className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-105 hover:bg-cyan-300">
                Explore insights
                <ArrowRight size={16} />
              </button>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                <div className="flex items-end gap-2">
                  {[42, 58, 48, 72, 64, 86, 94].map((height, index) => (
                    <div
                      key={height}
                      className={cn(
                        "flex-1 rounded-full bg-gradient-to-t from-cyan-300/75 to-white/80",
                        index === 6 ? "from-cyan-200 to-white" : "",
                      )}
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-blue-100/70">
                  <span>Forecast</span>
                  <span>+24.8%</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </GlowCard>
    );
  }

  return (
    <article className="group flex min-h-[260px] flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
      {Icon ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon size={22} strokeWidth={1.8} />
        </div>
      ) : null}

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-8">
        <button
          aria-label={`Learn more about ${title}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-600 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50"
        >
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
