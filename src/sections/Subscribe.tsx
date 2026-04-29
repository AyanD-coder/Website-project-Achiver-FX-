import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

export default function Subscribe() {
  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 items-center overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#121826] to-[#0B0F19] shadow-2xl lg:grid-cols-2">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-brand-primary opacity-5 blur-[120px]"></div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-16">
          <h2 className="mb-6 text-3xl font-extrabold text-white md:text-5xl">
            Stay Ahead of the Market
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
            Subscribe to our weekly newsletter for exclusive trade setups, macroeconomic breakdowns, and proprietary platform updates.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              id="newsletter-email"
              name="email"
              type="email" 
              suppressHydrationWarning
              placeholder="Your email address" 
              autoComplete="email"
              className="min-w-0 flex-grow rounded-xl border border-white/10 bg-bg-dark/50 px-4 py-3 text-white placeholder:text-text-secondary transition-all focus:border-brand-glow focus:outline-none focus:ring-1 focus:ring-brand-glow"
              required
            />
            <Button variant="primary" type="submit" className="w-full px-8 sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-text-secondary mt-4">We respect your privacy. No spam ever.</p>
        </div>

        {/* 3D Abstract Visual representation using CSS */}
        <div className="hidden lg:flex items-center justify-center p-16 relative min-h-[400px]">
          {/* Decorative rings */}
          <div className="absolute w-64 h-64 border border-brand-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-80 h-80 border border-brand-glow/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Central 3D illusion card */}
          <div className="relative w-48 h-48 bg-gradient-to-tr from-brand-primary/80 to-brand-secondary/80 rounded-2xl shadow-[0_0_50px_rgba(14,165,233,0.4)] backdrop-blur-md transform rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-700 ease-in-out border border-white/20 flex flex-col justify-between p-6">
             <div className="w-12 h-12 bg-white/20 rounded-full"></div>
             <div className="space-y-2">
                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
             </div>
          </div>
          
          {/* Floating mini cards */}
          <div className="absolute right-[20%] top-[25%] w-16 h-16 bg-brand-glow/30 backdrop-blur border border-white/10 rounded-xl shadow-lg transform -rotate-12 animate-pulse"></div>
          <div className="absolute left-[20%] bottom-[30%] w-20 h-20 bg-brand-secondary/30 backdrop-blur border border-white/10 rounded-xl shadow-lg transform rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
