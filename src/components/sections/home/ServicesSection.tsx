"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { coreServices } from "@/data/services";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
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
          label="What We Do"
          title="Comprehensive Real Estate Services"
          subtitle="Residential, commercial, plotting, and advisory — under one SECP-registered LLP."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex gap-4 bg-dark-3 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
