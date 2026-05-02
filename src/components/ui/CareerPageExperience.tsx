"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Search,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

type JobCategory = "All" | "Sales" | "Operations" | "Tech";

type JobOpening = {
  category: Exclude<JobCategory, "All">;
  description: string;
  icon: LucideIcon;
  location: string;
  title: string;
  type: string;
};

const categories: JobCategory[] = ["All", "Sales", "Operations", "Tech"];

const jobOpenings: JobOpening[] = [
  {
    category: "Sales",
    icon: Users,
    title: "Business Development Executive",
    type: "Full-time",
    location: "Dubai",
    description:
      "Build client relationships, introduce trading solutions, and support growth across active market audiences.",
  },
  {
    category: "Operations",
    icon: UserRoundCheck,
    title: "Client Support Specialist",
    type: "Full-time",
    location: "Dubai",
    description:
      "Guide clients through account, platform, and service questions with calm, clear communication.",
  },
  {
    category: "Tech",
    icon: Code2,
    title: "Platform Operations Analyst",
    type: "Full-time",
    location: "Dubai",
    description:
      "Support platform workflows, monitor operational requests, and keep trading access running smoothly.",
  },
];

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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CareerIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [16, -16],
  );

  return (
    <SectionWrapper className="overflow-hidden py-16 lg:py-20">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl border border-sky-300/15 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(4,23,42,0.96))] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,20,0.3)] backdrop-blur-md [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)] [.light_&]:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.14),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.08),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [.light_&]:opacity-[0.14]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <FadeIn>
            <div className="max-w-2xl">
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Careers
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-normal text-white sm:text-4xl lg:text-5xl [.light_&]:text-slate-950">
                Build Your Career with Achiever FX
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 [.light_&]:text-slate-600">
                Join a market-focused team where client service, platform
                discipline, and curiosity shape meaningful work in global
                financial markets.
              </p>
              <div className="mt-8">
                <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
                  <Link href="mailto:support@achieverfinancials.com?subject=Career%20Application">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#06101d] shadow-[0_28px_80px_rgba(2,8,20,0.34)] [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
            >
              <Image
                src="/company/career-modern/career-professional.webp"
                alt="Confident finance professional in a suit with a subtle blue trading chart background."
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(2,6,23,0.38)_100%)]" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function JobCard({ job, index }: { index: number; job: JobOpening }) {
  const Icon = job.icon;

  return (
    <FadeIn delay={index * 0.05}>
      <motion.article
        whileHover={{ y: -4, scale: 1.005 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Card
          variant="glow"
          className="rounded-2xl border-sky-300/14 bg-[linear-gradient(180deg,rgba(56,189,248,0.045),rgba(255,255,255,0.012)),var(--color-bg-secondary)] p-5 sm:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold tracking-normal text-white [.light_&]:text-slate-950">
                  {job.title}
                </h3>
                <span className="rounded-full border border-sky-300/18 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700">
                  {job.category}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-400 [.light_&]:text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-sky-300 [.light_&]:text-blue-600" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-300 [.light_&]:text-blue-600" />
                  {job.location}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 [.light_&]:text-slate-600">
                {job.description}
              </p>
            </div>

            <Button asChild className="min-h-12 w-full rounded-lg px-7 py-3 text-sm lg:w-auto">
              <Link
                href={`mailto:support@achieverfinancials.com?subject=${encodeURIComponent(
                  `${job.title} Application`,
                )}`}
              >
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </motion.article>
    </FadeIn>
  );
}

function OpenPositionsSection() {
  const [activeCategory, setActiveCategory] = useState<JobCategory>("All");

  const visibleJobs =
    activeCategory === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#071827_100%)] py-16 [.light_&]:bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_28%)] [.light_&]:bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.07),transparent_28%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                Hiring
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
                Open Positions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
                Explore current opportunities and send your profile to the team
                for review.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-slate-400 shadow-[0_18px_50px_rgba(2,8,20,0.12)] backdrop-blur-sm [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-600">
                <Search className="h-4 w-4 text-sky-300 [.light_&]:text-blue-600" />
                Search roles by team or location
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "min-h-10 rounded-lg border px-4 text-sm font-semibold transition-all duration-300",
                      activeCategory === category
                        ? "border-sky-300/45 bg-sky-300/12 text-sky-100 shadow-[0_0_26px_rgba(56,189,248,0.14)]"
                        : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-sky-300/28 hover:bg-white/[0.06] hover:text-white",
                      "[.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:hover:border-sky-200 [.light_&]:hover:text-blue-700",
                      activeCategory === category &&
                        "[.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-blue-700",
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5">
          {visibleJobs.map((job, index) => (
            <JobCard key={job.title} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.98),rgba(4,23,42,0.96))] px-6 py-12 text-center shadow-[0_30px_90px_rgba(2,8,20,0.32)] [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(135deg,#ffffff_0%,#f1f7ff_100%)] [.light_&]:shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.13),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.09),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.08),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4rem_4rem] [.light_&]:opacity-[0.12]" />

        <div className="relative mx-auto max-w-3xl">
          <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
            Join Achiever
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-normal text-white sm:text-4xl [.light_&]:text-slate-950">
            Join with our team right-away
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 [.light_&]:text-slate-600">
            Bring your ambition to a fintech trading environment shaped by
            service, precision, and market awareness.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild className="min-h-12 rounded-lg px-7 py-3 text-sm">
              <Link href="mailto:support@achieverfinancials.com?subject=Career%20Interest">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CareerPageExperience() {
  return (
    <>
      <CareerIntroSection />
      <OpenPositionsSection />
      <FinalCtaSection />
    </>
  );
}
