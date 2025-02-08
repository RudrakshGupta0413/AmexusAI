"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartPulse, Megaphone } from "lucide-react";

const mockupData = {
  health: {
    image: "/Mockup_2.png",
    title: "Health Care Solutions",
  },
  marketing: {
    image: "/Mockup_2.png",
    title: "Marketing Solutions",
  },
};

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="outline"
            className={cn("border-[#4CAF50] text-[#4CAF50] rounded-3xl px-6 py-5", activeTab === "health" && "bg-[#4CAF50] text-white rounded-3xl px-6 py-5")}
            onClick={() => setActiveTab("health")}
          >
            <HeartPulse size={20} /> Health Care
          </Button>
          <Button
            variant="outline"
            className={cn("border-[#4CAF50] text-[#4CAF50] rounded-3xl px-6 py-5", activeTab === "marketing" && "bg-[#4CAF50] text-white rounded-3xl px-6 py-5")}
            onClick={() => setActiveTab("marketing")}
          >
            
           <Megaphone size={20} /> Marketing
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-4xl font-bold text-white/10">UI Of platform</h2>
          </div>
          <Image
            src={mockupData[activeTab].image || "/placeholder.svg"}
            alt={mockupData[activeTab].title}
            width={1200}
            height={800}
            className="w-full rounded-lg shadow-2xl transition-all duration-300"
          />
        </div>
      </div>
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#0A0F1D] pointer-events-none"></div>
    </section>
  );
}
