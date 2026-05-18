"use client";

import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { whyChooseUs } from "@/data/services";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px" });

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4 bg-dark-2 content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why Dani"
          title="Built on Trust & Delivery"
          subtitle="SECP-registered developers with a legacy of completed projects across Haripur."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="bg-dark-3 border border-primary/15 rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
