"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Roboto_Slab, Fira_Code } from "next/font/google"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
})

const features = [
  {
    title: "Smart Lead Generation",
    description:
      "Efficiently collect and organize data to identify and qualify high-potential leads, boosting conversion rates",
    gif: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Real-time Virtual Assistance",
    description: "Enable user with seamless responses to conversational prompts",
    gif: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Best-in-class Data Security",
    description: "Ensure end-to-end encoding and masking for sensitive user data.",
    gif: "/placeholder.svg?height=400&width=400",
  },
]

export default function Slide2() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedFeature(index)
    }
  }

  return (
    <div className={`min-h-screen bg-[#0D111D] text-white ${firaCode.className}`}>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-normal mb-4 mx-auto leading-tight md:whitespace-nowrap ${robotoSlab.className}`}
          >
            Unlock AI&apos;s Full Potential in Your Business
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Amexus AI&apos;s chatbots are designed to streamline your business operations, automate processes, and
            enhance customer interactions
          </p>
        </div>

        {/* Mobile: Stack everything vertically */}
        <div className="md:hidden space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={feature.gif || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  onLoadingComplete={() => setImageLoading(false)}
                  onError={() => {
                    setImageLoading(false)
                    setImageError(true)
                  }}
                />
              </div>
              <h3 className={`text-2xl font-normal mb-3 ${robotoSlab.className}`}>{feature.title}</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Interactive two-column layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Features */}
          <div className="relative">
            {/* Continuous background line */}
            <div className="absolute left-4 top-0 w-1 h-full bg-gray-700/50 rounded-full" />

            {/* Active indicator line */}
            <motion.div
              className="absolute left-4 w-1 bg-green-400 rounded-full"
              initial={false}
              animate={{
                top: `${(selectedFeature * 100) / features.length}%`,
                height: `${100 / features.length}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />

            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative pl-12 cursor-pointer transition-colors duration-300",
                    selectedFeature === index ? "opacity-100" : "opacity-60 hover:opacity-80",
                  )}
                  onClick={() => setSelectedFeature(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selectedFeature === index}
                >
                  <div className="py-6">
                    <h3 className={`text-xl font-normal mb-2 md:whitespace-nowrap ${robotoSlab.className}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Preview Area */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[400px] aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {imageLoading && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400" />
                    </div>
                  )}
                  {imageError ? (
                    <div className="absolute inset-0 flex items-center justify-center text-red-500">
                      Failed to load image
                    </div>
                  ) : (
                    <Image
                      src={features[selectedFeature].gif || "/placeholder.svg"}
                      alt={features[selectedFeature].title}
                      fill
                      className="object-contain"
                      onLoadingComplete={() => setImageLoading(false)}
                      onError={() => {
                        setImageLoading(false)
                        setImageError(true)
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

