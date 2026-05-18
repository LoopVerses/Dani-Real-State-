/** Static blueprint — no path animations (saves GPU/CPU) */
export default function BlueprintSketch() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6 opacity-90">
      <svg
        className="absolute inset-4 md:inset-6 w-[calc(100%-2rem)] h-[calc(100%-2rem)] opacity-[0.12]"
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
        className="relative w-full h-full max-h-[min(100%,280px)] max-w-2xl"
        stroke="#E8E4DC"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path strokeDasharray="6 4" stroke="#C9A84C" strokeOpacity={0.5} d="M40,40 H680 V380 H40 Z" />
        <path strokeWidth="1.2" d="M80,70 H640 V350 H80 Z" />
        <path d="M80,200 H420 M80,270 H520 M300,70 V200 M420,70 V350 M520,200 V350 M580,70 V200" />
        <path d="M300,200 H420 V270 H300 Z M420,200 H520 V270 H420 Z" />
        <path d="M90,80 H260 V130 H90 Z M120,135 H200 V155 H120 Z" />
        <path d="M430,80 H630 V170 H430 Z M530,280 H630 V350 H530 Z" />
        <path d="M300,280 H420 V350 H300 Z M90,280 H200 V350 H90 Z" />
        <path strokeWidth="0.5" d="M300,200 A25,25 0 0 1 325,225 M420,270 A22,22 0 0 0 442,248 M520,200 A20,20 0 0 1 540,220" />
        <g stroke="#C9A84C" strokeOpacity={0.65} strokeWidth="0.4">
          <path d="M80,30 H640 M80,25 V35 M640,25 V35" />
          <path d="M30,70 V350 M25,70 H35 M25,350 H35" />
        </g>
        <g stroke="#C9A84C" strokeWidth="0.6">
          <circle cx="650" cy="55" r="22" />
          <path d="M650,38 L650,72 M650,38 L642,52 M650,38 L658,52" />
        </g>
        <g stroke="#C9A84C" strokeOpacity={0.4}>
          <rect x="520" y="320" width="150" height="55" rx="2" />
        </g>
      </svg>

      <p className="absolute bottom-3 left-4 text-[10px] tracking-[0.25em] uppercase text-primary/50 font-body hidden sm:block">
        Architectural Draft
      </p>
    </div>
  );
}
