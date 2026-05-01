import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";

type PlatformPoint = {
  description: string;
  title: string;
};

type PlatformDetailPageProps = {
  eyebrow: string;
  features: PlatformPoint[];
  icon: LucideIcon;
  summary: string;
  title: string;
};

export default function PlatformDetailPage({
  eyebrow,
  features,
  icon: Icon,
  summary,
  title,
}: PlatformDetailPageProps) {
  return (
    <div className="w-full">
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] p-7 shadow-[0_28px_80px_rgba(2,8,20,0.28)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.16),transparent_32%)] [.light_&]:bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.09),transparent_32%)]" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200 [.light_&]:text-blue-600">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                {summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="min-h-12 rounded-full px-7 text-sm">
                  <Link href="/markets/account-types">
                    Open Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-full px-7 text-sm"
                >
                  <Link href="/platform">Back to Platforms</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(2,8,20,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_32px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200"
              >
                <CheckCircle2 className="h-5 w-5 text-sky-300 [.light_&]:text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
