import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  Layers,
  LineChart,
  Newspaper,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlogGrid } from "@/components/ui/BlogGrid";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import PageLayout from "@/components/ui/PageLayout";
import { cn } from "@/lib/utils";

type DiscoverFeature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type DiscoverStat = {
  label: string;
  value: string;
};

type DiscoverResource = {
  description: string;
  icon: LucideIcon;
  label: string;
};

export type BlogPost = {
  excerpt: string;
  href: string;
  image: string;
  title: string;
};

type DailyReport = {
  date: string;
  href: string;
  title: string;
};

export type DiscoverPageData = {
  accent: "blue" | "emerald" | "amber";
  description: string;
  eyebrow: string;
  finalCta: {
    description: string;
    href: string;
    label: string;
    title: string;
  };
  features: DiscoverFeature[];
  heroImage: string;
  heroImageAlt: string;
  primaryCta: {
    href: string;
    label: string;
  };
  blogSectionTitle?: string;
  blogPosts?: BlogPost[];
  dailyReports?: DailyReport[];
  resources: DiscoverResource[];
  secondaryCta?: {
    href: string;
    label: string;
  };
  stats: DiscoverStat[];
  story: {
    body: string;
    kicker: string;
    points: string[];
    title: string;
  };
  title: string;
};

const accentClasses = {
  amber: {
    badge:
      "border-sky-300/25 bg-sky-300/12 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    icon:
      "border-sky-300/18 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    ring: "group-hover:border-sky-300/30 [.light_&]:group-hover:border-sky-200",
  },
  blue: {
    badge:
      "border-sky-300/25 bg-sky-300/12 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    icon:
      "border-sky-300/18 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
    ring: "group-hover:border-sky-300/30 [.light_&]:group-hover:border-sky-200",
  },
  emerald: {
    badge:
      "border-emerald-300/25 bg-emerald-300/12 text-emerald-100 [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700",
    icon:
      "border-emerald-300/18 bg-emerald-300/10 text-emerald-100 [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700",
    ring: "group-hover:border-emerald-300/30 [.light_&]:group-hover:border-emerald-200",
  },
} satisfies Record<
  DiscoverPageData["accent"],
  { badge: string; icon: string; ring: string }
>;

