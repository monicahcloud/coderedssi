"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Users2,
  Plus,
  Network,
  Building2,
  LineChart,
  RefreshCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SchoolCTA } from "../SchoolCTA";
import { PartnerCTA } from "../PartnerCTA";

const corporatePhases = [
  {
    icon: FileSpreadsheet,
    step: "01",
    title: "Risk Assessment",
    description:
      "A comprehensive audit of institutional safety infrastructure and emergency protocols to identify systemic vulnerabilities and prioritize strategic capital allocation.",
    target: "Target: 150 schools assessed in the first 3 years.",
    features: [
      "Infrastructure Vulnerability Audits",
      "Operational Risk Analysis",
      "Strategic Action Roadmaps",
      "Compliance Benchmark Analysis",
    ],
    deliverable: "Strategic Value: Data-backed risk mitigation roadmap.",
  },
  {
    icon: Users2,
    step: "02",
    title: "Training",
    description:
      "Executive-level professional development focused on organizational readiness, stakeholder communication, and fostering a proactive culture of safety.",
    target: "Target: 5,000+ educators trained in the first 3 years.",
    features: [
      "Administrative Readiness",
      "Student crisis training",
      "Stakeholder Management",
      "Institutional Proficiency Training",
    ],
    deliverable: "Strategic Value: Enterprise-wide safety proficiency.",
  },
  {
    icon: Building2,
    step: "03",
    title: "Equipment",
    description:
      "Accelerating safety through the distribution of high-grade hardware and safety technology via strategic grants and in-kind corporate contributions.",
    target:
      "Goal: $250,000 in donated or discounted security technology brokered to schools.",
    features: [
      "Grant-Funded Safety Hardware",
      "In-Kind Resource Distribution",
      "Hardware Integration Support",
      "Asset Procurement Assistance",
    ],
    deliverable: "Strategic Value: Immediate physical infrastructure upgrades.",
  },
  {
    icon: RefreshCcw,
    step: "04",
    title: "Reassessment",
    description:
      "Ongoing evaluation and refinement of safety systems to ensure sustained effectiveness, adaptability to emerging threats, and long-term institutional resilience.",
    target:
      "Target: Annual reassessments with measurable improvements across all partner schools.",
    features: [
      "Post-Implementation Audits",
      "After-Action Reviews",
      "Annual Safety Reassessment",
      "Continuous Improvement Planning",
    ],
    deliverable:
      "Strategic Value: Long-term risk reduction and sustained operational readiness.",
  },
];

export default function ImpactFramework() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-32">
      {/* Subtle Grid Pattern for Corporate Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Corporate Header */}
        <div className="mb-32 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 rounded-none border-y-0 border-r-0 border-l-4 border-l-primary bg-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Our Four Pillars of Impact
            </Badge>
            <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
              How the Code <span className="text-primary">Red</span> <br />
              <span className="italic text-primary">Approach Works.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="border-l border-primary/20 pl-6 text-lg font-medium leading-relaxed text-muted-foreground">
              Code Red converts philanthropic capital into measurable
              institutional infrastructure, ensuring long-term sustainability
              and student protection.
            </p>
          </div>
        </div>

        {/* Phase Grid */}
        <div className="mb-20 grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-4">
          {corporatePhases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-background p-12 transition-colors duration-500 hover:bg-muted/30">
              <span className="pointer-events-none absolute right-8 top-4 select-none text-8xl font-bold leading-none text-muted/10">
                {phase.step}
              </span>

              <div className="relative z-10">
                <h4 className="mb-6 text-2xl font-bold tracking-tight">
                  {phase.title}
                </h4>

                <p className="mb-8 text-sm italic leading-relaxed text-muted-foreground">
                  &quot;{phase.description}&quot;
                </p>

                <p className="mb-8 text-sm italic leading-relaxed text-muted-foreground">
                  {phase.target}
                </p>

                <ul className="mb-10 space-y-4">
                  {phase.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase text-foreground/70">
                      <Plus className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-dashed border-border pt-8">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Value Proposition
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {phase.deliverable}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Governance & Alignment Blocks */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="group flex gap-8 rounded-3xl border border-border bg-muted/20 p-10 transition-all duration-300 hover:border-primary/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold uppercase tracking-tight">
                Stakeholder Alignment
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We foster strategic collaboration between school boards,
                parents, and safety professionals to create a unified
                institutional safety culture.
              </p>
            </div>
          </div>

          <div className="group flex gap-8 rounded-3xl border border-border bg-muted/20 p-10 transition-all duration-300 hover:border-primary/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <LineChart className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold uppercase tracking-tight">
                Fiscal Governance
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our model prioritizes transparency and rigorous impact
                reporting, ensuring every donor dollar is accounted for in
                measurable safety outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="mt-16 rounded-[2.5rem] border border-border bg-muted/20 p-8 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Take the Next Step
              </p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                Ready to engage with the framework?
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Schools can request an assessment and readiness conversation.
                Strategic partners can explore funding, sponsorship, technology,
                or implementation collaboration.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <SchoolCTA />
              <PartnerCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
