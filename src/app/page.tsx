import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import WhatWeOfferSnippet from "@/components/sections/home/WhatWeOfferSnippet";
import OngoingProjectsSection from "@/components/sections/home/OngoingProjectsSection";
import CTABanner from "@/components/sections/home/CTABanner";
import { SLOGAN, COMPANY_NAME } from "@/data/about";
import { buildPageMetadata, DEFAULT_SITE_DESCRIPTION, PRIMARY_DOMAIN } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${COMPANY_NAME} | ${SLOGAN}`,
  description: DEFAULT_SITE_DESCRIPTION,
  path: "",
  extraKeywords: [
    "dani real estate home",
    "dani real estate official website",
    `dani real estate ${PRIMARY_DOMAIN}`,
    "danirealstateanddeveloper homepage",
  ],
});

export default function HomePage() {
  return (
    <div className="min-w-0" suppressHydrationWarning>
      <Hero />
      <WhatWeOfferSnippet />
      <OngoingProjectsSection />
      <CTABanner />
    </div>
  );
}
