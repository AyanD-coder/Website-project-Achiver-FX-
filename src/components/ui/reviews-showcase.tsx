"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { useDeferredMount } from "@/lib/useDeferredMount";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { usePageVisibility } from "@/lib/usePageVisibility";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export interface Review {
  name: string;
  role: string;
  text: string;
  avatar?: string;
  avatarTone?: "blue" | "cyan" | "emerald" | "amber" | "rose" | "violet";
  rating: number;
}

interface ReviewsShowcaseProps {
  reviews: Review[];
  autoplay?: boolean;
  className?: string;
  reviewsUrl?: string;
}

const previewText = (text: string, maxLength = 118) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}...` : text;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const avatarTones: Record<NonNullable<Review["avatarTone"]>, string> = {
  amber: "from-amber-400 to-orange-500 text-white",
  blue: "from-blue-500 to-sky-400 text-white",
  cyan: "from-cyan-400 to-blue-500 text-white",
  emerald: "from-emerald-400 to-teal-500 text-white",
  rose: "from-rose-400 to-pink-500 text-white",
  violet: "from-violet-500 to-indigo-500 text-white",
};

function ReviewAvatar({
  review,
  size,
}: {
  review: Review;
  size: "featured" | "compact";
}) {
  const dimensions =
    size === "featured"
      ? {
          className: "h-[4.5rem] w-[4.5rem] rounded-2xl text-xl",
          imageSize: 72,
          sizes: "72px",
        }
      : {
          className: "h-13 w-13 rounded-2xl text-sm",
          imageSize: 52,
          sizes: "52px",
        };

  if (review.avatar) {
    return (
      <Image
        src={review.avatar}
        alt={review.name}
        width={dimensions.imageSize}
        height={dimensions.imageSize}
        quality={75}
        sizes={dimensions.sizes}
        className={cn(
          dimensions.className,
          "border border-white/10 object-cover [.light_&]:border-gray-200",
        )}
      />
    );
  }

  return (
    <div
      aria-label={review.name}
      className={cn(
        dimensions.className,
        "flex shrink-0 items-center justify-center border border-white/10 bg-gradient-to-br font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] [.light_&]:border-gray-200",
        avatarTones[review.avatarTone ?? "blue"],
      )}
    >
      {getInitials(review.name)}
    </div>
  );
}

export function ReviewsShowcase({
  reviews,
  autoplay = true,
  className,
  reviewsUrl = "https://www.google.com/search?q=Achiever+FX+reviews",
}: ReviewsShowcaseProps) {
  const [active, setActive] = React.useState(0);
  const { ref, shouldMount: isInView } = useDeferredMount<HTMLDivElement>({
    once: false,
    rootMargin: "180px 0px",
  });
  const isCompactViewport = useMediaQuery("(max-width: 1023px)");
  const isPageVisible = usePageVisibility();
  const shouldAutoplay = autoplay && !isCompactViewport;

  React.useEffect(() => {
    if (!shouldAutoplay || reviews.length < 2 || !isInView || !isPageVisible) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isInView, isPageVisible, reviews.length, shouldAutoplay]);

  const activeReview = React.useMemo(
    () => reviews[active] ?? reviews[0],
    [active, reviews],
  );
  const averageRating = React.useMemo(
    () =>
      (
        reviews.reduce((total, review) => total + review.rating, 0) /
        reviews.length
      ).toFixed(1),
    [reviews],
  );

  if (!reviews.length) {
    return null;
  }

  const handleNext = () => {
    setActive((current) => (current + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActive((current) => (current - 1 + reviews.length) % reviews.length);
  };

  return (
    <SectionWrapper
      id="reviews"
      className={cn("relative overflow-hidden bg-transparent", className)}
    >
      <div
        ref={ref}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-12 flex flex-col items-center justify-center text-center md:mb-16">
          <div className="inline-flex rounded-full border border-brand-primary/25 bg-white/5 px-4 py-1 text-sm font-medium text-brand-glow backdrop-blur-sm [.light_&]:border-blue-200 [.light_&]:bg-white [.light_&]:text-blue-700">
            KNOW WHAT PEOPLE SAY ABOUT US!
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl [.light_&]:text-[#111827]">
            Google Reviews
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary md:text-lg [.light_&]:text-gray-600">
            Real feedback from traders who trust Achiever FX for platform reliability, transparent service, and
            responsive support.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-slate-700">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#FFB400] text-[#FFB400]" />
                ))}
              </div>
              <span className="font-semibold">{averageRating}/5 Google rating</span>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-text-secondary [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-slate-600">
              {reviews.length}+ trusted client reviews
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <Card className="border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
            <CardHeader className="flex flex-col gap-5 border-b border-white/10 p-6 sm:flex-row sm:items-start sm:justify-between [.light_&]:border-gray-200">
              <div className="flex items-center gap-4">
                <ReviewAvatar review={activeReview} size="featured" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-glow [.light_&]:text-blue-600">
                    Featured Review
                  </p>
                  <CardTitle className="mt-2 text-2xl sm:text-3xl">{activeReview.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-text-secondary [.light_&]:text-gray-600">
                    {activeReview.role}
                  </CardDescription>
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-glow [.light_&]:border-gray-200 [.light_&]:bg-slate-50 [.light_&]:text-blue-600">
                <Quote className="h-5 w-5" />
              </div>
            </CardHeader>

            <CardContent className="space-y-6 p-6">
              <div className="flex gap-1">
                {Array.from({ length: activeReview.rating }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-[#FFB400] text-[#FFB400]" />
                ))}
              </div>

              <p className="text-lg leading-8 text-white/90 [.light_&]:text-slate-700 md:text-[1.35rem]">
                &ldquo;{activeReview.text}&rdquo;
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 [.light_&]:border-gray-200 [.light_&]:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-glow [.light_&]:text-blue-600">Rating</p>
                  <p className="mt-2 text-xl font-semibold text-white [.light_&]:text-slate-900">{activeReview.rating}.0 / 5</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 [.light_&]:border-gray-200 [.light_&]:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-glow [.light_&]:text-blue-600">Source</p>
                  <p className="mt-2 text-xl font-semibold text-white [.light_&]:text-slate-900">Google</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 [.light_&]:border-gray-200 [.light_&]:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-glow [.light_&]:text-blue-600">Focus</p>
                  <p className="mt-2 text-xl font-semibold text-white [.light_&]:text-slate-900">Trust</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-6 [.light_&]:border-gray-200">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-text-secondary [.light_&]:border-gray-200 [.light_&]:bg-slate-50 [.light_&]:text-slate-600">
                <span>Review {active + 1}</span>
                <span className="h-1 w-1 rounded-full bg-white/30 [.light_&]:bg-slate-300" />
                <span>{reviews.length} total</span>
              </div>

              <div className="flex gap-3">
                <button
                  suppressHydrationWarning
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-brand-glow/40 hover:bg-white/10 [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-[#111827] [.light_&]:shadow-[0_6px_20px_rgba(0,0,0,0.06)] [.light_&]:hover:border-blue-300 [.light_&]:hover:bg-blue-50"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  suppressHydrationWarning
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-brand-glow/40 hover:bg-white/10 [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-[#111827] [.light_&]:shadow-[0_6px_20px_rgba(0,0,0,0.06)] [.light_&]:hover:border-blue-300 [.light_&]:hover:bg-blue-50"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </CardFooter>

            <div className="border-t border-white/10 p-6 [.light_&]:border-gray-200">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-glow [.light_&]:text-blue-600">
                    Trusted Feedback
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white [.light_&]:text-[#111827]">
                    Read more on Google
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary [.light_&]:text-gray-600">
                    Browse the full review stream in a simpler, faster layout with no heavy stacked animations.
                  </p>
                </div>

                <Button
                  asChild
                  variant="primary"
                  className="w-full shrink-0 rounded-full px-8 whitespace-nowrap sm:w-auto sm:min-w-[220px]"
                >
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View all reviews"
                    className="inline-flex items-center justify-center"
                  >
                    View All Reviews
                    <ExternalLink className="ml-2 h-4 w-4 shrink-0" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid gap-4">
            {reviews.map((review, index) => {
              const isActive = index === active;

              return (
                <button
                  key={`${review.name}-${review.role}`}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActive(index)}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-brand-glow focus:ring-offset-2 focus:ring-offset-bg-dark",
                    isActive
                      ? "border-brand-primary/40 bg-white/[0.06] shadow-[0_20px_45px_rgba(14,165,233,0.14)] [.light_&]:border-blue-200 [.light_&]:bg-white [.light_&]:shadow-[0_12px_30px_rgba(37,99,235,0.10)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:hover:border-blue-200 [.light_&]:hover:bg-slate-50",
                  )}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-3">
                    <ReviewAvatar review={review} size="compact" />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white [.light_&]:text-[#111827]">{review.name}</p>
                          <p className="mt-1 text-xs text-brand-glow [.light_&]:text-blue-600">{review.role}</p>
                        </div>
                        <div className="flex shrink-0 gap-0.5">
                          {Array.from({ length: review.rating }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-3.5 w-3.5 fill-[#FFB400] text-[#FFB400]" />
                          ))}
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-text-secondary [.light_&]:text-gray-600">
                        &ldquo;{previewText(review.text)}&rdquo;
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ReviewsShowcase;
