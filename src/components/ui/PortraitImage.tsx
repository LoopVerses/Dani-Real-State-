import Image from "next/image";
import { TEAM_PHOTO_FRAME } from "@/lib/about-layout";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

export { TEAM_PHOTO_FRAME };

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
