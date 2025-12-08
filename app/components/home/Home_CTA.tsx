import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import {
  HoverTextGoTopButton,
  MaskedTextReveal,
  ScrollTextColorChange,
} from "../../components";

export const Home_CTA = () => {
  return (
    <section className="p-6 md:p-12 lg:p-20 text-center flex flex-col items-center gap-8 font-visby">

      {/* Heading */}
      <div className="text-[38px] md:text-[60px] lg:text-[80px] font-medium leading-tight md:leading-[1.1] lg:leading-[1.1]">
        <MaskedTextReveal text="Talk to Real Experts" />

        <div className="flex flex-wrap justify-center">
          <MaskedTextReveal text="Get Real Results" />
          <MaskedTextReveal
            text="Results."
            className="italic text-[#FF6B00] font-medium ms-2"
          />
        </div>
      </div>

       

      {/* Description */}
      <div className="w-full md:w-[80%] lg:w-[70%] mx-auto text-base md:text-lg lg:text-xl">
        <ScrollTextColorChange
          text="Whether it’s website repair, malware removal, or fixing a slow site,
          we restore hacked, broken, or underperforming WordPress websites
          quickly and reliably"
          startColor="#D3D3D3"
          endColor="black"
          className="font-medium leading-relaxed"
        />
      </div>

      {/* CTA Button */}
      <HoverTextGoTopButton
        topText="Start Site Maintenance"
        bottomText="Contact Us"
        href="/contact-us"
        bgColor="#FF6B00"
        textColor="white"
        borderColor="#474747"
        icon={<BsArrowRightCircleFill size={28} />}
        className="font-medium px-6 py-3 md:px-8 md:py-4"
        iconColor="white"
      />
    </section>
  );
};

export default Home_CTA

