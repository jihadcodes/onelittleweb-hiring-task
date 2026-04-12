import React from 'react'
import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";

import { partnerTools } from "@/lib/data";
 
export default function ToolsSection() {
  return (
    <section id="tools" className="pt-10 lg:pt-21 bg-white">
      <div className="max-w-240 mx-auto pb-5 lg:pb-20.5 px-6">
        <SectionHeader
          title="Our"
          highlight="Tools"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      {/* Full-width gray backdrop */}
      <div className="bg-[#F6F6F6] w-full pt-9.5 pb-21.25">
        <div className="max-w-240 mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partnerTools.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-[11px] flex items-center justify-center p-6 md:py-11.75 md:pl-11 md:pr-17.5 aspect-[3/2] hover:shadow-[0px_4px_30.3px_0px_rgba(255,138,168,0.28)] transition-shadow duration-200"
              >
                <AppImage
                  src={item.imagePath}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
