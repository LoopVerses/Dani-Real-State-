"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { ABOUT_IMAGES } from "@/lib/images";
import { SLOGAN } from "@/data/about";

const bullets = [
  "SECP-registered LLP since 2021",
  "Delivered projects across Haripur — housing to commercial",
  "Subsidiary: Karlugh Real Estate & Property Developers LLP",
];

export default function AboutSnippet() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      id="about-snippet"
      ref={ref}
      className={cn(
        "pt-16 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-dark content-auto transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className={cn(
            "transition-all duration-700",
            inView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          )}
        >
          <div className="relative aspect-square max-w-sm mx-auto ring-2 ring-primary ring-offset-4 ring-offset-dark rounded-xl overflow-hidden bg-dark-2 flex items-center justify-center p-8 md:p-10">
            <Image
              src={ABOUT_IMAGES.homeSnippet}
              alt="Dani Real Estate and Developers LLP logo"
              width={400}
              height={400}
              sizes="(max-width: 768px) 80vw, 400px"
              className="w-full h-auto max-h-[min(280px,70vw)] object-contain"
            />
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-700 delay-200",
            inView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          )}
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
            Dani Real Estate and Developers LLP
          </h2>
          <p className="text-primary font-display text-lg italic mb-6">{SLOGAN}</p>
          <p className="text-text-muted mb-8 leading-relaxed">
            Since 2008, our journey began with a single 1-kanal plotting project.
            Today, Dani Real Estate and Developers LLP delivers trusted housing,
            commercial, and flagship developments across Haripur and KPK.
          </p>
          <ul className="space-y-4 mb-8">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <Button href={ROUTES.about}>Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
}
