"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { useState, type ComponentType, type ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type InfoRowData = {
  href?: string;
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardData = {
  description?: string;
  rows: InfoRowData[];
  title: string;
};

type LocationData = {
  address: string;
  email: string;
  label: string;
  mapQuery: string;
  phone: string;
  phoneHref: string;
  socialItems: { href: string; icon: SocialIconComponent; label: string }[];
};

type SocialIconComponent = ComponentType<{ className?: string }>;

const socialLinks = {
  facebook: "https://www.facebook.com/people/Achiever-Financials-Ltd/61560611701741/",
  instagram: "https://www.instagram.com/officialachieverfx/",
  linkedin: "https://www.linkedin.com/company/achiever-fx/posts/?feedView=all",
  x: "https://x.com/Achiever_fx",
  youtube: "https://www.youtube.com/@officialachieverfx",
};

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function InfoRow({ href, icon: Icon, label, value }: InfoRowData) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-300/10 text-sky-100 ring-1 ring-sky-300/20 transition-all duration-300 group-hover:bg-sky-300/16 group-hover:text-white group-hover:ring-sky-300/34 [.light_&]:bg-sky-50 [.light_&]:text-blue-600 [.light_&]:ring-sky-100 [.light_&]:group-hover:bg-blue-600 [.light_&]:group-hover:text-white [.light_&]:group-hover:ring-blue-500/20">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 [.light_&]:text-slate-500">
          {label}
        </span>
        <span className="mt-1 block text-sm font-semibold leading-6 text-slate-100 [.light_&]:text-slate-900">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-start gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-white/[0.04] [.light_&]:hover:bg-sky-50/80"
      >
        {content}
      </a>
    );
  }

  return <div className="group flex items-start gap-3 rounded-xl p-2">{content}</div>;
}

export function SocialIcons({
  items,
}: {
  items: { href: string; icon: SocialIconComponent; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/18 bg-sky-300/10 text-sky-100 shadow-[0_10px_24px_rgba(2,8,20,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/16 hover:text-white hover:shadow-[0_16px_34px_rgba(56,189,248,0.16)] [.light_&]:border-sky-100 [.light_&]:bg-white [.light_&]:text-blue-600 [.light_&]:shadow-[0_10px_24px_rgba(15,23,42,0.06)] [.light_&]:hover:border-sky-200 [.light_&]:hover:bg-blue-600 [.light_&]:hover:text-white [.light_&]:hover:shadow-[0_16px_34px_rgba(37,99,235,0.18)]"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function ContactCard({
  description,
  rows,
  title,
}: ContactCardData) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="rounded-2xl border border-sky-300/14 bg-[#07111f]/86 p-5 shadow-[0_18px_48px_rgba(2,8,20,0.24)] backdrop-blur-md [.light_&]:border-slate-200/80 [.light_&]:bg-white [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.07)]"
    >
      <h3 className="text-lg font-semibold tracking-normal text-white [.light_&]:text-slate-950">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">{description}</p>
      ) : null}
      <div className="mt-4 grid gap-2">
        {rows.map((row) => (
          <InfoRow key={`${row.label}-${row.value}`} {...row} />
        ))}
      </div>
    </motion.div>
  );
}

export function MapContainer({ query }: { query: string }) {
  return (
    <div className="relative min-h-[25rem] overflow-hidden rounded-2xl border border-sky-300/16 bg-[#06101d] shadow-[0_24px_70px_rgba(2,8,20,0.28)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
      <iframe
        title="Achiever FX location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function LocationSupportCard({ location }: { location: LocationData }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-sky-300/16 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.3)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300" />
      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_12%_12%,rgba(37,99,235,0.08),transparent_28%)]" />
          <div className="relative space-y-6">
            <InfoRow
              icon={MapPin}
              label={`${location.label} Location`}
              value={location.address}
            />
            <InfoRow
              href={`mailto:${location.email}`}
              icon={Mail}
              label="Quick Contact"
              value={`Email: ${location.email}`}
            />
            <InfoRow
              href={location.phoneHref}
              icon={Phone}
              label="Phone Number"
              value={location.phone}
            />

            <div className="pt-1">
              <h3 className="text-sm font-semibold tracking-normal text-sky-100 [.light_&]:text-blue-700">
                Follow us
              </h3>
              <div className="mt-4">
                <SocialIcons items={location.socialItems} />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[21rem] border-t border-white/10 lg:border-l lg:border-t-0 [.light_&]:border-slate-200">
          <MapContainer query={location.mapQuery} />
        </div>
      </div>
    </motion.div>
  );
}

export function LocationTabs({
  activeLocation,
  locations,
  onLocationChange,
}: {
  activeLocation?: LocationData;
  locations: LocationData[];
  onLocationChange?: (location: LocationData) => void;
}) {
  const [internalActive, setInternalActive] = useState(locations[0]);
  const active = activeLocation ?? internalActive;

  return (
    <div className="rounded-2xl border border-sky-300/14 bg-[#07111f]/86 p-5 shadow-[0_18px_48px_rgba(2,8,20,0.24)] backdrop-blur-md [.light_&]:border-slate-200/80 [.light_&]:bg-white [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.07)]">
      <div className="flex gap-2 border-b border-white/10 [.light_&]:border-slate-200">
        {locations.map((location) => {
          const isActive = active.label === location.label;

          return (
            <button
              key={location.label}
              type="button"
              onClick={() => {
                setInternalActive(location);
                onLocationChange?.(location);
              }}
              className={cn(
                "relative px-3 pb-3 text-sm font-semibold transition-colors duration-300",
                isActive
                  ? "text-sky-100 [.light_&]:text-blue-700"
                  : "text-slate-400 hover:text-white [.light_&]:text-slate-500 [.light_&]:hover:text-slate-900",
              )}
            >
              {location.label}
              {isActive ? (
                <motion.span
                  layoutId="contact-location-active"
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-sky-300 [.light_&]:bg-blue-600"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <motion.div
        key={active.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="mt-5"
      >
        <InfoRow
          icon={MapPin}
          label={active.label}
          value={active.address}
        />
      </motion.div>
    </div>
  );
}

export function ContactHero({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] p-6 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#f8fbff_0%,#eef7ff_48%,#ffffff_100%)] [.light_&]:shadow-[0_28px_80px_rgba(37,99,235,0.11)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_88%_22%,rgba(37,99,235,0.14),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_88%_22%,rgba(37,99,235,0.12),transparent_30%)]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 shadow-[0_10px_24px_rgba(2,8,20,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-white [.light_&]:text-blue-700 [.light_&]:shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
                Contact Us
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href="mailto:support@achieverfinancials.com">
                    Email Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-lg border-white/20 bg-white/10 px-7 py-3 text-sm text-white hover:bg-white/16 hover:text-white [.light_&]:border-sky-200 [.light_&]:bg-white [.light_&]:text-slate-800 [.light_&]:hover:bg-sky-50 [.light_&]:hover:text-blue-700"
                >
                  <Link href="tel:+971506716577">Call Team</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-white [.light_&]:bg-white [.light_&]:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
            >
              <Image
                src="/company/contact-modern/support-executive.webp"
                alt="Friendly customer support executive wearing a headset in a clean fintech support environment."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

const locations: LocationData[] = [
  {
    label: "Mauritius",
    address:
      "Premier Business Center, 10th Floor, Sterling Tower, 14 Poudriere St Port Louis Mauritius.",
    email: "support@achieverfinancials.com",
    mapQuery:
      "Premier Business Center, 10th Floor, Sterling Tower, 14 Poudriere St Port Louis Mauritius",
    phone: "+442032861839",
    phoneHref: "tel:+442032861839",
    socialItems: [
      { href: socialLinks.facebook, icon: FacebookIcon, label: "Facebook" },
      { href: socialLinks.x, icon: XIcon, label: "X" },
      { href: socialLinks.instagram, icon: InstagramIcon, label: "Instagram" },
      { href: socialLinks.youtube, icon: YouTubeIcon, label: "YouTube" },
      { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
    ],
  },
  {
    label: "Saint Lucia",
    address:
      "Ground Floor, The South bay Building, Rodney Village, Rodney Bay, Gross-Islet, Saint Lucia. P.O box 838.",
    email: "support@achieverfx.com",
    mapQuery: "Gross-Islet Saint Lucia P.O. box 838 Castries Saint Lucia",
    phone: "+1-758-572-5128",
    phoneHref: "tel:+17585725128",
    socialItems: [
      { href: socialLinks.facebook, icon: FacebookIcon, label: "Facebook" },
      { href: socialLinks.x, icon: XIcon, label: "X" },
      { href: socialLinks.instagram, icon: InstagramIcon, label: "Instagram" },
      { href: socialLinks.youtube, icon: YouTubeIcon, label: "YouTube" },
      { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
    ],
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M14.2 8.4V6.9c0-.7.5-1.1 1.2-1.1h1.4V3.4c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v1.2H8v2.8h2.6v9.6h3.1v-9.6h2.6l.4-2.8h-3.5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.7 8.8H3.8v11.1h2.9V8.8ZM5.3 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm6.3 4.8H8.8v11.1h2.9v-5.8c0-1.6.8-2.7 2.2-2.7 1.2 0 1.8.8 1.8 2.5v6h2.9v-6.5c0-3.1-1.6-4.8-4.1-4.8-1.4 0-2.3.6-2.9 1.5V8.8Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M21.2 7.2a3 3 0 0 0-2.1-2.1C17.3 4.6 12 4.6 12 4.6s-5.3 0-7.1.5a3 3 0 0 0-2.1 2.1 31 31 0 0 0-.5 4.8c0 1.7.2 3.5.5 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.1.5 7.1.5s5.3 0 7.1-.5a3 3 0 0 0 2.1-2.1c.3-1.3.5-3.1.5-4.8s-.2-3.5-.5-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M17.3 6.8h.01" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M15.1 11 21 4h-2.6l-4.5 5.4L10.3 4H4l6.5 9.5L4 20h2.6l5.1-5.9 4 5.9H22L15.1 11Zm-2.2 1.8-.7-1L7.2 6h2l3.8 5.4.7 1 5.2 7.3h-2l-4-6.9Z" />
    </svg>
  );
}

export default function ContactUsExperience() {
  return (
    <>
      <ContactHero
        title="Get in Touch with Achiever FX"
        description="Reach the team for account questions, platform help, partnership enquiries, and general support."
      />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_92%_20%,rgba(37,99,235,0.12),transparent_26%)] [.light_&]:bg-[radial-gradient(circle_at_12%_10%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_92%_20%,rgba(37,99,235,0.1),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
          {locations.map((location, index) => (
            <FadeIn key={location.label} delay={index * 0.08}>
              <LocationSupportCard location={location} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-200/70 [.light_&]:bg-[linear-gradient(135deg,#0EA5E9_0%,#2563EB_54%,#1E40AF_100%)] [.light_&]:shadow-[0_24px_70px_rgba(37,99,235,0.22)] sm:px-10 lg:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.16),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-white">
                  Need help choosing your next step?
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300 [.light_&]:text-sky-50/90">
                  Reach out to support or review account types before registering.
                </p>
              </div>
              <Button
                asChild
                className="h-12 w-full rounded-lg px-7 text-sm sm:w-auto [.light_&]:border-white/70 [.light_&]:from-white [.light_&]:to-sky-50 [.light_&]:text-blue-700 [.light_&]:shadow-[0_14px_34px_rgba(15,23,42,0.18)] [.light_&]:hover:from-white [.light_&]:hover:to-white [.light_&]:hover:text-blue-800"
              >
                <Link href="mailto:support@achieverfinancials.com">
                  Email Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
