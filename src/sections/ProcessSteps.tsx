import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

const steps = [
  { num: "01", title: "Register", desc: "Create your account in under 60 seconds with simple secure KYC." },
  { num: "02", title: "Verify", desc: "Upload your ID and get approved instantly by our automated system." },
  { num: "03", title: "Fund", desc: "Deposit instantly with crypto, cards, or wire transfers via secure gateways." },
  { num: "04", title: "Trade", desc: "Access the markets via MT5 and start achieving your trading goals." }
];

export default function ProcessSteps() {
  return (
    <SectionWrapper className="bg-bg-secondary/30 relative">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Fast Account Opening in 4 Steps
        </h2>
        <p className="text-text-secondary text-lg">Start trading on a premium environment in minutes, not days.</p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
          {steps.map((step, i) => {
            const isDark = i % 2 !== 0;
            return (
              <div 
                key={step.num}
                className={`flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-2
                  ${isDark ? 'lg:translate-y-8' : ''}
                `}
              >
                <div 
                  className={`
                    p-8 rounded-2xl mx-auto w-full max-w-sm lg:mx-2 border
                    ${isDark ? 'bg-bg-dark border-brand-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.1)]' : 'bg-bg-secondary/80 border-white/5 shadow-xl'}
                  `}
                >
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-primary/50 to-bg-dark mb-6 tracking-tighter">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 flex justify-center lg:mt-32">
        <Button variant="primary" className="px-10 py-4 text-lg hidden lg:block">
          Open Your Account Now
        </Button>
      </div>
    </SectionWrapper>
  );
}
