import {
  BriefcaseBusiness,
  Building2,
  Check,
  Sparkles,
} from "lucide-react";

type PricingPlan = {
  planName: string;
  description: string;
  price: string;
  priceDescription: string;
  features: string[];
  icon: React.ReactNode;
  iconBgClass: string;
  isPopular: boolean;
  buttonText: string;
};

type PricingCardProps = PricingPlan;

function PricingCard({
  planName,
  description,
  price,
  priceDescription,
  features,
  icon,
  iconBgClass,
  isPopular,
  buttonText,
}: PricingCardProps) {
  return (
    <article
      className="group relative flex h-full w-full max-w-[19rem] flex-col rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_30%),#0a0b14] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_80px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.06)] [.light_&]:hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-[-30%] top-1/2 h-32 -translate-y-1/2 animate-[spin_8s_linear_infinite] bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.02)_35%,rgba(168,85,247,0.6)_50%,rgba(168,85,247,0.02)_65%,transparent_100%)]" />
      </div>

      {isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-white [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:shadow-[0_8px_20px_rgba(14,165,233,0.2)]">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br ${iconBgClass} [.light_&]:border-gray-200 [.light_&]:bg-blue-50`}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
                {planName}
              </h3>
              <p className="text-xs text-neutral-400 [.light_&]:text-gray-500">{description}</p>
            </div>
          </div>
          <div className="h-5 w-5 rounded-full border-2 border-white/25 [.light_&]:border-blue-200 [.light_&]:bg-blue-50" />
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
              {price}
            </span>
            <span className="text-sm text-neutral-400 [.light_&]:text-gray-500">
              {priceDescription}
            </span>
          </div>
          <p className="mt-1 text-xs text-neutral-500 [.light_&]:text-gray-500">
            No credit card required
          </p>
        </div>

        <ul className="flex-grow space-y-3 text-sm text-neutral-200 [.light_&]:text-gray-600">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 [.light_&]:bg-blue-500">
                <Check className="h-3 w-3 text-slate-950 [.light_&]:text-white" strokeWidth={2.5} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button className="h-12 w-full rounded-lg bg-white font-bold text-neutral-900 transition-colors hover:bg-neutral-200 [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white [.light_&]:shadow-[0_8px_25px_rgba(14,165,233,0.2)] [.light_&]:hover:brightness-105">
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function PricingPage() {
  const starterPlan: PricingPlan = {
    planName: "Starter",
    description: "Perfect for beginners",
    price: "$0",
    priceDescription: "forever",
    icon: <Sparkles className="h-5 w-5 text-blue-500" strokeWidth={1.8} />,
    iconBgClass: "from-blue-500/20 to-sky-500/20",
    features: [
      "Interactive lessons and quizzes",
      "Daily practice and streaks",
      "Community access",
      "Basic AI fundamentals",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  };

  const proPlan: PricingPlan = {
    planName: "Pro",
    description: "For growing teams",
    price: "$29",
    priceDescription: "/ month",
    icon: (
      <BriefcaseBusiness className="h-5 w-5 text-blue-400" strokeWidth={1.8} />
    ),
    iconBgClass: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Everything in Starter",
      "Advanced AI models",
      "Project collaboration",
      "Priority support",
    ],
    buttonText: "Start Pro Trial",
    isPopular: true,
  };

  const enterprisePlan: PricingPlan = {
    planName: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    priceDescription: "pricing",
    icon: <Building2 className="h-5 w-5 text-purple-400" strokeWidth={1.8} />,
    iconBgClass: "from-purple-500/20 to-indigo-500/20",
    features: [
      "Everything in Pro",
      "On-premise deployment",
      "Dedicated account manager",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  };

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.1),transparent_24%)] [.light_&]:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl [.light_&]:text-[#111827]">
            Find the plan that&apos;s right for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400 [.light_&]:text-gray-600">
            Start for free and scale up as you grow. No credit card required.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          <PricingCard {...starterPlan} />
          <PricingCard {...proPlan} />
          <PricingCard {...enterprisePlan} />
        </div>
      </div>
    </section>
  );
}
