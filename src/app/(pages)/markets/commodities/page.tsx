import PageLayout from "@/components/ui/PageLayout";
import CommoditiesTradeSection from "@/components/ui/CommoditiesTradeSection";
import CommoditiesPriceViewSection from "@/components/ui/CommoditiesPriceViewSection";
import CommoditiesQuickAccessSection from "@/components/ui/CommoditiesQuickAccessSection";
import CommoditiesSetupOrbitSection from "@/components/ui/CommoditiesSetupOrbitSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/commodities");

export default function CommoditiesPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Commodities",
        title: "Discover new ways to trade commodities",
        description:
          "Access metals, energy, and agricultural markets with focused tools, transparent pricing, and support built for active traders.",
        imageSrc: "/discover/offerings.webp",
        imageAlt:
          "AI generated brokerage suite with commodity market modules and trading visuals.",
        actions: [
          { href: "/register", label: "Create Account" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "Metals", label: "Market class" },
          { value: "Energy", label: "Market class" },
          { value: "Softs", label: "Commodities" },
        ],
      }}
    >
      <CommoditiesTradeSection compact />
      <CommoditiesPriceViewSection />
      <CommoditiesQuickAccessSection />
      <CommoditiesSetupOrbitSection />
    </PageLayout>
  );
}
