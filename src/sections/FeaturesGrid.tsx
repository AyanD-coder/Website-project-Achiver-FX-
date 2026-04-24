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
      className="-mt-[330px] bg-transparent pb-20 pt-24 lg:-mt-[340px] lg:pb-28 lg:pt-32"
    >
      <section className="relative">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-72 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_65%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-[-4rem] h-32 bg-gradient-to-b from-transparent via-[#060b15]/35 to-transparent blur-2xl" />

        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,rgba(5,10,22,0.62)_0%,rgba(4,8,20,0.82)_18%,rgba(2,6,16,0.92)_100%)] shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_24%),radial-gradient(circle_at_50%_24%,rgba(37,99,235,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.03] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative px-6 py-6 sm:px-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Fuel Your Strategy with Intelligence
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Utilize cutting-edge technology and insights to gain an edge in today&apos;s fast-paced forex markets.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#060b15]/70 via-[#060b15]/20 to-transparent" />
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
