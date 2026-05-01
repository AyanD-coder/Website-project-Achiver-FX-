import type { MetadataRoute } from "next";

import { getAbsoluteUrl, pageRoutes } from "@/lib/page-metadata";

const lastModified = new Date("2026-05-01T00:00:00+05:30");

function getPriority(path: string) {
  if (path === "/") return 1;
  if (path === "/markets" || path === "/platform" || path === "/tools") return 0.9;
  if (path.startsWith("/markets/")) return 0.82;
  if (path === "/hero-odyssey") return 0.4;
  return 0.75;
}

function getChangeFrequency(
  path: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/" || path === "/markets" || path === "/tools") return "weekly";
  if (path === "/tools/blogs" || path === "/tools/analysis-report") return "weekly";
  if (path === "/hero-odyssey") return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageRoutes.map((path) => ({
    url: getAbsoluteUrl(path),
    lastModified,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));
}
