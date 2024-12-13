import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase text-red-500 md:text-[10px]">
          Welcome to the Spider-Verse
        </p>

        <AnimatedTitle
          title="Explore the multiverse <br /> with <b>Miles Morales</b>"
          containerClass="mt-5 !text-red-500 text-center"
        />

        <div className="about-subtext">
          <p>Your journey begins here—step into the Spider-Verse</p>
          <p className="text-gray-400">
            Join Miles Morales and discover the infinite possibilities across
            the multiverse, where heroes from every dimension unite.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/m2.png"
            alt="Spider-Verse"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
