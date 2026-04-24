import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

export default function Subscribe() {
  return (
    <SectionWrapper>
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-dark border border-white/5 shadow-2xl items-center grid grid-cols-1 lg:grid-cols-2">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-brand-primary opacity-5 blur-[120px] [.light_&]:bg-[radial-gradient(circle_at_22%_28%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_52%_78%,rgba(56,189,248,0.1),transparent_36%)] [.light_&]:opacity-100 [.light_&]:blur-[96px]"></div>

        <div className="p-10 lg:p-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Stay Ahead of the Market
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-md">
            Subscribe to our weekly newsletter for exclusive trade setups, macroeconomic breakdowns, and proprietary platform updates.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:outline-none focus:border-brand-glow focus:ring-1 focus:ring-brand-glow transition-all"
              required
            />
            <Button variant="primary" type="submit" className="whitespace-nowrap px-8">
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
