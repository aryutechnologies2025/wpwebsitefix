"use client";
import React, { useEffect, useRef } from "react";
import { Header } from "../layout";
import { MaskedTextReveal, ScrollTextColorChange } from "../../components";
import gsap from "gsap";

import Image, { StaticImageData } from "next/image";

interface ImageType {
  src: StaticImageData; // <-- updated from string to StaticImageData
  alt: string;
}


interface HeroData {
  headlineLines: string[];
  description: string;
  images: ImageType[];
}

interface ServicesHeroSectionProps {
  heroData: HeroData;
}

 const ServicesHeroSection = ({ heroData }: ServicesHeroSectionProps) => {

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate content for seamless looping
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 40, // adjust speed (larger = slower)
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="">
      <div className="w-full md:w-[90vw] mx-auto mt-5">
        <Header />
      </div>

      <div className="p-6 md:p-12 lg:p-20 font-poppins mt-10 ">
        <div className="">
          {heroData.headlineLines.map((line, index) => (
            <MaskedTextReveal
              key={index}
              text={line}
              className={`text-[36px] sm:text-[48px] md:text-[64px]  ${
                index === 0 ? "italic font-light leading-10 sm:leading-20" : "font-medium leading-10 sm:leading-normal"
              }`}
            />
          ))}
        </div>

        <ScrollTextColorChange
          text={heroData.description}
          className="text-[#656565] text-lg font-medium font-visby mt-8 leading-8 md:w-[80%]"
        />
      </div>

      <div className="relative overflow-hidden w-full md:py-10">
        <div ref={marqueeRef} className="flex gap-5 w-max">
          {heroData.images.map((img, idx) => (
            // <Image
            //   key={idx}
            //   src={img.src}
            //   alt={img.alt}
            //   width={400}
            //   height={60}
            //   className="rounded-xl object-cover"
            // />
               <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              width={400}
              height={60}
              className="rounded-xl object-cover w-[250px] sm:w-[300px] md:w-[400px] h-[266px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesHeroSection