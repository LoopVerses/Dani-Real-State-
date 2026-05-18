import { SITE, SITE_URL, CONTACT } from "@/lib/site";
import { COMPANY_NAME, SLOGAN } from "@/data/about";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: COMPANY_NAME,
    alternateName: SITE.shortName,
    url: SITE_URL,
    slogan: SLOGAN,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haripur",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    areaServed: ["Haripur", "Khyber Pakhtunkhwa", "Pakistan"],
    sameAs: [CONTACT.whatsappUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.shortName,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/projects`,
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
