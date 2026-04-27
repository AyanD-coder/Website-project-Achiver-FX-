import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "News & Analysis | Achiever",
  description:
    "Read Achiever market analysis reports with technical context, macro themes, and trade preparation insights.",
};

export default function AnalysisReportPage() {
  return <DiscoverPage page={discoverPages.analysisReport} />;
}
