import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import Skills from './components/Skills';
import Industries from './components/Industries';
import PortfolioCallout from './components/PortfolioCallout';
import Contact from './components/Contact';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141312] selection:bg-[#C25E3E] selection:text-white flex flex-col">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Regions */}
      <main className="flex-grow">
        {/* Full-screen Hero */}
        <Hero />

        {/* Intro / Value Proposition Statement */}
        <ValueProp />

        {/* What I Do - Services */}
        <Services />

        {/* Selected Work - Featured Projects */}
        <Projects />

        {/* About Me & Core Pillars */}
        <About />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* 5-Step Process Timeline */}
        <Process />

        {/* Tools I Work With - Grouped Skills */}
        <Skills />

        {/* Built for Different Businesses - Industries */}
        <Industries />

        {/* Portfolio Expansion Callout (No fake testimonials) */}
        <PortfolioCallout />

        {/* Professional Contact Form & Direct Channels */}
        <Contact />

        {/* Final Dramatic Minimal CTA */}
        <FinalCta />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
