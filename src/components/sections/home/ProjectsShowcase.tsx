"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { deliveredProjects, ongoingProjects } from "@/data/about";
import { STOCK_IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";

const cardImages = [
  STOCK_IMAGES.projectCard1,
  STOCK_IMAGES.projectCard2,
  STOCK_IMAGES.projectCard3,
  STOCK_IMAGES.projectCard4,
  STOCK_IMAGES.projectCard5,
  STOCK_IMAGES.projectCard6,
];

const featured = [
  ...deliveredProjects.flatMap((g) => g.items).slice(0, 3),
  ...ongoingProjects.slice(0, 3),
];

export default function ProjectsShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px" });

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24 px-4 bg-dark content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Work"
          title="Delivered & Ongoing Projects"
          subtitle="From China Town and Danial Gardens to Haripur Hills and Aman Enclave."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <article
              key={project.title}
              className="group bg-dark-3 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cardImages[i % cardImages.length]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                  {project.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={ROUTES.projects}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
