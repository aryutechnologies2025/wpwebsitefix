import {  WordpressSecurityService } from "../../data";

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
  title: "WordPress Security Service | WPWebsiteFix",

  description:
    "Protect your WordPress website from hackers, malware, and vulnerabilities with our expert WordPress security service. Firewall setup, malware removal, and ongoing protection.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/services/wordpress-security-service/",
  },

  keywords: [
    "WordPress security service",
    "WordPress malware removal",
    "WordPress website security",
    "WordPress firewall protection",
    "secure WordPress website",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Security Service",
    description:
      "Expert WordPress security service to protect your website from malware, hacks, and vulnerabilities.",
    url: "https://wpwebsitefix.com/services/wordpress-security-service/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Security Service",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Security Service",
    description:
      "Protect your WordPress site with professional security monitoring and malware protection.",
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
  } = WordpressSecurityService;

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
