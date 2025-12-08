
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { IoAddOutline } from "react-icons/io5";
// import { MdOutlineHorizontalRule } from "react-icons/md";
// import { MaskedTextReveal } from "../../components";
// import gsap from "gsap";
// import img1 from "../../assets/images/aboutOurValuesImage1.png";
// import img2 from "../../assets/images/aboutOurValuesImage2.png";
// import img3 from "../../assets/images/aboutOurValuesImage3.png";

// const services = [
//   {
//     title: "Our Mission",
//     desc: "Our mission is to deliver reliable and innovative WordPress solutions that help businesses succeed online. We focus on creating high-performing, secure, and user-friendly websites that drive growth and enhance digital presence.",
//     image: img1,
//   },
//   {
//     title: "Our Vision",
//     desc: "We aspire to be a leading WordPress development and maintenance provider, recognized for quality, innovation, and helping businesses worldwide.",
//     image: img2,
//   },
//   {
//     title: "Our Goals",
//     desc: "We empower businesses with WordPress websites that deliver impact. By combining expertise, modern technology, and transparent collaboration, we drive growth, reliability, and lasting success.",
//     image: img3,
//   },
// ];

//  const AboutOurValue = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [activeImage, setActiveImage] = useState(img1);
//   const [prevImage, setPrevImage] = useState(img1);
//   const topRef = useRef<HTMLDivElement | null>(null);
//   const bottomRef = useRef<HTMLDivElement | null>(null);
//   const descRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // ✅ Smooth image crossfade
//   useEffect(() => {
//     if (hoveredIndex === null) return;
//     const newImage = services[hoveredIndex].image;
//     setPrevImage(activeImage);
//     setActiveImage(newImage);

//     if (topRef.current && bottomRef.current) {
//       gsap.set(topRef.current, { opacity: 0, scale: 1.03 });
//       gsap.set(bottomRef.current, { opacity: 1 });
//       gsap.to(bottomRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" });
//       gsap.to(topRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
//     }
//   }, [hoveredIndex]);

//   // ✅ Dropdown animation
//   useEffect(() => {
//     descRefs.current.forEach((el, i) => {
//       if (!el) return;
//       if (hoveredIndex === i) {
//         gsap.to(el, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
//       } else {
//         gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power1.inOut" });
//       }
//     });
//   }, [hoveredIndex]);

//   return (
//     <section className="p-6 md:p-12 lg:p-20">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-28">
//         {/* IMAGE SECTION */}
//         <div className="relative w-full lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shrink-0">
//           <div ref={bottomRef} className="absolute inset-0">
//             <Image src={prevImage} alt="WPWebsiteFix team providing WordPress maintenance, security, speed optimization, and support services." fill className="object-cover" />
//           </div>
//           <div ref={topRef} className="absolute inset-0">
//             <Image src={activeImage} alt="WPWebsiteFix team providing WordPress maintenance, security, speed optimization, and support services." fill className="object-cover" />
//           </div>
//         </div>

//         {/* TEXT CONTENT */}
//         <div className="flex-1">
//           <MaskedTextReveal text="OUR VALUES" className="text-[#00000099] text-lg md:text-xl mb-4" />

//           <div className="flex flex-col ">
//             <MaskedTextReveal text="Driving Growth" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
//             <MaskedTextReveal text="Through Expertise" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
//           </div>

//           {/* SERVICES LIST */}
//           <div className="flex flex-col gap-5 font-visby mt-6 md:mt-8">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group transition-all duration-300"
//               >
//                 {/* HEADER */}
//                 <div className="flex cursor-pointer justify-between items-center">
//                   <div className="flex gap-4 md:gap-6 items-center">
//                     <p className="cursor-pointer text-[#1B1B1B] font-bold text-lg sm:text-xl md:text-2xl transition-colors duration-300">
//                       {item.title}
//                     </p>
//                   </div>

//                   {/* PLUS / MINUS ICON */}
//                   <div className="transition-all duration-300 text-2xl md:text-3xl">
//                     {hoveredIndex === index ? <MdOutlineHorizontalRule /> : <IoAddOutline />}
//                   </div>
//                 </div>

