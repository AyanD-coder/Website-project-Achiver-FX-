import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/education");

export default function EducationPage() {
  return <DiscoverPage page={discoverPages.education} />;
}
