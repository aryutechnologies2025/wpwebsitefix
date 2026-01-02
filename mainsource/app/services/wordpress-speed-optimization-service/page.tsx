import { WordpressSpeedOptimizationService } from "../../data";
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
  title: "WordPress Speed Optimization Service | Fix Core Web Vitals",
  description:
    "Professional WordPress speed optimization. Improve Core Web Vitals (LCP, INP, CLS), reduce TTFB, and achieve 90+ PageSpeed scores. Expert performance tuning by WPWebsiteFix.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-speed-optimization-service/",
  },
  keywords: [
    "WordPress speed optimization",
    "Fix Core Web Vitals WordPress",
    "WordPress performance tuning",
    "Reduce page load time WordPress",
    "WP PageSpeed 90 plus service",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WordPress Speed Optimization & Performance Tuning",
    description:
      "Achieve lightning-fast load times and perfect Core Web Vitals with our expert WordPress optimization service.",
    url: "https://wpwebsitefix.com/services/wordpress-speed-optimization-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/wp-speed-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Speed Optimization Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Speed Optimization Service | WPWebsiteFix",
    description:
      "Boost your search rankings and conversion rates with a faster WordPress website.",
    images: ["https://wpwebsitefix.com/wp-speed-og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressSpeedOptimizationService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-speed-optimization-service/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Speed Optimization",
        description:
          "Technical performance optimization service focusing on Core Web Vitals, database cleanup, image compression, and advanced caching for WordPress.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        serviceType: "Website Performance Optimization",
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
            name: "Speed Optimization",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="speed-optimization-schema"
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
