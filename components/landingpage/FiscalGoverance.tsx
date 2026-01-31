"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  LineChart,
  Scale,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GOVERNANCE_PILLARS = [
  {
    icon: Scale,
    title: "501(c)(3) Integrity",
    desc: "Strict adherence to federal nonprofit regulations ensuring all capital is deployed toward our mission of student safety.",
  },
  {
    icon: LineChart,
    title: "Impact Attribution",
    desc: "Direct tracking of capital to regional pilot outcomes, providing donors with verifiable data on lives protected.",
  },
  {
    icon: FileText,
    title: "Audit Transparency",
    desc: "Annual third-party financial reviews and open-book reporting for our Founding Alliance members.",
  },
];

export default function FiscalGovernance() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Governance Copy */}
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 py-1 text-primary uppercase text-[10px] font-bold tracking-[0.2em] bg-primary/5">
              Stewardship & Ethics
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase leading-[1.1]">
              A Foundation of <br />
              <span className="text-primary italic">
                Absolute Transparency.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We understand that philanthropic capital is an investment in
              social change. Our governance model is designed to provide
              institutional-grade accountability for every dollar committed to
              our 2026 pilot launch.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Secure Auditing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Public Compliance
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Pillar Grid */}
          <div className="grid gap-4">
            {GOVERNANCE_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="mt-1 p-3 bg-muted rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
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
