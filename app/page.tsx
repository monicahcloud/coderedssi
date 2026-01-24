import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certification from "@/components/landingpage/Certification";
import CTA from "@/components/landingpage/CTA";
import Hero from "@/components/landingpage/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className=" ">
      {/* Header / simple nav */}

      {/* Main content */}
      <main>
        <Hero />
        <Services />
        <Certification />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
