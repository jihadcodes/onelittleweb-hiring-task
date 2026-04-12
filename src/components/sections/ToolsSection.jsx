import React from 'react'
import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";

const ToolsSection = () => {

 const TOOLS = [
  {
    name: "PriceLabs",
    src: "/images/ToolsImg/tool1.png",
    iconWidth: 174,
    iconHeight: 46,
  },
  {
    name: "Wheelhouse",
    src: "/images/ToolsImg/tool2.png",
    iconWidth: 210,
    iconHeight: 27,
  },
  {
    name: "Beyond Pricing",
    src: "/images/ToolsImg/tool3.png",
    iconWidth: 193,
    iconHeight: 31,
  },
  {
    name: "Hostfully",
    src: "/images/ToolsImg/tool4.png",
    iconWidth: 151,
    iconHeight: 56,
  },
  {
    name: "Guesty",
    src: "/images/ToolsImg/tool5.png",
    iconWidth: 135,
    iconHeight: 55,
  },
  {
    name: "Lodgify",
    src: "/images/ToolsImg/tool6.png",
    iconWidth: 193,
    iconHeight: 31,
  },
  {
    name: "Tool 7",
    src: "/images/ToolsImg/tool4.png",
    iconWidth: 151,
    iconHeight: 56,
  },
  {
    name: "Tool 8",
    src: "/images/ToolsImg/tool5.png",
    iconWidth: 135,
    iconHeight: 55,
  },
  {
    name: "Tool 9",
    src: "/images/ToolsImg/tool6.png",
    iconWidth: 193,
    iconHeight: 31,
  },
];
  return (
   <section id="tools" className="pt-10 lg:pt-21 bg-white">
      <div className="max-w-240 mx-auto pb-5 lg:pb-20.5 px-6">
        <SectionHeader
          title="Our"
          highlight="Tools"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      {/* Full width background */}
      <div className="bg-[#F6F6F6] w-full pt-9.5 pb-21.25">
        <div className="max-w-240 mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-[11px] flex items-center justify-center p-6 md:py-11.75 md:pl-11 md:pr-17.5 shadow-sm hover:shadow-md transition-shadow duration-200 aspect-[3/2]"
              >
                <AppImage
                  src={tool.src}
                  alt={tool.name}
                  width={tool.iconWidth}
                  height={tool.iconHeight}
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

export default ToolsSection
