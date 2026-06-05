"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { advisoryBoardMember, boardOfDirectors } from "@/data/about";

const memberGrid =
  "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch";

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
        <div className={`${memberGrid} mb-16 md:mb-20`}>
          {boardOfDirectors.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              imageSizes="(max-width: 768px) 100vw, 33vw"
              className="hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            />
          ))}
        </div>

        <SectionHeader
          label="Advisory Board"
          title="Strategic Advisory"
          subtitle="Dani Real Estate and Developers LLP"
        />
        <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
          <TeamMemberCard
            name={advisoryBoardMember.name}
            role={`${advisoryBoardMember.role} — Dani Real Estate and Developers LLP`}
            bio={advisoryBoardMember.bio}
            image={advisoryBoardMember.image}
            imageSizes="(max-width: 768px) 100vw, 280px"
            className="lg:col-start-2 hover:border-primary/40"
          />
        </div>
      </div>
    </section>
  );
}
