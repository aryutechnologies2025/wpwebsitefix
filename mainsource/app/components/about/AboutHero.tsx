// import React from "react";
// import { Header } from "../layout";
// import {
//   AnimatedGradientText,
//   CountUpOnScroll,
//   MaskedTextReveal,
//   ScrollTextColorChange,
// } from "../../components";

// export const AboutHero = () => {
//   return (
//     <section className="min-h-screen">
//       <Header />

//       <div className="p-20 font-visby">
//         <p className=" text-[#00000099] tracking-widest">ABOUT US</p>

//         <div className="text-[62px] font-extrabold leading-16 mt-6">
//           <MaskedTextReveal text="          We Power the WordPress Behind Tomorrow’s" />

//           <AnimatedGradientText
//             text="Billion-Dollar Brands"
//             colors={["#FE457D", "#FBD500", "#FE457D"]}
//             duration={10}
//             reverse={true}
//             loop={true}
//             className="text-6xl font-extrabold font-poppins"
//           />
//         </div>

//         <div className="flex gap-28 mt-24">
//           <p className="shrink-0 text-[#00000099]">WHO WE ARE?</p>

//           <div>
//             <ScrollTextColorChange
//               className="font-medium text-2xl"
//               endColor="black"
//               text=" WPWebsiteFix offers professional WordPress maintenance to protect,
//               optimize, and future-proof your website. With 8 years of
//               experience, we tackle WordPress challenges head-on, ensuring your
//               site runs smoothly and securely. From issue resolution, plugin and
//               theme updates, and security monitoring to SEO optimization, speed
//               improvements, and performance enhancements, we cover all aspects
//               of website care. Our proactive approach prevents downtime, safeguards data, and
//               keeps your site fully functional for your visitors. By combining
//               technical expertise with a deep understanding of business needs,
//               we help you maintain a high-performing, reliable website that
//               drives engagement, builds trust, and maximizes your online impact."
//             />

//             <div className="flex gap-36 mt-20">
//               <div>
//                 <CountUpOnScroll
//                   target="10K+"
//                   className="text-[73px] font-semibold"
//                   duration={2}
//                   delay={0.5}
//                 />

//                 <p className="text-[#00000099] text-lg">Completed Project</p>
//               </div>

//               <div>
//                 <CountUpOnScroll
//                   target="50K+"
//                   className="text-[73px] font-semibold"
//                   duration={2}
//                   delay={0.5}
//                 />

//                 <p className="text-[#00000099] text-lg">Happy Clients</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




import React from "react";
import { Header } from "../layout";
import {
  AnimatedGradientText,
  CountUpOnScroll,
  MaskedTextReveal,
  ScrollTextColorChange,
} from "../../components";

 const AboutHero = () => {
  return (
    <section className="">
      <Header />

      <div className=" p-6 md:p-12 lg:p-20 font-visby">
        <p className="text-[#00000099] tracking-widest">ABOUT US</p>

        <div className="text-[42px] md:text-[52px] lg:text-[62px] font-extrabold leading-[1.2] mt-6">
          <MaskedTextReveal text="We Power the WordPress Behind Tomorrow’s" />

          <AnimatedGradientText
            text="Billion-Dollar Brands"
            colors={["#FE457D", "#FBD500", "#FE457D"]}
            duration={10}
            reverse={true}
            loop={true}
            className="text-[42px] md:text-[52px] lg:text-[62px] font-extrabold "
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-12 md:mt-24">
          <p className="shrink-0 text-[#00000099] text-base md:text-lg">WHO WE ARE?</p>

          <div className="flex-1">
            <ScrollTextColorChange
              className="font-medium text-lg md:text-xl"
              endColor="black"
              text="WPWebsiteFix offers professional WordPress maintenance to protect, optimize, and future-proof your website. With 8 years of experience, we tackle WordPress challenges head-on, ensuring your site runs smoothly and securely. From issue resolution, plugin and theme updates, and security monitoring to SEO optimization, speed improvements, and performance enhancements, we cover all aspects of website care. Our proactive approach prevents downtime, safeguards data, and keeps your site fully functional for your visitors. By combining technical expertise with a deep understanding of business needs, we help you maintain a high-performing, reliable website that drives engagement, builds trust, and maximizes your online impact."
            />

            <div className="flex flex-wrap flex-row gap-6 sm:gap-12 md:gap-36 mt-12 md:mt-20">
              <div>
                <CountUpOnScroll
                  target="10K+"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[73px] font-semibold"
                  duration={2}
                  delay={0.5}
                />
                <p className="text-[#00000099] text-base md:text-lg">Completed Projects</p>
              </div>

              <div>
                <CountUpOnScroll
                  target="50K+"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[73px] font-semibold"
                  duration={2}
                  delay={0.5}
                />
                <p className="text-[#00000099] text-base md:text-lg">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero

