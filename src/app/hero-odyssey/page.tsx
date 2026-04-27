import { HeroSection } from "@/components/ui/hero-odyssey";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("/hero-odyssey");

export default function HeroOdysseyPage() {
  return <HeroSection />;
}
