"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FINAL_IMAGES, IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function AdvisoryBoardHighlight() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-80px" });

  return (
    <section
      ref={ref}
      className={cn(
        "py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-dark border-t border-primary/10 transition-all duration-500",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="max-w-5xl mx-auto rounded-2xl border border-primary/20 bg-dark-3 overflow-hidden">
        <div className="grid md:grid-cols-[minmax(0,16rem)_1fr] gap-0">
          <div className="relative aspect-[3/4] min-h-[280px] sm:min-h-[320px] md:min-h-full bg-dark-2">
            <Image
              src={FINAL_IMAGES.amirGul}
              alt="Mr. Amir Gul — Advisory Board Member"
              fill
              sizes="(max-width: 768px) 100vw, 16rem"
              className={IMAGE_FIT.portrait}
              unoptimized
            />
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <p className="text-primary text-xs tracking-[0.28em] uppercase mb-3">
              Dani Real Estate Advisory Board
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">Mr. Amir Gul</h2>
            <p className="text-primary font-medium text-sm md:text-base mb-5">
              Advisory Board Member — Dani Real Estate and Developers LLP
            </p>
            <p className="text-text-muted leading-relaxed">
              A seasoned professional with more than three decades of leadership across military,
              hospitality, and oil &amp; gas sectors. A former Major in the Pakistan Army, he brings
              exceptional discipline, strategic insight, and command experience. He has held senior
              roles with Hashoo Group and BP/UEP, specializing in human resources, security
              management, and risk mitigation. His expertise in governance, operations, and
              high-stakes decision-making adds strong strategic value to Dani Real Estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
