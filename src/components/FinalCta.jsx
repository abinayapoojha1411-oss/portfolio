import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCta() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-28 md:py-40 bg-[#141312] text-[#FAF9F6] relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C25E3E]/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono font-medium tracking-widest text-[#FAF9F6] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
          <span>START TODAY</span>
        </div>

        {/* Large Text */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Your business deserves a{' '}
          <span className="font-serif italic font-normal text-[#C25E3E]">
            better website.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Let&apos;s create something that represents your business properly.
        </p>

        {/* Primary CTA Button */}
        <div>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#FAF9F6] text-[#141312] hover:bg-[#C25E3E] hover:text-white transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(194,94,62,0.4)] hover:-translate-y-1"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 text-xs font-mono text-neutral-400">
          Currently booking client projects for this quarter • Direct communication throughout
        </div>

      </div>
    </section>
  );
}
