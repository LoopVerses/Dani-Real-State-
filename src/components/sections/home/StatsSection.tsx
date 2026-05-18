"use client";

import { useInView } from "react-intersection-observer";
import { Shield, Star, Headphones } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const counters = [
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 1200, suffix: "+", label: "Happy Clients" },
  { end: 20, suffix: "+", label: "Cities Covered" },
];

const features = [
  { icon: Shield, title: "Verified Properties", desc: "Every listing is legally verified" },
  { icon: Star, title: "Expert Team", desc: "Seasoned professionals at your service" },
  { icon: Headphones, title: "24/7 Support", desc: "Always available when you need us" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-dark py-12 md:py-24 px-4 relative gold-pattern"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {counters.map((c) => (
            <AnimatedCounter key={c.label} end={c.end} suffix={c.suffix} label={c.label} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-dark-3 border border-primary/10 hover:border-primary/40 rounded-xl p-8 text-center transition-all duration-300"
            >
              <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-text-muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
