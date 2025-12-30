import { WordpressWebsiteDesignDevelopmentServices } from "../../data";
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
  title: "WordPress Website Design & Development Services | WPWebsiteFix",
  description:
    "Get a professional, fast, and scalable website with our WordPress website design & development services. Custom-built, SEO-friendly, and conversion-focused.",
  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-website-design-development-services/",
  },
  keywords: [
    "WordPress website design",
    "WordPress website development",
    "custom WordPress development",
    "business WordPress websites",
    "professional WordPress design agency",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Expert WordPress Design & Development Services",
    description:
      "Build a high-performing WordPress website with expert design & development services tailored to your business.",
    url: "https://wpwebsitefix.com/services/wordpress-website-design-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Website Design & Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Website Design & Development Services",
    description:
      "Build a high-performing WordPress website with expert design & development services.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressWebsiteDesignDevelopmentServices;

  const pageUrl =
    "https://wpwebsitefix.com/services/wordpress-website-design-development-services/";

  /* -------------------- UNIFIED SCHEMA (GRAPH) -------------------- */
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "WordPress Website Design & Development Services",
        description:
          "Full-cycle WordPress website creation including custom UI/UX design, responsive development, and SEO optimization.",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: "WPWebsiteFix",
          url: "https://wpwebsitefix.com",
          logo: "https://wpwebsitefix.com/og-image.png",
        },
        serviceType: "Web Development Service",
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
            name: "Design & Development",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="design-dev-schema"
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
