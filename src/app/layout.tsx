import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";

import {
  defaultMetadata,
  getAbsoluteUrl,
  pageMetadata,
  pageRoutes,
  siteName,
} from "@/lib/page-metadata";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": getAbsoluteUrl("/#organization"),
      name: siteName,
      url: getAbsoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl("/achiever-logo-v2.png"),
        width: 456,
        height: 84,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@achieverfinancials.com",
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": getAbsoluteUrl("/#website"),
      name: siteName,
      url: getAbsoluteUrl("/"),
      publisher: {
        "@id": getAbsoluteUrl("/#organization"),
      },
    },
    ...pageRoutes.map((path, index) => ({
      "@type": "SiteNavigationElement",
      "@id": getAbsoluteUrl(`${path === "/" ? "/" : path}#navigation`),
      position: index + 1,
      name: pageMetadata[path].title,
      description: pageMetadata[path].description,
      url: getAbsoluteUrl(path),
    })),
  ],
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light scroll-smooth"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = window.localStorage.getItem("theme");
                const theme = stored === "dark" ? "dark" : "light";
                const root = document.documentElement;
                root.classList.remove("light", "dark");
                root.classList.add(theme);
                root.dataset.theme = theme;
              } catch {}
            })();`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${sora.variable} flex min-h-screen flex-col antialiased transition-colors duration-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
