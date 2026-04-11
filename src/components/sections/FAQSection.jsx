"use client"
import React, { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'

const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
]

const FAQ = () => {
  const [openId, setOpenId] = useState(1)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className=" pb-4.75 ">
      <div className="max-w-310 bg-[#F9FAFB] mx-auto rounded-2xl py-18.5 ">

        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold  text-[#101828] mb-5 -tracking-[2%]">
            Frequently asked{" "}
            <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="text-[#000000] text-[20px] leading-7.5 ">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={index !== 0 ? "mt-[25px] border-t border-[rgba(191,33,75,0.25)]  " : ""}
            >
              {/* Question row */}
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex items-center justify-between text-left gap-4 pt-[25px]"
              >
                <span className="text-[#000000] font-bold  text-[18px] leading-7 ">
                  {faq.question}
                </span>

                <span className="shrink-0 w-5 h-5 rounded-full border-2 border-[#ED3C6A] text-[#ED3C6A] flex items-center justify-center text-xl font-light">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <p className="text-[#606060] text-base leading-6 mt-2 font-normal ">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