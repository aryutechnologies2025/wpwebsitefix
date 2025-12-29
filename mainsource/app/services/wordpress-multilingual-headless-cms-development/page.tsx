import {WordpressMultilingualHeadlessCMSDevelopment } from "../../data";

import dynamic from "next/dynamic";
const ServicesHeroSection = dynamic(() =>
  import("@/app/components/sections/ServicesHeroSection")
);

const ServicesIncludesSection = dynamic(() =>
  import("@/app/components/sections/ServicesIncludesSection")
);

const ServiceOurProcessSection = dynamic(() =>
  import("@/app/components/sections/ServiceOurProcessSection")
);

const ServiceWhatSetUsApart = dynamic(() =>
  import("@/app/components/sections/ServiceWhatSetUsApart")
);

const CtaSection = dynamic(() =>
  import("@/app/components/sections/CtaSection")
);

const FaqSection = dynamic(() =>
  import("@/app/components/sections/FaqSection")
);

const DarkThemeCtaSection = dynamic(() =>
  import("@/app/components/sections/DarkThemeCtaSection")
);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WordPress Multilingual Headless CMS Development | WPWebsiteFix",

  description:
    "Build fast, scalable, and multilingual websites with our WordPress headless CMS development services. API-driven, SEO-friendly, and globally optimized solutions.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-multilingual-headless-cms-development/",
  },

  keywords: [
    "WordPress headless CMS development",
    "multilingual WordPress development",
    "headless WordPress services",
    "API driven WordPress websites",
    "scalable WordPress CMS",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "WordPress Multilingual Headless CMS Development",
    description:
      "Scalable and multilingual headless WordPress CMS solutions for fast, global websites.",
    url:
      "https://wpwebsitefix.com/services/wordpress-multilingual-headless-cms-development/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "WordPress Multilingual Headless CMS Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "WordPress Multilingual Headless CMS Development",
    description:
      "High-performance, multilingual headless WordPress CMS solutions.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};


export default function Page() {
  const {
    heroData,
    includesData,
    processData,
    setUsApartData,
    faqData,
  } = WordpressMultilingualHeadlessCMSDevelopment;

  return (
    <div>
      <ServicesHeroSection heroData={heroData} />
      <ServicesIncludesSection includesData={includesData} />
      <ServiceOurProcessSection processData={processData} />
      <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
      <CtaSection />
      <FaqSection faqData={faqData} />
      <DarkThemeCtaSection />
    </div>
  );
}
