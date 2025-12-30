import { WordpressWoocommerceDevelopmentServices } from "../../data";
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
  title: "WordPress WooCommerce Development Services | Custom e-Stores",
  description:
    "Build fast, secure, and scalable WooCommerce stores. Expert WordPress eCommerce development including payment gateways, custom features, and conversion optimization.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-woocommerce-development-services/",
  },
  keywords: [
    "WordPress WooCommerce development",
    "WooCommerce store development",
    "custom WooCommerce solutions",
    "WooCommerce migration services",
    "WordPress eCommerce agency",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Expert WooCommerce Development Services | WPWebsiteFix",
    description:
      "Sell more with a high-performance WooCommerce store built for growth and security.",
    url: "https://wpwebsitefix.com/services/wordpress-woocommerce-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress WooCommerce Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress WooCommerce Development Services",
    description:
      "Custom-built WooCommerce stores designed for speed and higher conversions.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressWoocommerceDevelopmentServices;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-woocommerce-development-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress WooCommerce Development Services",
        description:
          "Professional WooCommerce development including store design, custom plugin integration, payment gateway setup, and performance tuning.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.png",
        },
        serviceType: "eCommerce Development Service",
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
            name: "WooCommerce Development",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="woocommerce-dev-schema"
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
