
import React from "react";
import home_explore_our_work_image1 from "../../assets/images/home-explore-our-work-image1.svg";
import home_explore_our_work_image2 from "../../assets/images/home-explore-our-work-image2.svg";
import home_explore_our_work_image3 from "../../assets/images/home-explore-our-work-image3.svg";
import Image from "next/image";
import { MaskedTextReveal, SectionsTopSmallHeading } from "..";

const cards = [
  {
    title: "Site Audit & Backup",
    description:
      "Backup We perform full site audits, update WordPress, themes, and plugins, and create secure backups to protect your data and maintain SEO health.",
    image: home_explore_our_work_image1,
  },
  {
    title: "Optimization & Protection",
    description:
      "We optimize performance, clean spam, fix broken links, compress images, and secure your site to improve speed, user experience, and search rankings.",
    image: home_explore_our_work_image2,
  },
  {
    title: "Monitoring & Reports",
    description:
      "We monitor uptime, errors, and SEO performance continuously, providing clear monthly reports with actionable insights to keep your website secure and efficient.",
    image: home_explore_our_work_image3,
  },
];

export const HomeMaintenanceProcessWork = () => {
  return (
    <section className="p-6 md:p-12 lg:p-20">
      <SectionsTopSmallHeading displayText="Process" />

      {/* Headings */}
      <div className="flex flex-col md:flex-row items-start md:items-center font-light mt-5  md:gap-5 text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] flex-wrap">
        <MaskedTextReveal text="How Our Maintenance " className="italic " />
        <MaskedTextReveal text="Process Works" className="font-medium " />
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 mt-10 font-visby">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 sm:gap-5 text-center items-center rounded-3xl shadow-2xl shadow-black/10 p-6 sm:p-8 flex-1"
          >
            <MaskedTextReveal
              text={card.title}
              className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] text-[#3A3A3A] font-bold leading-snug sm:leading-9"
            />

            <MaskedTextReveal
              text={card.description}
              className="text-xs sm:text-sm md:text-base font-medium text-[#585B6F] "
            />

            <div className="w-full max-w-[200px] sm:max-w-[250px]">
              <Image src={card.image} alt='WPWebsiteFix delivers the best WordPress website maintenance services with reliable, expert support.' className="w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMaintenanceProcessWork

