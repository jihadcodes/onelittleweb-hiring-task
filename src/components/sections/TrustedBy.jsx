"use client"
import Image from "next/image";
import { LOGOS } from "@/lib/data";



// Duplicate logos to create seamless infinite scroll effect
const scrollingLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export default function TrustedBy() {
  return (
    <section className="mt-12.75 mb-13.75 overflow-hidden">
      <p className="text-center text-[#000000] font-semibold leading-[100%] text-[20px] mb-9">
        Trusted by leaders in 50+ industries
      </p>

      {/* Marquee track — clips overflow so only visible logos show */}
      <div className="relative overflow-hidden bg-[#F6F6F6] py-4.5">

        {/* Scrolling row — w-max keeps all logos in a single line */}
        <div className="flex animate-marquee gap-16 items-center w-max">
          {scrollingLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center min-w-30"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                style={{ height: "auto" }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}