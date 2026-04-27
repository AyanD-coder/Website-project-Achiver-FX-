import PageLayout from "@/components/ui/PageLayout";
import EquitiesFeatureOrbit from "@/components/ui/EquitiesFeatureOrbit";
import EquitiesFaqSection from "@/components/ui/EquitiesFaqSection";
import EquitiesGlobalMarketsSection from "@/components/ui/EquitiesGlobalMarketsSection";

export default function EquitiesPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Equities",
        title: "Trade CFD shares across global markets",
        description:
          "Access popular shares across the UK, EU, and US with competitive pricing, professional platforms, and a connected trading workflow.",
        imageSrc: "/company/about.png",
        imageAlt:
          "AI generated premium fintech operations floor with abstract market dashboards.",
        actions: [
          { href: "/markets/account-types", label: "Compare Accounts" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "150+", label: "Equities" },
          { value: "US EU UK", label: "Regions" },
          { value: "CFDs", label: "Share access" },
        ],
      }}
    >
      <EquitiesFeatureOrbit compact />
      <EquitiesFaqSection />
      <EquitiesGlobalMarketsSection />
    </PageLayout>
  );
}
