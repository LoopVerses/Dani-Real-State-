import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortraitImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Headshot framing — keeps faces visible without awkward crops */
export default function PortraitImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: PortraitImageProps) {
  return (
    <div className={cn("relative bg-dark-2 overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-[50%_14%]"
        unoptimized
      />
    </div>
  );
}
