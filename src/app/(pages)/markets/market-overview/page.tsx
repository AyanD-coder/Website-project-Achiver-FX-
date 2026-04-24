import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import OrbitalFeatures from "@/components/ui/OrbitalFeatures";
import FAQSection from "@/components/ui/FAQSection";
import TradingSection from "@/sections/TradingSection";

export default function MarketOverviewPage() {
  return (
    <>
      <Navbar solidLightModeAtTop />
      <main className="flex-1 bg-[#02050c] transition-colors duration-300 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_52%,#ffffff_100%)]">
        <OrbitalFeatures />
        <TradingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
