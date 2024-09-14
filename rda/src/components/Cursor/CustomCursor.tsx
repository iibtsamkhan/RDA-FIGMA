"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import customCursor from "../../styles/Cursor.module.css"

// Define a type for the event handler to be more specific
const handleMouseMove = (e: MouseEvent, targets: HTMLElement[]) => {
  gsap.to(targets, {
    duration: 0.5,
    x: e.clientX,
    y: e.clientY,
    ease: "power1.out",
    overwrite: "auto",
    stagger: 0.02,
  });
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP settings
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    // Convert all elements with the class `ball` into an array of elements
    const targets = gsap.utils.toArray<HTMLElement>(".ball");

    // Add a mousemove event listener
    const handleMouseMoveBound = (e: MouseEvent) => handleMouseMove(e, targets);

    window.addEventListener("mousemove", handleMouseMoveBound);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveBound);
    };
  }, []);

  return (
    <div className="customCursor">
      <div className="ball bg-[#F9C349] w-5 h-5 fixed top-0 left-0 rounded-full z-[1]"></div>
      <div className="ball bg-[#F9C349] w-5 h-5 fixed top-0 left-0 rounded-full z-[1]"></div>
      <div className="ball bg-[#F9C349] w-5 h-5 fixed top-0 left-0 rounded-full z-[1]"></div>
      <div className="ball bg-[#F9C349] w-5 h-5 fixed top-0 left-0 rounded-full z-[1]"></div>
      <div className="ball bg-[#F9C349] w-5 h-5 fixed top-0 left-0 rounded-full z-[1]"></div>
    </div>
  );
};

export default App;
