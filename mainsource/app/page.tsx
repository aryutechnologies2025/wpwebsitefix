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

  title: "WP Website Fix",
  description:
    "WP Website Fix delivers end-to-end WordPress website maintenance with strong security, fast loading speeds, regular updates, and custom solutions.",

  alternates: {
    canonical: "https://wpwebsitefix.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "WP Website Fix",
    description:
      "WP Website Fix delivers end-to-end WordPress website maintenance with strong security, fast loading speeds, regular updates, and custom solutions.",
    url: "https://wpwebsitefix.com",
    siteName: "WP Website Fix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "WP Website Fix",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WP Website Fix",
    description:
      "WP Website Fix delivers end-to-end WordPress website maintenance.",
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
