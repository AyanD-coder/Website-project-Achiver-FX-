import PageLayout from "@/components/ui/PageLayout";
import OrbitalFeatures from "@/components/ui/OrbitalFeatures";
import FAQSection from "@/components/ui/FAQSection";
import TradingSection from "@/sections/TradingSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/market-overview");

export default function MarketOverviewPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Markets",
        title: "Explore multi-asset market access",
        description:
          "Move across currencies, metals, indices, equities, energies, and digital assets from one connected Achiever trading environment.",
        imageSrc: "/discover/offerings.webp",
        imageAlt:
          "AI generated brokerage offering suite with abstract market visuals.",
        actions: [
          { href: "/markets/account-types", label: "Compare Accounts" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "3000+", label: "Instruments" },
          { value: "Multi-asset", label: "Coverage" },
          { value: "MT5", label: "Platform access" },
        ],
      }}
    >
      <OrbitalFeatures />
      <TradingSection />
      <FAQSection />
    </PageLayout>
  );
}
