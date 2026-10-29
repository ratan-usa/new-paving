"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#262626] h-[81px] flex items-center">
      <div className="site-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center" aria-label="Paving Risers Home">
          <Image
            src="/images/paving-risers-logo.png"
            alt="Paving Risers Company"
            width={144}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative group">
            <a
              href="#products"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-white hover:text-brand-red transition-colors"
            >
              <span>Products</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#9C9C9C] group-hover:text-brand-red transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-0 w-56 bg-[#141414] border border-[#262626] rounded-md shadow-xl py-2 hidden group-hover:block">
              <a href="#products" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Manhole Risers (Fixed &amp; Adjustable)
              </a>
              <a href="#products" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Catch Basin Riser Assemblies
              </a>
              <a href="#products" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Valve Box &amp; Gas Risers
              </a>
              <a href="#products" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Grates, Plates &amp; Accessories
              </a>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#world-of-risers"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-white hover:text-brand-red transition-colors"
            >
              <span>Applications</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#9C9C9C] group-hover:text-brand-red transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-0 w-52 bg-[#141414] border border-[#262626] rounded-md shadow-xl py-2 hidden group-hover:block">
              <a href="#world-of-risers" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Highway Resurfacing
              </a>
              <a href="#world-of-risers" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Airports &amp; Ports
              </a>
              <a href="#world-of-risers" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                City Streets &amp; Storm Drains
              </a>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#resources"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-white hover:text-brand-red transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#9C9C9C] group-hover:text-brand-red transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-0 w-48 bg-[#141414] border border-[#262626] rounded-md shadow-xl py-2 hidden group-hover:block">
              <a href="#resources" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Catalog &amp; CAD Files
              </a>
              <a href="#how-to-measure" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                How to Measure
              </a>
              <a href="#resources" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Riser Calculator
              </a>
              <a href="#faq" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                FAQ &amp; Articles
              </a>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#foundry"
              className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-white hover:text-brand-red transition-colors"
            >
              <span>About</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#9C9C9C] group-hover:text-brand-red transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-0 w-44 bg-[#141414] border border-[#262626] rounded-md shadow-xl py-2 hidden group-hover:block">
              <a href="#foundry" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Our Foundry
              </a>
              <a href="#manufacturing" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Manufacturing
              </a>
              <a href="#specs" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Standards &amp; Testing
              </a>
              <a href="#locations" className="block px-4 py-2 text-sm text-[#C4C4C4] hover:text-white hover:bg-[#1F1F1F]">
                Locations
              </a>
            </div>
          </div>

          <a
            href="#quote"
            className="px-4 py-2 text-[15px] font-medium text-white hover:text-brand-red transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="tel:6314581111"
            className="flex items-center gap-2 text-[15px] font-semibold text-white hover:text-brand-red transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            <span>(631) 458-1111</span>
          </a>
          <Button asChild size="default" className="bg-brand-red hover:bg-brand-dark text-white font-semibold">
            <a href="#quote">Request a Quote</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-white hover:text-brand-red"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[81px] bg-[#0A0A0A] border-b border-[#262626] p-6 space-y-4">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white hover:text-brand-red"
          >
            Products
          </a>
          <a
            href="#world-of-risers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white hover:text-brand-red"
          >
            Applications
          </a>
          <a
            href="#resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white hover:text-brand-red"
          >
            Resources
          </a>
          <a
            href="#foundry"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white hover:text-brand-red"
          >
            About
          </a>
          <a
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white hover:text-brand-red"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
            <a href="tel:6314581111" className="flex items-center gap-2 text-white font-semibold">
              <Phone className="h-4 w-4 text-brand-accent" />
              <span>(631) 458-1111</span>
            </a>
            <Button asChild className="w-full bg-brand-red hover:bg-brand-dark text-white">
              <a href="#quote" onClick={() => setMobileMenuOpen(false)}>Request a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

