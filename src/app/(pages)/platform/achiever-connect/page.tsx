import AchieverConnectExperience from "@/components/ui/AchieverConnectExperience";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiever-connect");

export default function AchieverConnectPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiever Connect",
        title: "Simplify success with Achiever Connect",
        description:
          "Follow proven traders, evaluate performance, and replicate strategies through a smarter copy trading experience.",
        imageSrc: "/discover/offerings.webp",
        imageAlt: "Connected trading dashboard with account and market modules.",
        actions: [
          { href: "/company/contact-us", label: "Contact Support" },
          { href: "/platform", label: "View Platforms", variant: "outline" },
        ],
        stats: [
          { value: "CRM", label: "Account flow" },
          { value: "Support", label: "Service access" },
          { value: "Secure", label: "Client portal" },
        ],
      }}
    >
      <AchieverConnectExperience />
    </PageLayout>
  );
}
