"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

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

const footerColumns = [
  {
    title: "Markets",
    links: [
      { label: "Overview", href: "/markets/market-overview" },
      { label: "Account Types", href: "/markets/account-types" },
      { label: "Forex Trading", href: "/markets/forex" },
      { label: "Crypto CFDs", href: "/markets/crypto" },
      { label: "Stock Indices", href: "/markets/indices" },
      { label: "Equities", href: "/markets/equities" },
      { label: "Commodities", href: "/markets/commodities" },
      { label: "Precious Metals", href: "/markets/precious-metals" },
      { label: "Energies", href: "/markets/energies" },
      { label: "Shares", href: "/markets/shares" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Trading Academy", href: "/tools/education" },
      { label: "Market Blogs", href: "/tools/blogs" },
      { label: "Trading Tools", href: "/tools" },
      { label: "Economic Calendar", href: "/tools/economic-calendar" },
      { label: "Special Offerings", href: "/tools/offerings" },
      { label: "News & Analysis", href: "/tools/analysis-report" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Achiever", href: "/company" },
      { label: "Career", href: "/company/career" },
      { label: "Legal Documents", href: "/company/legal-documents" },
      { label: "Customer Protection", href: "/company/customer-protection" },
      { label: "Contact Us", href: "/company/contact-us" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Latest Promotions", href: "/promotions" },
      { label: "Partnership Program", href: "/partner" },
      { label: "RTX 5 Platform", href: "/platform" },
      { label: "MetaTrader 5", href: "/platform/metatrader-5" },
      { label: "Help Center", href: "/company/contact-us" },
    ],
  },
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
    href: "#",
    accent: "text-[#3563a7]",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "#",
    accent: "text-[#2a66bc]",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "#",
    accent: "text-[#e95b9d]",
    icon: YouTubeIcon,
  },
  {
    label: "Instagram",
    href: "#",
    accent: "text-[#7b8fd8]",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "#",
    accent: "text-[#4f6fa6]",
    icon: XIcon,
  },
];

function FooterSection({
  title,
  links,
  children
}: {
  title: string;
  links?: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 sm:py-0 sm:mb-6"
      >
        <h4 className="text-sm font-bold uppercase tracking-wider text-white [.light_&]:text-[#111827]">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={cn(
            "text-slate-500 transition-transform duration-300 sm:hidden",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out sm:max-h-none sm:opacity-100",
        isOpen ? "max-h-[500px] opacity-100 mb-6" : "max-h-0 opacity-0 sm:mb-0"
      )}>
        {links ? (
          <ul className="space-y-3.5 pb-4 sm:pb-0">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300/85 transition-colors hover:text-[#3ca2fa] [.light_&]:text-slate-600 [.light_&]:hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : children}
      </div>
      <div className="h-px w-full bg-white/5 sm:hidden" />
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
        <div className="grid grid-cols-1 gap-0 pb-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-6 lg:gap-x-8 lg:gap-y-12">
          <div className="mb-12 flex flex-col space-y-6 md:col-span-2 md:mb-0 lg:col-span-3 xl:col-span-2">
            <BrandLogo className="w-[190px] sm:w-[220px] lg:w-[250px] [.light_&]:brightness-[0.18] [.light_&]:contrast-[1.35]" />
            <p className="max-w-sm text-sm leading-relaxed text-slate-300/90 [.light_&]:text-slate-600 sm:self-center">
              Here at Achiever Financials Ltd, we provide one of the safest
              online trading platforms to our clients and partners.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-4 sm:self-center md:gap-4 2xl:gap-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold uppercase text-slate-900 transition-transform duration-300 hover:-translate-y-0.5 [.light_&]:bg-blue-50 [.light_&]:text-blue-700 [.light_&]:shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
                >
                  <item.icon className={cn("h-4 w-4", item.accent)} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}

          <div className="md:col-span-2 lg:col-span-1 xl:col-span-2">
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
