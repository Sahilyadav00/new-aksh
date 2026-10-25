"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Fallback if IntersectionObserver is not supported
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("active");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -25px 0px", // Trigger smoothly just before/as entering viewport
      threshold: 0.04,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
