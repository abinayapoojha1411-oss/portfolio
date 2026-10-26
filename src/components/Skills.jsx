import React from 'react';
import { skillGroups } from '../data/skillsData';

export default function Skills() {
  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
              TECHNICAL FOUNDATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] leading-tight mb-4">
            Tools I Work With
          </h2>
          <p className="text-lg text-[#646059] font-light">
            A practical, modern toolset chosen for reliability, high responsiveness, and clean code standards.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-[#E8E5DD] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-5 border-b border-[#E8E5DD]">
                  <h3 className="text-lg font-bold text-[#141312] tracking-tight mb-1">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#8F8B83] leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Minimal Badges / Pills */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill bg-white rounded-xl p-3 border border-[#E8E5DD] hover:border-[#C25E3E]/50 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#141312] group-hover/skill:text-[#C25E3E] transition-colors">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8E5DD] group-hover/skill:bg-[#C25E3E] transition-colors" />
                      </div>
                      <p className="text-[11px] text-[#646059] font-light">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E5DD]/60 flex items-center justify-between text-[11px] font-mono text-[#8F8B83]">
                <span>Status</span>
                <span className="text-emerald-700 font-medium">Active In Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
