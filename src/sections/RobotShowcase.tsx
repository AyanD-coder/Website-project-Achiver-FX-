import { Shield, Zap, Percent } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const featureCards = [
  {
    icon: Shield,
    title: "Fund Security",
    description: "Client funds are held in segregated top-tier bank accounts, ensuring maximum protection.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Connect directly to tier-1 liquidity providers for ultra-fast, slippage-free trade entry.",
    highlight: true,
  },
  {
    icon: Percent,
    title: "Zero Commission",
    description: "Trade major pairs with zero commissions and spreads starting from 0.0 pips.",
    highlight: false,
  },
];

export default function RobotShowcase() {
  return (
    <SectionWrapper id="robot-showcase" className="relative z-30 -mt-28 bg-transparent pb-24 pt-0 lg:-mt-44 lg:pb-32 [.light_&]:bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 -top-24 bottom-0">
        <div className="absolute left-1/2 top-0 h-80 w-[1100px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_58%)] blur-3xl" />
        <div className="absolute right-[-12%] top-28 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute left-[-8%] bottom-10 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl [.light_&]:text-[#111827]">
              Power-Packed Forex Features
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  variant="outline"
                  className="group relative flex flex-col items-center justify-start border border-white/0 bg-white/[0.03] shadow-[0_20px_60px_rgba(2,8,23,0.45)] backdrop-blur-2xl transition-all duration-300 hover:z-10 hover:scale-105 hover:border-t hover:border-brand-primary/50 hover:bg-[linear-gradient(180deg,rgba(14,165,233,0.1)_0%,rgba(2,8,23,0)_100%)] hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.06)] [.light_&]:hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)]"
                >
                  <CardHeader className="flex flex-col items-center pb-3 pt-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-glow shadow-[0_0_24px_rgba(56,189,248,0.18)] transition-all duration-300 group-hover:border group-hover:border-brand-primary/50 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                      <Icon className="h-[22px] w-[22px] transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <CardTitle className="text-center text-lg font-bold transition-colors duration-300 group-hover:text-white [.light_&]:group-hover:text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center pb-6">
                    <CardDescription className="text-center text-sm leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-slate-100 [.light_&]:text-gray-600 [.light_&]:group-hover:text-gray-700">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="relative isolate min-h-[420px] sm:min-h-[520px]">
          <div className="absolute inset-x-8 top-6 h-32 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.20),transparent_65%)] blur-3xl" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_35%,rgba(2,8,23,0)_100%)] backdrop-blur-[3px]" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_50%_72%,rgba(37,99,235,0.10),transparent_42%)]" />

          <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] sm:h-[520px]">
            <InteractiveRobotSpline
              scene={ROBOT_SCENE_URL}
              className="absolute inset-[-8%] h-[116%] w-[116%]"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent,rgba(4,8,20,0.08)_45%,rgba(4,8,20,0.28)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040814] via-[#040814]/38 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040814] via-[#040814]/72 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brand-glow">
                  {/* Whobee Demo */}
                </p>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {/* This is interactive 3D robot Whobee */}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
