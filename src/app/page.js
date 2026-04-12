import FAQ from '@/components/sections/FAQSection'
import GetInTouch from '@/components/sections/GetInTouch'
import HeroSection from '@/components/sections/HeroSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingSection from '@/components/sections/PricingSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ToolsSection from '@/components/sections/ToolsSection'
import TrustedBy from '@/components/sections/TrustedBy'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <TrustedBy/>
      <ServicesSection/>
      <PricingSection/>
      <ToolsSection/>
      <HowItWorksSection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
      <FAQ/>
      <GetInTouch/>
      
    </div>
  )
}
