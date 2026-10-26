import React from 'react';
import { Palette, Code, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Clean, modern and user-focused interfaces.',
      details: 'Visual hierarchy, typography rhythm, intentional whitespace and modern aesthetics tailored to your business identity.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Responsive and functional web experiences.',
      details: 'Lightweight, semantic React code that functions flawlessly across smartphones, tablets and desktop screens.'
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'Websites structured around real business goals.',
      details: 'Designed with the customer journey in mind — reducing friction and maximizing discovery and enquiry conversion.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#0F0E0D] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-[1.15] mb-6 transition-colors">
              I care about how a website feels —{' '}
              <span className="font-serif italic font-normal text-[#C25E3E]">
                and what it achieves.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#646059] dark:text-[#A6A196] leading-relaxed font-light transition-colors">
              <p>
                I&apos;m <strong className="text-[#141312] dark:text-[#F7F5F0] font-semibold">Abinaya</strong>, a freelance web designer and developer focused on creating modern digital experiences for businesses and professionals.
              </p>
              <p>
                I enjoy turning ideas into clean, responsive and visually engaging websites that are easy to use and built around a clear purpose.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#E8E5DD] dark:border-[#2E2C28] flex items-center gap-6 text-xs text-[#646059] dark:text-[#A6A196] transition-colors">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C25E3E]" />
                <span>Freelance Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C25E3E]" />
                <span>Modern Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C25E3E]" />
                <span>Direct Collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#FFFFFF] dark:bg-[#171614] rounded-2xl p-6 sm:p-8 border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E]/60 dark:hover:border-[#C25E3E]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-[#C25E3E] group-hover:text-white group-hover:border-[#C25E3E] transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25E3E] mb-1">
                        Pillar 0{idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#141312] dark:text-[#F7F5F0] mb-1 tracking-tight transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#141312] dark:text-[#E8E5DD] mb-2 transition-colors">
                        {item.description}
                      </p>
                      <p className="text-xs sm:text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed transition-colors">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
