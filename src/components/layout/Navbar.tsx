"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SLOGAN } from "@/data/about";
import { NAV_LINKS, whatsappLink } from "@/lib/site";
import { LOGO_SRC } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useThemeOptional } from "@/components/providers/ThemeProvider";

const navEase = [0.16, 1, 0.3, 1] as const;

const navLinks = [...NAV_LINKS];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isScrolled = mounted && scrolled;
  const isHome = pathname === "/";
  const isHeroNav = isHome && !isScrolled;
  const themeCtx = useThemeOptional();
  const isLightSite = themeCtx?.theme === "light";
  const navOnImage = isHeroNav && !isLightSite;

  const navSurface = isHeroNav
    ? "nav-glass-hero"
    : isScrolled
      ? "nav-glass-scrolled"
      : isHome
        ? "nav-glass-hero"
        : "nav-glass-inner";

  return (
    <>
      <header
        className={cn("fixed top-0 left-0 right-0 z-50 nav-glass", navSurface)}
        suppressHydrationWarning
      >
        <span className="nav-glass-shine" aria-hidden />

        <div
          className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[58px] sm:h-[62px] flex items-center justify-between"
          suppressHydrationWarning
        >
          {/* Logo — left */}
          <Link href="/" className="relative z-20 flex items-center shrink-0">
            <Image
              src={LOGO_SRC}
              alt="Dani Real Estate and Developers"
              width={320}
              height={96}
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[min(220px,38vw)] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
              priority
              unoptimized
            />
          </Link>

          {/* Nav — center (desktop) */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "nav-link-glass text-sm font-body tracking-wide px-4 py-2 nav-text-shadow",
                        isHeroNav && "nav-link-glass-hero",
                        active
                          ? "text-primary !bg-primary/25 border border-primary/30"
                          : navOnImage
                            ? "text-[#F3FCFE] hover:text-[#F3FCFE]"
                            : "text-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right — CTA + mobile menu */}
          <div className="relative z-20 flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href={ROUTES.contact}
              className={cn(
                "hidden sm:inline-flex items-center justify-center gap-2.5 leading-none rounded-full px-4 py-2.5 text-sm transition-all duration-500 [&_svg]:block [&_svg]:shrink-0",
                isScrolled
                  ? "nav-cta-solid font-semibold"
                  : cn(
                      "nav-cta-glass font-medium",
                      navOnImage ? "nav-text-shadow" : ""
                    )
              )}
            >
              Book a Viewing
              <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={2} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden inline-flex items-center justify-center p-2.5 rounded-full nav-link-glass nav-text-shadow [&_svg]:block [&_svg]:shrink-0",
                navOnImage && "text-[#F3FCFE]",
                isHeroNav && "nav-link-glass-hero"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: navEase }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-dark-3/98 backdrop-blur-xl border-l border-[var(--glass-border)] flex flex-col pt-[4.5rem] px-8 pb-8"
            >
              <Image
                src={LOGO_SRC}
                alt="Dani Real Estate"
                width={240}
                height={76}
                className="h-14 w-auto max-w-[240px] object-contain mb-8"
                unoptimized
              />
              <p className="text-primary text-xs tracking-[0.25em] uppercase mb-6 font-body">
                {SLOGAN}
              </p>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3 font-display text-2xl border-b border-foreground/10",
                          active ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex sm:hidden justify-center pb-2">
                  <ThemeToggle />
                </div>
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center justify-center gap-2.5 leading-none nav-cta-solid rounded-full py-4 text-sm font-semibold [&_svg]:block [&_svg]:shrink-0"
                >
                  Book a Viewing
                  <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={2} />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 leading-none rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white [&_svg]:block [&_svg]:shrink-0"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2} />
                  WhatsApp
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
