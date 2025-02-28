import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] py-8">
      <div className="max-w-[1450px] mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo & Tagline */}
          <div>
            <Link href="/">
              <Image src="/Logo.png" alt="Amexus AI" width={150} height={50} />
            </Link>
            <p className="text-[#FFFFFF] mt-1">Bridging Business with AI</p>
          </div>

          {/* Social Icons & Links */}
          <div className="flex flex-col items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/company/amexusai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFBFBF] hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/AmexusAi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFBFBF] hover:text-white"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Privacy Policy & Terms */}
            <div className="flex gap-8">
              <Link href="#" className="text-[#BFBFBF] hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#BFBFBF] hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {/* Logo & Tagline */}
          <Link href="/">
            <Image src="/Logo.png" alt="Amexus AI" width={150} height={50} />
          </Link>
          <p className="text-[#FFFFFF] text-md">Bridging Business with AI</p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/amexusai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFBFBF] hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/AmexusAi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFBFBF] hover:text-white"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Privacy Policy & Terms */}
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
