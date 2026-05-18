"use client";

import { motion, useReducedMotion } from "framer-motion";

const drawEase = [0.42, 0, 0.58, 1] as const;

const pathTransition = (delay: number, duration = 1.6) => ({
  pathLength: { duration, ease: drawEase, delay },
  opacity: { duration: 0.35, delay },
});

function DrawPath({
  d,
  delay,
  className,
  stroke = "#E8E4DC",
  strokeWidth = 0.75,
  strokeOpacity,
  strokeDasharray,
  reduced,
}: {
  d: string;
  delay: number;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeDasharray?: string;
  reduced: boolean;
}) {
  if (reduced) {
    return (
      <path
        d={d}
        className={className}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeDasharray={strokeDasharray}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  }

  return (
    <motion.path
      d={d}
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeDasharray={strokeDasharray}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: strokeOpacity ?? 1 }}
      transition={pathTransition(delay)}
    />
  );
}

export default function BlueprintSketch() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center p-3 md:p-5 opacity-95"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid */}
      <svg
        className="absolute inset-3 md:inset-5 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] blueprint-grid"
        aria-hidden
      >
        <defs>
          <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C9A84C" strokeWidth="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid)" />
      </svg>

      <svg
        viewBox="0 0 720 420"
        fill="none"
        className="relative w-full h-full max-h-[min(100%,260px)] max-w-2xl"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <DrawPath
          reduced={!!reduced}
          delay={0}
          d="M40,40 H680 V380 H40 Z"
          stroke="#C9A84C"
          strokeOpacity={0.55}
          strokeDasharray="6 4"
        />
        <DrawPath reduced={!!reduced} delay={0.15} strokeWidth={1.2} d="M80,70 H640 V350 H80 Z" />
        <DrawPath
          reduced={!!reduced}
          delay={0.35}
          d="M80,200 H420 M80,270 H520 M300,70 V200 M420,70 V350 M520,200 V350 M580,70 V200"
        />
        <DrawPath
          reduced={!!reduced}
          delay={0.5}
          d="M300,200 H420 V270 H300 Z M420,200 H520 V270 H420 Z"
        />
        <DrawPath reduced={!!reduced} delay={0.65} d="M90,80 H260 V130 H90 Z M120,135 H200 V155 H120 Z" />
        <DrawPath reduced={!!reduced} delay={0.8} d="M430,80 H630 V170 H430 Z M530,280 H630 V350 H530 Z" />
        <DrawPath reduced={!!reduced} delay={0.95} d="M300,280 H420 V350 H300 Z M90,280 H200 V350 H90 Z" />
        <DrawPath
          reduced={!!reduced}
          delay={1.1}
          strokeWidth={0.5}
          d="M300,200 A25,25 0 0 1 325,225 M420,270 A22,22 0 0 0 442,248 M520,200 A20,20 0 0 1 540,220"
        />
        <g stroke="#C9A84C" strokeOpacity={0.65} strokeWidth={0.4}>
          <DrawPath reduced={!!reduced} delay={1.25} d="M80,30 H640 M80,25 V35 M640,25 V35" />
          <DrawPath reduced={!!reduced} delay={1.35} d="M30,70 V350 M25,70 H35 M25,350 H35" />
        </g>
        <g stroke="#C9A84C" strokeWidth={0.6}>
          {reduced ? (
            <>
              <circle cx={650} cy={55} r={22} fill="none" />
              <path d="M650,38 L650,72 M650,38 L642,52 M650,38 L658,52" fill="none" />
            </>
          ) : (
            <>
              <motion.circle
                cx={650}
                cy={55}
                r={22}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={pathTransition(1.45, 1.2)}
              />
              <DrawPath
                reduced={false}
                delay={1.55}
                d="M650,38 L650,72 M650,38 L642,52 M650,38 L658,52"
              />
            </>
          )}
        </g>
        <DrawPath
          reduced={!!reduced}
          delay={1.65}
          stroke="#C9A84C"
          strokeOpacity={0.45}
          d="M520,320 H670 V375 H520 Z"
        />
      </svg>

      <motion.p
        className="absolute bottom-2 left-3 sm:left-4 text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-primary/60 font-body"
        initial={reduced ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Architectural Draft
      </motion.p>
    </motion.div>
  );
}
