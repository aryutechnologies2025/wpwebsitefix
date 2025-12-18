"use client";
import React from "react";
import { Header } from "../layout";
import { MaskedTextReveal, ScrollTextColorChange } from "../animations";
import service1 from "../../assets/images/service1.svg";
import service2 from "../../assets/images/service2.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const wordpressDevelopmentData = [
  {
    title: "WordPress Website Design & Development Services",
    description:
      "We craft modern, responsive and high-performing wordpress websites tailored to your brand. Our focus is on clean layouts, smooth navigation and a flawless user experience from start to finish.",
    href: "/services/wordpress-website-design-development-services",
  },
  {
    title: "WordPress Theme Development Service",
    description:
      "We build custom wordpress themes that perfectly match your brand identity. from unique layouts to pixel-perfect ui, our themes are lightweight, fast and fully optimized.",
    href: "/services/wordpress-theme-development-services",
  },
  {
    title: "WordPress WooCommerce Development Services",
    description:
      "Our woocommerce solutions help you create powerful online stores with seamless checkout flows, secure payments and user-friendly product pages that maximize conversions.",
    href: "/services/wordpress-woocommerce-development-services",
  },
  {
    title: "WordPress Plugin Development Service",
    description:
      "We develop custom plugins to extend your website’s functionality. Whether it's automation, integrations or unique features, our plugins are secure, scalable and performance-friendly.",
    href: "/services/wordpress-plugin-development-services",
  },

  {
    title: "WordPress Landing Pages Design & Development",
    description:
      "We design high-converting landing pages that combine minimal design, strong messaging and smooth interactions perfect for campaigns, ads, promotions and lead generation.",
    href: "/services/wordpress-landing-pages-design-development",
  },
  {
    title: "WordPress SEO Services",
    description:
      "We optimize your wordpress site for search visibility with clean site structure, optimized content, schema setup, mobile-friendly design and technical seo improvements to increase organic traffic.",
    href: "/services/wordpress-seo-services",
  },
];

const wordpressMaintenanceData = [
  {
    title: "wordpress migration services",
    description:
      "we safely migrate your website to a new host, domain, or server with zero data loss, zero downtime, and a fully preserved design and structure.",
    href: "/services/wordpress-migration-services",
  },

  {
    title: "wordpress bug fixing service",
    description:
      "We identify and fix errors, broken layouts, plugin conflicts, and backend issues to make your website stable, reliable, and error-free.",
    href: "/services/wordpress-bug-fixing-service",
  },
  {
    title: "wordpress multilingual & headless cms development",
    description:
      "We create multilingual wordpress websites and build headless cms setups for brands that need faster performance, scalable architecture, and api-driven front-end experiences.",
    href: "/services/wordpress-multilingual-headless-cms-development",
  },
  {
    title: "wordpress speed optimization service",
    description:
      "We optimize your website loading speed with caching, image compression, code cleanup, database tuning, and performance enhancements for a smoother user experience.",
    href: "/services/wordpress-speed-optimization-service",
  },
  {
    title: "wordpress security service",
    description:
      "We protect your site with advanced security hardening, malware removal, firewall setup, and continuous monitoring to keep your wordpress environment safe.",
    href: "/services/wordpress-security-service",
  },
  {
    title: "wordpress update services",
    description:
      "We keep your wordpress core, themes, and plugins updated to ensure smooth performance, maximum compatibility, and improved security without any downtime issues.",
    href: "/services/wordpress-update-services",
  },
];

