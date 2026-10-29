import React from "react";
import Image from "next/image";
import { Download, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#0A0A0A] overflow-hidden border-b border-[#1E1E1E]" id="hero">
      {/* Right-side 3D Manhole Artwork (anchored right, full height, 56.25% width) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] lg:w-[56.25%] h-full pointer-events-none select-none z-0">
        <Image
          src="/images/hero-manhole.png"
          alt="Cast iron manhole riser between a manhole frame and its cover, shown on a freshly paved road"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 56vw"
          className="object-cover object-right"
        />
        {/* Figma Node 1:28: 130px linear gradient shadow blending left edge into pure black background */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent z-10 pointer-events-none" />
        {/* Subtle top/bottom edge vignette to ground the road and sky into dark header & section borders */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/40 pointer-events-none z-10" />
        {/* Soft edge fade for smaller mobile screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent md:hidden z-10" />
      </div>

      {/* Hero Content Container - aligned flush with site-container */}
      <div className="site-container relative z-10 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[480px] lg:max-w-[520px] flex flex-col">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[54px] font-extrabold text-white leading-[1.15] sm:leading-[1.12] md:leading-[1.1] lg:leading-[1.08] xl:leading-[60px] tracking-tight uppercase mb-4 sm:mb-5 font-display">
            RAISE COVERS<br />
            TO <span className="text-[#E1201F]">GRADE.</span><br />
            SKIP THE<br />
            EXCAVATION.
          </h1>

          {/* Subheading / Description - Figma Node 1:34: 18px Inter Regular, 28px leading, #C4C4C4 */}
          <p className="text-sm sm:text-base lg:text-[18px] text-[#C4C4C4] leading-normal sm:leading-[28px] max-w-md lg:max-w-lg mb-6 sm:mb-7">
            Manhole, catch basin and valve box risers that sit in the frame already in the road. Lift the cover, set the riser, pave the same day.{" "}
            <strong className="text-white font-semibold">No digging, no new concrete, no rebuilt frames.</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-6 sm:mb-7">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-11 sm:h-12 bg-[#E1201F] hover:bg-[#C82425] text-white text-sm font-semibold rounded-[3px] transition-colors shadow-sm"
            >
              <span>Get a Quote</span>
              <span aria-hidden="true" className="text-sm font-bold">&rarr;</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 h-11 sm:h-12 border border-white/45 bg-[#141414]/90 hover:bg-[#1E1E1E] text-white text-sm font-semibold rounded-[3px] transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Catalog</span>
            </a>
          </div>

          {/* Value Checkmarks - Figma 14px Inter Regular, 20px leading, #C4C4C4 text, #F04442 checks */}
          <div className="flex flex-col gap-1.5 text-xs sm:text-[14px] text-[#C4C4C4] leading-[20px]">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#F04442] stroke-[2.5] shrink-0" />
                <span>192 standard parts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#F04442] stroke-[2.5] shrink-0" />
                <span>Custom sizes from field measurements</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#F04442] stroke-[2.5] shrink-0" />
              <span>Spec sheets with every quote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
