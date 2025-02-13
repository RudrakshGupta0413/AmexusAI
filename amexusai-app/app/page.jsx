import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Mockup from "@/components/mockup"
import Slide2 from "@/components/slide2"
import Slide3 from "@/components/slide3"
import Slide4 from "@/components/slide4"
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PlatformSection from "@/components/platform-ui-section";
import TeamSection from "@/components/team-section";
import ParallaxBackground from "@/components/parallax-bg";

export default function Home() {
  return (
    // <main className="min-h-screen bg-[#0A0F1D]">
    //   {/* Background Image for Hero and Platform Sections */}
    //   <div
    //     className="relative bg-fixed bg-cover bg-center"
    //     style={{
    //       backgroundImage: 'url("/BgImage.png")',
    //     }}
    //   >
    //     {/* Overlay for Background Image */}
    //     <div className="bg-[#0A0F1D]/30">
    //       <Navbar />
    //       <HeroSection />
    //       <PlatformSection />
    //     </div>
    //   </div>
    //   {/* Solid Background Sections */}
    //   <div className="bg-[#0A0F1D]">
    //     <TeamSection />
    //     <ContactSection />
    //     <Footer />
    //   </div>
    // </main>

    <main className="min-h-screen relative bg-[#0A0F1D]">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Mockup />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <HeroSection />
        <PlatformSection />
      </div>
      <div className="bg-[#0A0F1D] relative z-20">
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

