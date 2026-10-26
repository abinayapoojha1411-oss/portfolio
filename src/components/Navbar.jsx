import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

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
          ? 'bg-[#FAF9F6]/90 dark:bg-[#0F0E0D]/90 backdrop-blur-md border-b border-[#E8E5DD] dark:border-[#2E2C28] shadow-[0_4px_20px_-8px_rgba(20,19,18,0.06)] dark:shadow-[0_4px_25px_-8px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Logo & Dark/Light Mode Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-1.5 focus:outline-none"
            aria-label="Abinaya Portfolio Home"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] transition-colors">
              ABINAYA
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C25E3E] inline-block transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Luxury Theme Toggle Pill Placed Right Near the Name */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F4F1EA] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] text-xs font-mono text-[#646059] dark:text-[#A6A196] hover:text-[#141312] dark:hover:text-[#F7F5F0] transition-all duration-300 hover:scale-105 shadow-2xs"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#F7F5F0]">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#141312]" />
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#141312]">DARK</span>
              </>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[#646059] dark:text-[#A6A196] hover:text-[#141312] dark:hover:text-[#F7F5F0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C25E3E] hover:after:w-full after:transition-all after:duration-300"
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
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-[#FAF9F6] dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#141312] dark:text-[#F7F5F0] hover:bg-[#F4F1EA] dark:hover:bg-[#1E1D1B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-[#FAF9F6]/98 dark:bg-[#0F0E0D]/98 backdrop-blur-xl border-b border-[#E8E5DD] dark:border-[#2E2C28] shadow-xl transition-all duration-300 ease-in-out px-6 py-8 flex flex-col gap-6 ${
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
              className="text-lg font-medium text-[#141312] dark:text-[#F7F5F0] hover:text-[#C25E3E] py-2 border-b border-[#E8E5DD]/50 dark:border-[#2E2C28]/50 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#8F8B83] dark:text-[#7A756B] font-mono">0{navLinks.indexOf(link) + 1}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-[#FAF9F6] dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-all duration-300 text-center mt-2 shadow-md"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="pt-4 text-xs text-center text-[#8F8B83] dark:text-[#7A756B] border-t border-[#E8E5DD]/60 dark:border-[#2E2C28]/60">
          Available for freelance projects • India
        </div>
      </div>
    </header>
  );
}
