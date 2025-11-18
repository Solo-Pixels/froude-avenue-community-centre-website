"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ name: string; href: string; isEmail?: boolean }> = [
    { name: "About", href: "/#about" },
    { name: "Program", href: "/#program" },
    { name: "Service", href: "/#service" },
    { name: "Outreach", href: "/#outreach" },
    { name: "Contact", href: "/#footer", isEmail: false },
  ];

  return (
    <nav className="bg-secondary border-border sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src={logo}
              alt="Froude Avenue Community Center Logo"
              className="h-16 w-16 rounded-full"
            />
            <span className="text-primary text-2xl font-bold">
              Froude Avenue Community Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.isEmail ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-border border-t py-4 md:hidden">
            {navLinks.map((link) =>
              link.isEmail ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary block py-3 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary block py-3 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
