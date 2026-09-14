import React from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Aksh Digital | Digital Marketing & Web Development Agency Jaipur',
    description: 'Contact Aksh Digital for SEO, Google Ads, web development, and performance marketing. Serving businesses in Jaipur, Delhi, Mumbai, Bangalore, and global markets (USA, UK).',
    alternates: {
        canonical: 'https://www.akshdigital.in/contact/',
    },
};

const processSteps = [
    {
        step: '01',
        title: 'Preliminary Audit (Within 24 Hours)',
        desc: 'Our specialists conduct a preliminary review of your website architecture, current keyword visibility, or paid ad accounts.',
    },
    {
        step: '02',
        title: '30-Minute Discovery Call',
        desc: 'We schedule a focused strategy discussion to identify growth levers, timeline expectations, and budget alignment.',
    },
    {
        step: '03',
        title: 'Custom Action Plan',
        desc: 'We present a tailored proposal covering exact digital marketing solutions, technical milestones, and transparent monthly deliverables — with zero lock-in contracts.',
    },
];

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            detail: 'connect@akshdigital.com',
            action: 'mailto:connect@akshdigital.com',
            actionLabel: 'Send an Email',
        },
        {
            icon: Phone,
            title: 'Phone / WhatsApp',
            detail: '+91 [Insert Your Phone Number]',
            action: 'tel:+91XXXXXXXXXX',
            actionLabel: 'Call or WhatsApp',
        },
        {
            icon: MapPin,
            title: 'Office Location',
            detail: 'Jaipur, Rajasthan, India',
            sub: 'Serving: Jaipur, Delhi NCR, Mumbai, Bangalore, Pune, Indore & Global Markets',
            action: 'https://maps.google.com/?q=Jaipur,Rajasthan,India',
            actionLabel: 'Get Directions',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            detail: 'Monday – Saturday | 9:30 AM – 7:00 PM IST',
            sub: 'Dedicated overlap support available for US/UK client timezones',
            action: null,
            actionLabel: null,
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
                <div className="absolute top-0 left-0 w-1/3 h-full bg-[#f0f8f6] -z-10 rounded-r-full hidden lg:block -translate-x-1/4" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="text-sm font-semibold text-primary sm:text-[15px]">
                                Let&apos;s Connect
                            </span>
                            <span className="flex gap-1" aria-hidden>
                                <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                                <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                                <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                            </span>
                        </div>
                        <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-semibold text-[#14183e] leading-[1.15] tracking-tight mb-6">
                            Start Your Digital Growth Journey with Aksh Digital
                        </h1>
                        <p className="text-gray-600 text-[15px] sm:text-base md:text-lg leading-relaxed">
                            Whether you are looking for a reliable digital marketing company in Jaipur, need an experienced performance marketing agency India to scale ad revenue, or require offshore development support as a digital marketing agency USA partner, our team is ready to help you scale.
                        </p>
                    </div>
                </div>
                <div className="hidden lg:flex items-end pr-8">
                    <Image src="/assets/images/home/icon-01.webp" alt="Contact Us" width={400} height={400} />
                </div>
            </section>

            {/* Main Content: Contact Info & Form */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Contact details */}
                        <div className="lg:col-span-5 space-y-10">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm font-semibold text-primary sm:text-[15px]">
                                        Reach Out Directly
                                    </span>
                                    <span className="flex gap-1" aria-hidden>
                                        <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                                        <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                                        <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                                    </span>
                                </div>
                                <h2 className="text-[26px] font-semibold leading-tight text-[#14183e] sm:text-[32px] mb-3">
                                    Direct Contact &amp; Office Information
                                </h2>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    We are headquartered in Jaipur and serve clients across India, USA, UK, and global markets.
                                </p>
                            </div>

                            {/* Contact detail cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-[#14183e] text-sm mb-1">{info.title}</h3>
                                        <p className="text-gray-700 text-sm font-medium mb-1">{info.detail}</p>
                                        {info.sub && (
                                            <p className="text-gray-500 text-xs leading-relaxed mb-2">{info.sub}</p>
                                        )}
                                        {info.action && (
                                            <a
                                                href={info.action}
                                                target={info.action.startsWith('http') ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                className="text-xs font-bold text-primary hover:text-secondary transition-colors"
                                            >
                                                {info.actionLabel} &rarr;
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Free audit highlights card */}
                            <div className="bg-[#14183e] rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10">
                                    <Sparkles className="w-48 h-48 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    What is included in the Free Audit?
                                </h3>
                                <p className="text-white/70 text-sm mb-5">
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

                        {/* Right Column: Contact Form */}
                        <div id="consultation-form" className="lg:col-span-7">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* What Happens After You Contact Us */}
            <section className="py-20 bg-[#faf9f7] border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-primary sm:text-[15px]">
                            Our Process
                        </span>
                        <span className="flex gap-1" aria-hidden>
                            <span className="h-0.5 w-6 rounded-full bg-primary/70" />
                            <span className="h-0.5 w-4 rounded-full bg-primary/50" />
                            <span className="h-0.5 w-2 rounded-full bg-primary/30" />
                        </span>
                    </div>
                    <h2 className="text-[28px] font-semibold leading-tight text-[#14183e] sm:text-[34px] md:text-[40px] mb-12">
                        What Happens After You Contact Us?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {processSteps.map(({ step, title, desc }) => (
                            <div key={step} className="relative flex flex-col p-8 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                                <span className="text-[48px] font-black text-primary/10 leading-none mb-4 select-none">
                                    {step}
                                </span>
                                <h3 className="text-lg font-semibold text-[#14183e] mb-3">{title}</h3>
                                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                        ))}
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
                    className=""
                />
            </section>
        </div>
    );
}

