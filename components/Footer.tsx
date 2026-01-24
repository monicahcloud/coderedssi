import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 w-[220px] sm:w-[260px]">
              <Image
                src="/logocropped.png"
                alt="Code Red Logo"
                width={520}
                height={200}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="text-secondary-foreground/80 mb-4 max-w-xl text-sm sm:text-base leading-relaxed">
              Safe Schools Initiative — protecting students across the nation
              through professional safety assessments, training, and
              certification.
            </p>

            <p className="text-sm text-secondary-foreground/60">
              A 501(c)(3) nonprofit organization
            </p>

            {/* Mobile quick contact (optional but recommended) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 md:hidden">
              <a
                href="mailto:jhicks@coderedssi.com"
                className="inline-flex items-center justify-center rounded-xl border border-secondary-foreground/20 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Email
              </a>
              <a
                href="tel:+18442435727"
                className="inline-flex items-center justify-center rounded-xl border border-secondary-foreground/20 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Call
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="pt-2 md:pt-0">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-secondary-foreground/80">
              Programs
            </h4>
            <ul className="space-y-1 text-secondary-foreground/80">
              {[
                { href: "/programs/assessments", label: "Safety Assessments" },
                { href: "/programs/training", label: "Training Programs" },
                { href: "/programs/certification", label: "Certification" },
                { href: "/resources", label: "Resources" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex w-full rounded-lg px-2 py-2 text-sm hover:text-primary hover:bg-white/5 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div className="pt-2 md:pt-0">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-secondary-foreground/80">
              Organization
            </h4>
            <ul className="space-y-1 text-secondary-foreground/80">
              {[
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Team" },
                { href: "/partners", label: "Partners" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex w-full rounded-lg px-2 py-2 text-sm hover:text-primary hover:bg-white/5 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-secondary-foreground/20 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs sm:text-sm text-secondary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Code Red: Safe Schools Initiative.
            All rights reserved.
          </p>

          {/* Desktop contact quick links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:jhicks@coderedssi.com"
              className="hover:text-primary transition-colors">
              Email
            </a>
            <span className="opacity-40">•</span>
            <a
              href="tel:+18442435727"
              className="hover:text-primary transition-colors">
              (844) 243-5727
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
