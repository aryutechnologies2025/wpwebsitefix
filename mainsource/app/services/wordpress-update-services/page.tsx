import {  WordpressUpdateService } from "../../data";

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
  title: "WordPress Update Services | WPWebsiteFix",

  description:
    "Professional WordPress update services to keep your core, themes, and plugins secure, compatible, and running smoothly without downtime or errors.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-update-services/",
  },

  keywords: [
    "WordPress update services",
    "WordPress core updates",
    "plugin and theme updates",
    "WordPress maintenance services",
    "secure WordPress updates",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Update Services",
    description:
      "Safe and reliable WordPress core, plugin, and theme updates to keep your website secure and optimized.",
    url: "https://wpwebsitefix.com/services/wordpress-update-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Update Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Update Services",
    description:
      "Keep your WordPress site secure and up to date with expert update services.",
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
  } = WordpressUpdateService;

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
