"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import BrandLogo from "@/components/ui/brand-logo";
import ThemeSwitch from "@/components/ui/theme-switch";

interface NavLinkItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  href?: string;
  items?: NavLinkItem[];
}

interface NavbarProps {
  solidLightModeAtTop?: boolean;
}

const navData: NavGroup[] = [
  {
    title: "Markets",
    items: [
      { label: "Overview", href: "/markets/market-overview" },
      { label: "Account Types", href: "/markets/account-types" },
      { label: "Forex", href: "/markets/forex" },
      { label: "Crypto", href: "/markets/crypto" },
      { label: "Indices", href: "/markets/indices" },
      { label: "Equities", href: "/markets/equities" },
      { label: "Commodities", href: "/markets/commodities" },
      { label: "Precious Metals", href: "/markets/precious-metals" },
      { label: "Energies", href: "/markets/energies" },
      { label: "Shares", href: "/markets/shares" },
    ]
  },
  {
    title: "Platform",
    items: [
      { label: "MetaTrader 5", href: "/platform/metatrader-5" },
      { label: "RTX 5 Platform", href: "/platform" },
      { label: "Achiever App", href: "/platform/achiever-app" },
      { label: "Achiever Connect", href: "/platform/achiever-connect" },
      { label: "Achiever Web Trader", href: "/platform/achiever-web-trader" },
    ]
  },
  {
    title: "Discover",
    items: [
      { label: "Education", href: "/discover/education" },
      { label: "Blogs", href: "/discover/blogs" },
      { label: "News & Analysis", href: "/discover/analysis-report" },
      { label: "Trading Tools", href: "/discover/trading-tools" },
      { label: "Economic Calendar", href: "/discover/economic-calendar" },
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Career", href: "/company/career" },
      { label: "Legal Documents", href: "/company/legal-documents" },
      { label: "Customer Protection", href: "/company/customer-protection" },
      { label: "Contact Us", href: "/company/contact-us" },
    ]
  },
  {
    title: "Partnership",
    href: "/partner",
  },
  {
    title: "Promotions",
    href: "/promotions",
  }
];

