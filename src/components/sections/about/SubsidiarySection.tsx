"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import LandscapeBanner from "@/components/ui/LandscapeBanner";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { ABOUT_MEMBER_GRID } from "@/lib/about-layout";
import { subsidiaryStory, karlughTeam } from "@/data/about";
import { ABOUT_IMAGES } from "@/lib/images";

export default function SubsidiarySection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="border-t border-primary/10 bg-dark px-4 py-12 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Subsidiary"
          title="Karlugh Real Estate & Property Developers LLP"
          subtitle="A strategic extension of Dani Real Estate Group"
        />

        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          {subsidiaryStory.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-4 leading-relaxed text-text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <LandscapeBanner
          src={ABOUT_IMAGES.subsidiaryBanner}
          alt="Aman Enclave development — Mankarai, Haripur"
          className="mb-12 rounded-xl ring-1 ring-primary/30 md:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="mb-1 text-xs uppercase tracking-widest text-primary">
              Flagship Project
            </p>
            <p className="font-display text-xl text-foreground sm:text-2xl md:text-3xl">
              Aman Enclave — Mankarai, Haripur
            </p>
          </div>
        </LandscapeBanner>

        <SectionHeader label="Karlugh Team" title="Leadership" />
        <div className={ABOUT_MEMBER_GRID}>
          {karlughTeam.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              imageSizes="(max-width: 1024px) 50vw, 380px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
