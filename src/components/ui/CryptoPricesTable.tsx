"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

type CryptoRow = {
  symbol: string;
  name: string;
  avgSpread: string;
  lowAsk: string;
  leverage: string;
  accent: string;
};

const standardRows: CryptoRow[] = [
  {
    symbol: "BTCUSD",
    name: "Bitcoin vs US Dollar",
    avgSpread: "25.00",
    lowAsk: "15.00",
    leverage: "1:50",
    accent: "from-[#f7931a] to-[#ffb85c]",
  },
  {
    symbol: "ETHUSD",
    name: "Ethereum vs US Dollar",
    avgSpread: "1.50",
    lowAsk: "0.80",
    leverage: "1:50",
    accent: "from-[#627eea] to-[#8ea2ff]",
  },
  {
    symbol: "SOLUSD",
    name: "Solana vs US Dollar",
    avgSpread: "0.05",
    lowAsk: "0.03",
    leverage: "1:20",
    accent: "from-[#14f195] to-[#9945ff]",
  },
  {
    symbol: "ADAUSD",
    name: "Cardano vs US Dollar",
    avgSpread: "0.002",
    lowAsk: "0.001",
    leverage: "1:20",
    accent: "from-[#2a6df4] to-[#7ba7ff]",
  },
  {
    symbol: "XRPUSD",
    name: "Ripple vs US Dollar",
    avgSpread: "0.003",
    lowAsk: "0.002",
    leverage: "1:20",
    accent: "from-[#8a94a6] to-[#c4ccd8]",
  },
];

const ultraLowRows: CryptoRow[] = [
  {
    symbol: "BTCUSD",
    name: "Bitcoin vs US Dollar",
    avgSpread: "15.00",
    lowAsk: "8.00",
    leverage: "1:50",
    accent: "from-[#f7931a] to-[#ffb85c]",
  },
  {
    symbol: "ETHUSD",
    name: "Ethereum vs US Dollar",
    avgSpread: "0.80",
    lowAsk: "0.40",
    leverage: "1:50",
    accent: "from-[#627eea] to-[#8ea2ff]",
  },
  {
    symbol: "SOLUSD",
    name: "Solana vs US Dollar",
    avgSpread: "0.03",
    lowAsk: "0.01",
    leverage: "1:20",
    accent: "from-[#14f195] to-[#9945ff]",
  },
  {
    symbol: "ADAUSD",
    name: "Cardano vs US Dollar",
    avgSpread: "0.001",
    lowAsk: "0.0005",
    leverage: "1:20",
    accent: "from-[#2a6df4] to-[#7ba7ff]",
  },
  {
    symbol: "XRPUSD",
    name: "Ripple vs US Dollar",
    avgSpread: "0.002",
    lowAsk: "0.001",
    leverage: "1:20",
    accent: "from-[#8a94a6] to-[#c4ccd8]",
  },
];

export default function CryptoPricesTable() {
  const [activeTab, setActiveTab] = useState<"standard" | "ultralow">("standard");
  const rows = activeTab === "standard" ? standardRows : ultraLowRows;

  return (
    <>
      <div className="relative text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white [.light_&]:text-[#111827]">
          Crypto Market Prices
        </h2>
        <p className="mt-3 text-sm text-slate-400 [.light_&]:text-slate-600">
          The market operates Monday - Friday 00:01 - 23:58 (GMT + 2)
        </p>

        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
          <button
            onClick={() => setActiveTab("standard")}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              activeTab === "standard"
                ? "bg-white text-slate-950 shadow-[0_8px_18px_rgba(255,255,255,0.08)] [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white"
                : "text-slate-400 hover:text-slate-200 [.light_&]:text-slate-500 [.light_&]:hover:text-slate-700"
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setActiveTab("ultralow")}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              activeTab === "ultralow"
                ? "bg-white text-slate-950 shadow-[0_8px_18px_rgba(255,255,255,0.08)] [.light_&]:bg-gradient-to-r [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white"
                : "text-slate-400 hover:text-slate-200 [.light_&]:text-slate-500 [.light_&]:hover:text-slate-700"
            }`}
          >
            Ultra Low Standard
          </button>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[26px] border border-white/8 bg-slate-950/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] [.light_&]:border-blue-100 [.light_&]:bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-white/8 bg-white/[0.02] [.light_&]:border-blue-100 [.light_&]:bg-slate-50">
              <tr className="text-xs uppercase tracking-[0.16em] text-slate-400 [.light_&]:text-slate-500">
                <th className="px-5 py-4 font-semibold">Instrument</th>
                <th className="px-5 py-4 font-semibold">Name</th>
                <th className="px-5 py-4 font-semibold">Average Spread</th>
                <th className="px-5 py-4 font-semibold">Low Ask</th>
                <th className="px-5 py-4 font-semibold">Max Leverage</th>
                <th className="px-5 py-4 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.symbol}
                  className="border-b border-white/8 last:border-b-0 [.light_&]:border-blue-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${row.accent} text-[10px] font-black tracking-[0.06em] text-white shadow-[0_10px_20px_rgba(15,23,42,0.22)]`}
                      >
                        {row.symbol.slice(0, 3)}
                      </span>
                      <span className="text-sm font-semibold text-white [.light_&]:text-slate-900">
                        {row.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-300 [.light_&]:text-slate-600">
                    {row.name}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                    {row.avgSpread}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-white [.light_&]:text-slate-900">
                    {row.lowAsk}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-emerald-300 [.light_&]:text-blue-700">
                    {row.leverage}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Button asChild size="sm" className="h-9 px-4 text-xs">
                      <Link href="/register">Trade</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative mt-8 text-center">
        <p className="text-sm text-slate-400 [.light_&]:text-slate-600">
          Ready to discover more instruments?
        </p>
        <div className="mt-4">
          <Button asChild className="h-11 px-6 text-sm">
            <Link href="/register">Register to See More</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
