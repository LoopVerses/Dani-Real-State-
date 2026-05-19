"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Key, MapPin, Home, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_BANNERS, HERO_AUTO_SLIDE_MS } from "@/lib/images";

const BlueprintSketch = dynamic(
  () => import("@/components/sections/home/BlueprintSketch"),
  { ssr: false, loading: () => <div className="w-full h-full bg-transparent" aria-hidden /> }
);

/** Shorter on mobile so more of the banner stays visible above the glass panel */
const PANEL_H = "h-[clamp(7.25rem,20svh,11.5rem)] md:h-[clamp(10rem,28svh,18rem)]";
const PANEL_BOTTOM_OFFSET =
  "bottom-[calc(clamp(7.25rem,20svh,11.5rem)+0.75rem)] md:bottom-[calc(clamp(10rem,28svh,18rem)+1rem)]";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const count = HERO_BANNERS.length;
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef(0);
  indexRef.current = index;

  const transitionTo = useCallback((normalized: number) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setIndex(normalized);
      setVisible(true);
      fadeTimer.current = null;
    }, 350);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const normalized = ((next % count) + count) % count;
      if (normalized === index) return;
      transitionTo(normalized);
    },
    [index, count, transitionTo]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      transitionTo((indexRef.current + 1) % count);
    }, HERO_AUTO_SLIDE_MS);

    return () => {
      window.clearInterval(timer);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [count, transitionTo]);

  return (
    <section
      className="relative w-full h-[100svh] min-h-[100svh] max-h-[100svh] bg-black overflow-hidden isolate"
      aria-label="Hero"
    >
      {/* Full-viewport background — image fills entire screen */}
      <div className="absolute inset-0 z-0">
        {HERO_BANNERS.map((banner, i) => (
          <div
            key={banner.src}
            className={cn(
              "absolute inset-0 overflow-hidden transition-opacity duration-700 ease-in-out",
              i === index && visible ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={banner.src}
              alt={i === index ? banner.alt : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn(
                "h-full w-full bg-black",
                /* Mobile: full banner visible (no crop). Desktop: cinematic cover. */
                "object-contain object-center",
                "md:object-cover md:object-[50%_28%] lg:object-[50%_30%]"
              )}
            />
          </div>
        ))}

        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none md:from-black/30 md:to-black/50" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-[38%] md:h-[45%] bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Quote — sits above glass panel */}
      <div
        className={cn(
          "absolute left-4 sm:left-6 md:left-10 z-30 max-w-md pointer-events-none",
          PANEL_BOTTOM_OFFSET
        )}
      >
        <p className="text-white/95 text-sm md:text-base leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          A vision that transcends property and space, where unmatched craftsmanship
          inspires elegance and innovation to enrich lives.
        </p>
      </div>

      {/* Premium frosted glass bottom bar */}
      <div
        className={cn(
          "absolute bottom-0 inset-x-0 z-40 grid w-full overflow-hidden",
          "border-t border-white/15",
          "bg-white/[0.07] backdrop-blur-[28px] backdrop-saturate-150",
          "shadow-[0_-8px_32px_rgba(0,0,0,0.35)]",
          "grid-cols-[minmax(0,26%)_minmax(0,1fr)] sm:grid-cols-[minmax(0,32%)_minmax(0,1fr)]",
          PANEL_H
        )}
      >
        <div
          className="hero-glass-shine pointer-events-none absolute inset-0 z-0"
          aria-hidden
        />

        <div className="relative z-10 min-w-0 h-full border-r border-white/10 bg-black/15 overflow-hidden">
          <BlueprintSketch />
        </div>

        <div className="relative z-10 min-w-0 h-full flex flex-col justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-end min-w-0 text-white">
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-white/55 mb-0.5">
                <Key className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs truncate">Completion</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-none truncate">
                Q4 2026
              </p>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-white/55 mb-0.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs truncate">Plot Size</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-none truncate">
                0.12 HA
              </p>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-white/55 mb-0.5">
                <Home className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs truncate">House Area</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-none">
                450 M<sup className="text-sm md:text-base font-medium">2</sup>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4 mt-auto pt-2 min-w-0">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={goPrev}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
              <div className="min-w-0 hidden sm:block">
                <p className="text-white/50 text-xs truncate">House Type C</p>
                <p className="text-white font-medium text-sm truncate">Comfort Line</p>
                <p className="text-white/40 text-[10px] tabular-nums mt-0.5">
                  {index + 1} / {count}
                </p>
              </div>
            </div>

            <div className="flex -space-x-2 sm:-space-x-3 shrink-0">
              {HERO_BANNERS.map((banner, i) => (
                <button
                  key={banner.src}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 overflow-hidden shadow-lg transition-all duration-300",
                    i === index
                      ? "border-white/90 ring-2 ring-white/25 z-20 scale-105"
                      : "border-white/30 opacity-70 hover:opacity-100 z-10"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                >
                  <Image
                    src={banner.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
