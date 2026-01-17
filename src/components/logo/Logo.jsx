import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

const Logo = () => {
  const logoIconRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    console.log(gsap.utils.toArray(".logo-icon")); // Check if the element is found

    tl.to(".logo p", { opacity: 1, ease: "power2.out", delay: 1 });
    tl.fromTo(
      logoIconRef.current,
      { scale: 0.5 },
      {
        scale: 1.5,
        // ease: "back.out(1.7)",
        // delay: 1,
      }
    );
  }, []);
  return (
    <div className="logo">
      <Link href="/">
        <p>
          KElvin.folio
          <span className="logo-icon" ref={logoIconRef}>
            ™
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
