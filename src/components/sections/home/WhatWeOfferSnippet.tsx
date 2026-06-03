"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { IMAGE_FIT } from "@/lib/images";
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
          {whatWeOfferHomePreview.map(({ icon: Icon, title, summary, image }, i) => (
            <article
              key={title}
              className={cn(
                "group bg-dark-3 border border-primary/10 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500",
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-dark-2">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={cn(IMAGE_FIT.serviceCard, "transition-transform duration-500 group-hover:scale-105")}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-3 via-dark/20 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-on-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{summary}</p>
                <Link
                  href={ROUTES.whatWeOffer}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
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
