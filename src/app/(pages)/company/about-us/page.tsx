import { CompanyPage, companyPages } from "@/components/ui/company-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/company/about-us");

export default function AboutUsPage() {
  return <CompanyPage page={companyPages.about} />;
}
