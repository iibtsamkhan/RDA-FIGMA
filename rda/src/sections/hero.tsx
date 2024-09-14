import React from "react";
import { Cover } from "@/components/ui/cover";


export default function CoverDemo() {
  return (
    <div className="mt-[150px]">
      <h1 className="text-5xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 gap-y-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white  dark:from-neutral dark:via-dark dark:to-dark">
      <span className="text-5xl py-6 font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-[#161616] via-[#161616] to-[#161616] dark:from-neutral-800 dark:via-white dark:to-white">Transform Your Digital Presence with</span> <br /> <span className="text-7xl mt-10 py-10 font-bold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">Royal Digital Agency</span> <br /> All at <span className=""><Cover>warp speed</Cover></span>
      </h1>
    </div>
  );
}