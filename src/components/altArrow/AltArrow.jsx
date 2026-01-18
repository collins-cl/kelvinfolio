"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./AltArrow.scss";

export default function ArrowFollow() {
  const cursor = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const cursorMove = (x, y) => {
    gsap.to(cursor.current, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
      ease: "expo",
      delay: 0.05,
    });
  };

  const mouseMoveManage = (event) => {
    const { clientX, clientY } = event;
    mouse.current = { x: clientX, y: clientY };
    cursorMove(mouse.current.x, mouse.current.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveManage);

    return () => window.removeEventListener("mousemove", mouseMoveManage);
  });

  return (
    <>
      <div ref={cursor} className="cursor"></div>
    </>
  );
}
