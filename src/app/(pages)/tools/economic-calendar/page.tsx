import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/tools/economic-calendar");

export default function EconomicCalendarPage() {
  return <DiscoverPage page={discoverPages.economicCalendar} />;
}
