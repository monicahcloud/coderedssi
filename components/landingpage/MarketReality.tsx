"use client";

import { motion } from "framer-motion";
import { AlertCircle, BarChart, Users, TrendingUp } from "lucide-react";

const MARKET_DATA = [
  {
    label: "Preparedness Gap",
    value: "75%",
    stat: "of staff feel under-equipped",
    desc: "A majority of educators report lack of tactical readiness for high-stress incidents.",
    source: "NCES Data",
  },
  {
    label: "Audit Lag",
    value: "3+ Yrs",
    stat: "Since last professional audit",
    desc: "Most high-need districts are operating on outdated safety assessments.",
    source: "Educational Research Group",
  },
  {
    label: "Impact Potential",
    value: "15,000",
    stat: "Students per Regional Hub",
    desc: "Our pilot model is designed to secure entire district ecosystems simultaneously.",
    source: "Code Red Pro Forma",
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
                Source: {item.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
