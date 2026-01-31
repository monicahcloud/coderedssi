"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Target,
  BarChart3,
  ChevronRight,
  PieChart,
  AlertCircle,
} from "lucide-react";
import { HeroVideoBackground } from "./HeroVideoBackground";

const INVESTMENT_POINTS = [
  {
    icon: Target,
    title: "THE GAP",
    desc: "Current safety measures are reactive. Code Red provides the proactive infrastructure.",
  },
  {
    icon: BarChart3,
    title: "SCALABLE IMPACT",
    desc: "A model designed for rapid national deployment across underfunded districts.",
  },
  {
    icon: TrendingUp,
    title: "EARLY STAGE",
    desc: "Now entering the 'Alpha' funding round for our 2026 pilot expansion.",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <HeroVideoBackground />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: The Pitch */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-[220px] sm:w-[320px] mb-12">
              <Image
                src="/logocropped.png"
                alt="Code Red Safe Schools Initiative"
                width={1840}
                height={860}
                priority
                className="h-auto w-full object-contain "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 border-l-4 border-primary bg-black/60 backdrop-blur-md px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Pre-Launch: Pilot Funding Round Now Open
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter text-primary-foreground leading-[0.85] uppercase mb-6">
                Standardizing <br />
                <span className="text-primary italic">School Safety.</span>
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-primary" />
                <p className="text-xl md:text-2xl text-primary-foreground font-bold tracking-tight uppercase">
                  Seed the Future of Protection.
                </p>
              </div>

              <p className="max-w-xl text-lg text-primary-foreground/70 leading-relaxed mb-10 border-l border-white/10 pl-6">
                Code Red is an emerging 501(c)(3) engineered to bridge the gap
                between reactive security and proactive readiness. Join us as a
                Founding Partner to launch our national pilot framework.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="h-16 px-8 rounded-full text-lg font-black uppercase tracking-tighter group">
                <a href="#contact" className="flex items-center gap-2">
                  Fund the Initiative
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 px-8 rounded-full border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all text-lg font-black uppercase tracking-tighter">
                <a href="#pro-forma">Review the Strategic Prospectus</a>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Impact Data Display */}
          <div className="hidden lg:flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/10 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />

              <div className="relative z-10 w-full p-8 space-y-4">
                {/* Funding Status */}
                <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    Capital Engagement: 2026
                  </p>
                  <p className="text-white text-2xl font-bold tracking-tighter leading-none mb-2">
                    15% Funding Secured
                  </p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "15%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-white/40 font-mono italic uppercase">
                      $140k Remaining
                    </span>
                    <span className="text-[9px] text-primary font-mono font-bold uppercase">
                      Pilot Funding Round
                    </span>
                  </div>
                </div>

                {/* Stat 01: NCES Data */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl translate-x-12 flex items-center gap-4 cursor-default">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                      Assessment Deficit
                    </p>
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">
                      60% of Schools
                    </p>
                    <p className="text-[9px] text-white/50 uppercase font-mono tracking-tighter">
                      Lack professional audits since 2022
                    </p>
                  </div>
                </motion.div>

                {/* Stat 02: Readiness Gap */}
                <motion.div
                  whileHover={{ x: -10 }}
                  className="bg-black/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 cursor-default">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">
                      National Security Gap
                    </p>
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">
                      75% Under-Equipped
                    </p>
                    <p className="text-[9px] text-white/50 uppercase font-mono tracking-tighter">
                      Source: NCES Safety Trends
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Proof Grid (Investors look for these three things) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {INVESTMENT_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-black/[0.5] border border-white/10 p-6 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-primary mb-4" />
                <div className="text-xs font-black tracking-widest text-primary-foreground mb-2">
                  {item.title}
                </div>
                <div className="text-sm text-primary-foreground leading-snug">
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
