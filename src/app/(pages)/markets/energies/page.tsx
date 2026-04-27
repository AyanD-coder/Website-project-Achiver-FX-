import EnergiesPage from "@/components/ui/EnergiesPage";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets/energies");

export default function Page() {
  return <EnergiesPage />;
}
