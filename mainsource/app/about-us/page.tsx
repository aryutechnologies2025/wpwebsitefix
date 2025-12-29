import dynamic from "next/dynamic";
import type { Metadata } from "next";

const AboutHero = dynamic(() => import("../components/about/AboutHero"));
const AboutOurValue = dynamic(
  () => import("../components/about/AboutOurValue")
);
const AboutMeetOurTeam = dynamic(
  () => import("../components/about/AboutMeetOurTeam")
);
const CtaSection = dynamic(() => import("../components/sections/CtaSection"));


export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),

  title: "About WPWebsiteFix – WordPress Maintenance & Development Experts",
  description:
    "Learn about WPWebsiteFix, a professional WordPress agency offering 12+ services including maintenance, security, speed optimization, bug fixing, migrations, plugin & theme development, WooCommerce solutions, and SEO services.",

  keywords: [
    "About WPWebsiteFix",
    "WordPress maintenance company",
    "WordPress development services",
    "WordPress bug fixing",
    "WordPress migration services",
    "WordPress security services",
    "WordPress speed optimization",
    "WordPress plugin development",
    "WordPress theme development",
    "WooCommerce development",
    "WordPress SEO services",
    "Headless WordPress development"
  ],

  alternates: {
    canonical: "https://wpwebsitefix.com/about-us/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About WPWebsiteFix – WordPress Maintenance & Development Company",
    description:
      "WPWebsiteFix provides 12+ professional WordPress services including maintenance, security, speed optimization, development, WooCommerce, SEO, and custom solutions.",
    url: "https://wpwebsitefix.com/about-us/",
    siteName: "WPWebsiteFix",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About WPWebsiteFix – WordPress Experts",
    description:
      "Discover WPWebsiteFix, a trusted WordPress agency offering maintenance, development, security, speed optimization, and custom WordPress solutions.",
  },
};


export default function Page() {
  return (
    <div>
      <AboutHero />
      <AboutOurValue />
      <AboutMeetOurTeam />
      <CtaSection />
    </div>
  );
}
