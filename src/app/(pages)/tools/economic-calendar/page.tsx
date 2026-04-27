import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "Economic Calendar | Achiever",
  description:
    "Track economic events, market-moving data releases, and volatility timing with Achiever.",
};

export default function EconomicCalendarPage() {
  return <DiscoverPage page={discoverPages.economicCalendar} />;
}
