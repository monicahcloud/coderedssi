import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Award,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { HeroVideoBackground } from "./HeroVideoBackground";

const proofPoints = [
  {
    icon: Sparkles,
    title: "Pilot-ready",
    desc: "Launch a safety baseline in weeks—not months.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based",
    desc: "Built on proven assessment + training frameworks.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "Clear findings, priorities, and next steps—quickly.",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen">
      <HeroVideoBackground />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-10">
        <div className="max-w-3xl">
          {/* Logo (valid widths + mobile-friendly scale) */}
          <div className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[520px]">
            <Image
              src="/logocropped.png"
              alt="Code Red Safe Schools Initiative"
              width={1840}
              height={860}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Pilot pill (tight spacing) */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-black/30 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs sm:text-sm text-primary-foreground/85">
              Now accepting pilot schools & early partners
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground leading-[1.05]">
            Protecting Schools. Protecting Futures.
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-lg sm:text-xl md:text-3xl text-primary-foreground/90 font-medium">
            Assess. Train. Certify.
          </p>

          {/* Mission */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
            Code Red helps schools build safety readiness with practical
            assessments, staff training, and a certification pathway—designed
            for real budgets and real timelines.
          </p>

          {/* CTAs (full-width on mobile) */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Request Pilot Assessment
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5" />
                Join Early Certification
              </a>
            </Button>
          </div>

          {/* Proof points */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-primary-foreground/15 pt-6">
            {proofPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-black/25 border border-primary-foreground/10 p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="text-sm font-semibold text-primary-foreground">
                      {item.title}
                    </div>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-primary-foreground/70">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs sm:text-sm text-primary-foreground/60 max-w-2xl">
            We’re building with school leaders and safety professionals.
            Outcomes vary by site, scope, and implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
