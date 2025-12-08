// "use client";
// import React, { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// declare global {
//   interface Window {
//     __lenisControls?: {
//       pause: () => void;
//       resume: () => void;
//       instance?: unknown;
//     } | undefined;
//   }
// }

// export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     // create single Lenis instance
//     const lenis = new Lenis({
//       duration: 1.4,
//       lerp: 0.035,
//       wheelMultiplier: 1.15,
//       touchMultiplier: 1.4,
//     });

//     // keep an internal paused flag for safety
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     (lenis as any)._paused = false;

//     // safe helpers that always reference this instance
//     const pause = () => {
//       // try {
//         // preferred API
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         if (typeof lenis?.stop === "function") lenis.stop();
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         else if (typeof lenis?.cancel === "function") lenis.cancel();
//       // } catch (e) {
//         // ignore
//       // }
//       // set internal flag used by raf guard below
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       lenis._paused = true;
//     };

//     const resume = () => {
//       // try {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         if (typeof lenis?.start === "function") lenis.start();
//         // if start not exist, try nothing — the raf guard will allow raf to run again
//       // } catch (e) {
//         // ignore
//         // console.log(e)
//       // }
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       lenis._paused = false;
//     };

//     // attach to window for global access + debugging
//     if (typeof window !== "undefined") {
//       window.__lenisControls = {
//         pause,
//         resume,
//         instance: lenis,
//       };
//     }

//     // RAF loop that respects internal paused flag
//     let rafId = 0;
//     const loop = (time: number) => {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       if (!lenis._paused) {
//         // try {
//           lenis.raf(time);
//         // } catch (e) {
//           // ignore runtime errors
//         // }
//       }
//       // try {
//         ScrollTrigger.update();
//       // } catch (e) {
//         // ignore
//       // }
//       rafId = requestAnimationFrame(loop);
//     };

//     rafId = requestAnimationFrame(loop);

//     return () => {
//       cancelAnimationFrame(rafId);
//       // try {
//         lenis.destroy();
//       // } catch (e) {}
//       if (typeof window !== "undefined") {
//         window.__lenisControls = undefined;
//       }
//     };
//   }, []);

//   return <>{children}</>;
// }



"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenisControls?: {
      pause: () => void;
      resume: () => void;
      instance?: unknown;
    } | undefined;
  }
}

type LenisWithPause = Lenis & {
  _paused?: boolean;
  stop?: () => void;
  cancel?: () => void;
  start?: () => void;
  raf: (time: number) => void;
};


export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      lerp: 0.035,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.4,
    }) as LenisWithPause;

    lenis._paused = false;

    const pause = () => {
      if (typeof lenis.stop === "function") lenis.stop();
      else if (typeof lenis.cancel === "function") lenis.cancel();
      lenis._paused = true;
    };

    const resume = () => {
      if (typeof lenis.start === "function") lenis.start();
      lenis._paused = false;
    };

    if (typeof window !== "undefined") {
      window.__lenisControls = {
        pause,
        resume,
        instance: lenis,
      };
    }

    let rafId = 0;
    const loop = (time: number) => {
      if (!lenis._paused) {
        lenis.raf(time);
      }

      ScrollTrigger.update();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (typeof window !== "undefined") {
        window.__lenisControls = undefined;
      }
    };
  }, []);

  return <>{children}</>;
}
