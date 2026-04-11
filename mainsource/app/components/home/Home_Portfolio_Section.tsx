// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   MaskedTextReveal,
//   ScrollTextColorChange,
//   SectionsTopSmallHeading,
// } from "../../components";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { BsArrowUpRight } from "react-icons/bs";
// import ourWorkBioKosmetik from '../../assets/images/ourWorkBioKosmetik.png'
// import ourWorkConversion from '../../assets/images/ourWorkConversion.png'
// import ourWorkLoveAndFlour from '../../assets/images/ourWorkLoveAndFlour.png'
// import ourWorkSkinCare from '../../assets/images/ourWorkSkinCare.png'
// import ourWorkVistaPartner from '../../assets/images/ourWorkVistaPartner.png'


// gsap.registerPlugin(ScrollTrigger);

// const Home_Portfolio_Section = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);

//   const [hovered, setHovered] = useState(false);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     if (!sectionRef.current || !containerRef.current) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 110%",
//         end: "+=1000",
//         scrub: 3,
//       },
//     });

//     tl.fromTo(
//       containerRef.current,
//       { scale: 0.1, opacity: 0, y: 80, x: -20 },
//       { scale: 1, opacity: 1, y: 0, x: 0, ease: "power1.out" },
//       0
//     );
//   }, []);

//   // TRACK CURSOR (Desktop Only)
//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       if (window.innerWidth < 1024) return; // disable cursor on mobile/tablet

//       const { clientX, clientY, movementX, movementY } = e;
//       setCursorPos({ x: clientX, y: clientY });

//       if (cursorRef.current) {
//         const speed = Math.sqrt(movementX ** 2 + movementY ** 2);
//         const scale = Math.min(1.3, 1 + speed / 60);
//         gsap.to(cursorRef.current, {
//           scale,
//           duration: 0.2,
//           ease: "power2.out",
//         });
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <section className="relative overflow-hidden ">
     

//       {/* Heading Top */}
//       <SectionsTopSmallHeading
//         displayText="Works"
//         dotBg="#FF6107"
//         className="mx-auto mt-20"
//       />

//       <div
//         ref={sectionRef}
//         className="font-light text-[36px] md:text-[52px] lg:text-[64px] text-center flex items-center justify-center sm:gap-2 flex-wrap"
//       >
//         <MaskedTextReveal
//           text="Explore"
//           className="italic p-2 leading-10 sm:leading-none"
//         />
//         <MaskedTextReveal
//           text="Our Works"
//           className="font-medium leading-10 sm:leading-normal"
//         />
//       </div>

//       {/* VIDEO SECTION */}
//       <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-screen z-30 overflow-hidden mt-10 md:mt-0">
//         <div
//           ref={containerRef}
//           onMouseEnter={() => window.innerWidth >= 1024 && setHovered(true)}
//           onMouseLeave={() => window.innerWidth >= 1024 && setHovered(false)}
//           className="absolute top-0 left-0 w-full h-full flex items-center justify-center 
//           rounded-xl md:rounded-3xl overflow-hidden opacity-0 scale-50 group"
//           style={{ cursor: "none" }}
//         >
//           <video
//             className="object-cover w-full h-full rounded-xl md:rounded-3xl"
//             src="./videos/FinalBiok.mp4"
//             autoPlay
//             loop
//             muted
//           />

//           <div className="absolute bg-black/30 w-full h-full" />

//           {/* HOVER TEXT (Responsive) */}
//           <div
//             className={`absolute flex flex-col justify-end p-6 md:p-12 lg:p-16 gap-6 lg:gap-8 h-full w-full text-white transition-all duration-500 ${
//               hovered
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 lg:translate-y-10"
//             }`}
//           >
//             <p className="font-medium text-3xl md:text-4xl lg:text-5xl">
//               Biokosmetik
//             </p>

