import Image from "next/image";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

interface PortraitImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Shorter frame for dense grids (e.g. Karlugh 5-column) */
  variant?: "default" | "compact";
}

const frameByVariant = {
  default: "aspect-[3/4] w-full min-h-[280px] sm:min-h-[320px]",
  compact: "aspect-[3/4] w-full min-h-[260px] sm:min-h-[300px]",
} as const;

/** Headshot — full photo visible on all screen sizes */
export default function PortraitImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  variant = "default",
}: PortraitImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-dark-2", frameByVariant[variant], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={IMAGE_FIT.portrait}
        unoptimized
      />
    </div>
  );
}
