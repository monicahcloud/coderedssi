"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  PieChart,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { HeroVideoBackground } from "./HeroVideoBackground";
import { SchoolCTA } from "../SchoolCTA";
import { PartnerCTA } from "../PartnerCTA";

const IMPACT_POINTS = [
  {
    icon: Target,
    title: "THE GAP",
    desc: "Most districts receive little to no formal safety assessment support, and critical recommendations often go unfunded or delayed beyond the point of need.",
  },
  {
    icon: BarChart3,
    title: "SCALABLE IMPACT",
    desc: "Code Red standardizes assessments, training, and implementation support so each partnership and deployment can protect multiple campuses, not just one.",
  },
  {
    icon: TrendingUp,
    title: "LAUNCH PHASE",
    desc: "We are building a national framework to expand assessments, staff readiness, and safety upgrades for under-resourced K–12 schools.",
  },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <HeroVideoBackground />

      <div className="container relative z-10 mx-auto px-6 py-8 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 w-full max-w-162.5">
              <Image
                src="/Code_Red_Approved_Logo_Designs.png"
                alt="Code Red Safe Schools Initiative"
                width={1840}
                height={860}
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 inline-flex items-center gap-3 border-l-4 border-primary bg-black/60 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                National Pilot Intake Now Open
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              <h1 className="mb-6 text-5xl font-black uppercase tracking-tighter text-primary-foreground md:text-7xl xl:text-8xl">
                RAISING THE STANDARD <br />
                <span className="text-6xl italic text-primary md:text-7xl xl:text-8xl">
                  Of School Safety.
                </span>
              </h1>

              <div className="mb-8 flex items-center gap-4">
                <p className="text-xl font-bold uppercase tracking-tight text-primary-foreground md:text-2xl">
                  Professional security assessments, readiness planning, and
                  training support for K–12 schools.
                </p>
              </div>

              <p className="mb-10 max-w-xl border-l border-white/10 pl-6 text-lg leading-relaxed text-primary-foreground/70">
                Code Red helps schools strengthen safety readiness while giving
                partners a clear path to fund, support, and scale measurable
                protection across real campuses.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <SchoolCTA />
              <PartnerCTA />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative hidden items-center justify-center lg:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative aspect-square w-full max-w-125 rounded-full border border-white/10 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />

              <div className="relative z-10 w-full space-y-4 p-8">
                <motion.div
                  whileHover={{ x: -10 }}
                  className="cursor-default rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      National Risk Snapshot
                    </p>
                    <p className="text-xl font-bold text-white underline decoration-red-500 underline-offset-4">
                      $1.3M
                    </p>
                    <p className="text-lg font-bold leading-tight tracking-tight text-white">
                      Annual Cost of School Violence
                    </p>
                    <p className="text-[9px] font-mono uppercase tracking-tighter text-white/50">
                      Source: National Center for Education Statistics (NCES)
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="translate-x-12 cursor-default rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      National Risk Snapshot
                    </p>
                    <p className="text-xl font-bold text-white underline decoration-red-500 underline-offset-4">
                      1,626
                    </p>
                    <p className="text-lg font-bold leading-tight tracking-tight text-white">
                      School shooting incidents
                    </p>
                    <p className="text-[9px] font-mono uppercase tracking-tighter text-white/50">
                      Source: K–12 School Shooting Database (summary)
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: -10 }}
                  className="cursor-default rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      Behavioral Reality
                    </p>
                    <p className="text-xl font-bold text-white underline decoration-red-500 underline-offset-4">
                      88%
                    </p>
                    <p className="text-lg font-bold leading-tight tracking-tight text-white">
                      of school safety incidents are behavioral
                    </p>
                    <p className="text-[9px] font-mono uppercase tracking-tighter text-white/50">
                      Source: 2025 K–12 School Safety Trends Report (CENTEGIX)
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM PROOF GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {IMPACT_POINTS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
                <Icon className="mb-4 h-6 w-6 text-primary" />
                <div className="mb-2 text-xs font-black tracking-widest text-primary-foreground">
                  {item.title}
                </div>
                <div className="text-sm leading-snug text-primary-foreground">
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 z-5 bg-linear-to-t from-background via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
