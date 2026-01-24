"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  Search,
  ShieldCheck,
  GraduationCap,
  FileCheck,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  phase: "Assess" | "Train" | "Certify";
};

const steps: Step[] = [
  {
    title: "Safety Assessment",
    desc: "On-site and digital review of readiness.",
    icon: Search,
    phase: "Assess",
  },
  {
    title: "Security Enhancements",
    desc: "Prioritized improvements based on findings.",
    icon: ShieldCheck,
    phase: "Assess",
  },
  {
    title: "Staff Training",
    desc: "Emergency response + communication protocols.",
    icon: GraduationCap,
    phase: "Train",
  },
  {
    title: "Final Review",
    desc: "Verification against certification criteria.",
    icon: FileCheck,
    phase: "Certify",
  },
  {
    title: "Certified Status",
    desc: "Receive Code Red Certified designation.",
    icon: Award,
    phase: "Certify",
  },
  {
    title: "Ongoing Review (optional)",
    desc: "Keep your plan current as needs evolve.",
    icon: Globe,
    phase: "Certify",
  },
];

const phases: Array<{ key: Step["phase"]; label: string; blurb: string }> = [
  {
    key: "Assess",
    label: "Assess",
    blurb: "Understand your baseline and priorities.",
  },
  { key: "Train", label: "Train", blurb: "Build staff readiness and clarity." },
  {
    key: "Certify",
    label: "Certify",
    blurb: "Validate progress against criteria.",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Certification() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [badgeOffset, setBadgeOffset] = useState(0);

  // Group steps by phase (for mobile accordion)
  const grouped = useMemo(() => {
    return phases.map((p) => ({
      ...p,
      steps: steps.filter((s) => s.phase === p.key),
    }));
  }, []);

  // Subtle scroll animation for badge (translateY only, small range)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let raf = 0;
    const onScroll = () => {
      if (!badgeRef.current) return;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = badgeRef.current!.getBoundingClientRect();
        const viewportH = window.innerHeight || 800;

        // progress: 0 at bottom entering, 1 near top; clamp
        const progress = 1 - Math.min(Math.max(rect.top / viewportH, 0), 1);

        // subtle movement range (0..14px)
        const y = Math.round(progress * 14);
        setBadgeOffset(y);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Decorative glow */}
      <div className="absolute top-12 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-[110px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Become <span className="text-foreground">Code</span>{" "}
              <span className="text-primary">Red</span>{" "}
              <span className="text-foreground">Certified</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A rigorous, practical pathway to help your school assess risk,
              train staff, and validate readiness—built for real budgets and
              real timelines.
            </p>

            {/* ✅ MOBILE: Horizontal phase bar */}
            <div className="mt-8 md:hidden">
              <div className="grid grid-cols-3 gap-2">
                {phases.map((p) => (
                  <div
                    key={p.key}
                    className="rounded-xl border border-border bg-card px-3 py-3 text-center">
                    <div className="text-sm font-semibold text-foreground">
                      {p.label}
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">
                      {p.blurb}
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ MOBILE: Accordion grouped by phase */}
              <div className="mt-5 space-y-4">
                {grouped.map((group) => (
                  <div
                    key={group.key}
                    className="rounded-xl border border-border bg-card">
                    <div className="px-4 py-3 border-b border-border">
                      <div className="text-sm font-semibold text-foreground">
                        {group.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {group.blurb}
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {group.steps.map((step, idx) => {
                        const Icon = step.icon;
                        const value = `${group.key}-${idx}`;
                        return (
                          <AccordionItem
                            key={value}
                            value={value}
                            className="border-b border-border last:border-b-0">
                            <AccordionTrigger className="text-left px-4">
                              <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
                                  <Icon className="h-4 w-4 text-primary" />
                                </span>
                                <span className="text-sm font-semibold text-foreground">
                                  {step.title}
                                </span>
                              </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground pl-[64px]">
                              {step.desc}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ DESKTOP: Vertical timeline */}
            <div className="relative mt-10 space-y-6 hidden md:block">
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/55 via-border to-transparent" />
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex gap-6">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-base md:text-lg font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 sm:h-14 gap-2">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2">
                  Request Certification Info
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 sm:h-14">
                <a href="#contact" className="flex items-center justify-center">
                  Ask About Requirements
                </a>
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground max-w-xl">
              Certification criteria and timelines vary by school size and
              readiness. We confirm scope during intake.
            </p>
          </div>

          {/* Right: Badge with subtle scroll animation */}
          <div
            ref={badgeRef}
            className="lg:sticky lg:top-24"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(0, ${-badgeOffset}px, 0)`,
              transition: prefersReducedMotion
                ? undefined
                : "transform 120ms ease-out",
              willChange: "transform",
            }}>
            <Image
              src="/certifiedBadge.png"
              alt="Code Red Certification Badge"
              width={760}
              height={760}
              priority
              className="mx-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
            />
            <div className="absolute -z-10 inset-0">
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights row */}
      <div className="mt-14 sm:mt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Clear deliverables
              </div>
              <div className="text-sm text-muted-foreground">
                Practical documentation your team can execute immediately.
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Built for schools
              </div>
              <div className="text-sm text-muted-foreground">
                Designed around staffing constraints and real schedules.
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="mb-2 text-sm font-semibold text-foreground">
                Flexible pathway
              </div>
              <div className="text-sm text-muted-foreground">
                Certification steps scale with your readiness and scope.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
