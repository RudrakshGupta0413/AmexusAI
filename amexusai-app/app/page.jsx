import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Mockup from "@/components/mockup"
import Slide2 from "@/components/slide2"
import Slide3 from "@/components/slide3"
import Slide4 from "@/components/slide4"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1D] relative">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url("/BgImage.png")',
        }}
      />
      <div className="absolute inset-0 bg-[#0A0F1D]/10 z-10" />
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <Mockup />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </div>
    </main>
  )
}

