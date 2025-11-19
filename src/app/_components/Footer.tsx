import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-label="Facebook"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-2xl font-bold">
              Froude Avenue Community Centre
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm">
                    89 Froude Ave, St. John&apos;s, NL A1E 3B8
                  </p>
                  <p className="text-sm">Newfoundland and Labrador, Canada</p>
                </div>
              </div>
              {/* Map Card */}
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.5!2d-52.7123456!3d47.5612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMzJzQwLjQiTiA1MsKwNDInNDQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca&q=89+Froude+Ave,+St.+John's,+NL+A1E+3B8"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-square w-full border-0"
                  title="Froude Avenue Community Centre Location"
                />
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/#about"
                className="text-sm transition-opacity hover:opacity-80"
              >
                About Us
              </Link>
              <Link
                href="/pages/program"
                className="text-sm transition-opacity hover:opacity-80"
              >
                Programs
              </Link>
              <Link
                href="/pages/service"
                className="text-sm transition-opacity hover:opacity-80"
              >
                Services
              </Link>
              <Link
                href="/pages/outreach"
                className="text-sm transition-opacity hover:opacity-80"
              >
                Outreach
              </Link>
              <Link
                href="/#contact"
                className="text-sm transition-opacity hover:opacity-80"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:froudeavecc@gmail.com"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  froudeavecc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a
                  href="tel:+17095790763"
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  +1 (709)-579-0763
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-4 text-lg font-semibold">Hours of Operation</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="opacity-80">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Stay Connected</h3>
            <p className="mb-4 text-sm opacity-90">
              Follow us on social media for updates and news!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/FroudeAvenueCommunityCentre"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-primary-foreground/20 border-t pt-8">
          <div className="mb-6 flex flex-col items-center justify-center gap-4 text-sm opacity-80 md:flex-row md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Froude Avenue Community Centre.
              All rights reserved.
            </p>
            {/* <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="transition-opacity hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <span className="opacity-50">|</span>
              <Link
                href="/terms-of-service"
                className="transition-opacity hover:opacity-80"
              >
                Terms of Service
              </Link>
              <span className="opacity-50">|</span>
              <Link
                href="/accessibility"
                className="transition-opacity hover:opacity-80"
              >
                Accessibility Statement
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
