import Image from "next/image";
import { ABOUT_PAGE_BANNER } from "@/lib/about-layout";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

export { ABOUT_PAGE_BANNER as LANDSCAPE_BANNER_FRAME };

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
    <div className={cn(ABOUT_PAGE_BANNER, className)}>
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
