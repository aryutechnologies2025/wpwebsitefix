import dynamic from "next/dynamic";

const AboutHero = dynamic(() => import("../components/about/AboutHero"));
const AboutOurValue = dynamic(() =>
  import("../components/about/AboutOurValue")
);
const AboutMeetOurTeam = dynamic(() =>
  import("../components/about/AboutMeetOurTeam")
);
const CtaSection = dynamic(() =>
  import("../components/sections/CtaSection")
);

export const metadata = {
  title: "about us wordpress",
  description:
    "Learn about WPWebsiteFix — your trusted partner for WordPress maintenance, security, speed optimization, and custom development for long-term website success.",
  keywords: "about us wordpress",
};


export default function Page() {
  return (
    <div>
      <AboutHero />
      <AboutOurValue />
      <AboutMeetOurTeam />
      <CtaSection />
    </div>
  );
}
