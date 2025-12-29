"use client";
import React, { useEffect, useRef } from "react";
import home_lady_image from "../../assets/images/home-lady-image.png";
import Image from "next/image";
import tech_group from "../../assets/images/tech-group.svg";
import {
  CountUpOnScroll,
  MaskedTextReveal,
  ScrollTextColorChange,
  SectionsTopSmallHeading,
} from "..";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export const HomeToolsAndTechnologies = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(imgRef.current, {
        willChange: "transform",
        transformOrigin: "center center",
        transformPerspective: 800,
      });

      gsap.to(imgRef.current, {
        yPercent: 20,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, imgRef); // <== Scoped to this component only

    return () => ctx.revert(); // cleanup safely
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="p-6 md:p-12 lg:p-20">
        <SectionsTopSmallHeading displayText="Tools" />

        {/* Headings */}
        <div className="flex flex-wrap  items-start md:items-center font-light mt-5 gap-2 sm:gap-4 md:gap-5 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[64px]">
          <MaskedTextReveal text="Tools & Technologies" className="italic " />
          <MaskedTextReveal text="We Use" className="font-medium " />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-3 md:gap-6 mt-6">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <Image src={tech_group} alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support." className="w-full h-auto" />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 font-visby mt-4 lg:mt-0">
            <MaskedTextReveal
              text="Tools Powering Your Website Performance"
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-black/60 font-semibold "
            />

            <ScrollTextColorChange
              startColor="gray"
              endColor="black"
              text="We ensure your WordPress website runs smoothly, securely, and efficiently, so you can focus on growing your business without technical worries. Our team provides comprehensive maintenance services, including regular updates of WordPress core, themes, and plugins, proactive security monitoring to prevent hacks, performance optimization for faster loading, and routine backups to protect your valuable data. We also offer troubleshooting, bug fixes, and expert support to resolve issues quickly, keeping your site reliable and user-friendly. By combining technical expertise with proactive strategies, we help businesses maintain a strong online presence, enhance visitor experience, and achieve long-term website stability and success."
              className="text-base md:text-lg mt-4 space-y-1"
            />
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          ref={imgRef}
          src={home_lady_image}
          alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support."
          className="absolute inset-0 w-full h-full object-cover -z-30"
        />

        {/* Content Overlay */}
        <div className="absolute text-[20px] sm:text-[28px] md:text-[36px] lg:text-[50px] bottom-8 md:top-1/2 md:-translate-y-1/2 font-bold font-visby text-white leading-[1.6] z-30 right-8">
          <MaskedTextReveal
            text="Why Clients Trust"
            className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)] max-md:hidden"
          />

          <MaskedTextReveal
            text="WPWebsiteFix for"
            className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)] leading-9 max-md:hidden"
          />

          <MaskedTextReveal
            text="  Expert WordPress Solutions"
            className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)]  max-md:hidden"
          />

          <div className="flex gap-10 mt-5 max-md:hidden">
            {[
              {
                num: "9500",
                subNumber: "+",
                label: "Issues Resolved",
                icon: <IoCheckmarkDoneCircleOutline />,
              },
              {
                num: "20",
                subNumber: "+",
                label: "WordPress Experts",
                icon: <RiTeamLine />,
              },
              {
                num: "24",
                subNumber: "/7",
                label: "Expert Support",
                icon: <MdOutlineSupportAgent />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/60 rounded-xl pb-4 backdrop-blur-xl bg-black/15 p-3 min-w-48"
              >
                <div className="w-9 h-9 text-4xl rounded-full mt-5 ">
                  {item.icon}
                </div>

                {/* <p className="text-[36px] font-bold mt-5 leading-12">
                  {item.num}
                </p> */}

                <div className="flex  text-[36px] font-bold mt-5 leading-12">
                  <CountUpOnScroll target={item.num} />
                  <p>{item.subNumber}</p>
                </div>

                <p className="text-sm font-light leading-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeToolsAndTechnologies



// <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] overflow-hidden">
//       {/* Parallax Background */}
//       <Image
//         ref={imgRef}
//         src={home_lady_image}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover -z-30"
//         priority
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-20 z-30">
//         <div className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[50px] font-bold leading-snug lg:leading-[1.6] text-white break-words">
//           <MaskedTextReveal
//             text="Why Clients Trust"
//             className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)]"
//           />
//           <MaskedTextReveal
//             text="WPWebsiteFix for"
//             className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)] leading-snug"
//           />
//           <MaskedTextReveal
//             text="Expert WordPress Solutions"
//             className="[text-shadow:2px_2px_10px_rgba(0,0,0,.5)]"
//           />
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-4 w-full">
//           {[
//             {
//               num: "9500",
//               subNumber: "+",
//               label: "Issues Resolved",
//               icon: <IoCheckmarkDoneCircleOutline size={24} />,
//             },
//             {
//               num: "20",
//               subNumber: "+",
//               label: "WordPress Experts",
//               icon: <RiTeamLine size={24} />,
//             },
//             {
//               num: "24",
//               subNumber: "/7",
//               label: "Expert Support",
//               icon: <MdOutlineSupportAgent size={24} />,
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="border border-white/60 rounded-xl pb-3 backdrop-blur-xl bg-black/20 p-2 min-w-[100px] sm:min-w-[120px] flex flex-col items-start flex-1"
//             >
//               <div className="mb-1">{item.icon}</div>
//               <div className="flex text-[16px] sm:text-[20px] md:text-[28px] font-bold">
//                 <CountUpOnScroll target={item.num} />
//                 <span className="ml-1">{item.subNumber}</span>
//               </div>
//               <p className="text-xs sm:text-sm font-light mt-1 break-words">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>