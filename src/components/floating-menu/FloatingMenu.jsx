"use client";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../logo/Logo";
import "./FloatingMenu.scss";

const FloatingMenu = () => {
  useGSAP(() => {});
  const [work, setWork] = useState("WORKS");
  const lookAlikeMap = {
    A: "@",
    B: "8",
    E: "3",
    I: "1",
    L: "1",
    O: "0",
    S: "5",
    T: "7",
    Z: "2",
    K: ">",
  };

  return (
    <section className="floating-menu">
      <ul>
        <Logo />

        <div>
          <Link href="/">works (8)</Link>
        </div>
        <div>
          <Link href="/">about</Link>
        </div>
        <div>
          <Link href="/">archive</Link>
        </div>

        <div>
          <p className="title">Contact</p>
          <div className="contact-details">
            <a href="tel:+">
              <p>08060015910</p>
            </a>

            <a href="mailto:">
              <p>kelvinchuks41@gmail.com</p>
            </a>
          </div>
        </div>

        <div>
          <p className="title">facebook</p>
          <div className="contact-details">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              kelvin.chuks
            </a>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default FloatingMenu;
