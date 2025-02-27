"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HandHeart, Megaphone } from "lucide-react";

const mockupData = {
  health: {
    image: "/Mockup_3.png",
    title: "Health Care Solutions",
  },
  marketing: {
    image: "/Mockup_4.png",
    title: "Marketing Solutions",
  },
};

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState("health");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-4 py-6 md:py-12 relative w-full"
    >
      <div className="max-w-[1350px] w-full mx-auto">
        <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-10">
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="gradientIcon"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#57ebde" />
                <stop offset="100%" stopColor="#aefb2a" />
              </linearGradient>
            </defs>
          </svg>

          <button
            onClick={() => setActiveTab("health")}
            className={cn(
              "flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base",
              activeTab === "health"
                ? "gradient-border-active glow-effect font-medium"
                : "text-gray-400 hover:text-gray-300 bg-[#171b26] hover:bg-[#1f2937]"
            )}
          >
            <HandHeart
              className="w-5 h-5 mr-3"
              style={{
                fill: activeTab === "health" ? "url(#gradientIcon)" : "#9CA3AF",
              }}
            />
            <span className={activeTab === "health" ? "gradient-text" : ""}>
              Supply Chain
            </span>
          </button>

          <button
            onClick={() => setActiveTab("marketing")}
            className={cn(
              "flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base",
              activeTab === "marketing"
                ? "gradient-border-active glow-effect font-medium"
                : "text-gray-400 hover:text-gray-300 bg-[#171b26] hover:bg-[#1f2937]"
            )}
          >
            <Megaphone
              className="w-5 h-5 mr-3"
              style={{
                fill:
                  activeTab === "marketing" ? "url(#gradientIcon)" : "#9CA3AF",
              }}
            />
            <span className={activeTab === "marketing" ? "gradient-text" : ""}>
              Finance & Accounting
            </span>
          </button>
        </div>

        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Image Wrapper with Text Overlay */}
          <div className="relative w-full max-w-[95%] md:max-w-full">
            <Image
              src={mockupData[activeTab].image || "/placeholder.svg"}
              alt={mockupData[activeTab].title}
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-2xl object-cover transition-all duration-300"
            />

            {/* Responsive Text Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h1 className="text-white text-lg sm:text-md md:text-3xl lg:text-5xl font-bold drop-shadow-lg tracking-[0.15em] sm:tracking-[0.1em]">
                Glimpses of Amexus AI
              </h1>
            </div> */}
          </div>
        </motion.div>
      </div>
      {/* Background Gradient Fix */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent to-[#0A0F1D] pointer-events-none"></div>
    </section>
  );
}