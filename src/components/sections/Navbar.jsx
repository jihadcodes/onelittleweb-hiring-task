"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "../ui/Button";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 [box-shadow:0_4px_62px_0px_#FAC4D2A1]">
      <nav className="max-w-310.25 mx-auto px-6 flex items-center justify-between h-22.25">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/Nav_logo/google.png" alt="Google" width={125} height={45} priority />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative text-[18px] leading-[150%] font-normal hover:font-bold text-[#1E1E1E] hover:text-[#ED3C6A] transition-colors duration-500"
              >
                <span className="relative flex flex-col items-center">
                  <span className="invisible font-bold">{link.label}</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    {link.label}
                    <span className="absolute left-0 -bottom-1.75 w-full h-px bg-[#ED3C6A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Button href="#contact" showArrow className="gap-2.5 whitespace-nowrap">
            Schedule A Meeting
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-[5px] hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#ED3C6A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#contact"
            showArrow
            onClick={() => setMobileOpen(false)}
          >
            Schedule A Meeting
          </Button>
        </div>
      )}
    </header>
  );
}