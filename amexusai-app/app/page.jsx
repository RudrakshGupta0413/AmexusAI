import Slide2 from "@/components/slide2"
import Slide3 from "@/components/slide3"
import Slide4 from "@/components/slide4"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import WorkingSection from "@/components/working_section"
import TeamSection from "@/components/team-section";
import ParallaxBackground from "@/components/parallax-bg";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0A0F1D]">
      <ParallaxBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <WorkingSection />
        <Slide2 />
        <Slide3 />
      </div>
      <div className="bg-[#0A0F1D] relative z-20">
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

