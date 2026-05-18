"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SearchX } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import Button from "@/components/ui/Button";
import { Property } from "@/types";

interface PropertiesGridProps {
  properties: Property[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  const [visible, setVisible] = useState(6);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const displayed = properties.slice(0, visible);
  const hasMore = visible < properties.length;

  if (properties.length === 0) {
    return (
      <div className="py-24 bg-dark text-center px-4">
        <SearchX className="w-16 h-16 text-primary/50 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-white mb-2">No properties found</h3>
        <p className="text-text-muted">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-dark px-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-12">
            <Button onClick={() => setVisible((v) => v + 3)} variant="outline">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
