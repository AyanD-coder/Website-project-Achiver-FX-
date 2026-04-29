"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CandlestickChart,
  ChevronDown,
  Coins,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

type FAQColumn = "left" | "right";

type FAQItem = {
  answer: string;
  column: FAQColumn;
  icon: LucideIcon;
  id: string;
  question: string;
};

const faqItems: FAQItem[] = [
  {
    id: "equities-faq-1",
    column: "left",
    icon: CandlestickChart,
    question: "Trading CFD Shares",
    answer:
      "Achiever offers a convenient, cost-effective, and secure way of buying and selling shares online. Trading shares CFDs allows customers to gain exposure to different stocks' price movements without the ownership of the underlying asset. It can be traded on margin, which enables you to multiply profits through the facility of leverage. However, this goes both ways; with greater reward, there is a greater risk too.",
  },
  {
    id: "equities-faq-2",
    column: "left",
    icon: Globe2,
    question: "Diverse Market Access",
    answer:
      "Achiever offers access to a wide selection of CFD instruments, including stocks, indices, and ETFs, allowing traders to diversify their portfolios and tap into global market opportunities.",
  },
  {
    id: "equities-faq-3",
    column: "right",
    icon: Coins,
    question: "Leverage with Lower Capital",
    answer:
      "With lower margin requirements, you can open larger positions using a smaller initial investment. This leverage enhances your market exposure and potential returns, but also increases the level of risk.",
  },
  {
    id: "equities-faq-4",
    column: "right",
    icon: TrendingUp,
    question: "Benefits of CFD Shares",
    answer:
      "At Achiever, we provide a diverse range of CFDs across stocks, stock indices, ETFs, and more, offering extensive market opportunities. With lower margin requirements, you only need a fraction of your investment to take positions and gain full exposure through leverage trading. While this increases profit potential, it also comes with a higher risk of loss. Additionally, CFDs allow two-way trading, enabling you to profit from both rising and falling markets by short selling. Plus, with no stamp duty applicable, you can save on trading costs, making your investments more efficient.",
  },
];

const columnOrder: FAQColumn[] = ["left", "right"];
const floatOffsets = [-5, 6, -4, 5];
const floatDurations = [5, 5.6, 4.9, 5.4];

function EquitiesFaqCard({
  isOpen,
  item,
  onToggle,
  orderIndex,
}: {
  isOpen: boolean;
  item: FAQItem;
  onToggle: () => void;
  orderIndex: number;
}) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const contentId = `${item.id}-content`;
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: orderIndex * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.015,
              y: -4,
            }
      }
      className={`group relative overflow-hidden rounded-[1.75rem] border backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? "border-cyan-300/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] shadow-[0_26px_56px_rgba(14,165,233,0.16)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.94))] [.light_&]:shadow-[0_22px_48px_rgba(14,165,233,0.12)]"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_22px_44px_rgba(2,8,18,0.28)] [.light_&]:border-sky-100 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] [.light_&]:shadow-[0_16px_34px_rgba(15,23,42,0.05)]"
      }`}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, floatOffsets[orderIndex % floatOffsets.length] ?? 0, 0],
              }
        }
        transition={{
          duration: floatDurations[orderIndex % floatDurations.length] ?? 5.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-sky-300/80" />
        <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/18" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-blue-300/14" />

        <button
          type="button"
          suppressHydrationWarning
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="relative flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        >
          <div className="flex min-w-0 items-start gap-4 pr-2">
            <div
              className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "border-cyan-300/24 bg-cyan-400/14 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.24)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_28px_rgba(14,165,233,0.14)]"
                  : "border-cyan-300/12 bg-[linear-gradient(180deg,rgba(6,182,212,0.18),rgba(37,99,235,0.12))] text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.12)] [.light_&]:border-sky-200 [.light_&]:bg-[linear-gradient(180deg,rgba(224,242,254,0.96),rgba(186,230,253,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.1)]"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="pt-1 text-base font-semibold leading-7 text-white sm:text-lg [.light_&]:text-slate-900">
              {item.question}
            </h3>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`mt-0.5 inline-flex shrink-0 rounded-full border p-2 transition-all duration-300 ${
              isOpen
                ? "border-cyan-300/30 bg-cyan-400/14 text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.24)] [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.14)]"
                : "border-white/10 bg-white/[0.05] text-white/70 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-500"
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={contentId}
              key={contentId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                <div className="h-px w-full bg-gradient-to-r from-cyan-300/24 via-white/10 to-transparent [.light_&]:from-sky-200/50 [.light_&]:via-slate-200" />
                <motion.p
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="mt-5 text-sm leading-7 text-[#CBD5F5] [.light_&]:text-slate-600"
                >
                  {item.answer}
                </motion.p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

export default function EquitiesFaqSection() {
  const [openItems, setOpenItems] = useState<Record<FAQColumn, string | null>>({
    left: faqItems.find((item) => item.column === "left")?.id ?? null,
    right: faqItems.find((item) => item.column === "right")?.id ?? null,
  });

  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_18%_32%,rgba(37,99,235,0.1),transparent_20%),radial-gradient(circle_at_82%_34%,rgba(14,165,233,0.1),transparent_18%)] [.light_&]:bg-[radial-gradient(circle_at_50%_14%,rgba(56,189,248,0.16),transparent_18%),radial-gradient(circle_at_18%_32%,rgba(59,130,246,0.1),transparent_20%),radial-gradient(circle_at_82%_34%,rgba(125,211,252,0.14),transparent_18%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.34)_1px,transparent_1px)] [background-size:4.6rem_4.6rem] [.light_&]:opacity-[0.1]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl [.light_&]:bg-sky-300/18" />
        <div className="absolute left-[10%] top-[44%] h-48 w-48 rounded-full bg-blue-500/8 blur-3xl [.light_&]:bg-blue-300/14" />
        <div className="absolute right-[8%] top-[32%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl [.light_&]:bg-cyan-200/18" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl [.light_&]:text-slate-950">
            Trade Shares CFDs with Achiever
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base [.light_&]:text-slate-600">
            Flexible CFD trading with global opportunities
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {columnOrder.map((column, columnIndex) => {
            const items = faqItems.filter((item) => item.column === column);

            return (
              <div key={column} className="flex flex-col gap-6">
                {items.map((item, itemIndex) => {
                  const isOpen = openItems[column] === item.id;
                  const orderIndex = columnIndex * items.length + itemIndex;

                  return (
                    <EquitiesFaqCard
                      key={item.id}
                      item={item}
                      isOpen={isOpen}
                      orderIndex={orderIndex}
                      onToggle={() =>
                        setOpenItems((current) => ({
                          ...current,
                          [column]: current[column] === item.id ? null : item.id,
                        }))
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
