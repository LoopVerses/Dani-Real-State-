"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const spring = { type: "spring" as const, stiffness: 520, damping: 34 };

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      onClick={toggleTheme}
      className={cn(
        "theme-toggle relative flex h-10 w-[4.25rem] shrink-0 items-center rounded-full p-1",
        "border border-primary/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        "transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(226,168,5,0.35)]",
        className
      )}
    >
      <span className="theme-toggle-track pointer-events-none absolute inset-0 rounded-full" aria-hidden />
      <span
        className="theme-toggle-glow pointer-events-none absolute inset-0 rounded-full opacity-60"
        aria-hidden
      />

      <Moon
        className={cn(
          "pointer-events-none absolute left-2.5 z-0 h-3.5 w-3.5",
          isLight ? "text-[var(--brand-navy)]/30" : "text-[var(--brand-ice)]/70"
        )}
        aria-hidden
      />
      <Sun
        className={cn(
          "pointer-events-none absolute right-2.5 z-0 h-3.5 w-3.5",
          isLight ? "text-[var(--brand-gold)]" : "text-[var(--brand-ice)]/25"
        )}
        aria-hidden
      />

      <motion.span
        className="theme-toggle-thumb relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-md"
        initial={false}
        animate={{ x: mounted && isLight ? 26 : 0 }}
        transition={spring}
      >
        {isLight ? (
          <Sun className="h-4 w-4 shrink-0 text-[var(--on-primary)]" strokeWidth={2.2} aria-hidden />
        ) : (
          <Moon className="h-4 w-4 shrink-0 text-[var(--brand-ice)]" strokeWidth={2} aria-hidden />
        )}
      </motion.span>
    </button>
  );
}
