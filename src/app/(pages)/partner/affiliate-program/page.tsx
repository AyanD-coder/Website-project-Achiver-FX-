import AffiliateProgramPage from "@/components/ui/affiliate-program-page";
import PageLayout from "@/components/ui/PageLayout";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/partner/affiliate-program");

export default function Page() {
  return (
    <PageLayout>
      <AffiliateProgramPage />
    </PageLayout>
  );
}
