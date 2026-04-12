import FAQ from '@/components/sections/FAQSection'
import GettingStartedSection from '@/components/sections/GettingStartedSection'
import HeroSection from '@/components/sections/HeroSection'
import PricingSection from '@/components/sections/PricingSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ToolsSection from '@/components/sections/ToolsSection'
import TrustedBy from '@/components/sections/TrustedBy'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <TrustedBy/>
      <ServicesSection/>
      <PricingSection/>
      <ToolsSection/>
      <TestimonialsSection/>
      <FAQ/>
      <GettingStartedSection/>
    </div>
  )
}
