import PageLayout from "@/components/ui/PageLayout";
import PartnershipPage from "@/components/ui/partnership-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/partner");

export default function Page() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Partnerships",
        title: "Scale your success with Achiever",
        description:
          "Join a global partner ecosystem with flexible IB, affiliate, and white-label programs backed by reliable tools and dedicated support.",
        imageSrc: "/promotion_hero_1777279021925.png",
        imageAlt:
          "Financial partnership workspace with market dashboards and growth analytics.",
        actions: [
          { href: "#partner-programs", label: "View Programs" },
          { href: "/company/contact-us", label: "Talk to Us", variant: "outline" },
        ],
        stats: [
          { value: "IB", label: "Broker program" },
          { value: "CPA", label: "Affiliate models" },
          { value: "MT5", label: "White label" },
        ],
      }}
    >
      <PartnershipPage />
    </PageLayout>
  );
}
