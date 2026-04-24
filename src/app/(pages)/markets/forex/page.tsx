import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import StatsSection from "@/components/ui/StatsSection";
import WhyTradeSection from "@/components/ui/WhyTradeSection";
import FAQSection from "@/components/ui/FAQSection";
import TradingSection from "@/sections/TradingSection";

export default function ForexPage() {
  return (
    <>
      <Navbar solidLightModeAtTop />
      <main className="relative flex min-h-screen flex-1 flex-col items-center overflow-hidden bg-[#040814] pt-24 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_44%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_30%,#060b15_65%,#070d17_100%)] [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#f8fbff_34%,#f8fafc_68%,#ffffff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.06),transparent_30%)]" />
        </div>

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-20 text-white [.light_&]:text-[#111827]">
          <h1 className="mb-6 pb-1 leading-[1.12] bg-gradient-to-b from-white to-white/70 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent md:text-6xl md:leading-[1.08] [.light_&]:from-[#111827] [.light_&]:to-[#2563EB]">
            Forex Trading
          </h1>
          <p className="max-w-2xl text-center text-lg text-slate-400 [.light_&]:text-slate-600">
            Trade CFDs on a diverse range of the world&apos;s most popular
            currency pairs. The Forex market is the most volatile and liquid
            financial market, with a daily turnover exceeding $7.5 trillion.
          </p>
        </div>

        <StatsSection />
        <TradingSection />
        <WhyTradeSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
