"use client";

import { useEffect } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BookingPage() {
    useEffect(() => {
        if (!document.querySelector("script[src='https://assets.calendly.com/assets/external/widget.js']")) {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Section */}
            <div
                className="w-full md:w-1/2 flex flex-col justify-evenly px-6 md:px-14 py-12 md:py-20 bg-cover bg-center text-white bg-[#0A0F1D] min-h-[60vh] md:min-h-full"
                style={{ backgroundImage: "url('/BgImage.png')" }}
            >
                <div className="flex justify-center md:justify-start">
                    <img src="/Logo.png" alt="Amexus Logo" className="w-32 md:w-50 h-auto mb-4 md:mb-6" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-10 leading-tight">
                        <span className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] bg-clip-text text-transparent">
                            Supercharge
                        </span>
                        <br className="hidden md:block" /> Your Business with <br className="hidden md:block" /> Custom AI Solutions
                    </h1>
                    <p className="text-[#9A9A9A] font-roboto-slab text-base md:text-2xl mb-4 md:mb-6">
                        Amexus AI empowers businesses with custom-built agents that optimize customer interactions, generate qualified leads, and automate key processes.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:space-x-4">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.linkedin.com/company/amexusai" className="text-white text-xl md:text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/AmexusAi" className="text-white text-xl md:text-2xl">
                            <FaXTwitter />
                        </a>
                    </div>
                    <div className="text-gray-400 text-xs md:text-lg">
                        <a href="#" className="mr-2 md:mr-4">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>

            {/* Right Section (Calendly Widget) */}
            <div className="w-full md:w-1/2 flex justify-center items-center bg-white py-6 md:py-0">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/amexusai25/know-amexus-ai"
                    style={{
                        minWidth: "280px",
                        height: "700px",
                        width: "100%",
                        maxWidth: "750px",
                        padding: "20px",
                    }}
                ></div>
            </div>
        </div>
    );
}
