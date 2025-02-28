import "@/app/globals.css"
import { Roboto_Slab } from "next/font/google"

const robotoSlab = Roboto_Slab({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: "Amexus AI - Custom AI Agents & Solutions",
  description: "Supercharge your business with custom AI agents and solutions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  )
}

