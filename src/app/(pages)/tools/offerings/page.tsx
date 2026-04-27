import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "Offerings | Achiever",
  description:
    "Explore Achiever account types, platforms, instruments, tools, and support in one trading suite.",
};

export default function OfferingsPage() {
  return <DiscoverPage page={discoverPages.offerings} />;
}
