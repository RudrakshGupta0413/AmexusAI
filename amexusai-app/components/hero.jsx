"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
    const words = ["Engage", "Automate", "Optimize"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {/* <span className="text-[#4CAF50]">Supercharge</span> Your Business */}
            <motion.span 
            key={index}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{opacity: 0, rotateX: 90}}
            transition={{ duration: 0.6 }}
            className="text-[#4CAF50] inline-block">
                {words[index]}
            </motion.span>{" "}
            Your Business
            <br />
            with Custom AI Chatbots/Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
            Amexus AI empowers businesses with custom-built chatbots that optimize customer interactions, generate
            qualified leads, and automate key processes.
          </p>
          <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white text-lg px-8 py-6">Book Demo <span className="text-2xl font-bold">→</span></Button>
        </div>
      </div>
    </div>
  )
}

