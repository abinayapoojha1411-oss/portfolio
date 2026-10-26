import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E5DD] shadow-[0_4px_20px_-8px_rgba(20,19,18,0.06)] py-3.5'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Abinaya Portfolio Home"
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#141312] transition-colors">
            ABINAYA
          </span>
          <span className="w-2 h-2 rounded-full bg-[#C25E3E] inline-block transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[#646059] hover:text-[#141312] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C25E3E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#141312] hover:bg-[#F4F1EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#FAF9F6]/98 backdrop-blur-xl border-b border-[#E8E5DD] shadow-xl transition-all duration-300 ease-in-out px-6 py-8 flex flex-col gap-6 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-medium text-[#141312] hover:text-[#C25E3E] py-2 border-b border-[#E8E5DD]/50 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#8F8B83] font-mono">0{navLinks.indexOf(link) + 1}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 text-center mt-2 shadow-md"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="pt-4 text-xs text-center text-[#8F8B83] border-t border-[#E8E5DD]/60">
          Available for freelance projects • India
        </div>
      </div>
    </header>
  );
}