//                 {/* DROPDOWN */}
//                 <div
//                   ref={(el) => {
//                     descRefs.current[index] = el;
//                   }}
//                   className="overflow-hidden opacity-0 h-0"
//                 >
//                   <p className="text-[#555] text-sm sm:text-base md:text-[17px] leading-relaxed mt-2 md:mt-3">
//                     {item.desc}
//                   </p>
//                 </div>

//                 <hr className="mt-3 md:mt-5 border-gray-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutOurValue





// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { IoAddOutline } from "react-icons/io5";
// import { MdOutlineHorizontalRule } from "react-icons/md";
// import { MaskedTextReveal } from "../../components";
// import gsap from "gsap";
// import img1 from "../../assets/images/aboutOurValuesImage1.png";
// import img2 from "../../assets/images/aboutOurValuesImage2.png";
// import img3 from "../../assets/images/aboutOurValuesImage3.png";

// const services = [
//   {
//     title: "Our Mission",
//     desc: "Our mission is to deliver reliable and innovative WordPress solutions that help businesses succeed online. We focus on creating high-performing, secure, and user-friendly websites that drive growth and enhance digital presence.",
//     image: img1,
//   },
//   {
//     title: "Our Vision",
//     desc: "We aspire to be a leading WordPress development and maintenance provider, recognized for quality, innovation, and helping businesses worldwide.",
//     image: img2,
//   },
//   {
//     title: "Our Goals",
//     desc: "We empower businesses with WordPress websites that deliver impact. By combining expertise, modern technology, and transparent collaboration, we drive growth, reliability, and lasting success.",
//     image: img3,
//   },
// ];

// const AboutOurValue = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [activeImage, setActiveImage] = useState(img1);
//   const [prevImage, setPrevImage] = useState(img1);

//   const topRef = useRef<HTMLDivElement | null>(null);
//   const bottomRef = useRef<HTMLDivElement | null>(null);
//   const descRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // The effect that updates the image WITHOUT causing cascading renders
//   useEffect(() => {
//     if (hoveredIndex === null) return;

//     const newImage = services[hoveredIndex].image;

//     // Only update states if needed
//     if (newImage !== activeImage) {
//       setPrevImage(activeImage);
//       setActiveImage(newImage);
//     }

//   }, [hoveredIndex, activeImage]);

//   // Smooth image crossfade animation
//   useEffect(() => {
//     if (!topRef.current || !bottomRef.current) return;

//     gsap.set(topRef.current, { opacity: 0, scale: 1.03 });
//     gsap.set(bottomRef.current, { opacity: 1 });

//     gsap.to(bottomRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     gsap.to(topRef.current, {
//       opacity: 1,
//       scale: 1,
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   }, [activeImage]);

//   // Dropdown animation
//   useEffect(() => {
//     descRefs.current.forEach((el, i) => {
//       if (!el) return;
//       if (hoveredIndex === i) {
//         gsap.to(el, {
//           height: "auto",
//           opacity: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       } else {
//         gsap.to(el, {
//           height: 0,
//           opacity: 0,
//           duration: 0.3,
//           ease: "power1.inOut",
//         });
//       }
//     });
//   }, [hoveredIndex]);

//   return (
//     <section className="p-6 md:p-12 lg:p-20">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-28">
        
//         {/* IMAGE SECTION */}
//         <div className="relative w-full lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shrink-0">
//           <div ref={bottomRef} className="absolute inset-0">
//             <Image src={prevImage} alt="WordPress services" fill className="object-cover" />
//           </div>

//           <div ref={topRef} className="absolute inset-0">
//             <Image src={activeImage} alt="WordPress services" fill className="object-cover" />
//           </div>
//         </div>

//         {/* TEXT SECTION */}
//         <div className="flex-1">
//           <MaskedTextReveal text="OUR VALUES" className="text-[#00000099] text-lg md:text-xl mb-4" />

//           <div className="flex flex-col ">
//             <MaskedTextReveal text="Driving Growth" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
//             <MaskedTextReveal text="Through Expertise" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
//           </div>

//           {/* SERVICES LIST */}
//           <div className="flex flex-col gap-5 font-visby mt-6 md:mt-8">
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group transition-all duration-300"
//               >
//                 <div className="flex cursor-pointer justify-between items-center">
//                   <p className="text-[#1B1B1B] font-bold text-lg sm:text-xl md:text-2xl">
//                     {item.title}
//                   </p>

//                   <div className="text-2xl md:text-3xl transition-all duration-300">
//                     {hoveredIndex === index ? <MdOutlineHorizontalRule /> : <IoAddOutline />}
//                   </div>
//                 </div>

//                 {/* DROPDOWN CONTENT */}
//                 <div
//                   ref={(el) => {descRefs.current[index] = el}}
//                   className="overflow-hidden opacity-0 h-0"
//                 >
//                   <p className="text-[#555] text-sm sm:text-base md:text-[17px] leading-relaxed mt-2 md:mt-3">
//                     {item.desc}
//                   </p>
//                 </div>

//                 <hr className="mt-3 md:mt-5 border-gray-300" />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutOurValue;












"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { MaskedTextReveal } from "../../components";
import gsap from "gsap";
import img1 from "../../assets/images/aboutOurValuesImage1.png";
import img2 from "../../assets/images/aboutOurValuesImage2.png";
import img3 from "../../assets/images/aboutOurValuesImage3.png";

const services = [
  {
    title: "Our Mission",
    desc: "Our mission is to deliver reliable and innovative WordPress solutions that help businesses succeed online. We focus on creating high-performing, secure, and user-friendly websites that drive growth and enhance digital presence.",
    image: img1,
  },
  {
    title: "Our Vision",
    desc: "We aspire to be a leading WordPress development and maintenance provider, recognized for quality, innovation, and helping businesses worldwide.",
    image: img2,
  },
  {
    title: "Our Goals",
    desc: "We empower businesses with WordPress websites that deliver impact. By combining expertise, modern technology, and transparent collaboration, we drive growth, reliability, and lasting success.",
    image: img3,
  },
];

const AboutOurValue = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(img1);
  const [prevImage, setPrevImage] = useState(img1);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * 🔥 FIX:
   * No more setState inside useEffect.
   * Image switching happens directly on hover.
   */
  const handleHover = (index: number | null) => {
    if (index === null) {
      setHoveredIndex(null);
      return;
    }

    const newImage = services[index].image;

    setHoveredIndex(index);
    setPrevImage(activeImage);
    setActiveImage(newImage);
  };

  /** Image crossfade animation **/
  useEffect(() => {
    if (!topRef.current || !bottomRef.current) return;

    gsap.set(topRef.current, { opacity: 0, scale: 1.03 });
    gsap.set(bottomRef.current, { opacity: 1 });

    gsap.to(bottomRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(topRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeImage]);

  /** Dropdown animation **/
  useEffect(() => {
    descRefs.current.forEach((el, i) => {
      if (!el) return;

      if (hoveredIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    });
  }, [hoveredIndex]);

  return (
    <section className="p-6 md:p-12 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-28">

        {/* IMAGE SECTION */}
        <div className="relative w-full lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shrink-0">
          <div ref={bottomRef} className="absolute inset-0">
            <Image src={prevImage} alt="WordPress services" fill className="object-cover" />
          </div>

          <div ref={topRef} className="absolute inset-0">
            <Image src={activeImage} alt="WordPress services" fill className="object-cover" />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1">
          <MaskedTextReveal text="OUR VALUES" className="text-[#00000099] text-lg md:text-xl mb-4" />

          <div className="flex flex-col">
            <MaskedTextReveal text="Driving Growth" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
            <MaskedTextReveal text="Through Expertise" className="text-3xl sm:text-4xl md:text-[57.6px] font-semibold leading-18" />
          </div>

          {/* SERVICES LIST */}
          <div className="flex flex-col gap-5 font-visby mt-6 md:mt-8">
            {services.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                className="group transition-all duration-300"
              >
                <div className="flex cursor-pointer justify-between items-center">
                  <p className="text-[#1B1B1B] font-bold text-lg sm:text-xl md:text-2xl">
                    {item.title}
                  </p>

                  <div className="text-2xl md:text-3xl transition-all duration-300">
                    {hoveredIndex === index ? <MdOutlineHorizontalRule /> : <IoAddOutline />}
                  </div>
                </div>

                {/* DROPDOWN */}
                <div
                  ref={(el) => {descRefs.current[index] = el}}
                  className="overflow-hidden opacity-0 h-0"
                >
                  <p className="text-[#555] text-sm sm:text-base md:text-[17px] leading-relaxed mt-2 md:mt-3">
                    {item.desc}
                  </p>
                </div>

                <hr className="mt-3 md:mt-5 border-gray-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOurValue;