//             <div className="flex flex-col lg:flex-row justify-between gap-6 ">
//               <p className="w-full lg:w-1/3 text-sm md:text-base">
//                 A fresh, modern WordPress makeover that brings clean beauty to
//                 life with smooth performance and elegant design.
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
//                   E-commerce Development
//                 </p>
//                 <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
//                   Branding & Product Presentation
//                 </p>
//                 <p className="border border-white rounded-full px-3 py-2 h-fit text-xs md:text-sm backdrop-blur">
//                   Website Optimization
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CUSTOM CURSOR (DESKTOP ONLY) */}
//           {hovered && (
//             <div
//               ref={cursorRef}
//               className="fixed z-50 pointer-events-none transition-transform duration-200 hidden lg:block"
//               style={{
//                 top: cursorPos.y - 40,
//                 left: cursorPos.x - 40,
//               }}
//             >
//               <div className="relative flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                 <BsArrowUpRight className="text-white text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Bottom Headings */}

//       <div className="p-6 md:p-12 lg:p-20">
//         <MaskedTextReveal
//           text="One Platform for All Your"
//           className="text-[32px] md:text-[48px] lg:text-[56px] leading-10 sm:leading-none italic text-center "
//         />
//         <MaskedTextReveal
//           text="WordPress Projects"
//           className="text-[32px] md:text-[48px] lg:text-[56px] leading-10 sm:leading-normal font-medium text-center"
//         />

//         <ScrollTextColorChange
//           className="visby mt-4 text-center  md:w-[70%] lg:w-[60%] mx-auto"
//           text="We manage, maintain, and optimize WordPress websites for fast, secure,
//           scalable, and fully managed WordPress solutions for every project."
//         />
//       </div>
//     </section>
//   );
// };

// export default Home_Portfolio_Section;