const topEducationalSources: BlogPost[] = [
  {
    title: "Mobile Trading Dubai: Your Guide to Oil Trading",
    excerpt: "Introduction to Mobile Trading in Dubai...",
    href: "https://achieverfinancials.com/mobile-trading-dubai-oil-gold-trading-uae/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Mobile-Trading-Dubai-Your-Guide-to-Oil-Trading-UAE-Gold-Trading-Dubai-1024x683.png",
  },
  {
    title: "Trading Education Dubai: Ensuring Trading Safety UAE with Compliance to Trading Regulations UAE",
    excerpt: "Introduction to trading education, safety, and regulatory awareness in Dubai.",
    href: "https://achieverfinancials.com/trading-education-dubai-safety-regulations-uae/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Trading-Education-Dubai-Ensuring-Trading-Safety-UAE-with-Compliance-to-Trading-Regulations-UAE-1024x683.png",
  },
  {
    title: "Dubai Broker License: Top Forex App UAE for Copy Trading UAE",
    excerpt: "A guide to broker licensing, forex apps, and copy trading access in the UAE.",
    href: "https://achieverfinancials.com/dubai-broker-license-forex-app-uae-copy-trading/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Dubai-Broker-License-Top-Forex-App-UAE-for-Copy-Trading-UAE-1024x683.png",
  },
  {
    title: "Guide to Index Investment Dubai, FX Broker UAE, and Gas Investments Dubai",
    excerpt: "Explore index investment, FX broker selection, and gas investment opportunities in Dubai.",
    href: "https://achieverfinancials.com/index-investment-dubai-fx-broker-uae-gas-investments/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Guide-to-Index-Investment-Dubai-FX-Broker-UAE-and-Gas-Investments-Dubai-1024x683.png",
  },
  {
    title: "Online Trading Dubai: How to Invest in Dubai Equities with Online Stock Trading",
    excerpt: "A practical overview of online trading and Dubai equities for active investors.",
    href: "https://achieverfinancials.com/online-trading-dubai-invest-in-dubai-equities/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Online-Trading-Dubai_-How-to-Invest-in-Dubai-Equities-with-Online-Stock-Trading-1024x683.jpg",
  },
  {
    title: "Dubai Stock Market & Dubai Commodities: Choosing the Right Forex Broker in Dubai",
    excerpt: "How traders can compare forex brokers while watching Dubai stocks and commodities.",
    href: "https://achieverfinancials.com/dubai-stock-market-forex-broker/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Dubai-Stock-Market-Dubai-Commodities_-Choosing-the-Right-Forex-Broker-in-Dubai-1024x683.jpg",
  },
  {
    title: "Online Trading in Dubai with Achiever Financials: Benefits, Risks & Strategy",
    excerpt: "Understand the benefits, risks, and strategy basics behind online trading in Dubai.",
    href: "https://achieverfinancials.com/online-trading-dubai-benefits-risks-strategy/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Online-Trading-in-Dubai-with-Achiever-Financials-Benefits-Risks-Strategy-1024x683.jpg",
  },
  {
    title: "Step-by-Step Guide: How to Open a Forex Account in Dubai with Achiever Financials",
    excerpt: "A step-by-step guide to opening a forex account and preparing for platform access.",
    href: "https://achieverfinancials.com/complete-guide-forex-trading-dubai/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Step-by-Step-Guide-How-to-Open-a-Forex-Account-in-Dubai-with-Achiever-Financials-1024x683.jpg",
  },
  {
    title: "Achiever Financials Dubai: Complete Guide to Forex Trading",
    excerpt: "Dubai often comes to mind when...",
    href: "https://achieverfinancials.com/forex-trading-dubai-guide/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Achiever-Financials-Dubai-Complete-Guide-to-Forex-Trading-Online-Investing-1024x683.jpg",
  },
  {
    title: "Achiever Financials Review: Best Forex Broker in Dubai",
    excerpt: "The world of forex trading is...",
    href: "https://achieverfinancials.com/forex-trading-dubai-achiever-financials/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Achiever-Financials-Review-Best-Forex-Broker-in-Dubai-1024x683.jpg",
  },
  {
    title: "Why Achiever Financials is the Most Trusted Forex Broker in Dubai",
    excerpt: "Why trust, platform access, and service clarity matter for forex traders in Dubai.",
    href: "https://achieverfinancials.com/secure-trusted-forex-trading-in-dubai/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Forex-Trading-in-Dubai-Made-Secure-with-Achiever-Financials-1024x683.jpg",
  },
  {
    title: "Dubai Stock Market 2025: Online Trading & Equities Investment Opportunities",
    excerpt: "Review Dubai stock market themes, online trading access, and equity opportunities.",
    href: "https://achieverfinancials.com/dubai-stock-market-2025-online-trading-equities/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/09/Dubai-Stock-Market-2025-Online-Trading-Equities-Investment-Opportunities-1024x683.png",
  },
  {
    title: "How to Master Currency Trading in Dubai with the Best FX Broker UAE",
    excerpt: "Learn how broker choice and disciplined education support currency trading in Dubai.",
    href: "https://achieverfinancials.com/master-currency-trading-dubai-fx-broker-uae/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/09/How-to-Master-Currency-Trading-in-Dubai-with-the-Best-FX-Broker-UAE-1024x683.jpg",
  },
  {
    title: "Discover the Best Forex Education in Dubai with Achiever Financials Academy",
    excerpt: "Explore structured forex education for beginners and developing traders in Dubai.",
    href: "https://achieverfinancials.com/forex-education-dubai-achiever-academy/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/09/Discover-the-Best-Forex-Education-in-Dubai-with-Achiever-Financials-Academy-1024x683.jpg",
  },
  {
    title: "Gold Trading Dubai and Silver Investment Tips from Leading Precious Metals Brokers",
    excerpt: "Review gold and silver trading considerations with a precious metals broker lens.",
    href: "https://achieverfinancials.com/gold-trading-dubai-silver-investment-tips/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/09/Gold-Trading-Dubai-Silver-Investment-Tips-1024x683.jpg",
  },
  {
    title: "Forex Broker in Dubai: Your Guide to Safe & Profitable Trading",
    excerpt: "A guide to choosing a broker and approaching forex trading with better safeguards.",
    href: "https://achieverfinancials.com/forex-trading-dubai-broker/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/09/Achiever-Financials-Dubai-Trusted-Forex-Broker-in-UAE-1024x683.jpg",
  },
  {
    title: "Why Achiever Financials is the Go-To FX Broker",
    excerpt: "Currency trading has become one of...",
    href: "https://achieverfinancials.com/why-achiever-financials-top-fx-broker-uae/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/08/Why-Achiever-Financials-is-the-Go-To-FX-Broker-in-the-UAE-1024x683.jpg",
  },
  {
    title: "Forex Dubai Market Trends 2025: What Traders Need to Know",
    excerpt: "Key forex market trends and trading context for Dubai-focused traders in 2025.",
    href: "https://achieverfinancials.com/forex-dubai-market-trends-2025/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/08/Forex-Dubai-Market-Trends-2025-What-Traders-Need-to-Know-1024x683.jpg",
  },
  {
    title: "A Beginner's Guide to Currency Trading in Dubai",
    excerpt: "Currency trading is also known as...",
    href: "https://achieverfinancials.com/beginner-guide-forex-trading-dubai-achiever-financials/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/08/A-Beginners-Guide-to-Currency-Trading-in-Dubai-with-Achiever-Financials-1024x683.jpg",
  },
  {
    title: "Start Currency Trading in Dubai with the Leading FX Broker",
    excerpt: "How new traders can begin currency trading with platform access and broker support.",
    href: "https://achieverfinancials.com/start-forex-trading-dubai/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/08/Start-Currency-Trading-in-Dubai-with-the-Leading-FX-Broker-1024x683.jpg",
  },
  {
    title: "Why Achiever Financials Is a Trusted Forex Broker in Dubai",
    excerpt: "Why Dubai traders look for trusted brokerage support, platforms, and clear service.",
    href: "https://achieverfinancials.com/trusted-forex-broker-dubai/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/08/Trusted-Forex-Broker-in-Dubai-Achiever-Financial-1024x683.jpg",
  },
];

