import PageLayout from "@/components/ui/PageLayout";
import MetaTrader5PlatformPage from "@/components/ui/MetaTrader5PlatformPage";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/metatrader-5");

export default function MetaTrader5Page() {
  return (
    <PageLayout
      hero={{
        eyebrow: "MetaTrader 5",
        title: "Level up your trading with Achievers MT5",
        description:
          "Use pro-grade charting, algorithmic trading support, and multi-asset access from one dependable trading workspace.",
        imageSrc: "/discover/trading-tools.png",
        imageAlt:
          "AI generated trading toolkit with platform charts and market modules.",
        actions: [
          { href: "#get-started", label: "Get Started" },
          { href: "/platform", label: "View RTX5", variant: "outline" },
        ],
        stats: [
          { value: "MT5", label: "Platform" },
          { value: "Multi-asset", label: "Market access" },
          { value: "Any device", label: "Trading flow" },
        ],
      }}
    >
      <MetaTrader5PlatformPage showHero={false} />
    </PageLayout>
  );
}
