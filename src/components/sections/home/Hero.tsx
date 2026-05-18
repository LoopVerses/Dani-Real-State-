"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Key, MapPin, Home, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_BANNERS, HERO_AUTO_SLIDE_MS } from "@/lib/images";

const BlueprintSketch = dynamic(
  () => import("@/components/sections/home/BlueprintSketch"),
  { ssr: false, loading: () => <div className="w-full h-full bg-zinc-900" aria-hidden /> }
);

/** Bottom info panel — fixed share of viewport, no extra min-heights that break 100svh */
const HERO_PANEL_H = "h-[clamp(9.5rem,26svh,17.5rem)]";

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
    }, 300);
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
      className="relative w-full h-[100svh] max-h-[100svh] grid grid-rows-[minmax(0,1fr)_auto] bg-black overflow-hidden isolate"
      aria-label="Hero"
    >
      {/* Banner — fills remaining viewport; min-h-0 prevents flex/grid overflow scroll */}
      <div className="relative min-h-0 w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HERO_BANNERS[index].src}
            alt={HERO_BANNERS[index].alt}
            fill
            priority
            sizes="100vw"
            className={cn(
              "object-cover object-[center_28%] sm:object-[center_32%] transition-opacity duration-500 ease-out",
              visible ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-transparent h-28" />
        <div className="absolute inset-x-0 bottom-0 pointer-events-none bg-gradient-to-t from-black/55 via-black/15 to-transparent h-24" />

        <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:left-10 z-10 max-w-md text-white/90 text-[13px] md:text-[15px] leading-relaxed font-light drop-shadow-md">
          A vision that transcends property and space, where unmatched craftsmanship
          inspires elegance and innovation to enrich lives.
        </p>
      </div>

      {/* Bottom panel — explicit height only (no min-h + vh stack) */}
      <div
        className={cn(
          "relative grid w-full min-h-0 grid-cols-[minmax(0,34%)_minmax(0,1fr)] overflow-hidden border-t border-zinc-800",
          HERO_PANEL_H
        )}
      >
        <div className="min-w-0 bg-black h-full overflow-hidden">
          <BlueprintSketch />
        </div>

        <div className="min-w-0 bg-[#F5F4F0] h-full flex flex-col justify-between px-4 sm:px-6 md:px-10 py-4 md:py-6 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 items-end min-w-0">
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-zinc-500 mb-0.5">
                <Key className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs md:text-sm truncate">Completion:</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none truncate">
                Q4 2026
              </p>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-zinc-500 mb-0.5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs md:text-sm truncate">Plot Size:</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none truncate">
                0.12 HA
              </p>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-zinc-500 mb-0.5">
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs md:text-sm truncate">House Area:</span>
              </div>
              <p className="text-lg sm:text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none">
                450 M<sup className="text-sm sm:text-base md:text-lg">2</sup>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4 mt-auto pt-2 min-w-0">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={goPrev}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-black hover:bg-zinc-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-black hover:bg-zinc-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
                </button>
              </div>
              <div className="min-w-0 hidden sm:block">
                <p className="text-zinc-500 text-[10px] sm:text-xs md:text-sm leading-tight truncate">
                  House Type C
                </p>
                <p className="text-black font-semibold text-xs sm:text-sm md:text-base leading-tight truncate">
                  — Comfort Line
                </p>
                <p className="text-zinc-400 text-[10px] md:text-xs mt-0.5 tabular-nums">
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
                    "relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 overflow-hidden shadow-md transition-opacity",
                    i === index
                      ? "border-primary ring-2 ring-primary/40 z-20 opacity-100"
                      : "border-white opacity-70 hover:opacity-100 z-10"
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
