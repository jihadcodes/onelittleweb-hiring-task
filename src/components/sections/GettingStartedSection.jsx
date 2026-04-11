import React from 'react'

import Image from 'next/image'

const GettingStartedSection = () => {
  return (
    <>
      <section className="mb-19.25">
        <div className="max-w-310 bg-[#F9FAFB] mx-auto rounded-2xl py-8 text-center items-center"> 
         <div className="w-full max-w-30 mx-auto mb-8">
          <Image 
            src="/images/GettingStarted/g_started.png"
            alt="Getting Started"
            width={120}
            height={56}
            className="object-cover object-top w-full h-full"
          />
         </div>
         <h3 className="font-bold text-[#101828] text-[20px] leading-7.5 mb-2">
            Still have Questions?
          </h3>
          <p className="text-[#9C9C9C] text-lg leading-7 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <button className="bg-[#ED3C6A] hover:bg-[#d4006e] text-white font-semibold text-sm px-4.5 py-2.5 rounded-lg transition-colors">
            Get in touch
          </button>
        </div>
      </section>
    </>
  )
}

export default GettingStartedSection
