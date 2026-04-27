import { CompanyPage, companyPages } from "@/components/ui/company-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/company/legal-documents");

export default function Page() {
  return <CompanyPage page={companyPages.legalDocuments} />;
}
