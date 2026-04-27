import Image from "next/image"; // Re-triggering image detection
import Link from "next/link";
import {
  ArrowRight,
  Gift,
  Handshake,
  Heart,
  HelpCircle,
  Laptop,
  Layers,
  LineChart,
  Megaphone,
  MonitorDot,
  Network,
  Percent,
  ShieldCheck,
  Trophy,
  Users2,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
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

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  isLarge?: boolean;
  ctaText?: string;
  icon?: LucideIcon;
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
        "group relative flex flex-col overflow-hidden border-white/10 bg-white/[0.02] transition-all hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
        isLarge ? "lg:flex-row lg:items-stretch" : "h-full"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isLarge ? "min-h-[320px] lg:w-1/2" : "aspect-[16/10]"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-transparent opacity-60" />
        {badge && (
          <div className="absolute left-6 top-6">
            <Badge className="bg-sky-500/90 px-3 py-1 text-white backdrop-blur-sm border-none">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col p-8 lg:p-10", isLarge ? "lg:w-1/2" : "")}>
        <div className="flex-1">
          {Icon && (
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <Icon className="h-6 w-6" />
            </div>
          )}
          <h3 className={cn("font-bold text-white tracking-tight", isLarge ? "text-3xl lg:text-4xl" : "text-2xl")}>
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="primary" className="w-full sm:w-auto rounded-full px-8 py-6 h-auto text-sm font-bold shadow-[0_10px_20px_var(--color-brand-primary)/0.2]">
            {ctaText}
          </Button>
          <Link href="#" className="flex items-center text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">
            Terms & Conditions <HelpCircle className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default function PromotionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-bg-dark">
        {/* Hero Section */}
        <section className="relative flex min-h-[60svh] w-full items-center overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="/promotions_hero_blue_1777280213507.png"
              alt="Promotions Background"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040814]/80 via-[#040814]/90 to-[#040814]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100">
              Our Programs
            </Badge>
            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Maximize your <br />
              <span className="text-sky-500">trading potential.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Take advantage of our premium trading bonuses and promotional offers designed to give you a head start in the global markets.
            </p>
          </div>
        </section>

        {/* Main Promotions Grid */}
        <SectionWrapper className="py-20">
          <div className="grid gap-8">
            {/* Featured Large Promotions */}
            <PromotionCard
              isLarge
              badge="MOST POPULAR"
              title="100% Trading Bonus"
              description="Double your trading power with our 100% deposit bonus. Available on all initial deposits, allowing you to trade larger volumes and explore more opportunities."
              image="/deposit_bonus_blue_1777280234146.png"
              ctaText="Claim 100% Bonus"
              icon={Percent}
            />

            <PromotionCard
              isLarge
              badge="WELCOME OFFER"
              title="$100 No Deposit Bonus"
              description="Start trading without risking your own capital. Open a new account today and receive a $100 welcome bonus to kickstart your journey with Achiever."
              image="/ndb_bonus_1777279802446.png"
              ctaText="Claim $100 Welcome"
              icon={Wallet}
            />

            {/* Secondary Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PromotionCard
                title="Refer a Friend"
                description="Share your trading experience. For every friend you refer who joins and trades, we'll credit $50 to your account."
                image="/promotion_hero_1777279021925.png"
                ctaText="Refer Now"
                icon={Users2}
              />
              <PromotionCard
                title="Loyalty Rewards"
                description="Earn points for every lot you trade. Redeem your loyalty points for cash rebates, gadgets, or trading credits."
                image="/loyalty_diamond_1777279822785.png"
                ctaText="View Rewards"
                icon={Trophy}
              />
              <PromotionCard
                title="Free VPS Hosting"
                description="Enjoy ultra-low latency and 24/7 uptime for your expert advisors with our complimentary high-speed VPS service."
                image="/affiliate_program_1777279061434.png"
                ctaText="Request VPS"
                icon={Laptop}
              />
              <PromotionCard
                title="Zero Deposit Fees"
                description="We believe in maximum value. That's why we cover all your deposit and withdrawal fees across all payment methods."
                image="/ib_program_1777279042767.png"
                ctaText="Learn More"
                icon={ShieldCheck}
              />
              <PromotionCard
                title="Trading Contests"
                description="Join our monthly trading challenges and compete against traders worldwide for massive cash prize pools."
                image="/promotions_hero_blue_1777280213507.png"
                ctaText="Join Contest"
                icon={LineChart}
              />
              <PromotionCard
                title="VIP Program"
                description="Get personalized account management, exclusive market insights, and tailored trading conditions with our VIP tier."
                image="/promotion_hero_1777279021925.png"
                ctaText="Upgrade Now"
                icon={Trophy}
              />
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ/Trust Section */}
        <section className="bg-sky-950/20 py-24">
          <SectionWrapper>
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white">
                  Why choose our <br />
                  <span className="text-sky-500">promotional offers?</span>
                </h2>
                <p className="mt-6 text-lg text-slate-400">
                  Our promotions are designed with the trader in mind. We provide clear terms, reliable payouts, and genuine value to help you succeed.
                </p>
                <div className="mt-10 space-y-6">
                  {[
                    "Transparent terms and conditions with no hidden clauses.",
                    "Direct integration into your trading account dashboard.",
                    "Available across all our trading platforms and account types.",
                    "Dedicated support team to help you maximize your bonus."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/promotions_hero_blue_1777280213507.png"
                  alt="Trust"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-sky-900/20 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/10 p-6 backdrop-blur-md">
                    <ShieldCheck className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* Final CTA */}
        <SectionWrapper className="py-24">
          <div className="relative overflow-hidden rounded-[3rem] bg-brand-primary px-8 py-24 text-center text-white shadow-2xl lg:py-32">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight sm:text-6xl">
                Start your journey today.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-sky-50">
                Open an account in minutes and claim your first bonus. The markets are waiting for you.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" className="w-full sm:w-auto bg-surface !text-primary hover:bg-surface-secondary rounded-full px-12 py-7 h-auto text-lg font-bold shadow-xl">
                  Open Account
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/40 bg-transparent text-white hover:bg-white/10 rounded-full px-12 py-7 h-auto text-lg">
                  View Account Types
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
