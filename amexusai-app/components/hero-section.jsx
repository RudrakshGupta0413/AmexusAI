"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./flip-text";
import ComingSoonPopup from "./coming-soon-popup";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-roboto-slab">
                    <div className="flex justify-center items-baseline flex-wrap">
                        <AnimatedText />
                        <span className="ml-2">Your Business</span>
                    </div>
                    <div className="mt-2">
                        <span className="ml-2">with Custom AI Chatbots/Solutions</span>
                    </div>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                    Amexus AI empowers businesses with custom-built chatbots that optimize customer interactions, generate
                    qualified leads, and automate key processes.
                </p>
                <Button
                    className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white text-lg px-8 py-6"
                    onClick={() => setIsPopupOpen(true)}
                >
                    Book Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
            <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </section>
    );
}
