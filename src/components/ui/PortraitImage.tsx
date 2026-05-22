import Image from "next/image";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

interface PortraitImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Shorter frame on desktop (e.g. Karlugh 5-column grid) */
  variant?: "default" | "compact";
}

const frameByVariant = {
  default:
    "aspect-[3/4] w-full min-h-[300px] max-h-[420px] sm:min-h-[340px] md:aspect-auto md:min-h-0 md:max-h-none md:h-80",
  compact:
    "aspect-[3/4] w-full min-h-[280px] max-h-[380px] sm:min-h-[300px] md:aspect-auto md:min-h-0 md:max-h-none md:h-64 lg:h-56",
} as const;

/** Headshot framing — full face on mobile, tighter crop from md up */
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
