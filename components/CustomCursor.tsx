"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseEnter = () => {
      cursor.classList.add("hover");
    };

    const onMouseLeave = () => {
      cursor.classList.remove("hover");
    };

    document.addEventListener("mousemove", onMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-indigo-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
