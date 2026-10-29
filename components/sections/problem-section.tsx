import React from "react";
import Image from "next/image";

export function ProblemSection() {
  return (
    <section className="bg-[#F4F2EE] section-pad border-b border-[#E6E2DA]" id="the-problem">
      <div className="site-container">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="eyebrow-line" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                THE PROBLEM ON EVERY OVERLAY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0A0A0A] leading-[1.08] lg:leading-[52px] tracking-[-0.01em] uppercase font-display">
              THE ROAD RISES.<br />
              <span className="text-[#E1201F]">THE COVERS GET<br />LEFT BEHIND.</span>
            </h2>
          </div>
          <div className="lg:pt-6 text-base sm:text-[18px] text-[#57544F] leading-[28px]">
            <p>
              A new overlay lifts the road. Every manhole and catch basin frame stays where it was, so each cover ends up{" "}
              <strong className="text-[#0A0A0A] font-semibold">sitting in a dip below the new surface.</strong> There are two ways to fix that.
            </p>
          </div>
        </div>

        {/* 3 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Hydraulic breaker photo card */}
          <div className="relative rounded-none overflow-hidden border border-[#E6E2DA] bg-[#ECE8E1] min-h-[376px] flex flex-col justify-start p-6 sm:p-8">
            <Image
              src="/images/hydraulic-breaker.png"
              alt="Hydraulic breaker cutting into the road around a structure"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 389px"
            />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1.5 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-[0.16em] leading-none">
                THE OLD WAY
              </span>
            </div>
          </div>

          {/* Card 2: The old way (White Card) */}
          <div className="rounded-none border border-[#E6E2DA] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm min-h-[376px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8985] block mb-2 leading-4">
                THE OLD WAY
              </span>
              <h3 className="text-2xl lg:text-[28px] font-extrabold text-[#57544F] leading-[32px] mb-6 uppercase font-display">
                DIG, REBUILD, WAIT.
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#8A8985] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                  <span className="text-[15px] text-[#57544F] leading-[24px]">
                    Saw-cut the asphalt around the frame
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#8A8985] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                  <span className="text-[15px] text-[#57544F] leading-[24px]">
                    Dig out the frame and rebuild it in concrete
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#8A8985] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                  <span className="text-[15px] text-[#57544F] leading-[24px]">
                    Keep the lane closed while the concrete cures
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E6E2DA] text-[15px] sm:text-[16px] font-semibold text-[#57544F] leading-[24px]">
              A crew, concrete and a closed lane for every frame.
            </div>
          </div>

          {/* Card 3: With a riser (Dark Card) */}
          <div className="rounded-none border border-[#262626] bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between shadow-md text-white min-h-[376px]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F04442] block mb-2 leading-4">
                WITH A RISER
              </span>
              <h3 className="text-2xl lg:text-[28px] font-extrabold text-white leading-[32px] mb-6 uppercase font-display">
                LIFT, DROP IN, PAVE.
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#F04442] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="text-[15px] text-white leading-[24px]">
                    Lift the cover off the existing frame
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#F04442] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="text-[15px] text-white leading-[24px]">
                    Drop the riser onto the frame seat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#F04442] shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="text-[15px] text-white leading-[24px]">
                    Put the cover back and pave straight over
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t-2 border-[#E1201F] text-[15px] sm:text-[16px] font-semibold text-white leading-[24px]">
              No excavation. No concrete. No waiting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
