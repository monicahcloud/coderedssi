import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certification from "@/components/landingpage/Certification";
import CTA from "@/components/landingpage/CTA";
import Hero from "@/components/landingpage/Hero";
import Sponsership from "@/components/landingpage/Sponsers";
import Services from "@/components/landingpage/Services";
import FiscalGovernance from "@/components/landingpage/FiscalGoverance";
import MarketReality from "@/components/landingpage/MarketReality";

export default function Home() {
  return (
    <div className=" ">
      {/* Header / simple nav */}

      {/* Main content */}
      <main>
        <Hero />
        <MarketReality />
        <Services />
        <Sponsership />
        {/* <Certification /> replace with coporate sponsership and donors...  */}

        <FiscalGovernance />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
