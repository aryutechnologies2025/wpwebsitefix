// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useRouter } from "next/navigation";

// interface RippleButtonProps {
//   text: string;
//   href: string;
//   icon?: React.ReactNode;
//   bgColor?: string;         // Default background color
//   hoverBgColor?: string;    // Hover background color
//   textColor?: string;       // Default text color
//   hoverTextColor?: string;  // Hover text color
//   iconColor?: string;       // Default icon color
//   hoverIconColor?: string;  // Hover icon color
//   className?: string;       // Additional styling
// }

// export default function RippleButton({
//   text,
//   href,
//   icon,
//   bgColor = "#151515",
//   hoverBgColor = "#ffffff",
//   textColor = "#ffffff",
//   hoverTextColor = "#000000",
//   iconColor = "#ffffff",
//   hoverIconColor = "#000000",
//   className = "",
// }: RippleButtonProps) {
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const rippleRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const btn = btnRef.current;
//     const ripple = rippleRef.current;
//     if (!btn || !ripple) return;

//     const handleEnter = (e: MouseEvent) => {
//       gsap.killTweensOf([btn, ripple]);
//       const rect = btn.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       gsap.set(ripple, { left: x, top: y, scale: 0, opacity: 0.4 });

//       // Animate ripple and color change together
//       const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
//       tl.to(ripple, { scale: 12, opacity: 0.6, duration: 1 })
//         .to(btn, { backgroundColor: hoverBgColor, color: hoverTextColor, duration: 1 }, "<");

//       // Change icon color instantly
//       const iconEl = btn.querySelector("svg");
//       if (iconEl) gsap.to(iconEl, { color: hoverIconColor, duration: 0.5, ease: "power2.out" });
//     };

//     const handleLeave = () => {
//       gsap.killTweensOf([btn, ripple]);
//       const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//       tl.to(ripple, { opacity: 0, scale: 0, duration: 0.6 })
//         .to(btn, { backgroundColor: bgColor, color: textColor, duration: 0.6 }, "<");

//       const iconEl = btn.querySelector("svg");
//       if (iconEl) gsap.to(iconEl, { color: iconColor, duration: 0.5, ease: "power2.inOut" });
//     };

//     btn.addEventListener("mouseenter", handleEnter);
//     btn.addEventListener("mouseleave", handleLeave);

//     return () => {
//       btn.removeEventListener("mouseenter", handleEnter);
//       btn.removeEventListener("mouseleave", handleLeave);
//     };
//   }, [bgColor, hoverBgColor, textColor, hoverTextColor, iconColor, hoverIconColor]);

//   return (
//     <button
//       ref={btnRef}
//       onClick={() => router.push(href)}
//       className={`relative cursor-pointer overflow-hidden flex items-center gap-4 rounded-full ps-6 pe-4 py-2.5 font-medium ${className}`}
//       style={{ backgroundColor: bgColor, color: textColor }}
//     >
//       {/* Ripple Layer */}
//       <div
//         ref={rippleRef}
//         className="absolute w-10 h-10 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
//         style={{ opacity: 0 }}
//       ></div>

//       <p className="relative z-10">{text}</p>
//       {icon && (
//         <span className="relative z-10 text-3xl" style={{ color: iconColor }}>
//           {icon}
//         </span>
//       )}
//     </button>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface RippleButtonProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  iconColor?: string;
  hoverIconColor?: string;
  rippleColor?: string;
  className?: string;
}

export default function RippleButton({
  text,
  href,
  icon,
  bgColor = "#151515",
  hoverBgColor = "#ffffff",
  textColor = "#ffffff",
  hoverTextColor = "#000000",
  iconColor = "#ffffff",
  hoverIconColor = "#000000",
  rippleColor = "#ffffff",
  className = "",
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const btn = btnRef.current;
    const ripple = rippleRef.current;
    const txt = textRef.current;
    const ic = iconRef.current;
    if (!btn || !ripple || !txt || !ic) return;

    // Apply initial inline styles so GSAP has stable starting values
    btn.style.backgroundColor = bgColor;
    btn.style.color = textColor;
    ic.style.color = iconColor;
    // try to also set fill to icon wrapper (covers some svgs)
    ic.querySelectorAll("svg").forEach((s) => {
      (s as SVGElement).setAttribute("fill", iconColor);
      (s as SVGElement).style.color = iconColor;
    });

    // style ripple color
    ripple.style.backgroundColor = rippleColor;

    let isHovering = false;

    const handleEnter = (e: MouseEvent) => {
      isHovering = true;
      gsap.killTweensOf([btn, ripple, txt, ic]);

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(ripple, { left: x, top: y, scale: 0, opacity: 0.35 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ripple expand
      tl.to(ripple, { scale: 12, opacity: 0.7, duration: 1.05 }, 0);

      // background + text
      tl.to(
        btn,
        { backgroundColor: hoverBgColor, duration: 0.8, ease: "power3.out" },
        0
      );
      tl.to(
        txt,
        { color: hoverTextColor, duration: 0.55, ease: "power3.out" },
        0
      );

      // icon: animate both color & svg fill (covers most cases)
      tl.to(
        ic,
        { color: hoverIconColor, duration: 0.55, ease: "power3.out" },
        0
      );
      // also animate inner SVG fill attribute for safety
      ic.querySelectorAll("svg").forEach((s) => {
        tl.to(
          s,
          {
            // gsap can animate attributes via an object with attr plugin, but
            // animating style.fill & style.color covers almost all needs
            duration: 0.55,
            ease: "power3.out",
            onStart: () => {
              (s as SVGElement).style.fill = hoverIconColor;
              (s as SVGElement).style.color = hoverIconColor;
            },
          },
          0
        );
      });
    };

    const handleMove = (e: MouseEvent) => {
      if (!isHovering) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(ripple, {
        left: x,
        top: y,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      isHovering = false;
      gsap.killTweensOf([btn, ripple, txt, ic]);

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.to(ripple, { opacity: 0, scale: 0, duration: 0.6 }, 0);
      tl.to(btn, { backgroundColor: bgColor, duration: 0.6 }, 0);
      tl.to(txt, { color: textColor, duration: 0.45 }, 0.05);
      tl.to(ic, { color: iconColor, duration: 0.45 }, 0.05);

      ic.querySelectorAll("svg").forEach((s) => {
        tl.to(
          s,
          {
            duration: 0.45,
            ease: "power2.inOut",
            onStart: () => {
              (s as SVGElement).style.fill = iconColor;
              (s as SVGElement).style.color = iconColor;
            },
          },
          0.05
        );
      });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, [
    bgColor,
    hoverBgColor,
    textColor,
    hoverTextColor,
    iconColor,
    hoverIconColor,
    rippleColor,
  ]);

  return (
    <button
      ref={btnRef}
      onClick={() => router.push(href)}
      className={`relative cursor-pointer overflow-hidden flex items-center gap-4 rounded-full ps-6 pe-4 py-2 font-medium transition-all ${className}`}
      // initial inline styles are set inside useEffect for GSAP; these are safe fallbacks if effect hasn't run yet
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Ripple */}
      <div
        ref={rippleRef}
        className="absolute w-10 h-10 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0, backgroundColor: rippleColor }}
      />

      <p ref={textRef} className="relative z-10">
        {text}
      </p>

      {icon && (
        <span ref={iconRef} className="relative z-10 text-3xl" style={{ color: iconColor }}>
          {icon}
        </span>
      )}
    </button>
  );
}
