import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactSection() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1550px] mx-auto">
        <div className="bg-[#171b26] rounded-2xl p-8 md:p-12">
          {" "}
          {/* Updated background color and added subtle border */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch with Us!</h2>
              <p className="text-gray-300 mb-6">We're excited to help you leverage AI for your business.</p>
              <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">Book Demo →</Button>
            </div>
            <div className="bg-[#171b26] flex justify-center md:justify-end">
              <Image src="/Robot_2.png" alt="AI Assistant" width={300} height={300} className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

