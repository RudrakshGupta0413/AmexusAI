"use client";

import { useEffect } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BookingPage() {
    useEffect(() => {
        // Check if the script is already present to avoid multiple loads
        if (
            !document.querySelector(
                "script[src='https://assets.calendly.com/assets/external/widget.js']"
            )
        ) {
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
                className="md:w-1/2 flex flex-col justify-evenly px-14 bg-cover bg-center text-white bg-[#0A0F1D]"
                style={{ backgroundImage: "url('/BgImage.png')" }}
            >
                <div>
                    <img src="/Logo.png" alt="Amexus Logo" className="w-50 h-7 mb-6" />
                </div>
                <div>
                    <h1 className="text-7xl font-bold mb-10">
                        <span className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] bg-clip-text text-transparent whitespace-nowrap">Supercharge</span> Your Business
                        with <br /> Custom AI Solutions
                    </h1>
                    <p className="text-[#9A9A9A] font-roboto-slab text-2xl mb-6">
                        Amexus AI empowers businesses with custom-built chatbots that
                        optimize customer interactions, generate qualified leads, and
                        automate key processes.
                    </p>
                </div>
                <div className="flex justify-between items-center text-center">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white text-2xl">
                            <FaXTwitter />
                        </a>
                    </div>
                    <div className="text-gray-400 text-lg">
                        <a href="#" className="mr-4">
                            Privacy Policy
                        </a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>

            {/* Right Section (Calendly Widget) */}
            <div className="md:w-1/2 flex justify-center items-center bg-white p-10">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/rudrakshgupta40/30min?hide_event_type_details=1"
                    style={{
                        minWidth: "320px",
                        height: "800px",
                        width: "100%",
                        maxWidth: "700px",
                        padding: "60px",
                    }}
                ></div>
            </div>
        </div>
    );
}