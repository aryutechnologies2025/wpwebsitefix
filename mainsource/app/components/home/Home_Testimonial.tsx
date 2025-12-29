"use client";
import React, { useEffect, useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

import { MaskedTextReveal, SectionsTopSmallHeading } from "../../components";
import gsap from "gsap";

const reviews = [
  {
    text: "Thanks to the team, our WordPress site is always up-to-date and secure. They handle everything seamlessly, so we can focus on our business without worrying about technical issues.",
    name: "Ravi K.",
    position: "E-commerce Business Owner",
    rating: 5,
  },
  {
    text: "The proactive maintenance and quick support have been a game-changer for us. Our site loads faster, runs smoothly, and we feel confident it’s safe from hacks.",
    name: "Anita S.",
    position: "Digital Marketing Manager",
    rating: 4,
  },
  {
    text: "We’ve tried multiple maintenance services before, but this team stands out. Reliable, professional, and always ready to help—highly recommended!",
    name: "Vikram P.",
    position: "Startup Founder",
    rating: 5,
  },
  {
    text: "Regular backups, plugin updates, and performance optimization—they take care of it all. It’s like having a dedicated WordPress expert on our team.",
    name: "Shalini R.",
    position: "Blogger & Content Creator",
    rating: 3,
  },
];

export const Home_Testimonial = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone cards for seamless loop
    const cards = container.querySelectorAll(".review-card");
    const clones = Array.from(cards).map((c) => c.cloneNode(true));
    container.append(...clones);

    const totalWidth = container.scrollWidth / 2;

    // Smooth infinite scroll animation
    const tl = gsap.timeline({ repeat: -1, ease: "none" });
    tl.to(container, {
      x: -totalWidth,
      duration: 60,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
   
       <section className="relative py-6 md:py-12 lg:py-20 text-white overflow-hidden bg-[#0B0B0B]">
      {/* Background Layers */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-[#0B0B0B] via-[#1D1D1D] to-[#0B0B0B] opacity-90" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%] md:w-[120%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,97,7,0.15)_0%,rgba(0,0,0,0)_70%)]" />
      </div> */}

      <div className="relative z-10 ">
        {/* Heading */}
        <div className="flex justify-center px-6 md:px-12 lg:px-20">
          <SectionsTopSmallHeading
            border={true}
            displayTextColor="white"
            containerBg="transparent"
            displayText="Testimonials"
          />
        </div>

        <MaskedTextReveal
          text="Trusted by 1.9M+ WordPress Users Worldwide Services Confidently"
          className="font-semibold text-center font-visby text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] mt-5 px-6 md:px-12 lg:px-20"
        />

       

        {/* Carousel */}
        <div className="relative overflow-hidden mt-10 sm:mt-12">
          <div
            ref={containerRef}
            className="flex gap-6 sm:gap-8 w-max will-change-transform mb-1"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="
                  review-card 
                  border border-[#858585]/60 
                  bg-[#1b1b1b]/80  
                  backdrop-blur-sm 
                  rounded-2xl 
                  p-5 sm:p-6 
                  flex flex-col 
                  justify-between 
                  gap-6 sm:gap-8 
                  w-[80vw] sm:w-[360px] md:w-[420px] lg:w-[460px] 
                  shrink-0 
                  transition-all 
                  duration-700 
                "
              >
                {/* Rating */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3 items-center">
                    <FaQuoteLeft className="text-[#FF6107] shrink-0 opacity-0" />

                    <div className="flex gap-2 items-center">
                      <div className="flex">
                        {Array(review.rating)
                          .fill("")
                          .map((_, starIndex) => (
                            <IoIosStar
                              key={starIndex}
                              className="text-[#FFC936] text-lg sm:text-xl"
                            />
                          ))}
                      </div>

                      <p className="text-white/60 text-sm sm:text-[15px] font-visby font-medium">
                        {review.rating.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex gap-4 items-start">
                    <FaQuoteLeft className="text-[#FF6107] shrink-0" />

                    <p className="text-base sm:text-lg font-visby leading-relaxed text-white">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                </div>

                {/* Reviewer */}
                <div className="flex gap-4">
                  <FaQuoteLeft className="text-[#FF6107] shrink-0 opacity-0" />

                  <div>
                    <p className="text-[14px] sm:text-[15px] text-white">
                      {review.name}
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-white/60">
                      {review.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edge Gradients */}
          <div className="absolute inset-y-0 left-0 w-3 sm:w-28 bg-linear-to-r from-[#0B0B0B]  to-transparent pointer-events-none " />
          <div className="absolute inset-y-0 right-0 w-3 sm:w-28 bg-linear-to-l from-[#0B0B0B] to-transparent pointer-events-none" />
        </div>
        
      </div>
    </section>
  );
};


export default Home_Testimonial
