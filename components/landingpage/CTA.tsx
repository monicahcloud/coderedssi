"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";

const CTA_POINTS = [
  "Year 1: 25 schools assessed, 1,000 staff trained.",
  "Projected surplus: $22K to build initial operating reserve.",
  "Every school served at zero cost for assessments, training and security equipment.",
];

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-24 md:py-32">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-size-[40px_40px]" />

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
              Become a <br />
              <span className="text-primary italic">Partner.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-background/60 leading-relaxed font-medium mb-6 md:mb-8 text-center">
              We are currently seeking $175k in capital to launch our 2026 pilot
              districts. Review the Strategic Prospectus and become a Partner
              today!
            </p>

            {/* Micro-list */}
            <div className="w-full max-w-2xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex flex-col items-start gap-3 text-left">
                {CTA_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg text-background/80 leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
