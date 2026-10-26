import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/processData';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#0F0E0D] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
                WORKFLOW & DELIVERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-tight mb-2 transition-colors">
              How I Work
            </h2>
            <p className="text-lg text-[#646059] dark:text-[#A6A196] font-light max-w-xl transition-colors">
              An organized 5-stage progression designed for clarity, transparency, and timely delivery.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8F8B83] dark:text-[#7A756C]">
            CLICK ANY STEP TO EXPLORE DELIVERABLES
          </div>
        </div>

        {/* Interactive Step Navigator Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {processSteps.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                activeStep === idx
                  ? 'bg-[#141312] dark:bg-[#F7F5F0] text-white dark:text-[#141312] border-[#141312] dark:border-[#F7F5F0] shadow-md -translate-y-1'
                  : 'bg-white dark:bg-[#171614] text-[#141312] dark:text-[#F7F5F0] border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E]/60 dark:hover:border-[#C25E3E]/60 hover:bg-[#FAF9F6] dark:hover:bg-[#1E1D1B]'
              }`}
            >
              <div className={`text-xs font-mono font-bold mb-2 ${
                activeStep === idx ? 'text-[#C25E3E]' : 'text-[#8F8B83] dark:text-[#7A756C]'
              }`}>
                STAGE {step.step}
              </div>
              <div className="text-base font-bold tracking-tight">
                {step.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#FFFFFF] dark:bg-[#171614] rounded-3xl border border-[#E8E5DD] dark:border-[#2E2C28] p-8 sm:p-10 lg:p-12 shadow-sm transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 cols: Stage Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] text-xs font-mono font-bold text-[#C25E3E] uppercase mb-4 transition-colors">
                Step {processSteps[activeStep].step} of 05
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] mb-3 transition-colors">
                {processSteps[activeStep].name} —{' '}
                <span className="font-serif font-normal italic text-[#C25E3E]">
                  {processSteps[activeStep].tagline}
                </span>
              </h3>

              <p className="text-base sm:text-lg text-[#646059] dark:text-[#A6A196] leading-relaxed mb-8 font-light transition-colors">
                {processSteps[activeStep].details}
              </p>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-4">
                {activeStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF9F6] dark:bg-[#1E1D1B] text-[#141312] dark:text-[#F7F5F0] hover:bg-[#E8E5DD] dark:hover:bg-[#2A2825] border border-[#E8E5DD] dark:border-[#2E2C28] transition-colors"
                  >
                    ← Previous Step
                  </button>
                )}

                {activeStep < processSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-white dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span>Next: {processSteps[activeStep + 1].name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C25E3E] text-white hover:bg-[#A84E32] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Ready to Start? Get in Touch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right 5 cols: Deliverables Checklist */}
            <div className="lg:col-span-5 bg-[#FAF9F6] dark:bg-[#1E1D1B] rounded-2xl p-6 sm:p-8 border border-[#E8E5DD] dark:border-[#2E2C28] transition-colors">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B83] dark:text-[#7A756C] mb-4">
                Key Deliverables for this Stage
              </div>
              <ul className="space-y-4">
                {processSteps[activeStep].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#141312] dark:bg-[#F7F5F0] text-white dark:text-[#141312] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white dark:text-[#141312]" />
                    </div>
                    <span className="text-sm font-medium text-[#141312] dark:text-[#F7F5F0] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#E8E5DD] dark:border-[#2E2C28] text-xs text-[#646059] dark:text-[#A6A196] transition-colors">
                Continuous communication via WhatsApp / Email throughout.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
