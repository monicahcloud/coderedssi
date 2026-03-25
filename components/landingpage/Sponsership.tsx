"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Medal,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { PartnerCTA } from "../PartnerCTA";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const HOW_PARTNERSHIPS_WORK = [
  "Align on mission, ethics, and school safety standards.",
  "Share recognition, data, and impact reporting with your stakeholders.",
  "Contribute expertise, solutions, funding, or equipment (donated or at-cost).",
  "Participate in pilot programs and proof-of-concept deployments with real districts.",
  "Collaborate on local and state wide initiatives.",
];

const PARTNERSHIP_TIERS = [
  {
    label: "NATIONAL PARTNER",
    icon: Crown,
    title: "Diamond Tier",
    value: "$2M+ annually",
    bullets: [
      "National partnership recognition across all Code Red campaigns.",
      "Statewide program deployment and multi-state pilot leadership.",
      "Executive board participation in strategic guidance.",
      "Co-branded program materials and national media opportunities.",
    ],
    details: {
      heading: "Investment Tier",
      items: [
        "100+ schools implementing a coordinated safety framework",
        "Protecting 150,000+ students and staff",
        "Statewide reach and nationally recognized model.",
      ],
      support:
        "Includes white-glove planning, executive alignment, and national visibility support.",
    },
    badgeSrc: "/diamondbadge.png",
    className: "bg-primary/5 border-primary/20",
    accent: "text-blue-600",
  },
  {
    label: "REGIONAL PARTNER",
    icon: Medal,
    title: "Gold Tier",
    value: "$500K–$1.9M annually",
    bullets: [
      "Regional partnership recognition across defined territories.",
      "Multi-district program deployment (assessments, training, and upgrades).",
      "Advisory board participation and strategic input.",
      "Partnership case studies highlighting shared outcomes.",
    ],
    details: {
      heading: "Investment Tier",
      items: [
        "25–50 schools fully implemented.",
        "Protecting 50,000+ students and staff.",
        "Regional model across multiple districts.",
      ],
      support:
        "Strong fit for organizations that want measurable regional outcomes and co-branded success stories.",
    },
    badgeSrc: "/goldbadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-amber-600",
  },
  {
    label: "DISTRICT PARTNER",
    icon: Shield,
    title: "Silver Tier",
    value: "$100K–$499K annually",
    bullets: [
      "District-level partnership recognition.",
      "Single- or multi-school deployment within priority regions.",
      "Involvement in implementation planning with school leaders.",
      "Direct access to impact reporting and readiness metrics.",
    ],
    details: {
      heading: "Investment Tier",
      items: [
        "10–25 schools coordinated under one framework.",
        "Protecting 20,000+ students and staff.",
        "“District level proof of concept ready to scale.",
      ],
      support:
        "Ideal for focused district rollouts with direct visibility into readiness and impact.",
    },
    badgeSrc: "/silverbadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-slate-500",
  },
  {
    label: "COMMUNITY PARTNER",
    icon: Award,
    title: "Bronze Tier",
    value: "$25K–$99K annually",
    bullets: [
      "School-level partnership recognition.",
      "Participation in pilot assessments and training programs.",
      "Donor recognition across digital and print channels.",
      "Quarterly impact updates and school-level success stories.",
    ],
    details: {
      heading: "Investment Tier”",
      items: [
        "3-5 schools in pilot programs.",
        "Protecting 7,500+ students and staff.",
        "Generates the data and case studies that enable expansion.",
      ],
      support:
        "A strong entry point for organizations looking to make immediate local impact.",
    },
    badgeSrc: "/bronzebadge.png",
    className: "bg-muted/40 border-border",
    accent: "text-orange-700",
  },
];

export default function FoundingAlliance() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePartnerClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnPartnerContact =
      pathname === "/" &&
      currentType === "partner" &&
      window.location.hash === "#contact";

    if (isAlreadyOnPartnerContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=partner#contact`);
  };
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-32">
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 bg-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            Capital Engagement
          </Badge>

          <h2 className="mb-8 text-5xl font-bold uppercase tracking-tight leading-[0.9] md:text-7xl">
            How Strategic <br />
            <span className="italic text-primary">Partnerships Work.</span>
          </h2>

          <p className="max-w-3xl border-l border-primary/20 pl-6 text-xl leading-relaxed text-muted-foreground">
            We collaborate with organizations that are committed to measurable,
            standards-driven school safety, while combining expertise, funding,
            and technology to protect students nationwide.
          </p>
        </div>

        {/* How Partnerships Work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-[2.5rem] border border-border bg-muted/30 p-10">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-70">
                Partnership Model
              </p>
              <h3 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
                How Partners Support
              </h3>
            </div>
          </div>

          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {HOW_PARTNERSHIPS_WORK.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                <span className="mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tier Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PARTNERSHIP_TIERS.map((tier, idx) => {
            const Icon = tier.icon;

            return (
              <HoverCard key={tier.label} openDelay={120} closeDelay={80}>
                <HoverCardTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: idx * 0.08 }}
                    tabIndex={0}
                    aria-label={`${tier.label} partnership tier details`}
                    className={`group relative flex cursor-pointer flex-col justify-between rounded-[2.5rem] border p-10 outline-none transition-all duration-500 hover:border-primary/40 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary/40 ${tier.className}`}>
                    <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span>Explore Details</span>
                    </div>

                    <div>
                      <div className="mb-5 flex items-start gap-4">
                        {tier.badgeSrc && (
                          <div className="shrink-0">
                            <Image
                              src={tier.badgeSrc}
                              alt={`${tier.label} badge`}
                              width={300}
                              height={150}
                              className="h-32 w-auto object-contain opacity-95 md:h-24"
                            />
                          </div>
                        )}

                        <h4
                          className={`mt-6 text-2xl font-bold italic leading-tight tracking-tight md:text-4xl ${tier.accent}`}>
                          {tier.title}
                        </h4>
                      </div>

                      <h3 className="mb-1 whitespace-nowrap text-xl font-bold uppercase italic leading-none tracking-[0.12em] md:text-2xl">
                        {tier.label}
                      </h3>

                      <h5 className="mb-8 text-md italic">{tier.value}</h5>

                      <ul className="space-y-4">
                        {tier.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-0.5 shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </HoverCardTrigger>

                <HoverCardContent
                  align="start"
                  side="top"
                  className="w-90 rounded-3xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {tier.label}
                      </p>
                      <h4 className="text-lg font-bold">{tier.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {tier.details.heading}
                      </p>
                      <ul className="space-y-2">
                        {tier.details.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      type="button"
                      className="w-full rounded-xl"
                      onClick={handlePartnerClick}>
                      <span className="flex items-center justify-center gap-2">
                        Talk to our partnership team
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>

        {/* Closing Statement + CTA */}
        <div className="rounded-[3rem] border border-border bg-muted/30 p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Become a Partner
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Every partnership tier helps fund expert assessments, staff
                training, and critical safety upgrades for under-resourced
                schools. If you are interested in sponsorship, funding,
                technology, or strategic collaboration, start the conversation
                with our partnership team.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <PartnerCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
