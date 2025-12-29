// import { WordpressBugFixingService } from "../../data";

// import dynamic from "next/dynamic";
// const ServicesHeroSection = dynamic(
//   () => import("@/app/components/sections/ServicesHeroSection")
// );

// const ServicesIncludesSection = dynamic(
//   () => import("@/app/components/sections/ServicesIncludesSection")
// );

// const ServiceOurProcessSection = dynamic(
//   () => import("@/app/components/sections/ServiceOurProcessSection")
// );

// const ServiceWhatSetUsApart = dynamic(
//   () => import("@/app/components/sections/ServiceWhatSetUsApart")
// );

// const CtaSection = dynamic(
//   () => import("@/app/components/sections/CtaSection")
// );

// const FaqSection = dynamic(
//   () => import("@/app/components/sections/FaqSection")
// );

// const DarkThemeCtaSection = dynamic(
//   () => import("@/app/components/sections/DarkThemeCtaSection")
// );

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "WordPress Bug Fixing Service | WPWebsiteFix",
//   description:
//     "Fix WordPress errors, crashes, white screen issues, and plugin or theme bugs with WPWebsiteFix’s expert WordPress bug fixing service. Fast, secure, and reliable solutions.",

//   keywords: [
//     "WordPress bug fixing service",
//     "Fix WordPress errors",
//     "WordPress troubleshooting",
//     "WordPress white screen fix",
//     "WordPress plugin issues",
//     "WordPress theme bugs",
//     "WordPress support services",
//   ],

//   alternates: {
//     canonical:
//       "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "WordPress Bug Fixing Service | WPWebsiteFix",
//     description:
//       "Resolve WordPress errors, crashes, plugin and theme issues with WPWebsiteFix’s professional bug fixing service.",
//     url: "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
//     siteName: "WPWebsiteFix",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "WordPress Bug Fixing Service | WPWebsiteFix",
//     description:
//       "Get fast and reliable WordPress bug fixing services to resolve website errors and crashes.",
//   },
// };

// export default function Page() {
//   const { heroData, includesData, processData, setUsApartData, faqData } =
//     WordpressBugFixingService;

//   return (
//     <div>
//       <ServicesHeroSection heroData={heroData} />
//       <ServicesIncludesSection includesData={includesData} />
//       <ServiceOurProcessSection processData={processData} />
//       <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
//       <CtaSection />
//       <FaqSection faqData={faqData} />
//       <DarkThemeCtaSection />
//     </div>
//   );
// }




import { WordpressBugFixingService } from "../../data";
import dynamic from "next/dynamic";
import Script from "next/script";
import type { Metadata } from "next";

/* -------------------- Dynamic Imports -------------------- */
const ServicesHeroSection = dynamic(
  () => import("@/app/components/sections/ServicesHeroSection")
);
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
  title: "WordPress Bug Fixing Service | WPWebsiteFix",

  description:
    "Fix WordPress errors, crashes, white screen issues, and plugin or theme bugs with WPWebsiteFix’s expert WordPress bug fixing service. Fast, secure, and reliable solutions.",

  keywords: [
    "WordPress bug fixing service",
    "Fix WordPress errors",
    "WordPress troubleshooting",
    "WordPress white screen fix",
    "WordPress plugin issues",
    "WordPress theme bugs",
  ],

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Bug Fixing Service | WPWebsiteFix",
    description:
      "Resolve WordPress errors, crashes, plugin and theme issues with WPWebsiteFix’s professional bug fixing service.",
    url: "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
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
      "Fast and reliable WordPress bug fixing services to resolve website errors and crashes.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressBugFixingService;

  /* -------------------- FAQ SCHEMA (DYNAMIC) -------------------- */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ==================== SERVICE SCHEMA ==================== */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress Bug Fixing Service",
            description:
              "Professional WordPress bug fixing service to resolve errors, crashes, plugin conflicts, theme issues, and white screen problems.",
            url: "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
            serviceType: "WordPress Bug Fixing",
            provider: {
              "@type": "Organization",
              name: "WPWebsiteFix",
              url: "https://wpwebsitefix.com",
              logo: "https://wpwebsitefix.com/logo.png",
            },
            areaServed: {
              "@type": "Worldwide",
            },
          }),
        }}
      />

      {/* ==================== FAQ SCHEMA (FROM faqData) ==================== */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ==================== BREADCRUMB SCHEMA ==================== */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
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
                name: "WordPress Bug Fixing Service",
                item:
                  "https://wpwebsitefix.com/services/wordpress-bug-fixing-service/",
              },
            ],
          }),
        }}
      />

      {/* ==================== PAGE CONTENT ==================== */}
      <ServicesHeroSection heroData={heroData} />
      <ServicesIncludesSection includesData={includesData} />
      <ServiceOurProcessSection processData={processData} />
      <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
      <CtaSection />
      <FaqSection faqData={faqData} />
      <DarkThemeCtaSection />
    </>
  );
}
