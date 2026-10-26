import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export default function ValueProp() {
  const pillars = [
    {
      icon: Target,
      title: 'Business-Focused Strategy',
      text: 'Every section is engineered to clarify your offer, build client trust, and guide visitors toward booking or buying.'
    },
    {
      icon: Zap,
      title: 'Speed & Modern Code',
      text: 'Handcrafted with clean React and modern CSS for lightning-fast loading, smooth scrolling, and zero clunky page bloat.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Execution',
      text: 'Direct communication, transparent delivery timelines, and end-to-end guidance from initial wireframe to live domain.'
    }
  ];

  return (
    <section id="value" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#141312] border-y border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Editorial Subheading Accent */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="h-[1px] w-8 bg-[#C25E3E]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
            THE FOUNDATION
          </span>
        </div>

        {/* Large Typography Statement */}
        <div className="max-w-4xl mb-14 md:mb-20">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#141312] dark:text-[#F7F5F0] font-normal leading-[1.25] mb-6 tracking-tight transition-colors">
            Your website is often the{' '}
            <span className="italic font-serif text-[#C25E3E]">first impression</span>{' '}
            of your business.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-[#646059] dark:text-[#A6A196] leading-relaxed font-light transition-colors">
            I combine clean design, responsive development and business-focused thinking to create websites that don’t just look good — they help people understand your business and take action.
          </p>
        </div>

        {/* Three Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-10 border-t border-[#E8E5DD] dark:border-[#2E2C28] transition-colors">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] dark:bg-[#1A1917] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:border-[#C25E3E] group-hover:text-[#C25E3E] transition-all duration-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#141312] dark:text-[#F7F5F0] mb-2 tracking-tight transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed transition-colors">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
