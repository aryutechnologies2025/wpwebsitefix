





"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SectionsTopSmallHeadingProps {
  displayText: string;
  containerBg?: string;
  dotBg?: string;
  className?: string;
  displayTextColor?: string;
  border?: boolean;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SectionsTopSmallHeading: React.FC<SectionsTopSmallHeadingProps> = ({
  displayText,
  containerBg = "#F3F3F3",
  dotBg = "#FF6107",
  displayTextColor = "#000000",
  border = false,
  delay = 100,
  className,
  duration = 0.9,
  ease = "power3.out",
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  /** FIXED: No more synchronous setState inside effect */
  useEffect(() => {
    const checkFonts = () => {
      requestAnimationFrame(() => setFontsLoaded(true)); // safe async state update
    };

    if (document.fonts.status === "loaded") {
      checkFonts();
    } else {
      document.fonts.ready.then(checkFonts);
    }
  }, []);

  /** GSAP Animation after fonts are loaded */
  useGSAP(
    () => {
      if (!textRef.current || !fontsLoaded) return;

      const el = textRef.current as HTMLElement & { _split?: GSAPSplitText };

      el._split?.revert();

      const split = new GSAPSplitText(el, {
        type: "chars",
        charsClass: "split-char",
      });

      gsap.fromTo(
        split.chars,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            once: true,
          },
          onComplete: onLetterAnimationComplete,
        }
      );

      el._split = split;

      return () => split.revert();
    },
    { dependencies: [displayText, fontsLoaded] }
  );

  return (
    <p
      className={`px-2 md:px-4 rounded-xl py-2 flex w-fit items-center gap-3 ${
        border ? "border border-gray-300" : ""
      } ${className}`}
      style={{ backgroundColor: containerBg, textAlign }}
    >
      <span
        className="w-3 h-3 rounded-full animate-pulse"
        style={{ backgroundColor: dotBg }}
      ></span>

      <span
        ref={textRef}
        className="inline-block text-sm sm:text-base whitespace-pre-wrap"
        style={{ color: displayTextColor }}
      >
        {displayText}
      </span>
    </p>
  );
};

export default SectionsTopSmallHeading;
