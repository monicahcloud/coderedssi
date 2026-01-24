import {
  Shield,
  GraduationCap,
  ClipboardCheck,
  Users,
  Lock,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Safety Assessments",
    description:
      "A structured evaluation of physical security, emergency protocols, and threat preparedness—delivered as clear findings and prioritized actions.",
    features: [
      "Physical Security Review",
      "Emergency Protocol Analysis",
      "Threat Assessment",
      "Actionable Report",
    ],
    deliverable: "Output: Findings + prioritized action plan",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Staff Training",
    description:
      "Practical, evidence-based training for administrators and staff—focused on readiness, response, and communication under pressure.",
    features: [
      "Crisis Response Training",
      "Active Threat Protocols",
      "De-escalation Techniques",
      "Emergency Communications",
    ],
    deliverable: "Output: Training plan + completion tracking",
  },
  {
    icon: Shield,
    step: "03",
    title: "Certification Pathway",
    description:
      "A clear pathway to demonstrate your school’s commitment to safety—with annual review options as your plan evolves.",
    features: [
      "Certification Criteria",
      "Annual Review Option",
      "Display Materials",
      "Public Listing (optional)",
    ],
    deliverable: "Output: Certification status + renewal plan",
  },
];

const Services = () => {
  return (
    <section className="bg-muted py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            A simple safety system—end to end.
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Built for real school timelines: assess risk, train staff, and move
            toward certification with a clear plan.
          </p>
        </div>

        {/* ✅ Mobile: horizontal snap cards */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]">
            {/* hide scrollbar (webkit) */}

            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="snap-center min-w-[85%] border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground">
                        STEP {service.step}
                      </div>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-foreground">
                          <FileCheck className="mr-2 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-lg border border-border bg-card/60 px-3 py-2 text-xs text-muted-foreground">
                      {service.deliverable}
                    </div>

                    <div className="mt-5">
                      <Button asChild className="w-full gap-2">
                        <a
                          href="#contact"
                          className="flex items-center justify-center gap-2">
                          Request Info
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            Swipe to view all services →
          </p>
        </div>

        {/* ✅ Desktop: 3-column grid */}
        <div className="hidden md:grid mb-14 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border-2 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition group-hover:bg-primary/15">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      STEP {service.step}
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-foreground">
                        <FileCheck className="mr-2 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-lg border border-border bg-card/60 px-3 py-2 text-xs text-muted-foreground">
                    {service.deliverable}
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between">
                      <a
                        href="#contact"
                        className="flex w-full items-center justify-between">
                        Request Info
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Supporting services */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">
                  Community Engagement
                </h4>
                <p className="text-muted-foreground">
                  Align parents, staff, and local partners with clear roles,
                  communication plans, and shared expectations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">
                  Ongoing Support
                </h4>
                <p className="text-muted-foreground">
                  Keep your plan current with updates, guidance, and periodic
                  reviews as requirements and conditions change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 text-center">
          <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2">
              Request a Pilot Assessment
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm sm:text-md text-muted-foreground max-w-xl">
            Get a baseline plan and recommended next steps—fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
