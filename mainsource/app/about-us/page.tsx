// import dynamic from "next/dynamic";
// import type { Metadata } from "next";

// const AboutHero = dynamic(() => import("../components/about/AboutHero"));
// const AboutOurValue = dynamic(
//   () => import("../components/about/AboutOurValue")
// );
// const AboutMeetOurTeam = dynamic(
//   () => import("../components/about/AboutMeetOurTeam")
// );
// const CtaSection = dynamic(() => import("../components/sections/CtaSection"));

// export const metadata: Metadata = {
//   metadataBase: new URL("https://wpwebsitefix.com"),

//   title: "About WPWebsiteFix – WordPress Maintenance & Development Experts",
//   description:
//     "Learn about WPWebsiteFix, a professional WordPress agency offering 12+ services including maintenance, security, speed optimization, bug fixing, migrations, plugin & theme development, WooCommerce solutions, and SEO services.",

//   keywords: [
//     "About WPWebsiteFix",
//     "WordPress maintenance company",
//     "WordPress development services",
//     "WordPress bug fixing",
//     "WordPress migration services",
//     "WordPress security services",
//     "WordPress speed optimization",
//     "WordPress plugin development",
//     "WordPress theme development",
//     "WooCommerce development",
//     "WordPress SEO services",
//     "Headless WordPress development",
//   ],

//   alternates: {
//     canonical: "https://wpwebsitefix.com/about-us/",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "About WPWebsiteFix – WordPress Maintenance & Development Company",
//     description:
//       "WPWebsiteFix provides 12+ professional WordPress services including maintenance, security, speed optimization, development, WooCommerce, SEO, and custom solutions.",
//     images: [
//       {
//         url: "https://wpwebsitefix.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "About WPWebsiteFix – WordPress Support",
//       },
//     ],
//     siteName: "WPWebsiteFix",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "About WPWebsiteFix – WordPress Experts",
//     description:
//       "Discover WPWebsiteFix, a trusted WordPress agency offering maintenance, development, security, speed optimization, and custom WordPress solutions.",
//           images: ["https://wpwebsitefix.com/og-image.jpg"],

//   },
// };

// export default function Page() {
//   return (
//     <div>
//       <AboutHero />
//       <AboutOurValue />
//       <AboutMeetOurTeam />
//       <CtaSection />
//     </div>
//   );
// }

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";


import AboutHero from "../components/about/AboutHero";

/* -------------------- Dynamic Imports-------------------- */
const AboutOurValue = dynamic(
  () => import("../components/about/AboutOurValue")
);
const AboutMeetOurTeam = dynamic(
  () => import("../components/about/AboutMeetOurTeam")
);
const CtaSection = dynamic(() => import("../components/sections/CtaSection"));

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),

  title: "About WPWebsiteFix – WordPress Maintenance & Development Experts",
  description:
    "Learn about WPWebsiteFix, a professional WordPress agency offering 12+ services including maintenance, security, speed optimization, bug fixing, migrations, plugin & theme development, WooCommerce solutions, and SEO services.",

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
    canonical: "https://wpwebsitefix.com/about-us/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About WPWebsiteFix – WordPress Maintenance & Development Company",
    description:
      "WPWebsiteFix provides 12+ professional WordPress services including maintenance, security, speed optimization, development, WooCommerce, SEO, and custom solutions.",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About WPWebsiteFix – WordPress Support",
      },
    ],
    siteName: "WPWebsiteFix",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About WPWebsiteFix – WordPress Experts",
    description:
      "Discover WPWebsiteFix, a trusted WordPress agency offering maintenance, development, security, speed optimization, and custom WordPress solutions.",
    images: ["https://wpwebsitefix.com/og-image.jpg"],
  },
};

export default function Page() {
  const brandUrl = "https://wpwebsitefix.com";
  const pageUrl = "https://wpwebsitefix.com/about-us/";

  /* -------------------- ABOUT PAGE SCHEMA -------------------- */
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "About WPWebsiteFix - WordPress Experts",
        description:
          "Learn about our mission to provide high-performance WordPress maintenance and development services.",
        publisher: { "@id": `${brandUrl}/#organization` },
        mainEntity: {
          "@type": "Organization",
          "@id": `${brandUrl}/#organization`,
          name: "WPWebsiteFix",
          url: brandUrl,
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
            name: "About Us",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main>
        {/* Semantic Sectioning */}
        <section id="about-hero">
          <AboutHero />
        </section>

        <section id="our-values">
          <AboutOurValue />
        </section>

        <section id="team">
          <AboutMeetOurTeam />
        </section>

        <CtaSection />
      </main>
    </>
  );
}
