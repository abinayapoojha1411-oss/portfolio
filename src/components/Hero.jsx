import React from 'react';
import { ArrowRight, ArrowDown, Lock, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#FAF9F6]"
    >
      {/* Subtle editorial geometric grid line accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#141312 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small Eyebrow Text */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E8E5DD] mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#646059]">
                FREELANCE WEB DESIGNER & DEVELOPER
              </span>
            </div>

            {/* Main Dominant Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#141312] leading-[1.08] mb-6 md:mb-8">
              I build websites that make businesses{' '}
              <span className="font-serif italic font-normal text-[#C25E3E] relative inline-block">
                stand out.
                <svg
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-2 text-[#C25E3E]/20"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#646059] leading-relaxed max-w-2xl mb-8 md:mb-10 font-normal">
              Modern, responsive websites for businesses, brands and professionals — designed to look exceptional and turn visitors into enquiries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#F4F1EA] text-[#141312] hover:bg-[#E8E5DD] border border-[#E8E5DD] hover:border-[#D8D4CA] transition-all duration-300 text-center"
              >
                Let&apos;s Work Together
              </a>
            </div>

            {/* Availability Status Badge */}
            <div className="flex items-center gap-3 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="beacon-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#646059]">
                Available for freelance projects • India
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Browser Mockup with Subtle Floating Animation */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Subtle glow backdrop behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#C25E3E]/10 via-[#F4F1EA] to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="animate-subtle-float relative">
              {/* Browser Window Chrome */}
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E5DD] shadow-[0_20px_50px_-12px_rgba(20,19,18,0.12)] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_-10px_rgba(20,19,18,0.18)]">
                
                {/* Window Top Bar / Traffic Lights */}
                <div className="bg-[#FAF9F6] border-b border-[#E8E5DD] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#E8E5DD] rounded-full text-[11px] text-[#646059] font-mono tracking-tight max-w-[210px] truncate shadow-inner">
                    <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">interiordesign-swart.vercel.app</span>
                  </div>

                  {/* External Link Action */}
                  <a
                    href="https://interiordesign-swart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8F8B83] hover:text-[#C25E3E] transition-colors p-1"
                    title="Open live website"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Mockup Screen Content: Haven Interiors */}
                <div className="relative group cursor-pointer overflow-hidden bg-[#FAF9F6]">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                    alt="Haven Interiors - Luxury interior design studio website preview"
                    className="w-full h-[260px] sm:h-[320px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-[#141312]/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-medium uppercase tracking-wider text-white w-max mb-2">
                      <Sparkles className="w-3 h-3 text-[#FAF9F6]" />
                      <span>Featured Work • Interior Design</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white mb-1">
                      Haven Interiors Studio
                    </h3>
                    <p className="text-xs text-neutral-200 line-clamp-2 font-light">
                      Bespoke residential architectural showcase with seamless consultation booking.
                    </p>
                  </div>
                </div>

                {/* Mockup Footer Bar */}
                <div className="px-4 py-2.5 bg-white border-t border-[#E8E5DD] flex items-center justify-between text-[11px] text-[#646059]">
                  <span className="font-mono">React • JavaScript • CSS</span>
                  <a
                    href="https://interiordesign-swart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#141312] hover:text-[#C25E3E] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Live</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Floating Pill Accent Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAF9F6] border border-[#E8E5DD] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-[#C25E3E]/10 text-[#C25E3E] flex items-center justify-center font-serif font-bold text-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141312]">Bespoke Code</div>
                  <div className="text-[10px] text-[#8F8B83]">Zero generic templates</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator at the bottom */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full pt-8 relative z-10 flex justify-center">
        <a
          href="#value"
          onClick={(e) => scrollToSection(e, 'value')}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-[#8F8B83] hover:text-[#141312] uppercase transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-[#C25E3E]" />
        </a>
      </div>
    </section>
  );
}
