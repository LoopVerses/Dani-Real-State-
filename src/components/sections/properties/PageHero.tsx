"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMAGE_FIT } from "@/lib/images";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  imageClassName?: string;
  overlayClassName?: string;
}

const pathLabels: Record<string, string> = {
  "/projects": "Projects",
  "/about": "About",
  "/contact": "Contact",
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
    <section className="relative h-[45vh] min-h-[360px] max-h-[520px] flex items-center justify-center pt-24">
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <nav className="flex items-center justify-center gap-2 text-sm text-white/80 mb-5">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">{currentLabel}</span>
        </nav>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white/90 font-body text-lg md:text-xl drop-shadow-md">{subtitle}</p>
      </div>
    </section>
  );
}
