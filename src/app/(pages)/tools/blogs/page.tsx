import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "Blogs | Achiever",
  description:
    "Explore Achiever trading blogs with market explainers, platform tips, and practical trading perspectives.",
};

export default function BlogsPage() {
  return <DiscoverPage page={discoverPages.blogs} />;
}
