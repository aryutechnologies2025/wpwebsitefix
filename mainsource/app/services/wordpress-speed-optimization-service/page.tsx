import {  WordpressSpeedOptimizationService } from "../../data";

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
  title: "WordPress Speed Optimization Service | WPWebsiteFix",

  description:
    "Improve Core Web Vitals and page load times with our WordPress speed optimization service. Faster performance, better SEO, and improved user experience.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-speed-optimization-service/",
  },

  keywords: [
    "WordPress speed optimization",
    "WordPress performance optimization",
    "WordPress Core Web Vitals",
    "website speed optimization WordPress",
    "WordPress page speed services",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Speed Optimization Service",
    description:
      "Expert WordPress speed optimization service to improve performance and Core Web Vitals.",
    url: "https://wpwebsitefix.com/services/wordpress-speed-optimization-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Speed Optimization Service",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Speed Optimization Service",
    description:
      "Boost WordPress performance and page speed with expert optimization service.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const page = () => {

  
const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressSpeedOptimizationService;

  return (
    <div>
      <ServicesHeroSection heroData={heroData} />
      <ServicesIncludesSection includesData={includesData} />
      <ServiceOurProcessSection processData={processData} />
      <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
      <CtaSection />
      <FaqSection faqData={faqData}/>
      <DarkThemeCtaSection/>
    </div>
  );
};

export default page;
