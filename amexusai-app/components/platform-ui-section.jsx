"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mockupData = {
  health: {
    image: "/Mockup_2.png",
    title: "Health Care Solutions",
  },
  marketing: {
    image: "/Mockup_2.png",
    title: "Marketing Solutions",
  },
};

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <section className="min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center px-4 py-10 md:py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-center gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab("health")}
            className={cn(
              "px-6 py-3 rounded-full transition-all duration-300 text-base",
              activeTab === "health"
                ? "gradient-border-active glow-effect font-medium"
                : "text-gray-400 hover:text-gray-300 bg-[#171b26] hover:bg-[#1f2937]",
            )}
          >
            <span className={activeTab === "health" ? "gradient-text" : ""}>Health Care</span>
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={cn(
              "px-6 py-3 rounded-full transition-all duration-300 text-base",
              activeTab === "marketing"
                ? "gradient-border-active glow-effect font-medium"
                : "text-gray-400 hover:text-gray-300 bg-[#171b26] hover:bg-[#1f2937]",
            )}
          >
            <span className={activeTab === "marketing" ? "gradient-text" : ""}>Marketing</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-3xl md:text-4xl font-bold text-white/10">UI Of Platform</h2>
          </div>
          <Image
            src={mockupData[activeTab].image || "/placeholder.svg"}
            alt={mockupData[activeTab].title}
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl transition-all duration-300"
          />
        </div>
      </div>
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent to-[#0A0F1D] pointer-events-none"></div>
    </section>
  );
}
