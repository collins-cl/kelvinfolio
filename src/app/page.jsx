import Hero from "@/components/hero/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";


gsap.registerPlugin(ScrambleTextPlugin, useGSAP)

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