const weeklyAnalysisPosts: BlogPost[] = [
  {
    title: "FOMC April 2026 Meeting Analysis",
    excerpt: "FOMC April 2026 : Rates Held Steady Amid...",
    href: "https://achieverfinancials.com/fomc-april-2026-meeting-analysis/",
    image: "https://achieverfinancials.com/wp-content/uploads/2026/04/Gemini_Generated_Image_svf2icsvf2icsvf2-1024x687.png",
  },
  {
    title: "Strait of Hormuz Crisis: Market Impact",
    excerpt: "Strait of Hormuz Crisis: US Naval Blockade Begins...",
    href: "https://achieverfinancials.com/strait-of-hormuz-crisis/",
    image: "https://achieverfinancials.com/wp-content/uploads/2026/04/Blue-and-White-Modern-Stock-Market-Analysis-Presentation-1200-x-800-px-1024x683.png",
  },
  {
    title: "FOMC March 2026",
    excerpt: "FOMC Policy Update & Analysis March 2026 By...",
    href: "https://achieverfinancials.com/fomc-march-2026/",
    image: "https://achieverfinancials.com/wp-content/uploads/2026/03/Blue-and-White-Modern-Stock-Market-Analysis-Presentation-1200-x-800-px-1024x683.png",
  },
  {
    title: "Silver Market 2025 Closure Analysis",
    excerpt: "Silver (XAG/USD) 2025 Closure Analysis.! ...",
    href: "https://achieverfinancials.com/silver-market-2025-closure-analysis/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/12/www.achieverfinanacials.com-1-1024x683.png",
  },
  {
    title: "Gold Market 2025 Closure Analysis",
    excerpt: "Gold (XAU/USD) 2025 Closure Analysis.! ...",
    href: "https://achieverfinancials.com/2025-gold-market-closure-analysis-report/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/12/www.achieverfinanacials.com_-1024x683.png",
  },
  {
    title: "Gold Market Weekly Review.!",
    excerpt: "Gold Market Weekly Review Insights and Outlook ...",
    href: "https://achieverfinancials.com/gold-market-weekly-review/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Untitled-1200-x-800-px-1024x683.png",
  },
  {
    title: "Silver Analysis for Nov 3-7, 2025",
    excerpt: "Silver Forecast and Analysis! November 3, 2025 By...",
    href: "https://achieverfinancials.com/silver-analysis-for-nov-3-7-2025/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/11/Blue-and-White-Modern-Stock-Market-Analysis-Presentation-1200-x-800-px-1024x683.png",
  },
  {
    title: "Gold Analysis for Oct 27-31, 2025",
    excerpt: "Gold's (XAU/USD) Technical Pullback...! ...",
    href: "https://achieverfinancials.com/gold-analysis-for-oct-27-2025/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Untitled-1200-x-800-px-1024x683.png",
  },
  {
    title: "Silver Analysis for Oct 13-19, 2025",
    excerpt: "Silver (XAG/USD) Weekly Market Analysis.! ...",
    href: "https://achieverfinancials.com/silver-analysis-for-oct-13-19-2025/",
    image: "https://achieverfinancials.com/wp-content/uploads/2025/10/Blue-and-White-Modern-Stock-Market-Analysis-Presentation-1200-x-800-px-1-1024x683.png",
  },
];

