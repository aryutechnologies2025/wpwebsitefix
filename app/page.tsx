'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

  // const[loading,setLoading]=useState(true)


  // useEffect(() => {
  //     // GSAP animation for preloader
  //     const timeline = gsap.timeline({
  //       onComplete: () => setLoading(false), // Hide preloader after animation
  //     });
  
  //     timeline
  //       .fromTo(
  //         ".preloader-logo",
  //         {
  //           opacity: 0,
  //           scale: 0.5, // Start smaller
  //         },
  //         {
  //           duration: 0.5, //
  //           opacity: 1,
  //           scale: 2, // Slightly enlarge first
  //           ease: "back.in",
  //         }
  //       )
  //       .to(".preloader-logo", {
  //         duration: 1,
  //         scale: 20, // Expand to a very large size
  //         opacity: 0, // Fade out smoothly
  //         ease: "power4.in",
  //       });
  
  //     // Cleanup timeline when component unmounts
  //     return () => {
  //       timeline.kill();
  //     };
  //   }, []);


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
