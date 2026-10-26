import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Lock, Eye } from 'lucide-react';
import { projects } from '../data/projectsData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Interior Design', 'Hospitality', 'Photography', 'Wedding Planning', 'Fitness & Wellness'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="work" className="py-24 md:py-36 bg-[#FFFFFF] border-b border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] leading-tight mb-3">
              A few things I&apos;ve built.
            </h2>
            <p className="text-lg text-[#646059] font-light max-w-xl">
              Business-focused websites designed across different industries.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#141312] text-white shadow-sm'
                    : 'bg-[#F4F1EA] text-[#646059] hover:text-[#141312] hover:bg-[#E8E5DD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="space-y-12 md:space-y-16">
          
          {/* Project 1: Featured Large Horizontal Showcase (Haven Interiors) */}
          {filteredProjects.find(p => p.id === 'haven-interiors') && (
            <div className="group relative bg-[#FAF9F6] rounded-3xl border border-[#E8E5DD] hover:border-[#C25E3E]/60 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_24px_50px_-12px_rgba(20,19,18,0.1)] hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Browser Mockup (Left 7 cols on desktop) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden border border-[#E8E5DD] bg-white shadow-md transition-all duration-500 group-hover:shadow-xl">
                    
                    {/* Browser Chrome Header */}
                    <div className="bg-[#FFFFFF] border-b border-[#E8E5DD] px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F6] border border-[#E8E5DD] rounded-full text-[10px] sm:text-xs text-[#646059] font-mono">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        <span>interiordesign-swart.vercel.app</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8F8B83]">LIVE</span>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                        alt="Haven Interiors - Luxury interior design studio website"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#141312]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href="https://interiordesign-swart.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-white/95 text-[#141312] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 text-[#C25E3E]" />
                          <span>Explore Project</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Project Details (Right 5 cols on desktop) */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between">
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E8E5DD] text-[10px] font-mono font-bold tracking-wider text-[#C25E3E] uppercase">
                        PORTFOLIO PROJECT
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F4F1EA] text-[11px] font-medium text-[#646059] group-hover:text-[#141312] transition-colors">
                        Interior Design
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141312] mb-3 group-hover:text-[#C25E3E] transition-colors">
                      Haven Interiors
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-[#8F8B83] font-serif italic mb-4">
                      Designing Spaces That Feel Like Home • Pune & Mumbai
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#646059] leading-relaxed mb-6 font-normal">
                      A premium interior design website created to showcase residential projects, design services and the studio&apos;s visual identity.
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      <div className="text-xs text-[#646059] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
                        <span>Bespoke Project Showcase</span>
                      </div>
                      <div className="text-xs text-[#646059] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
                        <span>Consultation Booking Funnel</span>
                      </div>
                      <div className="text-xs text-[#646059] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
                        <span>Editorial Typography</span>
                      </div>
                      <div className="text-xs text-[#646059] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
                        <span>Zero Layout Shifts</span>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="pt-4 border-t border-[#E8E5DD] mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F8B83] block mb-2">
                        Technology
                      </span>
                      <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#141312] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E8E5DD]">
                        React • JavaScript • CSS
                      </div>
                    </div>
                  </div>

                  {/* Live URL Action Button */}
                  <div>
                    <a
                      href="https://interiordesign-swart.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 shadow-sm"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Projects 2, 3, 4, 5 in a sophisticated 2-column editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects
              .filter(p => p.id !== 'haven-interiors')
              .map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between bg-[#FAF9F6] rounded-3xl border border-[#E8E5DD] hover:border-[#C25E3E]/60 p-6 sm:p-7 transition-all duration-500 hover:shadow-[0_20px_45px_-10px_rgba(20,19,18,0.1)] hover:-translate-y-1.5"
                >
                  <div>
                    {/* Browser Mockup Frame */}
                    <div className="rounded-2xl overflow-hidden border border-[#E8E5DD] bg-white shadow-sm transition-all duration-500 group-hover:shadow-md mb-6">
                      
                      {/* Window Header */}
                      <div className="bg-[#FFFFFF] border-b border-[#E8E5DD] px-3.5 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-full text-[10px] text-[#646059] font-mono truncate max-w-[190px]">
                          <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{project.url.replace('https://', '')}</span>
                        </div>
                        <span className="text-[9px] font-mono text-[#8F8B83]">VERCEL</span>
                      </div>

                      {/* Image Preview */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                        <img
                          src={project.image}
                          alt={`${project.name} - ${project.category}`}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#141312]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-white/95 text-[#141312] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#C25E3E]" />
                            <span>Preview</span>
                          </a>
                        </div>
                      </div>

                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E8E5DD] text-[10px] font-mono font-bold tracking-wider text-[#C25E3E] uppercase">
                        PORTFOLIO PROJECT
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F4F1EA] text-[10px] font-medium text-[#646059] group-hover:text-[#141312] transition-colors">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141312] mb-1 group-hover:text-[#C25E3E] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs font-serif italic text-[#8F8B83] mb-3">
                      {project.headline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#646059] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Technology */}
                    <div className="pb-4 mb-4 border-b border-[#E8E5DD] flex items-center justify-between text-xs font-mono text-[#646059]">
                      <span className="text-[10px] uppercase text-[#8F8B83] font-sans">Technology:</span>
                      <span className="bg-white px-2.5 py-1 rounded border border-[#E8E5DD]">
                        React • JavaScript • CSS
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#141312] hover:bg-[#141312] hover:text-[#FAF9F6] border border-[#E8E5DD] hover:border-[#141312] transition-all duration-300"
                    >
                      <span>View Live Website</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>

        {/* View All Projects / Bottom Anchor */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F4F1EA] text-[#141312] hover:bg-[#E8E5DD] border border-[#E8E5DD] transition-all duration-300"
          >
            <span>Have a Project in Mind? Let&apos;s Build It →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
