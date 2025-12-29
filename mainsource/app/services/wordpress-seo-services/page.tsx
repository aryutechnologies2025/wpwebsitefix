import { WordPressSeoServices } from "../../data";

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
  title: "WordPress SEO Services | WPWebsiteFix",

  description:
    "Improve rankings, increase organic traffic, and grow your business with our expert WordPress SEO services. Technical SEO, on-page optimization, and performance-driven results.",

  alternates: {
    canonical: "https://wpwebsitefix.com/services/wordpress-seo-services/",
  },

  keywords: [
    "WordPress SEO services",
    "WordPress SEO optimization",
    "WordPress technical SEO",
    "WordPress search engine optimization",
    "SEO services for WordPress websites",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress SEO Services",
    description:
      "Professional WordPress SEO services to improve rankings, traffic, and visibility.",
    url: "https://wpwebsitefix.com/services/wordpress-seo-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress SEO Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress SEO Services",
    description:
      "Expert WordPress SEO services to grow traffic and improve rankings.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordPressSeoServices;

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
