import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-310 mx-auto px-4 sm:px-6">

      <div className="mb-13.5">
          <SectionHeader
          title="Our"
          highlight="Service" 
          titleClassName="mb-3.5"
          
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col border border-[#FAC4D2] rounded-[13px] pt-13.25 pl-8.5 pr-14.5 pb-7.5 hover:shadow-[0px_4px_90.3px_0px_rgba(215,205,207,0.47)] transition-all duration-200 hover:border-transparent"
            >
              <div className="mb-5">
                <AppImage
                  src={service.icon}
                  alt={service.title}
                  width={service.iconWidth}
                  height={service.iconHeight}
                  className="object-contain"
                />
              </div>

              {/* min-h prevents title from collapsing on hover */}
              <h3 className="text-[24px] font-bold leading-[150%] text-[#000000] mb-3.5 pr-5 min-h-[72px]">
                {service.title}
              </h3>

              <p className="text-[#000000] text-sm font-medium mb-8.75 flex-1">
                {service.description}
              </p>

              <Link
                href="#"
                className="inline-block border border-[#ED3C6A] text-[#F72585] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#F72585] hover:text-white transition-colors duration-200 w-fit"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}