"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowAnimation(window.innerWidth >= 1300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center px- py-16 sm:py-24 lg:py-32 min-h-[100vh]"
    >
      <div className="max-w-7xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-l from-[#4CAF50] to-[#A4D03C] bg-clip-text text-transparent"
        >
          <span className="block">Agentic AI for Every</span>
          <span className="block leading-[1.5]">Industry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="max-w-screen mx-auto text-base sm:text-md lg:text-2xl text-[#9A9A9A] mb-12 text-center tracking-[0.01em] font-mono"
        >
          Transform your business with intelligent AI systems that automate
          workflows,
          <br />
          enhance decision-making, and unlock new efficiencies across
          operations, customer experience, analytics, and beyond.
        </motion.p>

        {/* Book Demo Button Removed */}
      </div>
    </section>
  );
}
