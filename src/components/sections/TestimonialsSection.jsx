"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const testimonials = [
  { id: 1, 
  name: "Esther Howard", 
  image: "/images/Testimonials/Ellipse 21.png", 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
  stars: 4 },
  { id: 2, name: "Esther Howard", image: "/images/Testimonials/Ellipse 21 (1).png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 3, name: "Esther Howard", image: "/images/Testimonials/Ellipse 21.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 4, name: "Robert Fox", image: "/images/Testimonials/Ellipse 21 (1).png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 5, name: "Robert Fox", image: "/images/Testimonials/Ellipse 21.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
]

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", startIndex: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(1)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <>
      <section className="mb-45">
        <div className="text-center mb-20 max-w-[713px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#101828] mb-5 -tracking-[2%]">
            Check Our Clients{" "}
            <span className="text-[#ED3C6A]">Review</span>
          </h2>
          <p className="text-[#000000] text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="flex-none w-[530px]"
              >
                <div className={`rounded-2xl pt-11.5 pb-11 pl-9.25 pr-10.5 transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-white shadow-[0px_4px_77px_0px_rgba(0,0,0,0.08)] opacity-100 scale-100"
                    : "bg-[#F6F6F6] opacity-50 scale-95"
                }`}>
                  <div className="flex items-center gap-7.5">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000000] text-xl mb-1.25">{t.name}</h4>
                      <p className="text-[#000000] text-sm font-medium  mb-3 leading-auto ">{t.text}</p>
                      <div className="flex gap-0.75">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <span key={i} className="text-[#F4C430] text-base">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection