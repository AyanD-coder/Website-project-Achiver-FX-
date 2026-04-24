import { Bot, BarChart3, ShieldCheck, Headset } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Strategy Automation",
    description: "Deploy robust automated trading systems that operate 24/7 with zero emotional bias.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Gain deep insights into your trading performance with our advanced tracking tools.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Protect your capital with built-in equity guards and dynamic position sizing.",
  },
  {
    icon: Headset,
    title: "24/7 Dedicated Support",
    description: "Get immediate assistance from our expert team whenever you need help.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 lg:px-8 bg-zinc-950 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Elevate your trading experience with our suite of professional tools and tailored solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col items-start"
              >
                {/* Top border gradient highlight on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Container */}
                <div className="p-3 rounded-lg bg-zinc-800/80 group-hover:bg-blue-500/10 text-zinc-300 group-hover:text-blue-400 transition-colors duration-300 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-50 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
