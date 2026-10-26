import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PortfolioCallout() {
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
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E8E5DD] relative overflow-hidden">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#C25E3E]/5 via-[#F4F1EA]/50 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E5DD] text-xs font-mono font-bold text-[#C25E3E] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATION INVITATION</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] leading-[1.15] mb-6">
          Let&apos;s Create Something{' '}
          <span className="font-serif italic font-normal text-[#C25E3E]">
            Worth Showing.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#646059] leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          I&apos;m currently expanding my freelance portfolio and working with businesses and professionals who want a stronger online presence.
        </p>

        {/* Action button */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

      </div>
    </section>
  );
}
