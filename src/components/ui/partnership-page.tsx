import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Handshake,
  Layers,
  LineChart,
  MonitorDot,
  Network,
  ShieldCheck,
  Trophy,
  Users2,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

interface PartnerType {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  points: string[];
  ctaLabel: string;
  accent: "blue" | "emerald" | "violet";
}

const partnerTypes: PartnerType[] = [
  {
    title: "Introducing Broker (IB)",
    description:
      "For individuals and institutions who want to introduce clients to a premium trading environment and earn ongoing commissions.",
    icon: Handshake,
    image: "/ib_program_1777279042767.png",
    points: [
      "Competitive multi-tier commission structures",
      "Real-time tracking and reporting dashboard",
      "Personalized IB support and market resources",
      "Fast and flexible payment options",
    ],
    ctaLabel: "Become an IB",
    accent: "blue",
  },
  {
    title: "Affiliate Program",
    description:
      "Designed for digital marketers, influencers, and content creators who want to monetize their traffic through a global fintech brand.",
    icon: Network,
    image: "/affiliate_program_1777279061434.png",
    points: [
      "High-conversion marketing materials",
      "CPA and hybrid reward models available",
      "Advanced tracking via professional affiliate portal",
      "Monthly payouts with dedicated manager",
    ],
    ctaLabel: "Join as Affiliate",
    accent: "violet",
  },
  {
    title: "White Label Solutions",
    description:
      "Start your own brokerage with robust infrastructure, liquidity, and platform support tailored to your brand.",
    icon: Layers,
    image: "/promotion_hero_1777279021925.png",
    points: [
      "Fully branded MT5 platform setup",
      "Deep liquidity and tight spreads",
      "Backend operations and technical support",
      "Scalable infrastructure for growing businesses",
    ],
    ctaLabel: "Explore White Label",
    accent: "blue",
  },
];

const benefits = [
  {
    title: "Transparent Reporting",
    description:
      "Access detailed analytics on referrals, conversions, and earnings in real time.",
    icon: BarChart3,
  },
  {
    title: "Global Reach",
    description:
      "Partner with a brand that serves traders across multiple continents and languages.",
    icon: Globe,
  },
  {
    title: "Advanced Tools",
    description:
      "Use professional marketing kits, banners, and widgets to improve conversion.",
    icon: MonitorDot,
  },
  {
    title: "Reliable Payouts",
    description:
      "Receive timely commission payments through multiple global payment channels.",
    icon: ShieldCheck,
  },
  {
    title: "Market Education",
    description:
      "Benefit from educational resources that help your clients trade more effectively.",
    icon: Zap,
  },
  {
    title: "Dedicated Support",
    description:
      "Work with a partnership manager focused on helping you scale your business.",
    icon: Users2,
  },
];

const accentStyles = {
  blue:
    "border-cyan-300/18 bg-cyan-400/10 text-cyan-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
  emerald:
    "border-emerald-300/18 bg-emerald-400/10 text-emerald-100 [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700",
  violet:
    "border-violet-300/18 bg-violet-400/10 text-violet-100 [.light_&]:border-violet-200 [.light_&]:bg-violet-50 [.light_&]:text-violet-700",
};

function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-cyan-300/16 bg-cyan-400/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/78 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

function PartnerProgramCard({
  accent,
  ctaLabel,
  description,
  icon: Icon,
  image,
  points,
  title,
}: PartnerType) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-[2rem] border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,14,29,0.96),rgba(4,8,18,0.98))] shadow-[0_24px_68px_rgba(2,8,20,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/26 hover:shadow-[0_30px_74px_rgba(14,165,233,0.16)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,250,255,0.95))] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(4,8,20,0.86)_100%)] [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0)_10%,rgba(15,23,42,0.46)_100%)]" />
      </div>

      <CardHeader className="p-7">
        <div
          className={cn(
            "mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border shadow-[0_0_24px_rgba(56,189,248,0.14)]",
            accentStyles[accent],
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl text-white [.light_&]:text-slate-950">
          {title}
        </CardTitle>
        <CardDescription className="mt-4 text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
          {description}
        </CardDescription>

        <div className="mt-8 space-y-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300 [.light_&]:text-sky-600" />
              <span className="text-sm leading-6 text-slate-300 [.light_&]:text-slate-600">
                {point}
              </span>
            </div>
          ))}
        </div>

        <Button asChild className="mt-9 h-12 w-full rounded-full text-sm">
          <Link href="/company/contact-us">
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
    </Card>
  );
}

export default function PartnershipPage() {
  return (
    <div className="w-full">
      <SectionWrapper id="partner-programs" className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Partner Programs</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
            Flexible partnership paths for every goal.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            Choose the model that fits your audience, sales network, or
            brokerage vision.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {partnerTypes.map((partner) => (
            <PartnerProgramCard key={partner.title} {...partner} />
          ))}
        </div>
      </SectionWrapper>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_32px_110px_rgba(2,8,20,0.3)] sm:px-8 lg:px-10 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,255,0.94))] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),transparent_34%)]" />
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.1]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionLabel>Why Us</SectionLabel>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
                Built for partners who demand excellence.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
                From advanced tracking to dedicated support, the partner
                environment is designed to help you grow with confidence.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Award Winning Support",
                    description: "Recognized for excellence in partner services.",
                    icon: Trophy,
                  },
                  {
                    title: "High Conversion Rates",
                    description: "Premium branding that clients trust.",
                    icon: LineChart,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-cyan-300/12 bg-white/[0.03] p-5 shadow-[0_18px_46px_rgba(2,8,20,0.18)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_16px_36px_rgba(37,99,235,0.08)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white [.light_&]:text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-[2rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,14,29,0.96),rgba(4,8,18,0.98))] p-6 shadow-[0_18px_48px_rgba(2,8,20,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_24px_58px_rgba(14,165,233,0.14)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_18px_40px_rgba(37,99,235,0.1)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 transition-transform duration-300 group-hover:scale-105 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white [.light_&]:text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="pb-24 pt-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] px-6 py-14 text-center shadow-[0_32px_110px_rgba(2,8,20,0.3)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,255,0.94))] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),transparent_34%)]" />

          <div className="relative mx-auto max-w-3xl">
            <SectionLabel className="justify-center">Partner With Us</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
              Ready to become an Achiever Partner?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Join our partner network and start building a scalable revenue
              channel with a team that supports the full journey.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-8 text-sm">
                <Link href="/company/contact-us">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full px-8 text-sm"
              >
                <Link href="/company/contact-us">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
