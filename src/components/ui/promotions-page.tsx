import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  Laptop,
  LineChart,
  Percent,
  ShieldCheck,
  Trophy,
  Users2,
  Wallet,
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

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  isLarge?: boolean;
  ctaText?: string;
  icon?: LucideIcon;
}

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

function PromotionCard({
  title,
  description,
  image,
  badge,
  isLarge = false,
  ctaText = "Get Started",
  icon: Icon,
}: PromotionCardProps) {
  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2rem] border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,14,29,0.96),rgba(4,8,18,0.98))] shadow-[0_24px_68px_rgba(2,8,20,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/26 hover:shadow-[0_30px_74px_rgba(14,165,233,0.16)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,250,255,0.95))] [.light_&]:hover:border-sky-200 [.light_&]:hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]",
        isLarge ? "lg:flex-row lg:items-stretch" : "h-full",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isLarge ? "min-h-[320px] lg:w-1/2" : "aspect-[16/10]",
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={isLarge ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(4,8,20,0.86)_100%)] [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0)_10%,rgba(15,23,42,0.46)_100%)]" />
        {badge ? (
          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-sky-200/40 bg-sky-500/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)] backdrop-blur-sm">
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      <CardHeader className={cn("flex flex-1 flex-col p-7 lg:p-9", isLarge ? "lg:w-1/2" : "")}>
        <div className="flex-1">
          {Icon ? (
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.14)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
              <Icon className="h-6 w-6" />
            </div>
          ) : null}
          <CardTitle className={cn("text-white [.light_&]:text-slate-950", isLarge ? "text-3xl lg:text-4xl" : "text-2xl")}>
            {title}
          </CardTitle>
          <CardDescription className="mt-4 text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
            {description}
          </CardDescription>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Button className="h-12 w-full rounded-full px-7 text-sm sm:w-auto">
            {ctaText}
          </Button>
          <Link
            href="#promotion-terms"
            className="inline-flex items-center text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-100 [.light_&]:text-slate-600 [.light_&]:hover:text-sky-700"
          >
            Terms
            <HelpCircle className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}

const promotionCards = [
  {
    isLarge: true,
    badge: "Most Popular",
    title: "100% Trading Bonus",
    description:
      "Double your trading power with our 100% deposit bonus. Available on initial deposits so you can explore more market opportunities.",
    image: "/deposit_bonus_blue_1777280234146.png",
    ctaText: "Claim 100% Bonus",
    icon: Percent,
  },
  {
    isLarge: true,
    badge: "Welcome Offer",
    title: "$100 No Deposit Bonus",
    description:
      "Start trading without risking your own capital. Open a new account and receive a $100 welcome bonus to begin with Achiever.",
    image: "/ndb_bonus_1777279802446.png",
    ctaText: "Claim $100 Welcome",
    icon: Wallet,
  },
];

const secondaryPromotions = [
  {
    title: "Refer a Friend",
    description:
      "Share your trading experience. For every friend you refer who joins and trades, we will credit $50 to your account.",
    image: "/promotion_hero_1777279021925.png",
    ctaText: "Refer Now",
    icon: Users2,
  },
  {
    title: "Loyalty Rewards",
    description:
      "Earn points for every lot you trade. Redeem loyalty points for cash rebates, gadgets, or trading credits.",
    image: "/loyalty_diamond_1777279822785.png",
    ctaText: "View Rewards",
    icon: Trophy,
  },
  {
    title: "Free VPS Hosting",
    description:
      "Use ultra-low latency and 24/7 uptime for expert advisors with complimentary high-speed VPS service.",
    image: "/affiliate_program_1777279061434.png",
    ctaText: "Request VPS",
    icon: Laptop,
  },
  {
    title: "Zero Deposit Fees",
    description:
      "We cover deposit and withdrawal fees across supported payment methods so more of your funds stay available.",
    image: "/ib_program_1777279042767.png",
    ctaText: "Learn More",
    icon: ShieldCheck,
  },
  {
    title: "Trading Contests",
    description:
      "Join monthly trading challenges and compete with traders worldwide for cash prize pools.",
    image: "/promotions_hero_blue_1777280213507.png",
    ctaText: "Join Contest",
    icon: LineChart,
  },
  {
    title: "VIP Program",
    description:
      "Get personalized account management, exclusive market insights, and tailored trading conditions with our VIP tier.",
    image: "/promotion_hero_1777279021925.png",
    ctaText: "Upgrade Now",
    icon: Trophy,
  },
];

const trustPoints = [
  "Transparent terms and conditions with no hidden clauses.",
  "Direct integration into your trading account dashboard.",
  "Available across trading platforms and account types.",
  "Dedicated support to help you make the most of your bonus.",
];

export default function PromotionsPage() {
  return (
    <div className="w-full">
      <SectionWrapper id="featured-promotions" className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Featured Offers</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
            Trading bonuses with clearer value.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            Pick from welcome offers, loyalty rewards, VPS access, and ongoing
            account benefits designed for active traders.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {promotionCards.map((promotion) => (
            <PromotionCard key={promotion.title} {...promotion} />
          ))}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondaryPromotions.map((promotion) => (
              <PromotionCard key={promotion.title} {...promotion} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section
        id="promotion-terms"
        className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] px-6 py-12 shadow-[0_32px_110px_rgba(2,8,20,0.3)] sm:px-8 lg:px-10 [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,255,0.94))] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),transparent_34%)]" />
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.8rem_4.8rem] [.light_&]:opacity-[0.1]" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionLabel>Why These Offers</SectionLabel>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
                Promotional value that stays practical.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg [.light_&]:text-slate-600">
                Our offers are built around clear access, reliable support, and
                account-level usefulness rather than confusing fine print.
              </p>

              <div className="mt-8 space-y-4">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-400/10 text-cyan-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-7 text-slate-300 [.light_&]:text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_70px_rgba(2,8,20,0.28)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_18px_44px_rgba(37,99,235,0.1)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/promotions_hero_blue_1777280213507.png"
                  alt="Promotion account dashboard"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,20,0.18),rgba(2,8,20,0.78))] [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(15,23,42,0.42))]" />
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/12 bg-[#050914]/86 p-5 backdrop-blur-md [.light_&]:border-white/70 [.light_&]:bg-white/88">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-100 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white [.light_&]:text-slate-950">
                      Account-ready offers
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400 [.light_&]:text-slate-600">
                      Bonus access, reward programs, and support in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="pb-24 pt-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,28,0.94),rgba(4,8,18,0.98))] px-6 py-14 text-center shadow-[0_32px_110px_rgba(2,8,20,0.3)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,255,0.94))] [.light_&]:shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.7),transparent_34%)]" />

          <div className="relative mx-auto max-w-3xl">
            <SectionLabel className="justify-center">Get Started</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
              Start your journey today.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
              Open an account in minutes and claim the promotion that fits your
              trading plan.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-8 text-sm">
                <Link href="/markets/account-types">
                  Open Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full px-8 text-sm"
              >
                <Link href="/company/contact-us">Talk to Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
