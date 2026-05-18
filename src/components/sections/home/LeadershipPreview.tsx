"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PortraitImage from "@/components/ui/PortraitImage";
import { boardOfDirectors } from "@/data/about";
import { cn } from "@/lib/utils";

export default function LeadershipPreview() {
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
          label="Leadership"
          title="Board of Directors"
          subtitle="Experienced leadership driving Dani Real Estate and Developers LLP."
        />
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {boardOfDirectors.map((member) => (
            <article
              key={member.id}
              className="bg-dark-3 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-colors"
            >
              <PortraitImage
                src={member.image}
                alt={member.name}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-64"
              />
              <div className="p-5">
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mt-1">{member.role}</p>
                <p className="text-text-muted text-sm mt-3 line-clamp-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Meet the full team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
