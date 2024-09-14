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
import Contact from "@/components/Contact";
import { SOCIALS } from '@/components/constants'
import Link from 'next/link'
import BackGroundImage from "../../../public/Assets/Graphics/Screen Shot 2024-07-02 at 11.38 1.png"
import ServiceCard from "@/sections/GlareCard";


export default function Services() {
  return (
    <>
        <div className='w-full flex justify-center overflow-hidden bg-[#000000]'>
            <Navbar />
        </div>

        <div className="relative w-full h-[700px]">
            <Image 
             src={BackGroundImage}
             alt="Background"
             layout="fill"          
             objectFit="cover"      
             objectPosition="center"
            />

            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[100%] max-w-[1200px] text-left">
                    <h1 className="text-white text-[48px] font-bold leading-tight">
                    We are a full-service agency specializing in growth marketing by providing deliverables in Design, Social Media, UX/UI, and Content Creation.
                    </h1>
                </div>
            </div>
        </div>

        <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-1 bg-black gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start mx-auto">
                <h1 className="text-[30px] font-bold">We Specialize In</h1>
            </div>
            <div className="w-[50%] flex flex-col justify-start items-start mx-auto">
                <p className="text-[25px] leading-[143%]">Content Creation  |  Social Media  |  Graphic Design  |  
                    UX/UI Design  |  Influencer Marketing  |  App Development | 
                    Web Development  | Videography & Video Editing |
                    Social Media Ads  |  Search Engine Optimization  | Branding | Lead Generation
                </p>
            </div>
        </div>

        <div className="w-[100%] flex mt-40">
            <div className="bg-gradient-to-r from-[#081DE8] to-[#F1C561] h-[4px] w-[100%] max-w-[2000px]"></div>
        </div>

        <div className="flex w-full justify-center items-center">
            <ServiceCard />
        </div>

        <FooterSection />
    </>  
  )
}