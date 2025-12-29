// "use client";
// import React, { useEffect, useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MaskedTextReveal, SectionsTopSmallHeading } from "../../components";
// import ourProcessImage1 from '../../assets/images/ourProcessImage1.jpg'

// gsap.registerPlugin(ScrollTrigger);

// interface ProcessItem {
//   id: number;
//   title1: string;
//   title2: string;
//   desc: string;
//   icon: StaticImageData;

// }

// interface ServiceOurProcessSectionProps {
//   processData: ProcessItem[];
// }

// const ServiceOurProcessSection: React.FC<ServiceOurProcessSectionProps> = ({
//   processData,
// }) => {
//   const cardRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;

//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, i) => {
//         const icon = card.querySelector(".process-icon") as HTMLElement | null;
//         const hoverBlocks = card.querySelector(
//           ".hover-blocks"
//         ) as HTMLElement | null;
//         const imageContainers = hoverBlocks
//           ? Array.from(hoverBlocks.querySelectorAll(".hover-img"))
//           : [];

//         const fromDirection = i % 2 === 0 ? -60 : 60;

//         // === MOBILE MODE (NO HOVER ANIMATION) ===
//         if (isMobile) {
//           gsap.set(hoverBlocks, { autoAlpha: 1 }); // show images
//           gsap.set(icon, { autoAlpha: 0 }); // hide small icon
//           gsap.set(card, { background: "linear-gradient(#FFAC7C, #FF5D00)" });

//           // ⭐ NEW: Make text white on mobile
//           gsap.set(card.querySelectorAll(".process-text"), {
//             color: "#ffffff",
//           });

//           return; // stop desktop animation logic
//         }

//         // === DESKTOP MODE (normal hover) ===
//         gsap.set([card, icon, hoverBlocks, ...imageContainers], {
//           willChange: "transform, opacity",
//           transform: "translate3d(0,0,0)",
//         });

//         const tl = gsap.timeline({
//           paused: true,
//           defaults: { ease: "power2.out" },
//         });

//         tl.to(card, {
//           background: "linear-gradient(#FFAC7C, #FF5D00 )",
//           duration: 0.5,
//         })
//           .to(icon, { y: -16, autoAlpha: 0, duration: 0.25 }, 0)
//           .to(hoverBlocks, { autoAlpha: 1, duration: 0.3 }, 0.05)
//           .fromTo(
//             imageContainers,
//             { yPercent: fromDirection, autoAlpha: 0 },
//             {
//               yPercent: 0,
//               autoAlpha: 1,
//               duration: 0.7,
//               stagger: 0.08,
//             },
//             0.1
//           );

//         const enterHandler = () => tl.timeScale(1).play();
//         const leaveHandler = () => tl.timeScale(2).reverse();

//         card.addEventListener("mouseenter", enterHandler);
//         card.addEventListener("mouseleave", leaveHandler);

//         return () => {
//           card.removeEventListener("mouseenter", enterHandler);
//           card.removeEventListener("mouseleave", leaveHandler);
//         };
//       });
//     });

//     return () => ctx.revert();
//   }, [processData]);

//   return (
//     <section className="p-6 md:p-12 lg:p-20 bg-[#F6F6F6] overflow-hidden">
//       <SectionsTopSmallHeading displayText="Process" containerBg="white" />

//       <div className="flex gap-2 mt-3">
//         <MaskedTextReveal
//           text="Our"
//           className="text-4xl md:text-[54px] italic font-thin"
//         />
//         <MaskedTextReveal
//           text="Process"
//           className="text-4xl md:text-[54px] font-medium"
//         />
//       </div>

//       {/* RESPONSIVE HORIZONTAL SCROLL */}
//       <div
//         className="flex overflow-x-auto gap-6 mt-12 pb-4
//                    scrollbar-hide snap-x snap-mandatory"
//       >
//         {processData.map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => {
//               if (el) cardRefs.current[index] = el;
//             }}
//             className="
//               relative shrink-0 group flex flex-col justify-end bg-white
//               rounded-tl-xl rounded-br-xl p-6 sm:p-8
//               w-[260px] sm:w-72 md:w-78
//               h-[420px] sm:h-[480px] md:h-[520px]
//               overflow-hidden cursor-pointer shadow-sm
//               transition-transform duration-300 hover:scale-[1.02]
//               will-change-transform snap-center
//             "
//           >
//             {/* === Small Top Icon === */}
//             <div className="absolute top-4 left-10 z-20 process-icon">
//               <Image
//                 src={item.icon}
//                 alt="icon"
//                 width={40}
//                 height={40}
//                 className="select-none pointer-events-none"
//               />
//             </div>

//             {/* === Hover Image Blocks === */}
//             <div className="absolute top-0 left-0 w-full h-full z-10 hover-blocks opacity-0 flex items-start justify-center">
//               <div
//                 className="
//                   h-32 sm:h-36 md:h-40
//                   m-4 sm:m-6 md:m-8
//                   flex gap-3 sm:gap-5 items-end w-full
//                 "
//               >
//                 {item.images.map((img, idx) => (
//                   <div
//                     key={idx}
//                     className={`
//                       rounded-tl-xl rounded-br-xl overflow-hidden hover-img
//                       ${
//                         idx === 1
//                           ? "h-20 sm:h-24 -mb-1 sm:-mb-2 w-1/2"
//                           : "h-32 sm:h-40 w-1/2"
//                       }
//                     `}
//                   >
//                     <Image
//                       src={img}
//                       alt={item.altText}
//                       className="object-cover w-full h-full scale-[1.02] transition-transform duration-700"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* === Text Content === */}
//             <div className="relative z-30">
//               <MaskedTextReveal
//                 text={item.title1}
//                 className="text-xl sm:text-2xl font-medium tracking-tighter group-hover:text-white transition-all duration-500 process-text "
//               />

