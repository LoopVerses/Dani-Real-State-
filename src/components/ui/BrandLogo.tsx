"use client";

import Image from "next/image";
import { LOGO_LIGHT_SRC, LOGO_SRC } from "@/lib/images";
import { useThemeOptional } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export default function BrandLogo({
  className,
  priority = false,
  width = 320,
  height = 96,
}: BrandLogoProps) {
  const theme = useThemeOptional()?.theme ?? "dark";
  const isLight = theme === "light";
  const src = isLight ? LOGO_LIGHT_SRC : LOGO_SRC;

  return (
    <Image
      src={src}
      alt="Dani Real Estate and Developers"
      width={width}
      height={height}
      className={cn(
        className,
        isLight ? "drop-shadow-none" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
      )}
      priority={priority}
      unoptimized
    />
  );
}
