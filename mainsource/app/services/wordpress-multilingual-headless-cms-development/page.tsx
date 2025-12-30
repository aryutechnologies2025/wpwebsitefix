import { WordpressMultilingualHeadlessCMSDevelopment } from "../../data";
import dynamic from "next/dynamic";
import Script from "next/script";
import type { Metadata } from "next";

import ServicesHeroSection from "@/app/components/sections/ServicesHeroSection";

/* -------------------- Dynamic Imports -------------------- */
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
  title: "WordPress Multilingual Headless CMS Development | WPWebsiteFix",
  description:
    "Build fast, scalable, and multilingual websites with our WordPress headless CMS development services. API-driven, SEO-friendly, and globally optimized solutions.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-multilingual-headless-cms-development/",
  },
  keywords: [
    "WordPress headless CMS development",
    "multilingual WordPress development",
    "Headless WP with WPML",
    "Next.js headless WordPress",
    "Headless CMS API optimization",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Headless Multilingual WordPress Development | WPWebsiteFix",
    description:
      "Enterprise-grade headless WordPress solutions for global brands. Fast, secure, and API-driven.",
    url: "https://wpwebsitefix.com/services/wordpress-multilingual-headless-cms-development/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Multilingual Headless CMS Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Multilingual Headless CMS Development",
    description:
      "Scalable and multilingual headless WordPress CMS solutions for fast, global websites.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressMultilingualHeadlessCMSDevelopment;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-multilingual-headless-cms-development/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Multilingual Headless CMS Development",
        description:
          "High-performance headless WordPress development with advanced multilingual capabilities for global scalability.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.png",
        },
        serviceType: "Headless CMS Development",
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
            name: "Headless CMS Development",
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
        id="headless-multilingual-schema"
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
