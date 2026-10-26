import React from 'react';
import { 
  Compass, 
  Palmtree, 
  Camera, 
  Sparkles, 
  Activity, 
  UserCheck, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';
import { industries } from '../data/industriesData';

const iconMap = {
  Compass,
  Palmtree,
  Camera,
  Sparkles,
  Activity,
  UserCheck,
  ShieldCheck,
  Rocket
};

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#0F0E0D] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
              TAILORED INDUSTRY EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-tight mb-4 transition-colors">
            Built for Different Businesses
          </h2>
          <p className="text-lg text-[#646059] dark:text-[#A6A196] font-light transition-colors">
            Every sector has unique customer expectations. I craft digital presences tailored to the exact psychology and purchasing decisions of your audience.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.iconName] || Sparkles;

            return (
              <div
                key={ind.name}
                className="group bg-[#FFFFFF] dark:bg-[#171614] rounded-2xl p-6 border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E]/60 dark:hover:border-[#C25E3E]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-[#C25E3E] group-hover:text-white group-hover:border-[#C25E3E] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8F8B83] dark:text-[#7A756C]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#141312] dark:text-[#F7F5F0] mb-2 tracking-tight group-hover:text-[#C25E3E] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed font-light transition-colors">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F4F1EA] dark:border-[#252420] flex items-center justify-between text-[11px] text-[#8F8B83] dark:text-[#7A756C] group-hover:text-[#141312] dark:group-hover:text-[#F7F5F0] transition-colors">
                  <span>Custom Solution</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
