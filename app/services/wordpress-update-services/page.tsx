import {  WordpressUpdateService } from "../../data";

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
  title: "WordPress Landing Page Design & Development Services",
  description:
    "Boost conversions, capture leads, and grow your business with our WordPress Landing Pages Design & Development services. Start today to engage visitors.",
  keywords:'WordPress Landing Page Design & Development Services'
};

export default function Page() {
  const {
    heroData,
    includesData,
    processData,
    setUsApartData,
    faqData,
  } = WordpressUpdateService;

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
}
