"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import wpfix_logo from "../../assets/icons/wpfix-logo.svg";
import Link from "next/link";
import serviceImage1 from "../../assets/images/serviceHeroImage1.jpg";
import serviceImage2 from "../../assets/images/serviceHeroImage2.jpg";
import serviceImage3 from "../../assets/images/serviceHeroImage3.jpg";
import serviceImage4 from "../../assets/images/serviceHeroImage4.jpg";
import { HoverTextGoTopButton } from "../../components";
import { usePathname } from "next/navigation";

interface HeaderProps {
  shadow?: boolean;
}

// === Development Services ===
const devServices = [
  {
    title: "WordPress Landing Pages Design & Development",
    href: "/services/wordpress-landing-pages-design-development",
  },
  {
    title: "WordPress SEO Services",
    href: "/services/wordpress-seo-services",
  },
  {
    title: "WordPress Plugin Development Services",
    href: "/services/wordpress-plugin-development-services",
  },
  {
    title: "WordPress WooCommerce Development Services",
    href: "/services/wordpress-woocommerce-development-services",
  },
  {
    title: "WordPress Theme Development Services",
    href: "/services/wordpress-theme-development-services",
  },
  {
    title: "WordPress Website Design & Development Services",
    href: "/services/wordpress-website-design-development-services",
  },
];

// === Maintenance Services ===
const maintenanceServices = [
  {
    title: "WordPress Bug Fixing Service",
    href: "/services/wordpress-bug-fixing-service",
  },
  {
    title: "WordPress Migration Services",
    href: "/services/wordpress-migration-services",
  },
  {
    title: "WordPress Multilingual Headless CMS Development",
    href: "/services/wordpress-multilingual-headless-cms-development",
  },
  {
    title: "WordPress Security Services",
    href: "/services/wordpress-security-service",
  },
  {
    title: "WordPress Speed Optimization Services",
    href: "/services/wordpress-speed-optimization-service",
  },
  {
    title: "WordPress Update Services",
    href: "/services/wordpress-update-services",
  },
];

