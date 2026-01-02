import { WordPressSeoServices } from "../../data";
import dynamic from "next/dynamic";
import Script from "next/script";
import type { Metadata } from "next";

import ServicesHeroSection from "@/app/components/sections/ServicesHeroSection";

/* -------------------- Dynamic Imports (Below the Fold) -------------------- */
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
  title: "Technical WordPress SEO Services | Boost Rankings & Traffic",
  description:
    "Professional WordPress SEO services specializing in technical audits, on-page optimization, and core web vitals. Increase your organic traffic with WPWebsiteFix.",
  alternates: {
    canonical: "https://wpwebsitefix.com/services/wordpress-seo-services/",
  },
  keywords: [
    "WordPress SEO services",
    "WordPress technical SEO",
    "on-page WordPress optimization",
    "WordPress Core Web Vitals fixing",
    "SEO audit for WordPress",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WordPress SEO Services | Technical & On-Page Optimization",
    description:
      "Grow your business with data-driven WordPress SEO. We optimize for speed, structure, and search engines.",
    url: "https://wpwebsitefix.com/services/wordpress-seo-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.comwp-seo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress SEO Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress SEO Services | WPWebsiteFix",
    description:
      "Expert technical SEO for WordPress websites. Rank higher and grow faster.",
    images: ["https://wpwebsitefix.comwp-seo-og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressSeoServices;

  const pageUrl = "https://wpwebsitefix.com/services/wordpress-seo-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress SEO Services",
        description:
          "Technical and On-page Search Engine Optimization specifically for WordPress websites, including speed optimization and schema markup.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        serviceType: "Search Engine Optimization Service",
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqData.map((faq: any) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
            name: "SEO Services",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />

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
