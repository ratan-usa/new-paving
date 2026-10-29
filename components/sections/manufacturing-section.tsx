import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function ManufacturingSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28 border-b border-[#262626] text-white" id="manufacturing">
      <div className="site-container">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#F04442]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F04442] leading-4">
                MADE IN OUR FOUNDRY
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white leading-[1.08] tracking-[-0.01em] font-display">
              WATCH YOUR<br />
              RISERS <span className="text-[#E1201F]">BEING BUILT.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-base sm:text-[18px] text-[#C4C4C4] leading-[28px] mb-4">
              From raw plate and molten iron to a finished, coated riser on a pallet. Every step happens in our own plant, which is why we can promise sizes and dates.
            </p>
            <div>
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-white/80 border-b border-[#E1201F] pb-0.5 transition-colors group"
              >
                <span>Manufacturing & quality</span>
                <span className="text-[#F04442] font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Showcase Layout (Main Video 990px + 3 Right Thumbs 330px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
          {/* Main Video Wrapper (col-span-9) */}
          <div className="lg:col-span-9 rounded-none overflow-hidden border border-[#262626] bg-[#000000] relative min-h-[380px] sm:min-h-[460px] lg:h-[557px] flex flex-col justify-end p-6 sm:p-8 group shadow-sm">
            <Image
              src="/images/foundry-video-still.png"
              alt="Robotic welders joining a steel riser ring inside a welding cell"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 990px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                type="button"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#E1201F] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
                aria-label="Play video: From steel plate to finished riser"
              >
                <Play className="h-8 w-8 sm:h-9 sm:w-9 fill-white text-white translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
                From steel plate to finished riser
              </h3>
              <p className="text-xs sm:text-sm text-[#C4C4C4]">
                1 min · cutting, forming, welding, coating, inspection
              </p>
            </div>
          </div>

          {/* 3 Right Side Process Cards (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            {/* Card 1: Laser Cut */}
            <div className="rounded-none overflow-hidden border border-[#262626] bg-[#1A1A1A] relative h-[160px] sm:h-[170px] flex items-end p-4 group shadow-sm">
              <Image
                src="/images/laser-cut.png"
                alt="Laser cutting a ring blank from steel plate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 330px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="relative z-10 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 leading-none">
                LASER CUT
              </span>
            </div>

            {/* Card 2: Coated & Cured */}
            <div className="rounded-none overflow-hidden border border-[#262626] bg-[#1A1A1A] relative h-[160px] sm:h-[170px] flex items-end p-4 group shadow-sm">
              <Image
                src="/images/coated-cured.png"
                alt="Coated risers moving through a curing oven"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 330px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="relative z-10 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 leading-none">
                COATED & CURED
              </span>
            </div>

            {/* Card 3: Inspected */}
            <div className="rounded-none overflow-hidden border border-[#262626] bg-[#1A1A1A] relative h-[160px] sm:h-[170px] flex items-end p-4 group shadow-sm">
              <Image
                src="/images/fit-check-laser.png"
                alt="Probe checking the dimensions of a finished riser ring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 330px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="relative z-10 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 leading-none">
                INSPECTED
              </span>
            </div>
          </div>
        </div>

        {/* 4 Bottom Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-[#262626]">
          {/* Step 01 */}
          <div>
            <span className="text-xs font-bold text-[#F04442] font-heading uppercase tracking-wider block mb-2">
              01
            </span>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
              Cast or cut
            </h4>
            <p className="text-[15px] text-[#C4C4C4] leading-[24px]">
              Gray and ductile iron poured in sand molds. Steel blanks laser-cut from plate.
            </p>
          </div>

          {/* Step 02 */}
          <div>
            <span className="text-xs font-bold text-[#F04442] font-heading uppercase tracking-wider block mb-2">
              02
            </span>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
              Form & weld
            </h4>
            <p className="text-[15px] text-[#C4C4C4] leading-[24px]">
              Rings rolled and pressed to size, then welded in robotic cells.
            </p>
          </div>

          {/* Step 03 */}
          <div>
            <span className="text-xs font-bold text-[#F04442] font-heading uppercase tracking-wider block mb-2">
              03
            </span>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
              Machine & coat
            </h4>
            <p className="text-[15px] text-[#C4C4C4] leading-[24px]">
              Seats machined flat. Black coating or hot-dip galvanizing, oven-cured.
            </p>
          </div>

          {/* Step 04 */}
          <div>
            <span className="text-xs font-bold text-[#F04442] font-heading uppercase tracking-wider block mb-2">
              04
            </span>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
              Inspect & ship
            </h4>
            <p className="text-[15px] text-[#C4C4C4] leading-[24px]">
              Every size checked against its drawing, labeled, palletized and shipped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
