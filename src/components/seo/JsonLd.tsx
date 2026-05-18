import { SITE_URL, CONTACT } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { BRAND_ALIASES, PRIMARY_DOMAIN, PRIMARY_DOMAIN_WWW } from "@/lib/seo";
import { COMPANY_NAME, SLOGAN } from "@/data/about";

export default function JsonLd() {
  const base = SITE_URL.replace(/\/$/, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${base}/#organization`,
    name: COMPANY_NAME,
    alternateName: [...BRAND_ALIASES],
    legalName: COMPANY_NAME,
    url: base,
    slogan: SLOGAN,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    image: `${base}/images/Dani_banner.png`,
    logo: `${base}/images/logo.png`,
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "domain",
        value: PRIMARY_DOMAIN,
      },
      {
        "@type": "PropertyValue",
        propertyID: "website",
        value: PRIMARY_DOMAIN_WWW,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haripur",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "City", name: "Haripur" },
      { "@type": "AdministrativeArea", name: "Khyber Pakhtunkhwa" },
      { "@type": "Country", name: "Pakistan" },
    ],
    knowsAbout: [
      "Residential real estate",
      "Commercial property development",
      "Housing societies Haripur",
      "Plot sales KPK",
    ],
    sameAs: [CONTACT.whatsappUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: "Dani Real Estate and Developers",
    alternateName: [...BRAND_ALIASES],
    url: base,
    description:
      "Official website for Dani Real Estate and Developers LLP — Dani Real Estate, Dani Real State, danirealstateanddeveloper.com",
    publisher: { "@id": `${base}/#organization` },
    inLanguage: "en-PK",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}${ROUTES.projects}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
