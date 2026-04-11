import FAQ from '@/components/sections/FAQSection'
import GettingStartedSection from '@/components/sections/GettingStartedSection'
import HeroSection from '@/components/sections/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <FAQ/>
      <GettingStartedSection/>
    </div>
  )
}
