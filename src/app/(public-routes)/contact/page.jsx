import React from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export const metadata = {
    title: 'Contact Aksh Digital | Digital Marketing Agency in Jaipur',
    description: 'Contact Aksh Digital, a leading digital marketing agency in Jaipur offering SEO, Google Ads, and social media marketing services across India.',
};

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone Number',
            detail: '+91 98765 43210',
            action: 'tel:+919876543210',
            actionLabel: 'Call Us Now',
        },
        {
            icon: Mail,
            title: 'Email Address',
            detail: 'info@akshdigital.com',
            action: 'mailto:info@akshdigital.com',
            actionLabel: 'Write to Us',
        },
        {
            icon: MapPin,
            title: 'Office Location',
            detail: 'Jaipur, Rajasthan, India',
            action: 'https://maps.google.com/?q=Jaipur,Rajasthan,India',
            actionLabel: 'Get Directions',
        },
        {
            icon: Clock,
            title: 'Working Hours',
            detail: 'Monday – Saturday | 10 AM – 7 PM',
            action: null,
            actionLabel: 'Closed on Sundays',
        },
    ];

    const auditFeatures = [
        'Detailed Website Performance analysis',
        'Comprehensive SEO Visibility audit',
        'Ad Account Structure inspection',
        'Key Lead Generation Gaps identification',
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pb-20 lg:pb-28 pt-10 flex overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-[#f0f8f6] -z-10 rounded-r-full hidden lg:block -translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-[#ff6a55] font-semibold text-sm uppercase tracking-wider block mb-3">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131433] leading-tight mb-6">
                            Contact Aksh Digital – Let’s Build Your Growth Strategy
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            Looking for a reliable digital marketing agency in Jaipur that focuses on real results?
                            Connect with Aksh Digital today and let’s discuss how we can scale your business through
                            SEO, Google Ads, social media marketing, and performance-driven strategies.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/home/icon-01.webp" alt="Contact Us" width={500} height={500} />
                </div>
            </section>

            {/* Main Content (Contact Info & Form) */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Contact details & Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-[#131433]">Get in Touch</h2>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                    Whether you are a local Jaipur business or a brand operating anywhere in India,
                                    our team is ready to build a customized digital marketing plan for your business.
                                </p>
                            </div>

                            {/* Grid of contact details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-[#fff0ed] flex items-center justify-center text-[#ff6a55] mb-4">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#131433] text-base mb-1">{info.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3 font-medium">{info.detail}</p>
                                        {info.action ? (
                                            <a
                                                href={info.action}
                                                target={info.action.startsWith('http') ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                className="text-xs font-bold text-[#ff6a55] hover:text-[#e0533e] transition-colors"
                                            >
                                                {info.actionLabel} &rarr;
                                            </a>
                                        ) : (
                                            <span className="text-xs text-gray-400 font-medium">{info.actionLabel}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Free audit highlights card */}
                            <div className="bg-[#131433] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10">
                                    <Sparkles className="w-48 h-48 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#ff6a55]" />
                                    What is included in the Audit?
                                </h3>
                                <p className="text-white/70 text-sm mb-6">
                                    Our growth roadmap audit is completely custom-made by Aksh Digital experts, pinpointing direct opportunities to double your revenue flow.
                                </p>
                                <ul className="space-y-3">
                                    {auditFeatures.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-white/90">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Interactive Consultation Request Form */}
                        <div id="consultation-form" className="lg:col-span-7">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* Embedded Map Section */}
            <section className="w-full h-[450px] relative bg-slate-100">
                <iframe
                    title="Aksh Digital Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629050516898!2d75.78727085!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e16275039f%3A0x67c33116dfa996f0!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                />
            </section>
        </div>
    );
}
