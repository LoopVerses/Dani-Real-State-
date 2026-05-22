"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { WHAT_WE_OFFER_INTRO, whatWeOfferHomePreview } from "@/data/what-we-offer";

export default function WhatWeOfferSnippet() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-80px" });

  return (
    <section
      id="what-we-offer"
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-dark content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={WHAT_WE_OFFER_INTRO.eyebrow}
          title={WHAT_WE_OFFER_INTRO.title}
          subtitle={WHAT_WE_OFFER_INTRO.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {whatWeOfferHomePreview.map(({ icon: Icon, title, summary }, i) => (
            <article
              key={title}
              className={cn(
                "group bg-dark-3 border border-primary/10 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500",
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{summary}</p>
              <Link
                href={ROUTES.whatWeOffer}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={ROUTES.whatWeOffer} size="lg">
            View All Offerings
          </Button>
          <Button href={ROUTES.contact} variant="outline" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
