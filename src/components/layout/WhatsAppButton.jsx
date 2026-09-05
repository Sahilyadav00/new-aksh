"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { getCookie, setCookie } from "../../lib/cookies";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a welcoming tooltip after 5 seconds to invite interaction
    const timer = setTimeout(() => {
      const dismissed = getCookie("whatsapp_tooltip_dismissed");
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismissTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setCookie("whatsapp_tooltip_dismissed", "true", 30);
  };

  const whatsappNumber = "+919876543210"; // Aksh Digital Phone Number
  const initialMessage = encodeURIComponent(
    "Hi Aksh Digital! I visited your website and would like to learn more about your digital marketing services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${initialMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Interactive Tooltip Chat Prompt */}
      {showTooltip && (
        <div className="relative mb-3 max-w-72 bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 flex gap-3 items-start animate-fade-in-up pointer-events-auto">
          <button
            onClick={handleDismissTooltip}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors p-0.5 rounded-full hover:bg-slate-100"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
            <MessageSquare className="w-4.5 h-4.5" />
          </div>
          
          <div className="flex-1 min-w-0 pr-2">
            <p className="text-xs font-bold text-slate-800">Chat with Aksh Digital</p>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Have questions about SEO or digital marketing? Click below to chat directly with us on WhatsApp!
            </p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transform hover:-translate-y-1 transition-all duration-300 pointer-events-auto cursor-pointer"
        aria-label="Contact us on WhatsApp"
        onClick={() => {
          // If clicked, we dismiss the tooltip
          setShowTooltip(false);
          setCookie("whatsapp_tooltip_dismissed", "true", 30);
        }}
      >
        {/* Pulsing ring animation around the button */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:animate-none scale-105"></span>

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.764.456 3.48 1.332 5.004L2 22l5.124-1.308a9.927 9.927 0 0 0 4.888 1.272c5.532 0 10.012-4.48 10.012-10.012C22.024 6.48 17.544 2 12.012 2zm6.264 14.34c-.252.708-1.476 1.344-2.028 1.416-.504.072-1.02.108-3.192-.792-2.772-1.14-4.56-3.96-4.704-4.14-.132-.18-1.14-1.512-1.14-2.892 0-1.38.72-2.052.972-2.328.252-.276.552-.348.732-.348.18 0 .36 0 .516.012.168.012.396-.06.624.492.228.552.78 1.908.852 2.052.072.144.12.312.024.504-.096.192-.144.312-.288.48-.144.168-.3.372-.432.504-.144.144-.3.3-.132.588.168.288.756 1.248 1.62 2.016.9 1.104 1.632 1.44 1.92 1.584.288.144.456.12.624-.072.168-.192.732-.852.924-1.14.192-.288.384-.24.648-.144.264.096 1.68.792 1.968.936.288.144.48.216.552.336.072.132.072.768-.18 1.476z" />
        </svg>

        {/* Hover Tooltip showing simple description on standard mouse hover */}
        <span className="absolute right-16 scale-0 origin-right transition-all duration-200 group-hover:scale-100 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Embedded slide-up animation CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