const ServicePageHero = () => {
  const router = useRouter();
  return (
    <section className="">
      <Header />

      <div className=" font-poppins ">
        <div className="mx-auto px-6 md:px-12 lg:px-20 pt-6 md:pt-12 lg:pt-20 text-center  flex sm:block flex-wrap ">
          <MaskedTextReveal
            text="Full WordPress Development, "
            className="text-[36px] sm:text-[48px] md:text-[64px] leading-10 sm:leading-none italic font-light"
          />

          <MaskedTextReveal
            text="Maintenance & Optimization"
            className="text-[36px] sm:text-[48px] md:text-[64px] leading-10 sm:leading-normal  font-medium"
          />
        </div>

        <ScrollTextColorChange
          text="From initial development to long-term care, we manage your entire WordPress lifecycle with updates, backups, security scans, and speed improvements."
          className="text-[#656565] text-lg text-center font-medium font-visby px-6 md:px-12 lg:px-20 mt-5 leading-8 md:w-[75%] mx-auto"
        />

        <div className="space-y-8 md:space-y-12 lg:space-y-24 mt-24  md:px-12 lg:px-20">
          {/* Wordpress Development */}
          <section className="relative overflow-hidden bg-linear-to-r from-[#FF8640] to-[#9F3800] rounded-[45px] p-5 sm:p-12 lg:p-16">
            <Image
              src={service1}
              width={300}
              height={200}
              alt="a"
              className="absolute  -right-30 -top-20 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 scale-150 opacity-100 pointer-events-none animate-pulse"
            />

            <div className="-space-y-4 sm:-space-y-6 relative z-10">
              <MaskedTextReveal
                text="Wordpress development"
                className="text-[30px] sm:text-[42px] md:text-[54px] font-medium text-white"
              />
            </div>

            <ScrollTextColorChange
              startColor="#F9B487"
              endColor="white"
              text="our wordpress development services deliver fast, responsive and fully customized websites designed to elevate your brand. we offer end-to-end solutions including theme development, plugins, woocommerce, seo and landing pages to ensure smooth performance and scalability."
              className="font-medium font-visby leading-7 sm:leading-8 mt-4 sm:mt-6 md:w-[80%] lg:w-[65%] relative z-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 text-white mt-10 relative z-10">
              {wordpressDevelopmentData.map((item, index) => (
                <div
                  onClick={() => router.push(item.href)}
                  key={index}
                  className="border cursor-pointer border-[#FFFFFF]/50 rounded-3xl sm:rounded-4xl p-5 hover:bg-white/5 hover:scale-95  transition-all duration-500 "
                >
                  <p className="text-xl sm:text-2xl font-semibold">
                    {item.title}
                  </p>

                  <p className="font-visby mt-3 sm:mt-4 leading-6 sm:leading-7">
                    {item.description}
                  </p>

                  {/* <MaskedTextReveal
                    text={item.title}
                    className="text-xl sm:text-2xl font-semibold"
                  />

                  <MaskedTextReveal
                    text={item.description}
                    className="font-visby mt-3 sm:mt-4 leading-6 sm:leading-7"
                  /> */}
                </div>
              ))}
            </div>
          </section>

          {/* Wordpress Maintenance */}
          <section className="relative overflow-hidden bg-linear-to-r from-[#FF8640] to-[#9F3800] rounded-[45px] p-5 sm:p-12 lg:p-16">
            <Image
              src={service2}
              width={300}
              height={200}
              alt="a"
              className="absolute -right-24 rotate-12 -top-5 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-92 lg:h-85 scale-150 opacity-40 animate-pulse sm:opacity-60 md:opacity-100 pointer-events-none"
            />

            <div className="-space-y-4 sm:-space-y-6 relative z-10">
              <MaskedTextReveal
                text="Wordpress maintenance"
                className="text-[30px] sm:text-[42px] md:text-[54px] font-medium text-white"
              />
            </div>

            <ScrollTextColorChange
              startColor="#F9B487"
              endColor="white"
              text="our wordpress maintenance services ensure your website stays secure, updated and running smoothly at all times. from updates, bug fixes and security checks to speed optimization and migrations, we keep your site stable and performance-ready."
              className="font-medium font-visby leading-7 sm:leading-8 mt-4 sm:mt-6 md:w-[80%] lg:w-[65%] relative z-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 text-white mt-10 relative z-10">
              {wordpressMaintenanceData.map((item, index) => (
                <div
                  onClick={() => router.push(item.href)}
                  key={index}
                  className="border border-[#FFFFFF]/50 hover:scale-97 cursor-pointer rounded-3xl sm:rounded-4xl p-5 hover:bg-white/5  transition-all duration-500"
                >
                  {/* <p className="text-xl sm:text-2xl font-semibold">
                    {item.title}
                  </p> */}
                  <MaskedTextReveal
                    text={item.title}
                    className="text-xl sm:text-2xl font-semibold"
                  />
                  <MaskedTextReveal
                    text={item.description}
                    className="font-visby mt-3 sm:mt-4 leading-6 sm:leading-7"
                  />
                  {/* <p className="font-visby mt-3 sm:mt-4 leading-6 sm:leading-7">
                    {item.description}
                  </p> */}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
