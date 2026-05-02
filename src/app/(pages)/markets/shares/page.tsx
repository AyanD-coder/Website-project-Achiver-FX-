import PageLayout from "@/components/ui/PageLayout";
import SharesTradingPage from "@/components/ui/SharesTradingPage";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/shares");

export default function SharesPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Global Shares",
        title: "Discover share trading",
        description:
          "Trade shares of leading global companies with competitive conditions, transparent pricing, and market access built for active decision-making.",
        imageSrc: "/company/about.webp",
        imageAlt:
          "AI generated fintech workspace with global share market dashboards.",
        actions: [
          { href: "#popular-shares", label: "View Popular Shares" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "2000+", label: "Global names" },
          { value: "1:5", label: "Max leverage" },
          { value: "Mon-Fri", label: "Market access" },
        ],
      }}
    >
      <SharesTradingPage showHero={false} />
    </PageLayout>
  );
}
