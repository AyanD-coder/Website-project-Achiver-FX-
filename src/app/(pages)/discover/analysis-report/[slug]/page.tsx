import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  LineChart,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import PageLayout from "@/components/ui/PageLayout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  formatReportDate,
  getAnalysisReportBySlug,
  getAnalysisReports,
} from "@/lib/analysis-reports";
import { createMetadataTitle, siteUrl } from "@/lib/page-metadata";
import { sanitizeCmsHtml } from "@/lib/sanitize-html";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAnalysisReports().then((reports) => reports.map((report) => ({
    slug: report.slug,
  })));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = await getAnalysisReportBySlug(slug);

  if (!report) {
    return {
      title: "Analysis Report",
    };
  }

  const url = new URL(`/discover/analysis-report/${report.slug}`, siteUrl);

  return {
    title: createMetadataTitle(report.title),
    description: report.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: report.title,
      description: report.summary,
      type: "article",
      url,
    },
  };
}

function LevelList({ levels }: { levels: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {levels.map((level) => (
        <span
          key={level}
          className="rounded-lg border border-sky-300/16 bg-sky-300/[0.075] px-3 py-1.5 text-sm font-semibold text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700"
        >
          {level}
        </span>
      ))}
    </div>
  );
}

export default async function AnalysisReportDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const report = await getAnalysisReportBySlug(slug);

  if (!report) {
    notFound();
  }

  const sanitizedContentHtml = report.contentHtml
    ? sanitizeCmsHtml(report.contentHtml, { demoteH1To: 2 })
    : undefined;

  return (
    <PageLayout
      hero={{
        eyebrow: "Technical Analysis",
        title: report.title,
        description: report.summary,
        imageSrc: report.image ?? "/discover/analysis-report.webp",
        imageAlt:
          "AI generated market analysis desk with abstract charts and research screens.",
        actions: [
          {
            href: "/discover/analysis-report",
            label: "All Reports",
            variant: "outline",
          },
        ],
        stats: [
          { label: "Report date", value: formatReportDate(report.date) },
          {
            label: "Source",
            value: report.source === "wordpress" ? "WordPress" : "JSON",
          },
          { label: "Type", value: "Technical" },
        ],
      }}
    >
      <SectionWrapper className="py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="rounded-2xl border border-white/10 bg-bg-secondary/55 p-6 shadow-[0_22px_60px_rgba(2,8,20,0.2)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              Report Brief
            </Badge>

            <div className="mt-6 grid gap-4">
              <div className="flex gap-3">
                <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-white [.light_&]:text-slate-950">
                    {formatReportDate(report.date)}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                    {report.author}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                <p className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                  {report.outlook}
                </p>
              </div>
            </div>

            {report.sourceUrl ? (
              <Button
                asChild
                className="mt-4 min-h-12 w-full rounded-lg px-5 text-sm"
              >
                <Link href={report.sourceUrl} target="_blank" rel="noreferrer">
                  Open WordPress Post
                </Link>
              </Button>
            ) : null}

            <Button
              asChild
              variant="outline"
              className="mt-7 min-h-12 w-full rounded-lg px-5 text-sm"
            >
              <Link href="/discover/analysis-report">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to reports
              </Link>
            </Button>
          </aside>

          {sanitizedContentHtml ? (
            <article className="rounded-2xl border border-white/10 bg-bg-secondary/50 p-6 shadow-[0_22px_60px_rgba(2,8,20,0.18)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:p-8">
              <div
                className="max-w-none text-base leading-8 text-slate-300 [&_*]:max-w-full [&_a]:font-semibold [&_a]:text-sky-200 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_li]:my-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_strong]:text-white [&_table]:my-6 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_td]:border [&_td]:border-white/10 [&_td]:p-3 [&_th]:border [&_th]:border-white/10 [&_th]:bg-white/5 [&_th]:p-3 [&_th]:text-left [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [.light_&]:text-slate-700 [.light_&_*]:border-slate-200 [.light_&_a]:text-blue-700 [.light_&_h2]:text-slate-950 [.light_&_h3]:text-slate-950 [.light_&_strong]:text-slate-950 [.light_&_th]:bg-slate-50"
                dangerouslySetInnerHTML={{ __html: sanitizedContentHtml }}
              />
            </article>
          ) : (
            <div className="grid gap-5">
              {report.markets.map((market) => (
              <article
                key={`${market.symbol}-${market.name}`}
                className="rounded-2xl border border-white/10 bg-bg-secondary/50 p-6 shadow-[0_22px_60px_rgba(2,8,20,0.18)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:text-blue-600">
                      {market.symbol}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                      {market.name}
                    </h2>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-lg border border-sky-300/18 bg-sky-300/10 px-3 py-2 text-sm font-semibold text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                    <LineChart className="mr-2 h-4 w-4" />
                    {market.bias}
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-700">
                  {market.analysis}
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-500">
                      Support
                    </h3>
                    <LevelList levels={market.support} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-500">
                      Resistance
                    </h3>
                    <LevelList levels={market.resistance} />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                    <p className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                      {market.trend}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                    <p className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                      {market.watch}
                    </p>
                  </div>
                </div>
              </article>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-300/18 bg-amber-300/[0.055] p-5 text-sm leading-7 text-amber-100 [.light_&]:border-amber-200 [.light_&]:bg-amber-50 [.light_&]:text-amber-800">
          {report.disclaimer}
        </div>
      </section>
    </PageLayout>
  );
}
