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
    <section className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
              TAILORED INDUSTRY EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] leading-tight mb-4">
            Built for Different Businesses
          </h2>
          <p className="text-lg text-[#646059] font-light">
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
                className="group bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E5DD] hover:border-[#C25E3E]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] flex items-center justify-center text-[#141312] group-hover:bg-[#C25E3E] group-hover:text-white group-hover:border-[#C25E3E] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8F8B83]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#141312] mb-2 tracking-tight group-hover:text-[#C25E3E] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#646059] leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F4F1EA] flex items-center justify-between text-[11px] text-[#8F8B83] group-hover:text-[#141312] transition-colors">
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
