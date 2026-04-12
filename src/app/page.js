import FAQ from '@/components/sections/FAQSection'
import GettingStartedSection from '@/components/sections/GettingStartedSection'
import HeroSection from '@/components/sections/HeroSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ToolsSection from '@/components/sections/ToolsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <ToolsSection/>
      {/* <TestimonialsSection/> */}
      <FAQ/>
      <GettingStartedSection/>
    </div>
  )
}
