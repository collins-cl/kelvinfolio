import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const Logo = () => {
  useGSAP(() => {
    gsap.to(".logo p", { opacity: 1, ease: "power2.out", delay: 1 });
  });
  return (
    <div className="logo">
      <Link href="/">
        <p>KElvin.folio™</p>
      </Link>
    </div>
  );
};

export default Logo;
