import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/components/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import rda from "../../public/Assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 w-full sm:px-[50px] mt-20">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[15%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src={rda} alt="logo" width={120} height={29} />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (  // Added index as the key
              <FooterColumn title={columns.title} key={index}>  {/* key prop added here */}
                <ul className="regular-16 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, linkIndex) => (  // Added linkIndex as the key
                    <Link href="/" key={linkIndex}>  {/* key prop added here */}
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (  // Added index as the key
                  <Link
                    href="/"
                    key={index}  // key prop added here
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-white">
                  {SOCIALS.links.map((link, index) => (  // Added index as the key
                    <Link href="/" key={index}>  {/* key prop added here */}
                      <Image src={link} alt="logo" width={24} height={24} className='icon' />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">&#169; 2024 <span className='font-bold text-[#F1C560]'>Royal Digital Agency</span> | All rights reserved.</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-[20px] text-[white] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
