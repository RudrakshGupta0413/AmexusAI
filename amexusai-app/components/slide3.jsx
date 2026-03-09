"use client";

import { AnimatedStat } from "./animatedstat";
import { Roboto_Slab, Fira_Code } from "next/font/google";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ComingSoonPopup from "./coming-soon-popup";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});

const Slide3 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { prefix: "Upto", value: 3, label: "Faster Inventory\nTurns" },
    { prefix: "Upto", value: 30, label: "Reduction\nLogistics Cost" },
    { value: 40, label: "Faster Order\nFulfilment Speed" },
    { prefix: "Upto", value: 45, label: "Forecast Accuracy" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#0A0F1D] py-8 md:py-16 px-4"
    >
      <div className="max-w-[1350px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-3 md:mb-4 ${robotoSlab.className}`}
        >
          Achieve Tangible Results
          <br className="hidden sm:block" /> with Amexus AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-[#9A9A9A] mb-8 md:mb-16 font-mono max-w-6xl mx-auto"
        >
          Let Amexus AI optimize your processes and help your business grow
          faster.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full h-full p-6 rounded-2xl bg-[#171B26] flex flex-col items-center justify-center"
            >
              <AnimatedStat
                prefix={stat.prefix}
                targetValue={stat.value}
                label={stat.label}
                suffix={stat.value === 3 ? "X" : "%"} // <-- Dynamic suffix
                className="bg-transparent"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 md:mt-16 flex justify-center w-full"
        >
          <Link href="/booking">
            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-6 text-lg flex items-center justify-center">
              Book Demo <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <ComingSoonPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </motion.section>
  );
};

export default Slide3;
