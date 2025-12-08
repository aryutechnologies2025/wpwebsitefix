// "use client";
// import React, { useEffect, useRef } from "react";
// import { HoverTextGoTopButton, MaskedTextReveal } from "../../components";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const DarkThemeCtaSection = () => {
//   const gradientRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const gradientEl = gradientRef.current;
//     const sectionEl = sectionRef.current;

//     if (!gradientEl || !sectionEl) return;

//     // initial hidden state (below)
//     gsap.set(gradientEl, {
//       opacity: 0,
//       y: 150, // starts low offscreen
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionEl,
//         start: "top 80%", // when section enters
//         end: "bottom 60%",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // cinematic fade & rise
//     tl.to(gradientEl, {
//       opacity: 1,
//       y: 0,
//       duration: 3,
//       ease: "power3.out",
//     });

//     // continuous subtle floating loop
//     tl.to(
//       gradientEl,
//       {
//         y: -100,
//         duration: 5,
//         yoyo: true,
//         repeat: -1,
//         ease: "sine.inOut",
//       },
//       "-=1.5" // overlap a bit for smooth entry
//     );

//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="p-20 relative overflow-hidden">
//       <div className="relative font-visby text-white rounded-3xl p-14 flex flex-col items-center justify-center overflow-hidden bg-black">
//         {/* Animated Gradient Layer */}
//         <div
//           ref={gradientRef}
//           className="absolute inset-0 z-0"
//           style={{
//             background:
//               "radial-gradient(ellipse at bottom left, rgba(255,107,0,0.9) 0%, rgba(0,0,0,1) 70%)",
//             filter: "blur(30px)",
//           }}
//         />

//         {/* Text & Button */}
//         <div className="relative z-10 text-center">
//           <MaskedTextReveal
//             text="Start Building Smarter"
//             className="text-[55px] font-bold"
//           />
//           <MaskedTextReveal
//             text="If you have anything in mind just contact us with our expert."
//             className="text-[22px] mt-2"
//           />

//           <HoverTextGoTopButton
//             topText="Book Your Free Consultation Now"
//             bottomText="Contact Us"
//             textColor="white"
//             bgColor="#FF6B00"
//             className="w-fit px-9 py-3 font-semibold mt-5 "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DarkThemeCtaSection;



"use client";
import React, { useEffect, useRef } from "react";
import { HoverTextGoTopButton, MaskedTextReveal } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DarkThemeCtaSection = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const gradientEl = gradientRef.current;
    const sectionEl = sectionRef.current;

    if (!gradientEl || !sectionEl) return;

    // GSAP initial hidden state
    gsap.set(gradientEl, {
      opacity: 0,
      y: 120,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Fade + rise animation
    tl.to(gradientEl, {
      opacity: 1,
      y: 0,
      duration: 2.2,
      ease: "power3.out",
    });

    // Subtle infinite floating
    tl.to(
      gradientEl,
      {
        y: -80,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      "-=1.2"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-6 md:p-12 lg:p-20 relative overflow-hidden"
    >
      <div className="relative font-visby text-white rounded-3xl p-6 md:p-14 flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Animated Gradient Layer */}
        <div
          ref={gradientRef}
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(255,107,0,0.95) 0%, rgba(0,0,0,1) 75%)",
            filter: "blur(35px)",
          }}
        />

        {/* Foreground Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <MaskedTextReveal
            text="Start Building Smarter"
            className="text-2xl sm:text-[34px] md:text-[55px] font-bold leading-tight"
          />

          <MaskedTextReveal
            text="If you have anything in mind just contact us with our expert."
            className="text-[18px] md:text-[22px] mt-3 opacity-90"
          />

          <HoverTextGoTopButton
            topText="Book Your Free Consultation Now"
            bottomText="Contact Us"
            textColor="white"
            bgColor="#FF6B00"
            className="w-fit px-5 sm:px-9 py-3 font-medium text-sm sm:text-base sm:font-semibold mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default DarkThemeCtaSection;
