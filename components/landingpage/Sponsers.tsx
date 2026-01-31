"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Users,
  ShieldCheck,
  ArrowUpRight,
  TrendingUp,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ALLIANCE_LEVELS = [
  {
    name: "Legacy Visionaries",
    icon: Landmark,
    title: "Strategic Lead Partners",
    desc: "Principal founding partners providing the foundational capital for national pilot deployment and long-term organizational scaling.",
    commit: "Funding Level: $50k+",
    benefits: [
      "National Advisory Board Seat",
      "Enduring Legacy Naming Rights",
      "Regional Strategic Hub Oversight",
      "Quarterly Executive Briefings",
    ],
    className: "lg:col-span-2 bg-primary/5 border-primary/20",
    accent: "text-primary",
  },
  {
    name: "Impact Partners",
    icon: Building2,
    title: "Regional Operations",
    desc: "Corporate entities funding the direct implementation of safety frameworks within their primary operating regions.",
    commit: "Funding Level: $15k+",
    benefits: [
      "Localized Community Attribution",
      "Quarterly Social Impact Reporting",
      "Stakeholder Recognition",
    ],
    className: "lg:col-span-1 bg-muted/40 border-border",
    accent: "text-amber-600",
  },
  {
    name: "Sentinel Circle",
    icon: TrendingUp,
    title: "Growth Acceleration",
    desc: "Individual philanthropists and industry leaders driving the continuous improvement of our safety methodology.",
    commit: "Funding Level: $5k+",
    benefits: [
      "Sentinel Leadership Status",
      "Annual Impact Summits",
      "Priority Program Access",
    ],
    className: "lg:col-span-1 bg-muted/40 border-border",
    accent: "text-slate-500",
  },
];

export default function FoundingAlliance() {
  return (
    <section className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Executive Header */}
        <div className="max-w-4xl mb-24">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 py-1 text-primary uppercase text-[10px] font-bold tracking-[0.2em] bg-primary/5">
            Capital Engagement
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] mb-8">
            The Founding <br />
            <span className="text-primary italic">Alliance.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l border-primary/20 pl-6">
            Code Red is built on a foundation of strategic philanthropic
            partnerships. We are currently inviting founding stakeholders to
            secure the infrastructure for our 2026 regional pilots.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {ALLIANCE_LEVELS.map((level, idx) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-primary/40 ${level.className}`}>
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground opacity-50 uppercase">
                      Engagement Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${level.accent}`}>
                    {level.name}
                  </h3>
                  <h4 className="text-3xl font-bold mb-6 tracking-tight leading-none text-foreground">
                    {level.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-10 text-sm italic">
                    &quot;{level.desc}&quot;
                  </p>

                  <ul className="space-y-4 mb-8">
                    {level.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-foreground/80">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-dashed border-border flex justify-between items-center">
                  <span className="text-xs font-bold text-foreground font-mono uppercase tracking-tighter">
                    {level.commit}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing High-Level Donor Note */}
        <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-muted/30 rounded-[3rem] border border-border gap-8">
          <div className="max-w-md">
            <h5 className="text-xl font-bold mb-2">
              Institutional Partnerships
            </h5>
            <p className="text-sm text-muted-foreground">
              For family offices, institutional donors, or large-scale corporate
              foundations seeking a custom engagement roadmap.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8 flex items-center gap-2">
            Schedule a Briefing <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
