import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUsSection() {
  const { heading, description, features } = WHY_CHOOSE_US;

  return (
    <section id="about" className="pt-10 lg:pt-21 pb-10 lg:pb-30.25 bg-white">
      <div className="max-w-310 mx-auto px-5">
        <div className="bg-[#FFF0F5] border border-[#F8BECD] rounded-3xl pt-10 lg:pt-16.5 pb-10 lg:pb-20.75 pl-6 pr-6 lg:pl-22.25 lg:pr-9.5 flex flex-col lg:flex-row items-center gap-3.5 overflow-hidden">

          {/* ── Left Column: Heading, Description, Features, CTA ── */}
          <div className="flex-1 w-full lg:max-w-114.25">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6.5 whitespace-pre-line">
              {heading}
            </h2>

            <p className="text-black text-sm font-semibold mb-7.5">
              {description}
            </p>

            {/* Feature checklist */}
            <ul className="space-y-3.5 mb-11.25">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FAC4D2] flex items-center justify-center shrink-0">
                    <Check size={16} className="text-[#ED3C6A]" />
                  </span>
                  <span className="text-[#1E1E1E] text-[16px] font-bold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="#contact" variant="primary" showArrow>
              Schedule A Meeting
            </Button>
          </div>

          {/* ── Right Column: Decorative Mockup Images ── */}
          <div className="flex-1 relative flex items-center justify-center w-full overflow-hidden
            mt-10 h-95
            sm:h-105
            lg:max-w-160.5 lg:mt-0 lg:h-auto lg:overflow-visible"
          >
            {/* Background pink blob shape */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAC4D2] rounded-[168.5px]
              w-75 h-50
              sm:w-105 sm:h-65
              lg:w-142.5 lg:h-84.25"
            />

            {/* Top-left: Property listing preview card */}
            <div className="absolute top-0 left-0 z-20
              sm:top-6 sm:left-0
              lg:top-10 lg:-left-10">
              <AppImage
                src="/images/WhyChooseUs/choose1.png"
                alt="Listing card"
                width={254}
                height={105}
                style={{ width: "clamp(100px, 30vmin, 254px)", height: "auto" }}
                className="object-cover"
              />
            </div>

            {/* Top-right: Connected platform icons */}
            <div className="absolute top-0 right-0 z-20
              sm:top-2 sm:right-0
              lg:top-3 lg:right-7">
              <AppImage
                src="/images/WhyChooseUs/choose2.png"
                alt="Platforms"
                width={159}
                height={164}
                style={{ width: "clamp(70px, 20vmin, 159px)", height: "auto" }}
                className="object-cover"
              />
            </div>

            {/* Center: Main person illustration */}
            <AppImage
              src="/images/WhyChooseUs/main.png"
              alt="Property Manager"
              width={327}
              height={437}
              style={{ width: "clamp(150px, 35vmin, 327px)", height: "auto" }}
              className="relative -top-2 -left-5 z-40 object-contain"
            />

            {/* Bottom-left: Booking calendar widget */}
            <div className="absolute -bottom-6 left-0 z-20
              sm:-bottom-8 sm:left-0
              lg:-bottom-16 lg:-left-17">
              <AppImage
                src="/images/WhyChooseUs/choose3.png"
                alt="Calendar"
                width={211}
                height={170}
                style={{ width: "clamp(90px, 24vmin, 211px)", height: "auto" }}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}