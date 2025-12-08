// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { IoAddOutline } from "react-icons/io5";
// import { MdOutlineHorizontalRule } from "react-icons/md";
// import gsap from "gsap";

// interface FaqItemType {
//   question: string;
//   answer: string;
// }

// interface FaqSectionProps {
//   faqData: FaqItemType[];
// }

// const FaqItem = ({
//   item,
//   index,
//   activeIndex,
//   setActiveIndex,
// }: {
//   item: FaqItemType;
//   index: number;
//   activeIndex: number | null;
//   setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
// }) => {
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = contentRef.current;
//     if (!el) return;

//     if (activeIndex === index) {
//       gsap.to(el, {
//         height: "auto",
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//       });
//     } else {
//       gsap.to(el, {
//         height: 0,
//         opacity: 0,
//         duration: 0.4,
//         ease: "power2.inOut",
//       });
//     }
//   }, [activeIndex, index]);

//   return (
//     <div
//       className="shadow flex flex-col gap-3 p-6 rounded-2xl cursor-pointer transition-all"
//       onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//     >
//       <div className="flex gap-5 items-center">
//         {activeIndex === index ? (
//           <MdOutlineHorizontalRule className="text-[#FF6107] font-extrabold text-2xl shrink-0" />
//         ) : (
//           <IoAddOutline className="text-[#1B1139] font-extrabold text-2xl shrink-0" />
//         )}

//         <p className="text-[#1B1139] font-semibold text-lg">{item.question}</p>
//       </div>

//       <div
//         ref={contentRef}
//         className="overflow-hidden text-[#363049] text-[15px] tracking-wider"
//         style={{ height: 0, opacity: 0 }}
//       >
//         <p>{item.answer}</p>
//       </div>
//     </div>
//   );
// };

// const FaqSection: React.FC<FaqSectionProps> = ({ faqData }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const mid = Math.ceil(faqData.length / 2); // split into two columns dynamically

//   return (
//     <section className="p-20">
//       <p className="font-light text-[54px]">
//         <span className="italic"> Frequently Asked </span>{" "}
//         <span className="font-medium">Questions</span>
//       </p>

//       <div className="flex gap-9 font-visby mt-8">
//         {/* First Column */}
//         <div className="w-[50%] flex flex-col gap-6">
//           {faqData.slice(0, mid).map((item, index) => (
//             <FaqItem
//               key={index}
//               item={item}
//               index={index}
//               activeIndex={activeIndex}
//               setActiveIndex={setActiveIndex}
//             />
//           ))}
//         </div>

//         {/* Second Column */}
//         <div className="w-[50%] flex flex-col gap-6">
//           {faqData.slice(mid).map((item, index) => (
//             <FaqItem
//               key={index + mid}
//               item={item}
//               index={index + mid}
//               activeIndex={activeIndex}
//               setActiveIndex={setActiveIndex}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;



"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import gsap from "gsap";

interface FaqItemType {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqData: FaqItemType[];
}

const FaqItem = ({
  item,
  index,
  activeIndex,
  setActiveIndex,
}: {
  item: FaqItemType;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (activeIndex === index) {
      gsap.to(el, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [activeIndex, index]);

  return (
    <div
      className="shadow flex flex-col gap-3 p-4 md:p-6 rounded-2xl cursor-pointer transition-all"
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
    >
      <div className="flex gap-3 md:gap-5 items-center">
        {activeIndex === index ? (
          <MdOutlineHorizontalRule className="text-[#FF6107] font-extrabold text-2xl shrink-0" />
        ) : (
          <IoAddOutline className="text-[#1B1139] font-extrabold text-2xl shrink-0" />
        )}

        <p className="text-[#1B1139] font-semibold text-lg">
          {item.question}
        </p>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden text-[#363049] text-[15px] tracking-wider"
        style={{ height: 0, opacity: 0 }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const mid = Math.ceil(faqData.length / 2); // split for desktop

  return (
    <section className="p-6 md:p-12 lg:p-20">
      <p className="font-light text-[32px] sm:text-[40px] md:text-[54px] ">
        <span className="italic"> Frequently Asked </span>
        <span className="font-medium">Questions</span>
      </p>

      {/* 
        Desktop → 2 columns
        Mobile/tablet → 1 column 
      */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 font-visby">

        {/* Column 1 */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqData.slice(0, mid).map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqData.slice(mid).map((item, index) => (
            <FaqItem
              key={index + mid}
              item={item}
              index={index + mid}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
