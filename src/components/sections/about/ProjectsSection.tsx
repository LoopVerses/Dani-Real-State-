"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Construction } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { deliveredProjects, ongoingProjects } from "@/data/about";
import { FINAL_IMAGE_FRAME, FINAL_IMAGES, IMAGE_FIT, ONGOING_PROJECT_IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

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
        <div className={cn(FINAL_IMAGE_FRAME, "mb-14 rounded-2xl border border-primary/20")}>
          <Image
            src={FINAL_IMAGES.danialGardens}
            alt="Danial Gardens — delivered housing development Haripur"
            fill
            sizes="100vw"
            className={IMAGE_FIT.landscapeHero}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 max-w-xl">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Delivered</p>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">Danial Gardens</h3>
            <p className="text-text-muted text-sm md:text-base">
              104 Kanal housing development, completed 2018–2021 at Nartopa Road, Haripur.
            </p>
          </div>
        </div>

        <SectionHeader label="Portfolio" title="Delivered Projects" align="left" />
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
                    <p className="text-foreground font-semibold mb-1">{item.title}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionHeader label="In Progress" title="Ongoing Projects" align="left" />
        <ul className="grid sm:grid-cols-2 gap-6">
          {ongoingProjects.map((item, i) => (
            <li
              key={item.title}
              className="bg-dark-3 border border-primary/15 rounded-xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className={FINAL_IMAGE_FRAME}>
                <Image
                  src={ONGOING_PROJECT_IMAGES[i]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={IMAGE_FIT.finalImageCard}
                  unoptimized
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-primary">
                  <Construction className="w-3 h-3" />
                  Ongoing
                </span>
              </div>
              <div className="p-5">
                <p className="text-foreground font-semibold mb-2">{item.title}</p>
                <p className="text-text-muted text-sm leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
