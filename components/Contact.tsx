"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Send,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  FileText,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Identity is required"),
  email: z.string().trim().email("Invalid institutional email"),
  organization: z.string().trim().min(1, "Entity name is required"),
  phone: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please define your interest"),
  website: z.string().optional().or(z.literal("")), // Honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function InvestorContact() {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);
    if (data.website) {
      // Bot trap
      form.reset();
      setStatus({ type: "success", message: "Transmission received." });
      return;
    }
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      form.reset();
      setStatus({
        type: "success",
        message:
          "Strategic briefing request received. Our founding team will contact you within 12 hours.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "System transmission error. Please use direct line.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-background overflow-hidden border-t border-white/5">
      {/* Structural Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: Briefing Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <Badge
                variant="outline"
                className="mb-6 rounded-none border-l-4 border-l-primary border-y-0 border-r-0 px-4 bg-primary/5 text-primary uppercase tracking-[0.3em] text-[10px] font-black">
                Investor Relations
              </Badge>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                OPEN THE <br />
                <span className="text-primary italic">CHANNEL.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
                "We are currently finalizing the Founding Alliance. Secure your
                position in the 2026 national pilot expansion."
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-muted/30 border border-border rounded-[2rem] space-y-4 relative group hover:border-primary/40 transition-all">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <h4 className="text-xl font-bold uppercase tracking-tight">
                  Request Case for Support
                </h4>
                <p className="text-sm text-muted-foreground">
                  Receive the full 24-page PDF detailing our operational
                  roadmap, district selection criteria, and ROI projections.
                </p>
                <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+18442435727"
                  className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" /> (844) 243-5727
                </a>
                <a
                  href="mailto:info@coderedssi.org"
                  className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" /> info@coderedssi.org
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: The Briefing Terminal */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative p-10 md:p-14 bg-foreground rounded-[3rem] text-background shadow-2xl">
              <div className="mb-10">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-primary">
                  Founding Inquiry
                </h3>
                <p className="text-background/50">
                  Establish direct communication with our board of directors.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mb-8 p-6 rounded-2xl border-l-4 font-bold text-sm ${
                      status.type === "success"
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-red-500/10 border-red-500 text-red-500"
                    }`}>
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-[9px] font-black tracking-[0.2em] text-background/40">
                            Principal Identity
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full Name"
                              className="bg-background/[0.03] border-background/10 text-background placeholder:text-background/20 h-14 rounded-xl focus:border-primary/50 transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-[9px] font-black tracking-[0.2em] text-background/40">
                            Institutional Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="name@foundation.org"
                              className="bg-background/[0.03] border-background/10 text-background placeholder:text-background/20 h-14 rounded-xl focus:border-primary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-[9px] font-black tracking-[0.2em] text-background/40">
                            Representing Entity
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Foundation / Corporation / Family Office"
                              className="bg-background/[0.03] border-background/10 text-background placeholder:text-background/20 h-14 rounded-xl focus:border-primary/50"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-[9px] font-black tracking-[0.2em] text-background/40">
                            Priority Line
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (000) 000-0000"
                              className="bg-background/[0.03] border-background/10 text-background placeholder:text-background/20 h-14 rounded-xl focus:border-primary/50"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[9px] font-black tracking-[0.2em] text-background/40">
                          Engagement Objectives
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Define your philanthropic or strategic goals..."
                            className="bg-background/[0.03] border-background/10 text-background placeholder:text-background/20 min-h-[140px] rounded-2xl resize-none focus:border-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full h-18 rounded-full bg-primary text-primary-foreground text-lg font-black uppercase tracking-tighter group hover:scale-[1.02] transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]">
                    {form.formState.isSubmitting ? (
                      "INITIATING UPLOAD..."
                    ) : (
                      <span className="flex items-center gap-3">
                        Request Strategic Briefing{" "}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-4 pt-6">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-background/30">
                      <ShieldCheck className="h-3 w-3 text-primary" />
                      Priority Channel Status: Active
                    </div>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
