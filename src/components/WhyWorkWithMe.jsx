import React from 'react';
import { Compass, Smartphone, MousePointerClick, LifeBuoy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Compass, Smartphone, MousePointerClick, LifeBuoy];

export default function WhyWorkWithMe() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF] dark:bg-[#141312] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
              {t.whyWorkWithMe.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-tight mb-4 transition-colors">
            {t.whyWorkWithMe.title}
          </h2>
          <p className="text-lg text-[#646059] dark:text-[#A6A196] font-light transition-colors">
            {t.whyWorkWithMe.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.whyWorkWithMe.points.map((pt, idx) => {
            const Icon = icons[idx] || Compass;
            return (
              <div
                key={pt.number}
                className="group relative bg-[#FAF9F6] dark:bg-[#1A1917] rounded-2xl p-7 border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E]/60 dark:hover:border-[#C25E3E]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#23221F] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-[#C25E3E] group-hover:text-white group-hover:border-[#C25E3E] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8F8B83] dark:text-[#7A756C] group-hover:text-[#C25E3E] transition-colors">
                      {pt.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141312] dark:text-[#F7F5F0] mb-3 tracking-tight group-hover:text-[#C25E3E] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed font-normal transition-colors">
                    {pt.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E5DD]/60 dark:border-[#2E2C28]/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F8B83] dark:text-[#7A756C]">
                    Committed Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
