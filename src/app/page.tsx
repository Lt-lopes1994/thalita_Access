import Header from "@/components/Header";
import DynamicHero from "@/components/DynamicHero";
import DynamicAbout from "@/components/DynamicAbout";
import Services from "@/components/Services";
import AccessBars from "@/components/AccessBars";
import Testimonials from "@/components/Testimonials";
import DynamicContact from "@/components/DynamicContact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DynamicHero />
        <DynamicAbout />
        <Services />
        <AccessBars />
        <Testimonials />
        <DynamicContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
