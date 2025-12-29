"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface SmoothTextRevealProps {
  text: string;
  className?: string;
  start?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
}

const SmoothTextReveal: React.FC<SmoothTextRevealProps> = ({
  text,
  className = "",
  start = "top 85%",
  delay = 0,
  duration = 1,
  stagger = 0.025,
  ease = "power3.out",
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: "word",
    });

    split.words.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "bottom";
      wrapper.style.willChange = "transform, opacity";
      wrapper.style.paddingRight = "0.05em"; // tiny padding to prevent clipping
      // wrapper.style.paddingBottom = "0.09em"; // tiny padding to prevent clipping
      word.parentNode?.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.words,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          stagger,
          scrollTrigger: {
            trigger: textRef.current,
            start,
            toggleActions: "play none none reverse",
            // toggleActions: "play reverse play reverse", // repeat on scroll in & out
          },
        }
      );
    }, textRef);

    return () => {
      split.revert();
      ctx.revert();
    };
  }, [delay, duration, stagger, start, ease]);

  return (
    <p ref={textRef} className={` overflow-hidden  ${className}`}>
      {text}
    </p>
  );
};

export default SmoothTextReveal;
