import { WordPressLandingPagesDesignDevelopment } from "../../data";
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
  title: "High-Converting WordPress Landing Page Design & Development",
  description:
    "Professional WordPress landing page design and development services. We build fast, responsive, and conversion-optimized pages that turn visitors into customers.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-landing-page-design-development/",
  },
  keywords: [
    "WordPress landing page design",
    "WordPress landing page development",
    "conversion focused WordPress pages",
    "custom landing page design services",
    "WordPress lead generation pages",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WordPress Landing Page Design | Build Pages That Convert",
    description:
      "Custom WordPress landing page development focused on ROI, speed, and lead generation.",
    url: "https://wpwebsitefix.com/services/wordpress-landing-page-design-development/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image1.jpg", 
        width: 1200,
        height: 630,
        alt: "WordPress Landing Page Design & Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Landing Page Design & Development",
    description:
      "High-converting WordPress landing pages designed to grow your business.",
    images: ["https://wpwebsitefix.com/og-image1.jpg"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressLandingPagesDesignDevelopment;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-landing-page-design-development/";

  /* -------------------- UNIFIED SCHEMA GRAPH -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Landing Page Design & Development",
        description:
          "Professional landing page creation specializing in high-conversion design, mobile responsiveness, and optimized speed for WordPress sites.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.png", 
        },
        serviceType: "Web Design and Development",
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
            name: "Landing Page Design",
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
        id="landing-page-unified-schema"
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
