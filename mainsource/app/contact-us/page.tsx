import dynamic from "next/dynamic";

const ContactHero = dynamic(() =>
  import("../components/contact/ContactHero")
);

const ContactSecondSection = dynamic(() =>
  import("../components/contact/ContactSecondSection")
);

const CtaSection = dynamic(() =>
  import("../components/sections/CtaSection")
);

export const metadata = {
  title: "contact us",
  description:
    "Need help with WordPress? Contact WPWebsiteFix for expert maitenance, security, updates, and reliable support to keep your website performing at its best.",
  keywords: "contact us wordpress",
};


export default function Page() {
  return (
    <div>
      <ContactHero />
      <ContactSecondSection />
      <CtaSection />
    </div>
  );
}
