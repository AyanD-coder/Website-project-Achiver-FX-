import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import AboutTrustOverview from "@/components/ui/AboutTrustOverview";
import CareerPageExperience from "@/components/ui/CareerPageExperience";
import ContactUsExperience from "@/components/ui/ContactUsExperience";
import CustomerProtectionExperience from "@/components/ui/CustomerProtectionExperience";
import LegalDocumentsTrust from "@/components/ui/LegalDocumentsTrust";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { cn } from "@/lib/utils";

type CompanyAccent = "blue" | "emerald" | "amber";

type CompanyCard = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type CompanyMetric = {
  label: string;
  value: string;
};

type CompanyAction = {
  href: string;
  label: string;
};

export type CompanyPageData = {
  accent: CompanyAccent;
  actions?: CompanyAction[];
  description: string;
  details: CompanyCard[];
  eyebrow?: string;
  featureImageAlt: string;
  finalCta: {
    description: string;
    href: string;
    label: string;
    title: string;
  };
  heroImage: string;
  heroImageAlt: string;
  metrics: CompanyMetric[];
  primaryCta: CompanyAction;
  secondaryCta?: CompanyAction;
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
} satisfies Record<CompanyAccent, { badge: string; icon: string; ring: string }>;

export const companyPages = {
  about: {
    accent: "blue",
    eyebrow: "About Us",
    title: "A trading partner built around clarity and access",
    description:
      "Achiever Financials brings markets, platforms, education, and support into a focused environment for traders who want to work with confidence.",
    heroImage: "/company/about.webp",
    heroImageAlt:
      "AI generated premium fintech company operations floor with abstract market dashboards.",
    featureImageAlt:
      "AI generated global financial operations workspace for an online broker.",
    primaryCta: { href: "/register", label: "Create Account" },
    secondaryCta: { href: "/platform", label: "View Platform" },
    metrics: [
      { value: "Multi-asset", label: "Market access" },
      { value: "MT5", label: "Platform support" },
      { value: "Global", label: "Trading focus" },
    ],
    details: [
      {
        icon: Globe2,
        title: "Global Market Access",
        description:
          "Explore forex, metals, indices, commodities, shares, crypto CFDs, and more from a single trading environment.",
      },
      {
        icon: Building2,
        title: "Professional Infrastructure",
        description:
          "Use platform, account, analysis, and support resources designed around practical trading workflows.",
      },
      {
        icon: Handshake,
        title: "Service Mindset",
        description:
          "Work with a team focused on clear communication, transparent resources, and trader support.",
      },
    ],
    story: {
      kicker: "Our Focus",
      title: "Helping traders move from information to action.",
      body: "The company experience should feel direct: find the market, choose the account, use the platform, and get support when it matters.",
      points: [
        "Straightforward access to the most-used market pages",
        "Platform and account resources connected to every journey",
        "Support and education kept close to the trading workflow",
      ],
    },
    actions: [
      { href: "/company/customer-protection", label: "Customer Protection" },
      { href: "/company/legal-documents", label: "Legal Documents" },
      { href: "/company/contact-us", label: "Contact Us" },
    ],
    finalCta: {
      title: "Ready to explore the Achiever ecosystem?",
      description:
        "Start with account types, compare platform options, or connect with the team for support.",
      href: "/register",
      label: "Create Account",
    },
  },
  career: {
    accent: "blue",
    eyebrow: "Career",
    title: "Build meaningful work in global financial markets",
    description:
      "Join a team shaped by client service, technology, market awareness, and the daily discipline of a fast-moving trading business.",
    heroImage: "/company/career.webp",
    heroImageAlt:
      "AI generated modern fintech careers workspace with collaborative team energy.",
    featureImageAlt:
      "AI generated fintech office scene representing careers and collaboration.",
    primaryCta: {
      href: "mailto:support@achieverfinancials.com?subject=Career%20Interest",
      label: "Send Interest",
    },
    secondaryCta: { href: "/company/about-us", label: "About Achiever" },
    metrics: [
      { value: "Growth", label: "Learning culture" },
      { value: "Markets", label: "Daily exposure" },
      { value: "Clients", label: "Service focus" },
    ],
    details: [
      {
        icon: Users,
        title: "Collaborative Teams",
        description:
          "Work across support, operations, marketing, technology, and market-facing functions.",
      },
      {
        icon: Target,
        title: "Performance Habits",
        description:
          "Build discipline around communication, ownership, and timely client outcomes.",
      },
      {
        icon: Sparkles,
        title: "Room To Grow",
        description:
          "Learn from a market-driven environment where curiosity and execution both matter.",
      },
    ],
    story: {
      kicker: "Culture",
      title: "A team for people who like pace and precision.",
      body: "Financial markets move quickly, and the best company teams learn to keep service clear, systems dependable, and communication calm.",
      points: [
        "Client-first communication across every role",
        "Structured ownership for daily operations",
        "Continuous learning across products, platforms, and markets",
      ],
    },
    actions: [
      {
        href: "mailto:support@achieverfinancials.com?subject=Customer%20Support%20Role",
        label: "Customer Support",
      },
      {
        href: "mailto:support@achieverfinancials.com?subject=Market%20Analyst%20Role",
        label: "Market Analyst",
      },
      {
        href: "mailto:support@achieverfinancials.com?subject=Business%20Development%20Role",
        label: "Business Development",
      },
    ],
    finalCta: {
      title: "Think you can add momentum to the team?",
      description:
        "Send your profile and area of interest. The team can route your message to the right desk.",
      href: "mailto:support@achieverfinancials.com?subject=Career%20Interest",
      label: "Contact Careers",
    },
  },
  contact: {
    accent: "blue",
    eyebrow: "Contact Us",
    title: "Talk to the Achiever support team",
    description:
      "Reach the team for account questions, platform help, partnership enquiries, and general support.",
    heroImage: "/company/contact-us.webp",
    heroImageAlt:
      "AI generated premium client support desk with abstract communication dashboards.",
    featureImageAlt:
      "AI generated fintech support environment for client service.",
    primaryCta: {
      href: "mailto:support@achieverfinancials.com",
      label: "Email Support",
    },
    secondaryCta: { href: "tel:+971506716577", label: "Call Team" },
    metrics: [
      { value: "+971", label: "Phone access" },
      { value: "Email", label: "Support channel" },
      { value: "Mauritius", label: "Registered office" },
    ],
    details: [
      {
        icon: Phone,
        title: "+971 50 671 6577",
        description:
          "Call the team for account, platform, or service-related support.",
      },
      {
        icon: Mail,
        title: "support@achieverfinancials.com",
        description:
          "Send enquiries, document questions, or support requests to the main service inbox.",
      },
      {
        icon: MapPin,
        title: "Registered Address",
        description:
          "Premier Business Center, 10th Floor, Sterling Tower, 14 Poudriere St Port Louis Mauritius.",
      },
    ],
    story: {
      kicker: "Support Flow",
      title: "Clear support paths for common questions.",
      body: "The contact page gives visitors direct ways to reach the team and helps route the most common enquiries into the right next step.",
      points: [
        "Account and onboarding questions",
        "Platform access and trading tool support",
        "Legal document, partnership, and general enquiries",
      ],
    },
    actions: [
      { href: "mailto:support@achieverfinancials.com?subject=Account%20Support", label: "Account Support" },
      { href: "mailto:support@achieverfinancials.com?subject=Platform%20Support", label: "Platform Support" },
      { href: "mailto:support@achieverfinancials.com?subject=Partnership%20Enquiry", label: "Partnership Enquiry" },
    ],
    finalCta: {
      title: "Need help choosing your next step?",
      description:
        "Reach out to support or review account types before registering.",
      href: "mailto:support@achieverfinancials.com",
      label: "Email Support",
    },
  },
  customerProtection: {
    accent: "blue",
    eyebrow: "Customer Protection",
    title: "Protection principles for a more confident trading journey",
    description:
      "Understand the controls, disclosures, support routes, and risk-awareness practices that help clients make informed decisions.",
    heroImage: "/company/customer-protection.webp",
    heroImageAlt:
      "AI generated client protection scene with abstract shield architecture and secure account panels.",
    featureImageAlt:
      "AI generated secure fintech operations image representing customer protection.",
    primaryCta: { href: "/company/legal-documents", label: "View Documents" },
    secondaryCta: { href: "/company/contact-us", label: "Contact Support" },
    metrics: [
      { value: "Risk", label: "Disclosure focus" },
      { value: "Security", label: "Account care" },
      { value: "Support", label: "Client access" },
    ],
    details: [
      {
        icon: ShieldCheck,
        title: "Risk Awareness",
        description:
          "Client materials should make trading risks visible before a decision is made.",
      },
      {
        icon: LockKeyhole,
        title: "Account Security",
        description:
          "Support processes and platform access should encourage careful account handling.",
      },
      {
        icon: Headphones,
        title: "Client Support",
        description:
          "Clear contact routes help clients raise questions about accounts, documents, and platform access.",
      },
    ],
    story: {
      kicker: "Client Safeguards",
      title: "Protection starts with clarity.",
      body: "A strong trading experience gives clients practical information about costs, risk, account access, and support before they need to make a time-sensitive decision.",
      points: [
        "Risk notices and agreements kept easy to find",
        "Support paths for account, platform, and document questions",
        "Transparent reminders that leveraged products involve risk",
      ],
    },
    actions: [
      { href: "/company/legal-documents", label: "Risk Disclosure" },
      { href: "/company/contact-us", label: "Raise a Question" },
      { href: "/register", label: "Create Account" },
    ],
    finalCta: {
      title: "Review the documents before you trade.",
      description:
        "Legal documents and support channels are available so clients can understand the trading environment before opening an account.",
      href: "/company/legal-documents",
      label: "Legal Documents",
    },
  },
  legalDocuments: {
    accent: "blue",
    title: "Key documents for transparent account decisions",
    description:
      "Find the document categories, risk notices, and client information areas that support a clearer trading relationship.",
    heroImage: "/company/legal-documents.webp",
    heroImageAlt:
      "AI generated legal documentation workspace with abstract contracts and compliance panels.",
    featureImageAlt:
      "AI generated organized compliance and legal document workspace.",
    primaryCta: {
      href: "mailto:support@achieverfinancials.com?subject=Legal%20Document%20Request",
      label: "Request Documents",
    },
    secondaryCta: { href: "/company/customer-protection", label: "Customer Protection" },
    metrics: [
      { value: "Client", label: "Agreements" },
      { value: "Risk", label: "Disclosures" },
      { value: "Policy", label: "Notices" },
    ],
    details: [
      {
        icon: FileText,
        title: "Client Agreements",
        description:
          "Review the terms that define account use, platform access, and client responsibilities.",
      },
      {
        icon: Scale,
        title: "Risk Disclosures",
        description:
          "Understand the risks connected to leveraged trading before opening or funding an account.",
      },
      {
        icon: ClipboardCheck,
        title: "Policy Notices",
        description:
          "Access policy categories such as privacy, complaints, anti-money laundering, and related notices.",
      },
    ],
    story: {
      kicker: "Document Library",
      title: "A cleaner path to important client information.",
      body: "Legal pages should help visitors quickly identify the documents they need, understand why they matter, and contact support for the latest version.",
      points: [
        "Client agreement and product risk categories",
        "Privacy, AML, and complaints policy areas",
        "Support route for document requests and clarification",
      ],
    },
    actions: [
      {
        href: "mailto:support@achieverfinancials.com?subject=Client%20Agreement%20Request",
        label: "Client Agreement",
      },
      {
        href: "mailto:support@achieverfinancials.com?subject=Risk%20Disclosure%20Request",
        label: "Risk Disclosure",
      },
      {
        href: "mailto:support@achieverfinancials.com?subject=Policy%20Document%20Request",
        label: "Policy Documents",
      },
    ],
    finalCta: {
      title: "Need the latest document version?",
      description:
        "Contact support for the current legal document pack or clarification before opening an account.",
      href: "mailto:support@achieverfinancials.com?subject=Legal%20Document%20Request",
      label: "Request Pack",
    },
  },
} satisfies Record<string, CompanyPageData>;

function MetricCard({ label, value }: CompanyMetric) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_14px_34px_rgba(2,8,20,0.2)] backdrop-blur-md">
      <p className="text-xl font-semibold tracking-normal text-white">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/64">
        {label}
      </p>
    </div>
  );
}

function InfoCard({
  accent,
  description,
  icon: Icon,
  title,
}: CompanyCard & { accent: CompanyAccent }) {
  const styles = accentClasses[accent];

  return (
    <Card
      variant="glow"
      className={cn("group h-full rounded-lg border-white/10 p-0", styles.ring)}
    >
      <CardHeader className="p-6">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg border",
            styles.icon,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </div>
        <CardTitle className="mt-5 text-xl tracking-normal">{title}</CardTitle>
        <CardDescription className="text-sm leading-6">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function ActionLinks({
  accent,
  actions = [],
}: {
  accent: CompanyAccent;
  actions?: CompanyAction[];
}) {
  const styles = accentClasses[accent];

  if (!actions.length) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {actions.map((action) => (
        <Link
          key={`${action.label}-${action.href}`}
          href={action.href}
          className="group rounded-lg border border-white/10 bg-bg-secondary/50 p-5 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-white/20 hover:bg-bg-secondary/80 [.light_&]:border-slate-200 [.light_&]:bg-surface [.light_&]:text-slate-900 [.light_&]:shadow-[0_12px_30px_rgba(15,23,42,0.05)] [.light_&]:hover:border-brand-primary/20"
        >
          <span
            className={cn(
              "mb-4 flex h-10 w-10 items-center justify-center rounded-lg border",
              styles.icon,
            )}
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
          {action.label}
        </Link>
      ))}
    </div>
  );
}

export function CompanyPage({ page }: { page: CompanyPageData }) {
  const styles = accentClasses[page.accent];
  const isAboutPage = page === companyPages.about;
  const isCareerPage = page === companyPages.career;
  const isContactPage = page === companyPages.contact;
  const isCustomerProtectionPage = page === companyPages.customerProtection;
  const isLegalDocumentsPage = page === companyPages.legalDocuments;
  const showHeroEyebrow = Boolean(page.eyebrow);
  const showSharedCompanySections =
    !isContactPage && !isCustomerProtectionPage && !isLegalDocumentsPage;

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-bg-dark [.light_&]:bg-surface">
        <section className="relative flex min-h-[72svh] w-full items-end overflow-hidden px-4 pb-10 pt-28 sm:min-h-[78svh] sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_48%,rgba(2,6,23,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.36)_0%,rgba(2,6,23,0.34)_48%,rgba(4,8,20,0.96)_100%)]" />
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]" />

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              {showHeroEyebrow ? (
                <Badge
                  className={cn(
                    "px-4 py-1.5 uppercase tracking-[0.2em]",
                    styles.badge,
                  )}
                >
                  {page.eyebrow}
                </Badge>
              ) : null}

              <h1
                className={cn(
                  "max-w-full text-3xl font-semibold leading-[1.06] tracking-normal text-white min-[380px]:text-4xl sm:text-5xl lg:text-6xl",
                  showHeroEyebrow ? "mt-5 sm:mt-6" : "mt-0",
                )}
              >
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
                    className="min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto"
                  >
                    <Link href={page.secondaryCta.href}>
                      {page.secondaryCta.label}
                    </Link>
                  </Button>
                ) : null}
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 min-[520px]:grid-cols-3">
                {page.metrics.map((metric) => (
                  <MetricCard key={`${metric.value}-${metric.label}`} {...metric} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {isAboutPage ? <AboutTrustOverview /> : null}
        {isCareerPage ? <CareerPageExperience /> : null}
        {isContactPage ? <ContactUsExperience /> : null}
        {isCustomerProtectionPage ? <CustomerProtectionExperience /> : null}
        {isLegalDocumentsPage ? <LegalDocumentsTrust /> : null}

        {showSharedCompanySections ? (
          <SectionWrapper className="py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <Badge
                className={cn(
                  "px-4 py-1.5 uppercase tracking-[0.2em]",
                  styles.badge,
                )}
              >
                Company
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                Built to keep client journeys clear.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Each company page gives visitors a direct path into the
                information, support, or documents they are most likely to need.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {page.details.map((detail) => (
                <InfoCard key={detail.title} accent={page.accent} {...detail} />
              ))}
            </div>
          </SectionWrapper>
        ) : null}

        {!isContactPage ? (
          <section className="relative w-full bg-bg-secondary/50 py-16 [.light_&]:bg-bg-secondary/30 lg:py-20">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 shadow-[0_28px_80px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
                <Image
                  src={page.heroImage}
                  alt={page.featureImageAlt}
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
        ) : null}

        {showSharedCompanySections ? (
          <SectionWrapper className="py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <Badge
                  className={cn(
                    "px-4 py-1.5 uppercase tracking-[0.2em]",
                    styles.badge,
                  )}
                >
                  Next Steps
                </Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                  Choose the path that fits your enquiry.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                  Company pages are connected so visitors can move quickly
                  between support, documents, protection information, and
                  account exploration.
                </p>
              </div>

              <ActionLinks accent={page.accent} actions={page.actions} />
            </div>
          </SectionWrapper>
        ) : null}

        {!isContactPage ? (
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

                <Button asChild className="w-full sm:w-auto h-12 rounded-lg px-7 text-sm">
                  <Link href={page.finalCta.href}>
                    {page.finalCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
