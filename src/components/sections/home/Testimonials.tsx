"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [inView]);

  const current = testimonials[active];

  return (
    <section ref={ref} className="bg-cream py-12 md:py-24 px-4 content-auto">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Testimonials" title="What Our Clients Say" dark />
        <div className="relative min-h-[260px]">
          <article
            key={current.id}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
          >
            <Quote className="w-10 h-10 text-primary mx-auto mb-6 opacity-50" />
            <p className="text-dark-2 font-body text-lg leading-relaxed mb-8">
              &ldquo;{current.text}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-display text-xl text-dark-2">{current.name}</p>
            <p className="text-primary text-sm">{current.role}</p>
            <p className="text-text-muted text-sm">{current.location}</p>
          </article>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                active === i ? "bg-primary w-8" : "bg-dark-2/30"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
