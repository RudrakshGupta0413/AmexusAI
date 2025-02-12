"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./flip-text";
import ComingSoonPopup from "./coming-soon-popup";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="flex items-center justify-center px-6 py-16 sm:py-24 lg:py-32 min-h-screen">
            <div className="max-w-7xl w-full text-center">
                {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-roboto-slab">
                    <div className="flex justify-center items-baseline space-x-2 h-[1.5em]">
                        <AnimatedText />
                        <span className="my-4">Your Business with</span>
                    </div>
                    <div className="mt-2">Custom AI Chatbots/Solutions</div>
                </h1> */}

                <h1 className="text-3xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-roboto-slab text-center leading-tight">
                    <div className="flex justify-center items-center h-[1.5em]">
                        <AnimatedText />
                    </div>
                    <div className="mt-2">Your Business with</div>
                    <div className="mt-2">Custom AI Chatbots/Solutions</div>
                </h1>

                <p className="max-w-screen mx-auto sm:text-xl text-[#9A9A9A] mb-8 text-center">
                    Amexus AI empowers businesses with custom-built chatbots that optimize customer interactions.
                    <br />
                    Generate qualified leads and automate key processes.
                </p>

                <div className="flex justify-center">
                    <Button
                className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white rounded-xl px-6 py-6 text-lg flex items-center justify-center"
                onClick={() => setIsPopupOpen(true)}
              >
                Book Demo <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
                </div>
            </div>

            <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </section>
    );
}
