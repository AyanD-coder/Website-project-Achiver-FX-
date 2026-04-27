import PageLayout from "@/components/ui/PageLayout";
import IndicesHero from "@/components/ui/IndicesHero";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";
import IndicesWhyTradeSection from "@/components/ui/IndicesWhyTradeSection";

export default function IndicesPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Indices",
        title: "Trade sectors with Achiever indices",
        description:
          "Gain broad market exposure through major global benchmarks and sector-led opportunities from one trading account.",
        imageSrc: "/discover/analysis-report.png",
        imageAlt:
          "AI generated market analysis desk with global index charts and research screens.",
        actions: [
          { href: "/markets/account-types", label: "Compare Accounts" },
          { href: "/tools/analysis-report", label: "Read Analysis", variant: "outline" },
        ],
        stats: [
          { value: "30+", label: "Tradable indices" },
          { value: "24/5", label: "Coverage" },
          { value: "Global", label: "Benchmarks" },
        ],
      }}
    >
      <IndicesHero compact />
      <GradientCardShowcase />
      <IndicesWhyTradeSection />
    </PageLayout>
  );
}
