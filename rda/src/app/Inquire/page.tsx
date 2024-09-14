'use client'
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

export default function Inquire() {

  return (
    <>
        <div className='w-full flex justify-center overflow-hidden bg-[#000000]'>
        <Navbar />
        </div>

        <div className="max-w-[80%] mx-auto px-8 mt-[10rem]">
        <h1 className="text-[60px] font-bold w-[646px] h-[90px] leading-[auto]">Let’s talk</h1>
        <div className="underline-art"></div>
        </div>

        <div className="w-[100%] max-w-[1450px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-8 mb-48 bg-black gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start py-5 mx-auto">
                <h1 className="text-[18px] py-3">For new business: inquire@rda.com</h1>

                <div className="flex flex-row justify-center items-center gap-5">
                  <h5 className="text-[18px] py-3">For job inquiries: </h5>
                  <div className="mt-5 text-[]" >
                      <MagicButton
                          title="Career"
                          icon={<FaBullhorn  />}
                          position="right"
                      />
                  </div>
                </div>
                

                <div className="flex flex-row justify-center items-center gap-3">             
                <h5 className="text-[18px] py-3">Follow Us: </h5>
                <div className="flex flex-row gap-4">{SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} className='icon'/>
                    </Link>
                  ))}</div>
                </div>
            </div>
            <Contact />
        </div>

        <FooterSection />
    
    </>
  )
}

