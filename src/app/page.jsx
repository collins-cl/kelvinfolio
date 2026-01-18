"use client"

import Hero from "@/components/hero/Hero";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./Page.scss"

export default function Home() {
  const leaderRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const leader = leaderRef.current;
    const follower = followerRef.current;

    // Start both at center-ish
    gsap.set([leader, follower], {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // leader: snaps faster
      gsap.to(leader, {
        x,
        y,
        duration: 0.12,
        ease: "power3.out",
      });

      // follower: lags behind
      gsap.to(follower, {
        x,
        y,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div>
      <>
        <div ref={followerRef} className="arrow follower" />
        <div ref={leaderRef} className="arrow leader" />
      </>
      <Hero />
    </div>
  );
}
