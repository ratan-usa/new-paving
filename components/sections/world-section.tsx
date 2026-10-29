import React from "react";
import Image from "next/image";

export function WorldSection() {
  return (
    <section className="bg-[#F4F2EE] py-20 lg:py-28 border-b border-[#E6E2DA]" id="world-of-risers">
      <div className="site-container">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#C41C1B]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                WORLD OF RISERS
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0A0A0A] leading-[1.08] tracking-[-0.01em] font-display">
              WHERE RISERS<br />
              <span className="text-[#E1201F]">GO TO WORK.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-base sm:text-[18px] text-[#57544F] leading-[28px] mb-4">
              Highways, airport aprons, city streets and storm drains. Wherever a surface gets renewed, the castings in it have to come up to meet it.
            </p>
            <div>
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-[#0A0A0A] hover:text-[#E1201F] border-b border-[#E1201F] pb-0.5 transition-colors group"
              >
                <span>Open the gallery</span>
                <span className="text-[#C41C1B] font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Tall Highway Photo Card */}
          <a
            href="#products"
            className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[584px] overflow-hidden group block shadow-sm border border-[#E6E2DA]"
          >
            <Image
              src="/images/highway-resurfacing.png"
              alt="Highway resurfacing — paving crew laying new asphalt on a highway"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 660px"
              priority
            />
            {/* Bottom Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white">
              <h3 className="text-base sm:text-[17px] font-semibold text-white tracking-tight underline decoration-white/70 underline-offset-4 group-hover:decoration-white mb-1">
                Highway resurfacing
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E5E5] leading-snug">
                Every cover on the job brought up in one pass
              </p>
            </div>
          </a>

          {/* Right Column: 1 Wide Card + 2 Square/Split Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Wide Card: Airports & Ports */}
            <a
              href="#products"
              className="relative h-[240px] sm:h-[280px] overflow-hidden group block shadow-sm border border-[#E6E2DA]"
            >
              <Image
                src="/images/airports-ports.png"
                alt="Airports & ports — airport apron in front of a passenger terminal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 660px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 text-white">
                <h3 className="text-base sm:text-[17px] font-semibold text-white tracking-tight underline decoration-white/70 underline-offset-4 group-hover:decoration-white mb-1">
                  Airports & ports
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E5E5] leading-snug">
                  Heavy-duty castings for aprons and yards
                </p>
              </div>
            </a>

            {/* Bottom Two Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {/* Bottom Left Card: City Streets */}
              <a
                href="#products"
                className="relative h-[240px] sm:h-[280px] overflow-hidden group block shadow-sm border border-[#E6E2DA]"
              >
                <Image
                  src="/images/city-streets.png"
                  alt="City streets — cast iron manhole cover set in a city street"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 318px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-white">
                  <h3 className="text-base sm:text-[17px] font-semibold text-white tracking-tight underline decoration-white/70 underline-offset-4 group-hover:decoration-white mb-1">
                    City streets
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E5E5E5] leading-snug">
                    Sewer and utility manholes
                  </p>
                </div>
              </a>

              {/* Bottom Right Card: Storm Drainage (Crimson Radial Card) */}
              <a
                href="#products"
                className="relative h-[240px] sm:h-[280px] overflow-hidden group block shadow-sm border border-[#E6E2DA] flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at center, #D32F2F 0%, #A81817 100%)",
                }}
              >
                {/* 3D Product Image */}
                <div className="relative w-3/4 h-3/5">
                  <Image
                    src="/images/two-grate-combo-riser.png"
                    alt="Storm drainage — two-grate catch basin riser"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 318px"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-white">
                  <h3 className="text-base sm:text-[17px] font-semibold text-white tracking-tight underline decoration-white/70 underline-offset-4 group-hover:decoration-white mb-1">
                    Storm drainage
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E5E5E5] leading-snug">
                    Catch basins and curb inlets
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
