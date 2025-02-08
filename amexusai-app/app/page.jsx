// import Navbar from "@/components/navbar"
// import ContactSection from "@/components/contact-section"
// import Footer from "@/components/footer"
// import HeroSection from "@/components/hero-section"
// import PlatformSection from "@/components/platform-ui-section"
// import TeamSection from "@/components/texm-section"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#0A0F1D]">
//       <div className="relative">
//         <div
//           className="absolute inset-0 bg-contain bg-center bg-no-repeat"
//           style={{
//             backgroundImage:
//               'url("/BgImage.png")',
//           }}
//         />
//         <div className="absolute inset-0 bg-[#0A0F1D]/30" />
//         <div className="relative">
//           <Navbar />
//           <HeroSection />
//           <PlatformSection />
//         </div>
//       </div>
//       <div className="bg-[#0A0F1D]">
//         <TeamSection />
//         <ContactSection />
//         <Footer />
//       </div>
//     </main>
//   )
// }


import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PlatformSection from "@/components/platform-ui-section";
import TeamSection from "@/components/texm-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1D]">
      {/* Background Image for Hero and Platform Sections */}
      <div
        className="relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/BgImage.png")',
        }}
      >
        {/* Overlay for Background Image */}
        <div className="bg-[#0A0F1D]/30">
          <Navbar />
          <HeroSection />
          <PlatformSection />
        </div>
      </div>

      {/* Solid Background Sections */}
      <div className="bg-[#0A0F1D]">
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

