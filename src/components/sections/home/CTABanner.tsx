"use client";

import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-dark via-dark-2 to-dark py-12 md:py-24 px-4 overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 60 L60 0" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-text-muted font-body mb-8 max-w-xl mx-auto">
          Schedule a free consultation with our expert team and let us guide you
          to the perfect home or investment.
        </p>
        <Button href="/contact" size="lg">
          Schedule Free Consultation
        </Button>
      </div>
    </section>
  );
}
