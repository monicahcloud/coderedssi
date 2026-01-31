"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FileText, Zap, ShieldCheck } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-24 md:py-32">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mb-6 md:mb-8 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 md:px-6 py-2 bg-primary/10 text-primary uppercase tracking-[0.4em] text-[10px] font-black">
              Strategic Briefing
            </Badge>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-background uppercase leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              Build the <br />
              <span className="text-primary italic">Foundation.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-background/60 leading-relaxed font-medium mb-10 md:mb-12 text-center">
              We are currently seeking $140k in seed capital to launch our 2026
              pilot districts. Review the Strategic Prospectus and join the
              Founding Alliance today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-2xl mx-auto">
              <Button
                asChild
                size="lg"
                className="h-16 md:h-20 px-8 md:px-12 rounded-full bg-primary text-primary-foreground text-lg md:text-xl font-black uppercase tracking-tighter group hover:scale-105 transition-all w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3">
                  <Zap className="h-5 w-5 md:h-6 md:w-6" />
                  Fund the Initiative
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 md:h-20 px-8 md:px-12 rounded-full border-background/20 bg-transparent text-background text-lg md:text-xl font-black uppercase tracking-tighter hover:bg-background/5 transition-all w-full sm:w-auto">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3">
                  <FileText className="h-5 w-5 md:h-6 md:w-6" />
                  Request Prospectus
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Bottom Trust bar - Mobile Optimized */}
          <div className="mt-16 md:mt-24 pt-10 border-t border-background/10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-40">
              <div className="flex items-center gap-2 md:gap-3">
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-background">
                  501(c)(3) Transparency
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-background">
                  District Attribution
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-background">
                  Governance Board Seats
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
