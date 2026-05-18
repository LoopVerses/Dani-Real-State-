import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import NavbarLoader from "@/components/layout/NavbarLoader";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import JsonLd from "@/components/seo/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
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

const description =
  "Dani Real Estate and Developers LLP — SECP-registered developers in Haripur since 2008. Residential, commercial, and flagship projects across KPK. Guiding You Home.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | ${SLOGAN}`,
    template: `%s | ${SITE.shortName}`,
  },
  description,
  keywords: [
    "Dani Real Estate",
    "real estate Haripur",
    "housing society Haripur",
    "SECP registered developers Pakistan",
    "Karlugh Real Estate",
    "Haripur Hills",
    "Aman Enclave",
    "property developers KPK",
  ],
  authors: [{ name: SITE.shortName, url: SITE_URL }],
  creator: SITE.shortName,
  publisher: COMPANY_NAME,
  formatDetection: { email: true, telephone: true },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE.shortName,
    title: COMPANY_NAME,
    description: SLOGAN,
    images: [{ url: "/images/Dani_banner.png", width: 1200, height: 630, alt: SITE.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description: SLOGAN,
    images: ["/images/Dani_banner.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

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
