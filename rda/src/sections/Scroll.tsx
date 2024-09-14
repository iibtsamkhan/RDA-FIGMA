"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import LinearImage from "../../../public/Assets/Graphics/linear.webp";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Digital Marketing
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={"/LinearImage"}
          alt="Stats"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
