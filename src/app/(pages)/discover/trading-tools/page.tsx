import TradingToolsPage from "@/components/ui/trading-tools-page";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/discover/trading-tools");

export default function ToolsPage() {
  return <TradingToolsPage />;
}
