import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://achieverfinancials.com",
);

export const siteName = "Achiever Financials";
const defaultImage = "/discover/offerings.png";

export type RoutePath =
  | "/"
  | "/company"
  | "/company/career"
  | "/company/contact-us"
  | "/company/customer-protection"
  | "/company/legal-documents"
  | "/hero-odyssey"
  | "/markets"
  | "/markets/account-types"
  | "/markets/commodities"
  | "/markets/crypto"
  | "/markets/energies"
  | "/markets/equities"
  | "/markets/forex"
  | "/markets/indices"
  | "/markets/market-overview"
  | "/markets/precious-metals"
  | "/markets/shares"
  | "/partner"
  | "/platform"
  | "/platform/metatrader-5"
  | "/promotions"
  | "/tools"
  | "/tools/analysis-report"
  | "/tools/blogs"
  | "/tools/economic-calendar"
  | "/tools/education"
  | "/tools/offerings";

type PageMetadataEntry = {
  description: string;
  image?: string;
  keywords?: string[];
  title: string;
};

const sharedKeywords = [
  "Achiever Financials",
  "online trading",
  "forex trading",
  "CFD trading",
  "MetaTrader 5",
];

export const pageMetadata = {
  "/": {
    title: "Achiever Financials | Multi-Asset Trading Platform",
    description:
      "Trade global markets with Achiever Financials using account options, platform tools, market insights, and support built for active traders.",
    image: "/discover/offerings.png",
    keywords: sharedKeywords,
  },
  "/company": {
    title: "About Achiever Financials",
    description:
      "Learn about Achiever Financials, a trading partner focused on market access, platform support, education, and clear client journeys.",
    image: "/company/about.png",
    keywords: ["about Achiever Financials", ...sharedKeywords],
  },
  "/company/career": {
    title: "Careers at Achiever Financials",
    description:
      "Explore career opportunities with Achiever Financials across support, operations, markets, technology, and client service.",
    image: "/company/career.png",
    keywords: ["Achiever careers", "fintech jobs", ...sharedKeywords],
  },
  "/company/contact-us": {
    title: "Contact Achiever Financials",
    description:
      "Contact Achiever Financials for account support, platform help, partnership enquiries, and general service questions.",
    image: "/company/contact-us.png",
    keywords: ["Achiever contact", "trading support", ...sharedKeywords],
  },
  "/company/customer-protection": {
    title: "Customer Protection",
    description:
      "Review Achiever Financials customer protection principles, risk awareness, support routes, and account security practices.",
    image: "/company/customer-protection.png",
    keywords: ["customer protection", "trading risk disclosure", ...sharedKeywords],
  },
  "/company/legal-documents": {
    title: "Legal Documents",
    description:
      "Find Achiever Financials legal document categories, client agreements, risk disclosures, and policy information.",
    image: "/company/legal-documents.png",
    keywords: ["legal documents", "client agreement", ...sharedKeywords],
  },
  "/hero-odyssey": {
    title: "Hero Odyssey",
    description:
      "Explore the Achiever Financials interactive hero experience and visual trading showcase.",
    image: "/discover/trading-tools.png",
    keywords: sharedKeywords,
  },
  "/markets": {
    title: "Markets",
    description:
      "Explore Achiever Financials markets including forex, crypto, indices, equities, commodities, metals, energies, and shares.",
    image: "/discover/offerings.png",
    keywords: ["markets", "global trading markets", ...sharedKeywords],
  },
  "/markets/account-types": {
    title: "Account Types",
    description:
      "Compare Achiever Financials account types by deposits, spreads, commission, leverage, and trading conditions.",
    image: "/discover/offerings.png",
    keywords: ["account types", "trading accounts", ...sharedKeywords],
  },
  "/markets/commodities": {
    title: "Commodities Trading",
    description:
      "Trade commodities with Achiever Financials across metals, energy, and agricultural markets using professional platform tools.",
    image: "/discover/offerings.png",
    keywords: ["commodities trading", "soft commodities", ...sharedKeywords],
  },
  "/markets/crypto": {
    title: "Crypto Derivatives Trading",
    description:
      "Trade crypto derivatives including Bitcoin, Ethereum, and altcoin CFDs with real-time pricing and competitive conditions.",
    image: "/discover/trading-tools.png",
    keywords: ["crypto trading", "Bitcoin CFD", "crypto derivatives", ...sharedKeywords],
  },
  "/markets/energies": {
    title: "Energies Trading",
    description:
      "Trade crude oil, Brent oil, and natural gas CFDs with Achiever Financials and access volatile energy markets.",
    image: "/discover/offerings.png",
    keywords: ["energy trading", "oil CFD", "natural gas trading", ...sharedKeywords],
  },
  "/markets/equities": {
    title: "Equities Trading",
    description:
      "Trade CFD shares across global equity markets with competitive pricing, platform tools, and market access.",
    image: "/company/about.png",
    keywords: ["equities trading", "CFD shares", ...sharedKeywords],
  },
  "/markets/forex": {
    title: "Forex Trading",
    description:
      "Trade major and minor forex CFDs with Achiever Financials using fast execution, account options, and platform tools.",
    image: "/discover/analysis-report.png",
    keywords: ["forex trading", "currency pairs", ...sharedKeywords],
  },
  "/markets/indices": {
    title: "Indices Trading",
    description:
      "Trade global stock indices and benchmark markets with Achiever Financials from one connected trading account.",
    image: "/discover/analysis-report.png",
    keywords: ["indices trading", "stock indices", ...sharedKeywords],
  },
  "/markets/market-overview": {
    title: "Market Overview",
    description:
      "Review Achiever Financials multi-asset market access across currencies, metals, indices, equities, energies, and digital assets.",
    image: "/discover/offerings.png",
    keywords: ["market overview", "multi asset trading", ...sharedKeywords],
  },
  "/markets/precious-metals": {
    title: "Precious Metals Trading",
    description:
      "Trade gold, silver, palladium, and platinum CFDs with market insights and platform tools from Achiever Financials.",
    image: "/discover/analysis-report.png",
    keywords: ["precious metals trading", "gold trading", "silver trading", ...sharedKeywords],
  },
  "/markets/shares": {
    title: "Share Trading",
    description:
      "Trade shares of leading global companies with Achiever Financials through competitive share CFD conditions.",
    image: "/company/about.png",
    keywords: ["share trading", "global shares", "stock CFDs", ...sharedKeywords],
  },
  "/partner": {
    title: "Partnership Programs",
    description:
      "Explore Achiever Financials partnership programs including introducing broker, affiliate, and white label opportunities.",
    image: "/promotion_hero_1777279021925.png",
    keywords: ["introducing broker", "affiliate program", "white label broker", ...sharedKeywords],
  },
  "/platform": {
    title: "RTX5 Trading Platform",
    description:
      "Explore the RTX5 trading platform with desktop, web, and mobile access for multi-asset trading workflows.",
    image: "/discover/offerings.png",
    keywords: ["RTX5 platform", "trading platform", ...sharedKeywords],
  },
  "/platform/metatrader-5": {
    title: "MetaTrader 5 Platform",
    description:
      "Trade with Achievers MT5 using advanced charting, algorithmic trading support, and multi-asset platform access.",
    image: "/discover/trading-tools.png",
    keywords: ["MetaTrader 5", "MT5 trading platform", ...sharedKeywords],
  },
  "/promotions": {
    title: "Promotions",
    description:
      "Discover Achiever Financials trading bonuses, promotional offers, rewards, and account programs for eligible clients.",
    image: "/promotions_hero_blue_1777280213507.png",
    keywords: ["trading promotions", "deposit bonus", ...sharedKeywords],
  },
  "/tools": {
    title: "Trading Tools",
    description:
      "Use Achiever Financials trading tools for analysis, economic events, market preparation, and daily decision support.",
    image: "/discover/trading-tools.png",
    keywords: ["trading tools", "market analysis", ...sharedKeywords],
  },
  "/tools/analysis-report": {
    title: "News & Analysis",
    description:
      "Read Achiever Financials market analysis reports with technical context, macro themes, and trade preparation insights.",
    image: "/discover/analysis-report.png",
    keywords: ["market analysis", "trading news", ...sharedKeywords],
  },
  "/tools/blogs": {
    title: "Trading Blogs",
    description:
      "Explore Achiever Financials trading blogs with market explainers, platform tips, and practical trading perspectives.",
    image: "/discover/blogs.png",
    keywords: ["trading blogs", "market explainers", ...sharedKeywords],
  },
  "/tools/economic-calendar": {
    title: "Economic Calendar",
    description:
      "Track market-moving events, economic releases, and macro volatility windows with the Achiever Financials economic calendar.",
    image: "/discover/economic-calendar.png",
    keywords: ["economic calendar", "market events", ...sharedKeywords],
  },
  "/tools/education": {
    title: "Trading Education",
    description:
      "Build trading knowledge with Achiever Financials education covering market foundations, platform workflows, and risk habits.",
    image: "/discover/education.png",
    keywords: ["trading education", "learn trading", ...sharedKeywords],
  },
  "/tools/offerings": {
    title: "Trading Offerings",
    description:
      "Explore Achiever Financials account access, platforms, instruments, insights, and support in one complete trading suite.",
    image: "/discover/offerings.png",
    keywords: ["trading offerings", "broker services", ...sharedKeywords],
  },
} satisfies Record<RoutePath, PageMetadataEntry>;

export const pageRoutes = Object.keys(pageMetadata) as RoutePath[];

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata(path: RoutePath): Metadata {
  const page = pageMetadata[path];
  const canonical = path === "/" ? "/" : path;
  const title =
    path === "/"
      ? { absolute: page.title }
      : page.title;
  const image = page.image ?? defaultImage;

  return {
    title,
    description: page.description,
    keywords: page.keywords ?? sharedKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: pageMetadata["/"].title,
    template: `%s | ${siteName}`,
  },
  description: pageMetadata["/"].description,
  keywords: sharedKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageMetadata["/"].title,
    description: pageMetadata["/"].description,
    url: "/",
    siteName,
    type: "website",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata["/"].title,
    description: pageMetadata["/"].description,
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
