"use client";
import React, { useEffect, useRef } from "react";
import { HoverTextGoTopButton, MaskedTextReveal } from "../../components";
import ctaimage1 from "../../assets/images/ctaImage1.jpg";
import ctaimage2 from "../../assets/images/ctaImage2.jpg";
import Image from "next/image";
import { gsap } from "gsap";

 const CtaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = containerRef.current?.querySelectorAll(".floating-img");
    if (!images) return;

    images.forEach((img) => {
      const animateFloat = () => {
        gsap.to(img, {
          x: gsap.utils.random(-50, 50),
          y: gsap.utils.random(-50, 50),
          rotation: gsap.utils.random(-20, 20),
          scale: gsap.utils.random(0.95, 1.05),
          duration: gsap.utils.random(4, 8),
          ease: "sine.inOut",
          onComplete: animateFloat,
        });
      };

      // start with a random delay for each image
      gsap.delayedCall(gsap.utils.random(0, 2), animateFloat);
    });
  }, []);

  return (
    <section className="p-6 md:p-12 lg:p-20 font-visby">
      <div
        ref={containerRef}
        className="bg-linear-to-b from-[#FFAC7C] to-[#FF5D00] relative rounded-4xl text-white p-5 md:p-12 flex flex-col gap-5 md:gap-7 items-center justify-center overflow-hidden"
      >
        <div className="-space-y-3 relative z-30 text-center">
          {/* <p className="text-[65px] font-bold">Want to Chat ? Feel free to</p> */}
          {/* <p className="text-[65px] font-bold">Contact our team</p> */}
          {/* <MaskedTextReveal
            text="Want to Chat ? Feel free to"
            className="text-2xl sm:text-4xl md:text-[65px] font-bold max-md:hidden"
          />
          <MaskedTextReveal
            text="Contact our team"
            className="text-2xl sm:text-4xl md:text-[65px] font-bold mt-3 max-md:hidden"
          /> */}
           <MaskedTextReveal
            text="Want to Chat ? Feel free to Contact our team"
            className="text-2xl sm:text-4xl lg:text-[65px] font-bold md:w-[80%] mx-auto "
          />
        </div>

        <MaskedTextReveal
          text="If you have anything in mind just contact us with our expert."
          className="md:text-xl text-center"
        />

        {/* <p className="text-xl">
          If you have anything in mind just contact us with our expert.
        </p> */}

        <HoverTextGoTopButton
          topText="Let's Get Started"
          bottomText="Contact Us"
          href="/contact-us"
          textColor="#FF6E1B"
          className="px-5 md:px-8 py-2 md:py-3 font-medium"
        />

        {/* Floating images */}
        {/* Floating images */}
        <Image
          src={ctaimage1}
          width={120}
          height={200}
          alt="a"
          className="floating-img absolute rounded-full bottom-5 left-10 z-20 max-md:hidden"
        />

        <Image
          src={ctaimage1}
          width={150}
          height={120}
          alt="a"
          className="floating-img absolute rounded-full bottom-14 right-11 z-20  max-md:hidden"
        />

        {/* Image under the text */}
        {/* <Image
          src={ctaimage2}
          width={130}
          height={130}
          alt="background texture"
          className="floating-img absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-2xl  pointer-events-none"
        /> */}
        {/* Top Center Image */}
        <Image
          src={ctaimage2}
          alt="float"
          className="  
            floating-img absolute rounded-2xl z-10 pointer-events-none
            top-0 left-1/2 -translate-x-1/2
            w-20 h-14
            sm:w-20 sm:h-20
            md:w-32 md:h-24
          "
        />
      </div>
    </section>
  );
};


export default CtaSection
