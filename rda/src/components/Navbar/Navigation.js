'use client'
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Assets/logo/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="glassmorphism fixed w-full z-50 lg:px-36 px-8">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								
								<Link href={"/"}>
									<Image className=" font-bold text-xl cursor-pointer" 
									src={Logo}
									alt="RDA LOGO"
									width={100}
									height={100}
									/>
      							</Link>
									
								
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										
										href="/"
										
										className="cursor-pointer text-my-color font-semibold px-3 py-2 text-md hover:font-white"
									>
										Home
									</Link>
									<Link
								
										href="/About"
										
										className="cursor-pointer hover:bg-[#cf9c24] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										About
									</Link>

									<Link
										href="/Services"
										className="cursor-pointer hover:bg-[#cf9c24] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Services
									</Link>
									<Link
										href="/CaseStudies"
										className="cursor-pointer hover:bg-[#cf9c24] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Case Studies
									</Link>

									<Link
										href="/Inquire"
										className="cursor-pointer hover:bg-[#cf9c24] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Inquire
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#cf9c24] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[#cf9c24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#cf9c24] focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/"
									className="cursor-pointer hover:bg-[rgb(207,156,36)] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/About"
									className="cursor-pointer hover:bg-[#cf9c24] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/OurWork"
									className="cursor-pointer hover:bg-[#cf9c24] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Work
								</Link>
								<Link
									href="/Services"
									className="cursor-pointer hover:bg-[#cf9c24] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/CaseStudies"
									className="cursor-pointer hover:bg-[#cf9c24] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Case Studies
								</Link>
								<Link
									href="/Inquire"
									className="cursor-pointer hover:bg-[#cf9c24] text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Inquire
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;