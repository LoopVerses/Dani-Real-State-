import Image from "next/image";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Uniform landscape banner — same aspect on mobile and desktop */
export const LANDSCAPE_BANNER_FRAME =
  "relative aspect-[16/9] w-full overflow-hidden bg-dark-2";

type LandscapeBannerProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export default function LandscapeBanner({
  src,
  alt,
  className,
  children,
}: LandscapeBannerProps) {
  return (
    <div className={cn(LANDSCAPE_BANNER_FRAME, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className={IMAGE_FIT.landscapeHero}
        unoptimized
      />
      {children}
    </div>
  );
}
