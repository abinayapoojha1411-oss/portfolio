import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    websiteType: 'Business Website',
    budget: '₹25,000 – ₹50,000',
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
    'Website Redesign',
    'Custom Web Application',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000+',
    'Not sure yet'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    /* 
      ======================================================================
      BACKEND INTEGRATION NOTICE FOR ABINAYA:
      ======================================================================
      To connect your preferred backend service, replace this timeout with:
      - Formspree: fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData) })
      - EmailJS: emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      - Supabase: supabase.from("enquiries").insert([formData])
      - Web3Forms: fetch("https://api.web3forms.com/submit", { ... })
      ======================================================================
    */
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAF9F6] border-b border-[#E8E5DD]">
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

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141312] leading-[1.08] mb-6">
                Have an idea?{' '}
                <span className="font-serif italic font-normal text-[#C25E3E]">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#646059] leading-relaxed mb-8 font-light">
                Tell me what you need and I&apos;ll get back to you with the next steps.
              </p>

              {/* Direct Availability Note */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E5DD] mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-[#C25E3E]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141312]">
                    Response Time
                  </span>
                </div>
                <p className="text-xs text-[#646059] leading-relaxed">
                  I typically respond to project inquiries within 24 business hours with initial questions or a calendar link for a brief discovery chat.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8F8B83] block mb-2">
                  Direct Contact Channels
                </span>

                {/* Email Option */}
                <a
                  href="mailto:abinaya.developer@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E5DD] hover:border-[#C25E3E] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E8E5DD] flex items-center justify-center text-[#141312] group-hover:bg-[#C25E3E] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#141312]">Email Me</div>
                      <div className="text-xs text-[#646059]">abinaya.developer@gmail.com</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8B83] group-hover:text-[#C25E3E] transition-colors" />
                </a>

                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#FFFFFF] border border-[#E8E5DD] hover:border-[#C25E3E] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E8E5DD] flex items-center justify-center text-[#141312] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#141312]">WhatsApp</div>
                      <div className="text-xs text-[#646059]">Direct Chat for Fast Responses</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8B83] group-hover:text-[#C25E3E] transition-colors" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-[#E8E5DD]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8F8B83] block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DD] hover:border-[#141312] hover:bg-[#141312] hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DD] hover:border-[#141312] hover:bg-[#141312] hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DD] hover:border-[#141312] hover:bg-[#141312] hover:text-white flex items-center justify-center text-[#646059] transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): The Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#E8E5DD] shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141312] mb-3 tracking-tight">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-[#646059] max-w-md mx-auto mb-8 leading-relaxed font-light">
                    Thank you, <strong className="text-[#141312]">{formData.name}</strong>. I will review your project requirements for <strong className="text-[#141312]">{formData.business}</strong> and get back to you at <strong className="text-[#141312]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        business: '',
                        websiteType: 'Business Website',
                        budget: '₹25,000 – ₹50,000',
                        details: ''
                      });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#141312] text-white hover:bg-[#C25E3E] transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                        Your Name <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#141312] placeholder-[#8F8B83] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] focus:border-[#C25E3E]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                        Email Address <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="priya@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#141312] placeholder-[#8F8B83] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] focus:border-[#C25E3E]'
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
                    <label htmlFor="business" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                      Business / Brand Name <span className="text-[#C25E3E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g. Studio Vista Architecture"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#141312] placeholder-[#8F8B83] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                        errors.business ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] focus:border-[#C25E3E]'
                      }`}
                    />
                    {errors.business && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.business}
                      </p>
                    )}
                  </div>

                  {/* Website Type & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="websiteType" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                        Website Type
                      </label>
                      <select
                        id="websiteType"
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] text-sm text-[#141312] focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors"
                      >
                        {websiteTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E5DD] text-sm text-[#141312] focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#141312] mb-2">
                      Project Details <span className="text-[#C25E3E]">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell me briefly about what you are looking to build, any inspirations, or target completion dates..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#141312] placeholder-[#8F8B83] focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40 transition-colors ${
                        errors.details ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5DD] focus:border-[#C25E3E]'
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
                      className="group w-full py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#141312] text-[#FAF9F6] hover:bg-[#C25E3E] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
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
                    <p className="text-[11px] text-center text-[#8F8B83] mt-3 font-light">
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
