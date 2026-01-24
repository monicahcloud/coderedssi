import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              {/* If you prefer the logo image instead of BrandMark, swap this */}

              <Image
                src="/logocropped.png"
                alt="Code Red Logo"
                width={760}
                height={760}
                priority
                className=" max-w-60 h-auto w-full object-contain"
              />
            </div>

            <p className="text-secondary-foreground/80 mb-4 max-w-xl">
              Safe Schools Initiative — protecting students across the nation
              through professional safety assessments, training, and
              certification.
            </p>

            <p className="text-sm text-secondary-foreground/60">
              A 501(c)(3) nonprofit organization
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/programs/assessments"
                  className="hover:text-primary transition-colors">
                  Safety Assessments
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/training"
                  className="hover:text-primary transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/certification"
                  className="hover:text-primary transition-colors">
                  Certification
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-bold mb-4">Organization</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>

              {/* If your contact is a section on the home page, use /#contact */}
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Code Red: Safe Schools Initiative.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
