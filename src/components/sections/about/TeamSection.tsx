"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import PortraitImage from "@/components/ui/PortraitImage";
import { boardOfDirectors } from "@/data/about";

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 bg-dark-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Leadership"
          title="Board of Directors"
          subtitle="Dani Real Estate and Developers LLP"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boardOfDirectors.map((member) => (
            <article
              key={member.id}
              className="group bg-dark-3 rounded-xl overflow-hidden border border-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <PortraitImage
                src={member.image}
                alt={member.name}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-72"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
