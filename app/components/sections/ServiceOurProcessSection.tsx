"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskedTextReveal, SectionsTopSmallHeading } from "../../components";

gsap.registerPlugin(ScrollTrigger);

interface ProcessItem {
  id: number;
  title1: string;
  title2: string;
  desc: string;
  icon: StaticImageData;
  images: StaticImageData[];
  altText: string;
}

interface ServiceOurProcessSectionProps {
  processData: ProcessItem[];
}

const ServiceOurProcessSection: React.FC<ServiceOurProcessSectionProps> = ({
  processData,
}) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        const icon = card.querySelector(".process-icon") as HTMLElement | null;
        const hoverBlocks = card.querySelector(
          ".hover-blocks"
        ) as HTMLElement | null;
        const imageContainers = hoverBlocks
          ? Array.from(hoverBlocks.querySelectorAll(".hover-img"))
          : [];

        const fromDirection = i % 2 === 0 ? -60 : 60;

        // === MOBILE MODE (NO HOVER ANIMATION) ===
        if (isMobile) {
          gsap.set(hoverBlocks, { autoAlpha: 1 }); // show images
          gsap.set(icon, { autoAlpha: 0 }); // hide small icon
          gsap.set(card, { background: "linear-gradient(#FFAC7C, #FF5D00)" });

          // ⭐ NEW: Make text white on mobile
          gsap.set(card.querySelectorAll(".process-text"), {
            color: "#ffffff",
          });

          return; // stop desktop animation logic
        }

        // === DESKTOP MODE (normal hover) ===
        gsap.set([card, icon, hoverBlocks, ...imageContainers], {
          willChange: "transform, opacity",
          transform: "translate3d(0,0,0)",
        });

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power2.out" },
        });

        tl.to(card, {
          background: "linear-gradient(#FFAC7C, #FF5D00 )",
          duration: 0.5,
        })
          .to(icon, { y: -16, autoAlpha: 0, duration: 0.25 }, 0)
          .to(hoverBlocks, { autoAlpha: 1, duration: 0.3 }, 0.05)
          .fromTo(
            imageContainers,
            { yPercent: fromDirection, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.08,
            },
            0.1
          );

        const enterHandler = () => tl.timeScale(1).play();
        const leaveHandler = () => tl.timeScale(2).reverse();

        card.addEventListener("mouseenter", enterHandler);
        card.addEventListener("mouseleave", leaveHandler);

        return () => {
          card.removeEventListener("mouseenter", enterHandler);
          card.removeEventListener("mouseleave", leaveHandler);
        };
      });
    });

    return () => ctx.revert();
  }, [processData]);

  return (
    <section className="p-6 md:p-12 lg:p-20 bg-[#F6F6F6] overflow-hidden">
      <SectionsTopSmallHeading displayText="Process" containerBg="white" />

      <div className="flex gap-2 mt-3">
        <MaskedTextReveal
          text="Our"
          className="text-4xl md:text-[54px] italic font-thin"
        />
        <MaskedTextReveal
          text="Process"
          className="text-4xl md:text-[54px] font-medium"
        />
      </div>

      {/* RESPONSIVE HORIZONTAL SCROLL */}
      <div
        className="flex overflow-x-auto gap-6 mt-12 pb-4 
                   scrollbar-hide snap-x snap-mandatory"
      >
        {processData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="
              relative shrink-0 group flex flex-col justify-end bg-white 
              rounded-tl-xl rounded-br-xl p-6 sm:p-8 
              w-[260px] sm:w-72 md:w-78 
              h-[420px] sm:h-[480px] md:h-[520px] 
              overflow-hidden cursor-pointer shadow-sm
              transition-transform duration-300 hover:scale-[1.02]
              will-change-transform snap-center
            "
          >
            {/* === Small Top Icon === */}
            <div className="absolute top-4 left-10 z-20 process-icon">
              <Image
                src={item.icon}
                alt={item.altText}
                width={40}
                height={40}
                className="select-none pointer-events-none"
              />
            </div>

            {/* === Hover Image Blocks === */}
            <div className="absolute top-0 left-0 w-full h-full z-10 hover-blocks opacity-0 flex items-start justify-center">
              <div
                className="
                  h-32 sm:h-36 md:h-40 
                  m-4 sm:m-6 md:m-8 
                  flex gap-3 sm:gap-5 items-end w-full
                "
              >
                {item.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`
                      rounded-tl-xl rounded-br-xl overflow-hidden hover-img 
                      ${
                        idx === 1
                          ? "h-20 sm:h-24 -mb-1 sm:-mb-2 w-1/2"
                          : "h-32 sm:h-40 w-1/2"
                      }
                    `}
                  >
                    <Image
                      src={img}
                      alt={item.altText}
                      className="object-cover w-full h-full scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* === Text Content === */}
            <div className="relative z-30">
              <MaskedTextReveal
                text={item.title1}
                className="text-xl sm:text-2xl font-medium tracking-tighter group-hover:text-white transition-all duration-500 process-text "
              />

              <MaskedTextReveal
                text={item.title2}
                className="text-xl sm:text-2xl font-medium tracking-tighter group-hover:text-white transition-all duration-500 process-text "
              />

              <MaskedTextReveal
                text={item.desc}
                className="text-base sm:text-lg font-visby mt-3 group-hover:text-white transition-all duration-500 process-text "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOurProcessSection;
