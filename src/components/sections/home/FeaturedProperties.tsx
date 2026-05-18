"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import PropertyCard from "@/components/ui/PropertyCard";
import Button from "@/components/ui/Button";
import { properties } from "@/data/properties";
import { cn } from "@/lib/utils";

const filters = ["All", "Residential", "Commercial", "Plot"] as const;

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const featured = properties.filter((p) => p.featured);
  const filtered =
    activeFilter === "All"
      ? featured
      : featured.filter((p) =>
          activeFilter === "Plot" ? p.type === "Plot" : p.type === activeFilter
        );

  return (
    <section
      ref={ref}
      className={cn(
        "bg-dark-2 py-12 md:py-24 px-4 content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Our Portfolio" title="Featured Properties" />
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-body transition-all duration-300",
                activeFilter === filter
                  ? "bg-primary text-dark font-semibold"
                  : "border border-primary/30 text-white hover:border-primary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} variant="featured" />
          ))}
        </div>
        <div className="text-center">
          <Button href="/properties">View All Properties</Button>
        </div>
      </div>
    </section>
  );
}