export const discoverPages = {
  analysisReport: {
    accent: "blue",
    eyebrow: "News & Analysis",
    title: "Market analysis for sharper decisions",
    description:
      "Read practical market commentary, technical context, and event-aware research built for traders who want a cleaner view of what matters next.",
    heroImage: "/discover/analysis-report.webp",
    heroImageAlt:
      "AI generated market analysis desk with abstract charts and research screens.",
    primaryCta: { href: "/markets/account-types", label: "Open Account" },
    secondaryCta: { href: "/discover/economic-calendar", label: "View Calendar" },
    stats: [
      { value: "Daily", label: "Market notes" },
      { value: "Multi-asset", label: "Coverage" },
      { value: "Macro + tech", label: "Context" },
    ],
    features: [
      {
        icon: Newspaper,
        title: "Market Briefs",
        description:
          "Follow concise updates across currencies, commodities, indices, and digital assets.",
      },
      {
        icon: LineChart,
        title: "Technical Setups",
        description:
          "Spot key levels, trend shifts, and price zones before you place a trade.",
      },
      {
        icon: Search,
        title: "Macro Context",
        description:
          "Connect price action to rates, inflation, employment, and risk sentiment.",
      },
    ],
    dailyReports: [
      {
        date: "27 Apr",
        title: "Technical Analysis Report 27 April",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6122d6d8-fa44-4910-acaa-f5554e34f689",
      },
      {
        date: "28 Apr",
        title: "Technical Analysis Report 28 April",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:afbf1803-c07a-4d74-9887-d7c0f20e80cf",
      },
      {
        date: "29 Apr",
        title: "Technical Analysis Report 29 April",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:d4b18edb-de47-4f1b-8984-9eaea821cdba",
      },
      {
        date: "30 Apr",
        title: "Technical Analysis Report 30 April",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:8cd71f09-543d-44a1-8527-2f624b22e486",
      },
      {
        date: "01 May",
        title: "Technical Analysis Report 01 May",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:3c529fb4-639d-41d6-b8e0-e0209e74ca7e",
      },
    ],
    story: {
      kicker: "Research Workflow",
      title: "From headline noise to trade-ready context.",
      body: "Each analysis page is shaped to help you scan quickly, compare instruments, and decide what deserves more attention before the next session opens.",
      points: [
        "Clear market drivers",
        "Actionable support and resistance areas",
        "Event risk called out before volatility expands",
      ],
    },
    resources: [
      {
        icon: BarChart3,
        label: "Technical View",
        description: "Trend, momentum, and volatility clues in one place.",
      },
      {
        icon: Globe2,
        label: "Global Themes",
        description: "Macro developments across major trading sessions.",
      },
      {
        icon: Clock3,
        label: "Session Prep",
        description: "A practical rhythm for London, New York, and Asia.",
      },
    ],
    finalCta: {
      title: "Pair research with live market access.",
      description:
        "Use Achiever account types and platform tools to move from analysis to execution with more confidence.",
      href: "/markets/account-types",
      label: "Compare Accounts",
    },
  },
  blogs: {
    accent: "blue",
    eyebrow: "Blogs",
    title: "Trading ideas with useful context",
    description:
      "Explore market explainers, platform tips, and trading perspectives written to make daily decision-making less noisy.",
    heroImage: "/discover/blogs.webp",
    heroImageAlt:
      "AI generated editorial trading blog workspace with abstract articles and charts.",
    primaryCta: { href: "/discover/analysis-report", label: "Read Analysis" },
    secondaryCta: { href: "/discover/education", label: "Start Learning" },
    stats: [
      { value: "Guides", label: "For every level" },
      { value: "Ideas", label: "Market themes" },
      { value: "Tips", label: "Platform habits" },
    ],
    features: [
      {
        icon: PenLine,
        title: "Practical Articles",
        description:
          "Readable posts focused on market behavior, platform use, and trader routines.",
      },
      {
        icon: Target,
        title: "Strategy Angles",
        description:
          "Simple frameworks for thinking about entries, exits, and risk.",
      },
      {
        icon: Sparkles,
        title: "Fresh Perspectives",
        description:
          "Timely ideas that help you build a broader market vocabulary.",
      },
    ],
    blogSectionTitle: "Our Weekly Analysis",
    blogPosts: weeklyAnalysisPosts,
    story: {
      kicker: "Editorial Lens",
      title: "Content built for real trading days.",
      body: "The blog experience keeps explanations focused and scan-friendly, so readers can learn a concept, connect it to current markets, and keep moving.",
      points: [
        "Plain-language explainers",
        "Market structure and platform tips",
        "Risk-aware takeaways at the end of each read",
      ],
    },
    resources: [
      {
        icon: FileText,
        label: "Market Explainers",
        description: "Break down topics without burying the useful part.",
      },
      {
        icon: BarChart3,
        label: "Chart Lessons",
        description: "Understand patterns, levels, and timing cues.",
      },
      {
        icon: ShieldCheck,
        label: "Risk Notes",
        description: "Keep trade planning grounded before position sizing.",
      },
    ],
    finalCta: {
      title: "Turn reading into a stronger trading routine.",
      description:
        "Move from blog ideas to structured education or deeper market reports whenever you are ready.",
      href: "/discover/education",
      label: "Explore Education",
    },
  },
  economicCalendar: {
    accent: "emerald",
    eyebrow: "Economic Calendar",
    title: "Track events before they move markets",
    description:
      "Prepare for inflation releases, rate decisions, jobs data, and other macro events that can reshape volatility across assets.",
    heroImage: "/discover/economic-calendar.webp",
    heroImageAlt:
      "AI generated economic calendar dashboard with abstract event timelines and world map accents.",
    primaryCta: { href: "/markets/account-types", label: "Open Account" },
    secondaryCta: { href: "/discover/analysis-report", label: "Read Analysis" },
    stats: [
      { value: "Global", label: "Event coverage" },
      { value: "Impact", label: "Priority signals" },
      { value: "Session", label: "Planning view" },
    ],
    features: [
      {
        icon: CalendarDays,
        title: "Event Planning",
        description:
          "Prepare around high-impact economic releases before volatility arrives.",
      },
      {
        icon: Bell,
        title: "Impact Awareness",
        description:
          "See which releases may matter most for currencies, indices, and commodities.",
      },
      {
        icon: Clock3,
        title: "Session Timing",
        description:
          "Build a trading plan around regional sessions and scheduled data windows.",
      },
    ],
    story: {
      kicker: "Calendar Workflow",
      title: "Know when the market may get louder.",
      body: "The economic calendar page is designed around preparation: what is coming, why it may matter, and how traders can avoid being surprised by scheduled risk.",
      points: [
        "Filter by event importance",
        "Connect releases to watched instruments",
        "Review upcoming macro clusters before sessions begin",
      ],
    },
    resources: [
      {
        icon: Globe2,
        label: "Global Releases",
        description: "Track data across major economies and sessions.",
      },
      {
        icon: TrendingUp,
        label: "Volatility Windows",
        description: "Plan for spreads, slippage, and fast price moves.",
      },
      {
        icon: CheckCircle2,
        label: "Prep Checklist",
        description: "Review exposure before high-impact events land.",
      },
    ],
    finalCta: {
      title: "Trade scheduled volatility with a plan.",
      description:
        "Combine event awareness with platform tools, account choice, and disciplined risk controls.",
      href: "/platform",
      label: "Explore Platform",
    },
  },
  education: {
    accent: "blue",
    eyebrow: "Education",
    title: "Build trading knowledge one clear lesson at a time",
    description:
      "Learn market foundations, platform workflows, and risk habits through structured education designed for new and developing traders.",
    heroImage: "/discover/education.webp",
    heroImageAlt:
      "AI generated trading education desk with abstract course cards and charting tablet.",
    primaryCta: { href: "/markets/account-types", label: "Start Trading" },
    secondaryCta: { href: "/discover/blogs", label: "Read Blogs" },
    stats: [
      { value: "Beginner", label: "Friendly tracks" },
      { value: "Risk-first", label: "Planning habits" },
      { value: "Platform", label: "MT5 guidance" },
    ],
    features: [
      {
        icon: BookOpen,
        title: "Core Lessons",
        description:
          "Understand market types, order flow basics, leverage, and trading terminology.",
      },
      {
        icon: ShieldCheck,
        title: "Risk Foundations",
        description:
          "Learn position sizing, stop placement, and practical exposure control.",
      },
      {
        icon: BarChart3,
        title: "Chart Fluency",
        description:
          "Build confidence reading trends, support, resistance, and volatility.",
      },
    ],
    blogPosts: topEducationalSources,
    story: {
      kicker: "Learning Path",
      title: "A calmer way to learn markets.",
      body: "Education pages should help traders move from curiosity to capability without flooding them with jargon. Each section supports a focused next step.",
      points: [
        "Short lessons with clear outcomes",
        "Examples connected to live market categories",
        "Risk and psychology included from the beginning",
      ],
    },
    resources: [
      {
        icon: Layers,
        label: "Foundations",
        description: "Start with the market mechanics every trader should know.",
      },
      {
        icon: Target,
        label: "Practice Plans",
        description: "Use structured routines before moving into live decisions.",
      },
      {
        icon: Zap,
        label: "Platform Skills",
        description: "Get comfortable with tools, charts, orders, and alerts.",
      },
    ],
    finalCta: {
      title: "Keep learning while you explore the markets.",
      description:
        "Move from education into account types, platform tools, and market pages when you are ready to compare your next step.",
      href: "/markets/account-types",
      label: "View Account Types",
    },
  },
  offerings: {
    accent: "emerald",
    eyebrow: "Offerings",
    title: "A complete trading suite in one place",
    description:
      "Explore account access, platforms, instruments, insights, and support designed to help traders work with more clarity.",
    heroImage: "/discover/offerings.webp",
    heroImageAlt:
      "AI generated brokerage offering suite with abstract product cards and market visuals.",
    primaryCta: { href: "/markets/account-types", label: "Compare Accounts" },
    secondaryCta: { href: "/platform", label: "Explore Platform" },
    stats: [
      { value: "3000+", label: "Instruments" },
      { value: "MT5", label: "Platform access" },
      { value: "Multi-asset", label: "Market range" },
    ],
    features: [
      {
        icon: Briefcase,
        title: "Account Choice",
        description:
          "Compare account structures based on deposits, spreads, leverage, and trading needs.",
      },
      {
        icon: Globe2,
        title: "Market Access",
        description:
          "Trade across forex, metals, indices, commodities, energies, shares, and crypto CFDs.",
      },
      {
        icon: Wrench,
        title: "Platform Tools",
        description:
          "Use charting, execution tools, analysis resources, and calendar context together.",
      },
    ],
    story: {
      kicker: "Product Suite",
      title: "Everything should connect cleanly.",
      body: "The offerings page brings the broker experience together, giving visitors a single place to understand what they can trade, how they can trade, and what support is available.",
      points: [
        "Account, platform, and market pages linked together",
        "Tools and analysis positioned as practical support",
        "Clear next actions for registration and comparison",
      ],
    },
    resources: [
      {
        icon: Layers,
        label: "Account Types",
        description: "Choose the structure that fits your trading approach.",
      },
      {
        icon: LineChart,
        label: "Markets",
        description: "Find the instruments and conditions that matter to you.",
      },
      {
        icon: ShieldCheck,
        label: "Support",
        description: "Use guided resources before and after opening an account.",
      },
    ],
    finalCta: {
      title: "Explore the Achiever trading environment.",
      description:
        "Start with account types or review the platform to see how the pieces work together.",
      href: "/markets/account-types",
      label: "Compare Accounts",
    },
  },
  tradingTools: {
    accent: "blue",
    eyebrow: "Trading Tools",
    title: "Tools built for daily market decisions",
    description:
      "Use analysis resources, calendar context, platform workflows, and structured watch tools to prepare and act with more confidence.",
    heroImage: "/discover/trading-tools.webp",
    heroImageAlt:
      "AI generated professional trading toolkit with abstract multi-screen dashboard modules.",
    primaryCta: { href: "/discover/analysis-report", label: "View Analysis" },
    secondaryCta: { href: "/discover/economic-calendar", label: "Open Calendar" },
    stats: [
      { value: "Signals", label: "Context tools" },
      { value: "Calendar", label: "Event planning" },
      { value: "Reports", label: "Market prep" },
    ],
    features: [
      {
        icon: BarChart3,
        title: "Analysis Reports",
        description:
          "Review market structure, trend context, and active trading themes.",
      },
      {
        icon: CalendarDays,
        title: "Economic Calendar",
        description:
          "Plan around scheduled data releases and potential volatility spikes.",
      },
      {
        icon: Bell,
        title: "Watch Routines",
        description:
          "Build repeatable habits around alerts, levels, and session preparation.",
      },
    ],
    story: {
      kicker: "Decision Support",
      title: "A focused toolkit for preparation and timing.",
      body: "Trading tools should reduce friction, not add another dashboard to babysit. This page groups the resources a trader reaches for before and during active sessions.",
      points: [
        "Analysis and calendar pages kept one click away",
        "Tool categories organized by trading workflow",
        "Clear calls to action for research, platform, and account setup",
      ],
    },
    resources: [
      {
        icon: Newspaper,
        label: "News & Analysis",
        description: "Read market notes before choosing your next setup.",
      },
      {
        icon: CalendarDays,
        label: "Calendar",
        description: "Prepare around economic releases and central bank events.",
      },
      {
        icon: Target,
        label: "Trade Prep",
        description: "Create a practical watchlist before execution.",
      },
    ],
    finalCta: {
      title: "Bring your tools and platform together.",
      description:
        "Explore RTX 5 and MT5 platform pages to connect research with execution.",
      href: "/platform",
      label: "Explore Platform",
    },
  },
} satisfies Record<string, DiscoverPageData>;

