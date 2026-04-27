import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/tools/offerings");

export default function OfferingsPage() {
  return <DiscoverPage page={discoverPages.offerings} />;
}
