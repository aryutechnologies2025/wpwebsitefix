import { WordPressPluginDevelopmentServices } from "../../data";
import dynamic from "next/dynamic";
import Script from "next/script";
import type { Metadata } from "next";

import ServicesHeroSection from "@/app/components/sections/ServicesHeroSection";

/* -------------------- Dynamic Imports-------------------- */
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
  title: "Custom WordPress Plugin Development Services | WPWebsiteFix",
  description:
    "Build secure, scalable, and custom WordPress plugins. Our expert developers build high-performance, API-integrated, and coding-standard-compliant plugins.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-plugin-development-services/",
  },
  keywords: [
    "WordPress plugin development",
    "custom WordPress plugins",
    "WordPress plugin developer",
    "WooCommerce extension development",
    "WordPress API integration",
    "Plugin security audit",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Expert WordPress Plugin Development | Custom Solutions",
    description:
      "Tailor-made WordPress plugins built for speed, security, and scalability.",
    url: "https://wpwebsitefix.com/services/wordpress-plugin-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/wp-plugin-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Plugin Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Plugin Development Services | WPWebsiteFix",
    description:
      "Extend your website's functionality with custom-built WordPress plugins.",
    images: ["https://wpwebsitefix.com/wp-plugin-development-og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressPluginDevelopmentServices;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-plugin-development-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Plugin Development Services",
        description:
          "Professional development of custom WordPress plugins, including API integrations, WooCommerce extensions, and performance optimization.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        serviceType: "Software Development",
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
            name: "Plugin Development",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="plugin-dev-schema"
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
