import { Suspense } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CTA from "@/components/landingpage/CTA";
import Hero from "@/components/landingpage/Hero";
import Sponsership from "@/components/landingpage/Sponsership";
import ImpactFramework from "@/components/landingpage/ImpactFramework";
import FiscalGovernance from "@/components/landingpage/FiscalGoverance";
import MarketReality from "@/components/landingpage/MarketReality";

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

          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
