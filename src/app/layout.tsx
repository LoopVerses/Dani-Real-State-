import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import NavbarLoader from "@/components/layout/NavbarLoader";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import JsonLd from "@/components/seo/JsonLd";
import { buildRootMetadata } from "@/lib/seo";
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

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-dark text-white font-body antialiased overflow-x-hidden" suppressHydrationWarning>
        <JsonLd />
        <NavbarLoader />
        <main className="flex-1 overflow-x-hidden w-full" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
