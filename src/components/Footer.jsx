import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: t.nav.work, href: '#work' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
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
    <footer className="bg-[#FAF9F6] dark:bg-[#0F0E0D] border-t border-[#E8E5DD] dark:border-[#2E2C28] pt-20 pb-12 text-[#141312] dark:text-[#F7F5F0] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E5DD] dark:border-[#2E2C28]">

          {/* Brand & Positioning (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-2xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0]">
                  WEBNEST
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C25E3E] inline-block" />
              </div>

              <div className="text-xs font-mono font-medium tracking-wider text-[#C25E3E] uppercase mb-4">
                {t.footer.tagline}
              </div>

              <p className="text-sm text-[#646059] dark:text-[#A6A196] max-w-md leading-relaxed font-light mb-6">
                {t.footer.description}
              </p>
            </div>

            <div className="text-xs text-[#8F8B83] dark:text-[#7A756C]">
              {t.footer.location}
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] block mb-4">
              {t.footer.navigationTitle}
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#646059] dark:text-[#A6A196] hover:text-[#C25E3E] dark:hover:text-[#C25E3E] transition-colors"
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
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] block mb-4">
                {t.footer.connectTitle}
              </span>
              <div className="flex items-center gap-2.5 mb-6">
                <a
                  href="https://www.linkedin.com/in/abinaya-saravanan-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/abinayapoojha1411-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all duration-300"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:webnest.web7@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E] hover:bg-[#C25E3E] hover:text-white flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all duration-300"
                  aria-label="Send Email to webnest.web7@gmail.com"
                  title="Email: webnest.web7@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E5DD] dark:border-[#2E2C28] bg-white dark:bg-[#171614] text-xs font-semibold uppercase tracking-wider text-[#646059] dark:text-[#A6A196] hover:text-[#141312] dark:hover:text-[#F7F5F0] hover:border-[#141312] dark:hover:border-[#F7F5F0] transition-all duration-300 shadow-2xs cursor-pointer"
              >
                <span>{t.footer.backToTop}</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1 text-[#C25E3E]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F8B83] dark:text-[#7A756C] gap-4">
          <p>{t.footer.copyright}</p>
          <p className="font-mono text-[11px]">{t.footer.builtWith}</p>
        </div>

      </div>
    </footer>
  );
}
