"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import FloatingMenu from "../floating-menu/FloatingMenu";
import "../hero/Hero.scss";
import Topbar from "../topbar/Topbar";

const Hero = () => {
  gsap.registerPlugin(ScrambleTextPlugin, useGSAP);

  useGSAP(() => {
    gsap.to(".job-abbr p", {
      duration: 1,
      delay: 0.3,
      scrambleText: {
        text: "CIV/CSE",
        chars: "01",
        // speed: 0.3,
      },
      opacity: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <div id="hero" className="hero-containter">
      <div className="container">
        <Topbar />
      </div>

      <div id="job-abbr" className="job-abbr">
        <p></p>
      </div>

      <div className="hero-about">
        <section className="job-info">
          <p className="job-title">Structural engineer / design</p>

          <p className="job-desc">
            i, Kelvin abuanekwu, provides end-to-end structural engineering
            services, combining accurate analysis, clear documentation, and
            practical design solutions for residential and commercial projects.
          </p>
        </section>

        <p className="current-date">jan 16, 2026</p>
      </div>

      <FloatingMenu />
    </div>
  );
};

export default Hero;
