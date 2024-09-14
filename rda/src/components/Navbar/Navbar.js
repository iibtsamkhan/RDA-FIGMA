"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import rda from "../../../public/Assets/logo/logo.png";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 glassmorphism rounded-[1rem] w-[100%] lg:w-[80%] h-[10%] mt-[5rem] md:mt-[7rem] flex justify-between items-center px-36 lg:px-8">
      <Link href={"/"}>
        <div className="flex justify-end items-start" >
          <Image src={rda} height={100} width={100} alt="Royal Digital Agency" />
        </div>
      </Link>
      <div className=" xl:flex justify-center items-end ">
        <SlideTabs />
      </div>
      {/* <div className="hidden xl:block">
      <MagicButton
          title="Book A Free Call"
          icon={<FaLocationArrow />}
          position="right"
      />
        <span className="ml-2">
          <MagicButton
            title="Get Free Audit"
            icon={<FaLocationArrow />}
            position="right"
          />
        </span>
      </div> */}
      {/* <div className="xl:hidden flex items-center">
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
      </div> */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0.8, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.2, y: -20 }} // Fade away and move up slightly when exiting
          transition={{
            delay: 0.2,
            duration: 0.3, // Adjust duration for a smoother fade out
            ease: "easeInOut",
          }}
          className="absolute h-[100vh] w-full top-20 p-10 left-0 right-0 bg-transparent rounded-[1rem] flex flex-col items-start justify-start gap-32"
        >
          <ul className="flex text-3xl font-bold flex-col items-end">
            <motion.li
              onClick={toggleMenu}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-[#f5f5f5] py-2 link-hover"
            >
              <Link href={"/Services"}>Services </Link>
            </motion.li>
            <motion.li
              onClick={toggleMenu}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="text-[#f5f5f5] py-2 link-hover"
            >
              <Link href="">Work </Link>
            </motion.li>
            <motion.li
              onClick={toggleMenu}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="text-[#f5f5f5] py-2 link-hover"
            >
              <Link href={"/About"}>About </Link>
            </motion.li>
            <motion.li
              onClick={toggleMenu}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="text-[#f5f5f5] py-2 link-hover"
            >
              <Link href="">Inquire </Link>
            </motion.li>
            <motion.li
              onClick={toggleMenu}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="text-[#f5f5f5] py-2 link-hover"
            >
              <Link href="">Why us?</Link>
            </motion.li>
          </ul>
          {/* <div className="py-4 flex flex-col gap-3" onClick={toggleMenu}>
            <BtnPrimary
              url=""
              title="Book a Free Call"
            />
            <BtnLight
              title="Get Free Audit"
              url=""
            />
          </div> */}
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
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit p-1"
    >
      <Tab setPosition={setPosition}>
        <Link href={"/Services"}>Services </Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/OurWork">Work </Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href={"/About"}>About </Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/Inquire">Inquire </Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link href="/CaseStudies">Case Studies </Link>
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
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-[1rem]  bg-[#F9C349] md:h-12"
    />
  );
};
