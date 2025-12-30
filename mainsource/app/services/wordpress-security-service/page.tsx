import { WordpressSecurityService } from "../../data";
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
  title: "WordPress Security Service | WPWebsiteFix",
  description:
    "Professional WordPress security service. Hack recovery, malware removal, firewall configuration, and 24/7 vulnerability monitoring to keep your site safe.",
  alternates: {
    canonical: "https://wpwebsitefix.com/services/wordpress-security-service/",
  },
  keywords: [
    "WordPress security service",
    "WordPress malware removal",
    "WordPress hack recovery",
    "WordPress firewall setup",
    "WP security audit",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WordPress Security & Emergency Hack Recovery",
    description:
      "Expert security monitoring and professional malware removal services for WordPress websites.",
    url: "https://wpwebsitefix.com/services/wordpress-security-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Security Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Security & Malware Removal | WPWebsiteFix",
    description:
      "Keep your site safe with professional WordPress security monitoring and firewall protection.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressSecurityService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-security-service/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Security and Malware Removal",
        description:
          "Comprehensive WordPress security services including malware scanning, hack cleanup, vulnerability patching, and firewall hardening.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.png",
        },
        serviceType: "Cybersecurity Service",
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
            name: "Security Service",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="security-service-schema"
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
