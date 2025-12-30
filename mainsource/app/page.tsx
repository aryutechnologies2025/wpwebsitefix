import { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script"; // Import Script for Schema

import Home_Hero from "./components/home/Home_Hero";

/* -------------------- Dynamic Imports -------------------- */
const Home_Portfolio_Section = dynamic(
  () => import("./components/home/Home_Portfolio_Section")
);
const Home_Our_Services = dynamic(
  () => import("./components/home/Home_Our_Services")
);
const HomeToolsAndTechnologies = dynamic(
  () => import("./components/home/HomeToolsAndTechnologies")
);
const HomeMaintenanceProcessWork = dynamic(
  () => import("./components/home/HomeMaintenanceProcessWork")
);
const Home_Testimonial = dynamic(
  () => import("./components/home/Home_Testimonial")
);
const Home_CTA = dynamic(() => import("./components/home/Home_CTA"));

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),

  title: "WP Website Fix – WordPress Maintenance & Development Experts",
  description:
    "WP Website Fix is a professional WordPress agency offering maintenance, security, speed optimization, bug fixing, migrations, custom development, WooCommerce solutions, and ongoing website support.",

  keywords: [
    "About WPWebsiteFix",
    "WordPress maintenance company",
    "WordPress development services",
    "WordPress bug fixing",
    "WordPress migration services",
    "WordPress security services",
    "WordPress speed optimization",
    "WordPress plugin development",
    "WordPress theme development",
    "WooCommerce development",
    "WordPress SEO services",
    "Headless WordPress development",
  ],

  alternates: {
    canonical: "https://wpwebsitefix.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WP Website Fix – WordPress Maintenance & Development Experts",
    description:
      "WP Website Fix provides complete WordPress maintenance and development services including security, speed optimization, bug fixing, migrations, and custom solutions.",
    url: "https://wpwebsitefix.com",
    siteName: "WP Website Fix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WP Website Fix – WordPress Experts",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WP Website Fix – WordPress Maintenance & Development Experts",
    description:
      "Professional WordPress maintenance and development services including security, speed optimization, bug fixing, and custom solutions.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

export default function Home() {
  const brandUrl = "https://wpwebsitefix.com";

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${brandUrl}/#organization`,
        name: "WP Website Fix",
        url: brandUrl,
        logo: {
          "@type": "ImageObject",
          url: `${brandUrl}/og-image.png`,
          width: "512",
          height: "512",
        },
        image: `${brandUrl}/og-image.png`,
        sameAs: [
          "https://www.facebook.com/Fixmywpwebsite",
          "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F68914508%2Fadmin%2Fdashboard%2F",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@wpwebsitefix.com",
          contactType: "customer support",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${brandUrl}/#website`,
        url: brandUrl,
        name: "WP Website Fix",
        publisher: { "@id": `${brandUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${brandUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        name: "WordPress Maintenance & Development",
        serviceType: "Managed WordPress Services",
        provider: { "@id": `${brandUrl}/#organization` },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "WordPress Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Speed Optimization" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Security & Malware Removal",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Plugin Development",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="home-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <main>
        <Home_Hero />
        <Home_Portfolio_Section />
        <Home_Our_Services />
        <HomeToolsAndTechnologies />
        <HomeMaintenanceProcessWork />
        <Home_Testimonial />
        <Home_CTA />
      </main>
    </>
  );
}
