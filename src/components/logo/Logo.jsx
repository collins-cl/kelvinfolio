import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import "./Logo.scss";

const Logo = () => {
  const logoIconRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
    });

    tl.to(".logo p", { opacity: 1, delay: 1 });
    tl.fromTo(
      logoIconRef.current,
      { opacity: 0 },
      {
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className="logo">
      <Link href="/">
        <p>KElvin.folio</p>
        <p className="logo-icon" ref={logoIconRef}>
          ™
        </p>
      </Link>
    </div>
  );
};

export default Logo;
