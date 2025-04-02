"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
    title: "Autonomous AI Agents",
    description: "AI that doesn't just analyze-it takes action to move your business forward.",
    gif: "/slide2_image1.png",
  },
  {
    title: "Tailored for Your Industry",
    description: "AI tailored to your industry needs, integrating effortlessly into your workflow.",
    gif: "/slide2_image2.png",
  },
  {
    title: "Fast & Easy Deployment",
    description: "No complex setup-delpoy AI instantly and start automating from day one.",
    gif: "/slide2_image3.png",
  },
]

export default function Slide2() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  })

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedFeature(index)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-[90vh] bg-[#171B26] mt-5 text-white ${firaCode.className}`}
    >
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-normal mb-4 mx-auto leading-tight md:whitespace-nowrap ${robotoSlab.className}`}>
            Unlock AI&apos;s Full Potential in Your Business
          </h1>
          <p className="text-[#D2D2D2] text-base md:text-lg max-w-6xl mx-auto px-4">
            Amexus AI&apos;s agents are designed to streamline your business operations, automate processes, and
            enhance customer interactions
          </p>
        </div>

        {/* Mobile: Stack everything vertically */}
        <div className="md:hidden space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center px-4"
            >
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
            </motion.div>
          ))}
        </div>

        {/* Desktop: Interactive two-column layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Features */}
          <div className="relative">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
                    <h3 className={`text-2xl font-bold mb-2 md:whitespace-nowrap ${robotoSlab.className}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Preview Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
