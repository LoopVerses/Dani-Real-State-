"use client";

import { useInView } from "react-intersection-observer";
import { storyParagraphs, SLOGAN } from "@/data/about";

export default function OurStory() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-dark px-4 py-12 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-primary">
          Our Story
        </p>
        <h2 className="mb-2 text-center font-display text-4xl text-foreground">
          A Journey of Vision & Growth
        </h2>
        <p className="mb-8 text-center font-display text-xl italic text-primary">{SLOGAN}</p>
        {storyParagraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="mb-4 text-center leading-relaxed text-text-muted md:text-left"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
