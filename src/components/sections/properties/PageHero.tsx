"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ABOUT_PAGE_BANNER } from "@/lib/about-layout";
import { IMAGE_FIT } from "@/lib/images";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  imageClassName?: string;
  overlayClassName?: string;
}

const pathLabels: Record<string, string> = {
  "/dani-real-estate-projects-haripur-kpk": "Projects",
  "/what-we-offer-dani-real-estate-haripur": "What We Offer",
  "/about-dani-real-estate-and-developers-llp": "About Us",
  "/contact-dani-real-estate-haripur": "Contact",
};

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  imageClassName = IMAGE_FIT.landscapeHero,
  overlayClassName = "bg-gradient-to-b from-dark/75 via-dark/50 to-dark/70",
}: PageHeroProps) {
  const pathname = usePathname();
  const currentLabel = pathLabels[pathname] || "Page";

  return (
    <section className="relative bg-dark-2">
      <div className={cn(ABOUT_PAGE_BANNER, "w-full")}>
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={cn(imageClassName)}
          unoptimized
        />
        <div className={cn("absolute inset-0", overlayClassName)} aria-hidden />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pt-[4.5rem] sm:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="mb-5 flex items-center justify-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary">{currentLabel}</span>
            </nav>
            <h1 className="mb-3 font-display text-3xl leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="font-body text-lg text-white/90 drop-shadow-md md:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
