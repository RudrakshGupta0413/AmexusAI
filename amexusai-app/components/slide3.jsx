"use client"

import { useState, useEffect, useRef } from "react"
import CountUp from "react-countup"

const gradientStyle = {
  background: "linear-gradient(180deg, #F0E68C 0%, #9ACD32 30%, #2E8B57 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "brightness(1.1) contrast(1.05)",
}

const AnimatedStat = ({ prefix, targetValue }) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="bg-[#161923] rounded-2xl p-8 flex flex-col">
      {prefix && <div className="text-sm text-gray-400 mb-4">{prefix}</div>}
      {!prefix && <div className="text-sm text-gray-400 mb-4 invisible">Placeholder</div>}
      <div
        className="text-5xl md:text-6xl font-bold mb-4 h-[80px] flex items-center justify-center"
        style={gradientStyle}
      >
        {isInView ? (
          <CountUp start={0} end={targetValue} duration={3} separator="," />
        ) : (
          "0"
        )}
        %
      </div>
    </div>
  )
}

const Slide3 = () => {
  const stats = [
    { prefix: "Upto", value: 50, label: "Boost in Operational\nEfficiency" },
    { value: 30, label: "Increase in Lead\nConversion" },
    { value: 60, label: "Reduction in\nResponse Time" },
    { prefix: "Achieve", value: 20, label: "Growth in ROI" },
  ]

  return (
    <section className="min-h-screen bg-[#0D111D] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Achieve Tangible Results with Amexus AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-16">
          Let Amexus AI optimize your processes and help your business grow faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} prefix={stat.prefix} targetValue={stat.value} />
          ))}
        </div>

        {/* ✅ Added the "Book Demo" Button Back */}
        <div className="mt-16">
          <a
            href="#book-demo"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-b from-[#F0E68C] via-[#9ACD32] to-[#2E8B57] 
            hover:from-[#E0D67C] hover:via-[#8ABD22] hover:to-[#1E7B47] text-white font-semibold rounded-lg transition-all duration-300"
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
