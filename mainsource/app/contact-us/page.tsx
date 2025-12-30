import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";

import ContactHero from "../components/contact/ContactHero";

/* -------------------- Dynamic Imports-------------------- */
const ContactSecondSection = dynamic(
  () => import("../components/contact/ContactSecondSection")
);
const CtaSection = dynamic(() => import("../components/sections/CtaSection"));

export const metadata: Metadata = {
  title: "Contact WPWebsiteFix – WordPress Maintenance & Support Experts",
  description:
    "Need help with WordPress? Contact WPWebsiteFix for professional WordPress maintenance, security, speed optimization, updates, and reliable technical support.",

  keywords: [
    "Contact WPWebsiteFix",
    "WordPress support services",
    "WordPress maintenance company",
    "WordPress help",
    "WordPress technical support",
  ],

  alternates: {
    canonical: "https://wpwebsitefix.com/contact-us/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact WPWebsiteFix – WordPress Support Experts",
    description:
      "Get in touch with WPWebsiteFix for expert WordPress maintenance, security, speed optimization, and ongoing support.",
    url: "https://wpwebsitefix.com/contact-us/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact WPWebsiteFix – WordPress Support",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact WPWebsiteFix – WordPress Support Experts",
    description:
      "Need WordPress help? Contact WPWebsiteFix for expert maintenance and reliable technical support.",
    images: ["https://wpwebsitefix.com/og-image.jpg"],
  },
};

export default function Page() {
  const brandUrl = "https://wpwebsitefix.com";
  const pageUrl = "https://wpwebsitefix.com/contact-us/";

  /* -------------------- CONTACT PAGE SCHEMA -------------------- */
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Contact WPWebsiteFix",
        description:
          "Get in touch with WordPress experts for maintenance, security, and development support.",
        publisher: { "@id": `${brandUrl}/#organization` },
        mainEntity: {
          "@type": "Organization",
          "@id": `${brandUrl}/#organization`,
          name: "WPWebsiteFix",
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@wpwebsitefix.com",
            contactType: "customer support",
            availableLanguage: "English",
            areaServed: "Worldwide",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: brandUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main>
        {/* Semantic Sectioning with IDs for anchor linking */}
        <section id="contact-hero">
          <ContactHero />
        </section>

        <section id="contact-details">
          <ContactSecondSection />
        </section>

        <CtaSection />
      </main>
    </>
  );
}
