import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import {
  formatReportDate,
  getAnalysisReportHref,
  getAnalysisReports,
} from "@/lib/analysis-reports";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/analysis-report");

export default async function AnalysisReportPage() {
  const dailyReports = (await getAnalysisReports()).map((report) => ({
    date: formatReportDate(report.date),
    href: getAnalysisReportHref(report),
    title: report.title,
  }));

  return (
    <DiscoverPage
      page={{
        ...discoverPages.analysisReport,
        dailyReports,
      }}
    />
  );
}
