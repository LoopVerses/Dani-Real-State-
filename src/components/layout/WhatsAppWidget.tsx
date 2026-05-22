"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CONTACT, SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[60] flex flex-col items-end gap-3 safe-bottom"
      aria-live="polite"
    >
      <div
        className={cn(
          "w-[min(300px,calc(100vw-2rem))] origin-bottom-right rounded-2xl border border-primary/25 bg-dark-3/98 backdrop-blur-xl shadow-[0_20px_50px_var(--shadow-color)] overflow-hidden transition-all duration-300 theme-surface",
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none h-0 w-0 border-0"
        )}
      >
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p className="font-display text-lg text-foreground leading-tight">
                {SITE.shortName}
              </p>
              <p className="text-[#25D366] text-xs font-medium mt-0.5">Typically replies fast</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full text-text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Close chat panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-text-muted text-sm mb-4 leading-relaxed">
            Ask about plots, site visits, or payment plans — we are here to help in Haripur
            and across KPK.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Start WhatsApp Chat
          </a>
          <p className="text-center text-[11px] text-text-muted mt-3 tabular-nums">
            {CONTACT.phoneDisplay}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] ring-4 ring-[#25D366]/20 transition-transform hover:scale-105 active:scale-95"
        aria-label={open ? "Close WhatsApp menu" : `Chat on WhatsApp — ${CONTACT.phoneDisplay}`}
        aria-expanded={open}
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 motion-reduce:hidden"
          aria-hidden
        />
        {open ? (
          <X className="relative w-6 h-6" strokeWidth={2} />
        ) : (
          <MessageCircle className="relative w-7 h-7 fill-white text-white" strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
