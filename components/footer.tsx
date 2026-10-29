import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-[#9C9C9C] pt-20 pb-12 border-t border-[#262626]" id="footer">
      <div className="site-container">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 pb-16">
          {/* Brand & Quote Column (2 cols wide: 384px) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/paving-risers-logo.png"
                  alt="Paving Risers Company"
                  width={144}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <h3 className="font-display font-black text-2xl uppercase text-white leading-[32px] tracking-[-0.01em] mb-3">
                Paving your way for<br />
                <span className="text-[#E1201F]">any situation.</span>
              </h3>

              <p className="text-[14px] text-[#9C9C9C] leading-[20px] max-w-sm mb-6">
                Manhole, catch basin and valve box risers, cast and fabricated for contractors, cities and utilities across the US and Canada.
              </p>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Paving Risers on LinkedIn"
                  className="w-10 h-10 border border-[#262626] flex items-center justify-center text-[#9C9C9C] hover:border-[#E1201F] hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Paving Risers on YouTube"
                  className="w-10 h-10 border border-[#262626] flex items-center justify-center text-[#9C9C9C] hover:border-[#E1201F] hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 1: Products */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-5">
              Products
            </span>
            <ul className="space-y-2 text-[15px] leading-[24px]">
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Manhole Risers
                </a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Catch Basin Risers
                </a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Valve Box &amp; Gas Risers
                </a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Grates, Plates &amp; Racks
                </a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Specialty &amp; Fabricated
                </a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-[#E1201F] transition-colors">
                  Tools &amp; Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Applications */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-5">
              Applications
            </span>
            <ul className="space-y-2 text-[15px] leading-[24px]">
              <li>
                <a href="#world-of-risers" className="text-white hover:text-[#E1201F] transition-colors">
                  Road Resurfacing
                </a>
              </li>
              <li>
                <a href="#world-of-risers" className="text-white hover:text-[#E1201F] transition-colors">
                  Storm Drainage
                </a>
              </li>
              <li>
                <a href="#world-of-risers" className="text-white hover:text-[#E1201F] transition-colors">
                  Sanitary Sewer
                </a>
              </li>
              <li>
                <a href="#world-of-risers" className="text-white hover:text-[#E1201F] transition-colors">
                  Water &amp; Gas Utilities
                </a>
              </li>
              <li>
                <a href="#world-of-risers" className="text-white hover:text-[#E1201F] transition-colors">
                  Airports &amp; Ports
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-5">
              Resources
            </span>
            <ul className="space-y-2 text-[15px] leading-[24px]">
              <li>
                <a href="#resources" className="text-white hover:text-[#E1201F] transition-colors">
                  Catalog &amp; CAD
                </a>
              </li>
              <li>
                <a href="#how-to-measure" className="text-white hover:text-[#E1201F] transition-colors">
                  How to Measure
                </a>
              </li>
              <li>
                <a href="#resources" className="text-white hover:text-[#E1201F] transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#resources" className="text-white hover:text-[#E1201F] transition-colors">
                  Riser Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-[#E1201F] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-[#E1201F] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-5">
              Company
            </span>
            <ul className="space-y-2 text-[15px] leading-[24px]">
              <li>
                <a href="#foundry" className="text-white hover:text-[#E1201F] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="text-white hover:text-[#E1201F] transition-colors">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#specs" className="text-white hover:text-[#E1201F] transition-colors">
                  Standards &amp; Certifications
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#E1201F] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#locations" className="text-white hover:text-[#E1201F] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#quote" className="text-white hover:text-[#E1201F] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#9C9C9C]">
          <p>© 2026 Paving Risers Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
