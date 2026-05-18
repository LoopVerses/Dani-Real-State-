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
    <section className="relative w-full h-[100dvh] flex flex-col bg-black overflow-hidden">
      <div className="relative flex-[1] min-h-[200px] w-full">
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
        <div className="absolute inset-x-0 bottom-0 pointer-events-none bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        <p className="absolute bottom-6 left-6 md:left-10 z-10 max-w-md text-white/90 text-[13px] md:text-[15px] leading-relaxed font-light drop-shadow-md">
          A vision that transcends property and space, where unmatched craftsmanship
          inspires elegance and innovation to enrich lives.
        </p>
      </div>

      <div className="relative flex shrink-0 h-[26vh] min-h-[220px] max-h-[300px] w-full flex-row overflow-hidden">
        <div className="w-[34%] min-w-[140px] bg-black h-full border-t border-zinc-800 overflow-hidden">
          <BlueprintSketch />
        </div>

        <div className="w-[66%] bg-[#F5F4F0] h-full flex flex-col justify-between px-6 md:px-10 py-5 md:py-7">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-end">
            <div>
              <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                <Key className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-xs md:text-sm">Completion:</span>
              </div>
              <p className="text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none">
                Q4 2026
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-xs md:text-sm">Plot Size:</span>
              </div>
              <p className="text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none">
                0.12 HA
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                <Home className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-xs md:text-sm">House Area:</span>
              </div>
              <p className="text-2xl md:text-[2.5rem] font-bold text-black tracking-tighter leading-none">
                450 M<sup className="text-base md:text-lg">2</sup>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-auto pt-3">
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={goPrev}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-black hover:bg-zinc-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-black hover:bg-zinc-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
              <div className="min-w-0">
                <p className="text-zinc-500 text-xs md:text-sm leading-tight">House Type C</p>
                <p className="text-black font-semibold text-sm md:text-base leading-tight">
                  — Comfort Line
                </p>
                <p className="text-zinc-400 text-[10px] md:text-xs mt-1 tabular-nums">
                  {index + 1} / {count}
                </p>
              </div>
            </div>

            <div className="flex -space-x-3 shrink-0">
              {HERO_BANNERS.map((banner, i) => (
                <button
                  key={banner.src}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 overflow-hidden shadow-md transition-opacity",
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
