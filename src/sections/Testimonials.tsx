"use client";

import * as React from "react";
import ReviewsShowcase, { type Review } from "@/components/ui/reviews-showcase";

const googleReviewsUrl =
  "https://www.google.com/search?q=Achiever+Financials+Ltd&rlz=1C1GCEA_enIN1131IN1131&ie=UTF-8&zx=1753376898860&no_sw_cr=1&lqi=ChdBY2hpZXZlciBGaW5hbmNpYWxzIEx0ZJIBDHN0b2NrX2Jyb2tlcqoBXwoNL2cvMTF4bDg0bDZmMwoNL2cvMTF4bnhsdjI0MxABMiAQASIc7f7UtIhSdfqtTUZU8bpJ5TsM_k7hQkoCgvDUdjIbEAIiF2FjaGlldmVyIGZpbmFuY2lhbHMgbHRk#lkt=LocalPoiReviews&lrd=&rlimm=2779300575038091867";

const reviews: Review[] = [
  {
    name: "Nivedita Dwivedi",
    role: "Local Guide · 20 reviews · 22 photos · 8 months ago",
    avatarTone: "violet",
    text: "Mr. Vishal at Achiever Financial Limited is simply the best when it comes to financial and investment planning. His guidance is practical, reliable, and result-oriented. Highly recommended for anyone looking to secure their financial future.",
    rating: 5,
  },
  {
    name: "Codexa",
    role: "1 review · 9 months ago",
    avatarTone: "cyan",
    text: "I've been trading with Achiever FX for over a year now, and I've had a consistently positive experience. Their platform is user-friendly, and their customer support team is always there to assist whenever I have questions. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vyas Vinod",
    role: "Local Guide · 4 reviews · 285 photos · 8 months ago",
    avatarTone: "blue",
    text: "Marvellous experience trading with Achiever FX. The company provides the most user-friendly and hassle-free CRM portal to process deposits instantly through various platforms. Mr. Vishal Trivedi and the executives are accommodating and professional with queries. The withdrawal process also meets expectations. Overall good service and good profit.",
    rating: 5,
  },
  {
    name: "Ganesh Pukale",
    role: "Local Guide · 14 reviews · 1 photo · 9 months ago",
    avatarTone: "emerald",
    text: "Hello, my name is Ganesh and I have been trading with Achiever FX for over two years. My experience has been nothing short of exceptional. Their low spreads help maximize profits and trade execution is impressively swift. Vishal Trivedi has been responsive, knowledgeable, professional, and dedicated. Deposits and withdrawals are seamless and efficient. I highly recommend Achiever FX to any trader looking for reliable trading conditions and top-notch customer support.",
    rating: 5,
  },
  {
    name: "Mayank Shrimali",
    role: "5 reviews · 9 photos · 9 months ago",
    avatarTone: "amber",
    text: "Achiever Financials offers low spreads, fast trade execution, and hassle-free withdrawals. With Vishal Trivedi's exceptional support, trading here feels effortless and reliable.",
    rating: 5,
  },
  {
    name: "SATTU PATEL",
    role: "4 reviews · 8 photos · 9 months ago",
    avatarTone: "rose",
    text: "Started trading with Achiever FX. It is a good platform for trading and the signals given by them are also perfect. Customer support by Achiever FX has spontaneous responses for our queries.",
    rating: 5,
  },
];

type GoogleReviewsResponse = {
  reviews?: Review[];
  reviewsUrl?: string;
};

export default function Testimonials() {
  const [googleReviews, setGoogleReviews] = React.useState<Review[]>(reviews);
  const [reviewsUrl, setReviewsUrl] = React.useState(googleReviewsUrl);

  React.useEffect(() => {
    let isMounted = true;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews");

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GoogleReviewsResponse;

        if (!isMounted || !data.reviews?.length) {
          return;
        }

        setGoogleReviews(data.reviews);

        if (data.reviewsUrl) {
          setReviewsUrl(data.reviewsUrl);
        }
      } catch {
        // Keep the static fallback if Google reviews are temporarily unavailable.
      }
    }

    void loadGoogleReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ReviewsShowcase
      reviews={googleReviews}
      reviewsUrl={reviewsUrl}
      autoplay
    />
  );
}
