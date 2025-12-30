import { WordpressBugFixingService } from "../../data";
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
  title: "Professional WordPress Bug Fixing Service | Fix Site Errors Fast",
  description:
    "Expert WordPress bug fixing for 500 errors, White Screen of Death, plugin conflicts, and theme bugs. Fast, secure troubleshooting to get your site back online.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
  },
  keywords: [
    "WordPress bug fixing service",
    "Fix WordPress errors",
    "WordPress 500 internal server error fix",
    "WordPress white screen of death troubleshooting",
    "WordPress plugin conflict repair",
    "Emergency WordPress help",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WordPress Bug Fixing Service | Fast Error Resolution",
    description:
      "Don't let bugs kill your traffic. Our experts fix WordPress crashes, plugin errors, and theme issues quickly.",
    url: "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Bug Fixing Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Bug Fixing Service | WPWebsiteFix",
    description:
      "Fast and reliable WordPress troubleshooting for any error or crash.",
    images: ["https://wpwebsitefix.com/og-image.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressBugFixingService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/";

  /* -------------------- UNIFIED SCHEMA GRAPH -------------------- */
  // Interconnecting the Service, FAQ, and Organization entities
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Bug Fixing Service",
        description:
          "Professional troubleshooting for WordPress errors, including White Screen of Death, PHP errors, and plugin/theme conflicts.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.jpg",
        },
        serviceType: "WordPress Maintenance & Repair",
        areaServed: { "@type": "Worldwide" },
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
            name: "Bug Fixing",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Combined Schema Script */}
      <Script
        id="bug-fixing-unified-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />

      {/* Main Semantic Wrapper */}
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
