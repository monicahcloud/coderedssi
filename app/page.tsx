import { Suspense } from "react";
import Footer from "@/components/Footer";
import CTA from "@/components/landingpage/CTA";
import Hero from "@/components/landingpage/Hero";
import Sponsership from "@/components/landingpage/Sponsership";
import FiscalGovernance from "@/components/landingpage/FiscalGoverance";
import MarketReality from "@/components/landingpage/MarketReality";
import ContactSection from "@/components/contact/ContactSection";
import ImpactFramework from "@/components/landingpage/ImpactFramework";

export default function Home() {
  return (
    <div>
      <main>
        <Suspense fallback={null}>
          <Hero />
          <MarketReality />
          <ImpactFramework />
          <Sponsership />
          <FiscalGovernance />
          <CTA />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
