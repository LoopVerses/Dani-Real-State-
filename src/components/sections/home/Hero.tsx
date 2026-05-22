"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/hero";
import { HERO_AUTO_SLIDE_MS, IMAGE_FIT } from "@/lib/images";

const luxEase = [0.25, 1, 0.35, 1] as const;
const AUTO_MS = HERO_AUTO_SLIDE_MS;
const count = HERO_SLIDES.length;
const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (dir: number) => ({
    clipPath: dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    zIndex: 2,
  }),
  center: {
    clipPath: "inset(0 0 0 0%)",
    zIndex: 2,
    transition: { duration: 1.2, ease: luxEase },
  },
  exit: (dir: number) => ({
    clipPath: dir > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    zIndex: 1,
    transition: { duration: 1.2, ease: luxEase },
  }),
};

const slideVariantsMobile = {
  enter: { opacity: 0, zIndex: 2 },
  center: { opacity: 1, zIndex: 2, transition: { duration: 0.45, ease: luxEase } },
  exit: { opacity: 0, zIndex: 1, transition: { duration: 0.35, ease: luxEase } },
};

const imageParallaxVariants = {
  enter: (dir: number) => ({
    scale: 1.2,
    x: dir > 0 ? "12%" : "-12%",
  }),
  center: {
    scale: 1,
    x: "0%",
    transition: { duration: 1.4, ease: luxEase },
  },
  exit: (dir: number) => ({
    scale: 1.05,
    x: dir > 0 ? "-8%" : "8%",
    transition: { duration: 1.2, ease: luxEase },
  }),
};

function useSwipeNavigation(onNext: () => void, onPrev: () => void) {
  const pointerRef = useRef<{
    startX: number;
    startY: number;
    isHorizontal: boolean | null;
  } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      pointerRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        isHorizontal: null,
      };

      const onMove = (moveEvent: PointerEvent) => {
        const p = pointerRef.current;
        if (!p || p.isHorizontal !== null) return;

        const dx = Math.abs(moveEvent.clientX - p.startX);
        const dy = Math.abs(moveEvent.clientY - p.startY);
        if (dx < 8 && dy < 8) return;

        p.isHorizontal = dx > dy;
      };

      const onUp = (upEvent: PointerEvent) => {
        const p = pointerRef.current;
        pointerRef.current = null;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);

        if (!p) return;
        if (p.isHorizontal === false) return;

        const diffX = p.startX - upEvent.clientX;
        const diffY = Math.abs(p.startY - upEvent.clientY);
        if (Math.abs(diffX) < SWIPE_THRESHOLD || Math.abs(diffX) <= diffY) return;

        if (diffX > 0) onNext();
        else onPrev();
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    },
    [onNext, onPrev]
  );

  return onPointerDown;
}

function SlideImages({
  slide,
  priority,
}: {
  slide: (typeof HERO_SLIDES)[number];
  priority: boolean;
}) {
  return (
    <>
      <Image
        src={slide.mobileSrc}
        alt={slide.alt}
        fill
        priority={priority}
        sizes="100vw"
        className={`md:hidden ${IMAGE_FIT.heroBannerMobile}`}
        draggable={false}
      />
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        priority={priority}
        sizes="100vw"
        className={`hidden md:block ${IMAGE_FIT.heroBanner}`}
        draggable={false}
      />
    </>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const indexRef = useRef(0);
  indexRef.current = index;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback(
    (next: number, dir?: number) => {
      if (isAnimating) return;
      const normalized = ((next % count) + count) % count;
      if (normalized === indexRef.current) return;

      setIsAnimating(true);
      setDirection(dir ?? (normalized > indexRef.current ? 1 : -1));
      setIndex(normalized);
      setTimeout(() => setIsAnimating(false), isMobile ? 450 : 1200);
    },
    [isAnimating, isMobile]
  );

  const goNext = useCallback(() => goTo(indexRef.current + 1, 1), [goTo]);
  const goPrev = useCallback(() => goTo(indexRef.current - 1, -1), [goTo]);
  const onPointerDown = useSwipeNavigation(goNext, goPrev);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) goNext();
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [goNext]);

  const active = HERO_SLIDES[index];
  const variants = isMobile ? slideVariantsMobile : slideVariants;

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-[#071E2B] overflow-hidden md:select-none touch-pan-y"
      aria-label="Hero banner slider"
      aria-roledescription="carousel"
    >
      <div
        className="absolute inset-0 z-0 touch-pan-y"
        style={{ touchAction: "pan-y pinch-zoom" }}
        onPointerDown={onPointerDown}
      >
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 overflow-hidden will-change-[opacity] md:will-change-transform bg-[#071E2B]"
          >
            {isMobile ? (
              <div className="absolute inset-0">
                <SlideImages slide={active} priority={index === 0} />
              </div>
            ) : (
              <motion.div
                variants={imageParallaxVariants}
                className="absolute inset-0 origin-center"
              >
                <SlideImages slide={active} priority={index === 0} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

      <div className="absolute bottom-0 inset-x-0 z-30 flex items-end justify-between p-5 sm:p-8 md:p-10 pointer-events-none">
        <div className="pointer-events-auto flex items-baseline gap-2 text-[#F3FCFE]/50 text-sm md:text-base font-mono tabular-nums">
          <span className="text-primary text-xl md:text-3xl font-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="opacity-50">/</span>
          <span>{String(count).padStart(2, "0")}</span>
        </div>

        <div className="pointer-events-auto flex gap-3 sm:gap-4 items-center">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="group inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 text-[#F3FCFE] backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/20 [&_svg]:block [&_svg]:shrink-0"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="group inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 text-[#F3FCFE] backdrop-blur-md transition-all hover:border-primary/50 hover:bg-primary/20 [&_svg]:block [&_svg]:shrink-0"
          >
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10 pointer-events-none">
        <motion.div
          key={`progress-${index}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
          className="h-full bg-primary shadow-[0_0_12px_rgba(226,168,5,0.6)]"
        />
      </div>
    </section>
  );
}
