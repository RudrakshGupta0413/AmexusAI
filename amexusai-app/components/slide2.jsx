"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const slide2 = () => {
  const [selectedFeature, setSelectedFeature] = useState(0)

  const features = [
    {
      title: "Smart Lead Generation",
      description:
        "Efficiently collect and organize data to identify and qualify high-potential leads, boosting conversion rates",
      gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
    },
    {
      title: "Streamline Operations",
      description: "From scheduling meetings to managing internal queries, automate routine tasks intelligently",
      gif: "https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif",
    },
    {
      title: "Data Analytics & Insights",
      description: "Turn conversations into insights with advanced analytics and reporting",
      gif: "https://media.giphy.com/media/3oKIPavn7vUxWFjTqw/giphy.gif",
    },
  ]

  return (
    <div className="h-screen bg-[#0A0F1D] text-white flex flex-col">
      

      {/* Main Content */}
      <main className="flex-grow flex items-center px-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-8">
          {/* Left Column: Features */}
          <div className="space-y-8 relative">
            <h1 className="text-3xl font-bold mb-8">Unlock AI's Full Potential in Your Business</h1>

            {/* Single long radio button indicator */}
            <div className="absolute left-0 top-16 bottom-0 w-1 bg-gray-600 rounded-full">
              <motion.div
                className="absolute w-full h-[4.5rem] bg-green-500 rounded-full"
                animate={{
                  top: `${selectedFeature * 5.5}rem`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </div>

            {/* Feature Items */}
            {features.map((feature, index) => (
              <div key={index} className="pl-6 cursor-pointer" onClick={() => setSelectedFeature(index)}>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Preview Area */}
          <div className="bg-gray-800/50 rounded-xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <motion.div
              className="w-full h-full"
              key={selectedFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={features[selectedFeature].gif || "/placeholder.svg"}
                alt={features[selectedFeature].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default slide2