export const Header = ({ shadow = true }: HeaderProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("development");

  const pathname = usePathname();
  const linkClass = (href: string) =>
    `transition-all duration-500 ${
      pathname === href
        ? "text-[#FF6107]"
        : "text-[#1E1E1E] hover:text-[#FF6107]/70"
    }`;

  const mobileLinkClass = (href: string) =>
    `text-3xl font-bold transition-all duration-300 pl-4 border-l-4 ${
      pathname === href || pathname.startsWith("/wordpress-")
        ? "text-[#FF6107] border-[#FF6107]"
        : "text-gray-800 border-transparent hover:text-[#FF6107]"
    }`;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full relative z-50">
      <div className="mx-6 md:mx-12 lg:mx-20  mt-5 z-20 relative ">
        <div
          style={{
            boxShadow:
              "-8px 0px 18px 0px #7575751A, -33px 0px 33px 0px #75757517, -74px 0px 44px 0px #7575750D, -131px 0px 52px 0px #75757503, -205px 0px 57px 0px #75757500",
          }}
          className={`bg-white flex justify-between items-center px-6 md:px-10 lg:px-16 py-1 sm:py-2 rounded-full ${
            shadow
              ? "shadow-[-8px_0px_18px_0px_#7575751A,-33px_0px_33px_0px_#75757517,-74px_0px_44px_0px_#7575750D,-131px_0px_52px_0px_#75757503,-205px_0px_57px_0px_#75757500]"
              : ""
          }`}
        >
          {/* === Logo === */}
          {/* <div className="relative w-32 md:w-40 h-10 md:h-12"> */}
          <Image
            src={wpfix_logo}
            alt="logo"
            // fill
            className="object-contain w-32  h-10 md:h-12"
          />
          {/* </div> */}

          {/* === Desktop Nav === */}
          <div className="max-md:hidden flex gap-12 font-semibold font-visby ">
            <Link
              href="/"
              // className="text-[#1E1E1E] hover:text-[#FF6107] transition-all duration-500"

              className={linkClass("/")}
            >
              Home
            </Link>

            {/* === DESKTOP MEGA MENU === */}
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <p
                className={`cursor-pointer transition-all duration-500 ${
                  pathname.startsWith("/services")
                    ? "text-[#FF6107] hover:text-[#FF6107]/70"
                    : "text-[#1E1E1E] hover:text-[#FF6107]/70"
                }`}
              >
                Services
              </p>

              {/* === FULL WIDTH MEGA MENU CONTAINER === */}
              <div
                className={`absolute mx-auto left-1/2 text-center -translate-x-1/2 top-full w-[90vw]  mt-1 bg-white rounded-3xl shadow-xl transition-all duration-500 origin-top ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-2 scale-95 invisible"
                }`}
              >
                <div className="w-full  p-10 grid grid-cols-4 justify-between  gap-10">
                  {/* Left Column */}
                  <div className="w-fit">
                    <ul className="space-y-4 text-xl ">
                      <li
                        className={`cursor-pointer transition duration-1000 ${
                          activeCategory === "development"
                            ? "font-bold text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveCategory("development")}
                      >
                        {/* Development */}
                        <HoverTextGoTopButton
                          href=""
                          className={`p-3 ${
                            activeCategory === "development"
                              ? "text-2xl transition-all duration-700"
                              : ""
                          }`}
                          topText="Development"
                          bottomText="Development"
                        />
                      </li>

                      <li
                        className={`cursor-pointer transition ${
                          activeCategory === "maintenance"
                            ? "font-bold text-black"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveCategory("maintenance")}
                      >
                        <HoverTextGoTopButton
                          href=""
                          className={`p-3 ${
                            activeCategory === "maintenance" ? "text-2xl" : ""
                          }`}
                          topText="  Maintenance"
                          bottomText="  Maintenance"
                        />
                      </li>
                    </ul>
                  </div>

                  {/* Middle Columns show services based on clicked tab */}
                  <div className="  w-full col-span-2 gap-3 flex flex-col items-center">
                    {(activeCategory === "development"
                      ? devServices
                      : maintenanceServices
                    ).map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className={`block py-1 text-lg transition ${
                          pathname === service.href
                            ? "text-[#FF6107] font-semibold"
                            : "hover:text-[#FF6E1B]/70"
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  {/* Right Column - Images */}
                  <div className=" grid grid-cols-3 gap-4 ">
                    <Image
                      src={serviceImage1}
                      alt="demo"
                      className="rounded-lg col-span-2 w-full h-full object-cover"
                    />
                    <Image
                      src={serviceImage2}
                      alt="demo"
                      className="rounded-lg h-full w-full object-cover"
                    />
                    <Image
                      src={serviceImage3}
                      alt="demo"
                      className="rounded-lg h-full w-full object-cover"
                    />
                    <Image
                      src={serviceImage4}
                      width={200}
                      height={150}
                      alt="demo"
                      className="rounded-lg w-full h-full col-span-2 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about-us"
              // className="text-[#1E1E1E] hover:text-[#FF6107] transition-all duration-500"
              className={linkClass("/about-us")}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              // className="text-[#1E1E1E] hover:text-[#FF6107] transition-all duration-500"
              className={linkClass("/contact-us")}
            >
              Contact Us
            </Link>
          </div>

          {/* === Mobile Hamburger === */}
          <div className=" md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* === Mobile Menu === */}
      <div
        className={`md:hidden  fixed inset-0 max-h-dvh overflow-hidden bg-white z-5000 
    transition-all duration-700 ease-in-out
    ${
      isMobileMenuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
    overflow-y-auto`}
      >
        <div className="flex justify-between items-center mx-12  pt-6 ">
          <div className="relative w-32 h-10">
            <Image
              src={wpfix_logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col mx-12 mt-16 space-y-6 font-visby">
          <Link href="/" className={mobileLinkClass("/")}>
            Home
          </Link>

          <Link
            href="/wordpress-maintenance-and-development-services"
            className={mobileLinkClass(
              "/wordpress-maintenance-and-development-services"
            )}
          >
            Services
          </Link>
          <Link href="/about-us" className={mobileLinkClass("/about-us")}>
            About Us
          </Link>
          <Link href="/contact-us" className={mobileLinkClass("/contact-us")}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
