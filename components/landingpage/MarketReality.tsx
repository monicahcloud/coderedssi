"use client";

import { motion } from "framer-motion";
import { BarChart } from "lucide-react";

const MARKET_DATA = [
  {
    label: "Preparedness Gap",
    value: "75%",
    stat: "of staff feel under-equipped",
    desc: "A majority of educators report lack of tactical readiness for high-stress incidents.",
    source: "Source: NCES teacher surveys, 2018–2022",
  },
  {
    label: "Limited Assessments",
    value: "3+ Yrs",
    stat: "Most schools see at most 1 professional safety assessment a year.",
    desc: "Code Red adds complementary assessments and training so districts get continuous improvement, not one-off assessments and training.",
    source:
      "Target: annual re-assessments and follow-up support for every participating school.",
  },
  {
    label: "Unfunded Upgrades",
    value: "250,000+",
    stat: "Critical security equipment is routinely delayed or cut due to cost.",
    desc: "We broker donated or discounted cameras, access-control, and alert systems so high-risk schools can close gaps that budgets overlook.",
    source:
      "Goal: $250,000+ in donated or discounted safety technology deployed in the first 3 years.",
  },
];

export default function MarketReality() {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {MARKET_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <BarChart className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold tracking-tighter text-foreground">
                  {item.value}
                </h3>
                <p className="text-sm font-bold text-foreground/80 uppercase">
                  {item.stat}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
              <p className="text-[9px] font-mono text-muted-foreground/50 italic">
                {item.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
