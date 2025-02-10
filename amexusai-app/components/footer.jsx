import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] py-8">
      <div className="max-w-[1450px] mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div>
            <Link href="/" className="text-[#4CAF50] text-2xl font-bold">
              AMEXUS AI
            </Link>
            <p className="text-gray-400 mt-1">Bridging Business with AI</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-300 hover:text-white">
              Solution
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Our Team
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          <Link href="/" className="text-[#4CAF50] text-xl font-bold">
            AMEXUS
          </Link>
          <p className="text-gray-400 text-sm">Bridging Business with AI</p>
          <div className="flex gap-6 mt-2">
            <Link href="#" className="text-gray-300 hover:text-white text-sm">
              Solution
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm">
              Our Team
            </Link>
          </div>
        </div>

        {/* Copyright - Both Layouts */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-xs">© 2025 Amexus AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

