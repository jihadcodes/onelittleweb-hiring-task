"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import AppImage from "../ui/AppImage";
import { billingPlans } from "@/lib/data";


export default function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section id="pricing" className="pt-18.25 bg-white">
      <div className="max-w-296 mx-auto px-4 sm:px-6">

        <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-4 text-center">
          Airnbn Assistent <span className="text-[#ED3C6A]">Pricing</span>
        </h2>
        <p className="text-[#191D23] text-base md:text-[18px] lg:text-[20px] font-normal mb-9.5 text-center">
          Choose a plan that&#39;s right for you
        </p>

        {/* Billing cycle toggle */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative flex items-center gap-4">

            <span className="text-[16px] font-normal text-[#191D23]">
              Pay Monthly
            </span>

            <button
              role="switch"
              aria-checked={annualBilling}
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                annualBilling ? "bg-[#F72585]" : "bg-gray-300"
              }`}
            >
              <span className={`absolute left-0 top-0.75 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-300 ${
                annualBilling ? "translate-x-5.75" : "translate-x-0.75"
              }`} />
            </button>

            <span className="text-[16px] font-normal text-[#191D23]">
              Pay Yearly
            </span>

            <div className={`hidden md:block transition-opacity duration-300 ${
              annualBilling ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}>
              <AppImage
                src="/images/Pricing/save13.png"
                alt="Save 25%"
                width={185}
                height={88}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {billingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[10px] px-4 md:px-4 lg:px-6 py-8 md:py-6 lg:py-10 ${
                plan.featured
                  ? "bg-[#ED3C6A]"
                  : "border border-[#FAC4D2] bg-white"
              }`}
            >
              <h3 className={`text-[22px] md:text-[16px] lg:text-[22px] font-bold font-manrope mb-2.75 ${
                plan.featured ? "text-white" : "text-gray-900"
              }`}>
                {plan.planName}
              </h3>

              <p className={`text-sm md:text-[11px] lg:text-sm mb-6 font-manrope min-h-11 ${
                plan.featured ? "text-pink-100" : "text-gray-500"
              }`}>
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-[56px] md:text-[36px] lg:text-[56px] font-semibold ${
                  plan.featured ? "text-white" : "text-gray-900"
                }`}>
                  ${annualBilling ? plan.cost.annually : plan.cost.monthly}
                </span>
                <span className={`text-[16px] md:text-[13px] lg:text-[16px] font-light ml-1 ${
                  plan.featured ? "text-pink-100" : "text-gray-500"
                }`}>
                  / Month
                </span>
              </div>

              {/* Action button */}
              <button className={`w-full py-2.5 md:py-2 lg:py-3 rounded-lg font-semibold text-[16px] md:text-[13px] lg:text-[16px] mb-8 md:mb-5 lg:mb-8 transition-colors duration-200 font-manrope ${
                plan.featured
                  ? "bg-white text-[#ED3C6A] hover:bg-pink-50"
                  : "border border-[1.5px] border-[#F72585] text-[#F72585] hover:bg-[#F72585] hover:text-white"
              }`}>
                Get Started Now
              </button>

              {/* Capability list */}
              <ul className="space-y-2 md:space-y-1.5 lg:space-y-3" role="list">
                {plan.capabilities.map((item) => (
                  <li key={item.feature} className="flex items-center gap-2 md:gap-1.5 lg:gap-3">
                    <span className={`w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0 ${
                      item.available
                        ? "bg-[#FAC4D2]"
                        : plan.featured ? "bg-white" : "bg-[#F7F8F9]"
                    }`}>
                      {item.available
                        ? <Check size={14} className="text-[#F72585]" />
                        : <X size={14} className="text-black" />
                      }
                    </span>
                    <span className={`text-[16px] md:text-[11px] lg:text-[16px] font-medium font-manrope ${
                      item.available
                        ? plan.featured ? "text-white" : "text-[#191D23]"
                        : plan.featured ? "text-white" : "text-[#C4C4C4]"
                    }`}>
                      {item.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}