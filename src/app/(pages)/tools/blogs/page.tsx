import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/tools/blogs");

export default function BlogsPage() {
  return <DiscoverPage page={discoverPages.blogs} />;
}