function HeroStat({ label, value }: DiscoverStat) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_14px_34px_rgba(2,8,20,0.2)] backdrop-blur-md">
      <p className="text-xl font-semibold tracking-normal text-white">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/64">
        {label}
      </p>
    </div>
  );
}

function ResourceItem({
  accent,
  description,
  icon: Icon,
  label,
}: DiscoverResource & {
  accent: DiscoverPageData["accent"];
}) {
  const styles = accentClasses[accent];

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.05)] [.light_&]:hover:border-sky-200">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
            styles.icon,
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-normal text-white [.light_&]:text-slate-950">
            {label}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function DailyReportsSection({
  reports,
  styles,
}: {
  reports: DailyReport[];
  styles: (typeof accentClasses)[DiscoverPageData["accent"]];
}) {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(5,30,51,0.96)_52%,rgba(3,8,20,0.98))] px-5 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.34)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_54%,#f8fbff_100%)] [.light_&]:shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_12%_12%,rgba(37,99,235,0.09),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.16]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Badge className={cn("px-4 py-1.5 uppercase tracking-[0.2em]", styles.badge)}>
            Achiever Financials
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
            Daily Technical Analysis Report
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
            Fresh daily reports with technical context, market structure, and
            key levels for active traders.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4">
          {reports.map((report, index) => (
            <article
              key={report.href}
              className="group grid gap-4 rounded-xl border border-white/10 bg-white/[0.055] p-4 shadow-[0_18px_50px_rgba(2,8,20,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-white/[0.075] sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:p-5 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_16px_38px_rgba(37,99,235,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sm font-bold text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:text-blue-600">
                  {report.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-normal text-white [.light_&]:text-slate-950">
                  {report.title}
                </h3>
              </div>

              <Button
                asChild
                className="min-h-12 w-full rounded-full px-6 text-sm sm:w-auto sm:min-w-[150px]"
              >
                <Link href={report.href} target="_blank" rel="noreferrer">
                  View Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function DiscoverPage({ page }: { page: DiscoverPageData }) {
  const styles = accentClasses[page.accent];

  return (
    <PageLayout>
      <section className="relative flex min-h-[72svh] w-full items-end overflow-hidden px-4 pb-10 pt-28 sm:min-h-[78svh] sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_46%,rgba(2,6,23,0.3)_100%),linear-gradient(180deg,rgba(2,6,23,0.42)_0%,rgba(2,6,23,0.32)_48%,rgba(4,8,20,0.95)_100%)]" />
          <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]" />

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <Badge className={cn("px-4 py-1.5 uppercase tracking-[0.2em]", styles.badge)}>
                {page.eyebrow}
              </Badge>

              <h1 className="mt-5 max-w-full text-3xl font-semibold leading-[1.06] tracking-normal text-white min-[380px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76 sm:text-base sm:leading-8 lg:text-lg">
                {page.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto">
                  <Link href={page.primaryCta.href}>
                    {page.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {page.secondaryCta ? (
                  <Button
                    asChild
                    variant="outline"
                    className="min-h-12 w-full rounded-lg border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/16 hover:text-white sm:w-auto"
                  >
                    <Link href={page.secondaryCta.href}>
                      {page.secondaryCta.label}
                    </Link>
                  </Button>
                ) : null}
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 min-[520px]:grid-cols-3">
                {page.stats.map((stat) => (
                  <HeroStat key={`${stat.value}-${stat.label}`} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {page.dailyReports?.length ? (
          <DailyReportsSection reports={page.dailyReports} styles={styles} />
        ) : (
        <SectionWrapper className="py-16 lg:py-20">
          {page.blogPosts?.length ? (
            <BlogGrid posts={page.blogPosts} title={page.blogSectionTitle} />
          ) : null}
        </SectionWrapper>
        )}

        <section className="relative w-full bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
              <Image
                src={page.heroImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(2,6,23,0.54)_100%)]" />
            </div>

            <div>
              <Badge
                className={cn(
                  "px-4 py-1.5 uppercase tracking-[0.2em]",
                  styles.badge,
                )}
              >
                {page.story.kicker}
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                {page.story.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                {page.story.body}
              </p>

              <div className="mt-7 grid gap-3">
                {page.story.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300 [.light_&]:text-blue-600" />
                    <p className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <Badge
                className={cn(
                  "px-4 py-1.5 uppercase tracking-[0.2em]",
                  styles.badge,
                )}
              >
                Resources
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                What visitors can explore next.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Fast paths into the parts of Discover that help traders learn,
                prepare, and act.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {page.resources.map((resource) => (
                <ResourceItem
                  key={resource.label}
                  accent={page.accent}
                  {...resource}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.12]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                  {page.finalCta.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                  {page.finalCta.description}
                </p>
              </div>

              <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm sm:w-auto">
                <Link href={page.finalCta.href}>
                  {page.finalCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </PageLayout>
  );
}
