"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Roboto_Slab, Fira_Code } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

const solutions = [
  {
    title: ["AI-Driven", "Supply Chain", "Efficiency"],
    description:
      "Enhance logistics with AI-powered demand forecasting, automated inventory management, and intelligent route optimization. Reduce delays, cut costs, and ensure seamless supply chain operations.",
    image: "/slide4_image2.png",
    alt: "AI in Supply Chain",
  },
  {
    title: ["Transforming", "Finance with AI"],
    description:
      "Our AI-driven financial assistant analyses transactions, detects fraud, automates wealth management, and enhances customer support-all in real time. Bost decision-making, improve security, and streamline financial operation.",
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
  {
    title: ["Revolutionizing", "Healthcare with", "Amexus AI"],
    description:
      "Our AI-powered health assistant analyzes medical reports, suggests specialists, and schedules appointments—all with real-time intelligence. Enhance patient care, reduce administrative burdens, and optimize healthcare workflows.",
    image: "/slide4_image1.png",
    alt: "AI in Healthcare",
  },
  
];

export default function AISolutions() {
  return (
    <section className="min-h-[87vh] bg-[#171B26] py-20 px-4">
      <div className="max-w-[1350px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-normal text-white mb-6 ${robotoSlab.className}`}>
            How Amexus AI Transforms Your Business
          </h2>
          <p className={`text-lg md:text-xl text-gray-400 ${firaCode.className}`}>
            Effortlessly integrate AI into your workflow with just a few easy steps.
          </p>
        </motion.div>

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
                    <h3 key={i} className={`text-2xl font-bold leading-snug text-white ${robotoSlab.className}`}>
                      {line}
                    </h3>
                  ))}
                </div>
                <p className={`text-gray-400 text-s italic leading-relaxed ${firaCode.className}`}>
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
