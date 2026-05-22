import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import NavbarLoader from "@/components/layout/NavbarLoader";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ThemeScript from "@/components/providers/ThemeScript";
import HeadLinks from "@/components/seo/HeadLinks";
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
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <HeadLinks />
      </head>
      <body
        className="min-h-screen bg-background text-foreground font-body antialiased theme-surface"
        suppressHydrationWarning
      >
        <ThemeScript />
        <ThemeProvider>
          <JsonLd />
          <NavbarLoader />
          <main className="w-full min-w-0" suppressHydrationWarning>
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
