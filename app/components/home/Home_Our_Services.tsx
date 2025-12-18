"use client";
import React, { useEffect, useRef } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import home_our_service_image1 from "../../assets/images/home-our-service-image1.png";
import home_our_service_image2 from "../../assets/images/home-our-service-image2.png";
import home_our_service_image3 from "../../assets/images/home-our-service-image3.png";
import home_our_service_image4 from "../../assets/images/home-our-service-image4.png";
import home_our_service_image5 from "../../assets/images/home-our-service-image5.png";
import home_our_service_image6 from "../../assets/images/home-our-service-image6.png";
import Earth_sphere_line from "../../assets/images/Earth-sphere-line.svg";

import {
  HoverTextGoTopButton,
  MaskedTextReveal,
  SectionsTopSmallHeading,
} from "../../components";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Security",
    image: home_our_service_image1,
    hoverText:
      "Keep your website safe with real-time protection, malware removal, and strong security hardening.",
  },
  {
    title: "Speed Optimization",
    image: home_our_service_image2,
    hoverText:
      "Boost loading speed with advanced caching, code cleanup, and performance tuning.",
  },
  {
    title: "Bug Fixing",
    image: home_our_service_image3,
    hoverText:
      "Fix errors, broken features, and technical issues to keep your site running smoothly.",
  },
  {
    title: "Web Design & Development",
    image: home_our_service_image4,
    hoverText:
      "Create modern, responsive WordPress designs with clean layouts and seamless functionality.",
  },
  {
    title: "E-commerce Development",
    image: home_our_service_image5,
    hoverText:
      "Build powerful WooCommerce stores with smooth checkout, custom features, and optimized product flow.",
  },
  {
    title: "SEO",
    image: home_our_service_image6,
    hoverText:
      "Improve search rankings with on-page SEO, technical optimization, and better visibility.",
  },
];

const Home_Our_Services = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (!img) return;

      gsap.to(img, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });
  }, []);

  return (
    <section className="bg-[#030406] pt-6 md:pt-12 lg:pt-20 text-white ">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-0 ">
        {/* Left Section */}
        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <div className="flex flex-col gap-5 md:gap-8 ps-6 md:ps-12 lg:ps-20">
            <SectionsTopSmallHeading
              displayText="Services"
              containerBg="#262626"
              displayTextColor="white"
            />

            <div className="mt-3 md:mt-0">
              <MaskedTextReveal
                text="Our"
                className="text-[48px] md:text-[56px] lg:text-[64px] leading-10 md:leading-none italic font-light"
              />
              <MaskedTextReveal
                text="Services"
                className="text-[48px] md:text-[56px] lg:text-[64px] leading-10 md:leading-normal font-light"
              />
            </div>

            <HoverTextGoTopButton
              topText="Explore Services"
              bottomText="Explore Services"
              href="/wordpress-maintenance-and-development-services"
              bgColor="#ffffff"
              textColor="#000000"
              borderColor="#474747"
              icon={<BsArrowRightCircleFill size={35} />}
              className="md:font-medium mt-3 md:mt-0 ps-3 md:ps-5 pe-2 py-1 md:py-2.5 sm:ps-6 w-fit"
            />
          </div>

          <div className="mt-8 w-full max-w-xs max-lg:hidden md:max-w-sm lg:max-w-md">
            <Image
              src={Earth_sphere_line}
              alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support."
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full p-6 md:p-12 lg:pe-20 lg:ps-10 pb-6 md:pb-12 lg:pb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full aspect-square group rounded-3xl overflow-hidden border border-black hover:border-[#FF6107]/20 transition-all duration-500 hover:shadow-2xl shadow-[#FF6107]/20 ease-out"
            >
              {/* Image wrapper */}
              <div
                // ref={(el) => {
                //   imageRefs.current[index] = el;
                // }}
                className="absolute inset-0 z-0 w-full h-full"
              >
                <Image
                  src={service.image}
                  alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support."
                  fill
                  className="object-cover rounded-3xl h-full transition-all duration-700 group-hover:blur-lg"
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <p className="p-5 font-medium md:font-semibold text-2xl text-white">
                  {service.title}
                </p>

                <div
                  className="p-5 text-white font-light translate-y-full opacity-0 
                         group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-700 ease-out"
                >
                  {service.hoverText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_Our_Services;
