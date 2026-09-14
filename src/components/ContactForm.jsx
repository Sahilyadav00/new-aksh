"use client";
import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'seo',
<<<<<<< HEAD
=======
    targetMarket: 'local',
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
    message: '',
    analysisItems: {
      performance: false,
      seo: false,
      ads: false,
      gaps: false,
    }
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (key) => {
    setFormData(prev => ({
      ...prev,
      analysisItems: {
        ...prev.analysisItems,
        [key]: !prev.analysisItems[key]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          service: 'seo',
<<<<<<< HEAD
=======
          targetMarket: 'local',
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
          message: '',
          analysisItems: {
            performance: false,
            seo: false,
            ads: false,
            gaps: false,
          }
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:p-10">
<<<<<<< HEAD
      <h3 className="text-2xl font-bold text-[#131433] mb-6">Book a Free Consultation</h3>
      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Schedule a strategy call with Aksh Digital and receive a free digital audit for your website or ad campaigns.
=======
      <h3 className="text-2xl font-semibold text-[#14183e] mb-4">Book a Free Growth &amp; Technical Audit</h3>
      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Our specialists will review your website, keyword visibility, and ad accounts — then schedule a focused strategy call to map your growth roadmap.
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
      </p>

      {status === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>
          <h4 className="text-xl font-bold text-emerald-800">Strategy Call Requested!</h4>
          <p className="text-emerald-700 text-sm max-w-sm mx-auto">
            Thank you! Our growth experts will review your details and reach out within 24 hours to schedule your audit call.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-emerald-600 font-semibold hover:text-emerald-800 text-sm underline transition-colors"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
<<<<<<< HEAD
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
=======
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-primary">*</span></label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
<<<<<<< HEAD
                placeholder="e.g. John Doe"
=======
                placeholder="Enter your full name"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800"
              />
            </div>
            <div>
<<<<<<< HEAD
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
=======
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Business Email <span className="text-primary">*</span></label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
<<<<<<< HEAD
                placeholder="e.g. john@company.com"
=======
                placeholder="name@company.com"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
<<<<<<< HEAD
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
=======
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone / WhatsApp Number <span className="text-primary">*</span></label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
<<<<<<< HEAD
                placeholder="e.g. +91 98765 43210"
=======
                placeholder="Include country code e.g. +91 98765 43210"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800"
              />
            </div>
            <div>
<<<<<<< HEAD
              <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Website URL</label>
=======
              <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Website / App URL</label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
<<<<<<< HEAD
                placeholder="e.g. https://yourbusiness.com"
=======
                placeholder="https://yourwebsite.com"
                placeholder="https://yourbusiness.com"
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800"
              />
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service of Interest</label>
=======
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Primary Service Needed</label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 bg-white"
            >
<<<<<<< HEAD
              <option value="seo">Search Engine Optimization (SEO)</option>
              <option value="local-seo">Local SEO & GMB Optimization</option>
              <option value="google-ads">Google Ads & PPC Campaigns</option>
              <option value="social-media">Social Media & Meta Ads</option>
              <option value="web-dev">Website Development & CRO</option>
=======
              <option value="seo">SEO Strategies &amp; Organic Search Dominance</option>
              <option value="performance">Performance Marketing (Google &amp; Meta Ads)</option>
              <option value="web-dev">Web &amp; Mobile App Development (Next.js, React, Node.js)</option>
              <option value="social-media">Social Media Marketing &amp; Brand Design</option>
              <option value="full-service">Full-Service Digital Transformation</option>
            </select>
          </div>

          <div>
            <label htmlFor="targetMarket" className="block text-sm font-semibold text-slate-700 mb-2">Target Market</label>
            <select
              id="targetMarket"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 bg-white"
            >
              <option value="local">Local (Jaipur / India)</option>
              <option value="national">National Pan-India</option>
              <option value="international">International (USA / UK / Global)</option>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            </select>
          </div>

          <div>
            <span className="block text-sm font-semibold text-slate-700 mb-3">What should we analyze in your digital audit?</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: 'performance', label: 'Website performance' },
                { key: 'seo', label: 'SEO visibility' },
                { key: 'ads', label: 'Ad account structure' },
                { key: 'gaps', label: 'Lead generation gaps' },
              ].map((item) => (
                <label 
                  key={item.key} 
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                    formData.analysisItems[item.key] 
                      ? 'border-[#ff6a55] bg-[#fffaf9]' 
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.analysisItems[item.key]}
                    onChange={() => handleCheckboxChange(item.key)}
                    className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                  />
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
=======
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Project Details / Message</label>
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
<<<<<<< HEAD
              placeholder="Tell us a bit about your business goals..."
=======
              placeholder="Briefly describe your goals, current bottlenecks, or timeline..."
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-500 text-sm font-semibold text-center">
              Failed to submit request. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-linear-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-xl hover:shadow-[0_4px_20px_rgba(210,92,65,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
<<<<<<< HEAD
                Scheduling Call...
              </>
            ) : (
              <>
                Book My Strategy Call
=======
                Submitting...
              </>
            ) : (
              <>
                Claim Your Free Strategy Session
>>>>>>> 9b27782b22dc25313cff6685ac30d7a71074b758
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
