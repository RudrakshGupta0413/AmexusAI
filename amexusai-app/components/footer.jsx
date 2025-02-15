import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] py-8">
      <div className="max-w-[1450px] mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src="/Logo.png" alt="Amexus AI" width={150} height={50} />
            </Link>
            <p className="text-[#FFFFFF] mt-1">Bridging Business with AI</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[#BFBFBF] hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#BFBFBF] hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          <Link href="/">
            <Image src="/Logo.png" alt="Amexus AI" width={150} height={50} />
          </Link>
          <p className="text-[#FFFFFF] text-MD">Bridging Business with AI</p>
          <div className="flex gap-6 mt-2">
            <Link href="#" className="text-[#BFBFBF] hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#BFBFBF] hover:text-white text-sm">
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Copyright - Both Layouts */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <p className="text-white text-ms">
            © 2025 Amexus AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
