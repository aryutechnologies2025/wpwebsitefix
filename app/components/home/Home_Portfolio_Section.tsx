"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MaskedTextReveal,
  ScrollTextColorChange,
  SectionsTopSmallHeading,
} from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import bw_earth_sphere from "../../assets/images/b&w-earth-sphere.svg";

gsap.registerPlugin(ScrollTrigger);

const Home_Portfolio_Section = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "+=1000",
        scrub: 3,
      },
    });

    tl.fromTo(
      containerRef.current,
      { scale: 0.1, opacity: 0, y: 80, x: -20 },
      { scale: 1, opacity: 1, y: 0, x: 0, ease: "power1.out" },
      0
    );
  }, []);

  // TRACK CURSOR (Desktop Only)
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return; // disable cursor on mobile/tablet

      const { clientX, clientY, movementX, movementY } = e;
      setCursorPos({ x: clientX, y: clientY });

      if (cursorRef.current) {
        const speed = Math.sqrt(movementX ** 2 + movementY ** 2);
        const scale = Math.min(1.3, 1 + speed / 60);
        gsap.to(cursorRef.current, {
          scale,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Earth BG */}
      <div className="absolute -z-10 -left-20 top-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] pointer-events-none">
        <Image
          src={bw_earth_sphere}
          alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support."
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Heading Top */}
      <SectionsTopSmallHeading
        displayText="Works"
        dotBg="#FF6107"
        className="mx-auto mt-32 md:mt-40 lg:mt-52"
      />

      <div
        ref={sectionRef}
        className="font-light text-[36px] md:text-[52px] lg:text-[64px] text-center flex items-center justify-center sm:gap-2 flex-wrap"
      >
        <MaskedTextReveal
          text="Explore"
          className="italic p-2 leading-10 sm:leading-none"
        />
        <MaskedTextReveal
          text="Our Works"
          className="font-medium leading-10 sm:leading-normal"
        />
      </div>

      {/* VIDEO SECTION */}
      <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-screen z-30 overflow-hidden mt-10 md:mt-0">
        <div
          ref={containerRef}
          onMouseEnter={() => window.innerWidth >= 1024 && setHovered(true)}
          onMouseLeave={() => window.innerWidth >= 1024 && setHovered(false)}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center 
          rounded-xl md:rounded-3xl overflow-hidden opacity-0 scale-50 group"
          style={{ cursor: "none" }}
        >
          <video
            className="object-cover w-full h-full rounded-xl md:rounded-3xl"
            src="./videos/FinalBiok.mp4"
            autoPlay
            loop
            muted
          />

          <div className="absolute bg-black/30 w-full h-full" />

          {/* HOVER TEXT (Responsive) */}
          <div
            className={`absolute flex flex-col justify-end p-6 md:p-12 lg:p-16 gap-6 lg:gap-8 h-full w-full text-white transition-all duration-500 ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 lg:translate-y-10"
            }`}
          >
            <p className="font-medium text-3xl md:text-4xl lg:text-5xl">
              Biokosmetik
            </p>

            <div className="flex flex-col lg:flex-row justify-between gap-6 ">
              <p className="w-full lg:w-1/3 text-sm md:text-base">
                A fresh, modern WordPress makeover that brings clean beauty to
                life with smooth performance and elegant design.
              </p>

              <div className="flex flex-wrap gap-2">
                <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
                  E-commerce Development
                </p>
                <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
                  Branding & Product Presentation
                </p>
                <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
                  Website Optimization
                </p>
              </div>
            </div>
          </div>

          {/* CUSTOM CURSOR (DESKTOP ONLY) */}
          {hovered && (
            <div
              ref={cursorRef}
              className="fixed z-50 pointer-events-none transition-transform duration-200 hidden lg:block"
              style={{
                top: cursorPos.y - 40,
                left: cursorPos.x - 40,
              }}
            >
              <div className="relative flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <BsArrowUpRight className="text-white text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Headings */}

      <div className="p-6 md:p-12 lg:p-20">
        <MaskedTextReveal
          text="One Platform for All Your"
          className="text-[32px] md:text-[48px] lg:text-[56px] leading-10 sm:leading-none italic text-center "
        />
        <MaskedTextReveal
          text="WordPress Projects"
          className="text-[32px] md:text-[48px] lg:text-[56px] leading-10 sm:leading-normal font-medium text-center"
        />

        <ScrollTextColorChange
          className="visby mt-4 text-center  md:w-[70%] lg:w-[60%] mx-auto"
          text="We manage, maintain, and optimize WordPress websites for fast, secure,
          scalable, and fully managed WordPress solutions for every project."
        />
      </div>
    </section>
  );
};

export default Home_Portfolio_Section;
