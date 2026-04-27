import Image from "next/image"; // Re-triggering image detection
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Handshake,
  Layers,
  LineChart,
  Megaphone,
  MonitorDot,
  Network,
  PieChart,
  ShieldCheck,
  Target,
  Trophy,
  Users2,
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
      "Start your own brokerage with our robust infrastructure, liquidity, and platform support tailored to your brand.",
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
    description: "Access detailed analytics on your referrals, conversions, and earnings in real-time.",
    icon: BarChart3,
  },
  {
    title: "Global Reach",
    description: "Partner with a brand that serves traders across multiple continents and languages.",
    icon: Globe,
  },
  {
    title: "Advanced Tools",
    description: "Use our professional marketing kits, banners, and widgets to boost your conversion rates.",
    icon: MonitorDot,
  },
  {
    title: "Reliable Payouts",
    description: "Timely and secure commission payments through multiple global payment channels.",
    icon: ShieldCheck,
  },
  {
    title: "Market Education",
    description: "Benefit from our educational resources to help your clients trade more effectively.",
    icon: Zap,
  },
  {
    title: "Dedicated Support",
    description: "Work with a partnership manager focused on helping you scale your business.",
    icon: Users2,
  },
];

const accentStyles = {
  blue: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

export default function PromotionPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-1 flex-col overflow-hidden bg-bg-dark">
        {/* Hero Section */}
        <section className="relative flex min-h-[85svh] w-full items-center overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <Image
            src="/promotion_hero_1777279021925.png"
            alt="Promotion and Partnership Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.76)_48%,rgba(2,6,23,0.4)_100%),linear-gradient(180deg,rgba(2,6,23,0.4)_0%,rgba(2,6,23,0.3)_48%,rgba(4,8,20,0.98)_100%)]" />
          
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100">
                Partnerships
              </Badge>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Scale your success <br />
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">with Achiever.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Join our global ecosystem of partners. Whether you are an individual influencer or a financial institution, we provide the tools and infrastructure to help you grow.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto h-14 rounded-full px-8 text-base">
                  Start Partnering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10">
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <SectionWrapper className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border-emerald-300/25 bg-emerald-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-emerald-100">
              Our Programs
            </Badge>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Flexible partnership paths for every goal.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {partnerTypes.map((partner) => (
              <Card key={partner.title} className="group relative overflow-hidden border-white/10 bg-white/[0.02] transition-all hover:bg-white/[0.04]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814] to-transparent opacity-60" />
                </div>
                <CardHeader className="p-8">
                  <div className={cn("mb-6 flex h-12 w-12 items-center justify-center rounded-xl border", accentStyles[partner.accent])}>
                    <partner.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-white">{partner.title}</CardTitle>
                  <CardDescription className="mt-4 text-base leading-7 text-slate-400">
                    {partner.description}
                  </CardDescription>
                  <div className="mt-8 space-y-3">
                    {partner.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />
                        <span className="text-sm text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-10 w-full rounded-xl py-6">
                    {partner.ctaLabel}
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Benefits Grid */}
        <section className="relative w-full bg-slate-950 py-24 lg:py-32">
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4rem_4rem]" />
          <SectionWrapper>
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Badge className="border-violet-300/25 bg-violet-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-violet-100">
                  Why Us
                </Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Built for partners <br />
                  who demand excellence.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  We provide a high-performance environment where your success is our priority. From advanced tracking to dedicated support, we cover all the bases.
                </p>
                <div className="mt-10 grid gap-6">
                   <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-colors hover:border-white/10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                        <Trophy className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Award Winning Support</h4>
                        <p className="text-sm text-slate-500">Recognized for excellence in partner services.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-colors hover:border-white/10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                        <LineChart className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">High Conversion Rates</h4>
                        <p className="text-sm text-slate-500">Premium branding that clients trust.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="group rounded-2xl border border-white/10 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-sky-400 transition-transform group-hover:scale-110">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* CTA Section */}
        <SectionWrapper className="py-24 lg:py-32">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary to-brand-secondary px-8 py-20 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to become an Achiever Partner?
              </h2>
              <p className="mt-6 text-xl text-sky-100">
                It only takes a few minutes to get started. Join thousands of partners worldwide and start earning today.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-surface text-brand-primary hover:bg-surface-secondary h-14 rounded-full px-10 text-base font-bold">
                  Register Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 h-14 rounded-full px-10 text-base">
                  Talk to an Expert
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
