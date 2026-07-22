import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutFirm from "@/components/sections/AboutFirm";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Leadership from "@/components/sections/Leadership";
import Knowledge from "@/components/sections/Knowledge";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FirmStatistics from "@/components/sections/FirmStatistics";
import HashScrollHandler from "@/components/ui/HashScrollHandler";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HashScrollHandler />
        <Hero />

        <AboutFirm />

        <FirmStatistics />

        <PracticeAreas />

        <Leadership />

        <Knowledge />

        <Contact />

      </main>
      <Footer />
    </>
  );
}