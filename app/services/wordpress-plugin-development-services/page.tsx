
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
import { WordPressPluginDevelopmentServices } from "../../data";


export const metadata= {
  title: "WordPress Plugin Development Services",
  description:
    "Enhance your website’s functionality with our expert WordPress Plugin Development Services. Start today to add custom solutions and improve performance.",
      keywords:'WordPress Plugin Development Services'

  
};

const page = () => {
  const{ heroData, includesData, processData, setUsApartData, faqData } =
    WordPressPluginDevelopmentServices;

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
