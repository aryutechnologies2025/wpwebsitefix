import { WordpressWoocommerceDevelopmentServices } from "../../data";

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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress WooCommerce Development Services | WPWebsiteFix",

  description:
    "Build fast, secure, and scalable WooCommerce stores with our expert WordPress WooCommerce development services. Custom features, payment integration, and conversion-focused design by WPWebsiteFix.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-woocommerce-development-services/",
  },

  keywords: [
    "WordPress WooCommerce development",
    "WooCommerce store development",
    "WooCommerce website design",
    "custom WooCommerce solutions",
    "WordPress eCommerce development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress WooCommerce Development Services",
    description:
      "Expert WooCommerce development services to build high-performing, secure, and scalable online stores.",
    url: "https://wpwebsitefix.com/services/wordpress-woocommerce-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress WooCommerce Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress WooCommerce Development Services",
    description:
      "Custom WooCommerce development to help you sell more with a fast, secure online store.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};


const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressWoocommerceDevelopmentServices;

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
