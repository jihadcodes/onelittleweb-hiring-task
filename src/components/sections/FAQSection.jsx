"use client"
import React, { useState } from 'react'
import { faqData } from "@/lib/data";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQ = () => {
  const [openId, setOpenId] = useState(1)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="pb-4.75 px-4 sm:px-6">
      <div className="max-w-310 bg-[#F9FAFB] mx-auto rounded-2xl py-10 sm:py-18.5 px-5 sm:px-10">

        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#101828] mb-5 -tracking-[2%]">
            Frequently asked{" "}
            <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="text-[#000000] text-base sm:text-[20px] leading-7.5">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={index !== 0 ? "mt-6.25 border-t border-[rgba(191,33,75,0.25)]" : ""}
            >
              {/* Question row */}
              <button
                onClick={() => handleToggle(faq.id)}
                className={`w-full flex items-center justify-between text-left gap-4 cursor-pointer ${index !== 0 ? "pt-[25px]" : ""}`}
              >
                <span className="text-[#000000] font-bold text-[15px] sm:text-[18px] leading-7">
                  {faq.question}
                </span>

                {openId === faq.id
                  ? <MinusCircle size={22} className="text-[#ED3C6A] shrink-0" />
                  : <PlusCircle size={22} className="text-[#ED3C6A] shrink-0" />
                }
              </button>

              {/* Answer */}
              <div className={`grid transition-all duration-400 ease-in-out ${openId === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="text-[#606060] text-sm sm:text-base leading-6 mt-2 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