import { WordpressMigrationService } from "../../data";
import dynamic from "next/dynamic";
import Script from "next/script";
import type { Metadata } from "next";

import ServicesHeroSection from "@/app/components/sections/ServicesHeroSection";

/* -------------------- Dynamic Imports -----------------01--- */
const ServicesIncludesSection = dynamic(
  () => import("@/app/components/sections/ServicesIncludesSection")
);
const ServiceOurProcessSection = dynamic(
  () => import("@/app/components/sections/ServiceOurProcessSection")
);
const ServiceWhatSetUsApart = dynamic(
  () => import("@/app/components/sections/ServiceWhatSetUsApart")
);
const CtaSection = dynamic(
  () => import("@/app/components/sections/CtaSection")
);
const FaqSection = dynamic(
  () => import("@/app/components/sections/FaqSection")
);
const DarkThemeCtaSection = dynamic(
  () => import("@/app/components/sections/DarkThemeCtaSection")
);

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "WordPress Migration Services | Zero Downtime Site Transfer",
  description:
    "Professional WordPress migration services. Move your site, WooCommerce store, or domain safely with zero downtime, no data loss, and 100% SEO preservation.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-migration-services/",
  },
  keywords: [
    "WordPress migration services",
    "WordPress website migration",
    "move WordPress site to new host",
    "WooCommerce migration",
    "SEO safe WordPress transfer",
  ],
  openGraph: {
    title: "WordPress Migration Services | Safe & Fast Transfers",
    description:
      "Secure WordPress migration services with zero downtime. We handle everything from files to database and SEO redirects.",
    url: "https://wpwebsitefix.com/services/wordpress-migration-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/wp-migration-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WP Migration Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Migration Services | Zero Downtime",
    description:
      "Professional WordPress site transfers with zero downtime and full SEO protection.",
    images: ["https://wpwebsitefix.com/wp-migration-og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressMigrationService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-migration-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  // This connects your Service, FAQ, and Breadcrumbs into one logical entity for Google
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Migration Services",
        description:
          "Professional WordPress migration including domain, hosting, and WooCommerce transfers.",
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        areaServed: "Worldwide",
        serviceType: "Technical WordPress Support",
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqData.map((faq: any) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://wpwebsitefix.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://wpwebsitefix.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "WordPress Migration",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="migration-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />

      {/* Main Content */}
      <main>
        <ServicesHeroSection heroData={heroData} />
        <ServicesIncludesSection includesData={includesData} />
        <ServiceOurProcessSection processData={processData} />
        <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
        <CtaSection />
        <FaqSection faqData={faqData} />
        <DarkThemeCtaSection />
      </main>
    </>
  );
}
