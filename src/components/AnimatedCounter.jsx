"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();
            const startVal = 0;
            const endVal = Number(target);

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease-out cubic formula
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = startVal + (endVal - startVal) * easeOut;

              setCount(currentVal);

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(endVal);
              }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target, duration, hasAnimated]);

  const formattedNumber =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {hasAnimated ? formattedNumber : "0"}
      {suffix}
    </span>
  );
}
