import PageLayout from "@/components/ui/PageLayout";
import PromotionsPage from "@/components/ui/promotions-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/promotions");

export default function Page() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Promotions",
        title: "Maximize your trading potential",
        description:
          "Access clear, trader-focused bonuses and account offers built to help you start stronger and keep more value in your trading flow.",
        imageSrc: "/promotions_hero_blue_1777280213507.png",
        imageAlt:
          "Trading promotion dashboard with bonus cards and market analytics.",
        actions: [
          { href: "#featured-promotions", label: "View Promotions" },
          { href: "/register", label: "Create Account", variant: "outline" },
        ],
        stats: [
          { value: "100%", label: "Trading bonus" },
          { value: "$100", label: "Welcome offer" },
          { value: "VIP", label: "Rewards access" },
        ],
      }}
    >
      <PromotionsPage />
    </PageLayout>
  );
}
