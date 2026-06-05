"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { ABOUT_MEMBER_GRID } from "@/lib/about-layout";
import { advisoryBoardMember, boardOfDirectors } from "@/data/about";

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      id="leadership"
      ref={ref}
      className="scroll-mt-24 bg-dark-2 px-4 py-12 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Leadership"
          title="Board of Directors"
          subtitle="Dani Real Estate and Developers LLP"
        />
        <div className={`${ABOUT_MEMBER_GRID} mb-16 md:mb-20`}>
          {boardOfDirectors.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              imageSizes="(max-width: 1024px) 50vw, 380px"
              className="hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            />
          ))}
        </div>

        <SectionHeader
          label="Advisory Board"
          title="Strategic Advisory"
          subtitle="Dani Real Estate and Developers LLP"
        />
        <div className={ABOUT_MEMBER_GRID}>
          <TeamMemberCard
            name={advisoryBoardMember.name}
            role={`${advisoryBoardMember.role} — Dani Real Estate and Developers LLP`}
            bio={advisoryBoardMember.bio}
            image={advisoryBoardMember.image}
            imageSizes="(max-width: 1024px) 50vw, 380px"
            className="sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:col-start-2 lg:max-w-none lg:mx-0 hover:border-primary/40"
          />
        </div>
      </div>
    </section>
  );
}
