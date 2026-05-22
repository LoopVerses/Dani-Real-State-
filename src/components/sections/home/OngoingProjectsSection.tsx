"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Construction } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ongoingProjects } from "@/data/about";
import { IMAGE_FIT, STOCK_IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";

const cardImages = [
  STOCK_IMAGES.projectCard4,
  STOCK_IMAGES.projectCard5,
  STOCK_IMAGES.projectCard6,
  STOCK_IMAGES.projectCard1,
  STOCK_IMAGES.projectCard2,
];

export default function OngoingProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px" });

  return (
    <section
      id="ongoing-projects"
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-dark-2 content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="In Progress"
          title="Ongoing Projects"
          subtitle="Flagship developments currently underway across Haripur and KPK — including Haripur Hills, Aman Enclave, and Dani Hills Phase 2."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ongoingProjects.map((project, i) => (
            <article
              key={project.title}
              className={cn(
                "group bg-dark-3 rounded-xl overflow-hidden border border-primary/15 hover:border-primary/40 transition-all duration-500",
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/10] min-h-[160px] max-h-[200px] sm:aspect-auto sm:h-48 overflow-hidden bg-dark-3">
                <Image
                  src={cardImages[i % cardImages.length]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={cn(
                    IMAGE_FIT.landscapeCard,
                    "transition-transform duration-500 group-hover:scale-105 max-md:group-hover:scale-100"
                  )}
                  unoptimized
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-primary">
                  <Construction className="w-3 h-3" />
                  Ongoing
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{project.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={ROUTES.projects}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            View all projects
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
