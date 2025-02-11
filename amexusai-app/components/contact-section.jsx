"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ComingSoonPopup from "./coming-soon-popup"

export default function ContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className="min-h-screen py-40 px-4">
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[1550px] mx-auto">
        <div className="bg-[#171b26] min-h-[550px] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch with Us!</h2>
              <p className="text-gray-300 mb-6">We're excited to help you leverage AI for your business.</p>
              <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-5" onClick={() => setIsPopupOpen(true)}>
                Book Demo <ArrowRight className="ml-1 h-7 w-7" />
              </Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Robot_3.png"
                alt="AI Assistant"
                width={300}
                height={300}
                className="w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center text-center">
        <Image
          src="/Robot_3.png"
          alt="AI Assistant"
          width={250}
          height={250}
          className="w-auto h-auto mb-9"
        />
        <h2 className="text-3xl font-bold text-white mb-3">Get in Touch with Us!</h2>
        <p className="text-gray-300 mb-8 text-md">We're excited to help you leverage AI for your business.</p>
        <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-5" onClick={() => setIsPopupOpen(true)}>
                Book Demo <ArrowRight className="ml-1 h-7 w-7" />
              </Button>
      </div>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}

