// "use client";
// import React, { useEffect, useState } from "react";
// // import { FaChevronUp } from "react-icons/fa";
// import whatsapp from "../assets/images/whatsapp.svg";
// import Image from "next/image";

// const GoToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show buttons after scrolling down
//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

  

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-16 md:bottom-5 right-3 z-1200 flex flex-col items-center gap-2 md:gap-3">
//           {/* WhatsApp Button */}
//           {/* <div
//             onClick={() =>
//               window.open("https://wa.me/9994715106?text=Hello%20there!")
//             }
//             className="relative group cursor-pointer"
//           >
//             <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
//               Whatsapp Enquiry
//               <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
//             </div>

//             <div className="relative w-9 h-9">
//               <Image
//                 src={whatsapp}
//                 alt="WhatsApp"
              
//                 fill
//                 className="animate-bounce object-cover drop-shadow-md transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//           </div> */}

//           <div
//   onClick={() =>
//     window.open("https://wa.me/9994715106?text=Hello%20there!")
//   }
//   className="relative group cursor-pointer animate-fadeInUp"
// >

  
//   {/* Tooltip */}
//   <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
//     Chat with us 
//     <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
//   </div>

//   {/* Pulse Ring */}
//   <span className="absolute inset-0 rounded-full animate-pingSlow bg-green-500/40"></span>

//   {/* Icon */}
//   <div className="relative w-9 h-9 z-10">
//     <Image
//       src={whatsapp}
//       alt="WhatsApp"
//       fill
//       className="object-cover drop-shadow-md transition-transform duration-300 hover:scale-110"
//     />
//   </div>
// </div>


//           {/* Go to Top Button */}
//           {/* <div onClick={scrollToTop} className="relative group cursor-pointer">
//             <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
//               Go to Top
//               <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
//             </div>
//             <div className="h-7 w-7 flex items-center justify-center bg-[#FF6E1B] text-white rounded-full shadow-md transition-transform duration-300 hover:scale-110">
//               <FaChevronUp className="text-xs " />
//             </div>
//           </div> */}
//         </div>
//       )}
//     </>
//   );
// };

// export default GoToTop;



"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import whatsapp from "../assets/images/whatsapp.svg";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ⚡ Magnetic hover handlers
  const handleMagneticMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;
    const y =
      e.clientY - rect.top - rect.height / 2;

    target.style.transform = `translate(${x * 0.25}px, ${
      y * 0.25
    }px)`;
  };

  const resetMagnetic = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.currentTarget.style.transform =
      "translate(0px, 0px)";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-5 right-3 z-[1200] flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <div
        onClick={() =>
          window.open(
            "https://wa.me/9994715106?text=Hello%20there!",
            "_blank"
          )
        }
        onMouseMove={handleMagneticMove}
        onMouseLeave={resetMagnetic}
        className="relative group cursor-pointer magnetic animate-fadeInUp"
      >
        {/* Tooltip */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
          WhatsApp – Online Now
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
        </div>

        {/* 🟢 Online Indicator */}
        <span className="absolute -top-1 -right-1 z-20 flex h-3 w-3">
          <span className="animate-onlinePing absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        </span>

        {/* 🌊 Pulse Ring */}
        <span className="absolute inset-0 rounded-full animate-pingSlow bg-green-500/40"></span>

        {/* Icon */}
        <div className="relative w-10 h-10 z-10">
          <Image
            src={whatsapp}
            alt="WhatsApp"
            fill
            className="object-cover drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default GoToTop;
