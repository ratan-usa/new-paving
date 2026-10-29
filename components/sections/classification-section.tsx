import React from "react";
import Image from "next/image";

export function ClassificationSection() {
  return (
    <section className="bg-[#F4F2EE] py-20 lg:py-28 border-b border-[#E6E2DA]" id="know-your-riser">
      <div className="site-container">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#C41C1B]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Know your riser
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0A0A0A] leading-[1.08] tracking-[-0.01em] font-display">
              WHAT A RISER DOES.<br />
              <span className="text-[#E1201F]">WHICH ONE YOU NEED.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-base sm:text-[18px] text-[#57544F] leading-[28px]">
              A riser sits on the seat of the frame that's already in the road and lifts the cover to the new surface. Choosing one takes three steps: the structure, the type of riser, then the size.
            </p>
          </div>
        </div>

        {/* Top 2 Exploded 3D Assembly Figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-10">
          {/* Figure 1: Manhole Riser */}
          <div className="bg-[#C82425] h-[340px] sm:h-[428px] relative overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <span className="absolute top-6 left-6 z-10 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-[0.16em] px-3 py-1.5 leading-none">
              MANHOLE RISER
            </span>
            <div className="relative w-full h-full max-h-[340px]">
              <Image
                src="/images/cutaway-1.png"
                alt="Manhole cutaway showing riser seated between frame and cover"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 660px"
                priority
              />
            </div>
          </div>

          {/* Figure 2: Catch Basin Riser */}
          <div className="bg-[#C82425] h-[340px] sm:h-[428px] relative overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <span className="absolute top-6 left-6 z-10 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-[0.16em] px-3 py-1.5 leading-none">
              CATCH BASIN RISER
            </span>
            <div className="relative w-full h-full max-h-[340px]">
              <Image
                src="/images/cutaway-2.png"
                alt="Catch basin cutaway showing assembly"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 660px"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3-Step Summary Process Bar */}
        <div className="bg-[#0A0A0A] text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626] mb-16 sm:mb-20">
          {/* Step 1 */}
          <div className="p-6 sm:px-8 sm:py-6 flex items-center gap-5">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#F04442] font-display shrink-0 leading-none">
              1
            </span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-white tracking-tight">Lift the cover</h4>
              <p className="text-xs text-[#9C9C9C]">After the new course is laid</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 sm:px-8 sm:py-6 flex items-center gap-5">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#F04442] font-display shrink-0 leading-none">
              2
            </span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-white tracking-tight">Drop in the riser</h4>
              <p className="text-xs text-[#9C9C9C]">It sits on the existing frame seat</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 sm:px-8 sm:py-6 flex items-center gap-5">
            <span className="text-3xl sm:text-[32px] font-extrabold text-[#F04442] font-display shrink-0 leading-none">
              3
            </span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-white tracking-tight">Cover back at grade</h4>
              <p className="text-xs text-[#9C9C9C]">Flush with the new surface</p>
            </div>
          </div>
        </div>

        {/* STEP 01: PICK THE STRUCTURE */}
        <div className="mb-20 sm:mb-24">
          {/* Step Header */}
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-lg font-display shrink-0">
                01
              </div>
              <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-none font-display shrink-0">
                PICK THE STRUCTURE
              </h3>
              <span className="text-sm sm:text-[15px] text-[#57544F] font-normal shrink-0">
                What's in the road?
              </span>
              <div className="flex-1 h-px bg-[#DEDAD2] hidden sm:block self-center ml-2" />
            </div>
            <p className="text-base text-[#57544F] mt-3">
              Manhole, catch basin or valve box. This decides the <strong className="text-[#0A0A0A] font-semibold">shape</strong> of the riser.
            </p>
          </div>

          {/* 3 Structure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card 1: Manhole */}
            <a
              href="#products"
              className="bg-white border border-[#E6E2DA] flex flex-col justify-between group hover:border-[#C41C1B] transition-colors"
            >
              <div>
                <div className="bg-[#ECE8E1] h-52 sm:h-64 relative flex items-center justify-center p-6 overflow-hidden">
                  <Image
                    src="/images/manhole-ring.png"
                    alt="Round manhole riser ring"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 432px"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-extrabold text-[#0A0A0A] font-display">Manhole</h4>
                    <span className="text-[#C41C1B] font-bold text-lg group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                  <p className="text-sm text-[#5C5B57] leading-relaxed mb-6">
                    Round rings for sewer, storm and utility manholes.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ECE8E1]">
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Round
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    22"–36" frames
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2: Catch Basin */}
            <a
              href="#products"
              className="bg-white border border-[#E6E2DA] flex flex-col justify-between group hover:border-[#C41C1B] transition-colors"
            >
              <div>
                <div className="bg-[#ECE8E1] h-52 sm:h-64 relative flex items-center justify-center p-6 overflow-hidden">
                  <Image
                    src="/images/catch-basin-frame.png"
                    alt="Square catch basin riser frame"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 432px"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-extrabold text-[#0A0A0A] font-display">Catch basin</h4>
                    <span className="text-[#C41C1B] font-bold text-lg group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                  <p className="text-sm text-[#5C5B57] leading-relaxed mb-6">
                    Frames for storm grates and curb inlets, made to your grate size.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ECE8E1]">
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Square
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Rectangular
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    D-shape
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Curb inlet
                  </span>
                </div>
              </div>
            </a>

            {/* Card 3: Valve Box */}
            <a
              href="#products"
              className="bg-white border border-[#E6E2DA] flex flex-col justify-between group hover:border-[#C41C1B] transition-colors"
            >
              <div>
                <div className="bg-[#ECE8E1] h-52 sm:h-64 relative flex items-center justify-center p-6 overflow-hidden">
                  <Image
                    src="/images/valve-box-riser.png"
                    alt="Valve box riser with lid"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 432px"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-extrabold text-[#0A0A0A] font-display">Valve box</h4>
                    <span className="text-[#C41C1B] font-bold text-lg group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                  <p className="text-sm text-[#5C5B57] leading-relaxed mb-6">
                    Extensions that keep water and gas valves reachable after paving.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ECE8E1]">
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Water
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#3A3936] text-xs font-semibold rounded-sm">
                    Gas
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* STEP 02: PICK THE TYPE (The Showdown / VS) */}
        <div className="mb-20 sm:mb-24">
          {/* Step Header */}
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-lg font-display shrink-0">
                02
              </div>
              <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-none font-display shrink-0">
                PICK THE TYPE
              </h3>
              <span className="text-sm sm:text-[15px] text-[#57544F] font-normal shrink-0">
                Is the frame in good shape?
              </span>
              <div className="flex-1 h-px bg-[#DEDAD2] hidden sm:block self-center ml-2" />
            </div>
            <p className="text-base text-[#57544F] mt-3 max-w-3xl">
              This step isn't about size. It's about <strong className="text-[#0A0A0A] font-semibold">how the riser holds in the frame</strong>: a solid ring that sits on the seat, or a steel ring that expands to grip a frame that's worn or out of round.
            </p>
          </div>

          {/* Facing Cards Grid with central VS Badge */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Left Card: FIXED */}
            <div className="bg-white border border-[#E6E2DA] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm">
              <div>
                {/* Top Section */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
                  <div>
                    <span className="bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 inline-block mb-4">
                      LOWEST COST
                    </span>
                    <h4 className="text-3xl sm:text-[40px] font-extrabold text-[#0A0A0A] uppercase tracking-tight font-display leading-none mb-2">
                      FIXED
                    </h4>
                    <p className="text-sm sm:text-[15px] text-[#5C5B57]">Solid cast iron ring</p>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#C82425] flex items-center justify-center p-2.5 relative shrink-0">
                    <Image
                      src="/images/fixed-riser.png"
                      alt="Solid cast iron manhole riser"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* Feature Callout */}
                <div className="flex items-center gap-4 py-5 border-b border-[#E5E5E5]">
                  <div className="w-10 h-10 bg-[#E1201F] text-white flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.67"
                    >
                      <ellipse cx="10" cy="8" rx="7.5" ry="3.5" />
                      <ellipse cx="10" cy="12" rx="7.5" ry="3.5" />
                      <line x1="2.5" y1="8" x2="2.5" y2="12" />
                      <line x1="17.5" y1="8" x2="17.5" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-[#0A0A0A] leading-tight">
                      Sits on the frame seat
                    </h5>
                    <p className="text-xs text-[#5C5B57] mt-0.5">
                      One solid piece. No moving parts.
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="py-6 space-y-5">
                  {/* Metric: Rise */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#5C5B57]">Rise</span>
                      <span className="font-bold text-[#0A0A0A]">2" or 3" · stack for more</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-3 bg-[#E5E5E5] flex overflow-hidden rounded-none">
                      {/* 0 to 2 inches (solid red) */}
                      <div className="w-[33.3%] h-full bg-[#E1201F]" />
                      {/* 2 to 6 inches (striped diagonal pattern) */}
                      <div
                        className="w-[50%] h-full"
                        style={{
                          background:
                            "repeating-linear-gradient(-45deg, #E1201F, #E1201F 3px, #FCE8E8 3px, #FCE8E8 6px)",
                        }}
                      />
                      <div className="w-[16.7%] h-full bg-[#E5E5E5]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#5C5B57] mt-1.5 font-medium px-0.5">
                      <span>0"</span>
                      <span>1"</span>
                      <span>2"</span>
                      <span>3"</span>
                      <span>4"</span>
                      <span>5"</span>
                      <span>6"</span>
                    </div>
                  </div>

                  {/* Metric: Handles worn frames */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#5C5B57]">Handles worn frames</span>
                      <span className="font-bold text-[#0A0A0A]">Low</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#E5E5E5]" />
                      <div className="h-3 bg-[#E5E5E5]" />
                    </div>
                  </div>

                  {/* Metric: Cost */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#5C5B57]">Cost</span>
                      <span className="font-bold text-[#0A0A0A]">$</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#E5E5E5]" />
                      <div className="h-3 bg-[#E5E5E5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t-2 border-[#E1201F] flex items-center justify-between mt-4">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5C5B57]">
                    BEST FOR
                  </span>
                  <span className="text-sm font-semibold text-[#0A0A0A]">
                    Standard frames in good shape
                  </span>
                </div>
                <a
                  href="#products"
                  className="text-xs font-bold text-[#0A0A0A] hover:text-[#E1201F] inline-flex items-center gap-1.5 border-b border-[#E1201F] pb-0.5 transition-colors"
                >
                  Fixed risers <span className="text-[#E1201F]">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Central VS Badge */}
            <div className="w-14 h-14 rounded-full bg-[#E1201F] text-white font-extrabold text-sm flex items-center justify-center border-4 border-[#F4F2EE] shadow-md z-20 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:flex font-display">
              VS
            </div>

            {/* Right Card: ADJUSTABLE */}
            <div className="bg-[#0A0A0A] text-white border border-[#0A0A0A] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm">
              <div>
                {/* Top Section */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#262626]">
                  <div>
                    <span className="bg-white text-[#0A0A0A] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 inline-block mb-4">
                      MOST FORGIVING
                    </span>
                    <h4 className="text-3xl sm:text-[40px] font-extrabold text-white uppercase tracking-tight font-display leading-none mb-2">
                      ADJUSTABLE
                    </h4>
                    <p className="text-sm sm:text-[15px] text-[#C4C4C4]">Expanding steel ring</p>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#C82425] flex items-center justify-center p-2.5 relative shrink-0">
                    <Image
                      src="/images/adjustable-riser.png"
                      alt="Adjustable expanding steel manhole riser"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* Feature Callout */}
                <div className="flex items-center gap-4 py-5 border-b border-[#262626]">
                  <div className="w-10 h-10 bg-[#E1201F] text-white flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.67"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6zm-1.8 1.8l-8.5 8.5a1.5 1.5 0 0 0 2.1 2.1l8.5-8.5-2.1-2.1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white leading-tight">
                      Expands against the frame
                    </h5>
                    <p className="text-xs text-[#C4C4C4] mt-0.5">
                      A steel screw locks it tight. No mortar.
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="py-6 space-y-5">
                  {/* Metric: Rise */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#C4C4C4]">Rise</span>
                      <span className="font-bold text-white">From 3/4"</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-3 bg-[#2E2E2E] flex overflow-hidden rounded-none">
                      {/* From 3/4" up to 6" is solid red */}
                      <div className="w-[12.5%] h-full bg-[#2E2E2E]" />
                      <div className="w-[87.5%] h-full bg-[#E1201F]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#C4C4C4] mt-1.5 font-medium px-0.5">
                      <span>0"</span>
                      <span>1"</span>
                      <span>2"</span>
                      <span>3"</span>
                      <span>4"</span>
                      <span>5"</span>
                      <span>6"</span>
                    </div>
                  </div>

                  {/* Metric: Handles worn frames */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#C4C4C4]">Handles worn frames</span>
                      <span className="font-bold text-white">High</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#E1201F]" />
                    </div>
                  </div>

                  {/* Metric: Cost */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#C4C4C4]">Cost</span>
                      <span className="font-bold text-white">$$</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#E1201F]" />
                      <div className="h-3 bg-[#2E2E2E]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t-2 border-[#E1201F] flex items-center justify-between mt-4">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C4C4C4]">
                    BEST FOR
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Old, worn or out-of-round frames, thin overlays
                  </span>
                </div>
                <a
                  href="#products"
                  className="text-xs font-bold text-white hover:text-[#E1201F] inline-flex items-center gap-1.5 border-b border-[#E1201F] pb-0.5 transition-colors"
                >
                  Adjustable risers <span className="text-[#E1201F]">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03: SEND THE SIZE */}
        <div>
          {/* Step Header */}
          <div className="mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-lg font-display shrink-0">
                03
              </div>
              <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-none font-display shrink-0">
                SEND THE SIZE
              </h3>
              <span className="text-sm sm:text-[15px] text-[#57544F] font-normal shrink-0">
                We match the part
              </span>
              <div className="flex-1 h-px bg-[#DEDAD2] hidden sm:block self-center ml-2" />
            </div>
            <p className="text-base text-[#57544F] mt-3 max-w-3xl">
              Size comes from the frame itself. <strong className="text-[#0A0A0A] font-semibold">Four measurements</strong> are enough for us to match a catalog part or make one to fit.
            </p>
          </div>

          {/* Callout Banner with Red Left Border */}
          <div className="bg-white border-l-4 border-l-[#E1201F] border-t border-r border-b border-[#E6E2DA] p-6 sm:p-7 shadow-sm mt-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <p className="text-sm sm:text-base leading-relaxed text-[#57544F]">
                <strong className="font-semibold text-[#0A0A0A]">
                  Four measurements, one quote.
                </strong>{" "}
                Not sure which type you need? Send a photo of the frame and your overlay depth too.
              </p>
              <div className="flex items-center gap-6 shrink-0">
                <a
                  href="#how-to-measure"
                  className="text-sm font-semibold text-[#0A0A0A] hover:text-[#E1201F] inline-flex items-center gap-1.5 border-b border-[#E1201F] pb-0.5 transition-colors"
                >
                  What to measure <span className="text-[#C41C1B] font-bold">&rarr;</span>
                </a>
                <a
                  href="#quote"
                  className="text-sm font-semibold text-[#0A0A0A] hover:text-[#E1201F] inline-flex items-center gap-1.5 border-b border-[#E1201F] pb-0.5 transition-colors"
                >
                  Ask an engineer <span className="text-[#C41C1B] font-bold">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
