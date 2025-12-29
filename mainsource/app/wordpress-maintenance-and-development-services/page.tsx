import React from "react";
import ServicePageHero from "../components/sections/ServicePageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Maintenance & Development Services | WPWebsiteFix",
  description:
    "Explore all WordPress services offered by WPWebsiteFix, including website maintenance, security, speed optimization, bug fixing, backups, migrations, custom development, WooCommerce solutions, and ongoing technical support.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/wordpress-maintenance-and-development-services/",
  },

  keywords: [
    "WordPress maintenance services",
    "WordPress development services",
    "WordPress website management",
    "WordPress security services",
    "WordPress speed optimization",
    "WordPress bug fixing",
    "WordPress migration services",
    "WooCommerce development services",
    "WordPress support services",
    "WPWebsiteFix services",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WordPress Maintenance & Development Services | WPWebsiteFix",
    description:
      "WPWebsiteFix provides complete WordPress maintenance and development services including security, performance optimization, bug fixes, migrations, and custom solutions.",
            url: "https://wpwebsitefix.com/og-image.png",

    siteName: "WPWebsiteFix",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Maintenance & Development Services | WPWebsiteFix",
    description:
      "Discover all WordPress services from WPWebsiteFix, including maintenance, security, speed optimization, development, and expert support.",
          images: ["https://wpwebsitefix.com/og-image.png"],

  },
};

const page = () => {
  return (
    <div>
      <ServicePageHero />
    </div>
  );
};

export default page;
