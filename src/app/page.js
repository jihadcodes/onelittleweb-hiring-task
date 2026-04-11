import FAQ from '@/components/sections/FAQSection'
import GettingStartedSection from '@/components/sections/GettingStartedSection'
import HeroSection from '@/components/sections/HeroSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <TestimonialsSection/>
      <FAQ/>
      <GettingStartedSection/>
    </div>
  )
}
