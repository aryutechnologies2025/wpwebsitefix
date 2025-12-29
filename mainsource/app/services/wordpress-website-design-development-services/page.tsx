import { WordpressWebsiteDesignDevelopmentServices } from "../../data";

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
  title: "WordPress Website Design & Development Services | WPWebsiteFix",

  description:
    "Get a professional, fast, and scalable website with our WordPress website design & development services. Custom-built, SEO-friendly, and conversion-focused by WPWebsiteFix.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-website-design-development-services/",
  },

  keywords: [
    "WordPress website design",
    "WordPress website development",
    "custom WordPress development",
    "WordPress web design services",
    "business WordPress websites",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Website Design & Development Services",
    description:
      "Custom WordPress website design & development services to build fast, secure, and scalable websites.",
    url: "https://wpwebsitefix.com/services/wordpress-website-design-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Website Design & Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Website Design & Development Services",
    description:
      "Build a high-performing WordPress website with expert design & development services.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressWebsiteDesignDevelopmentServices;

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
