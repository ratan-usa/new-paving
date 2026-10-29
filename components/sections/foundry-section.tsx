import React from "react";
import Image from "next/image";

export function FoundrySection() {
  return (
    <section className="bg-white section-pad border-b border-[#E5E5E5]" id="foundry">
      <div className="site-container">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C41C1B]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Why paving crews choose us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold text-[#0A0A0A] leading-[1.1] lg:leading-[64px] tracking-[-0.01em] uppercase">
              Risers that fit<br className="hidden sm:inline" />{" "}
              <span className="text-[#E1201F]">the first time.</span>
            </h2>
          </div>
          <div className="lg:pt-6 text-base sm:text-[18px] text-[#5C5B57] leading-[28px]">
            <p>
              A riser that doesn't seat stops the paver and costs you a day. That's why we make our own, and why every order is checked against your frame before we start.&nbsp;
              <strong className="text-[#0A0A0A] font-semibold">We're the manufacturer, not a middleman.</strong>
            </p>
          </div>
        </div>

        {/* Foundry Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-stretch">
          {/* Left Large Full-Bleed Photo Card (660x600 in Figma) */}
          <div className="relative overflow-hidden bg-black text-white min-h-[500px] lg:h-[600px] flex flex-col justify-between p-8 sm:p-10">
            {/* Background Image */}
            <Image
              src="/images/foundry-ladle.png"
              alt="Molten iron being poured from a ladle at the Paving Risers foundry"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark Gradient Overlay to ensure bottom text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

            {/* Pinned Top-Left Badge */}
            <div className="relative z-10">
              <span className="inline-block px-3.5 py-1.5 bg-[#E1201F] text-white text-xs font-bold uppercase tracking-[0.16em] leading-4">
                Our foundry
              </span>
            </div>

            {/* Pinned Bottom Copy */}
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-[44px] font-extrabold text-white leading-[1.1] lg:leading-[48px] uppercase tracking-tight mb-4">
                We pour the iron.<br />
                We cut the steel.<br />
                We ship the riser.
              </h3>
              <p className="text-sm sm:text-[16px] text-[#E5E5E5] leading-[24px]">
                No broker between you and the people making your part, so sizes, dates and answers come straight from the shop floor.
              </p>
            </div>
          </div>

          {/* Right Column (2 Rows: 2 Top Cards + 1 Full Bottom Card) */}
          <div className="flex flex-col gap-6 justify-between lg:h-[600px]">
            {/* Top 2 Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-[288px]">
              {/* Card 1: 192 Standard Risers */}
              <div className="bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between text-white border border-[#1F1F1F]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-2 leading-4">
                    On the shelf
                  </span>
                  <div className="text-7xl sm:text-8xl lg:text-[104px] xl:text-[112px] font-extrabold text-white tracking-[-0.03em] leading-none my-1 font-heading">
                    192
                  </div>
                  <p className="text-[15px] text-[#C4C4C4] leading-[22px] mt-2">
                    Standard risers, ready to ship.
                  </p>
                </div>
                <a
                  href="#products"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-white/80 transition-colors mt-4"
                >
                  <span>Browse the range</span>
                  <span className="text-[#E1201F] font-bold text-base leading-none">&rarr;</span>
                </a>
              </div>

              {/* Card 2: Laser Measurement Probe */}
              <div className="bg-black relative overflow-hidden min-h-[220px] lg:h-full border border-[#1F1F1F] flex flex-col justify-end">
                <Image
                  src="/images/fit-check-laser.png"
                  alt="A probe checking the dimensions of a finished riser ring"
                  fill
                  className="object-cover"
                />
                <div className="relative z-10 bg-[#0A0A0A] px-4 py-2.5 self-start">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white leading-4">
                    Measured before it ships
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Fit Check Card with Technical Diagram */}
            <div className="bg-[#F4F2EE] border-t-2 border-[#E1201F] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 lg:h-[288px]">
              <div className="flex-1 max-w-[340px]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] block mb-2 leading-4">
                  The fit check
                </span>
                <h4 className="text-xl sm:text-[24px] lg:text-[28px] font-extrabold text-[#0A0A0A] leading-tight sm:leading-[32px] mb-3 uppercase">
                  Checked against<br />your frame<br />before we make it.
                </h4>
                <p className="text-[14px] sm:text-[15px] text-[#57544F] leading-[22px]">
                  Send four measurements. An engineer confirms the riser will seat before we cast or cut it.
                </p>
              </div>

              {/* Right Side: CAD Technical Cutaway Diagram */}
              <div className="relative w-44 sm:w-52 h-32 sm:h-36 shrink-0">
                <Image
                  src="/images/fit-check-cad-diagram.png"
                  alt="Section through a manhole frame with the four measurements A to D"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Summary Banner with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 pt-6 border-t border-[#0A0A0A]">
          {/* Column 1 */}
          <div className="flex items-center gap-4 py-4 md:py-2 md:pr-6 md:border-r border-[#E5E5E5]">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#0A0A0A] leading-[40px] font-heading shrink-0">
              3/4"–6"
            </span>
            <span className="text-[15px] text-[#5C5B57] leading-[20px]">
              Rise range, in 1/4" steps
            </span>
          </div>

          {/* Column 2 */}
          <div className="flex items-center gap-4 py-4 md:py-2 md:px-6 md:border-r border-[#E5E5E5]">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#0A0A0A] leading-[40px] font-heading shrink-0">
              3 offices
            </span>
            <span className="text-[15px] text-[#5C5B57] leading-[20px]">
              Melville NY, Stuart FL and Toronto ON
            </span>
          </div>

          {/* Column 3 */}
          <div className="flex items-center gap-4 py-4 md:py-2 md:pl-6">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#0A0A0A] leading-[40px] font-heading shrink-0">
              [XX] years
            </span>
            <span className="text-[15px] text-[#5C5B57] leading-[20px]">
              Making road and utility castings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
