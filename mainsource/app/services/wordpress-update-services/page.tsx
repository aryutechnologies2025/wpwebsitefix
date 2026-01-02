import { WordpressUpdateService } from "../../data";
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
  title:
    "Professional WordPress Update Services | Safe & Secure | WPWebsiteFix",
  description:
    "Professional WordPress update services. We safely update WordPress core, themes, and plugins with zero downtime, full backups, and compatibility testing.",
  alternates: {
    canonical: "https://wpwebsitefix.com/services/wordpress-update-services/",
  },
  keywords: [
    "WordPress update services",
    "safe WordPress core updates",
    "WordPress plugin maintenance",
    "WordPress theme compatibility fix",
    "WP backup and update service",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Safe WordPress Update & Maintenance Services",
    description:
      "Don't risk a broken site. We handle your WordPress core, plugin, and theme updates with expert care.",
    url: "https://wpwebsitefix.com/services/wordpress-update-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/wp-update-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Update Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional WordPress Update Services | WPWebsiteFix",
    description:
      "Keep your site secure and functional with professional WordPress maintenance and updates.",
    images: ["https://wpwebsitefix.com/wp-update-og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressUpdateService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-update-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Update and Maintenance Service",
        description:
          "Safe management of WordPress updates, including core files, plugins, and themes, with staging environment testing and backup protocols.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        serviceType: "Website Maintenance Service",
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
            name: "Update Services",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="update-service-schema"
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
