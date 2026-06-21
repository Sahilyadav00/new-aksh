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
      rootMargin: "0px 0px -80px 0px", // Trigger when 80px from entering viewport
      threshold: 0.05,
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
