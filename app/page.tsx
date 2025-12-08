import dynamic from "next/dynamic";

const Home_Hero = dynamic(() => import("./components/home/Home_Hero"));
const Home_About_Section = dynamic(
  () => import("./components/home/Home_About_Section")
);
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

export default function Home() {
  return (
    <main>
      <Home_Hero />
      <Home_About_Section />
      <Home_Portfolio_Section />
      <Home_Our_Services />
      <HomeToolsAndTechnologies />
      <HomeMaintenanceProcessWork />
      <Home_Testimonial />
      <Home_CTA />
    </main>
  );
}
