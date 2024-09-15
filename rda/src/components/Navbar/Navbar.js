"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import rda from "../../../public/Assets/logo/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 glassmorphism rounded-[1rem] w-full h-[10%] mt-[5rem] md:mt-[7rem] flex justify-between items-center px-8 lg:px-36">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex justify-start items-center">
          <Image src={rda} height={50} width={50} alt="Royal Digital Agency" />
        </div>
      </Link>

      {/* Desktop Menu (Hidden on mobile) */}
      <div className="hidden xl:flex justify-center items-center">
        <SlideTabs />
      </div>

      {/* Hamburger Menu Button (Visible on mobile) */}
      <div className="xl:hidden flex items-center mx-auto">
        <button onClick={toggleMenu} className="text-[#f5f5f5]">
          {!isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.5, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 w-full h-screen bg-black flex flex-col items-center justify-center"
        >
          <ul className="flex flex-col gap-6 text-2xl font-bold">
            <li onClick={toggleMenu} className="text-[#f5f5f5] link-hover">
              <Link href="/Services">Services</Link>
            </li>
            <li onClick={toggleMenu} className="text-[#f5f5f5] link-hover">
              <Link href="/OurWork">Work</Link>
            </li>
            <li onClick={toggleMenu} className="text-[#f5f5f5] link-hover">
              <Link href="/About">About</Link>
            </li>
            <li onClick={toggleMenu} className="text-[#f5f5f5] link-hover">
              <Link href="/Inquire">Inquire</Link>
            </li>
            <li onClick={toggleMenu} className="text-[#f5f5f5] link-hover">
              <Link href="/CaseStudies">Case Studies</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit p-1"
    >
      <Tab setPosition={setPosition}>
        <Link href="/Services">Services</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/OurWork">Work</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/About">About</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/Inquire">Inquire</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/CaseStudies">Case Studies</Link>
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-10 py-1.5 text-xs uppercase text-[#f5f5f5] md:px-5 md:py-3 md:text-lg"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-[1rem] bg-[#F9C349] md:h-12"
    />
  );
};
