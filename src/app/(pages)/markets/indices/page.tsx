import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import IndicesHero from "@/components/ui/IndicesHero";
import GradientCardShowcase from "@/components/ui/gradient-card-showcase";
import IndicesWhyTradeSection from "@/components/ui/IndicesWhyTradeSection";

export default function IndicesPage() {
  return (
    <>
      <Navbar solidLightModeAtTop />
      <main className="relative flex min-h-screen flex-1 flex-col items-center overflow-hidden bg-[#040814] pt-24 [.light_&]:bg-[#f5fbff]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_30%,#060b15_65%,#070d17_100%)] [.light_&]:bg-[linear-gradient(180deg,#f7fcff_0%,#eef8ff_38%,#f8fdff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_16%_10%,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_50%_42%,rgba(125,211,252,0.18),transparent_30%)]" />
        </div>
        <IndicesHero />
        <GradientCardShowcase />
        <IndicesWhyTradeSection />
      </main>
      <Footer />
    </>
  );
}
