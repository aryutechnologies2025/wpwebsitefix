"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedGradientTextProps {
  text: string;
  colors?: string[];
  duration?: number;
  angle?: number;
  reverse?: boolean;
  loop?: boolean;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  text,
  colors = ["#FE457D", "#FBD500", "#FE457D"],
  duration = 8,
  angle = 90,
  reverse = false,
  loop = true,
  className = "",
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Set up gradient styles
    el.style.background = `linear-gradient(${angle}deg, ${colors.join(", ")})`;
    el.style.backgroundSize = "400% 400%";
    el.style.backgroundClip = "text";
    // (el.style as CSSStyleDeclaration).webkitBackgroundClip = "text";
    el.style.color = "transparent";
    // (el.style as CSSStyleDeclaration).webkitTextFillColor = "transparent";
    el.style.setProperty("-webkit-background-clip", "text");
    el.style.setProperty("-webkit-text-fill-color", "transparent");

    el.style.willChange = "background-position";

    // Create GSAP animation
    const anim = gsap.to(el, {
      backgroundPosition: reverse ? "-400% center" : "400% center",
      ease: "none",
      duration,
      yoyo: true,
      repeat: loop ? -1 : 0,
    });

    // ✅ Proper cleanup — return void function that kills animation
    return () => {
      anim.kill();
    };
  }, [colors, duration, angle, reverse, loop]);

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {text}
    </span>
  );
};

export default AnimatedGradientText;
