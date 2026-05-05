import AchieverAppExperience from "@/components/ui/AchieverAppExperience";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiever-app");

export default function AchieverAppPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiever App",
        title: "Trade from your pocket with Achiever App",
        description:
          "A mobile-first trading experience for monitoring markets, managing positions, and staying connected wherever the session takes you.",
        imageSrc: "/discover/trading-tools.webp",
        imageAlt: "Mobile trading app interface with market charts.",
        actions: [
          { href: "/register", label: "Open Account" },
          { href: "/platform", label: "View Platforms", variant: "outline" },
        ],
        stats: [
          { value: "iOS", label: "Mobile access" },
          { value: "Android", label: "Device support" },
          { value: "Live", label: "Market watch" },
        ],
      }}
    >
      <AchieverAppExperience />
    </PageLayout>
  );
}
