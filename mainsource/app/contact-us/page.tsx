import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ContactHero = dynamic(() =>
  import("../components/contact/ContactHero")
);

const ContactSecondSection = dynamic(() =>
  import("../components/contact/ContactSecondSection")
);

const CtaSection = dynamic(() =>
  import("../components/sections/CtaSection")
);

// export const metadata = {
//   title: "contact us",
//   description:
//     "Need help with WordPress? Contact WPWebsiteFix for expert maitenance, security, updates, and reliable support to keep your website performing at its best.",
//   keywords: "contact us wordpress",
// };



export const metadata: Metadata = {

  title: "Contact WPWebsiteFix – WordPress Maintenance & Support Experts",
  description:
    "Need help with WordPress? Contact WPWebsiteFix for professional WordPress maintenance, security, speed optimization, updates, and reliable technical support.",

  keywords: [
    "Contact WPWebsiteFix",
    "WordPress support services",
    "WordPress maintenance company",
    "WordPress help",
    "WordPress technical support",
  ],

  alternates: {
    canonical: "https://wpwebsitefix.com/contact-us/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact WPWebsiteFix – WordPress Support Experts",
    description:
      "Get in touch with WPWebsiteFix for expert WordPress maintenance, security, speed optimization, and ongoing support.",
    url: "https://wpwebsitefix.com/contact-us/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact WPWebsiteFix – WordPress Support",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact WPWebsiteFix – WordPress Support Experts",
    description:
      "Need WordPress help? Contact WPWebsiteFix for expert maintenance and reliable technical support.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};


export default function Page() {
  return (
    <div>
      <ContactHero />
      <ContactSecondSection />
      <CtaSection />
    </div>
  );
}
