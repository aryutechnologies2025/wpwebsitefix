import { WordpressThemeDevelopmentService } from "../../data";

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
  title: "WordPress Theme Development Services | WPWebsiteFix",

  description:
    "Custom WordPress theme development services to build fast, responsive, and visually stunning websites. Clean code, optimized performance, and brand-focused design.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-theme-development-services/",
  },

  keywords: [
    "WordPress theme development",
    "custom WordPress themes",
    "WordPress theme designer",
    "responsive WordPress themes",
    "WordPress UI UX development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Theme Development Services",
    description:
      "Professional WordPress theme development services for fast, responsive, and scalable websites.",
    url: "https://wpwebsitefix.com/services/wordpress-theme-development-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Theme Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Theme Development Services",
    description:
      "Custom-built WordPress themes designed for performance and usability.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressThemeDevelopmentService;

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
