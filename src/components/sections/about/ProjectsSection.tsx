"use client";

import { useInView } from "react-intersection-observer";
import { CheckCircle2, Construction } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { deliveredProjects, ongoingProjects } from "@/data/about";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 bg-dark"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Delivered Projects"
          align="left"
        />
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {deliveredProjects.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-2xl text-primary mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="bg-dark-3 border border-primary/10 rounded-lg p-5 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionHeader
          label="In Progress"
          title="Ongoing Projects"
          align="left"
        />
        <ul className="grid md:grid-cols-2 gap-4">
          {ongoingProjects.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 bg-dark-2 border border-primary/20 rounded-lg p-5"
            >
              <Construction className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
