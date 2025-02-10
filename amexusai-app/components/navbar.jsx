"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0F1D]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-3xl font-bold">
              Logo
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Solution
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Our Team
                </Link>
              </div>
            </div>
          </div>
          {/* <Button className="bg-gradient-to-r from-[#4CAF50] to-[#A4D03C] hover:opacity-90 text-white">Book Demo</Button> */}
        </div>
      </div>
    </nav>
  )
}

