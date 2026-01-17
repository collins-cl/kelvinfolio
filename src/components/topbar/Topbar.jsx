import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../logo/Logo";
import "../topbar/Topbar.scss";

const Topbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      delay: 0.1,
    });

    tl.fromTo(".topbar", { opacity: 0 }, { opacity: 1 }).fromTo(
      ".topbar ul p",
      { opacity: 0 },
      { opacity: 1 }
    );
  });
  return (
    <div className="topbar">
      <ul>
        <section className="menu-logo">
          <p className="menu-btn">MENU</p>
          <Logo />
        </section>

        <p className="menu-btn">since 2022</p>
      </ul>
    </div>
  );
};

export default Topbar;
