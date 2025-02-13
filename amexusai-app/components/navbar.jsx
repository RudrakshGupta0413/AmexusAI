"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0F1D]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the Left */}
          <a href="/">
            <Image src="/Logo.png" width={150} height={50} alt="Amexus AI" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScroll("solution")} className="text-[#BFBFBF] hover:text-white">
              Solution
            </button>
            <button onClick={() => handleScroll("team")} className="text-[#BFBFBF] hover:text-white">
              Our Team
            </button>
            <button onClick={() => handleScroll("contact")} className="text-[#BFBFBF] hover:text-white">
              Contact Us
            </button>

             {/* Connect FAQ once all the pages are merger */ }
            <button onClick={() => handleScroll("faq")} className="text-[#BFBFBF] hover:text-white">
              FAQ
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0F1D] w-full py-4 px-6 absolute top-16 left-0 flex flex-col items-center space-y-6 shadow-md">
          <button onClick={() => handleScroll("solution")} className="block text-[#BFBFBF] hover:text-white">
            Solution
          </button>
          <button onClick={() => handleScroll("team")} className="block text-[#BFBFBF] hover:text-white">
            Our Team
          </button>
          <button onClick={() => handleScroll("contact")} className="block text-[#BFBFBF] hover:text-white">
            Contact Us
          </button>

          {/* Connect FAQ once all the pages are merger */ }
          <button onClick={() => handleScroll("faq")} className="block text-[#BFBFBF] hover:text-white">
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}
