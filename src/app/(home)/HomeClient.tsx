"use client";

import dynamic from "next/dynamic";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

function FeaturesGridFallback() {
  return (
    <section
      aria-hidden="true"
      className="relative z-10 hidden min-h-[720px] w-full md:block lg:min-h-[440px]"
    />
  );
}

function RobotShowcaseFallback() {
  return (
    <section
      aria-hidden="true"
      className="section-contain relative z-30 w-full px-4 py-0 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="min-h-[690px] sm:min-h-[620px] lg:min-h-[584px]" />
      </div>
    </section>
  );
}

const FeaturesGrid = dynamic(() => import("@/sections/FeaturesGrid"), {
  loading: () => <FeaturesGridFallback />,
});
const RobotShowcase = dynamic(() => import("@/sections/RobotShowcase"), {
  ssr: false,
  loading: () => <RobotShowcaseFallback />,
});
const StepsSection = dynamic(() => import("@/sections/StepsSection"), {
  loading: () => (
    <section aria-hidden="true" className="section-contain w-full min-h-[920px] px-4 py-24 sm:px-6 lg:px-8" />
  ),
});
const Pricing = dynamic(() => import("@/sections/Pricing"), {
  loading: () => (
    <section aria-hidden="true" className="section-contain w-full min-h-[780px] px-4 py-16 sm:px-6 lg:px-8" />
  ),
});
const Testimonials = dynamic(() => import("@/sections/Testimonials"), {
  loading: () => (
    <section aria-hidden="true" className="section-contain w-full min-h-[620px] px-4 py-16 sm:px-6 lg:px-8" />
  ),
});
const Subscribe = dynamic(() => import("@/sections/Subscribe"), {
  loading: () => (
    <section aria-hidden="true" className="section-contain w-full min-h-[360px] px-4 py-16 sm:px-6 lg:px-8" />
  ),
});
const Footer = dynamic(() => import("@/sections/Footer"), {
  loading: () => <footer aria-hidden="true" className="min-h-[360px] w-full" />,
});

export default function HomeClient() {
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
