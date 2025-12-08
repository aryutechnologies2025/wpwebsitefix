// import React from "react";
// import { MaskedTextReveal, SectionsTopSmallHeading } from "..";
// import Image, { StaticImageData } from "next/image";

// interface WhatSetApartItem {
//   id: number;
//   icon: StaticImageData;
//   title: string;
//   description: string;
// }

// interface ServiceWhatSetApartProps {
//   setUsApartData: WhatSetApartItem[];
// }

// const ServiceWhatSetUsApart: React.FC<ServiceWhatSetApartProps> = ({
//   setUsApartData,
// }) => {
//   return (
//     <section className="p-20 bg-linear-to-b from-[#202020] to-[#0D0D0D]">
//       <SectionsTopSmallHeading displayText="Portflio" containerBg="white" />

//       <div className="flex gap-3 text-[54px] text-white mt-3">
//         <MaskedTextReveal text="What Set " className="italic font-thin" />
//         <MaskedTextReveal text="Us Apart " className="font-medium" />
//       </div>

//       <div className="grid grid-cols-3 gap-10 mt-8">
//         {setUsApartData.map((item) => (
//           <div
//             key={item.id}
//             className="border border-transparent hover:border-[#AA3E00]/70 rounded-2xl p-5 transition-all duration-300"
//           >
//             <Image
//               src={item.icon}
//               width={55}
//               height={55}
//               alt={item.title}
//               className="border border-[#AA3E00]/40 p-2 rounded-lg"
//             />
//             <p className="font-medium text-2xl text-white mt-5">{item.title}</p>
//             <p className="text-[#BEBEBE] mt-3">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceWhatSetUsApart;

import React from "react";
import { MaskedTextReveal, SectionsTopSmallHeading } from "..";
import Image, { StaticImageData } from "next/image";

interface WhatSetApartItem {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
  altText:string
}

interface ServiceWhatSetSetApartProps {
  setUsApartData: WhatSetApartItem[];
}

const ServiceWhatSetUsApart: React.FC<ServiceWhatSetSetApartProps> = ({
  setUsApartData,
}) => {
  return (
    <section className="p-6 md:p-12 lg:p-20 bg-linear-to-b from-[#202020] to-[#0D0D0D]">
      {/* SMALL HEADING */}
      <SectionsTopSmallHeading displayText="Apart" containerBg="white" />

      {/* HEADING */}
      <div className="flex flex-wrap gap-2 sm:gap-3 text-[32px] sm:text-[40px] md:text-[54px] text-white mt-3">
        <MaskedTextReveal text="What Set " className="italic font-thin" />
        <MaskedTextReveal text="Us Apart " className="font-medium" />
      </div>

      {/* GRID ITEMS */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        sm:gap-8 
        lg:gap-10 
        mt-8
      "
      >
        {setUsApartData.map((item) => (
          <div
            key={item.id}
            className="
              border border-transparent 
              hover:border-[#AA3E00]/70 
              rounded-2xl 
              p-5 
              transition-all 
              duration-300
            "
          >
            <Image
              src={item.icon}
              width={55}
              height={55}
              alt={item.altText}
              className="border border-[#AA3E00]/40 p-2 rounded-lg"
            />

            <p className="font-medium text-xl sm:text-2xl text-white mt-5">
              {item.title}
            </p>

            <p className="text-[#BEBEBE] mt-3 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceWhatSetUsApart;
