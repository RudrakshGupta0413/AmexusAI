"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./flip-text";
import ComingSoonPopup from "./coming-soon-popup";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="home"
      className="flex items-center justify-center px-6 py-16 sm:py-24 lg:py-32 min-h-[85vh]"
    >
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mt-10 mb-10 sm:mb-5 font-roboto-slab text-center leading-tight">
          <div className="flex justify-center items-center h-[1.5em]">
            <AnimatedText />
          </div>
          <div className="mt-2">Your Business</div>
          <div className="mt-2">with Custom AI Solutions</div>
        </h1>

        <p className="max-w-screen mx-auto text-base sm:text-md lg:text-2xl text-[#9A9A9A] mb-12 text-center tracking-[0.01em] font-mono">
          Empower your business with AI that automates and refines every
          step-from forecasting
          <br />
          demand and managing inventory to streamlining invoicing and
          safeguarding against fraud.
        </p>

        <div className="flex justify-center">
          <Link href="/booking">
            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-6 text-lg flex items-center justify-center">
              Book Demo <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>

      {/* <ComingSoonPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      /> */}
    </section>
  );
}