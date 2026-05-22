import { SITE_URL, CONTACT } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import {
  BRAND_ALIASES,
  PRIMARY_DOMAIN,
  PRIMARY_DOMAIN_WWW,
  SEO_KEYWORDS,
} from "@/lib/seo";
import { COMPANY_NAME, SLOGAN } from "@/data/about";
import { absoluteUrl, siteOrigin } from "@/lib/absolute-url";
import {
  KARLUGH_SUB_ORGANIZATION,
  SCHEMA_SAME_AS,
  SITE_CREATOR,
} from "@/lib/backlinks";
import { INDEXABLE_PAGES, sitemapNavigationItems } from "@/lib/sitemap-config";
import { LOGO_SRC } from "@/lib/images";

export default function JsonLd() {
  const base = siteOrigin();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": orgId,
    name: COMPANY_NAME,
    alternateName: [...BRAND_ALIASES],
    legalName: COMPANY_NAME,
    url: base,
    mainEntityOfPage: base,
    slogan: SLOGAN,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    image: absoluteUrl("/images/1.png"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_SRC),
      width: 512,
      height: 512,
    },
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT.phoneTel,
      email: CONTACT.email,
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
    knowsAbout: SEO_KEYWORDS.slice(0, 40),
    sameAs: [...new Set(SCHEMA_SAME_AS)],
    subOrganization: {
      ...KARLUGH_SUB_ORGANIZATION,
      parentOrganization: { "@id": orgId },
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "Dani Real Estate and Developers",
    alternateName: [...BRAND_ALIASES],
    url: base,
    description:
      "Official website for Dani Real Estate and Developers LLP — Dani Real Estate, Dani Real State, danirealstateanddeveloper.com",
    publisher: { "@id": orgId },
    creator: SITE_CREATOR,
    inLanguage: "en-PK",
    copyrightHolder: { "@id": orgId },
  };

  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#sitemap-pages`,
    name: "Dani Real Estate site pages",
    numberOfItems: INDEXABLE_PAGES.length,
    itemListElement: sitemapNavigationItems(),
  };

  const webPages = INDEXABLE_PAGES.map((page) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.name,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    publisher: { "@id": orgId },
    inLanguage: "en-PK",
    mainEntity: { "@id": orgId },
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, siteNavigation, ...webPages],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: base,
              },
              ...INDEXABLE_PAGES.filter((p) => p.path !== ROUTES.home).map(
                (page, i) => ({
                  "@type": "ListItem",
                  position: i + 2,
                  name: page.name,
                  item: absoluteUrl(page.path),
                })
              ),
            ],
          }),
        }}
      />
    </>
  );
}
