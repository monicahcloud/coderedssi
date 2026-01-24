import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/90 to-secondary" />

      {/* Soft glow accents */}
      <div className="absolute inset-0 -z-10 opacity-25">
        <div className="absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-primary-foreground">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Ready to protect your school?
          </h2>

          {/* Subtext (startup-credible) */}
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Start with a pilot assessment and get clear priorities, practical
            next steps, and a roadmap toward certification.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-2 text-base md:text-lg shadow-lg hover:shadow-xl">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2">
                Request a Pilot Assessment
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            {/* Optional secondary CTA later */}
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 text-base md:text-lg border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="/safety-guide.pdf">Download Safety Guide</a>
            </Button> */}
          </div>

          {/* Contact strip (mobile-friendly tap cards) */}
          <div className="mt-10 sm:mt-12 border-t border-primary-foreground/25 pt-8">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <a
                href="tel:+18442435727"
                className="group flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-left transition hover:bg-primary-foreground/15 active:bg-primary-foreground/20">
                <div className="rounded-xl bg-primary-foreground/15 p-3 transition-colors group-hover:bg-primary-foreground/20">
                  <Phone className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/70 font-bold">
                    Call
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-primary-foreground">
                    (844) 243-5727
                  </div>
                  <div className="text-sm text-primary-foreground/75">
                    Tap to call
                  </div>
                </div>
              </a>

              <a
                href="mailto:jhicks@coderedssi.com"
                className="group flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 text-left transition hover:bg-primary-foreground/15 active:bg-primary-foreground/20">
                <div className="rounded-xl bg-primary-foreground/15 p-3 transition-colors group-hover:bg-primary-foreground/20">
                  <Mail className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/70 font-bold">
                    Email
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-primary-foreground break-words">
                    jhicks@coderedssi.com
                  </div>
                  <div className="text-sm text-primary-foreground/75">
                    Tap to email
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Small reassurance line */}
          <p className="mt-6 text-xs sm:text-sm text-primary-foreground/70">
            Typical response time: under 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
