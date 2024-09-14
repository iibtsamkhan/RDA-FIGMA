import React from 'react'
import Image from "next/image";
import img1 from "../../public/Assets/Graphics/face.png";
import img2 from "../../public/Assets/Graphics/dr.png";
import img3 from "../../public/Assets/Graphics/toro promotions 1.png";
import img4 from "../../public/Assets/Graphics/jewel city 1.png";
import img5 from "../../public/Assets/Graphics/skin.png";
import img6 from "../../public/Assets/Graphics/speedster 1.png";
import img7 from "../../public/Assets/Graphics/ggsports.png";
import img8 from "../../public/Assets/Graphics/Frame 1.png";
import img9 from "../../public/Assets/Graphics/plenty.png";
import { GiTalk } from "react-icons/gi";
import MagicButton from "@/components/ui/MagicButton";

export default function CTA() {
  return (
    <div className="w-[100%] px-80 ml-36 mt-32 mb-10 flex items-start gap-36 justify-center bg-black">


    <div className="flex-1 bg-black">
    <div className="grid grid-cols-3 gap-x-2 gap-y-2 justify-between text-right bg-black"> 
      <div className="w-[151px] h-[149px] flex items-center justify-center bg-black">
        <Image src={img1} alt="rda logo" className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px]  flex items-center justify-center">
        <Image src={img2} alt="rda logo"  className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px] flex items-center justify-center">
        <Image src={img3} alt="rda logo" className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px] flex items-center justify-center">
        <Image src={img4} alt="rda logo"  className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px]  flex items-center justify-center">
        <Image src={img5} alt="rda logo"  className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px]  flex items-center justify-center">
        <Image src={img6} alt="rda logo" className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px] flex items-center justify-center">
        <Image src={img7} alt="rda logo" className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px] flex items-center justify-center">
        <Image src={img8} alt="rda logo" className="object-cover rounded-md" />
      </div>
      <div className="w-[151px] h-[149px]  flex items-center justify-center">
        <Image src={img9} alt="rda logo"  className="object-cover rounded-md" />
      </div>
    </div>
  </div>

 
  <div className="flex-1 bg-black">
    <h1 className='text-[45px] w-[648px] h-[186px] font-bold leading-tight tracking-wide mb-4'>Revolutionize Your Business with Our Tailored Digital Solutions</h1>
    <p className='text-[16px] w-[552px] h-[186px] leading-tight tracking-wide mb-6'>We're experts in taking businesses to the next level with personalized digital marketing plans. We use the latest technology and data analysis to understand what makes your customers tick. This way, we can create online campaigns that stand out from the crowd. We stay on top of all the latest trends in the digital world, so you don't have to. Our goal is simple: your success. Contact Royal Digital Agency today and see how we can help your brand reach new heights online!</p>
    {/* <button className='font-bold py-2 px-8 bg-transparent text-[#F1C560] border-2 border-[#F1C560] text-[16px]'>Let’s Talk</button> */}
    <MagicButton
        title="Learn more"
        icon={<GiTalk />}
        position="right"
    />
  </div>

</div>

  
  )
}
