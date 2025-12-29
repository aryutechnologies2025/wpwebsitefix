"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskedTextReveal } from "../../components";

import picture1 from "../../assets/images/ContactPicture1.svg";
import picture2 from "../../assets/images/ContactPicture2.svg";
import picture3 from "../../assets/images/ContactPicture3.svg";
import picture4 from "../../assets/images/ContactPicture4.svg";
import picture5 from "../../assets/images/ContactPicture5.svg";
import picture6 from "../../assets/images/ContactPicture6.svg";
import picture7 from "../../assets/images/ContactPicture7.svg";

gsap.registerPlugin(ScrollTrigger);

const ContactSecondSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  // helper to collect refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // main entrance animation — now triggered by the grid div
      gsap.from(imagesRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotate: () => gsap.utils.random(-8, 8),
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current, // 🎯 trigger when image grid hits top
          start: "top 30%",      // start when grid top hits viewport bottom
          end: "top top",           // finish when grid top reaches viewport top
          scrub: 3,
          once: true,               // only run once
        },
      });

      // gentle floating animation (independent of scroll)
      imagesRef.current.forEach((el) => {
        gsap.to(el, {
          y: "+=10",
          rotation: gsap.utils.random(-2, 2),
          duration: gsap.utils.random(2.5, 4),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="font-visby p-6 md:p-12 lg:p-20 max-lg:hidden">
      <MaskedTextReveal
        text="Move Fast with Designs"
        className="  text-[42px] md:text-[52px] lg:text-[72px]  font-bold text-center"
      />
      <MaskedTextReveal
        text="Save time and focus on what matters with our expertly crafted"
        className="text-[#00000066] text-lg text-center"
      />

      {/* ✅ this is the trigger div */}
      <div
        ref={gridRef}
        className="flex flex-wrap justify-center items-center gap-6 px-4 pb-10 bg-white"
      >
        <div
          ref={addToRefs}
          className="relative bg-yellow-100 rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
        >
          <Image
            src={picture7}
            alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Left side */}
        <div className="flex flex-col gap-6">
          <div
            ref={addToRefs}
            className="bg-green-100 relative rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={picture1}
              alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div
            ref={addToRefs}
            className="bg-green-100 relative rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={picture2}
              alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Center image */}
        <div
          ref={addToRefs}
          className="bg-blue-100 relative rounded-3xl p-2 w-52 h-72 md:w-72 md:h-126 flex justify-center items-center overflow-hidden"
        >
          <Image
            src={picture3}
            alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          <div
            ref={addToRefs}
            className="bg-green-100 relative rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={picture4}
              alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div
            ref={addToRefs}
            className="bg-green-100 relative rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={picture5}
              alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        <div
          ref={addToRefs}
          className="relative bg-yellow-100 rounded-3xl p-2 w-36 h-44 md:w-48 md:h-60 flex justify-center items-center overflow-hidden"
        >
          <Image
            src={picture6}
            alt="Get expert WordPress help from WPWebsiteFix for maintenance and website performance improvement."
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSecondSection;