//               <MaskedTextReveal
//                 text={item.title2}
//                 className="text-xl sm:text-2xl font-medium tracking-tighter group-hover:text-white transition-all duration-500 process-text "
//               />

//               <MaskedTextReveal
//                 text={item.desc}
//                 className="text-base sm:text-lg font-visby mt-3 group-hover:text-white transition-all duration-500 process-text "
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceOurProcessSection;

"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskedTextReveal, SectionsTopSmallHeading } from "../../components";

// -----------------------------------------------------
//  ⭐ ALL IMAGES + RANDOM PICKER INSIDE THIS FILE
// -----------------------------------------------------
import img1 from "../../assets/images/ourProcessImage1.jpg";
import img2 from "../../assets/images/ourProcessImage2.jpg";
import img3 from "../../assets/images/ourProcessImage3.jpg";
import img4 from "../../assets/images/ourProcessImage4.jpg";
import img5 from "../../assets/images/ourProcessImage5.jpg";
import img6 from "../../assets/images/ourProcessImage6.jpg";
import img7 from "../../assets/images/ourProcessImage7.jpg";
import img8 from "../../assets/images/ourProcessImage8.jpg";
import img9 from "../../assets/images/ourProcessImage9.jpg";
import img10 from "../../assets/images/ourProcessImage10.jpg";
import img11 from "../../assets/images/ourProcessImage11.jpg";
import img12 from "../../assets/images/ourProcessImage12.jpg";
import img13 from "../../assets/images/ourProcessImage13.jpg";
import img14 from "../../assets/images/ourProcessImage14.jpg";
import img15 from "../../assets/images/ourProcessImage15.jpg";
import img16 from "../../assets/images/ourProcessImage16.jpg";
import img17 from "../../assets/images/ourProcessImage17.jpg";
import img18 from "../../assets/images/ourProcessImage18.jpg";
import img19 from "../../assets/images/ourProcessImage19.jpg";
import img20 from "../../assets/images/ourProcessImage20.jpg";
import img21 from "../../assets/images/ourProcessImage21.jpg";
import img22 from "../../assets/images/ourProcessImage22.jpg";
import img23 from "../../assets/images/ourProcessImage23.jpg";
import img24 from "../../assets/images/ourProcessImage24.jpg";
import img25 from "../../assets/images/ourProcessImage25.jpg";
import img26 from "../../assets/images/ourProcessImage26.jpg";
import img27 from "../../assets/images/ourProcessImage27.jpg";
import img28 from "../../assets/images/ourProcessImage28.jpg";
import img29 from "../../assets/images/ourProcessImage29.jpg";
import img30 from "../../assets/images/ourProcessImage30.jpg";

const allImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
];

function getRandomImages(count: number) {
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// -----------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

interface ProcessItem {
  id: number;
  title1: string;
  title2: string;
  desc: string;
  icon: StaticImageData;
}

interface Props {
  processData: ProcessItem[];
}

const ServiceOurProcessSection: React.FC<Props> = ({ processData }) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        const icon = card.querySelector(".process-icon") as HTMLElement | null;
        const hoverBlocks = card.querySelector(
          ".hover-blocks"
        ) as HTMLElement | null;
        const imageContainers = hoverBlocks
          ? Array.from(hoverBlocks.querySelectorAll(".hover-img"))
          : [];

        const fromDirection = -60;

        if (isMobile) {
          gsap.set(hoverBlocks, { autoAlpha: 1 });
          gsap.set(icon, { autoAlpha: 0 });
          gsap.set(card, { background: "linear-gradient(#FFAC7C, #FF5D00)" });

          gsap.set(card.querySelectorAll(".process-text"), {
            color: "#ffffff",
          });

          return;
        }

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

        const enter = () => tl.timeScale(1).play();
        const leave = () => tl.timeScale(2).reverse();

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
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

      {/* SCROLL CARDS */}
      <div
        className="flex overflow-x-auto gap-6 mt-12 pb-4 
                   scrollbar-hide snap-x snap-mandatory"
      >
        {processData.map((item, index) => {
          const randomImgs = getRandomImages(2); // 🔥 random images per card

          return (
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
              {/* ICON */}
              <div className="absolute top-4 left-10 z-20 process-icon">
                <Image src={item.icon} alt="icon" width={40} height={40} />
              </div>

              {/* RANDOM IMAGES */}
              <div className="absolute top-0 left-0 w-full h-full z-10 hover-blocks opacity-0 flex items-start justify-center">
                <div className="h-32 sm:h-36 md:h-40 m-4 flex gap-3 items-end w-full">
                  {randomImgs.map((img, idx) => (
                    <div
                      key={idx}
                      className={`
                        rounded-tl-xl rounded-br-xl overflow-hidden hover-img 
                        ${idx === 1 ? "h-20 w-1/2 -mb-1" : "h-32 w-1/2"}
                      `}
                    >
                      <Image
                        src={img}
                        alt="random"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* TEXT */}
              <div className="relative z-30">
                <MaskedTextReveal
                  text={item.title1}
                  className="text-xl font-medium group-hover:text-white process-text"
                />
                <MaskedTextReveal
                  text={item.title2}
                  className="text-xl font-medium group-hover:text-white process-text"
                />
                <MaskedTextReveal
                  text={item.desc}
                  className="text-base mt-3 group-hover:text-white process-text"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceOurProcessSection;
