import { HeroSection } from "@/components/ui/hero-odyssey";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { GlowCard } from "@/components/ui/spotlight-card";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

export function DemoOne() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <HeroSection />
    </div>
  );
}

export function Section() {
  const robotSceneUrl = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <InteractiveRobotSpline
        scene={robotSceneUrl}
        className="absolute inset-0 z-0 h-full w-full"
      />

      <div className="pointer-events-none absolute inset-0 z-10 px-4 pt-20 md:px-8 md:pt-32 lg:pt-40">
        <div className="mx-auto w-full max-w-2xl text-center text-white drop-shadow-lg">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
            {/* This is interactive 3D robot Whobee */}
          </h1>
        </div>
      </div>
    </div>
  );
}

export function Default() {
  return (
    <div className="custom-cursor flex h-screen w-screen flex-row items-center justify-center gap-10 bg-slate-950">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  );
}

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: "Calendar" as const,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: "FileText" as const,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: "Code" as const,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: "User" as const,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: "Clock" as const,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
