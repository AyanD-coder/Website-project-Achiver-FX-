import type { Metadata } from "next";

import { DiscoverPage, discoverPages } from "@/components/ui/discover-page";

export const metadata: Metadata = {
  title: "Education | Achiever",
  description:
    "Learn trading foundations, risk habits, chart reading, and platform skills with Achiever education resources.",
};

export default function EducationPage() {
  return <DiscoverPage page={discoverPages.education} />;
}
