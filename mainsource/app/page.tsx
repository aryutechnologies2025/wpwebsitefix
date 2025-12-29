import { Metadata } from "next";
import dynamic from "next/dynamic";

const Home_Hero = dynamic(() => import("./components/home/Home_Hero"));
const Home_Portfolio_Section = dynamic(
  () => import("./components/home/Home_Portfolio_Section")
);
const Home_Our_Services = dynamic(
  () => import("./components/home/Home_Our_Services")
);
const HomeToolsAndTechnologies = dynamic(
  () => import("./components/home/HomeToolsAndTechnologies")
);
const HomeMaintenanceProcessWork = dynamic(
  () => import("./components/home/HomeMaintenanceProcessWork")
);
const Home_Testimonial = dynamic(
  () => import("./components/home/Home_Testimonial")
);
const Home_CTA = dynamic(() => import("./components/home/Home_CTA"));

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),

  title: "WP Website Fix – WordPress Maintenance & Development Experts",
  description:
    "WP Website Fix is a professional WordPress agency offering maintenance, security, speed optimization, bug fixing, migrations, custom development, WooCommerce solutions, and ongoing website support.",

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
    canonical: "https://wpwebsitefix.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WP Website Fix – WordPress Maintenance & Development Experts",
    description:
      "WP Website Fix provides complete WordPress maintenance and development services including security, speed optimization, bug fixing, migrations, and custom solutions.",
    url: "https://wpwebsitefix.com",
    siteName: "WP Website Fix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WP Website Fix – WordPress Experts",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WP Website Fix – WordPress Maintenance & Development Experts",
    description:
      "Professional WordPress maintenance and development services including security, speed optimization, bug fixing, and custom solutions.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};



export default function Home() {
  return (
    <main>
      <Home_Hero />
      {/* <Home_About_Section /> */}
      <Home_Portfolio_Section />
      <Home_Our_Services />
      <HomeToolsAndTechnologies />
      <HomeMaintenanceProcessWork />
      <Home_Testimonial />
      <Home_CTA />
    </main>
  );
}
