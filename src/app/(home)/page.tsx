import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/sections/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/sections/Hero"), { ssr: true });
const RobotShowcase = dynamic(() => import("@/sections/RobotShowcase"), { ssr: false });
const FeaturesGrid = dynamic(() => import("@/sections/FeaturesGrid"));

const StepsSection = dynamic(() => import("@/sections/StepsSection"));
const Pricing = dynamic(() => import("@/sections/Pricing"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const Subscribe = dynamic(() => import("@/sections/Subscribe"));
const Footer = dynamic(() => import("@/sections/Footer"));
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/");

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-[#040814] [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_52%,#f8fafc_100%)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_30%,#060b15_65%,#070d17_100%)] [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_36%,#f8fafc_72%,#ffffff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.05),transparent_30%)]" />
          <div className="absolute inset-x-0 top-0 h-[140vh] bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.14),transparent_30%)] blur-3xl [.light_&]:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_26%),radial-gradient(circle_at_50%_38%,rgba(14,165,233,0.08),transparent_28%)]" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center">
          <Hero />
          <FeaturesGrid />
          <RobotShowcase />
          <StepsSection />
          <Pricing />
          <Testimonials />
          <Subscribe />
        </div>
      </main>
      <Footer />
    </>
  );
}
