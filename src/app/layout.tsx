import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import NavbarLoader from "@/components/layout/NavbarLoader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Dani Real Estate and Developers LLP | Guiding You Home",
    template: "%s | Dani Real Estate",
  },
  description:
    "Dani Real Estate and Developers LLP — Guiding You Home. SECP-registered developers delivering housing and commercial projects across Haripur since 2008.",
  openGraph: {
    title: "Dani Real Estate and Developers LLP",
    description: "Guiding You Home — Premium developments across Haripur & KPK.",
    images: ["/images/CEO%20Muhammad%20Saeed.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-dark text-white font-body antialiased overflow-x-hidden" suppressHydrationWarning>
        <NavbarLoader />
        <main className="flex-1 overflow-x-hidden" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
