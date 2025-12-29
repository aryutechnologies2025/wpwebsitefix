
"use client";
import { CiGlobe } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import {
  MaskedTextReveal,
  ScrollTextColorChange,
  SectionsTopSmallHeading,
} from "../../components";
import { useRouter } from "next/navigation";

 const Home_About_Section = () => {
  const router = useRouter();

  return (
    <section className="p-6 md:p-12 lg:p-20">
      {/* Top heading and description */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        <SectionsTopSmallHeading displayText="About Us" />

        <ScrollTextColorChange
          text="We help businesses strengthen their websites with expert WordPress website maintenance services, including performance optimization, security management, ongoing support, and custom development."
          className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/2 text-[#9d9d9d]"
          startColor="#D3D3D3"
          endColor="#000000"
        />
      </div>

      {/* Trusted company section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-9">
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <CiGlobe className="text-3xl font-semibold shrink-0 h-full" />
          <div className="border border-r h-7"></div>
          <MaskedTextReveal
            text="Trusted WordPress Maintenance Company Worldwide"
            className="text-[#111111] w-full lg:w-2/3"
          />
        </div>

        <div className="flex flex-col gap-3 w-full lg:w-1/2">
          <hr className="border-[#DDDDDD] w-full" />
          <button
            onClick={() => router.push("/about-us")}
            className="group flex items-center gap-5 mt-3 rounded-full border border-[#DDDDDD] hover:border-[#FF6107] w-fit px-5 py-3.5 cursor-pointer transition-all duration-500 hover:bg-[#FF6107] hover:text-white hover:shadow-[0_4px_20px_rgba(255,97,7,0.3)]"
          >
            <span className="transition-all duration-500 group-hover:translate-x-1">
              About Us
            </span>
            <BsArrowRight className="transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-[-35deg]" />
          </button>
        </div>
      </div>    
    </section>
  );
};

export default Home_About_Section

