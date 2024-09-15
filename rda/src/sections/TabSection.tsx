"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import irina from "../../public/Assets/Graphics/image 5.png"
import speedster from "../../public/Assets/Graphics/rdawork.png"
import img2 from "../../public/Assets/Graphics/image 3.png"
import img3 from "../../public/Assets/Graphics/image 4.png"

export default function TabsDemo() {
  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="w-[100%] overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black">

          <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-1 gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start mx-auto">
                <h1 className="text-[30px] font-bold">All</h1>
            </div>
            <div className="w-[50%] flex flex-col justify-start items-start mx-auto">
                <p className="text-[25px] leading-[143%] font-normal">
                Royal Digital Agency, using the latest marketing techniques and strategies, developed three of its best clients: Toro Promotions Inc., Speedster, and Skin Science LA. We boosted their online presence, and you can read about our incredible work in our following case studies:
                </p>
            </div>
        </div>
          <All />
        </div>
      ),
    },
    {
      title: "Marketing",
      value: "marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black">
          <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-1 gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start mx-auto">
                <h1 className="text-[30px] font-bold">Marketing</h1>
            </div>
            <div className="w-[50%] flex flex-col justify-start items-start mx-auto">
                <p className="text-[25px] leading-[143%] font-normal">
                Royal Digital Agency, using the latest marketing techniques and strategies, developed three of its best clients: Toro Promotions Inc., Speedster, and Skin Science LA. We boosted their online presence, and you can read about our incredible work in our following case studies:
                </p>
            </div>
        </div>
          <All />
        </div>
      ),
    },
    {
      title: "UX/UI",
      value: "ux/ui",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black">
          <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-1 gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start mx-auto">
                <h1 className="text-[30px] font-bold">UX/UI</h1>
            </div>
            <div className="w-[50%] flex flex-col justify-start items-start mx-auto">
                <p className="text-[25px] leading-[143%] font-normal">
                Royal Digital Agency, using the latest marketing techniques and strategies, developed three of its best clients: Toro Promotions Inc., Speedster, and Skin Science LA. We boosted their online presence, and you can read about our incredible work in our following case studies:
                </p>
            </div>
        </div>
          <All />
        </div>
      ),
    },
    {
      title: "Photo/Video",
      value: "photo/video",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black">
          <div className="w-[100%] max-w-[1200px] flex flex-row justify-between items-start mx-auto overflow-hidden mt-1 gap-1">  
            <div className="w-[50%] flex flex-col justify-center items-start mx-auto">
                <h1 className="text-[30px] font-bold">Photo/Video</h1>
            </div>
            <div className="w-[50%] flex flex-col justify-start items-start mx-auto">
                <p className="text-[25px] leading-[143%] font-normal">
                Royal Digital Agency, using the latest marketing techniques and strategies, developed three of its best clients: Toro Promotions Inc., Speedster, and Skin Science LA. We boosted their online presence, and you can read about our incredible work in our following case studies:
                </p>
            </div>
        </div>
          <All />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

// All Content Function

const All = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 gap-12 mb-80">
        <Image
        src={speedster}
        alt="dummy image"
        width="500"
        height="500"
        className="flex flex-col items-start justify-center py-8 px-6"
        />
        <h2 className="flex flex-col items-start justify-center py-8 px-6 md:text-2xl">SpeedSter</h2>
        <p className="flex flex-col items-start justify-center py-8 md:text-sm font-normal w-[393px]">BRANDING, MARKETING, GRAPHIC DESIGN</p>


        <Image
        src={img2}
        alt="dummy image"
        width="500"
        height="500"
        className="flex flex-col items-start justify-center py-8 px-6"
        />
        <h2 className="flex flex-col items-start justify-center py-8 px-6 md:text-2xl">West Medical</h2>
        <p className="flex flex-col items-start justify-center py-8 md:text-sm font-normal w-[393px]">BRANDING, MARKETING, GRAPHIC DESIGN</p>


        <Image
        src={img3}
        alt="dummy image"
        width="500"
        height="500"
        className="flex flex-col items-start justify-center py-8 px-6"
        />
        <h2 className="flex flex-col items-start justify-center py-8 px-6 md:text-2xl">Jewel City</h2>
        <p className="flex flex-col items-start justify-center py-8 md:text-sm font-normal w-[393px]">BRANDING, MARKETING, GRAPHIC DESIGN</p>


        </div>
        
      
    );
  };
  