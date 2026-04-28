import { createPageMetadata } from "@/lib/page-metadata";
import HomeClient from "./HomeClient";

export const metadata = createPageMetadata("/");

export default function Home() {
  return <HomeClient />;
}
