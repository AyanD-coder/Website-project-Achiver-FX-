import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "Trading Tools | Achiever",
  description:
    "Explore Achiever trading tools for analysis, economic events, and daily market preparation.",
};

export default function ToolsPage() {
  return <DiscoverPage page={discoverPages.tradingTools} />;
}
