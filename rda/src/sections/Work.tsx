'use client'
import React from 'react'
import Image from "next/image";
import img1 from "../../public/Assets/Graphics/row-1-column-1 2.png"
import img2 from "../../public/Assets/Graphics/row-1-column-2 2.png"
import img3 from "../../public/Assets/Graphics/row-1-column-3 2.png"
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import CobeGlobe from "@/components/ui/CobeGlobe";

export default function Work
() {
  return (
    <div className='bg-black flex flex-col justify-center mx-auto mb-10 mt-10'>
        <h1 className='xl:w-[200px] sm:w-[300px] h-[66px] text-[30px] md:ml-[180px] sm:ml-[100px] font-bold leading-tight tracking-wide '>OUR WORK</h1>
        <p className='xl:w-[1038px] sm:w-[500px] h-[125px] text-[16px] md:ml-[180px] sm:ml-[100px] leading-tight tracking-wide'>Content Creation. Video Production. Digital Marketing. Graphic Design. Web & App development. Ads campaigns. We bring it all together.</p>

                <div className='w-[80%] sm:w-[60%] flex md:ml-[180px] gap-x-0 bg-black'>
                        <div className='flex-1 justify-center rounded-md sm:ml-[25%] md:ml-0 xl:ml-0'>
                        <Image
                        src={img1}
                        alt="rda logo"
                        width={344}
                        height={693}
                        />
                        </div>
                        <div className='flex-1 mx-4 rounded-md'>
                        <Image
                        src={img2}
                        alt="rda logo"
                        width={344}
                        height={693}
                        />
                        </div>
                        <div className='flex-1 rounded-md'>
                        <Image
                        src={img3}
                        alt="rda logo"
                        width={344}
                        height={693}
                        />
                        </div>
                </div>
                <div className='flex flex-wrap bg-black sm:mx-auto mb-16 sm:flex-col xl:flex-row sm:px-10'>
                    <div className='flex-1 bg-black justify-center items-start mx-12'>
                        <h1 className='md:w-[501px] h-[186px] sm:w-[auto] sm:mx-10 md:mx-1 xl:justify-start sm:jusity-center sm:items-center flex text-[45px] font-bold leading-tight tracking-wide mt-[120px]'>We Speak Digital. Let&apos;s Get Your Brand Heard!</h1>
                        <p className='w-[501px] h-[186px] sm:w-[500px] sm:mx-10 md:mx-1 xl:justify-start sm:jusity-center sm:items-center flex text-[16px] leading-tight tracking-wide mt-[30px]'>We&apos;re a digital marketing team in Glendale that helps businesses like yours grow. We have experts who will create a custom plan to boost your online presence and reach more customers. Our proven methods and latest techniques will get your brand noticed and keep you ahead of the competition..</p>
                        {/* <button className='flex-1 font-bold py-2 px-8 bg-transparent text-[#F1C560] justify-start text-[16px] border-2 border-[#F1C560'>Learn more</button> */}
                          <div className='sm:flex sm:justify-start sm:ml-10 xl:ml-0'>
                          <MagicButton
                            title="Learn more"
                            icon={<FaLocationArrow />}
                            position="right"
                          />
                          </div>
                          
                    </div>
                    <div className='w-[100%] sm:h-[500px] h-[500px] justify-center items-center flex-1 text-[16px] leading-tight tracking-wide mt-[70px] sm:mt-[70px] sm:px-10'>
                    {/* <GlobeComponent /> */}
                    <CobeGlobe />
                    </div>
                </div>
    
    </div>
  )
}
