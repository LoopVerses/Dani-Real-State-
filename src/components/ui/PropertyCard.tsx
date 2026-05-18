"use client";

import Image from "next/image";
import { MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import { Property } from "@/types";
import { formatArea } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "featured";
}

export default function PropertyCard({
  property,
  variant = "default",
}: PropertyCardProps) {
  return (
    <article
      className={cn(
        "group bg-dark-3 rounded-xl overflow-hidden border border-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1",
        variant === "featured" && "ring-1 ring-primary/30"
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-dark/80 text-white text-xs px-3 py-1 rounded-full">
          {property.type}
        </span>
        <span
          className={cn(
            "absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium",
            property.status === "For Sale"
              ? "bg-green-600/90 text-white"
              : "bg-blue-600/90 text-white"
          )}
        >
          {property.status}
        </span>
      </div>
      <div className="p-5">
        <p className="font-display text-2xl text-primary">{property.priceLabel}</p>
        <h3 className="text-white font-body font-semibold mt-1 mb-2">
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-text-muted text-sm mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          {property.city}
        </p>
        <div className="flex items-center gap-4 text-text-muted text-sm border-t border-primary/10 pt-4">
          {property.beds !== undefined && (
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" /> {property.beds}
            </span>
          )}
          {property.baths !== undefined && (
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" /> {property.baths}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" /> {formatArea(property.area)}
          </span>
        </div>
      </div>
    </article>
  );
}
