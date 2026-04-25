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
    <SectionWrapper id="robot-showcase" className="relative z-30 !m-0 bg-transparent !p-0 !px-0 !py-0 md:!mt-0 md:!pt-0 lg:!mt-0 lg:!p-0 lg:!px-0 lg:!py-0 [.light_&]:bg-transparent">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 hidden rounded-[2rem] [.light_&]:block [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,250,252,0.96))] [.light_&]:shadow-[0_24px_60px_rgba(15,23,42,0.08)]" />
        <div className="pointer-events-none absolute inset-0 hidden rounded-[2rem] [.light_&]:block [.light_&]:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(14,165,233,0.08),transparent_38%)]" />

        <div className="relative grid items-center gap-10 rounded-[2rem] p-4 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
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
                  className="group relative flex flex-col items-center justify-start border border-white/0 bg-white/[0.03] shadow-[0_20px_60px_rgba(2,8,23,0.45)] backdrop-blur-2xl transition-all duration-300 hover:z-10 hover:scale-105 hover:border-t hover:border-brand-primary/50 hover:bg-[linear-gradient(180deg,rgba(14,165,233,0.1)_0%,rgba(2,8,23,0)_100%)] hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] [.light_&]:shadow-[0_10px_30px_rgba(15,23,42,0.06)] [.light_&]:hover:border-blue-200/80 [.light_&]:hover:bg-[linear-gradient(180deg,rgba(239,246,255,0.96),rgba(248,250,252,0.92))] [.light_&]:hover:shadow-[0_15px_40px_rgba(14,165,233,0.12)]"
                >
                  <CardHeader className="flex flex-col items-center pb-3 pt-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-glow shadow-[0_0_24px_rgba(56,189,248,0.18)] transition-all duration-300 group-hover:border group-hover:border-brand-primary/50 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] [.light_&]:bg-blue-50 [.light_&]:text-blue-600 [.light_&]:shadow-none [.light_&]:group-hover:border-blue-200 [.light_&]:group-hover:bg-blue-600 [.light_&]:group-hover:text-white [.light_&]:group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.18)]">
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

          <div className="relative min-h-[420px] sm:min-h-[520px]">
            <div className="absolute inset-0 hidden rounded-[2.5rem] [.light_&]:block [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.88))] [.light_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_50px_rgba(15,23,42,0.08)]" />
            <div className="absolute inset-0 hidden rounded-[2.5rem] [.light_&]:block [.light_&]:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_74%_70%,rgba(14,165,233,0.10),transparent_42%)]" />

            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] bg-transparent sm:h-[520px]">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="absolute inset-[-8%] h-[116%] w-[116%]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mx-auto max-w-md text-center">
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brand-glow">
                    {/* Whobee Demo */}
                  </p>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl [.light_&]:text-slate-900">
                    {/* This is interactive 3D robot Whobee */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
