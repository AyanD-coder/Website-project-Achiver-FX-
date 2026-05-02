import EconomicCalendarPageExperience from "@/components/ui/EconomicCalendarPageExperience";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/economic-calendar");

export default function EconomicCalendarPage() {
  return (
    <PageLayout>
      <EconomicCalendarPageExperience />
    </PageLayout>
  );
}
