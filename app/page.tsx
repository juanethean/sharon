import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalWidget from "@/components/CalWidget";
import FondoParticulas from "@/components/FondoParticulas";

export default function Home() {
  return (
    <main className="pt-20">
      <FondoParticulas />
      <Header />
      <HeroSection />
      <Services />
      <FAQ />
      <Contact />
      <CalWidget />
      <WhatsAppButton />
    </main>
  );
}