"use client";
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/effect-coverflow';
import React, { useEffect, useRef, useState } from "react";
import {
  MaskedTextReveal,
  ScrollTextColorChange,
  SectionsTopSmallHeading,
} from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import ourWorkBioKosmetik from '../../assets/images/ourWorkBioKosmetik.png'
import ourWorkConversion from '../../assets/images/ourWorkConversion.png'
import ourWorkLoveAndFlour from '../../assets/images/ourWorkLoveAndFlour.png'
import ourWorkSkinCare from '../../assets/images/ourWorkSkinCare.png'
import ourWorkVistaPartner from '../../assets/images/ourWorkVistaPartner.png'

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const Home_Portfolio_Section = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "Biokosmetik Of Texas",
      description: "A fresh, modern WordPress makeover that brings clean beauty to life with smooth performance and elegant design.",
      image: ourWorkBioKosmetik.src,
      url: " https://www.biokosmetikoftexas.com/",
    },
    {
      id: 2,
      title: "Conversion Media Group",
      description: "High-converting landing pages and optimized user journeys that turn visitors into loyal customers.",
      image: ourWorkConversion.src,
      url: "https://conversionmediagroup.com/",
     
    },
    {
      id: 3,
      title: "Love & Flour",
      description: "Bakery brand with a warm, inviting digital presence that captures the essence of homemade goodness.",
      image: ourWorkLoveAndFlour.src,
      url: "https://loveandflourbypooja.com/",
    
    },
    {
      id: 4,
      title: "SkinCare USA",
      description: "Premium skincare brand with immersive product storytelling and seamless shopping experience.",
      image: ourWorkSkinCare.src,
      url: "https://skincare-usa.com/",
    
    },
    {
      id: 5,
      title: "Vista Partner",
      description: "Corporate website with sophisticated design and powerful backend integration for seamless business operations.",
      image: ourWorkVistaPartner.src,
      url: "https://vistapglobal.com/",
     
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 110%",
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

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate through projects for desktop featured section
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isMobile) {
        setActiveIndex((prev) => (prev + 1) % workItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, workItems.length, isMobile]);

  const handleNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white">
    

      {/* Heading Top */}
      <SectionsTopSmallHeading
        displayText="Works"
        dotBg="#FF6107"
        className="mx-auto mt-20 relative z-10"
      />

      <div
        ref={sectionRef}
        className="font-light text-[36px] md:text-[52px] lg:text-[64px] text-center flex items-center justify-center sm:gap-2 flex-wrap relative z-10"
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

      {/* PORTFOLIO SECTION */}
      <div ref={containerRef} className="relative z-10 mt-10 md:mt-20 px-4 md:px-8 lg:px-20">
        
        

        {/* Desktop: Featured Project Showcase */}
        {!isMobile && (
          <div className="mb-12 md:mb-20">
            <div 
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => handleNavigation(workItems[activeIndex].url)}
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img
                  src={workItems[activeIndex].image}
                  alt={workItems[activeIndex].title}
                  className="w-full h-full object-cover bg-top object-top  transition-transform duration-700 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10 text-white">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div className="space-y-2 md:space-y-3 flex-1">
                    <p className="text-xs md:text-sm uppercase tracking-wider text-orange-300">
                    </p>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                      {workItems[activeIndex].title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base max-w-2xl text-gray-200 line-clamp-2 md:line-clamp-3">
                      {workItems[activeIndex].description}
                    </p>
                   
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 group-hover:bg-[#FF6107] transition-all duration-300">
                    <BsArrowUpRight className="text-xl md:text-2xl" />
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 flex gap-1.5 md:gap-2">
                {workItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`h-1.5 md:h-2 rounded-full transition-all cursor-pointer duration-300 ${
                      activeIndex === idx 
                        ? 'w-6 md:w-8 bg-gray-500' 
                        : 'w-1.5 md:w-2 bg-gray-500/30 hover:bg-gray-500/70 hover:border border-orange-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Responsive Grid/Carousel Layout */}
        {/* {isMobile ? (
          <div className="mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              className="portfolio-carousel !pb-12"
            >
              {workItems.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="group relative cursor-pointer"
                    onClick={() => handleNavigation(item.url)}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                          
                            <h3 className="text-lg font-bold mt-1 group-hover:text-[#FF6107] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <div className="bg-gray-100 rounded-full p-2 group-hover:bg-[#FF6107] group-hover:text-white transition-all duration-300">
                            <BsArrowUpRight className="text-sm" />
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs line-clamp-2">
                          {item.description}
                        </p>
                        
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20">
            {workItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleNavigation(item.url)}
              >
                <div className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>

                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        
                        <h3 className="text-base md:text-xl font-bold mt-1 group-hover:text-[#FF6107] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="bg-gray-100 rounded-full p-1.5 md:p-2 group-hover:bg-[#FF6107] group-hover:text-white transition-all duration-300">
                        <BsArrowUpRight className="text-base md:text-lg" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                      {item.description}
                    </p>
                    
                    
                  </div>

                  <div className={`absolute inset-0 border-2 border-[#FF6107] rounded-xl transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  } pointer-events-none`} />
                </div>
              </div>
            ))}
          </div>
        )} */}

           {isMobile && (
          <div className="mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              className="portfolio-carousel pb-12!"
            >
              {workItems.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="group relative cursor-pointer"
                    onClick={() => handleNavigation(item.url)}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                          
                            <h3 className="text-lg font-bold mt-1 group-hover:text-[#FF6107] transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <div className="bg-gray-100 rounded-full p-2 group-hover:bg-[#FF6107] group-hover:text-white transition-all duration-300">
                            <BsArrowUpRight className="text-sm" />
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs line-clamp-2">
                          {item.description}
                        </p>
                        
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) }

      
      </div>

      {/* Bottom Headings - Responsive */}
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

      {/* Add custom styles for Swiper */}
      <style jsx global>{`
        .portfolio-carousel .swiper-button-next,
        .portfolio-carousel .swiper-button-prev {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .portfolio-carousel .swiper-button-next:after,
        .portfolio-carousel .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
          color: #FF6107;
        }
        .portfolio-carousel .swiper-pagination-bullet {
          background: #FF6107;
        }
        .portfolio-carousel .swiper-pagination-bullet-active {
          background: #FF6107;
        }
        @media (max-width: 768px) {
          .portfolio-carousel .swiper-button-next,
          .portfolio-carousel .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Home_Portfolio_Section;