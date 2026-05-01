import { Smartphone } from "lucide-react";

import PageLayout from "@/components/ui/PageLayout";
import PlatformDetailPage from "@/components/ui/platform-detail-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiver-app");

export default function AchiverAppPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiver App",
        title: "Trade from your pocket with Achiver App",
        description:
          "A mobile-first trading experience for monitoring markets, managing positions, and staying connected wherever the session takes you.",
        imageSrc: "/discover/trading-tools.png",
        imageAlt: "Mobile trading app interface with market charts.",
        actions: [
          { href: "/markets/account-types", label: "Open Account" },
          { href: "/platform", label: "View Platforms", variant: "outline" },
        ],
        stats: [
          { value: "iOS", label: "Mobile access" },
          { value: "Android", label: "Device support" },
          { value: "Live", label: "Market watch" },
        ],
      }}
    >
      <PlatformDetailPage
        eyebrow="Mobile Platform"
        icon={Smartphone}
        title="Built for fast checks, clean action, and daily trading rhythm."
        summary="Achiver App keeps core trading workflows close: watchlists, charts, account views, and position monitoring in a compact mobile interface."
        features={[
          {
            title: "Live market watch",
            description:
              "Track favorite instruments, price movement, and active sessions from one mobile view.",
          },
          {
            title: "Position awareness",
            description:
              "Review open trades, account status, and key updates without returning to desktop.",
          },
          {
            title: "Touch-friendly charts",
            description:
              "Use mobile chart views designed for quick scanning and practical decision support.",
          },
          {
            title: "On-the-go continuity",
            description:
              "Move between desktop, web, and mobile while keeping your trading routine connected.",
          },
        ]}
      />
    </PageLayout>
  );
}
