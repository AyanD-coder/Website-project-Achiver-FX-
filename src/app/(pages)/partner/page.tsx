import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-1 flex-col items-center overflow-hidden bg-[#040814] pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_30%,#060b15_65%,#070d17_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Partner
          </h1>
          <p className="text-lg text-slate-400 text-center max-w-2xl">
            Join our global network of partners and grow your business with us.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
