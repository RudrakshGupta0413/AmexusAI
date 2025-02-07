import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Mockup from "@/components/mockup"
import Slide2 from "@/components/slide2"

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
      </div>
    </main>
  )
}

