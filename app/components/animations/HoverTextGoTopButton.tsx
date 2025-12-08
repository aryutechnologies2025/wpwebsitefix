// // "use client";
// // import React, { ReactNode } from "react";
// // import { useRouter } from "next/navigation"; // Next.js App Router

// // interface HoverTextGoTopButtonProps {
// //   topText: string;
// //   bottomText: string;
// //   href?: string; // navigation URL
// //   bgColor?: string;
// //   textColor?: string;
// //   border?: boolean;
// //   borderColor?: string;
// //   icon?: ReactNode;
// //   className?: string;
// // }

// // const HoverTextGoTopButton: React.FC<HoverTextGoTopButtonProps> = ({
// //   topText,
// //   bottomText,
// //   href = "/contact-us",
// //   bgColor = "bg-white",
// //   textColor = "text-[#FF6E1B]",
// //   border = false,
// //   borderColor = "",
// //   icon,
// //   className = "",
// // }) => {
// //   const router = useRouter();

// //   const handleClick = () => {
// //     router.push(href);
// //   };

// //   return (
// //     <button
// //       onClick={handleClick}
// //       className={`group relative z-10 w-fit cursor-pointer overflow-hidden  px-14 py-4 ${
// //         border && "border"
// //       } ${bgColor} ${textColor} ${borderColor} rounded-full text-sm ${className}`}
// //     >
// //       <span className="relative inline-flex overflow-hidden items-center gap-2">
// //         {/* Top Text */}
// //         <div className="translate-y-0  transition-transform duration-500 ease-in-out group-hover:-translate-y-full   flex items-center justify-center gap-2 w-full text-center">
// //           {topText} {icon && <span>{icon}</span>}
// //         </div>

// //         {/* Bottom Text */}
// //         <div className="absolute inset-0 flex items-center justify-center text-center transition-transform duration-500 ease-in-out transform translate-y-[164%] skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 w-full gap-2">
// //           {bottomText} {icon && <span>{icon}</span>}
// //         </div>
// //       </span>
// //     </button>
// //   );
// // };

// // export default HoverTextGoTopButton;



// "use client";
// import React, { ReactNode } from "react";
// import { useRouter } from "next/navigation";

// interface HoverTextGoTopButtonProps {
//   topText: string;
//   bottomText: string;
//   href?: string;
//   bgColor?: string; // now plain CSS color
//   textColor?: string; // now plain CSS color
//   border?: boolean;
//   borderColor?: string; // now plain CSS color
//   icon?: ReactNode;
//   className?: string;
// }

// const HoverTextGoTopButton: React.FC<HoverTextGoTopButtonProps> = ({
//   topText,
//   bottomText,
//   href = "/contact-us",
//   bgColor = "#ffffff", // white
//   textColor = "#FF6E1B", // orange
//   border = false,
//   borderColor = "#000000", // black
//   icon,
//   className = "",
// }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(href);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       style={{
//         backgroundColor: bgColor,
//         color: textColor,
//         border: border ? `1px solid ${borderColor}` : "none",
//       }}
//       className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
//          rounded-full  transition-all duration-300 ${className}`}
//     >
//       <span className="relative inline-flex overflow-hidden items-center gap-2">
//         {/* Top Text */}
//         <div className="translate-y-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center gap-2 w-full text-center">
//           {topText} {icon && <span>{icon}</span>}
//         </div>

//         {/* Bottom Text */}
//         <div className="absolute inset-0 flex items-center justify-center text-center transition-transform duration-500 ease-in-out transform translate-y-[164%] skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 w-full gap-2">
//           {bottomText} {icon && <span>{icon}</span>}
//         </div>
//       </span>
//     </button>
//   );
// };

// export default HoverTextGoTopButton;



// "use client";
// import React, { ReactNode } from "react";
// import { useRouter } from "next/navigation";

// interface HoverTextGoTopButtonProps {
//   topText: string;
//   bottomText: string;
//   href?: string;
//   bgColor?: string;
//   textColor?: string;
//   border?: boolean;
//   borderColor?: string;
//   icon?: ReactNode;
//   iconColor?: string; // CSS color for icon
//   className?: string;
// }

// const HoverTextGoTopButton: React.FC<HoverTextGoTopButtonProps> = ({
//   topText,
//   bottomText,
//   href = "/contact-us",
//   bgColor = "#ffffff",
//   textColor = "#FF6E1B",
//   border = false,
//   borderColor = "#000000",
//   icon,
//   iconColor = "#FF6E1B",
//   className = "",
// }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(href);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       style={{
//         backgroundColor: bgColor,
//         color: textColor,
//         border: border ? `1px solid ${borderColor}` : "none",
//       }}
//       className={`group relative z-10 w-fit overflow-hidden 
//         rounded-full  transition-all duration-300 ${className}`}
//     >
//       <span className="relative inline-flex overflow-hidden items-center gap-2">
//         {/* Top Text */}
//         <div className="translate-y-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center gap-2 w-full text-center">
//           {topText}
//           {icon && (
//             <span style={{ color: iconColor }} className="flex items-center">
//               {icon}
//             </span>
//           )}
//         </div>

//         {/* Bottom Text */}
//         <div className="absolute inset-0 flex items-center justify-center text-center transition-transform duration-500 ease-in-out transform translate-y-[164%] skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 w-full gap-2">
//           {bottomText}
//           {icon && (
//             <span style={{ color: iconColor }} className="flex items-center">
//               {icon}
//             </span>
//           )}
//         </div>
//       </span>
//     </button>
//   );
// };

// export default HoverTextGoTopButton;



"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface HoverTextGoTopButtonProps {
  topText: string;
  bottomText: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  icon?: ReactNode;
  iconColor?: string;
  iconClassName?: string;
  className?: string;
  flexGap?:number;
}

const HoverTextGoTopButton: React.FC<HoverTextGoTopButtonProps> = ({
  topText,
  bottomText,
  href = "/contact-us",
  bgColor = "#ffffff",
  textColor = "#FF6E1B",
  border = false,
  borderColor = "#000000",
  icon,
  iconColor = "#FF6E1B",
  iconClassName = "",
  className = "",
  flexGap=2
}) => {
  const router = useRouter();

  const handleClick = () => {
    window.scrollTo({
      top:0,
      behavior:'instant'
    })
        router.push(href);

  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border ? `1px solid ${borderColor}` : "none",
      }}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
        rounded-full transition-all duration-300 ${className}`}
    >
      <span className="relative inline-flex overflow-hidden items-center gap-2">
        {/* Top Text */}
        <div className={`translate-y-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center w-full text-center gap-${flexGap}`}>
          {topText}
          {icon && (
            <span
              style={{ color: iconColor }}
              className={`flex items-center ${iconClassName}`}
            >
              {icon}
            </span>
          )}
        </div>

        {/* Bottom Text */}
        <div className={`absolute inset-0 flex items-center justify-center text-center transition-transform duration-500 ease-in-out transform translate-y-[164%] skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 w-full gap-2 gap-${flexGap}`}>
          {bottomText}
          {icon && (
            <span
              style={{ color: iconColor }}
              className={`flex items-center ${iconClassName}`}
            >
              {icon}
            </span>
          )}
        </div>
      </span>
    </button>
  );
};

export default HoverTextGoTopButton;
