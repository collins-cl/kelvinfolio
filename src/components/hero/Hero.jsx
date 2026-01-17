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
    const tl = gsap.timeline({
      ease: "power2.inOut",
    });

    tl.to(".job-abbr p", {
      scrambleText: {
        text: "CIV/CSE",
        chars: "01",
        duration: 1.5,
      },
    }).fromTo(
      ".hero-about p",
      {
        opacity: 0,
      },
      { opacity: 1 },
      "<0.5"
    );
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

      <div className="floating-menu-container">
        <FloatingMenu />
      </div>
    </div>
  );
};

export default Hero;
