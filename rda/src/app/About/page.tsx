import Image from "next/image";
import Hero from "@/sections/hero"
import ScrollSection from "@/sections/Scroll";
// import NavBar from "@/sections/Nav";
import BgImage from "../../public/Assets/Graphics/royal-cover.png"
import Work from "@/sections/Work";
import TextEffect from "@/sections/TextEffect";
import Navbar from "@/components/Navbar/Navbar";
import GlobeComponent from "@/sections/Globe";
import LampBackgroundEffect from "../../sections/LampBackground";
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
import Cards from "@/sections/CardsHover";
import irina from "../../../public/Assets/Graphics/image 5.png"
import moeed from "../../../public/Assets/Graphics/image 6.png"
import Team1 from "@/sections/TeamSection1";
import Team2 from "@/sections/TeamSection2";
import Team3 from "@/sections/TeamSection3";
import Team4 from "@/sections/TeamSection4";

export default function About() {
    return (
      <>
        <div className="w-full flex justify-center overflow-hidden bg-[#000000]">
            <Navbar />
            <Cards />
        </div>
        <div className=" bg-[#3D3D3D] w-full flex justify-center overflow-hidden mt-8">
        <VelocityScroll
                text="We Design Experiences. We Grow Business."
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
                mb-5
                mt-5
                leading-[1rem]              
                sm:leading-[1rem] 
                md:leading-[2rem] 
                lg:leading-[3rem] 
                xl:leading-[4rem]"
            />
        </div>

        {/* Irina */}
        <div className="w-[100%] max-w-[1450px] flex flex-row justify-between items-center mx-auto overflow-hidden mt-8 bg-black gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start py-5 mx-auto">
                <h1 className="text-[50px] font-bold">Irina Akopyan</h1>
                <h5 className="text-[18px]">Founder and Chief Executive Officer</h5>
                <p className="text-[18px] leading-[143%] w-[792px] mt-10">Over the past 15 years, digital marketing has become more than just a career for me; it's a passion. As the Founder and CEO of Royal Digital Agency, I lead an incredible team of professionals dedicated to one thing: igniting digital growth for our clients.
                <br />
                <span className="py-5">
                We take immense pride in collaborating with some of the best local businesses. From beauty salons to medical practices and sporting institutions, our diverse client portfolio reflects our commitment to delivering results across a wide range of industries. But our services extend beyond traditional digital marketing.  We've successfully developed and launched mobile applications, constantly pushing boundaries to find innovative solutions that elevate our clients' digital presence.
                </span>
                <br />
                <span className="py-5">
                At Royal Digital Agency, we believe in complete client satisfaction. That's why we offer comprehensive marketing solutions, handling every aspect of your project from strategy to execution.  Our goal is simple: to help you achieve your business aspirations and deliver exceptional results that leave a lasting impact. Don't hesitate to contact us and discuss how Royal Digital Agency can help you take your business to the next level.
                </span>
                </p>
            </div>

            <div className="w-[50%] flex flex-col justify-end items-end py-5 mx-auto">
                <Image 
                src={irina} 
                alt="Irina-CEO" />
            </div>
        </div>

        {/* Moeed */}
        <div className="w-[100%] max-w-[1450px] flex flex-row justify-between items-center mx-auto overflow-hidden mt-8 bg-black gap-1">

            <div className="w-[50%] flex flex-col justify-center items-start py-5 mx-auto">
                <h1 className="text-[50px] font-bold">Moeed A</h1>
                <h5 className="text-[18px]">Chief Operating Officer (COO)</h5>
                <p className="text-[18px] leading-[143%] w-[792px] mt-10">As the Chief Operating Officer at Royal Digital Agency, I, Abdul Hassan, utilize my entrepreneurial expertise and online advertising knowledge to drive client success. Our approach goes beyond simply growing follower counts; we focus on attracting qualified leads and converting them into loyal customers through the power of social media.
 
                At Royal Digital, we offer customized digital solutions tailored to a diverse range of clients, including dentists, beauticians, skin care clinics, real estate professionals, plastic surgeons, delivery services, and athletes. Our comprehensive services enable clients to captivate their audience with compelling content creation, establish a strong online presence through website and app development, and harness the power of digital marketing to reach the right audience.
 
                We also provide targeted Google Ads and YouTube Ads, impactful graphic design solutions, and expert SEO strategies to optimize websites for search engines. By combining data-driven insights with creative strategies, we amplify business visibility, attract targeted website traffic, generate high-quality leads, and solidify brand awareness. Book a call with Royal Digital Agency today to learn more!
                </p>
            </div>

            <div className="w-[50%] flex flex-col justify-end items-end py-5 mx-auto">
                <Image 
                src={moeed} 
                alt="moeed-COO" />
            </div>
        </div>

        {/* Teams Section */}
        <h1 className="text-[55px] leading-[143%] flex justify-center w-[73%] mt-10">Collaborative Effort. Strong Results.</h1> 
        <div className="w-[100%] max-w-[1450px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-8 bg-black gap-1"> 
            
            <div className="w-[100%] flex flex-col justify-start items-start py-5 mx-auto">
            <Team1 />
            </div>

            <div className="w-[100%%] flex flex-col justify-start items-end py-5 mx-auto">
            <Team2 />
            </div>
        </div>

        {/* Gradient Banner */}
        <div className="w-[100%] flex mt-20">
            <div className="bg-gradient-to-r from-[#081DE8] to-[#F1C561] h-[132px] w-[100%] max-w-[2000px]"></div>
        </div>
        
        {/* Teams Section */}

        {/* <h1 className="text-[55px] leading-[143%] flex justify-center w-[73%] mt-20">Collaborative Effort. Strong Results.</h1>  */}
        <div className="w-[100%] max-w-[1450px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-32 mb-52 bg-black gap-1"> 
            
            <div className="w-[100%] flex flex-col justify-start items-start py-5 mx-auto">
            <Team3 />
            </div>

            <div className="w-[100%%] flex flex-col justify-start items-end py-5 mx-auto">
            <Team4 />
            </div>
        </div>

        <FooterSection />

      </>
    );
  }
  