import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";

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
        width: 1200,
        height: 239,
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
        <Script
          id="achiever-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const themeKey = "theme";
                const historyThemeKey = "achiever-theme-before-navigation";
                const authRefreshKey = "achiever-auth-return-refresh";
                const themeChangeEvent = "theme-change";
                const getStoredTheme = () => {
                  const stored = window.localStorage.getItem(themeKey);
                  if (stored === "dark" || stored === "light") return stored;
                  const historyTheme = window.sessionStorage.getItem(historyThemeKey);
                  if (historyTheme === "dark" || historyTheme === "light") return historyTheme;
                  return "light";
                };
                const syncTheme = (theme) => {
                  const root = document.documentElement;
                  root.classList.remove("light", "dark");
                  root.classList.add(theme);
                  root.dataset.theme = theme;
                  window.localStorage.setItem(themeKey, theme);
                  window.sessionStorage.setItem(historyThemeKey, theme);
                };
                const toggleTheme = () => {
                  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
                  const nextTheme = currentTheme === "light" ? "dark" : "light";
                  syncTheme(nextTheme);
                  window.dispatchEvent(new Event(themeChangeEvent));
                };
                const theme = getStoredTheme();
                syncTheme(theme);
                if (!window.__achieverThemeToggleReady) {
                  window.__achieverThemeToggleReady = true;
                  document.addEventListener("click", (event) => {
                    const target = event.target;
                    if (!(target instanceof Element)) return;
                    if (target.closest("[data-theme-toggle]")) {
                      toggleTheme();
                    }
                  });
                  window.addEventListener("pageshow", (event) => {
                    if (window.sessionStorage.getItem(authRefreshKey) === "1") {
                      window.sessionStorage.removeItem(authRefreshKey);
                      window.location.reload();
                      return;
                    }
                    window.sessionStorage.removeItem(authRefreshKey);
                    syncTheme(getStoredTheme());
                  });
                }
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
