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
import { toast } from "sonner";
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

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API
      toast.success("Inquiry Received", {
        description: "A safety specialist will contact you within 24 hours.",
      });
      form.reset();
    } catch {
      toast.error("Transmission failed. Please try again.");
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-border shadow-2xl">
            {/* Left Column: Info (2/5 width) */}
            <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Let&apos;s build a <br />
                  <span className="text-white/70 italic">safer campus.</span>
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-12">
                  Have questions about our national standards? Our specialists
                  are ready to provide a guided walkthrough of our certification
                  process.
                </p>

                <div className="space-y-8">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={i}
                        href={item.href}
                        target={item.label === "HQ" ? "_blank" : undefined}
                        rel={
                          item.label === "HQ"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex gap-4 group">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/20">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <p className="text-md font-bold uppercase tracking-widest opacity-60">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.val}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* <div className="mt-15 pt-8 border-t border-white/10 flex items-center gap-4 text-md opacity-80">
                <Clock className="w-4 h-4" />
                <span>Response time: &lt; 24 hours</span>
              </div> */}
            </div>

            {/* Right Column: Form (3/5 width) */}
            <div className="lg:col-span-3 bg-card p-8 md:p-12 text-lg mt-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-lg">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-muted/30 border-none h-12"
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
                          <FormLabel className="font-bold text-lg">
                            Work Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="j.doe@school.edu"
                              className="bg-muted/30 border-none h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-lg">
                            Organization
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="District Name"
                              className="bg-muted/30 border-none h-12"
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
                          <FormLabel className="font-bold text-lg">
                            Phone (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (555) 000-0000"
                              className="bg-muted/30 border-none h-12"
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
                        <FormLabel className="font-bold text-lg">
                          How can we help?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your school safety goals..."
                            className="bg-muted/30 border-none min-h-30 resize-none"
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
                    className="w-full h-14 text-lg font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 italic">
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Inquiry <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-md text-muted-foreground pt-4">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>
                      Your data is encrypted and strictly used for safety
                      consultations.
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
