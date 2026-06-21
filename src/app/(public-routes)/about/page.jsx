import React from 'react';
import Image from 'next/image';
import { 
  Target, 
  Eye, 
  TrendingUp, 
  BarChart3, 
  Search, 
  MapPin, 
  MousePointerClick, 
  Smartphone, 
  Monitor 
} from 'lucide-react';

export const metadata = {
  title: 'About Aksh Digital | Digital Marketing Agency in Jaipur & India',
  description: 'Learn about Aksh Digital, a premium digital marketing agency in Jaipur helping businesses across India grow with SEO, Google Ads, and performance marketing strategies.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-28 pt-5 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f8f6] -z-10 rounded-l-full hidden lg:block translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-[#ff6a55] font-semibold text-sm uppercase tracking-wider block mb-3">
                  About Aksh Digital
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#131433] leading-tight">
                  Strategic Digital Marketing Agency in Jaipur
                </h1>
              </div>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Aksh Digital is a performance-driven digital marketing agency in Jaipur committed to helping businesses scale with structured strategy, data-backed decisions, and measurable growth.
                </p>
                <p>
                  Founded with a clear vision to deliver real business results, Aksh Digital combines 4+ years of hands-on experience in SEO, paid advertising, and brand positioning to build sustainable digital growth systems for companies across Jaipur and India.
                </p>
                <p className="font-medium text-[#131433] border-l-4 border-[#ff6a55] pl-4">
                  We are not a typical marketing company that focuses on vanity metrics. Our approach is revenue-focused, conversion-oriented, and strategically aligned with your business goals.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Aksh Digital Team Meeting" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131433]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-[#fff0ed] flex items-center justify-center text-[#ff6a55] mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-[#131433] mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to become Jaipur’s most trusted digital marketing agency while delivering scalable marketing systems for brands across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to help businesses move from inconsistent lead flow to predictable digital growth using SEO services, Google Ads campaigns, social media marketing, and high-converting websites.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#131433] rounded-2xl shadow-xl p-10 text-white hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To build a performance-focused digital marketing agency that sets a benchmark for structured execution, transparent reporting, and long-term partnerships.
              </p>
              <div className="bg-white/10 p-5 rounded-lg border border-white/10">
                <p className="font-semibold text-[#ff6a55]">
                  Aksh Digital is built on clarity, performance, and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#131433] mb-4">What Makes Aksh Digital Different?</h2>
            <p className="text-lg text-gray-600 font-medium">We treat every client’s business like our own growth project.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Strategy before execution', icon: Target },
              { title: 'ROI-driven marketing campaigns', icon: TrendingUp },
              { title: 'Advanced SEO and paid ad frameworks', icon: Search },
              { title: 'Transparent monthly reporting', icon: BarChart3 },
              { title: 'Jaipur-based expertise with Pan-India scalability', icon: MapPin },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mt-1">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#131433] mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Our team specializes in building comprehensive marketing engines.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Search Engine Optimization (SEO)', icon: Search, desc: 'Climb rankings and increase organic traffic' },
              { title: 'Local SEO & Google My Business', icon: MapPin, desc: 'Dominate local search results in your area' },
              { title: 'Google Ads & PPC Campaigns', icon: MousePointerClick, desc: 'High-intent traffic that converts' },
              { title: 'Social Media Marketing & Meta Ads', icon: Smartphone, desc: 'Engage audience and drive targeted leads' },
              { title: 'Website Development & CRO', icon: Monitor, desc: 'High-converting websites optimized for sales' },
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:border-[#ff6a55]/20">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-[#131433] group-hover:bg-[#ff6a55] group-hover:text-white transition-colors duration-300 mb-6">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#131433] mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
              Whether you are a Jaipur-based business or a growing brand anywhere in India, 
              <span className="font-bold"> Aksh Digital builds marketing systems that drive consistent growth.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
