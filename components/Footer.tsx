"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-background/5">
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand & Mission: 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-[240px] sm:w-[300px]">
              <Image
                src="/logocropped.png"
                alt="Code Red Logo"
                width={520}
                height={200}
                priority
                className="h-auto w-full object-contain "
              />
            </div>

            <p className="text-xl font-medium tracking-tight leading-relaxed text-background/60 max-w-md italic border-l-2 border-primary/30 pl-6">
              Empowering educational institutions through precision-engineered
              safety assessments, tactical staff training, and rigorous
              certification.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">
                501(c)(3) Nonprofit Entity
              </span>
            </div>
          </div>

          {/* Navigation: 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Programs */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Capabilities
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "/programs/assessments", label: "Assessments" },
                  { href: "/programs/training", label: "Tactical Training" },
                  { href: "/programs/certification", label: "Certification" },
                  { href: "/resources", label: "Intelligence" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-sm font-bold text-background/70 hover:text-primary transition-colors">
                      {item.label}
                      <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organization */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Alliance
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "/about", label: "About Initiative" },
                  { href: "/team", label: "Command Team" },
                  { href: "/partners", label: "Sponsor Nexus" },
                  { href: "/#contact", label: "Secure Contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-sm font-bold text-background/70 hover:text-primary transition-colors">
                      {item.label}
                      <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact: Desktop */}
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                Direct Comms
              </h4>
              <a
                href="tel:+18442435727"
                className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> (844) 243-5727
              </a>
              <a
                href="mailto:info@coderedssi.org"
                className="flex items-center gap-3 text-sm font-bold hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> info@coderedssi.org
              </a>
              <div className="pt-4 flex gap-4">
                <Globe className="h-5 w-5 opacity-30" />
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Architectural Metadata */}
        <div className="mt-20 pt-8 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-black tracking-widest text-background/30 uppercase">
              &copy; {currentYear} Code Red: Safe Schools Initiative
            </p>
            <div className="flex gap-6 text-[10px] font-black tracking-widest text-background/30 uppercase">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors">
                Privacy Protocol
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors">
                Terms of Engagement
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* System Status - Kept for energy */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-background/5 bg-background/[0.02]">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-background/40">
                System Verified Ready
              </span>
            </div>

            {/* Industry Standard Developer Credit */}
            <a
              href="https://vitanovadesigns.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center md:items-end gap-1">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-background/20 group-hover:text-primary transition-colors">
                Architecture by
              </span>
              <span className="text-[10px] font-mono font-bold tracking-tighter text-background/40 group-hover:text-background transition-colors flex items-center gap-1">
                VitaNova Designs
                <span className="text-primary group-hover:translate-x-0.5 transition-transform"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
