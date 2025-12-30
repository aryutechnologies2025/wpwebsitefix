import React from "react";
import ServicePageHero from "../components/sections/ServicePageHero";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),
  title: "WordPress Maintenance & Development Services | WPWebsiteFix",
  description:
    "Explore all WordPress services offered by WPWebsiteFix, including website maintenance, security, speed optimization, bug fixing, backups, migrations, and custom development.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/wordpress-maintenance-and-development-services/",
  },

  keywords: [
    "WordPress maintenance services",
    "WordPress development services",
    "WordPress website management",
    "WordPress support services",
    "WPWebsiteFix services",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Maintenance & Development Services | WPWebsiteFix",
    description:
      "WPWebsiteFix provides complete WordPress maintenance and development services including security, performance optimization, and custom solutions.",
    url: "https://wpwebsitefix.com/wordpress-maintenance-and-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Maintenance & Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Maintenance & Development Services | WPWebsiteFix",
    description:
      "Discover all professional WordPress services from WPWebsiteFix.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const Page = () => {
  const brandUrl = "https://wpwebsitefix.com";
  const pageUrl =
    "https://wpwebsitefix.com/wordpress-maintenance-and-development-services/";

  const hubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "WordPress Services Directory | WPWebsiteFix",
        description:
          "A comprehensive list of WordPress maintenance, security, and development services.",
        publisher: { "@id": `${brandUrl}/#organization` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "ItemList",
        name: "Our WordPress Services",
        description:
          "List of specialized WordPress services offered by WPWebsiteFix",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "WordPress Maintenance",
            url: `${brandUrl}/services/wordpress-maintenance-services/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Speed Optimization",
            url: `${brandUrl}/services/wordpress-speed-optimization-service/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Security & Malware Removal",
            url: `${brandUrl}/services/wordpress-security-service/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "WooCommerce Development",
            url: `${brandUrl}/services/wordpress-woocommerce-development-services/`,
          },
          // Add more as needed
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brandUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="services-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      <main>
        <ServicePageHero />
      </main>
    </>
  );
};

export default Page;
