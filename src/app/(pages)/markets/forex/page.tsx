import PageLayout from "@/components/ui/PageLayout";
import StatsSection from "@/components/ui/StatsSection";
import WhyTradeSection from "@/components/ui/WhyTradeSection";
import FAQSection from "@/components/ui/FAQSection";
import TradingSection from "@/sections/TradingSection";

export default function ForexPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Forex Markets",
        title: "Forex Trading",
        description:
          "Trade CFDs on a diverse range of the world's most popular currency pairs. The Forex market is the most volatile and liquid financial market, with a daily turnover exceeding $7.5 trillion.",
        imageSrc: "/discover/analysis-report.png",
        imageAlt:
          "AI generated market analysis desk with abstract currency charts and research screens.",
        actions: [
          { href: "/markets/account-types", label: "Compare Accounts" },
          { href: "/platform", label: "Explore Platform", variant: "outline" },
        ],
        stats: [
          { value: "$7.5T+", label: "Daily turnover" },
          { value: "24/5", label: "Market access" },
          { value: "CFDs", label: "Currency pairs" },
        ],
      }}
    >
      <StatsSection />
      <TradingSection />
      <WhyTradeSection />
      <FAQSection />
    </PageLayout>
  );
}
