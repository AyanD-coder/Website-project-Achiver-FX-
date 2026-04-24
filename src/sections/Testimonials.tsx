import ReviewsShowcase, { type Review } from "@/components/ui/reviews-showcase";

const reviews: Review[] = [
  {
    name: "Codexa",
    role: "9 months ago",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
    text: "I've been trading with Achiever FX for over a year now, and I've had a consistently positive experience. Their platform is user-friendly, and their customer support has been responsive and helpful.",
    rating: 5,
  },
  {
    name: "Mayank Shrimali",
    role: "9 months ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
    text: "Achiever Financials offers low spreads, fast trade execution, and hassle-free withdrawals. With exceptional support, trading here feels smooth, transparent, and professionally managed.",
    rating: 5,
  },
  {
    name: "Salmaan Siraj",
    role: "9 months ago",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    text: "I am glad that I found this brokerage because it is user-friendly and the execution speed is excellent. The tools and resources provided are very useful for everyday trading decisions.",
    rating: 5,
  },
  {
    name: "Achiever Client",
    role: "9 months ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=900&auto=format&fit=crop",
    text: "Achiever FX has delivered a smooth onboarding process, fast support responses, and a reliable trading environment that makes daily execution feel simple and efficient.",
    rating: 5,
  },
];

export default function Testimonials() {
  return <ReviewsShowcase reviews={reviews} autoplay />;
}
