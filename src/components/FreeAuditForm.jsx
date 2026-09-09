"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function FreeAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    website: "",
    targetRegion: "India",
    primaryGoal: "SEO Strategies",
    contactInfo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-primary/5">
      {submitted ? (
        <div className="text-center py-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Audit Request Received!</h3>
          <p className="mt-2 text-slate-600 max-w-md mx-auto">
            Our technical & growth audit team is analyzing your domain. You will receive your custom conversion & SEO gap report within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-semibold text-primary hover:underline"
          >
            Submit another domain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Website URL *
              </label>
              <input
                type="url"
                required
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Target Region *
              </label>
              <select
                value={formData.targetRegion}
                onChange={(e) => setFormData({ ...formData, targetRegion: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="India">Pan-India / Local Metros</option>
                <option value="USA">USA & Canada</option>
                <option value="UK">UK & Europe</option>
                <option value="Global">Worldwide / Multi-Market</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Primary Goal *
              </label>
              <select
                value={formData.primaryGoal}
                onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="SEO Strategies">Search Engine Optimization (SEO)</option>
                <option value="Paid Ads">Performance Marketing / Paid Ads</option>
                <option value="Web Development">Web & Mobile App Development</option>
                <option value="Social Media">Social Media & Brand Building</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email or WhatsApp *
              </label>
              <input
                type="text"
                required
                placeholder="name@company.com or +91..."
                value={formData.contactInfo}
                onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Sparkles className="h-5 w-5" />
              <span>Get Free Technical & SEO Growth Audit</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
          </div>
          <p className="text-center text-xs text-slate-500 mt-2">
            🔒 100% Free • No Credit Card Required • Delivered within 24 hours
          </p>
        </form>
      )}
    </div>
  );
}
