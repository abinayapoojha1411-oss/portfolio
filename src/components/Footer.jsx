import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from './SocialIcons';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="bg-[#FAF9F6] border-t border-[#E8E5DD] pt-20 pb-12 text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E5DD]">

          {/* Brand & Positioning (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-2xl font-bold tracking-tight text-[#141312]">
                  ABINAYA
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C25E3E] inline-block" />
              </div>

              <div className="text-xs font-mono font-medium tracking-wider text-[#646059] uppercase mb-4">
                Freelance Web Designer &amp; Developer
              </div>

              <p className="text-sm text-[#646059] max-w-md leading-relaxed font-light mb-6">
                Building modern digital experiences for ambitious businesses.
              </p>
            </div>

            <div className="text-xs text-[#8F8B83]">
              Based in India • Working with clients globally
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312] block mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#646059] hover:text-[#C25E3E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312] block mb-4">
                Connect
              </span>
              <div className="flex items-center gap-2.5 mb-6">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DD] hover:border-[#141312] hover:bg-[#141312] hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/abinayapoojha1411-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DD] hover:border-[#141312] hover:bg-[#141312] hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/918667696928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-[#E8E5DD] hover:border-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="WhatsApp Chat (+91 86676 96928)"
                  title="WhatsApp: +91 86676 96928"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E5DD] bg-white text-xs font-semibold uppercase tracking-wider text-[#646059] hover:text-[#141312] hover:border-[#141312] transition-all duration-300 shadow-2xs"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1 text-[#C25E3E]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F8B83] gap-4">
          <p>© 2026 Abinaya. All rights reserved.</p>
          <p className="font-mono text-[11px]">Designed &amp; Developed with Clean React &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
