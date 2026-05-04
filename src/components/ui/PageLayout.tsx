import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { cn } from "@/lib/utils";

interface PageHeroAction {
  href: string;
  label: string;
  variant?: "primary" | "outline";
}

interface PageHeroStat {
  label: string;
  value: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  imageAlt?: string;
  imageSrc?: string;
  actions?: PageHeroAction[];
  stats?: PageHeroStat[];
  children?: ReactNode;
}

interface PageLayoutProps {
  hero?: PageHeroProps;
  children: ReactNode;
  className?: string;
}

function ImageHero({ hero }: { hero: PageHeroProps & { imageSrc: string } }) {
  return (
    <section className="relative flex min-h-[72svh] w-full items-end overflow-hidden px-4 pb-10 pt-28 sm:min-h-[78svh] sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_48%,rgba(2,6,23,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.36)_0%,rgba(2,6,23,0.34)_48%,rgba(4,8,20,0.96)_100%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:4.5rem_4.5rem]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          {hero.eyebrow ? (
            <Badge className="border-sky-300/25 bg-sky-300/12 px-4 py-1.5 uppercase tracking-[0.2em] text-sky-100">
              {hero.eyebrow}
            </Badge>
          ) : null}

          <h1 className="mt-5 max-w-full text-3xl font-semibold leading-[1.06] tracking-normal text-white min-[380px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          {hero.description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76 sm:text-base sm:leading-8 lg:text-lg">
              {hero.description}
            </p>
          ) : null}

          {hero.actions?.length || hero.children ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hero.actions?.map((action) => (
                <Button
                  key={`${action.href}-${action.label}`}
                  asChild
                  variant={action.variant === "outline" ? "outline" : "primary"}
                  className={cn(
                    "min-h-12 w-full rounded-lg px-6 py-3 text-sm sm:w-auto",
                    action.variant === "outline" &&
                      "border-white/20 bg-white/10 text-white hover:bg-white/16 hover:text-white",
                  )}
                >
                  <Link
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {action.label}
                    {action.variant === "outline" ? null : (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                </Button>
              ))}
              {hero.children}
            </div>
          ) : null}

          {hero.stats?.length ? (
            <div className="mt-8 grid max-w-2xl gap-3 min-[520px]:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_14px_34px_rgba(2,8,20,0.2)] backdrop-blur-md"
                >
                  <p className="text-lg font-semibold tracking-normal text-white sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/64">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TextHero({ hero }: { hero: PageHeroProps }) {
  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-10 pt-12 text-center sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
        {hero.eyebrow ? (
          <span className="mb-5 inline-flex items-center rounded-full border border-brand-glow/20 bg-brand-glow/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-glow [.light_&]:border-brand-primary/20 [.light_&]:bg-brand-primary/8 [.light_&]:text-brand-primary">
            {hero.eyebrow}
          </span>
        ) : null}

        <h1 className="mt-4 bg-gradient-to-b from-text-primary via-text-primary/90 to-text-primary/60 bg-clip-text pb-1 text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl [.light_&]:from-[#111827] [.light_&]:via-[#1e3a5f] [.light_&]:to-brand-primary">
          {hero.title}
        </h1>

        {hero.description ? (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-text-secondary [.light_&]:text-slate-600 sm:text-base sm:leading-8 md:text-lg">
            {hero.description}
          </p>
        ) : null}

        {hero.children ? (
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {hero.children}
          </div>
        ) : null}
      </div>

      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-6 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-brand-glow/20 to-transparent [.light_&]:via-brand-primary/15"
      />
    </>
  );
}

export default function PageLayout({
  hero,
  children,
  className,
}: PageLayoutProps) {
  const hasImageHero = Boolean(hero?.imageSrc);

  return (
    <>
      <Navbar solidLightModeAtTop={!hasImageHero} />

      <main
        className={cn(
          "relative flex min-h-screen flex-1 flex-col overflow-hidden",
          hasImageHero ? "" : "pt-24",
          className,
        )}
        style={{ background: "var(--page-background)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,var(--color-brand-glow)/0.14,transparent_70%)] [.light_&]:bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,var(--color-brand-primary)/0.10,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 -z-10 h-[min(360px,100vw)] w-[min(360px,100vw)] bg-[radial-gradient(circle,var(--color-brand-primary)/0.10,transparent_68%)] [.light_&]:bg-[radial-gradient(circle,var(--color-brand-secondary)/0.07,transparent_68%)]"
        />

        {hero?.imageSrc ? (
          <ImageHero hero={{ ...hero, imageSrc: hero.imageSrc }} />
        ) : hero ? (
          <TextHero hero={hero} />
        ) : null}

        <div className="relative z-10 flex w-full flex-1 flex-col">{children}</div>
      </main>

      <Footer />
    </>
  );
}
