import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/tools");

export default function ToolsPage() {
  return <DiscoverPage page={discoverPages.tradingTools} />;
}
