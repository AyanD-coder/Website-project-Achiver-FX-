"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQColumn = "left" | "right";

interface FAQItem {
  answer: string;
  column: FAQColumn;
  id: string;
  question: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    column: "left",
    question: "What is forex trading?",
    answer:
      "Forex trading, also known as foreign exchange trading, is the global market for exchanging national currencies. With a daily trading volume exceeding $7.5 trillion, Forex is one of the most liquid and accessible markets for traders worldwide. Whether you're a beginner or a seasoned trader, Forex offers unmatched opportunities. Forex trading is done in pairs, such as EUR/USD, GBP/USD, and USD/JPY. The first currency is called the base currency, and the second currency is known as the quote currency. With Achiever, you can trade in major, minor, and emerging currency pairs.",
  },
  {
    id: "faq-2",
    column: "left",
    question: "What are the different types of currency pairs?",
    answer:
      "Currency pairs are commonly grouped into major, minor, and exotic pairs. Majors include the most traded currencies, minors exclude the US dollar, and exotics pair a major currency with an emerging-market currency.",
  },
  {
    id: "faq-3",
    column: "left",
    question: "Can I trade forex with leverage?",
    answer:
      "Yes, many brokers offer leverage, which lets you control a larger position with a smaller initial deposit. While leverage can increase potential returns, it can also increase losses, so risk management is essential.",
  },
  {
    id: "faq-4",
    column: "right",
    question: "Advantages of forex trading",
    answer:
      "The forex market is worldwide, so trading is continuous as long as markets are open; hence, trading is available 24hrs. Forex is traded in pairs, so you can go long or go short. The FX market is highly liquid globally, which means that transactions can be completed quickly and easily, so transaction costs or spreads are often very low. This creates opportunities for traders to speculate on price movements of just a few pips. Forex brokers also allow traders to use leverage, giving them the ability to trade with higher amounts than the funds currently available in their accounts.",
  },
  {
    id: "faq-5",
    column: "right",
    question: "How do I choose the best forex broker?",
    answer:
      "Look for regulation, transparent pricing, reliable execution, strong platform tools, and responsive customer support. It also helps to compare available markets, funding methods, and risk management features.",
  },
  {
    id: "faq-6",
    column: "right",
    question: "What factors affect the exchange rate of currencies?",
    answer:
      "Exchange rates can move because of interest rates, inflation, economic data, central bank decisions, geopolitical events, and overall market sentiment. Supply and demand between the two currencies ultimately drive price changes.",
  },
];

const columnOrder: FAQColumn[] = ["left", "right"];
const floatOffsets = [-7, 6, -5];
const floatDurations = [5, 5.6, 4.9];

function FAQCard({
  item,
  isOpen,
  onToggle,
  orderIndex,
}: {
  isOpen: boolean;
  item: FAQItem;
  onToggle: () => void;
  orderIndex: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const contentId = `${item.id}-content`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: orderIndex * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.05,
              y: -6,
            }
      }
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-lg transition-all duration-300 ${
        isOpen
          ? "border-cyan-300/30 bg-gradient-to-br from-white/[0.09] to-transparent shadow-[0_0_42px_rgba(56,189,248,0.24)] [.light_&]:border-blue-200 [.light_&]:bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(248,250,252,0.86))] [.light_&]:shadow-[0_16px_34px_rgba(14,165,233,0.12)]"
          : "border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent shadow-[0_0_30px_rgba(56,189,248,0.15)] [.light_&]:border-gray-200 [.light_&]:bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(248,251,255,0.84))] [.light_&]:shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
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
        <motion.div
          aria-hidden
          animate={
            isOpen && !shouldReduceMotion
              ? { opacity: [0.32, 0.65, 0.32] }
              : { opacity: 0.32 }
          }
          transition={{
            duration: 2.8,
            repeat: isOpen && !shouldReduceMotion ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_38%)]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-sky-300/70" />
        <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-300/12" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 [.light_&]:bg-sky-400/10" />

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="relative flex w-full items-start justify-between gap-4 px-6 py-6 text-left sm:px-7 sm:py-7"
        >
          <div className="pr-2">
            <h3 className="text-lg font-semibold text-white [.light_&]:text-[#111827]">
              {item.question}
            </h3>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`mt-1 inline-flex shrink-0 rounded-full border p-2 backdrop-blur-md transition-colors duration-300 ${
              isOpen
                ? "border-cyan-300/40 bg-cyan-400/12 text-cyan-100 shadow-[0_0_25px_rgba(56,189,248,0.35)] [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700 [.light_&]:shadow-[0_10px_24px_rgba(37,99,235,0.14)]"
                : "border-white/10 bg-white/5 text-white/70 [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-slate-500"
            }`}
          >
            <ChevronDown className="h-5 w-5" />
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
              <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7">
                <div className="h-px w-full bg-gradient-to-r from-cyan-300/20 via-white/10 to-transparent [.light_&]:from-blue-200/40 [.light_&]:via-blue-100" />
                <p className="mt-5 text-sm leading-7 text-white/70 [.light_&]:text-slate-600">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<FAQColumn, string | null>>({
    left: faqItems.find((item) => item.column === "left")?.id ?? null,
    right: faqItems.find((item) => item.column === "right")?.id ?? null,
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#030814] px-4 py-24 sm:px-6 lg:px-8 [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_50%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(56,189,248,0.16),transparent_18%),radial-gradient(circle_at_20%_28%,rgba(37,99,235,0.14),transparent_20%),radial-gradient(circle_at_78%_35%,rgba(14,165,233,0.12),transparent_18%),linear-gradient(180deg,#02050c_0%,#040b18_100%)] [.light_&]:bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.13),transparent_18%),radial-gradient(circle_at_20%_28%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_78%_35%,rgba(56,189,248,0.08),transparent_18%),linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#ffffff_100%)]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl [.light_&]:bg-sky-400/12" />
        <div className="absolute left-[14%] top-[38%] h-52 w-52 rounded-full bg-blue-500/10 blur-3xl [.light_&]:bg-sky-300/10" />
        <div className="absolute right-[10%] top-[30%] h-64 w-64 rounded-full bg-sky-400/10 blur-3xl [.light_&]:bg-blue-200/12" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200 [.light_&]:border-blue-200 [.light_&]:bg-blue-50 [.light_&]:text-blue-700">
            GET TO KNOW
          </span>
          <h2 className="mt-6 inline-block px-2 pb-1 bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-transparent sm:px-3 sm:text-5xl sm:leading-[1.12] [.light_&]:from-[#111827] [.light_&]:via-[#2563EB] [.light_&]:to-[#0EA5E9]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base [.light_&]:text-slate-600">
            Resolve your doubts &amp; begin your forex journey with Achiever
            Financials Ltd
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {columnOrder.map((column, columnIndex) => {
            const items = faqItems.filter((item) => item.column === column);

            return (
              <div key={column} className="flex flex-col gap-6">
                {items.map((item, itemIndex) => {
                  const isOpen = openItems[column] === item.id;
                  const orderIndex = columnIndex * items.length + itemIndex;

                  return (
                    <FAQCard
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
