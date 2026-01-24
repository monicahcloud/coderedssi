import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary via-primary/90 to-secondary" />

      {/* Soft glow accents */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-primary-foreground">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to Protect Your School?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-primary-foreground/90 mb-12">
            Join over <span className="font-semibold">1,200 schools</span>{" "}
            nationwide that have taken action to create safer learning
            environments. Schedule your free consultation today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="gap-2 text-base md:text-lg shadow-lg hover:shadow-xl">
              Schedule Free Assessment
              <ArrowRight className="h-5 w-5" />
            </Button>

            {/* <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base md:text-lg border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Safety Guide
            </Button> */}
          </div>

          {/* Contact strip */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/25">
            <div className="flex items-center gap-3">
              <a
                href="tel:+18442435727"
                className="flex items-start gap-3 group">
                <div className="rounded-lg bg-primary-foreground/10 p-3 transition-colors group-hover:bg-primary-foreground/20">
                  <Phone className="h-6 w-6" />
                </div>

                <div className="text-left">
                  <div className="text-sm text-primary-foreground/80">
                    Call Us
                  </div>
                  <div className="text-md font-semibold text-primary-foreground">
                    (844) 243-5727
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:jhicks@coderedssi.com"
                className="flex items-start gap-3 group">
                <div className="rounded-lg bg-primary-foreground/10 p-3 transition-colors group-hover:bg-primary-foreground/20">
                  <Mail className="h-6 w-6" />
                </div>

                <div className="text-left">
                  <div className="text-sm text-primary-foreground/80">
                    Email Us
                  </div>
                  <div className="text-base font-semibold text-primary-foreground">
                    jhicks@coderedssi.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
