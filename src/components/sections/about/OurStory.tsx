"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ABOUT_IMAGES, IMAGE_FIT } from "@/lib/images";
import { storyParagraphs, milestones, SLOGAN } from "@/data/about";

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
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden ring-2 ring-primary ring-offset-4 ring-offset-dark">
            <Image
              src={ABOUT_IMAGES.story}
              alt="Muhammad Saeed, Chief Executive Officer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={IMAGE_FIT.portrait}
            />
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl text-white mb-2">
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

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/40" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={cn(
                  "relative text-center md:text-left transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="hidden md:block w-4 h-4 bg-primary rounded-full mx-auto md:mx-0 mb-4 relative z-10" />
                <p className="font-display text-3xl text-primary mb-2">{m.year}</p>
                <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                <p className="text-text-muted text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
