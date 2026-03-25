"use client";

import { motion } from "framer-motion";
import { FileText, LineChart, Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PartnerCTA } from "../PartnerCTA";
import { SchoolCTA } from "../SchoolCTA";

const GOVERNANCE_PILLARS = [
  {
    icon: Scale,
    title: "501(c)(3) Integrity",
    desc: "Strict adherence to federal nonprofit regulations ensures all capital supports our mission of student safety and school readiness.",
    proof: "Annual independent financial review once revenue exceeds $250,000.",
  },
  {
    icon: LineChart,
    title: "Impact Attribution",
    desc: "Capital is tied directly to measurable pilot outcomes so schools, sponsors, and philanthropic partners can see where impact is happening.",
    proof:
      "Quarterly KPI dashboards tracking readiness scores, staff trained, and equipment value deployed.",
  },
  {
    icon: FileText,
    title: "Audit Transparency",
    desc: "Open-book reporting and documented accountability standards create trust across school leaders, donors, and founding alliance members.",
    proof: "Goal: maintain administrative expenses under 20% of total budget.",
  },
];

export default function FiscalGovernance() {
  return (
    <section className="overflow-hidden border-t border-border/50 bg-muted/30 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT: Governance Copy */}
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="rounded-none border-y-0 border-r-0 border-l-4 border-l-primary bg-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Stewardship & Ethics
            </Badge>

            <h2 className="text-4xl font-bold uppercase leading-[1.1] tracking-tight text-foreground md:text-5xl">
              A Foundation of <br />
              <span className="italic text-primary">
                Absolute Transparency.
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              We understand that philanthropic capital is an investment in
              social change. Our governance model is designed to provide
              institutional- grade accountability for every dollar committed to
              our mission.
            </p>

            {/* CTA Block */}
            <div className="space-y-4 pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Ready to Engage?
              </p>

              <div className="grid grid-cols-1 gap-3 ">
                <div className="min-w-0">
                  <SchoolCTA className="w-full" />
                </div>

                <div className="min-w-0">
                  <PartnerCTA className="w-full" />
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Schools can request an assessment conversation. Corporate and
                philanthropic partners can explore sponsorship, pilot funding,
                and strategic collaboration.
              </p>
            </div>
          </div>

          {/* RIGHT: Pillar Grid */}
          <div className="grid gap-4">
            {GOVERNANCE_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50">
                <div className="flex items-start gap-5">
                  <div className="mt-1 rounded-xl bg-muted p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <pillar.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-lg font-bold transition-colors group-hover:text-primary">
                      {pillar.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.desc}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-primary">
                      {pillar.proof}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
