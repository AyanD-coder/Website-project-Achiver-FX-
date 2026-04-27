import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/tools/analysis-report");

export default function AnalysisReportPage() {
  return <DiscoverPage page={discoverPages.analysisReport} />;
}
