"use client";

import { useInView } from "react-intersection-observer";
import PortraitImage from "@/components/ui/PortraitImage";
import { ABOUT_IMAGES } from "@/lib/images";
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
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12">
          <PortraitImage
            src={ABOUT_IMAGES.story}
            alt="Muhammad Saeed, Chief Executive Officer"
            sizes="(max-width: 1024px) 100vw, 380px"
            className="mx-auto w-full max-w-[380px] rounded-xl border border-primary/30 shadow-lg shadow-black/30 md:mx-0"
          />
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h2 className="mb-2 font-display text-4xl text-foreground">
              A Journey of Vision & Growth
            </h2>
            <p className="mb-6 font-display text-xl italic text-primary">{SLOGAN}</p>
            {storyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mb-4 leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
