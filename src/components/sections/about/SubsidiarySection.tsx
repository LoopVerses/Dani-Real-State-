"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { subsidiaryStory, karlughTeam } from "@/data/about";
import { ABOUT_IMAGES, IMAGE_FIT } from "@/lib/images";
import PortraitImage from "@/components/ui/PortraitImage";

export default function SubsidiarySection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 bg-dark-2 border-t border-primary/10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Subsidiary"
          title="Karlugh Real Estate & Property Developers LLP"
          subtitle="A strategic extension of Dani Real Estate Group"
        />

        <div className="max-w-3xl mx-auto text-center mb-16">
          {subsidiaryStory.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-text-muted leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-16 ring-1 ring-primary/30">
          <Image
            src={ABOUT_IMAGES.subsidiaryBanner}
            alt="Aman Enclave development — Mankarai, Haripur"
            fill
            sizes="100vw"
            className={IMAGE_FIT.landscapeHero}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-primary text-xs tracking-widest uppercase mb-1">
              Flagship Project
            </p>
            <p className="font-display text-2xl md:text-3xl text-white">
              Aman Enclave — Mankarai, Haripur
            </p>
          </div>
        </div>

        <SectionHeader label="Karlugh Team" title="Leadership" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {karlughTeam.map((member) => (
            <article
              key={member.id}
              className="bg-dark-3 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <PortraitImage
                src={member.image}
                alt={member.name}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="h-56"
              />
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm">{member.name}</h3>
                <p className="text-primary text-xs font-medium mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-6">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
