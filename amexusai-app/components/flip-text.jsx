"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Supercharge", "Empower", "Transform"]

export default function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[380px] h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-start"
        >
          <span className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] bg-clip-text text-transparent whitespace-nowrap">
            {words[index]}
          </span>

        </motion.div>
      </AnimatePresence>
    </div>
  )
}

