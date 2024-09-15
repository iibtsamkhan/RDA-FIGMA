import Image from "next/image";
import Hero from "@/sections/hero"
import ScrollSection from "@/sections/Scroll";
import BgImage from "../../public/Assets/Graphics/royal-cover.png"
import Work from "@/sections/Work";
import TextEffect from "@/sections/TextEffect";
import Navbar from "@/components/Navbar/Navbar";
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
import BackGroundImage from "../../../public/Assets/Graphics/speedster web app 1.png"
import ServiceCard from "@/sections/GlareCard";
import Img from "../../../public/Assets/Graphics/278 1.png"
import { GiTalk } from "react-icons/gi";
import Speedsternow from "../../../public/Assets/Graphics/speedsternow22.png"
import stock from "../../../public/Assets/Graphics/page_3 1.png"
import mockup from "../../../public/Assets/Graphics/speedsTER APP MOCKUP 1.png"



export default function Services() {
  return (
    <>
        {/* <div className='w-full flex justify-center overflow-hidden bg-[#000000]'>
           
        </div> */}

        <div className="relative w-full h-[700px]">
            <Image 
             src={BackGroundImage}
             alt="Background"
             layout="fill"          
             objectFit="cover"      
             objectPosition="center"
            />
        </div>

        <h1 className="md:text-4xl flex items-center justify-center font-bold h-[110px] mb-10 mt-10">UI/UX Design for Website And App</h1> 

        <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto mt-1 bg-black gap-96"> 
            
            <div className="w-[100%] flex flex-col justify-center items-start mx-auto">
                <p className="font-normal md:text-[20px] mb-10">Overview</p>
                <h1 className="text-[45px] font-bold w-[689px]">We collaborated with Speedster, a Los Angeles delivery company, to create a user-friendly website and mobile app that has significantly improved their operational efficiency.</h1>
            </div>
            <div className="w-[100%] flex flex-col justify-start items-start mx-auto">
                <p className="font-normal md:text-[20px] mb-10">Services</p>
                <p className="text-[25px] leading-[143%] w-[297px]">Growth Marketing, Art Direction, UX/UI Design, Social Media, Graphic Design, Brand Identity
                </p>
            </div>
        </div>

        <div className="w-[100%] flex mt-40">
            <div className="bg-gradient-to-r from-[#081DE8] to-[#F1C561] h-[4px] w-[100%] max-w-[2000px]"></div>
        </div>

        <div className="w-[100%] max-w-[1200px] flex flex-col justify-between items-start mx-auto mt-32 bg-black gap-1">
            <p className="font-normal md:text-[20px] mb-10">OUR CHALLENGE</p>
            <p className="font-bold md:text-[45px]">Develop a user-friendly mobile app and website that reflect the brand&apos;s personality and make it easy for both drivers and customers to find what they need.</p>
            <Image 
            src={Img}
            alt="SkinScience"
            className="mt-[-80px]"
            />
        </div>

        <div className="w-[100%] px-56 ml-28 mt-52 mb-10 flex items-start gap-16 justify-center bg-black">

        <div className="flex-1 bg-black justify-start items-start">
                <Image 
                src={Speedsternow}
                alt="Speedster App"
                className="w-[608px] h-[608px] mt-[-80px]"
                />
        </div>
        <div className="flex-1 bg-black">
            <h1 className='text-[45px] w-[648px] font-bold leading-tight tracking-wide mb-16'>Results. Fast. Forward.</h1>
            <p className='text-[16px] w-[552px] leading-tight tracking-wide mb-16'>Royal Digital Agency is your one-stop shop for rapid digital growth. We partnered with Speedster Delivery to supercharge their online presence. In record time, we delivered a stunning and user-friendly website, attracting their target audience. We also optimized their app store presence, resulting in a combined 15,000 downloads on both Google Play and App Store. Additionally, through strategic digital marketing, we facilitated key business collaborations for Speedster in California, solidifying their local presence. Royal Digital Agency - we get you there, fast.</p>
            {/* <button className='font-bold py-2 px-8 bg-transparent text-[#F1C560] border-2 border-[#F1C560] text-[16px]'>Let’s Talk</button> */}
            <MagicButton
                title="Let's Talk"
                icon={<GiTalk />}
                position="right"
            />
        </div>

        </div>

        <div className="w-[100%] flex mt-40">
            <div className="bg-gradient-to-r from-[#081DE8] to-[#F1C561] h-[4px] w-[100%] max-w-[2000px]"></div>
        </div>


        <div className="w-[100%] max-w-[1200px] flex flex-col justify-between items-start mx-auto mt-32 bg-black gap-1">
            <p className="font-normal md:text-[20px] mb-10">RESPONSIVENESS</p>
            <p className="font-bold md:text-[45px]">Building on the success of the Speedster mobile app, we created a responsive desktop website that seamlessly extends the user experience, allowing customers to conveniently place delivery orders on any device.</p>
            <Image 
            src={stock}
            alt="SkinScience"
            className="mt-16"
            />
        </div>



        <div className="w-[100%] px-56 ml-36 mt-52 mb-10 flex items-start gap-16 justify-center bg-black">
        <div className="flex-1 bg-black">
            <h1 className='text-[45px] w-[648px] font-bold leading-tight tracking-wide mb-16'>Final Thoughts: Results & Impact</h1>
            <p className='text-[16px] w-[552px] leading-tight tracking-wide mb-16'>Our Glendale-based team of digital marketing experts helps businesses of all kinds, from skincare and dentists to sports teams, clothing brands, and even delivery apps, achieve a strong online presence. We combine proven strategies with innovative solutions to grow your business in today&apos;s competitive market.</p>
            {/* <button className='font-bold py-2 px-8 bg-transparent text-[#F1C560] border-2 border-[#F1C560] text-[16px]'>Let’s Talk</button> */}
            <MagicButton
                title="Learn more"
                icon={<GiTalk />}
                position="right"
            />
        </div>

        <div className="flex-1 bg-black justify-end items-end">
                <Image 
                src={Speedsternow}
                alt="Speedster App"
                className="w-[608px] h-[608px] mt-[-80px]"
                />
        </div>

        </div>


        <div className="w-[100%] max-w-[1000px] flex flex-col justify-between items-start mx-auto mt-32 mb-60 bg-black gap-1">
            <Image 
            src={mockup}
            alt="mockup"
            />
        </div>

        <FooterSection />
    </>  
  )
}