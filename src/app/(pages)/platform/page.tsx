import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import RTX5PlatformPage from "@/components/ui/RTX5PlatformPage";

export default function PlatformPage() {
  return (
    <>
      <Navbar solidLightModeAtTop />
      <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-[#040814] pt-24 [.light_&]:bg-[linear-gradient(180deg,#fbfdff_0%,#f1fbf7_34%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_28%,#061018_64%,#071117_100%)] [.light_&]:bg-[linear-gradient(180deg,#fcfeff_0%,#f3fbf8_40%,#ffffff_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(16,185,129,0.08),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.1),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(16,185,129,0.08),transparent_18%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.06),transparent_30%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.92),transparent_32%)]" />
        </div>
        <RTX5PlatformPage />
      </main>
      <Footer />
    </>
  );
}
