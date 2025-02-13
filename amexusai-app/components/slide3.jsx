"use client"
import { getCLS, getFID, getLCP } from 'web-vitals';
import { AnimatedStat } from "./animatedstat"
import { Roboto_Slab, Fira_Code } from "next/font/google"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
})

const Slide3 = () => {
  const stats = [
    { prefix: "Upto", value: 50, label: "Boost in\nOperational\nEfficiency" },
    { value: 30, label: "Increase in Lead\nConversion" },
    { value: 60, label: "Reduction in\nResponse Time" },
    { prefix: "Achieve", value: 20, label: "Growth in ROI" },
  ]

  return (
    <section className="min-h-screen bg-[#0D111D] py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-3 md:mb-4 ${robotoSlab.className}`}>
          Achieve Tangible Results
          <br className="hidden sm:block" /> with Amexus AI
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-16 font-mono max-w-2xl mx-auto">
          Let Amexus AI optimize your processes and help your business grow faster.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-lg lg:max-w-none mx-auto">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} prefix={stat.prefix} targetValue={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="mt-8 md:mt-16">
          <a
            href="#book-demo"
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2E8B57] to-[#9ACD32] 
              hover:from-[#247346] hover:to-[#89BC21] text-white font-semibold rounded-lg transition-all duration-300 ${robotoSlab.className}`}
          >
            Book Demo
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Slide3

