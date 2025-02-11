"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0F1D]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the Left */}
          <Link href="/">
            <Image src="/Logo.png" width={150} height={50} alt="Amexus AI" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-white">
              Solution
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Our Team
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              FAQ
            </Link>
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
        <div className="md:hidden bg-[#0A0F1D] w-full py-4 px-6 space-y-4 absolute top-16 left-0 flex flex-col items-center space-y-6 shadow-md">
          <Link href="#" className="block text-gray-300 hover:text-white">
            Solution
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white">
            Our Team
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white">
            Contact Us
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white">
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
}
