import PageLayout from "@/components/ui/PageLayout";
import RTX5PlatformPage from "@/components/ui/RTX5PlatformPage";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform");

export default function PlatformPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Platforms",
        title: "Get Flexy Markets RTX5",
        description:
          "Begin trading on a multi-asset platform with professional charting, fast execution, and device continuity across desktop, web, and mobile.",
        imageSrc: "/discover/offerings.png",
        imageAlt:
          "AI generated brokerage platform suite with market dashboards and trading modules.",
        actions: [
          { href: "#advanced-features", label: "Explore Features" },
          { href: "/platform/metatrader-5", label: "View MT5", variant: "outline" },
        ],
        stats: [
          { value: "Desktop", label: "Windows" },
          { value: "Web", label: "Browser access" },
          { value: "Mobile", label: "iOS Android" },
        ],
      }}
    >
      <RTX5PlatformPage showHero={false} />
    </PageLayout>
  );
}
