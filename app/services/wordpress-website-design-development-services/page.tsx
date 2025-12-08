import { WordpressWebsiteDesignDevelopmentServices } from "../../data";

import dynamic from "next/dynamic";
const ServicesHeroSection = dynamic(
  () => import("@/app/components/sections/ServicesHeroSection")
);

const ServicesIncludesSection = dynamic(
  () => import("@/app/components/sections/ServicesIncludesSection")
);

const ServiceOurProcessSection = dynamic(
  () => import("@/app/components/sections/ServiceOurProcessSection")
);

const ServiceWhatSetUsApart = dynamic(
  () => import("@/app/components/sections/ServiceWhatSetUsApart")
);

const CtaSection = dynamic(
  () => import("@/app/components/sections/CtaSection")
);

const FaqSection = dynamic(
  () => import("@/app/components/sections/FaqSection")
);

const DarkThemeCtaSection = dynamic(
  () => import("@/app/components/sections/DarkThemeCtaSection")
);

export const metadata = {
  title: "WordPress Website Design & Development Services",
  description:
    "Build a professional, high-performing website with our expert WordPress Website Design & Development Services. Start today to enhance your online presence.",
  keywords: "WordPress Website Design & Development Services",
};

const page = () => {
  const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressWebsiteDesignDevelopmentServices;

  return (
    <div>
      <ServicesHeroSection heroData={heroData} />
      <ServicesIncludesSection includesData={includesData} />
      <ServiceOurProcessSection processData={processData} />
      <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
      <CtaSection />
      <FaqSection faqData={faqData} />
      <DarkThemeCtaSection />
    </div>
  );
};

export default page;
