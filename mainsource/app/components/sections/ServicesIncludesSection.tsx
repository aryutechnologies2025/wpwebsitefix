

/* eslint-disable */

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { MaskedTextReveal, SectionsTopSmallHeading } from "..";
import gsap from "gsap";

interface ServiceItem {
  title: string;
  desc: string;
  image: any;
}

interface IncludesData {
  headlineLines: string[];
  subHeadin?: string;
  dropdown: ServiceItem[];
  altText:string
}

interface ServicesIncludesSectionProps {
  includesData: IncludesData;
}

const ServicesIncludesSection: React.FC<ServicesIncludesSectionProps> = ({ includesData }) => {
  const services = includesData.dropdown;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [activeImage, setActiveImage] = useState(services[0].image);
  const [prevImage, setPrevImage] = useState(services[0].image);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 1024;

  // Smooth image crossfade
  useEffect(() => {
    if (hoveredIndex === null) return;

    const newImage = services[hoveredIndex].image;
    setPrevImage(activeImage);
    setActiveImage(newImage);

    if (topRef.current && bottomRef.current) {
      gsap.set(topRef.current, { opacity: 0, scale: 1.03 });
      gsap.set(bottomRef.current, { opacity: 1 });
      gsap.to(bottomRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" });
      gsap.to(topRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [hoveredIndex]);

  // Dropdown animation
  useEffect(() => {
    descRefs.current.forEach((el, i) => {
      if (!el) return;

      if (hoveredIndex === i) {
        gsap.to(el, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power1.inOut" });
      }
    });
  }, [hoveredIndex]);

  // Arrow rotation
  useEffect(() => {
    arrowRefs.current.forEach((arrow, i) => {
      if (!arrow) return;
      gsap.to(arrow, {
        rotate: hoveredIndex === i ? 180 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  }, [hoveredIndex]);

  return (
    <section className="p-6 md:p-12 lg:p-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-28">

        {/* IMAGE SECTION */}
        <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[500px] 
                        h-[350px] sm:h-[450px] md:h-[550px] 
                        mx-auto lg:mx-0 rounded-2xl overflow-hidden">
          <div ref={bottomRef} className="absolute inset-0">
            <Image src={prevImage} alt={includesData.altText} fill className="object-cover" />
          </div>
          <div ref={topRef} className="absolute inset-0">
            <Image src={activeImage} alt={includesData.altText} fill className="object-cover" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1">
          <SectionsTopSmallHeading displayText="Includes" />

          {includesData.headlineLines.map((line, i) => (
            <MaskedTextReveal
              key={i}
              text={line}
              className={`text-[26px] sm:text-[30px] md:text-[34px] 
                ${i === 0 ? "italic font-light mt-3" : "font-medium leading-8 md:leading-9"}`}
            />
          ))}

          {includesData.subHeadin && (
            <MaskedTextReveal
              text={includesData.subHeadin}
              className="text-[#4C4848] font-visby text-base sm:text-lg mt-3"
            />
          )}

          {/* SERVICES LIST */}
          <div className="flex flex-col group gap-6 sm:gap-8 md:gap-10 font-visby mt-6 sm:mt-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="group transition-all duration-300 cursor-pointer"
                onMouseEnter={() => {
                  if (isDesktop()) setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  if (isDesktop()) setHoveredIndex(null);
                }}
                onClick={() => {
                  if (!isDesktop()) {
                    setHoveredIndex((prev) => (prev === index ? null : index));
                  }
                }}
              >
                {/* HEADER */}
                <div className="flex justify-between gap-1 items-center">
                  <div className="flex gap-6 items-center">
                    <p className="font-medium text-[#868484]">0{index + 1}</p>

                    <p
                      className={ ` font-bold text-xl sm:text-2xl transition-colors duration-300
                        ${hoveredIndex === index ? "text-[#1B1B1B]" : "text-[#807F7F]"}`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div
                    ref={(el) => {
                      arrowRefs.current[index] = el;
                    }}
                    className="transition-transform duration-300"
                  >
                    <LuArrowUpRight
                      className={`text-2xl sm:text-3xl
                        ${hoveredIndex === index ? "text-[#1B1B1B]" : "text-[#807F7F]"}`}
                    />
                  </div>
                </div>

                {/* DROPDOWN */}
                <div
                  ref={(el) => {
                    descRefs.current[index] = el;
                  }}
                  className="overflow-hidden opacity-0 h-0"
                >
                  <p className="text-[#555] text-[14px] sm:text-[15px] leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIncludesSection;
