import React from 'react'
import rda from "../../public/Assets/logo/logo.png"
import Link from "next/link";
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className='fixed z-50 glassmorphism rounded-[1rem] w-[100%] lg:w-[80%] h-[5%] mt-[2rem] flex justify-between items-center px-4 lg:px-8'>
        <Link href={"#home"}>
        <Image
        src={rda}
        alt="rda logo"
        width={120}
        height={100}
        />
        </Link>

        <div className='flex text-2xl flex-row items-center justify-between  gap-20'>
        <Link href={"#services"}>Services </Link>
        <Link href="#projects">Work </Link>
        <Link href={"#process"}>About </Link>
        <Link href="#pricing">Inquiry </Link>
        <Link href="#comparison">Why us? </Link>
        </div>
        
    </nav>
  )
}
