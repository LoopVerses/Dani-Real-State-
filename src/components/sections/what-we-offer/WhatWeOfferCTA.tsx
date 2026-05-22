"use client";

import { useInView } from "react-intersection-observer";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";
import { CONTACT, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function WhatWeOfferCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-80px" });

  return (
    <section
      ref={ref}
      className={cn(
        "py-14 md:py-20 px-4 sm:px-6 bg-dark-2 border-t border-primary/15 transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Ready to find the right offering?
        </h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          Speak with our Haripur team about residential plots, commercial units, or partnership
          opportunities. We respond on WhatsApp and schedule site visits across active projects.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button href={ROUTES.contact} size="lg">
            Contact Us
          </Button>
          <Button href={whatsappLink()} variant="whatsapp" size="lg" external>
            <MessageCircle className="w-5 h-5" />
            WhatsApp {CONTACT.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
