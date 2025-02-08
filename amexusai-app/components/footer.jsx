import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] py-4">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <Link href="/" className="text-white text-xl font-bold">
              Logo
            </Link>
            <p className="text-gray-400 mt-2">Bridging Business with AI</p>
          </div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/solution" className="text-gray-300 hover:text-white">
              Solution
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-white">
              Our Team
            </Link>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-center text-gray-400">© 2025 Amexus AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

