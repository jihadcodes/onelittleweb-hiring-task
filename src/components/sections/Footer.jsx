"use client"
import React from 'react'
import Image from 'next/image'
import {footerLinks} from "@/lib/data";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="border-t border-[#D6D6D6]">
      <div className="flex flex-col xl:flex-row max-w-296.25mx-auto px-6 sm:px-8 xl:px-0 py-10 xl:py-22.5 gap-10 xl:gap-39.75">

        {/* Logo + Description + Social */}
        <div className="w-full xl:max-w-99">
          <Link href="/">
            <Image
              src="/images/Nav_logo/google.png"
              alt="Google"
              width={106}
              height={38}
              priority
            />
          </Link>

          <p className="text-[#52525B] text-sm leading-6 xl:pr-4 mb-6 mt-5 font-jakarta">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="w-4 h-4 text-[#52525B] hover:text-[#ED3C6A] transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4 text-[#52525B] hover:text-[#ED3C6A] transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="w-4 h-4 text-[#52525B] hover:text-[#ED3C6A] transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <FaGithub className="w-4 h-4 text-[#52525B] hover:text-[#ED3C6A] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Footer links */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 xl:gap-33">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-[#18181B] font-bold text-base leading-10 mb-3">
                  {column.title}
                </h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link} className="text-[#18181B] font-medium text-sm leading-6 mb-3">
                      <Link href="#" className="hover:text-[#ED3C6A] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <p className="text-sm bg-[#230B41] pt-4 pb-6 text-center text-white px-4">
        &copy; Copyright 2024, All Rights Reserved by XYZ
      </p>
    </footer>
  )
}

export default Footer