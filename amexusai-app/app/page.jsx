import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Mockup from "@/components/mockup"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1D]">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%208%20(1)%20(1)-MXSwx5olujlXCVBAZfZ6G8b5Nj0akD.png")',
          }}
        />
        <div className="absolute inset-0 bg-[#0A0F1D]/50" />
        <div className="relative">
          <Navbar />
          <Hero />
          <Mockup />
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}

