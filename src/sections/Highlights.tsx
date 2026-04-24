import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Shield, Zap, Percent } from 'lucide-react';

export default function Highlights() {
  return (
    <SectionWrapper>
      <div className="relative rounded-3xl bg-bg-secondary border border-brand-primary/20 overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.1)]">
        {/* Glow Effects */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-glow to-transparent opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="p-10 lg:p-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Power-Packed Forex Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-bg-dark/50">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-glow mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fund Security</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Client funds are held in segregated top-tier bank accounts, ensuring maximum protection.
              </p>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="flex flex-col items-center text-center p-8 border border-brand-glow/50 rounded-2xl bg-gradient-to-b from-bg-dark to-brand-primary/10 shadow-[0_0_30px_rgba(56,189,248,0.2)] transform md:-translate-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-primary/50">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Execution</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Connect directly to tier-1 liquidity providers for ultra-fast, slippage-free trade entry.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-bg-dark/50">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-glow mb-6">
                <Percent size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Commission</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Trade major pairs with zero commissions and spreads starting from 0.0 pips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
