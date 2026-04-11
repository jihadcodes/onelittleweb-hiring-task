"use client"
import React from 'react'
import Image from 'next/image'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    {
      title: "Resources",
      links: ["Free eBooks", "Development Tutorial", "How to – Blog", "Youtube Playlist"],
    },
  ];

  return (
    <footer className=' border-t border-[#D6D6D6]'>
      <div className="flex flex-col xl:flex-row max-w-[1185px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0   gap-10 xl:gap-39.75 xl:py-22.5">
        
        {/* Logo + Description + Social */}
        <div className='w-full xl:max-w-[396px]'>
          <Link href="/">
            <Image src="/images/Nav_logo/google.png" alt="Google" width={106} height={38} priority />
          </Link>
          <p className='text-[#52525B] text-sm leading-6 pr-0 xl:pr-4 text-start mb-6 mt-5 font-jakarta'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" aria-label="Twitter">
              <FaTwitter className='w-4 h-4' />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className='w-4 h-4' />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className='w-4 h-4' />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FaGithub className='w-4 h-4' />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className='w-full'>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 xl:gap-33">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className='text-[#18181B] font-bold text-base leading-10 mb-3'>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link} className='text-[#18181B] font-medium text-sm leading-6 mb-3 whitespace-nowrap'>
                      <Link href="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
      <p className="text-sm bg-[#230B41] pt-4 pb-6 text-center text-white px-4">&copy; Copyright 2024, All Rights Reserved by XYz</p>
    </footer>
  )
}

export default Footer