function NavItem({
  title,
  href,
  items,
  isMobile = false,
  isScrolled = false,
  solidLightModeAtTop = false,
  onClick,
}: {
  title: string;
  href?: string;
  items?: NavLinkItem[];
  isMobile?: boolean;
  isScrolled?: boolean;
  solidLightModeAtTop?: boolean;
  onClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Boolean(items?.length);

  if (isMobile) {
    if (!hasDropdown && href) {
      return (
        <div className="flex flex-col border-b border-white/5 pb-2">
          <Link
            href={href}
            onClick={onClick}
            className="py-2 text-base font-medium text-text-primary transition-colors hover:text-brand-glow [.light_&]:text-slate-700 [.light_&]:hover:text-blue-700"
          >
            {title}
          </Link>
        </div>
      );
    }

    return (
      <div className="flex flex-col border-b border-white/5 pb-2">
        <button
          suppressHydrationWarning
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between py-2 text-base font-medium text-text-primary transition-colors hover:text-brand-glow [.light_&]:text-slate-700 [.light_&]:hover:text-blue-700"
          aria-expanded={isOpen}
        >
          {title}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "mt-2 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 rounded-xl bg-white/[0.03] p-2 backdrop-blur-xl">
            {items?.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClick}
                className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-blue-400 [.light_&]:text-slate-700 [.light_&]:hover:bg-blue-50 [.light_&]:hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!hasDropdown && href) {
    return (
      <Link
        href={href}
        className={`py-6 text-sm font-medium text-text-secondary transition-colors hover:text-white ${
          isScrolled
            ? "[.light_&]:text-slate-700 [.light_&]:hover:text-[#111827]"
            : solidLightModeAtTop
              ? "[.light_&]:text-slate-700 [.light_&]:hover:text-[#111827]"
              : "[.light_&]:text-white/90 [.light_&]:hover:text-white"
        }`}
      >
        {title}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button
        suppressHydrationWarning
        className={`flex items-center gap-1 py-6 text-sm font-medium text-text-secondary transition-colors group-hover:text-white ${
          isScrolled
            ? "[.light_&]:text-slate-700 [.light_&]:group-hover:text-[#111827]"
            : solidLightModeAtTop
              ? "[.light_&]:text-slate-700 [.light_&]:group-hover:text-[#111827]"
              : "[.light_&]:text-white/90 [.light_&]:group-hover:text-white"
        }`}
      >
        {title}
        <ChevronDown
          size={14}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </button>

      <div className="pointer-events-none absolute left-0 top-full z-50 w-64 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-[#0B0F19]/80 p-2 shadow-xl backdrop-blur-xl [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {items?.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-blue-400 [.light_&]:text-slate-700 [.light_&]:hover:bg-blue-50 [.light_&]:hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar({
  solidLightModeAtTop = false,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const syncScrollState = () => {
      frameId = 0;
      const nextScrolled = window.scrollY > 10;
      setIsScrolled((current) =>
        current === nextScrolled ? current : nextScrolled,
      );
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/5 bg-bg-dark/80 py-2 backdrop-blur-md [.light_&]:border-gray-200 [.light_&]:bg-white/88 [.light_&]:shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
          : `border-transparent bg-transparent py-4 ${
              solidLightModeAtTop
                ? "[.light_&]:border-gray-200 [.light_&]:bg-white/92 [.light_&]:shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
                : "[.light_&]:bg-transparent"
            }`
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <BrandLogo
            className={`w-[148px] min-[380px]:w-[170px] sm:w-[200px] xl:w-[228px] ${
              isScrolled
                ? "[.light_&]:brightness-[0.16] [.light_&]:contrast-[1.35] [.light_&]:drop-shadow-[0_4px_16px_rgba(37,99,235,0.12)]"
                : solidLightModeAtTop
                  ? "[.light_&]:brightness-[0.16] [.light_&]:contrast-[1.35] [.light_&]:drop-shadow-[0_4px_16px_rgba(37,99,235,0.12)]"
                  : "[.light_&]:brightness-[1.18] [.light_&]:contrast-[1.08] [.light_&]:drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-8">
          {navData.map((menu) => (
            <NavItem
              key={menu.title}
              title={menu.title}
              href={menu.href}
              items={menu.items}
              isScrolled={isScrolled}
              solidLightModeAtTop={solidLightModeAtTop}
            />
          ))}
        </nav>

        <div className="relative z-50 hidden items-center gap-3 xl:flex">
          <ThemeSwitch />
          <Button variant="outline" className="px-5 py-2.5 text-sm">
            Login
          </Button>
          <Button asChild variant="primary" className="px-5 py-2.5 text-sm">
            <Link href="/register">Register</Link>
          </Button>
        </div>

        <button
          suppressHydrationWarning
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text-secondary transition-colors hover:text-white xl:hidden [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-600 [.light_&]:hover:text-slate-900"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute left-0 right-0 top-full flex max-h-[calc(100svh-4rem)] w-full flex-col gap-6 overflow-y-auto border-b border-white/5 bg-bg-secondary/95 p-4 shadow-2xl backdrop-blur-xl sm:p-6 xl:hidden [.light_&]:border-gray-200 [.light_&]:bg-white/96 [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <nav className="flex flex-col gap-4">
            {navData.map((menu) => (
              <NavItem
                key={menu.title}
                title={menu.title}
                href={menu.href}
                items={menu.items}
                isMobile
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-white/5 pt-6 [.light_&]:border-gray-200">
            <ThemeSwitch />
            <Button variant="outline" size="lg" className="w-full">
              Login
            </Button>
            <Button asChild variant="primary" size="lg" className="w-full">
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                Register
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
