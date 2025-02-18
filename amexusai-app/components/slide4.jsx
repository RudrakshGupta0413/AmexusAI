"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Roboto_Slab, Fira_Code } from "next/font/google"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const solutions = [
  {
    title: ["Revolutionizing", "Healthcare with", "Amexus AI"],
    description:
      "Our AI-powered health assistant analyzes medical reports, suggests specialists, and schedules appointments—all with real-time intelligence. Enhance patient care, reduce administrative burdens, and optimize healthcare workflows.",
    image: "/slide4_image1.png",
    alt: "AI in Healthcare",
  },
  {
    title: ["AI-Driven", "Supply Chain", "Efficiency"],
    description:
      "Enhance logistics with AI-powered demand forecasting, automated inventory management, and intelligent route optimization. Reduce delays, cut costs, and ensure seamless supply chain operations.",
    image: "/slide4_image2.png",
    alt: "AI in Supply Chain",
  },
  {
    title: ["Fortifying", "Cybersecurity", "with AI"],
    description:
      "Detect fraud, prevent cyber threats, and monitor security risks in real time with AI-driven anomaly detection and automated response systems. Stay ahead of evolving security challenges with cutting-edge intelligence.",
    image: "/slide4_image3.png",
    alt: "AI in Cybersecurity",
  },
  {
    title: ["Smarter", "E-Commerce with", "Amexus AI"],
    description:
      "AI-powered chatbots, personalized recommendations, and automated supply chain management drive sales and customer engagement. Optimize pricing, reduce cart abandonment, and boost conversions effortlessly.",
    image: "/slide4_image4.png",
    alt: "AI in E-commerce",
  },
];

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-[#171B26] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-normal mb-4 tracking-tight font-robotoSlab">
            Solving Industry Challenges with AI
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            Explore how Amexus AI drives efficiency, boosts customer satisfaction, and delivers actionable insights for
            businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-[#0D111D] rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.alt}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="h-[90px] mb-4">
                  {solution.title.map((line, i) => (
                    <h3 key={i} className="text-2xl font-bold leading-snug font-roboto-slab">
                      {line}
                    </h3>
                  ))}
                </div>
                <p className="text-gray-400 text-s font-mono leading-relaxed italic">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
