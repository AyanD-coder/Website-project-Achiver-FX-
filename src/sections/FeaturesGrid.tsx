import { SectionWrapper } from "@/components/ui/SectionWrapper";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Real-Time Market Analytics",
    date: "Jan 2024",
    content: "Access up to the second data to identify trends and make informed trading decisions.",
    category: "Real-Time Market Analytics",
    icon: "Calendar" as const,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Economic Calendar Integration",
    date: "Feb 2024",
    content: "Stay ahead of major market events with a fully integrated economic calendar.",
    category: "Economic Calendar Integration",
    icon: "FileText" as const,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Multi-Asset Data Coverage",
    date: "Mar 2024",
    content: "Access intelligence across forex, commodities, indices, and more all in one place.",
    category: "Multi-Asset Data Coverage",
    icon: "Code" as const,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 62,
  },
  {
    id: 4,
    title: "Automated Risk Management Tools",
    date: "Apr 2024",
    content: "Leverage technology that helps you manage exposure and protect your capital automatically.",
    category: "Automated Risk Management Tools",
    icon: "User" as const,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 34,
  },
  {
    id: 5,
    title: "Data Analysis Tools & Methods",
    date: "May 2024",
    content: "Gauge market mood and trader sentiment to anticipate potential price movements.",
    category: "Data Analysis Tools & Methods",
    icon: "Clock" as const,
    relatedIds: [4],
    status: "pending" as const,
    energy: 12,
  },
];

export default function FeaturesGrid() {
  return (
    <SectionWrapper
      id="features"
      className="relative z-10 !m-0 !-mt-[90px] bg-transparent !p-0 !px-0 !py-0 sm:!-mt-[220px] lg:!-mt-[520px] lg:!p-0 lg:!px-0 lg:!py-0"
    >
      <section className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
        <div className="hidden relative md:flex min-h-[86svh] flex-col overflow-visible rounded-none bg-transparent shadow-none backdrop-blur-none sm:min-h-0 sm:rounded-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none">
          <div className="relative z-0 flex-1 min-h-0">
            <div className="pointer-events-none absolute inset-x-0 -top-32 z-10 h-56 bg-transparent lg:top-0 lg:h-24" />
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>

          <div className="relative z-20 -mt-8 px-4 pb-8 text-center sm:m-[2px] sm:mt-0 sm:flex sm:flex-col sm:items-center sm:p-[2px]">
            <h3 className="text-2xl font-semibold text-white [.light_&]:text-black sm:text-3xl sm:[.light_&]:text-white">
              Fuel Your Strategy with Intelligence
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 [.light_&]:text-slate-800 sm:[.light_&]:text-slate-300">
              Utilize cutting-edge technology and insights to gain an edge in today&apos;s fast-paced forex markets.
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
