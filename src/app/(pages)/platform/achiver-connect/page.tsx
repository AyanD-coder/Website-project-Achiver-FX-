import { Cable } from "lucide-react";

import PageLayout from "@/components/ui/PageLayout";
import PlatformDetailPage from "@/components/ui/platform-detail-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/platform/achiver-connect");

export default function AchiverConnectPage() {
  return (
    <PageLayout
      hero={{
        eyebrow: "Achiver Connect",
        title: "Connect your trading workflow in one place",
        description:
          "Achiver Connect brings platform access, account visibility, and service touchpoints together for a smoother client experience.",
        imageSrc: "/discover/offerings.png",
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
      <PlatformDetailPage
        eyebrow="Client Portal"
        icon={Cable}
        title="A connected hub for accounts, support, and platform access."
        summary="Achiver Connect is shaped around the practical client journey: account actions, support routing, platform access, and trading resources in one organized experience."
        features={[
          {
            title: "Account overview",
            description:
              "Keep essential account information and client actions organized in a focused portal experience.",
          },
          {
            title: "Support routing",
            description:
              "Reach the right team faster for platform, account, and service-related questions.",
          },
          {
            title: "Platform links",
            description:
              "Move from account management to trading platforms with fewer steps and clearer paths.",
          },
          {
            title: "Resource access",
            description:
              "Connect education, analysis, tools, and account options as part of one workflow.",
          },
        ]}
      />
    </PageLayout>
  );
}
