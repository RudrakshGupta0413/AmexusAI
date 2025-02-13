"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ComingSoonPopup({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 rounded-xl ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-[#171b26] rounded-lg p-6 max-w-sm w-full mx-4 relative shadow-[0_0_25px_rgba(255,255,255,0.2)]
 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="absolute top-2 right-2 text-gray-400 hover:text-[#171b26]"
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <h2 className="text-2xl font-bold text-white mb-4">Coming Soon!</h2>
        <p className="text-gray-300">
          We're working hard to bring you this feature. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}
