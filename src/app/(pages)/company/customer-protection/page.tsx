import { CompanyPage, companyPages } from "@/components/ui/company-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/company/customer-protection");

export default function Page() {
  return <CompanyPage page={companyPages.customerProtection} />;
}
