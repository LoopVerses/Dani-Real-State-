"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ABOUT_IMAGES, IMAGE_FIT } from "@/lib/images";
import { storyParagraphs, SLOGAN } from "@/data/about";

export default function OurStory() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 bg-dark"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,22rem)_1fr] gap-6 md:gap-8 items-start">
          <div className="relative aspect-[3/4] w-full min-h-[320px] max-h-[480px] sm:min-h-[360px] max-w-[min(100%,20rem)] mx-auto md:max-w-none md:min-h-0 md:max-h-none md:mx-0 rounded-lg overflow-hidden border border-primary/30 shadow-lg shadow-black/30">
            <Image
              src={ABOUT_IMAGES.story}
              alt="Muhammad Saeed, Chief Executive Officer"
              fill
              sizes="(max-width: 768px) min(100vw, 24rem), 45vw"
              className={IMAGE_FIT.portrait}
            />
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl text-foreground mb-2">
              A Journey of Vision & Growth
            </h2>
            <p className="text-primary font-display text-xl mb-6 italic">
              {SLOGAN}
            </p>
            {storyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-text-muted mb-4 leading-relaxed"
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
