"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Mail, MapPin, Phone, Terminal } from "lucide-react";

import BrandLogo from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 900 220"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(event) =>
        setCursor({ x: event.clientX, y: event.clientY })
      }
      className={cn("cursor-pointer select-none uppercase", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="25%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="75%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#e879f9" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.9"
        className="fill-transparent font-[Helvetica] text-[132px] font-bold tracking-[0.08em] stroke-white/15"
        style={{ opacity: hovered ? 0.75 : 0.3 }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.9"
        className="fill-transparent font-[Helvetica] text-[132px] font-bold tracking-[0.08em] stroke-[#3ca2fa]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.9"
        mask="url(#textMask)"
        className="fill-transparent font-[Helvetica] text-[132px] font-bold tracking-[0.08em]"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(15,15,17,0.35)_42%,rgba(60,162,250,0.18)_100%)] [.light_&]:bg-[radial-gradient(125%_125%_at_50%_10%,rgba(248,251,255,0.7)_40%,rgba(37,99,235,0.12)_100%)]" />
  );
};

const SocialIcon = ({
  children,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <SocialIcon {...props}>
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.6 1.5-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H9v3h2.3v7h2.2Z" />
  </SocialIcon>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <SocialIcon {...props}>
    <path d="M6.7 8.4a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM5.2 9.7h3V19h-3V9.7Zm4.8 0h2.9V11h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-3v-4.3c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V19h-3V9.7Z" />
  </SocialIcon>
);

const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <SocialIcon {...props}>
    <path d="M21 8.6a2.9 2.9 0 0 0-2-2C17.1 6 12 6 12 6s-5.1 0-7 .6a2.9 2.9 0 0 0-2 2C2.4 10.4 2.4 12 2.4 12s0 1.6.6 3.4a2.9 2.9 0 0 0 2 2c1.9.6 7 .6 7 .6s5.1 0 7-.6a2.9 2.9 0 0 0 2-2c.6-1.8.6-3.4.6-3.4s0-1.6-.6-3.4ZM10.3 15.6V8.4l5 3.6-5 3.6Z" />
  </SocialIcon>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <SocialIcon {...props}>
    <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Zm3 1.1c-.1-1.4-.4-2.6-1.5-3.7-1.1-1.1-2.3-1.4-3.7-1.5C14.6 3 9.4 3 8.1 3.1c-1.4.1-2.6.4-3.7 1.5-1.1 1.1-1.4 2.3-1.5 3.7C3 9.4 3 14.6 3.1 15.9c.1 1.4.4 2.6 1.5 3.7 1.1 1.1 2.3 1.4 3.7 1.5 1.3.1 6.5.1 7.8 0 1.4-.1 2.6-.4 3.7-1.5 1.1-1.1 1.4-2.3 1.5-3.7.1-1.3.1-6.5 0-7.8Zm-2 9.5c-.3.8-1 1.5-1.8 1.8-1.2.5-4.2.4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.8-1.8c-.5-1.2-.4-4.2-.4-5.3s-.1-4.1.4-5.3c.3-.8 1-1.5 1.8-1.8 1.2-.5 4.2-.4 5.3-.4s4.1-.1 5.3.4c.8.3 1.5 1 1.8 1.8.5 1.2.4 4.2.4 5.3s.1 4.1-.4 5.3Z" />
  </SocialIcon>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <SocialIcon {...props}>
    <path d="M18.9 3H21l-6.6 7.5L22 21h-6l-4.7-6.2L5.8 21H3.7l7-8L2 3h6.1l4.3 5.7L18.9 3Zm-1 16.3h1.7L7.2 4.6H5.4l12.5 14.7Z" />
  </SocialIcon>
);

