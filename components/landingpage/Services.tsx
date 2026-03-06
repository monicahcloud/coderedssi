"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Users2,
  Plus,
  Network,
  Building2,
  LineChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    title: "Training & Certification",
    description:
      "Executive-level professional development focused on organizational readiness, stakeholder communication, and fostering a proactive culture of safety.",
    target: "Target: 5,000+ educators trained in the first 3 years.",
    features: [
      "Administrative Readiness",
      "Crisis Communication Lab",
      "Stakeholder Management",
      "Institutional Proficiency Training",
    ],
    deliverable: "Strategic Value: Enterprise-wide safety proficiency.",
  },
  {
    icon: Building2,
    step: "03",
    title: "Equipment Provision",
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
];

export default function ImpactFramework() {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      {/* Subtle Grid Pattern for Corporate Feel */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Corporate Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 py-1 text-primary uppercase tracking-[0.2em] text-[10px] font-bold bg-primary/5">
              Strategic Methodology
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
              Our Operational <br />
              <span className="text-primary italic">Framework.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-muted-foreground leading-relaxed font-medium border-l border-primary/20 pl-6">
              Code Red converts philanthropic capital into measurable
              institutional infrastructure, ensuring long-term sustainability
              and student protection.
            </p>
          </div>
        </div>

        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border-y border-border mb-20">
          {corporatePhases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-background p-12 transition-colors duration-500 hover:bg-muted/30">
              <span className="absolute top-4 right-8 text-8xl font-bold text-muted/10 leading-none select-none">
                {phase.step}
              </span>

              <div className="relative z-10">
                {/* <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  Step {phase.step}
                </h3> */}
                <h4 className="text-2xl font-bold mb-6 tracking-tight">
                  {phase.title}
                </h4>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed italic">
                  &quot;{phase.description}&quot;
                </p>

                <p className="text-muted-foreground mb-8 text-sm leading-relaxed italic">
                  {phase.target}
                </p>
                <ul className="space-y-4 mb-10">
                  {phase.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase text-foreground/70">
                      <Plus className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-dashed border-border">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex gap-8 p-10 bg-muted/20 rounded-3xl border border-border group hover:border-primary/20 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-background flex items-center justify-center rounded-xl border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">
                Stakeholder Alignment
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We foster strategic collaboration between school boards,
                parents, and safety professionals to create a unified
                institutional safety culture.
              </p>
            </div>
          </div>

          <div className="flex gap-8 p-10 bg-muted/20 rounded-3xl border border-border group hover:border-primary/20 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-background flex items-center justify-center rounded-xl border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <LineChart className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">
                Fiscal Governance
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our model prioritizes transparency and rigorous impact
                reporting, ensuring every donor dollar is accounted for in
                measurable safety outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
