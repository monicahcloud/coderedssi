"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  FileText,
  School,
  Handshake,
  MapPin,
} from "lucide-react";

const schoolSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organization: z
    .string()
    .trim()
    .min(1, "School / district is required")
    .max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  studentCount: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please describe your needs").max(1000),
  website: z.string().optional().or(z.literal("")),
});

const partnerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organization: z
    .string()
    .trim()
    .min(1, "Organization name is required")
    .max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  partnershipType: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please define your interest").max(1000),
  website: z.string().optional().or(z.literal("")),
});

type SchoolFormData = z.infer<typeof schoolSchema>;
type PartnerFormData = z.infer<typeof partnerSchema>;
type ContactType = "school" | "partner";

type SubmitStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const searchParams = useSearchParams();

  const initialType = useMemo<ContactType>(() => {
    const type = searchParams.get("type");
    return type === "partner" ? "partner" : "school";
  }, [searchParams]);

  const [contactType, setContactType] = useState<ContactType>(initialType);
  const [status, setStatus] = useState<SubmitStatus>(null);

  useEffect(() => {
    setContactType(initialType);
  }, [initialType]);

  const schoolForm = useForm<SchoolFormData>({
    resolver: zodResolver(schoolSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      studentCount: "",
      message: "",
      website: "",
    },
  });

  const partnerForm = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      partnershipType: "",
      message: "",
      website: "",
    },
  });

  const activeSubmitting =
    contactType === "school"
      ? schoolForm.formState.isSubmitting
      : partnerForm.formState.isSubmitting;

  const handleTypeChange = (type: ContactType) => {
    setStatus(null);
    setContactType(type);
  };

  const submitSchool = async (data: SchoolFormData) => {
    setStatus(null);

    if (data.website) {
      schoolForm.reset();
      setStatus({ type: "success", message: "Transmission received." });
      return;
    }

    try {
      const payload = {
        type: "school",
        ...data,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: { success?: boolean; message?: string } = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      schoolForm.reset();
      setStatus({
        type: "success",
        message:
          "School assessment request received. Our school safety team will contact you shortly.",
      });
    } catch (error) {
      console.error("School contact form submit error:", error);
      setStatus({
        type: "error",
        message: "System transmission error. Please use direct line.",
      });
    }
  };

  const submitPartner = async (data: PartnerFormData) => {
    setStatus(null);

    if (data.website) {
      partnerForm.reset();
      setStatus({ type: "success", message: "Transmission received." });
      return;
    }

    try {
      const payload = {
        type: "partner",
        ...data,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: { success?: boolean; message?: string } = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      partnerForm.reset();
      setStatus({
        type: "success",
        message:
          "Partnership inquiry received. Our partnership team will contact you shortly.",
      });
    } catch (error) {
      console.error("Partner contact form submit error:", error);
      setStatus({
        type: "error",
        message: "System transmission error. Please use direct line.",
      });
    }
  };

  const panelContent =
    contactType === "school"
      ? {
          badge: "School Outreach",
          title: (
            <>
              PROTECT THE <br />
              <span className="italic text-primary">CAMPUS.</span>
            </>
          ),
          quote:
            "Certified safety experts, district-ready assessments, and staff training built around your school's real risk profile.",
          cardTitle: "Request School Assessment",
          cardText:
            "Receive a guided review of your campus needs, readiness priorities, and next-step recommendations.",
          heading: "School Inquiry",
          subheading:
            "Establish direct communication with our school safety team.",
          cta: "Request School Assessment",
          highlights: [
            {
              title: "Free Safety Consultation",
              body: "Get a no-obligation overview of how we can help strengthen your campus safety posture.",
            },
            {
              title: "Customized Assessment Plans",
              body: "Tailored recommendations based on your school's size, structure, and operational realities.",
            },
            {
              title: "Staff Training Pathways",
              body: "Evidence-based training support for administrators, faculty, and school personnel.",
            },
          ],
        }
      : {
          badge: "Partner Relations",
          title: (
            <>
              OPEN THE <br />
              <span className="italic text-primary">CHANNEL.</span>
            </>
          ),
          quote:
            "We are finalizing the Founding Alliance. Join the 2026 national expansion through sponsorship, funding, technology, or strategic collaboration.",
          cardTitle: "Request Partnership Deck",
          cardText:
            "Receive details on tier structure, rollout strategy, pilot opportunities, and measurable impact.",
          heading: "Founding Inquiry",
          subheading:
            "Establish direct communication with our partnership team.",
          cta: "Start Partnership Conversation",
          highlights: [
            {
              title: "Corporate Sponsorship",
              body: "Support school safety programs while aligning your brand with measurable public impact.",
            },
            {
              title: "Charitable Giving",
              body: "Fund assessments, training, and upgrades for under-resourced schools and districts.",
            },
            {
              title: "Strategic Partnerships",
              body: "Collaborate on deployment, technology, research, or implementation at scale.",
            },
          ],
        };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-background py-32">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <div>
              <Badge
                variant="outline"
                className="mb-6 rounded-none border-y-0 border-r-0 border-l-4 border-l-primary bg-primary/5 px-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                {panelContent.badge}
              </Badge>

              <h2 className="mb-8 text-6xl font-black uppercase leading-[0.85] tracking-tighter md:text-7xl">
                {panelContent.title}
              </h2>

              <p className="border-l-2 border-primary/20 pl-6 text-xl italic leading-relaxed text-muted-foreground">
                &quot;{panelContent.quote}&quot;
              </p>
            </div>

            <div className="space-y-6">
              {/* Toggle */}

              {/* <div className="group relative space-y-4 rounded-[2rem] border border-border bg-muted/30 p-8 transition-all hover:border-primary/40">
                <FileText className="mb-2 h-8 w-8 text-primary" />
                <h4 className="text-xl font-bold uppercase tracking-tight">
                  {panelContent.cardTitle}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {panelContent.cardText}
                </p>
                <ArrowUpRight className="absolute right-8 top-8 h-5 w-5 opacity-20 transition-opacity group-hover:opacity-100" />
              </div> */}

              <div className="space-y-4">
                {panelContent.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-border bg-muted/20 p-6">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <a
                  href="tel:+18442435727"
                  className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground transition-colors hover:text-primary">
                  <Phone className="h-4 w-4" /> (844) 243-5727
                </a>

                <a
                  href="mailto:info@coderedssi.org"
                  className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground transition-colors hover:text-primary">
                  <Mail className="h-4 w-4" /> info@coderedssi.org
                </a>

                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground transition-colors hover:text-primary">
                  <MapPin className="h-4 w-4 " /> Washington, D.C.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div
                className="inline-flex rounded-full border border-border bg-muted/30 p-1.5"
                role="tablist"
                aria-label="Contact type">
                <button
                  type="button"
                  role="tab"
                  aria-selected={contactType === "school"}
                  onClick={() => handleTypeChange("school")}
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all ${
                    contactType === "school"
                      ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(var(--primary),0.7)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                  <School className="h-4 w-4" />
                  School
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={contactType === "partner"}
                  onClick={() => handleTypeChange("partner")}
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all ${
                    contactType === "partner"
                      ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(var(--primary),0.7)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                  <Handshake className="h-4 w-4" />
                  Partner
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative rounded-[3rem] bg-foreground p-10 text-background shadow-2xl md:p-14">
                <div className="mb-10">
                  <h3 className="mb-2 text-3xl font-black italic uppercase tracking-tighter text-primary">
                    {panelContent.heading}
                  </h3>
                  <p className="text-background/50">
                    {panelContent.subheading}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {status && (
                    <motion.div
                      key={status.message}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className={`mb-8 rounded-2xl border-l-4 p-6 text-sm font-bold ${
                        status.type === "success"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-red-500 bg-red-500/10 text-red-500"
                      }`}>
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait" initial={false}>
                  {contactType === "school" ? (
                    <motion.div
                      key="school-form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}>
                      <Form {...schoolForm}>
                        <form
                          onSubmit={schoolForm.handleSubmit(submitSchool)}
                          className="space-y-6">
                          <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                            {...schoolForm.register("website")}
                          />

                          <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                              control={schoolForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Contact Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Full Name"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 transition-all focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={schoolForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Institutional Email
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder="name@school.org"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                              control={schoolForm.control}
                              name="organization"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    School / District
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="School or district name"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={schoolForm.control}
                              name="studentCount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Student Count
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Approx. enrollment"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={schoolForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                  Contact Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+1 (000) 000-0000"
                                    className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={schoolForm.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                  Campus Needs
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your school safety goals, current challenges, and what support you need..."
                                    className="min-h-[140px] resize-none rounded-2xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            disabled={activeSubmitting}
                            className="h-18 w-full rounded-full bg-primary text-lg font-black uppercase tracking-tighter text-primary-foreground shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-[1.02]">
                            {activeSubmitting ? (
                              "INITIATING UPLOAD..."
                            ) : (
                              <span className="group flex items-center gap-3">
                                {panelContent.cta}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="partner-form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}>
                      <Form {...partnerForm}>
                        <form
                          onSubmit={partnerForm.handleSubmit(submitPartner)}
                          className="space-y-6">
                          <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                            {...partnerForm.register("website")}
                          />

                          <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                              control={partnerForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Principal Identity
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Full Name"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 transition-all focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={partnerForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Institutional Email
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder="name@foundation.org"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <FormField
                              control={partnerForm.control}
                              name="organization"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Organization
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Foundation / Corporation / Family Office"
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={partnerForm.control}
                              name="partnershipType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                    Partnership Interest
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Funding, technology, pilots, sponsorship..."
                                      className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={partnerForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                  Priority Line
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+1 (000) 000-0000"
                                    className="h-14 rounded-xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={partnerForm.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                                  Engagement Objectives
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Define your philanthropic, strategic, or deployment goals..."
                                    className="min-h-[140px] resize-none rounded-2xl border-background/10 bg-background/[0.03] text-background placeholder:text-background/20 focus:border-primary/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            disabled={activeSubmitting}
                            className="h-18 w-full rounded-full bg-primary text-lg font-black uppercase tracking-tighter text-primary-foreground shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-[1.02]">
                            {activeSubmitting ? (
                              "INITIATING UPLOAD..."
                            ) : (
                              <span className="group flex items-center gap-3">
                                {panelContent.cta}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-center gap-4 pt-6">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-background/30">
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    Priority Channel Status: Active
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
