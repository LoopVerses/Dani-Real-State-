"use client";

import { useInView } from "react-intersection-observer";
import { MessageCircle, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { CONTACT, whatsappLink } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-dark via-dark-2 to-dark py-14 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 60 L60 0" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Ready to Explore Our Projects?
        </h2>
        <p className="text-text-muted font-body mb-8 max-w-xl mx-auto text-sm sm:text-base px-2">
          Book a site visit or message us on WhatsApp. Our Haripur team will guide you
          through residential, commercial, and plot options.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Button href={ROUTES.contact} size="lg" className="w-full sm:w-auto min-w-[200px]">
            Contact Us
          </Button>
          <Button
            href={whatsappLink()}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            external
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </Button>
        </div>
        <p className="mt-6 text-text-muted text-xs sm:text-sm">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-primary inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            {CONTACT.email}
          </a>
          <span className="mx-2 text-primary/40">·</span>
          <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary">
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
