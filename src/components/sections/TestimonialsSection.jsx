"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

// Testimonial data
const testimonials = [
  { id: 1, name: "Jenny Wilson", image: "/images/jenny.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 2, name: "Esther Howard", image: "/images/esther.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 3, name: "Robert Fox", image: "/images/robert.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 4, name: "John Doe", image: "/images/john.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 5, name: "Sarah Lee", image: "/images/sarah.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
]

const TestimonialsSection = () => {
  // Initialize Embla carousel with loop, center alignment and autoplay every 3s
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  // Track the currently active slide index
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update selectedIndex whenever the active slide changes
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
      {/* Embla viewport — overflow hidden clips side cards partially */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, index) => (
            // Each slide: responsive width so 3 cards are visible at once
            <div
              key={t.id}
              className="flex-none w-[60%] sm:w-[45%] lg:w-[36%]"
            >
              {/* Active card gets full opacity and normal scale; inactive cards are dimmed and scaled down */}
              <div className={`bg-white rounded-2xl p-6 border transition-all duration-300 ${
                index === selectedIndex
                  ? "shadow-[0px_4px_77.4px_0px_rgba(136,136,136,0.41)] border-none opacity-100 scale-100"
                  : "shadow-sm border-none opacity-50 scale-95"
              }`}>
                {/* Reviewer info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-bold text-[#101828] text-lg">{t.name}</h4>
                </div>

                {/* Review text */}
                <p className="text-[#606060] text-sm leading-6 mb-4">{t.text}</p>

                {/* Star rating */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#F4C430] text-base">★</span>
                  ))}
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