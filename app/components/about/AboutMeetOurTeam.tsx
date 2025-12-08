"use client";
import React, { useEffect, useRef } from "react";
import { MaskedTextReveal } from "../../components";
import teamImage1 from "../../assets/images/teamImage1.png";
import teamImage2 from "../../assets/images/teamImage2.png";
import teamImage3 from "../../assets/images/teamImage3.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMeetOurTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎥 Scroll-based cinematic dolly zoom
      imageRefs.current.forEach((wrapper, index) => {
        const img = wrapper.querySelector("img");
        if (!img) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 95%",
            end: "top 30%",
            scrub: 4,
          },
        });

        tl.fromTo(
          img,
          {
            scale: 1.1,
            yPercent: -10,
            rotationX: 3,
            rotationY: 2 * (index % 2 ? -1 : 1),
            filter: "blur(10px) brightness(0.85)",
          },
          {
            scale: 1.2,
            yPercent: 10,
            rotationX: -3,
            rotationY: -2 * (index % 2 ? -1 : 1),
            filter: "blur(0px) brightness(1)",
            ease: "power2.inOut",
          }
        );
      });

      // 🌀 Hover tilt effect
      imageRefs.current.forEach((wrapper) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = wrapper.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * 6;
          const rotateY = ((x - centerX) / centerX) * -6;

          gsap.to(wrapper, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.03,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const resetTilt = () => {
          gsap.to(wrapper, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "power3.out",
            duration: 0.6,
          });
        };

        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseleave", resetTilt);

        return () => {
          wrapper.removeEventListener("mousemove", handleMouseMove);
          wrapper.removeEventListener("mouseleave", resetTilt);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-6 md:p-12 lg:p-20 overflow-hidden perspective-distant"
    >
      {/* Heading */}
      <MaskedTextReveal
        text="Meet Our Team"
        className="text-[36px] sm:text-[44px] md:text-[57px] font-bold text-center"
      />

      <div className="flex justify-center mt-4">
        <MaskedTextReveal
          text="We Are an Evergrowing Team of Thinkers, Problem Solvers, and Succeeders, Who are Committed to Your Exponential Growth."
          className="text-center text-[#000000B2] text-sm sm:text-base md:text-lg lg:w-2/3"
        />
      </div>

      {/* Team Members */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-10">
        {[
          { img: teamImage1, name: "Aruna Yuvaraj", role: "Managing Director" },
          { img: teamImage2, name: "Yuvaraj T", role: "Founder" },
          { img: teamImage3, name: "Kanimozhi", role: "Senior Developer" },
        ].map((member, i) => (
          <div
            key={i}
            className="text-center font-visby w-full sm:w-[300px] md:w-[280px] lg:w-[420px] "
          >
            <div
              className="group w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] will-change-transform"
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
            >
              {/* Gradient glow */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />

              {/* Image */}
              <Image
                src={member.img}
                alt="WPWebsiteFix team providing WordPress maintenance, security, speed optimization, and support services."
                fill
                className="object-cover rounded-2xl will-change-transform"
              />
            </div>

            <p className="mt-3 text-[16px] sm:text-[18px] md:text-[19px] font-bold">
              {member.name}
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#00000080]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default AboutMeetOurTeam