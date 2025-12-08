"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import {
  CountUpOnScroll,
  Header,
  HoverTextGoTopButton,
  MaskedTextReveal,
} from "../../components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import gradient5 from "../../assets/images/gradient5.svg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { name: "150+", subTitle: "WordPress projects completed" },
  { name: "100k+", subTitle: "Page Views Optimized" },
  { name: "99.9%", subTitle: "On-Time Delivery" },
  { name: "12+", subTitle: "Years Experience" },
];

const Home_Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Animate gradient background efficiently
  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      keyframes: [
        { backgroundPosition: "0% 0%" },
        { backgroundPosition: "50% 50%" },
        { backgroundPosition: "100% 0%" },
        { backgroundPosition: "50% 50%" },
        { backgroundPosition: "0% 0%" },
      ],
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative min-h-[110dvh] md:min-h-[120vh] overflow-hidden">
      {/* Mobile Static Gradient (NO animation) */}
      <div
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          backgroundImage: `
      radial-gradient(circle at 50% 40%, #FF6107 0%, transparent 80%),
      radial-gradient(circle at 20% 60%, #FE457D 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, #FBD500 0%, transparent 60%)
    `,
          backgroundBlendMode: "screen",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Animated Gradient Background (Tablet & Desktop) */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 max-md:hidden"
        style={{
          backgroundImage: `
      radial-gradient(circle at 50% 40%, #FF6107 0%, transparent 90%),
      radial-gradient(circle at 20% 30%, #FE457D 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, #FBD500 0%, transparent 60%),
      radial-gradient(circle at 70% 80%, #FDC9AC 0%, transparent 60%)
    `,
          backgroundBlendMode: "screen",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Background Image */}
      <Image
        alt="gradient background"
        src={gradient5}
        fill
        className="-z-20 w-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute w-full h-full bg-linear-to-b from-transparent from-90% md:from-80% to-white z-10" />

      {/* Header */}
      <Header shadow={false} />

      {/* Hero Content */}
      <div className="relative z-20 w-full xl:w-[90%] p-6 md:p-12 lg:p-20 text-white">
        {/* Top Label */}
        <div className="flex items-center gap-2 text-sm sm:text-base mb-4 sm:mb-6">
          <CiGlobe className="text-xl sm:text-2xl" />
          <MaskedTextReveal text="| WordPress Website Maintenance Services" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug sm:leading-tight md:leading-tight mt-2 tracking-tighter">
          <MaskedTextReveal text="We use our WordPress expertise to power your online presence" />
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2  sm:flex flex-wrap sm:flex-nowrap gap-x-10 gap-y-6 mt-8 sm:mt-12 font-visby text-sm sm:text-base md:text-lg">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-start ">
              <CountUpOnScroll
                target={item.name}
                className="text-base sm:text-lg md:text-xl font-extrabold"
                duration={2}
                delay={0.5}
              />
              <MaskedTextReveal delay={0.5} text={item.subTitle} />
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-10 sm:mt-16 hidden md:block">
          <HoverTextGoTopButton
            topText="Contact Us"
            bottomText="Contact"
            href="/contact-us"
            textColor="white"
            className="ps-5 pe-2 py-2.5 sm:ps-6  font-medium rounded-full flex items-center gap-3"
            bgColor="black"
            icon={<BsArrowRightCircleFill size={35} />}
            iconClassName=""
            iconColor="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Home_Hero;
