import { MonitorUp } from "lucide-react";

import PageLayout from "@/components/ui/PageLayout";
import PlatformDetailPage from "@/components/ui/platform-detail-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiver-web-trader");

export default function AchiverWebTraderPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiver Web Trader",
        title: "Trade directly from your browser",
        description:
          "A browser-based trading workspace for quick access to markets, charts, and account workflows without a desktop install.",
        imageSrc: "/discover/analysis-report.png",
        imageAlt: "Browser trading platform with live charts and market panels.",
        actions: [
          { href: "/markets/account-types", label: "Start Trading" },
          { href: "/platform/metatrader-5", label: "View MT5", variant: "outline" },
        ],
        stats: [
          { value: "Browser", label: "No install" },
          { value: "Charts", label: "Market tools" },
          { value: "Fast", label: "Access" },
        ],
      }}
    >
      <PlatformDetailPage
        eyebrow="Web Platform"
        icon={MonitorUp}
        title="A clean browser trading experience for fast market access."
        summary="Achiver Web Trader gives traders a flexible web workspace for scanning instruments, checking setups, and staying close to the market from supported browsers."
        features={[
          {
            title: "No-install access",
            description:
              "Open the platform from your browser and get to market views without installing desktop software.",
          },
          {
            title: "Responsive workspace",
            description:
              "Use a focused interface built for chart checks, watchlists, and trading preparation.",
          },
          {
            title: "Cross-device flow",
            description:
              "Continue your routine between desktop, web, and mobile depending on where you are.",
          },
          {
            title: "Practical tools",
            description:
              "Keep essential charting, account, and instrument views close for repeated daily use.",
          },
        ]}
      />
    </PageLayout>
  );
}
