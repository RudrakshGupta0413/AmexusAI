"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ComingSoonPopup from "./coming-soon-popup";
import Link from "next/link";

export default function ContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      id="contact"
      className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-20"
    >
      {/* Main Container */}
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="bg-[#171b26] rounded-3xl p-6 md:p-12 lg:p-16 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Mobile: Image on Top */}
          <div className="md:hidden flex justify-center">
            <Image
              src="/gif-ai-unscreen.gif"
              alt="AI Assistant GIF"
              width={400}
              height={400}
              unoptimized
              className="w-full max-w-[300px] sm:max-w-[400px] h-auto"
            />
          </div>

          {/* Left Content (Text & Button) */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Get in Touch with Us!
            </h1>
            <p className="text-lg sm:text-xl text-[#9A9A9A] mb-8 tracking-wide">
              We're excited to help you leverage AI for your business.
            </p>
            {/* Book Demo Button Removed */}
          </div>

          {/* Desktop: Image on Right */}
          <div className="hidden md:flex justify-center md:justify-end">
            <Image
              src="/gif-ai-unscreen.gif"
              alt="AI Assistant GIF"
              width={500}
              height={500}
              unoptimized
              className="w-full max-w-[450px] md:max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <ComingSoonPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
