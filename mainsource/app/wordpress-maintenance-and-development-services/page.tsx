import React from "react";
import ServicePageHero from "../components/sections/ServicePageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Maintenance and Development Services",
  description:
    "Professional WordPress maintenance and development services including secure updates, backups, performance optimization, bug fixes, and custom website enhancements.",

  alternates: {
    canonical:
      "https://wpwebsitefix.com/wordpress-maintenance-and-development-services",
  },

  keywords: [
    "wordpress management services",
    "wordpress maintenance services",
    "wordpress development services",
    "wordpress web services",
    "wordpress services website",
  ],

  robots: {
    index: true,
    follow: true,
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
