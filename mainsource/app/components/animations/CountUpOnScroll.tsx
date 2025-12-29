"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpOnScrollProps {
  target: string | number; // e.g. "100+" or 2500
  className?: string;
  duration?: number;
  once?: boolean;
  delay?:number;
}

const CountUpOnScroll: React.FC<CountUpOnScrollProps> = ({
  target,
  className = "",
  duration = 2,
  once = true,
  delay
}) => {
  const elRef = useRef<HTMLParagraphElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const targetText = target.toString();
    const num = parseFloat(targetText.replace(/[^0-9.]/g, ""));
    const suffix = targetText.replace(/[0-9.]/g, "");
    const obj = { value: 0 };

    // Create ScrollTrigger and store it in a ref for cleanup
    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          value: num,
          duration,
          ease: "power4.out",
          delay:delay,
          onUpdate: () => {
            el.textContent = `${obj.value.toFixed(
              num % 1 === 0 ? 0 : 1
            )}${suffix}`;
          },
        });
      },
      once,
    });

    // Clean up only this trigger instance
    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
    };
  }, [target, duration, once,delay]);

  return (
    <p ref={elRef} className={className}>
      0
    </p>
  );
};

export default CountUpOnScroll;
