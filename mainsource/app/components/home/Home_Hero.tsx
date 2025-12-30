"use client";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import {
  CountUpOnScroll,
  Header,
  HoverTextGoTopButton,
  MaskedTextReveal,
  ScrollTextColorChange,
  SectionsTopSmallHeading,
} from "../../components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import gradient5 from "../../assets/images/gradient5.svg";
import { IoIosStar } from "react-icons/io";
import upwork_logo from "../../assets/icons/upwork_logo.svg";
import { GrLocation } from "react-icons/gr";

import teamImage1 from "../../assets/images/teamImage1.png";
import teamImage2 from "../../assets/images/teamImage2.png";
import { BsLightningCharge } from "react-icons/bs";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import homeHeroTopRatedPlusLogo from "../../assets/icons/homeHeroTopRatedPlusLogo.svg";
import homeHeroTopRatedLogo from "../../assets/icons/homeHeroTopRatedLogo.svg";
import homeHeroJobSuccessLogo from "../../assets/icons/homwHeroJobSuccessLogo.svg";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import bw_earth_sphere from "../../assets/images/b&w-earth-sphere.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Home_Hero = () => {
  const router = useRouter();

  return (
    <section className="relative  overflow-hidden">
      {/* Background Image */}
      <Image
        alt="gradient background"
        src={gradient5}
        fill
        className="-z-20 w-full max-h-screen object-cover md:-mt-20 lg:-mt-30"
      />

      <div className="absolute w-full h-full -z-30 bg-black"></div>

      {/* Header */}
      <Header shadow={false} />

      {/* Hero Content */}
      <div className="relative z-20 w-full xl:w-[90%] p-6 md:p-12 lg:p-20  text-white">
        {/* Top Label */}
        <div className="flex items-center gap-2 text-sm sm:text-base mb-4 sm:mb-6">
          <CiGlobe className="text-xl sm:text-2xl" />
          <MaskedTextReveal text="| WordPress Website Maintenance Services" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug sm:leading-tight md:leading-tight mt-2 tracking-tighter">
          <MaskedTextReveal as="h1" text="We use our WordPress expertise to power your online presence" />
        </h1>

        <div className="flex items-center gap-2 mt-5">
          <div className="flex">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>

          <p>3000 + Customers</p>
        </div>

        {/* Contact Button */}
        <div className="mt-10 sm:mt-16 hidden md:flex gap-5">
          <HoverTextGoTopButton
            topText="Chat With Us"
            bottomText="Contact"
            href="/contact-us"
            textColor="white"
            className="ps-5 pe-2 py-2.5 sm:ps-6  font-medium rounded-full flex items-center gap-3"
            bgColor="black"
            icon={<BsArrowRightCircleFill size={35} />}
            iconClassName=""
            iconColor="bg-white"
          />

          {/* <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 transition-all duration-500 cursor-pointer text-white  font-medium rounded-full gap-3">
            Our Works
          </button> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 mt-10 sm:mt-16 ">
          {/* ================= CARD 1 ================= */}
          <a
            href="https://www.upwork.com/freelancers/yuvarajthangaraj"
            referrerPolicy="no-referrer"
            target="_blank"
            className="bg-white group hover:scale-95 cursor-pointer  transition-all duration-500 rounded-2xl md:rounded-[20px] px-3 sm:px-8 py-4 lg:w-1/3 grow "
          >
            <div className="relative w-24 h-6 md:w-30 md:h-10 mx-auto">
              <Image src={upwork_logo} alt="upwork_logo" fill />
            </div>

            {/* Header */}
            <div className="flex justify-between gap-6 mt-4">
              <div className="flex gap-2 sm:gap-4 items-start">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                  <Image
                    src={teamImage2}
                    fill
                    alt="teamImage"
                    className="rounded-full absolute  object-cover shrink-0"
                  />
                </div>

                <div>
                  <p className="text-[#0D0D0D] sm:text-lg md:text-xl font-semibold">
                    YUVARAJ.T
                  </p>

                  <div className="flex gap-1 sm:gap-2 text-[#666666] items-center text-sm">
                    <GrLocation />
                    <p>Chennai, India</p>
                  </div>

                  <div className="bg-[#E9DCFF] inline-flex gap-1 mt-2 items-center text-[#410AB0] rounded-full px-3 py-1">
                    <BsLightningCharge />
                    <p className="text-[12px] font-medium">Available Now</p>
                  </div>
                </div>
              </div>

              <BsFillArrowUpRightCircleFill className="size-6  sm:size-10 md:size-12 lg:size-14 xl:size-16 md:-mt-5 group-hover:translate-x-2 group-hover:rotate-45 text-black self-start sm:self-auto transition-all duration-500" />
            </div>

            {/* Job Status */}
            <div className="flex flex-col sm:flex-row flex-wrap mt-3 sm:mt-6 gap-2 sm:gap-4 text-black text-sm sm:text-base lg:text-lg  xl:text-xl font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src={homeHeroJobSuccessLogo}
                  height={24}
                  width={24}
                  alt="job-success"
                />
                <p>100% Job Success</p>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={homeHeroTopRatedPlusLogo}
                  height={24}
                  width={24}
                  alt="top-rated-plus"
                />
                <p>Top Rated Plus</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-2 sm:gap-5 md:gap-8 lg:gap-0 justify-between sm:justify-start lg:justify-between mt-5 sm:mt-8 text-center text-xs sm:text-base">
              <div>
                <div className="text-[#4A4A4A] flex font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  $
                  <CountUpOnScroll target={50} />
                  k+
                </div>
                <p className="text-[#666666] mt-1">Total earnings</p>
              </div>

              <div className="border-l border-[#666666]/30"></div>

              <div>
                <div className="text-[#4A4A4A] font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  <CountUpOnScroll target={43} />
                </div>
                <p className="text-[#666666] mt-1">Total jobs</p>
              </div>

              <div className="border-l border-[#666666]/30"></div>

              <div>
                <div className="text-[#4A4A4A] font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  <CountUpOnScroll target={935} />
                </div>
                <p className="text-[#666666] mt-1">Total hours</p>
              </div>
            </div>
          </a>

          {/* ================= CARD 2 ================= */}
          <a
            href="https://www.upwork.com/freelancers/arunayuvaraj"
            referrerPolicy="no-referrer"
            target="_blank"
            className="bg-white rounded-2xl md:rounded-[20px] group hover:scale-95 cursor-pointer transition-all duration-500 px-3  sm:px-8 py-4 lg:w-1/3 grow "
          >
            <div className="relative w-24 h-6 md:w-30 md:h-10 mx-auto">
              <Image src={upwork_logo} alt="upwork_logo" fill />
            </div>

            <div className="flex justify-between gap-6 mt-4">
              <div className="flex gap-2 sm:gap-4 items-start">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                  <Image
                    src={teamImage1}
                    fill
                    alt="teamImage"
                    className="rounded-full absolute  object-cover shrink-0"
                  />
                </div>

                <div>
                  <p className="text-[#0D0D0D] sm:text-lg md:text-xl font-semibold">
                    ARUNA.V
                  </p>

                  <div className="flex gap-1 sm:gap-2 text-[#666666] items-center text-sm">
                    <GrLocation />
                    <p>Chennai, India</p>
                  </div>

                  <div className="bg-[#E9DCFF] inline-flex gap-1 mt-2 items-center text-[#410AB0] rounded-full px-3 py-1">
                    <BsLightningCharge />
                    <p className="text-[12px] font-medium">Available Now</p>
                  </div>
                </div>
              </div>

              <BsFillArrowUpRightCircleFill className="size-6 sm:size-10 md:size-12 lg:size-14 xl:size-16 md:-mt-5 text-black self-start sm:self-auto group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-500" />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap  mt-3 sm:mt-6 gap-2 sm:gap-4 text-black text-sm sm:text-base lg:text-lg  xl:text-xl font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src={homeHeroJobSuccessLogo}
                  height={24}
                  width={24}
                  alt="job-success"
                />
                <p>100% Job Success</p>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src={homeHeroTopRatedLogo}
                  height={24}
                  width={24}
                  alt="top-rated"
                />
                <p>Top Rated </p>
              </div>
            </div>

            {/* stats */}
            <div className="flex  gap-2 sm:gap-5 justify-between sm:justify-start  md:gap-8 lg:gap-0 lg:justify-between mt-5 sm:mt-8 text-center text-xs sm:text-base">
              <div>
                <div className="text-[#4A4A4A] flex font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  $
                  <CountUpOnScroll target={20} />
                  k+
                </div>
                <p className="text-[#666666] mt-1">Total earnings</p>
              </div>

              <div className="border-l border-[#666666]/30"></div>

              <div>
                <div className="text-[#4A4A4A] font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  <CountUpOnScroll target={71} />
                </div>
                <p className="text-[#666666] mt-1">Total jobs</p>
              </div>

              <div className="border-l border-[#666666]/30"></div>

              <div>
                <div className="text-[#4A4A4A] font-semibold text-base sm:text-lg xl:text-xl lg:text-2xl">
                  <CountUpOnScroll target={407} />
                </div>
                <p className="text-[#666666] mt-1">Total hours</p>
              </div>
            </div>
            {/* </div> */}
          </a>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-8">
        {/* Earth BG */}
        <div className="absolute -z-10 left-0 md:-left-14 bottom-0 md:-bottom-20  w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] pointer-events-none">
          <Image
            src={bw_earth_sphere}
            alt="WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support."
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Top heading and description */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <SectionsTopSmallHeading displayText="About Us" />

          <ScrollTextColorChange
            text="We help businesses strengthen their websites with expert WordPress website maintenance services, including performance optimization, security management, ongoing support, and custom development."
            className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/2 text-[#9d9d9d]"
            startColor="gray"
            endColor="#D3D3D3 "
          />
        </div>

        {/* Trusted company section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-9">
          <div></div>
          <div className="flex flex-col gap-3 w-full lg:w-1/2">
            <p className="text-white">Explore our socials</p>
            <hr className="border-[#DDDDDD] w-full" />

            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-2 sm:gap-5 justify-center md:justify-start text-3xl sm:text-4xl">
                <Link
                  className="h-fit"
                  target="_blank"
                  href="https://www.facebook.com/Fixmywpwebsite"
                >
                  <RiFacebookCircleLine className="text-white hover:text-[#FF6107] h-fit transition-all duration-300" />
                </Link>

                <Link
                  target="_blank"
                  className="h-fit"
                  href="https://www.linkedin.com/company/68914508/admin/dashboard/"
                >
                  <TbBrandLinkedin className="text-white hover:text-[#FF6107]  transition-all duration-300" />
                </Link>

                <Link
                  className="h-fit"
                  href="https://wa.me/9994715106?text=Hello%20there!"
                  target="_blank"
                >
                  <FaWhatsapp className="text-white hover:text-[#FF6107]  transition-all duration-300" />
                </Link>
              </div>

              <button
                onClick={() => router.push("/about-us")}
                className="group flex items-center gap-5  rounded-full border border-[#DDDDDD] hover:border-[#FF6107] w-fit ps-5 pe-2 py-1.5 md:py-2.5 sm:ps-6 cursor-pointer transition-all duration-500 hover:bg-[#FF6107] hover:text-white hover:shadow-[0_4px_20px_rgba(255,97,7,0.3)]"
              >
                <span className="transition-all duration-500 text-sm sm:text-base text-white group-hover:translate-x-1">
                  About Us
                </span>
                <BsArrowRightCircleFill className="size-7 sm:size-8 md:size-10 transition-transform duration-500 group-hover:rotate-[-35deg] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Hero;
