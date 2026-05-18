import Link from "next/link";
import {
  Share2,
  Camera,
  MessageCircle,
  Link2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Residential",
  "Commercial",
  "Plots",
  "Investment Advisory",
  "Property Management",
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t-2 border-primary" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" suppressHydrationWarning>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-primary text-2xl font-bold">DANI</p>
            <p className="text-[10px] tracking-widest text-text-muted uppercase mt-1 mb-4">
              Real Estate and Developers LLP
            </p>
            <p className="text-primary font-display italic text-sm mb-4">
              Guiding You Home
            </p>
            <p className="text-text-muted text-sm mb-6">
              SECP-registered developers delivering housing, commercial, and
              flagship projects across Haripur since 2008.
            </p>
            <div className="flex gap-4">
              {[Share2, Camera, MessageCircle, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-muted text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+923001234567" className="hover:text-primary transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@danirealestate.pk"
                  className="hover:text-primary transition-colors"
                >
                  info@danirealestate.pk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Plot 45, Clifton Block 5, Karachi, Sindh</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-primary/20 mt-12 pt-8 text-center text-text-muted text-sm"
          suppressHydrationWarning
        >
          © 2025 Dani Real Estate and Developers LLP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
