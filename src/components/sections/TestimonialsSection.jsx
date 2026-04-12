"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { testimonials } from "@/lib/data";

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66845 0.345362C4.81813 -0.115293 5.46983 -0.115294 5.61951 0.345361L6.49107 3.02773C6.558 3.23374 6.74998 3.37323 6.96659 3.37323H9.78701C10.2714 3.37323 10.4728 3.99303 10.0809 4.27773L7.79914 5.93553C7.62389 6.06285 7.55057 6.28854 7.6175 6.49455L8.48906 9.17692C8.63873 9.63758 8.11149 10.0206 7.71964 9.73594L5.43788 8.07814C5.26263 7.95082 5.02533 7.95082 4.85009 8.07814L2.56833 9.73594C2.17647 10.0206 1.64923 9.63758 1.79891 9.17692L2.67046 6.49455C2.7374 6.28854 2.66407 6.06285 2.48883 5.93553L0.207064 4.27773C-0.184792 3.99303 0.0165946 3.37323 0.500956 3.37323H3.32137C3.53798 3.37323 3.72996 3.23375 3.7969 3.02773L4.66845 0.345362Z" fill="#FF9D00"/>
  </svg>
)

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
    <section className="mb-20 sm:mb-45">

      {/* Section heading */}
      <div className="text-center mb-10 sm:mb-20 max-w-[713px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#101828] mb-5 -tracking-[2%]">
          Check Our Clients{" "}
          <span className="text-[#ED3C6A]">Review</span>
        </h2>
        <p className="text-[#000000] text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="flex-none w-[85vw] sm:w-[400px] lg:w-[530px]"
            >
              <div className={`rounded-2xl p-6 sm:pt-11.5 sm:pb-11 sm:pl-9.25 sm:pr-10.5 transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white shadow-[0px_4px_77px_0px_rgba(0,0,0,0.08)] opacity-100 scale-100"
                  : "bg-[#F6F6F6] opacity-100 scale-95"
              }`}>

                <div className="flex items-center gap-4 sm:gap-7.5">

                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    {/* Reviewer name */}
                    <h4 className="font-bold text-[#000000] text-base sm:text-xl mb-1.25">
                      {t.name}
                    </h4>

                    {/* Review text */}
                    <p className="text-[#000000] text-xs sm:text-sm font-medium mb-3 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {t.text}
                    </p>

                    {/* Star rating */}
                    <div className="flex items-center gap-0.75">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <StarIcon key={i} />
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
  )
}

export default TestimonialsSection