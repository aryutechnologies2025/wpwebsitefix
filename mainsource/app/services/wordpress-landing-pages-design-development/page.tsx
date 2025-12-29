import { WordPressLandingPagesDesignDevelopment } from "../../data";

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
  title: "WordPress Landing Page Design & Development Services | WPWebsiteFix",

  description:
    "Boost conversions and capture high-quality leads with our WordPress landing page design & development services. Fast, responsive, and conversion-focused pages by WPWebsiteFix.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-landing-page-design-development/",
  },

  keywords: [
    "WordPress landing page design",
    "WordPress landing page development",
    "landing page design services",
    "conversion focused WordPress pages",
    "WordPress marketing pages",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Landing Page Design & Development Services",
    description:
      "Conversion-focused WordPress landing page design & development to help you generate more leads and sales.",
    url: "https://wpwebsitefix.com/services/wordpress-landing-page-design-development/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Landing Page Design & Development Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Landing Page Design & Development",
    description:
      "High-converting WordPress landing pages designed to grow your business.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressLandingPagesDesignDevelopment;

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
