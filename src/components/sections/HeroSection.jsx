"use client";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";

const icons = [
  {
    src: "/images/Hero/airbnb.webp",
    alt: "Airbnb",
    position: "top-0 left-0 ",
    rotate: "rotate-[-10deg]",
  },
  {
    src: "/images/Hero/booking.webp",
    alt: "Booking",
    position: "top-0 right-0 ",
    rotate: "rotate-[10deg]",
  },
  {
    src: "/images/Hero/vrbo.webp",
    alt: "VRBO",
    position: "bottom-0 left-0 ",
    rotate: "rotate-[8deg]",
  },
  {
    src: "/images/Hero/tripadvisor.webp",
    alt: "TripAdvisor",
    position: "bottom-0 right-0 ",
    rotate: "rotate-[-8deg]",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden mt-22.25"
      style={{
        backgroundImage: `
          linear-gradient(#e5e7eb 1px, transparent 1px),
          linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "87px 87px",
        minHeight: "587px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/images/Hero/hero-bg.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Rotating Circle with Icons */}
      <div className="absolute inset-0 flex items-center justify-center  z-10">
        <div className="relative w-[923px] h-[523px] rounded-full ">
          {icons.map((icon) => (
            <div
              key={icon.alt}
              className={`absolute ${icon.position} animate-counter-spin`}
            >
              <div
                className={`w-16 h-16 xl:w-20 xl:h-20 rounded-2xl flex items-center justify-center overflow-hidden ${icon.rotate}`}
                style={{ backgroundColor: icon.bg, lineHeight: 0 }}
              >
                <AppImage
                  src={icon.src}
                  alt={icon.alt}
                  width={80}
                  height={80}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center   max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-[48px] font-bold text-black leading-tight">
          Airbnb Assistants For
        </h1>
        <h2 className="text-[38px] font-medium text-black leading-tight mb-6">
          Property Management
        </h2>
        <p className="text-[14px] font-medium text-black leading-7 max-w-lg mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button href="#contact" showArrow>
            Schedule A Meeting
          </Button>
          <Link
            href="#pricing"
            className="text-sm text-black underline font-medium underline-offset-2 hover:text-[#ED3C6A] transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}