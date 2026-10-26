import React from 'react';
import { 
  Building2, 
  Layers, 
  Sparkles, 
  Briefcase, 
  RefreshCw, 
  Code2, 
  ArrowUpRight 
} from 'lucide-react';
import { services } from '../data/servicesData';

const iconMap = {
  Building2,
  Layers,
  Sparkles,
  Briefcase,
  RefreshCw,
  Code2
};

export default function Services() {
  const handleConsultClick = (e) => {
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
    <section id="services" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#0F0E0D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
                WHAT I DO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-tight transition-colors">
              Websites built around your business.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#646059] dark:text-[#A6A196] max-w-md font-light transition-colors">
            Every deliverable is crafted from scratch to elevate your market standing and drive tangible client inquiries.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;

            return (
              <div
                key={service.number}
                className="group relative bg-[#FFFFFF] dark:bg-[#171614] rounded-2xl p-8 border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E]/60 transition-all duration-300 hover:shadow-[0_16px_36px_-12px_rgba(20,19,18,0.08)] dark:hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold text-[#8F8B83] dark:text-[#7A756B] group-hover:text-[#C25E3E] transition-colors">
                      SERVICE {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-[#C25E3E] group-hover:text-white group-hover:border-[#C25E3E] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141312] dark:text-[#F7F5F0] mb-3 group-hover:text-[#C25E3E] transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed mb-6 font-normal transition-colors">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#F4F1EA] dark:border-[#24221F]">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#646059] dark:text-[#A6A196] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]/60 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Arrow */}
                <div className="pt-4 border-t border-[#F4F1EA] dark:border-[#24221F] flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={handleConsultClick}
                    className="text-xs font-semibold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] group-hover:text-[#C25E3E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Discuss Requirements</span>
                  </a>
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F6] dark:bg-[#1E1D1B] group-hover:bg-[#C25E3E] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
