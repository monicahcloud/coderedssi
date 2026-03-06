"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Crown, Medal, Shield, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const HOW_PARTNERSHIPS_WORK = [
  "Align on mission, ethics, and school safety standards.",
  "Share recognition, data, and impact reporting with your stakeholders.",
  "Contribute expertise, solutions, funding, or equipment (donated or at-cost).",
  "Participate in pilot programs and proof-of-concept deployments with real districts.",
  "Commit to collaboration over competition among vendors and stakeholders.",
];

const PARTNERSHIP_TIERS = [
  {
    label: "NATIONAL PARTNER",
    icon: Crown,
    title: "Diamond Tier ",
    value: "$2,000,000+ annually",
    bullets: [
      "National partnership recognition across all Code Red campaigns.",
      "Statewide program deployment and multi-state pilot leadership.",
      "Executive board participation in strategic guidance.",
      "Co-branded program materials and national media opportunities.",
    ],
    badgeSrc: "/diamondbadge.png",
    className: "bg-primary/5 border-primary/20",
    accent: "text-blue-600",
  },
  {
    label: "REGIONAL PARTNER",
    icon: Medal,
    title: "Gold Tier ",
    value: "$500,000–$1,999,999 annually",
    bullets: [
      "Regional partnership recognition across defined territories.",
      "Multi-district program deployment (assessments, training, and upgrades).",
      "Advisory board participation and strategic input.",
      "Partnership case studies highlighting shared outcomes.",
    ],
    badgeSrc: "/goldbadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-amber-600",
  },
  {
    label: "DISTRICT PARTNER",
    icon: Shield,
    title: "Silver Tier ",
    value: "$100,000–$499,999 annually",
    bullets: [
      "District-level partnership recognition.",
      "Single- or multi-school deployment within priority regions.",
      "Involvement in implementation planning with school leaders.",
      "Direct access to impact reporting and readiness metrics.",
    ],
    badgeSrc: "/silverbadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-slate-500",
  },
  {
    label: "COMMUNITY PARTNER",
    icon: Award,
    title: "Bronze Tier ",
    value: "$25,000–$99,999 annually",
    bullets: [
      "School-level partnership recognition.",
      "Participation in pilot assessments and training programs.",
      "Donor recognition across digital and print channels.",
      "Quarterly impact updates and school-level success stories.",
    ],
    badgeSrc: "/bronzebadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-orange-700",
  },
];

export default function FoundingAlliance() {
  return (
    <section className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-14">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 py-1 text-primary uppercase text-[10px] font-bold tracking-[0.2em] bg-primary/5">
            Capital Engagement
          </Badge>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] mb-8">
            How Strategic <br />
            <span className="text-primary italic">Partnerships Work.</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl border-l border-primary/20 pl-6">
            We collaborate with organizations that are committed to measurable,
            standards-driven school safety, while combining expertise, funding,
            and technology to protect students nationwide.
          </p>
        </div>

        {/* How Partnerships Work (single clean card before tiers) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-[2.5rem] border bg-muted/30 border-border p-10">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-70">
                Partnership Model
              </p>
              <h3 className="text-2xl md:text-3xl font-bold items-center justify-center text-center tracking-tight">
                What partners do
              </h3>
            </div>

            {/* <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div> */}
          </div>

          <ul className="grid md:grid-cols-2 gap-x-10">
            {HOW_PARTNERSHIPS_WORK.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {PARTNERSHIP_TIERS.map((tier, idx) => {
            // const Icon = tier.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.08 }}
                className={`group p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-primary/40 ${tier.className}`}>
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    {tier.badgeSrc && (
                      <div className="shrink-0">
                        <Image
                          src={tier.badgeSrc}
                          alt={`${tier.label} badge`}
                          width={300}
                          height={150}
                          className="h-32 md:h-24 w-auto object-contain opacity-95"
                        />
                      </div>
                    )}
                    <h4
                      className={`text-2xl md:text-4xl uppercase italic mt-6 font-bold mb-5 tracking-tight leading-tight ${tier.accent}`}>
                      {tier.title}
                    </h4>
                  </div>
                  <div>
                    <h3
                      className={
                        " whitespace-nowrap text-xl md:text-2xl font-bold uppercase tracking-[0.12em] italic leading-none mb-1"
                      }>
                      {tier.label}
                    </h3>
                  </div>
                  <div>
                    <h5 className="mb-8 text-md italic">{tier.value}</h5>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-0.5 shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="p-12 bg-muted/30 rounded-[3rem] border border-border">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Every partnership tier directly funds free expert assessments, staff
            training, and critical safety upgrades for under-resourced schools.
          </p>
        </div>
      </div>
    </section>
  );
}
