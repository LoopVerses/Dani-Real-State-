"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12",
        align === "center" && "text-center mx-auto",
        align === "left" && "text-left"
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <p className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-3">
        {label}
      </p>
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl mb-4",
          "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body max-w-xl text-text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

