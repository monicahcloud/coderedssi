"use client";

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

import { Mail, Phone, MapPin, Send, ShieldCheck, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    val: "jhicks@coderedssi.com",
    href: "mailto:jhicks@coderedssi.com",
  },
  {
    icon: Phone,
    label: "Direct",
    val: "(844) 243-5727",
    href: "tel:+18442435727",
  },
  {
    icon: MapPin,
    label: "HQ",
    val: "2212 Crosby Rd, Valrico, FL 33594",
    href: "https://www.google.com/maps/search/?api=1&query=2212+Crosby+Rd,+Valrico,+FL+33594",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  organization: z.string().trim().optional().or(z.literal("")),
  phone: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
      {/* subtle background blob */}
      <div className="absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-3xl border border-border shadow-2xl lg:grid-cols-5">
            {/* Left: Info */}
            <div className="lg:col-span-2 bg-primary text-primary-foreground p-6 sm:p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                  Let’s build a <br />
                  <span className="text-white/70 italic">safer campus.</span>
                </h2>

                <p className="mt-4 text-primary-foreground/85 text-sm sm:text-base md:text-lg">
                  Have questions about our standards or certification pathway?
                  Our specialists can walk you through next steps.
                </p>

                {/* Contact items */}
                <div className="mt-8 space-y-4">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;
                    const isMap = item.label === "HQ";

                    return (
                      <a
                        key={i}
                        href={item.href}
                        target={isMap ? "_blank" : undefined}
                        rel={isMap ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition
                                   hover:bg-white/10 active:bg-white/15">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/60">
                            {item.label}
                          </p>
                          <p className="text-sm sm:text-base font-medium break-words">
                            {item.val}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Trust line */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-white/80">
                <Clock className="h-4 w-4" />
                <span>Response time: &lt; 24 hours</span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-card p-6 sm:p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Send an inquiry
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Tell us what you’re looking for and we’ll follow up with next
                  steps.
                </p>
              </div>

              <Form {...form}>
                <form
                  // onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base font-semibold">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="h-12 bg-muted/30 border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base font-semibold">
                            Work Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="j.doe@school.edu"
                              className="h-12 bg-muted/30 border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base font-semibold">
                            Organization
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="District / School"
                              className="h-12 bg-muted/30 border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base font-semibold">
                            Phone (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (555) 000-0000"
                              className="h-12 bg-muted/30 border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base font-semibold">
                          How can we help?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your school safety goals..."
                            className="min-h-[140px] bg-muted/30 border-border resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 italic">
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Inquiry <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  <div className="flex items-start sm:items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground pt-2">
                    <ShieldCheck className="h-4 w-4 text-primary mt-0.5 sm:mt-0" />
                    <span>
                      Your information is used only for safety consultations.
                    </span>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
