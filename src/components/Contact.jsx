import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = 'webnest.web7@gmail.com';

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const projectPrompts = [
    {
      title: 'Project Overview',
      desc: 'A quick summary of what you need (brand new website, redesign, or landing page).'
    },
    {
      title: 'Timeline & Goals',
      desc: 'Your desired launch timeline, key deliverables, and commercial objectives.'
    },
    {
      title: 'Design References',
      desc: 'Any websites, visual styles, or brands that inspire your aesthetic vision.'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#FAF9F6] dark:bg-[#0F0E0D] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle warm glow in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#C25E3E]/5 via-[#F4F1EA]/40 dark:via-[#1A1917]/40 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] dark:bg-[#1A1917] border border-[#E8E5DD] dark:border-[#2E2C28] text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E] mb-6 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25E3E]" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-[1.08] mb-6 transition-colors">
            Have an idea?{' '}
            <span className="font-serif italic font-normal text-[#C25E3E] block sm:inline">
              Let&apos;s build it together.
            </span>
          </h2>



          {/* Central High-Impact Email Showcase Card */}
          <div className="relative bg-[#FFFFFF] dark:bg-[#171614] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#E8E5DD] dark:border-[#2E2C28] shadow-[0_20px_60px_-15px_rgba(20,19,18,0.06)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] mb-12 transition-all">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E8E5DD] dark:border-[#2E2C28]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#C25E3E] shrink-0 shadow-inner">
                  <Mail className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B83] dark:text-[#7A756C] block mb-1">
                    Primary Direct Email
                  </span>
                  <a
                    href={`mailto:${email}?subject=New%20Project%20Enquiry%20%E2%80%94%20Webnest`}
                    className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-[#141312] dark:text-[#F7F5F0] hover:text-[#C25E3E] dark:hover:text-[#C25E3E] transition-colors break-all"
                    title="Click to send an email"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Action Buttons: Copy & Compose */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F4F1EA] dark:bg-[#1E1D1B] text-[#141312] dark:text-[#F7F5F0] hover:bg-[#E8E5DD] dark:hover:bg-[#2A2825] border border-[#E8E5DD] dark:border-[#2E2C28] transition-all duration-300 shadow-2xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C25E3E]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=New%20Project%20Enquiry%20%E2%80%94%20Webnest`}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-[#FAF9F6] dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Availability & Response Indicators */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#646059] dark:text-[#A6A196]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="beacon-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                </span>
                <span className="font-medium text-[#141312] dark:text-[#F7F5F0]">
                  Available for freelance projects &amp; consultations
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#8F8B83] dark:text-[#7A756C]">
                <Clock className="w-4 h-4 text-[#C25E3E]" />
                <span>Direct response within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Helpful Tips: What to include in your message */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projectPrompts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF]/70 dark:bg-[#171614]/70 rounded-2xl p-6 border border-[#E8E5DD] dark:border-[#2E2C28] transition-colors"
              >
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25E3E] mb-2">
                  0{idx + 1} • {item.title}
                </div>
                <p className="text-xs sm:text-sm text-[#646059] dark:text-[#A6A196] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Social / Profiles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E8E5DD] dark:border-[#2E2C28] text-xs text-[#8F8B83] dark:text-[#7A756C]">
            <div className="flex items-center gap-3">
              <span className="font-mono uppercase tracking-wider">Also find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/abinayapoojha1411-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px]">
              Based in India • Working with clients worldwide
            </div>
          </div>

        </div>
    </section>
  );
}
