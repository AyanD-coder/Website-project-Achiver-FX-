import AccountTypesPage from "@/components/ui/AccountTypesPage";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/account-types");

export default function MarketAccountTypesPage() {
  return <AccountTypesPage />;
}
