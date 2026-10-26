import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    websiteType: 'Business Website',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const websiteTypes = [
    'Business Website',
    'Landing Page',
    'Portfolio Website',
    'E-commerce Website',
    'Resume',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.business.trim()) {
      errs.business = 'Please specify your business or brand name';
    }
    if (!formData.details.trim() || formData.details.trim().length < 15) {
      errs.details = 'Please share at least a short sentence (15+ characters) about your goals';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Format structured enquiry message for WhatsApp
    const message =
      `*New Project Enquiry — Abinaya Portfolio*\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📧 *Email:* ${formData.email.trim()}\n` +
      `🏢 *Business / Brand:* ${formData.business.trim()}\n` +
      `💻 *Website Type:* ${formData.websiteType}\n\n` +
      `📝 *Project Details:*\n${formData.details.trim()}`;

    const whatsappUrl = `https://wa.me/918667696928?text=${encodeURIComponent(message)}`;
    setSubmittedUrl(whatsappUrl);

    // Automatically trigger WhatsApp in a new tab/app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAF9F6] dark:bg-[#0F0E0D] border-b border-[#E8E5DD] dark:border-[#2E2C28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column (5 cols): Context & Direct Contact Options */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C25E3E]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C25E3E]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-4xl sm:5xl lg:text-6xl font-bold tracking-tight text-[#141312] dark:text-[#F7F5F0] leading-[1.08] mb-6 transition-colors">
                Have an idea?{' '}
                <span className="font-serif italic font-normal text-[#C25E3E]">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#646059] dark:text-[#A6A196] leading-relaxed mb-8 font-light transition-colors">
                Tell me what you need and I&apos;ll get back to you with the next steps.
              </p>

              {/* Direct Availability Note */}
              <div className="bg-[#FFFFFF] dark:bg-[#171614] rounded-2xl p-6 border border-[#E8E5DD] dark:border-[#2E2C28] mb-8 shadow-sm transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-[#C25E3E]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0]">
                    Response Time
                  </span>
                </div>
                <p className="text-xs text-[#646059] dark:text-[#A6A196] leading-relaxed transition-colors">
                  I typically respond to project inquiries within 24 business hours with initial questions or a calendar link for a brief discovery chat.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B83] dark:text-[#7A756C] block mb-2">
                  Direct Contact Channels
                </span>

                {/* Email Option */}
                <a
                  href="mailto:abinayapoojha1411@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E] dark:hover:border-[#C25E3E] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-[#C25E3E] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#141312] dark:text-[#F7F5F0]">Email Me</div>
                      <div className="text-xs text-[#646059] dark:text-[#A6A196]">abinayapoojha1411@gmail.com</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8B83] dark:text-[#7A756C] group-hover:text-[#C25E3E] transition-colors" />
                </a>

                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/918667696928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#C25E3E] dark:hover:border-[#C25E3E] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] flex items-center justify-center text-[#141312] dark:text-[#F7F5F0] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#141312] dark:text-[#F7F5F0]">WhatsApp</div>
                      <div className="text-xs text-[#646059] dark:text-[#A6A196]">+91 86676 96928</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8B83] dark:text-[#7A756C] group-hover:text-[#C25E3E] transition-colors" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-[#E8E5DD] dark:border-[#2E2C28]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8F8B83] dark:text-[#7A756C] block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/abinayapoojha1411-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-[#171614] border border-[#E8E5DD] dark:border-[#2E2C28] hover:border-[#141312] dark:hover:border-[#F7F5F0] hover:bg-[#141312] dark:hover:bg-[#F7F5F0] hover:text-white dark:hover:text-[#141312] flex items-center justify-center text-[#646059] dark:text-[#A6A196] transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): The Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] dark:bg-[#171614] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#E8E5DD] dark:border-[#2E2C28] shadow-sm transition-colors">

              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141312] dark:text-[#F7F5F0] mb-3 tracking-tight">
                    Enquiry Sent via WhatsApp!
                  </h3>
                  <p className="text-sm text-[#646059] dark:text-[#A6A196] max-w-md mx-auto mb-6 leading-relaxed font-light">
                    Thank you, <strong className="text-[#141312] dark:text-[#F7F5F0]">{formData.name}</strong>! Your project details have been formatted and sent directly to my WhatsApp (+91 86676 96928).
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {submittedUrl && (
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Continue in WhatsApp</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          business: '',
                          websiteType: 'Business Website',
                          details: ''
                        });
                      }}
                      className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-white dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] mb-2">
                        Your Name <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border text-sm text-[#141312] dark:text-[#F7F5F0] placeholder-[#8F8B83] dark:placeholder-[#7A756C] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] dark:border-[#2E2C28] focus:border-[#C25E3E]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] mb-2">
                        Email Address <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="priya@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border text-sm text-[#141312] dark:text-[#F7F5F0] placeholder-[#8F8B83] dark:placeholder-[#7A756C] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] dark:border-[#2E2C28] focus:border-[#C25E3E]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business / Brand Name */}
                  <div>
                    <label htmlFor="business" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] mb-2">
                      Business / Brand Name <span className="text-[#C25E3E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g. Studio Vista Architecture"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border text-sm text-[#141312] dark:text-[#F7F5F0] placeholder-[#8F8B83] dark:placeholder-[#7A756C] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                        errors.business ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] dark:border-[#2E2C28] focus:border-[#C25E3E]'
                      }`}
                    />
                    {errors.business && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.business}
                      </p>
                    )}
                  </div>

                  {/* Website Type Selector */}
                  <div>
                    <label htmlFor="websiteType" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] mb-2">
                      Website Type
                    </label>
                    <select
                      id="websiteType"
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border border-[#E8E5DD] dark:border-[#2E2C28] text-sm text-[#141312] dark:text-[#F7F5F0] focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors"
                    >
                      {websiteTypes.map((type) => (
                        <option key={type} value={type} className="bg-white dark:bg-[#1E1D1B] text-[#141312] dark:text-[#F7F5F0]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] dark:text-[#F7F5F0] mb-2">
                      Project Details <span className="text-[#C25E3E]">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell me briefly about what you are looking to build, any inspirations, or target completion dates..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E1D1B] border text-sm text-[#141312] dark:text-[#F7F5F0] placeholder-[#8F8B83] dark:placeholder-[#7A756C] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                        errors.details ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] dark:border-[#2E2C28] focus:border-[#C25E3E]'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.details}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] dark:bg-[#F7F5F0] text-[#FAF9F6] dark:text-[#141312] hover:bg-[#C25E3E] dark:hover:bg-[#C25E3E] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#8F8B83] dark:text-[#7A756C] mt-3 font-light">
                      No spam. Your project details remain strictly confidential.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