const documentLinks = [
  { label: "Privacy Policy", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:9018aec8-f514-43be-bf5f-918dcda37876" },
  { label: "Risk Disclosure", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:9ba39088-5f97-4653-bfa6-02356f4aecde" },
  { label: "Client Agreement", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6711b228-0545-41a1-bb40-8f05b9257ff4" },
  { label: "Complaint Handling", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2075fe24-165e-486a-ab09-3492dfbdd951" },
  { label: "AML Policy", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:ffd740b6-5ab7-4bb3-af74-809ad43a1391" },
];

const footerColumns = [
  {
    title: "Markets",
    links: [
      { label: "Overview", href: "/markets/market-overview" },
      { label: "Forex", href: "/markets/forex" },
      { label: "Crypto", href: "/markets/crypto" },
      { label: "Indices", href: "/markets/indices" },
      { label: "Equities", href: "/markets/equities" },
      { label: "Commodities", href: "/markets/commodities" },
      { label: "Precious Metals", href: "/markets/precious-metals" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "MetaTrader 5", href: "/platform/metatrader-5" },
      { label: "RTX 5 Platform", href: "/platform/rtx-5" },
      { label: "Achiever App", href: "/platform/achiever-app" },
      { label: "Achiever Connect", href: "/platform/achiever-connect" },
      { label: "Achiever Web Trader", href: "/platform/achiever-web-trader" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Education", href: "/discover/education" },
      { label: "Trading Tools", href: "/discover/trading-tools" },
      { label: "Analysis Report", href: "/discover/analysis-report" },
      { label: "Economic Calendar", href: "/discover/economic-calendar" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Career", href: "/company/career" },
      { label: "Customer Protection", href: "/company/customer-protection" },
      { label: "Contact Us", href: "/company/contact-us" },
    ],
  },
  {
    title: "Partner",
    links: [
      { label: "Introducing Broker", href: "/partner/introducing-broker" },
      { label: "Affiliate Program", href: "/partner/affiliate-program" },
      { label: "Institutional Liquidity", href: "https://achieverprime.com/" },
    ],
  },
  {
    title: "Documents",
    links: documentLinks,
  },
];

const AndroidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.523 15.341A5.97 5.97 0 0 0 18 13a5.97 5.97 0 0 0-.477-2.341L19.5 9l-2.5-1.5-.954 1.659A5.97 5.97 0 0 0 12 7a5.97 5.97 0 0 0-4.046 1.659L7 7 4.5 8.5l1.977 1.659A5.97 5.97 0 0 0 6 13a5.97 5.97 0 0 0 .477 2.341L4.5 17l2.5 1.5.954-1.659A5.97 5.97 0 0 0 12 18.5a5.97 5.97 0 0 0 4.046-1.659L17 18.5l2.5-1.5-1.977-1.659ZM10 13.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    <path d="m7.5 5.5 1 1.732A5.96 5.96 0 0 1 12 6.5c1.26 0 2.43.39 3.5 1.04L16.5 5.5l-1.5-2.5h-6L7.5 5.5Z" />
  </svg>
);

const WindowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 12V6.75L9 5.43V12H3ZM10 12V5.24L21 3V12H10ZM3 13H9V19.57L3 18.25V13ZM10 13H21V21L10 18.76V13Z" />
  </svg>
);

const AppleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  </svg>
);

const HuaweiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 3c.828 0 1.5 1.343 1.5 3S12.828 11 12 11s-1.5-1.343-1.5-3S11.172 5 12 5Zm-4.33 2.5c.716-.414 1.94.22 2.68 1.41.74 1.19.74 2.51.024 2.924-.717.414-1.94-.22-2.68-1.41-.74-1.19-.74-2.51-.024-2.924Zm8.66 0c.716.414.716 1.734-.024 2.924-.74 1.19-1.963 1.824-2.68 1.41-.716-.414-.716-1.734.024-2.924.74-1.19 1.963-1.824 2.68-1.41ZM7 13c.828 0 1.5 1.343 1.5 3S7.828 19 7 19s-1.5-1.343-1.5-3S6.172 13 7 13Zm10 0c.828 0 1.5 1.343 1.5 3S17.828 19 17 19s-1.5-1.343-1.5-3S16.172 13 17 13Zm-5 1c.828 0 1.5 1.343 1.5 3S12.828 21 12 21s-1.5-1.343-1.5-3S11.172 14 12 14Z" />
  </svg>
);

const mt5Downloads = [
  { label: "GET IT ON", sub: "Google Play", href: "https://download.terminal.free/cdn/mobile/mt5/android?server=AchieverGlobalMarkets-Server", Icon: AndroidIcon },
  { label: "Download for", sub: "Windows", href: "https://download.terminal.free/cdn/web/achiever.global.markets/mt5/achieverglobalmarkets5setup.exe", Icon: WindowsIcon },
  { label: "Download on the", sub: "App Store", href: "https://download.terminal.free/cdn/mobile/mt5/ios?server=AchieverGlobalMarkets-Server", Icon: AppleIcon },
  { label: "Download for", sub: "Mac OS", href: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip", Icon: AppleIcon },
  { label: "Download on", sub: "AppGallery", href: "https://appgallery.huawei.com/#/app/C102015329", Icon: HuaweiIcon },
  { label: "Download", sub: "for Linux", href: "https://www.mql5.com/en/articles/625", Icon: Terminal },
];

const contactInfo = [
  {
    icon: <Phone size={18} className="text-[#3ca2fa] [.light_&]:text-blue-600" />,
    text: "+971 50 671 6577",
    href: "tel:+971506716577",
  },
  {
    icon: <Mail size={18} className="text-[#3ca2fa] [.light_&]:text-blue-600" />,
    text: "support@achieverfinancials.com",
    href: "mailto:support@achieverfinancials.com",
  },
  {
    icon: <MapPin size={18} className="text-[#3ca2fa] [.light_&]:text-blue-600" />,
    text: "Premier Business Center, 10th Floor, Sterling Tower, 14 Poudriere St Port Louis Mauritius.",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Achiever-Financials-Ltd/61560611701741/",
    accent: "text-[#3563a7]",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/achiever-fx/posts/?feedView=all",
    accent: "text-[#2a66bc]",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@officialachieverfx",
    accent: "text-[#e95b9d]",
    icon: YouTubeIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/officialachieverfx/",
    accent: "text-[#7b8fd8]",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "https://x.com/Achiever_fx",
    accent: "text-[#4f6fa6]",
    icon: XIcon,
  },
];

function FooterSection({
  title,
  links,
  children,
  collapsible = false,
}: {
  title: string;
  links?: { label: string; href: string }[];
  children?: React.ReactNode;
  collapsible?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col mb-2 sm:mb-4">
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between py-3 cursor-pointer",
          collapsible ? "border-b border-white/8 [.light_&]:border-gray-200" : "sm:mb-6"
        )}
      >
        <h4 className="text-sm font-bold uppercase tracking-wider text-white [.light_&]:text-[#111827]">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={cn(
            "text-slate-500 transition-transform duration-300",
            collapsible ? "block" : "md:hidden",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        collapsible
          ? isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          : cn("md:max-h-none sm:opacity-100", isOpen ? "max-h-[500px] opacity-100 mb-6" : "max-h-0 opacity-0 md:mb-0")
      )}>
        {links ? (
          <ul className="space-y-3 py-3 pl-1">
            {links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300/85 transition-colors hover:text-[#3ca2fa] [.light_&]:text-slate-600 [.light_&]:hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300/85 transition-colors hover:text-[#3ca2fa] [.light_&]:text-slate-600 [.light_&]:hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : children}
      </div>
      {!collapsible && <div className="h-px w-full bg-white/5 sm:hidden" />}
    </div>
  );
}

export default function HoverFooter() {
  return (
    <footer className="relative m-3 overflow-hidden rounded-[24px] border border-white/10 bg-[#07101f]/55 text-slate-300 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:m-4 sm:rounded-[32px] md:m-8 [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:text-slate-600 [.light_&]:shadow-[0_20px_60px_rgba(14,165,233,0.08)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-0 hidden h-0 overflow-visible opacity-40 lg:block [.light_&]:h-[20rem] [.light_&]:overflow-visible [.light_&]:opacity-[0.38]">
        <div className="flex h-full items-end justify-center">
          <BrandLogo className="w-[720px] opacity-[0.24] blur-[0.2px] [.light_&]:brightness-[0.18] [.light_&]:contrast-[1.35]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl p-5 sm:p-8 md:p-12 lg:p-14">

        {/* Row 1 — Logo, tagline, social (centered) */}
        <div className="mb-10 flex flex-col items-center space-y-5 text-center pb-10 border-b border-white/8 [.light_&]:border-gray-200">
          <BrandLogo className="w-[190px] sm:w-[220px] lg:w-[250px] [.light_&]:brightness-[0.18] [.light_&]:contrast-[1.35]" />
          <p className="max-w-sm text-sm leading-relaxed text-slate-300/90 [.light_&]:text-slate-600">
            Here at Achiever Financials Ltd, we provide one of the safest
            online trading platforms to our clients and partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold uppercase text-slate-900 transition-transform duration-300 hover:-translate-y-0.5 [.light_&]:bg-blue-50 [.light_&]:text-blue-700 [.light_&]:shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
              >
                <item.icon className={cn("h-4 w-4", item.accent)} />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 — Quick Links + Contact Us + MT5 */}
        <div className="grid grid-cols-1 gap-0 pb-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-12 xl:gap-x-8">

          {/* Quick Links (collapsible per section) */}
          <div className="xl:col-span-8">
            <h4 className="mb-2 hidden text-sm font-bold uppercase tracking-wider text-white xl:block [.light_&]:text-[#111827]">
              Quick Links
            </h4>
            {footerColumns.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links.map((l) => ({ label: l.label, href: l.href }))}
                collapsible
              />
            ))}
          </div>

          {/* Contact Us + Download MT5 */}
          <div className="md:col-span-2 xl:col-span-4">
            <FooterSection title="Contact Us">
              <ul className="space-y-6 pb-4 sm:pb-0">
                {contactInfo.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-slate-300/85 transition-colors [overflow-wrap:anywhere] hover:text-[#3ca2fa] [.light_&]:text-slate-600 [.light_&]:hover:text-blue-600"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm leading-6 text-slate-300/85 [overflow-wrap:anywhere] [.light_&]:text-slate-600">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Download MT5 */}
            <div className="mt-2 pb-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 [.light_&]:text-slate-500">
                Download MT5
              </p>
              <div className="mb-4">
                <img
                  src="/mt5-image.png"
                  alt="MetaTrader 5"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {mt5Downloads.map((d) => (
                  <a
                    key={d.sub}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 transition-colors hover:border-[#3ca2fa]/40 hover:bg-white/10 [.light_&]:border-gray-200 [.light_&]:bg-gray-50 [.light_&]:hover:border-blue-300 [.light_&]:hover:bg-blue-50"
                  >
                    <d.Icon className="h-5 w-5 shrink-0 text-[#3ca2fa] [.light_&]:text-blue-600" />
                    <div className="flex flex-col">
                      <span className="text-[9px] leading-tight text-slate-400 [.light_&]:text-slate-500">{d.label}</span>
                      <span className="text-[11px] font-semibold leading-tight text-white [.light_&]:text-[#111827]">{d.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 border-t border-white/10 pt-10 [.light_&]:border-gray-200">
          <p className="text-[11px] leading-relaxed text-slate-400/80 [.light_&]:text-slate-500">
            <strong className="font-semibold text-slate-300 [.light_&]:text-[#111827]">Risk Warning:</strong>{" "}
            An investment in CFD&apos;s may mean investors may lose an amount even
            greater than their original investment. Anyone wishing to invest in
            any of the products mentioned should seek their own financial or
            professional advice. Trading of securities, forex, stock market,
            commodities, options and futures may not be suitable for everyone
            and involves the risk of losing part or all of your money.
          </p>

          <p className="text-[11px] leading-relaxed text-slate-400/80 [.light_&]:text-slate-500">
            Regulated by Mauritius FSC. Achiever Financials Ltd is authorised
            and regulated by the Mauritius Financial Services Commission with
            Global Business and Investment Dealer Licence number GB 24203778.
          </p>

          <p className="text-[11px] leading-relaxed text-slate-400/80 [.light_&]:text-slate-500">
            Achiever Global Markets LTD. Registration number 2023-00255 with
            registered address at Ground Floor, The South Bay Building, Rodney
            Bay, Gross-Islet Saint Lucia, P.O. box 838, Castries, Saint Lucia.
          </p>

          <p className="text-[11px] leading-relaxed text-slate-400/80 [.light_&]:text-slate-500">
            Regional restrictions: Achiever Financials Ltd / Achiever Global
            Markets LTD does not provide services to citizens or residents of
            Cuba, Iraq, Myanmar, North Korea, Sudan and FATF blacklisted
            countries. The services of Achiever Financials Ltd are not intended
            for distribution to, or use by, any person in any country or
            jurisdiction where such distribution or use would be contrary to
            local law or regulation.
          </p>

          <div className="border-t border-white/10 pt-5 text-center text-sm text-slate-300 [.light_&]:border-gray-200 [.light_&]:text-slate-600">
            Copyright (c) {new Date().getFullYear()} Achiever Financials LTD. All
            rights reserved.
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
