import { WordpressMigrationService } from "../../data";

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
  title: "WordPress Migration Services | WPWebsiteFix",

  description:
    "Move your website safely with our WordPress migration services. Zero downtime, no data loss, and SEO-preserving migrations for CMS, domains, and WooCommerce.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-migration-services/",
  },

  keywords: [
    "WordPress migration services",
    "WordPress website migration",
    "WordPress site transfer",
    "WooCommerce migration",
    "domain and hosting migration WordPress",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Migration Services",
    description:
      "Secure and SEO-safe WordPress migration services with zero downtime and no data loss.",
    url: "https://wpwebsitefix.com/services/wordpress-migration-services/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Migration Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Migration Services",
    description:
      "Professional WordPress migration services with zero downtime and SEO protection.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

export default function Page() {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressMigrationService;

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
