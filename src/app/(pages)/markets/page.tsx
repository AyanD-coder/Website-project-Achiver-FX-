import { redirect } from "next/navigation";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/markets");

export default function MarketsPage() {
  redirect("/markets/market-overview");
}
