"use client";
import React from "react";
import wpfix_logo from "../../assets/icons/wpfix-logo.svg";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { HoverTextGoTopButton } from "../animations";
import { RiFacebookCircleLine, RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import aryuLogo from '../../assets/icons/aryu-logo.svg';

export const Footer = () => {
  return (
    <section className="p-5 sm:p-6 md:p-12 lg:p-20 bg-white">
      {/* Top Section */}
      <div className="flex flex-col flex-wrap md:flex-row md:justify-between md:items-center gap-6 ">
        <div className="shrink-0">
          <Image src={wpfix_logo} alt="logo" />
        </div>

        <p className="text-[#676767] text-center md:text-left">
          Helping brands grow with data-driven strategies and creative
          execution.
        </p>

        <div className="flex gap-5 justify-center md:justify-start text-4xl">
          <Link target="_blank" href="https://www.facebook.com/Fixmywpwebsite">
            <RiFacebookCircleLine className="hover:text-gray-500  transition-all duration-300" />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/company/68914508/admin/dashboard/"
          >
            <TbBrandLinkedin className="hover:text-gray-500  transition-all duration-300" />
          </Link>

          <Link
            href="https://wa.me/9994715106?text=Hello%20there!"
            target="_blank"
          >
            <FaWhatsapp className="hover:text-gray-500  transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-8 md:gap-14 mt-14 md:mt-20">
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14">
          {/* Company */}
          <div>
            <p className="text-lg font-medium">Company</p>
            <div className="flex flex-col gap-2 md:gap-4 mt-5 md:mt-8">
              <Link
                href="/"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg font-medium">Maintenance Services</p>
            <div className="flex flex-col gap-2 md:gap-4 mt-5 md:mt-8">
              <Link
                href="/services/wordpress-bug-fixing-service"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Bug Fixing Service
              </Link>

              <Link
                href="/services/wordpress-migration-services"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Migration Services
              </Link>
              <Link
                href="/services/wordpress-security-service"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Security Services
              </Link>
              <Link
                href="/services/wordpress-speed-optimization-service"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Speed Optimization Services
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-lg font-medium">Development Services</p>
            <div className="flex flex-col gap-2 md:gap-4 mt-5 md:mt-8">
              <Link
                href="/services/wordpress-seo-services"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress SEO Services
              </Link>

              <Link
                href="/services/wordpress-plugin-development-services"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Plugin Development Services
              </Link>
              <Link
                href="/services/wordpress-theme-development-services"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress Theme Development Services
              </Link>
              <Link
                href="/services/wordpress-woocommerce-development-services"
                className="text-[#868484] hover:text-black transition-all duration-500"
              >
                WordPress WooCommerce Development Services
              </Link>
            </div>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex flex-col gap-3 mt-8 lg:mt-0">
          <HoverTextGoTopButton
            topText="Get a Consultation"
            bottomText="Contact us"
            bgColor="white"
            textColor="#FF6B00"
            border={true}
            borderColor="#FF6B00"
            className="px-12 py-2.5 w-full lg:w-auto"
          />

          <HoverTextGoTopButton
            topText="Contact Our Team"
            bottomText="React us"
            bgColor="#FF6B00"
            textColor="white"
            icon={<BsArrowRightCircleFill size={20} />}
            className="px-12 py-3 w-full lg:w-auto"
            iconColor="white"
          />
        </div> */}
         <div className=" flex flex-col  flex-wrap gap-y-2 md:gap-y-4">
          <p className="  font-medium">Crafting Excellence With</p>

          <a href="https://aryutechnologies.com/" target="_blank">
            <Image
              src={aryuLogo}
              height={16}
              width={26}
              alt="a"
              className="w-20 h-16 md:w-28 md:h-20"
            />
          </a>

          <p className="   md:font-medium">
            Aryu Technologies
          </p>

          <div className="flex flex-wrap gap-x-3">
            <a
              href="https://www.instagram.com/aryutechnologies/"
              target="_blank"
            >
              <RiInstagramFill className="text-white  rounded-full bg-blue-600 p-1 text-2xl md:text-3xl cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61560790628495"
              target="_blank"
            >
              <FaFacebook className="text-white rounded-full bg-blue-600 p-1 text-2xl md:text-3xl cursor-pointer " />
            </a>

            <a
              href="https://www.linkedin.com/company/103279912/admin/dashboard/"
              target="_blank"
            >
              <FaLinkedin className="text-white rounded-full bg-blue-600 p-1 text-2xl md:text-3xl cursor-pointer " />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border border-[#BCBCBC] mt-10 md:mt-16" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-2 md:gap-0 ">
        <p>© WPFix Website 2025. All rights reserved.</p>

        <Link href="/terms-and-conditions">Terms & Conditions.</Link>

        <a href="https://aryutechnologies.com/" target="_blank" className="">
            <div className="flex gap-2 transition-all duration-500">
              <p>Powered by Aryu Technologies</p>
              <Image
                src={aryuLogo}
                height={16}
                width={26}
                alt="aryu logo"
              />
            </div>
          </a>
      </div>
    </section>
  );
};
