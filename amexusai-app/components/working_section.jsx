"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkingSection() {
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
      { threshold: 0.3 },
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
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Image Wrapper */}
          <div className="relative w-full max-w-[95%] md:max-w-full">
            <Image
              src="/Mockup_3.png"
              alt="Health Care Solutions"
              width={1200}
              height={800}
              priority
              className="w-full rounded-lg shadow-2xl object-cover transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
      {/* Background Gradient Fix */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent to-[#0A0F1D] pointer-events-none"></div>
    </section>
  );
}
