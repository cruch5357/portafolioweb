import { MotionConfig } from "framer-motion";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoSection } from "@/components/sections/BentoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="relative min-h-screen">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:border-stroke-2 focus:bg-base focus:px-4 focus:py-2 focus:text-sm"
        >
          Saltar al contenido
        </a>
        <AmbientBackground />
        <Navbar />
        <main id="contenido" className="relative z-10 mx-auto max-w-[1080px] px-6">
          <Hero />
          <BentoSection />
          <ProjectsSection />
          <CertificationsSection />
          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}
