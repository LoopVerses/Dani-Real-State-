"use client";

import { useInView } from "react-intersection-observer";

const certifications = [
  { name: "SECP", desc: "Securities & Exchange Commission of Pakistan" },
  { name: "LLP", desc: "Limited Liability Partnership" },
  { name: "KP Housing", desc: "KPK Housing Authority Partner" },
  { name: "Haripur", desc: "Primary Development Region" },
];

export default function Partners() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-4 bg-dark border-t border-primary/10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Registered & Compliant
        </h2>
        <p className="text-text-muted mb-12 max-w-2xl mx-auto">
          Dani Real Estate and Developers LLP is incorporated under SECP. We partner
          with Khyber Pakhtunkhwa Housing Authority and deliver developments across
          Haripur with full regulatory compliance.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-dark-3 border border-primary/20 rounded-lg p-6 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <p className="font-display text-2xl text-primary mb-2">{cert.name}</p>
              <p className="text-text-muted text-xs">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
