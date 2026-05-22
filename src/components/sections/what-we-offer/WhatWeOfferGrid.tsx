"use client";

import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatWeOfferItems } from "@/data/what-we-offer";

export default function WhatWeOfferGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px" });

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        {whatWeOfferItems.map((item, i) => {
          const Icon = item.icon;
          const reversed = i % 2 === 1;

          return (
            <article
              key={item.id}
              className={cn(
                "grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-dark-3 border border-primary/10 rounded-2xl p-6 md:p-10 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className={cn(reversed && "md:order-2")}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 mb-5">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                  {item.title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-foreground/90 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "rounded-xl border border-primary/20 bg-dark-2 p-8 md:p-10 min-h-[200px] flex flex-col justify-center",
                  reversed && "md:order-1"
                )}
              >
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Overview</p>
                <p className="font-display text-xl md:text-2xl text-foreground leading-snug mb-4">
                  {item.summary}
                </p>
                <p className="text-text-muted text-sm">
                  Tailored for buyers, investors, and partners across Haripur, KPK, and flagship
                  collaborations including Haripur Hills and Aman Enclave.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
