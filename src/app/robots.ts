import type { MetadataRoute } from "next";

import { getAbsoluteUrl, siteUrl } from "@/lib/page-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: siteUrl.host,
  };
}
