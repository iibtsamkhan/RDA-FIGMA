import Image from "next/image";
import Hero from "@/sections/hero"
import ScrollSection from "@/sections/Scroll";
// import NavBar from "@/sections/Nav";
import BgImage from "../../public/Assets/Graphics/royal-cover.png"
import Work from "@/sections/Work";
import TextEffect from "@/sections/TextEffect";
import Navbar from "@/components/Navbar/Navbar";
import LampBackgroundEffect from "../sections/LampBackground";
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import CallToAction from "@/sections/CTA";
// import TestimonialItem from "@/components/TestimonialItem";
// import { Testimonial } from '../../public/types';
// import testimonials from '../../public/data';
import TestimonialsScrollCard from "@/sections/MovingCards";
import FooterSection from "@/components/Footer";
import LogoSlider from "@/components/SliderComponent/Logo";
import VelocityScroll from "@/components/Text/VelocityScroll";
import Navigation from "@/components/Navbar/Navigation"





export default function Home() {
  return (
    <>

    <div className="w-full overflow-x-hidden">

      {/* Section with Navbar Lamp Effect and Text Generation Effect*(Hero)  */}
     
      <div className="w-full flex justify-center bg-[#000000] border-hero">
          
            <LampBackgroundEffect />
            <div className="flex justify-center w-[100%] h-[90vh] items-center inset-0 absolute ">
              <main className="w-[100%] md:w-[90%] flex flex-col justify-center items-center overflow-hidden h-[90vh]">
              <Hero />
              </main>
            </div>
        </div>
        


        {/* Section for Our work After HERO section uptil Globe Component */}

        <div className="w-full flex justify-center sm:px-5 items-start bg-[#000000] md:ml-[80px] mt-[100px] sm:ml-[20px]">
          <div className="art -translate-x-0 -rotate-[45deg] bg-[#000000]"></div>          
          {/* <h1 className="w-[1107px] h-[179px] text-[65px] font-bold leading-tight tracking-wide mt-[120px]">Your growth is our mission. Let's craft a unique roadmap to success, tailored just for you.</h1>  */}
          <TextEffect />
        </div>      
        <div className="w-full flex justify-center mt-96 items-center  bg-background">
          <Work/>
        </div>

        {/* Small Banner section */}

        <div className="w-full sm:py-[50px] h-[141px] bg-[#3D3D3D] flex items-center justify-center py-[100px] px-10 mb-10 mt-[70px]">
              <h2 className="font-bold text-[48px] sm:text-[28px] leading-tight tracking-wide text-[#FFFFFF] shadow-black text-center">We Design Experience, We Grow Businesses
              We Develop Websites</h2>
        </div>

        {/* CTA  */}

        <CallToAction />

        {/* 2nd last section home */}

        <div className="w-full sm:w-[90%] mx-auto h-[66px] flex items-center justify-center text-center px-10 mt-[200px] mb-20 ">
          <h2 className="text-[45px] leading-tight tracking-wide font-bold text-[white] shadow-black">Let our clients tell you how we made a difference!</h2>
        </div>

        <TestimonialsScrollCard />

        {/* <LogoSlider /> */}

        {/* Section for ScrollSection */}

        {/* <ScrollSection /> */}
        <VelocityScroll
        text="Get in Touch."
        default_velocity={2}
        className=" 
          index 
          text-center 
          font-bold 
          tracking-[-0.02em]
          drop-shadow-xl 
          text-white 
          text-[2rem] 
          sm:text-[2rem] 
          md:text-[3rem] 
          lg:text-[4rem] 
          xl:text-[5rem] 
          mb-14 
          leading-[1rem] 
          sm:leading-[1rem] 
          md:leading-[2rem] 
          lg:leading-[3rem] 
          xl:leading-[4rem]"
      />
        <FooterSection />

    </div>

    </>
  
  );
}
