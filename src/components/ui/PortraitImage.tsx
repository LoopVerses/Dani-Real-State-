import Image from "next/image";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Uniform portrait frame — scales with card width, same ratio everywhere */
export const TEAM_PHOTO_FRAME =
  "relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-dark-2";

interface PortraitImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

export default function PortraitImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: PortraitImageProps) {
  return (
    <div className={cn(TEAM_PHOTO_FRAME, className)}>
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
