import IntroducingBrokerPage from "@/components/ui/introducing-broker-page";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/partner/introducing-broker");

export default function Page() {
  return (
    <PageLayout>
      <IntroducingBrokerPage />
    </PageLayout>
  );
}
