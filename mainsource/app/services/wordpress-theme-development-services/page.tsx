import { WordpressThemeDevelopmentService } from "../../data";
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
  title: "Custom WordPress Theme Development Services | WPWebsiteFix",
  description:
    "Professional custom WordPress theme development. We build lightweight, SEO-optimized, and fully responsive themes tailored to your brand's unique needs.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-theme-development-services/",
  },
  keywords: [
    "WordPress theme development",
    "custom WordPress themes",
    "PSD to WordPress conversion",
    "Figma to WordPress theme",
    "lightweight WordPress themes",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Custom WordPress Theme Development | Fast & Responsive",
    description:
      "Visually stunning and high-performance WordPress themes built from scratch with clean code.",
    url: "https://wpwebsitefix.com/services/wordpress-theme-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Theme Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Theme Development Services | WPWebsiteFix",
    description:
      "Transform your brand with a custom-built, high-performance WordPress theme.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressThemeDevelopmentService;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-theme-development-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Theme Development Services",
        description:
          "Bespoke WordPress theme creation including UI/UX design, mobile responsiveness, and performance-focused coding standards.",
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
            name: "Theme Development",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="theme-dev-schema"
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
