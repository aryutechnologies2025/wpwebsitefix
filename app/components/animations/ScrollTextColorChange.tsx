'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextColorChangeProps {
  text: string;
  className?: string;
  startColor?: string;
  endColor?: string;
  delay?:number
}

const ScrollTextColorChange: React.FC<ScrollTextColorChangeProps> = ({
  text,
  className = "",
  startColor = "#D3D3D3",
  endColor = "#000000",
  delay
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const wrappedText = text
      .split(/(\s+)/)
      .map((part) => {
        if (part.trim() === "") return part;
        const letters = part
          .split("")
          .map(
            (char) =>
              `<span class="letter inline-block align-baseline">${char}</span>`
          )
          .join("");
        return `<span class="word inline-block whitespace-nowrap">${letters}</span>`;
      })
      .join("");

    el.innerHTML = wrappedText;

    const letters = el.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { color: startColor },
      {
        color: endColor,
        stagger: 0.03,
        ease: "none",
        delay:delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );
  }, [text, startColor, endColor,delay]);

  return <p ref={textRef} className={` ${className}`}></p>;
};

export default ScrollTextColorChange;
