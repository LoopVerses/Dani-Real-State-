import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, whatsappLink } from "@/lib/site";
import { OFFICIAL_PRESENCE_LINKS } from "@/lib/backlinks";
import { PRIMARY_DOMAIN } from "@/lib/seo";
export default function Footer() {
  return (
    <footer className="bg-dark border-t-2 border-primary pb-24 sm:pb-8" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" suppressHydrationWarning>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="inline-block">
              <p className="font-display text-primary text-2xl font-bold">{SITE.shortName}</p>
            </Link>
            <p className="text-[10px] tracking-widest text-text-muted uppercase mt-1 mb-4">
              Real Estate and Developers LLP
            </p>
            <p className="text-primary font-display italic text-sm mb-4">{SITE.slogan}</p>
            <p className="text-text-muted text-sm mb-6 max-w-sm">
              SECP-registered developers delivering housing, commercial, and flagship
              projects across Haripur since 2008.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 px-4 py-2 text-sm text-foreground hover:bg-[#25D366]/25 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-foreground hover:border-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 break-all">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-primary/20 mt-12 pt-8 text-text-muted text-sm text-center sm:text-left"
          suppressHydrationWarning
        >
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <p className="text-[11px] text-text-muted/80 mt-1 max-w-md">
            Dani Real Estate · Dani Real State &amp; Developers ·{" "}
            <a
              href={`https://${PRIMARY_DOMAIN}`}
              className="hover:text-primary transition-colors"
            >
              {PRIMARY_DOMAIN}
            </a>
          </p>
          <p className="text-[11px] text-text-muted/70 mt-3 flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1">
            {OFFICIAL_PRESENCE_LINKS.map((link, i) => (
              <span key={link.href} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-text-muted/40" aria-hidden>|</span>}
                {link.external ? (
                  <a
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.rel ??
                      (link.href.startsWith("http") ? "noopener noreferrer" : undefined)
                    }
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a href={link.href} title={link.title} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
