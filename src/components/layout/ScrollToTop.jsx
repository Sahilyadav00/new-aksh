"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top subtle reading progress line */}
      <div
        className="fixed top-0 left-0 right-0 h-0.75 z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-linear-to-r from-primary via-secondary to-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(210,92,65,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Go to Top Button with Circular Progress Ring */}
      <div
        className={`fixed bottom-6 left-6 z-40 transition-all duration-400 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Go to top of page"
          className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-white/95 backdrop-blur-md text-slate-700 shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-slate-200/80 hover:border-primary/50 hover:text-primary hover:shadow-[0_10px_30px_rgba(210,92,65,0.25)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
        >
          {/* Circular SVG Progress Ring */}
          <svg
            className="absolute inset-0 -rotate-90 pointer-events-none"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="scrollTopGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d25c41" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>

            {/* Background track circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2.5"
            />

            {/* Animated progress circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="url(#scrollTopGradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Up Arrow Icon with micro-interaction */}
          <ArrowUp
            className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
            strokeWidth={2.5}
          />

          {/* Hover Tooltip description */}
          <span className="absolute left-14 scale-0 origin-left transition-all duration-200 group-hover:scale-100 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap shadow-md pointer-events-none">
            Go to top
          </span>
        </button>
      </div>
    </>
  );
}
