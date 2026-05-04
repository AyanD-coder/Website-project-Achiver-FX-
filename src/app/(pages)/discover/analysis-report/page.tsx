import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import {
  getWordPressDailyAnalysisReports,
} from "@/lib/analysis-reports";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/analysis-report");

export default async function AnalysisReportPage() {
  const dailyReports = await getWordPressDailyAnalysisReports();

  return (
    <DiscoverPage
      page={{
        ...discoverPages.analysisReport,
        dailyReports: dailyReports.length
          ? dailyReports
          : discoverPages.analysisReport.dailyReports,
      }}
    />
  );
}
