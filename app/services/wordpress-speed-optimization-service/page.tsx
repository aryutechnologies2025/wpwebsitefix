import {  WordpressSpeedOptimizationService } from "../../data";

import dynamic from "next/dynamic";
const ServicesHeroSection = dynamic(() =>
  import("@/app/components/sections/ServicesHeroSection")
);

const ServicesIncludesSection = dynamic(() =>
  import("@/app/components/sections/ServicesIncludesSection")
);

const ServiceOurProcessSection = dynamic(() =>
  import("@/app/components/sections/ServiceOurProcessSection")
);

const ServiceWhatSetUsApart = dynamic(() =>
  import("@/app/components/sections/ServiceWhatSetUsApart")
);

const CtaSection = dynamic(() =>
  import("@/app/components/sections/CtaSection")
);

const FaqSection = dynamic(() =>
  import("@/app/components/sections/FaqSection")
);

const DarkThemeCtaSection = dynamic(() =>
  import("@/app/components/sections/DarkThemeCtaSection")
);


export const metadata= {
  title: " WordPress SEO Services",
  description:
    "Boost traffic, improve visibility, and grow your business with our expert WordPress SEO services. Start today to rank higher and reach the right audience.",
  keywords: 'WordPress SEO Services'
};
const page = () => {

  
const { heroData, includesData, processData, setUsApartData, faqData } =
    WordpressSpeedOptimizationService;

  return (
    <div>
      <ServicesHeroSection heroData={heroData} />
      <ServicesIncludesSection includesData={includesData} />
      <ServiceOurProcessSection processData={processData} />
      <ServiceWhatSetUsApart setUsApartData={setUsApartData} />
      <CtaSection />
      <FaqSection faqData={faqData}/>
      <DarkThemeCtaSection/>
    </div>
  );
};

export default page;
