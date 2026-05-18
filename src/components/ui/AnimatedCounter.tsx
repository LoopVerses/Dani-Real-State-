"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl text-primary">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-text-muted font-body mt-2">{label}</p>
    </div>
  );
}
