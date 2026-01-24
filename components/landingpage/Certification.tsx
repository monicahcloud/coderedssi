import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Award,
  Search,
  ShieldCheck,
  GraduationCap,
  FileCheck,
  Globe,
  ArrowRight,
} from "lucide-react";

const certificationSteps = [
  {
    title: "Safety Assessment",
    desc: "On-site and digital review of readiness.",
    icon: Search,
  },
  {
    title: "Security Enhancements",
    desc: "Prioritized improvements based on findings.",
    icon: ShieldCheck,
  },
  {
    title: "Staff Training",
    desc: "Emergency response + communication protocols.",
    icon: GraduationCap,
  },
  {
    title: "Final Review",
    desc: "Verification against certification criteria.",
    icon: FileCheck,
  },
  {
    title: "Certified Status",
    desc: "Receive Code Red Certified designation.",
    icon: Award,
  },
  {
    title: "Ongoing Review (optional)",
    desc: "Keep your plan current as needs evolve.",
    icon: Globe,
  },
];

const Certification = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Decorative glow */}
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content + Timeline Stepper */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            {/*  <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 w-fit mb-6">
             <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Certification Pathway
              </span> 
            </div>*/}

            {/* Title (Code Red formatting) */}
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Become <span className="text-foreground">Code</span>{" "}
              <span className="text-primary ">Red</span>{" "}
              <span className="text-foreground">Certified</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              A rigorous, practical pathway to help your school assess risk,
              train staff, and validate readiness—built for real budgets and
              real timelines.
            </p>

            {/* Modern Timeline Stepper */}
            <div className="relative space-y-7">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-primary/50 via-border to-transparent" />

              {certificationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Node */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-colors group-hover:border-primary/40">
                      <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    {/* Copy */}
                    <div className="pt-0.5">
                      <h4 className="text-base md:text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA -> Contact */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base md:text-lg gap-2">
                <a href="#contact">
                  Request Certification Info
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base md:text-lg">
                <a href="#contact">Ask About Requirements</a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground max-w-xl">
              Certification criteria and timelines vary by school size and
              readiness. We confirm scope during intake.
            </p>
          </div>

          {/* Right: Badge (bigger, premium, but honest) */}
          <div className="lg:sticky lg:top-24">
            {/* <div className="relative rounded-3xl border border-border bg-card p-8 md:p-12 shadow-2xl overflow-hidden"> */}
            {/* subtle corner label */}
            {/* <div className="absolute top-5 right-5 rounded-full border border-border bg-background/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground backdrop-blur">
              Certification Mark
            </div> */}

            <Image
              src="/certifiedBadge.png"
              alt="Code Red Certification Badge"
              width={760}
              height={760}
              priority
              className="mx-auto w-full max-w-200 drop-shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
            />

            {/* highlights instead of stats */}
            {/* <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold text-foreground">
                    Clear deliverables
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Findings + prioritized action plan.
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-sm font-semibold text-foreground">
                    Pilot-friendly
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Start small, expand as ready.
                  </div>
                </div>
              </div> */}

            {/* background glow */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights row (keep, no stats) */}
      <div className="mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Clear deliverables
              </div>
              <div className="text-sm text-muted-foreground">
                Practical documentation your team can execute immediately.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Built for schools
              </div>
              <div className="text-sm text-muted-foreground">
                Designed around staffing constraints and real schedules.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Flexible pathway
              </div>
              <div className="text-sm text-muted-foreground">
                Certification steps scale with your readiness and scope.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};

export default Certification;
