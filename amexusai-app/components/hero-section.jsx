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
          <span className="block leading-[1.5]">Link in Your Supply Chain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="max-w-screen mx-auto text-base sm:text-md lg:text-2xl text-[#9A9A9A] mb-12 text-center tracking-[0.01em] font-mono"
        >
          Empower your business with AI that automates and refines every
          step—from forecasting
          <br />
          demand and managing inventory to streamlining invoicing and
          safeguarding against fraud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/booking">
            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-6 text-lg flex items-center justify-center">
              Book Demo <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
