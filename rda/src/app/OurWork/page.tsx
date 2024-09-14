import Image from "next/image";
import Hero from "@/sections/hero"
import ScrollSection from "@/sections/Scroll";
import BgImage from "../../public/Assets/Graphics/royal-cover.png"
import Work from "@/sections/Work";
import TextEffect from "@/sections/TextEffect";
import Navbar from "@/components/Navbar/Navbar";
import GlobeComponent from "@/sections/Globe";
import LampBackgroundEffect from "../../sections/LampBackground";
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import CallToAction from "@/sections/CTA";
import TestimonialsScrollCard from "@/sections/MovingCards";
import FooterSection from "@/components/Footer";
import LogoSlider from "@/components/SliderComponent/Logo";
import VelocityScroll from "@/components/Text/VelocityScroll";
import Cards from "@/sections/CardsHover";
import MagicButton from "@/components/ui/MagicButton";
import { FaBullhorn } from "react-icons/fa6";
import { FormEvent, useState } from "react"; 
import Link from 'next/link'
import WorkTabs from "@/sections/TabSection";
import WorkCarousel from "@/sections/WorkCarousel"


export default function Services() {
  return (
    <>
        <div className='w-full flex justify-center overflow-hidden bg-[#000000]'>
            <Navbar />
        </div>   
                <div className="max-w-[80%] mx-auto px-8 mt-[10rem]">
                    <h1 className="text-white text-[48px] font-bold leading-tight">
                    Our Work  
                    </h1>
                </div>
     

        <div className="w-[100%] flex mt-28">
            <div className="bg-gradient-to-r from-[#081DE8] to-[#F1C561] h-[4px] w-[100%] max-w-[2000px]"></div>
        </div>

        <div className="flex w-full justify-center items-center">
           <WorkTabs />
        </div>

        {/* <WorkCarousel /> */}

        <FooterSection />
    </>  
  )
}