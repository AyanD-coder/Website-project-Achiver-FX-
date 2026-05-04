import { Check, ChevronRight } from "lucide-react";

const REGISTER_URL = "/register";

type AccountPlan = {
  name: string;
  minDeposit: string;
  spread: string;
  commission: string;
  swapCharge: string;
  leverage: string;
  tradingPlatform: string;
  stopOutLevel: string;
  accountCurrency: string;
  minTradeSize: string;
  tradingInstruments: string;
  recommended?: boolean;
};

type PricingCardProps = {
  plan: AccountPlan;
};

const accountPlans: AccountPlan[] = [
  {
    name: "STANDARD",
    minDeposit: "250 USD",
    spread: "1.4",
    commission: "No",
    swapCharge: "Free",
    leverage: "1:400",
    tradingPlatform: "MT5",
    stopOutLevel: "50%",
    accountCurrency: "USD",
    minTradeSize: "0.01 Forex & Metals",
    tradingInstruments: "3000+ Instruments. Forex, Metals, Indices, Energy",
  },
  {
    name: "VIP",
    minDeposit: "10,000 USD",
    spread: "0.9",
    commission: "No",
    swapCharge: "Free*",
    leverage: "1:200",
    tradingPlatform: "MT5",
    stopOutLevel: "50%",
    accountCurrency: "USD",
    minTradeSize: "0.01 Forex & Metals",
    tradingInstruments: "3000+ Instruments. Forex, Metals, Indices, Energy",
    recommended: true,
  },
  {
    name: "ECN",
    minDeposit: "25,000 USD",
    spread: "0.1",
    commission: "$7 Per Lot",
    swapCharge: "Yes",
    leverage: "1:100",
    tradingPlatform: "MT5",
    stopOutLevel: "50%",
    accountCurrency: "USD",
    minTradeSize: "0.01 Forex & Metals",
    tradingInstruments: "3000+ Instruments. Forex, Metals, Indices, Energy",
  },
];

function PricingCard({ plan }: PricingCardProps) {
  const features = [
    `Min Deposit : ${plan.minDeposit}`,
    `Spread : ${plan.spread}`,
    `Commission : ${plan.commission}`,
    `Swap Charge : ${plan.swapCharge}`,
    `Leverage : ${plan.leverage}`,
    `Trading Platform : ${plan.tradingPlatform}`,
    `Stop Out Level : ${plan.stopOutLevel}`,
    `Account Currency : ${plan.accountCurrency}`,
    `Min Trade Size : ${plan.minTradeSize}`,
    `Trading Instruments : ${plan.tradingInstruments}`,
  ];

  return (
    <article className="relative flex w-full max-w-[19rem] flex-col rounded-[2rem] border border-[#1a8bff]/80 bg-white px-7 pb-8 pt-10 shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-colors duration-200 [.light_&]:border-blue-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(37,99,235,0.08)] [.dark_&]:border-white/15 [.dark_&]:bg-[#07111f] [.dark_&]:shadow-[0_16px_44px_rgba(2,8,23,0.34)]">


      <div className="absolute left-1/2 top-0 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[0.9rem] bg-gradient-to-r from-[#1565ff] to-[#0ea5e9] px-4 py-3 text-center shadow-[0_10px_28px_rgba(14,165,233,0.18)]">
        <h3 className="text-[1.05rem] font-extrabold tracking-wide text-white">
          {plan.name}
        </h3>
      </div>

      <ul className="space-y-4 pt-6 text-[0.97rem] leading-6 text-[#08204d] [.dark_&]:text-slate-100">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#1565ff] [.dark_&]:text-[#38bdf8]">
              <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={REGISTER_URL}
        suppressHydrationWarning
        className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#1565ff] px-6 text-base font-semibold text-white shadow-[0_10px_26px_rgba(21,101,255,0.18)] transition-transform duration-200 hover:-translate-y-px"
      >
        <span className="leading-5">Open Live Account</span>
        <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function PricingPage() {
  return (
    <section
      id="pricing"
      className="relative w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-[#edf1ff] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f62ff] [.dark_&]:bg-white/10 [.dark_&]:text-[#93c5fd]">
            Account Types
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#0b144b] sm:text-5xl [.dark_&]:text-white">
            Achiever FX Trading Accounts
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#374151] [.dark_&]:text-slate-300">
            Achiever Financials LTD offers arrays of account types to choose
            from. So that you do not have to look anywhere else but enhance
            your trading knowledge and skills.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-stretch lg:gap-6">
          {accountPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
