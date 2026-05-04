import AchieverWebTraderExperience from "@/components/ui/AchieverWebTraderExperience";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiever-web-trader");

const WEB_TRADER_TERMINAL_URL = "https://webtrading.achieverfx.com/terminal";

export default function AchieverWebTraderPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiever Web Trader",
        title: "Trade directly from your browser",
        description:
          "A browser-based trading workspace for quick access to markets, charts, and account workflows without a desktop install.",
        imageSrc: "/discover/analysis-report.webp",
        imageAlt: "Browser trading platform with live charts and market panels.",
        actions: [
          { href: WEB_TRADER_TERMINAL_URL, label: "Start Trading" },
          { href: "/platform/metatrader-5", label: "View MT5", variant: "outline" },
        ],
        stats: [
          { value: "Browser", label: "No install" },
          { value: "Charts", label: "Market tools" },
          { value: "Fast", label: "Access" },
        ],
      }}
    >
      <AchieverWebTraderExperience />
    </PageLayout>
  );
}
