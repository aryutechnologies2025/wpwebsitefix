import dynamic from "next/dynamic";
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
import { WordPressPluginDevelopmentServices } from "../../data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Plugin Development Services | WPWebsiteFix",

  description:
    "Build secure, scalable, and custom WordPress plugins with our expert plugin development services. Extend functionality, improve performance, and meet your business needs.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-plugin-development-services/",
  },

  keywords: [
    "WordPress plugin development",
    "custom WordPress plugins",
    "WordPress plugin developer",
    "plugin development services",
    "WordPress custom functionality",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Plugin Development Services",
    description:
      "Custom WordPress plugin development to extend functionality and improve performance.",
    url: "https://wpwebsitefix.com/services/wordpress-plugin-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Plugin Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Plugin Development Services",
    description:
      "Custom-built WordPress plugins tailored to your business needs.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressPluginDevelopmentServices;

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
};

export default page;
