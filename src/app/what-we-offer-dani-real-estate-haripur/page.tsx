import PageHero from "@/components/sections/properties/PageHero";
import WhatWeOfferGrid from "@/components/sections/what-we-offer/WhatWeOfferGrid";
import WhatWeOfferCTA from "@/components/sections/what-we-offer/WhatWeOfferCTA";
import { WHAT_WE_OFFER_INTRO } from "@/data/what-we-offer";
import { STOCK_IMAGES } from "@/lib/images";
import { ROUTES } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "What We Offer — Dani Real Estate Haripur",
  description:
    "Residential development, commercial projects, plotting, investment advisory, and end-to-end delivery from Dani Real Estate and Developers LLP in Haripur, KPK.",
  path: ROUTES.whatWeOffer,
  extraKeywords: [
    "what we offer dani real estate",
    "dani real estate services haripur",
    "residential commercial plotting haripur",
    "real estate developers kpk services",
  ],
  ogImage: "/images/logo.png",
  ogImageAlt: "Dani Real Estate — What We Offer",
});

export default function WhatWeOfferPage() {
  return (
    <>
      <PageHero
        title={WHAT_WE_OFFER_INTRO.title}
        subtitle={WHAT_WE_OFFER_INTRO.subtitle}
        backgroundImage={STOCK_IMAGES.projectCard4}
      />
      <WhatWeOfferGrid />
      <WhatWeOfferCTA />
    </>
  );
}
