"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export interface Review {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

interface ReviewsShowcaseProps {
  reviews: Review[];
  autoplay?: boolean;
  className?: string;
  reviewsUrl?: string;
}

export function ReviewsShowcase({
  reviews,
  autoplay = true,
  className,
  reviewsUrl = "https://www.google.com/search?q=Achiever+FX+reviews",
}: ReviewsShowcaseProps) {
  const [active, setActive] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  const rotations = React.useMemo(
    () => reviews.map((_, index) => ((index * 7) % 21) - 10),
    [reviews],
  );
  const featuredReviews = React.useMemo(() => reviews.slice(0, 3), [reviews]);

  React.useEffect(() => {
    if (!autoplay || reviews.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [autoplay, reviews.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[active];

  return (
    <SectionWrapper
      id="reviews"
      className={cn("relative overflow-hidden bg-transparent", className)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%)] blur-2xl [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_55%)]" />

      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center md:mb-16">
        <div className="space-y-3">
          <div className="inline-flex rounded-full border border-brand-primary/25 bg-gradient-to-r from-brand-secondary/30 to-brand-primary/20 px-4 py-1 text-sm font-medium text-brand-glow [.light_&]:border-blue-200 [.light_&]:from-blue-50 [.light_&]:to-sky-50 [.light_&]:text-blue-700">
            KNOW WHAT PEOPLE SAY ABOUT US!
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl [.light_&]:text-[#111827]">
            Google Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary md:text-lg [.light_&]:text-gray-600">
            Real feedback from traders who trust Achiever FX for platform
            reliability, transparent service, and responsive support.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <div className="relative h-80 w-full sm:h-[26rem]">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.92,
                          z: -100,
                          rotate: rotations[index],
                        }
                  }
                  animate={{
                    opacity: index === active ? 1 : 0.52,
                    scale: index === active ? 1 : 0.94,
                    z: index === active ? 0 : -100,
                    rotate: index === active ? 0 : rotations[index],
                    zIndex: index === active ? 30 : reviews.length - index,
                    y:
                      shouldReduceMotion || index !== active
                        ? 0
                        : [0, -12, 0],
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.45,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom will-change-transform"
                >
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    quality={70}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, 560px"
                    className="h-full w-full rounded-[2rem] border border-white/10 object-cover object-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] [.light_&]:border-gray-200 [.light_&]:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                  />
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#060b15]/70 via-transparent to-white/5 [.light_&]:bg-gradient-to-t [.light_&]:from-[#052e16]/12 [.light_&]:via-transparent [.light_&]:to-white/10" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 flex flex-col justify-between py-4 md:order-2">
            <motion.div
              key={activeReview.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: activeReview.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-[#FFB400] text-[#FFB400]"
                  />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white md:text-3xl [.light_&]:text-[#111827]">
                {activeReview.name}
              </h3>
              <p className="mb-6 text-sm text-brand-glow [.light_&]:text-blue-600">{activeReview.role}</p>

              <motion.p
                key={activeReview.name}
                initial={
                  shouldReduceMotion
                    ? false
                    : { filter: "blur(8px)", opacity: 0, y: 8 }
                }
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.18 : 0.28,
                  ease: "easeOut",
                }}
                className="text-lg leading-8 text-text-secondary will-change-transform [.light_&]:text-gray-600"
              >
                {activeReview.text}
              </motion.p>
            </motion.div>

            <div className="flex gap-4 pt-10 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-bg-secondary text-white transition-colors hover:border-brand-glow/40 hover:bg-white/5 [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-[#111827] [.light_&]:shadow-[0_6px_20px_rgba(0,0,0,0.06)] [.light_&]:hover:border-blue-300 [.light_&]:hover:bg-blue-50"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-bg-secondary text-white transition-colors hover:border-brand-glow/40 hover:bg-white/5 [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-[#111827] [.light_&]:shadow-[0_6px_20px_rgba(0,0,0,0.06)] [.light_&]:hover:border-blue-300 [.light_&]:hover:bg-blue-50"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <Card
              key={review.name}
              className="h-full border-white/10 bg-bg-secondary/90 shadow-[0_18px_50px_rgba(0,0,0,0.22)] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <CardHeader className="pb-0">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-[#FFB400] text-[#FFB400]"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-text-secondary [.light_&]:text-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={44}
                    height={44}
                    quality={70}
                    sizes="44px"
                    className="h-11 w-11 rounded-full border border-white/10 object-cover [.light_&]:border-gray-200"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white [.light_&]:text-[#111827]">{review.name}</p>
                    <p className="text-xs text-brand-glow [.light_&]:text-blue-600">{review.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="primary"
            className="min-w-[220px] rounded-full px-8"
          >
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View all reviews"
            >
              View All Reviews
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ReviewsShowcase;
