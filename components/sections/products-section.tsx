import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export function ProductsSection() {
  const smallProducts = [
    // Top right 2x2 grid
    {
      category: "MANHOLE",
      title: "Mechanical expansion riser",
      desc: "Expands inside the frame. No mortar.",
      image: "/images/mechanical-expansion-riser.png",
      alt: "Mechanical expansion manhole riser",
      darkBg: false,
    },
    {
      category: "MANHOLE",
      title: "Solid cast riser",
      desc: "One-piece iron ring. Lowest cost.",
      image: "/images/solid-cast-riser.png",
      alt: "Solid cast iron manhole riser",
      darkBg: false,
    },
    {
      category: "STORM DRAIN",
      title: "Two-grate combo riser",
      desc: "One frame for double inlets.",
      image: "/images/two-grate-combo-riser.png",
      alt: "Two-grate combination catch basin riser",
      darkBg: false,
    },
    {
      category: "CUSTOM",
      title: "Fabricated steel riser",
      desc: "Welded A36 for odd or old frames.",
      image: "/images/fabricated-steel-riser.png",
      alt: "Fabricated steel D-shape riser",
      darkBg: false,
    },
    // Bottom row (4 cards)
    {
      category: "UTILITY",
      title: "Gas & valve box riser",
      desc: "Keeps valves reachable after paving.",
      image: "/images/gas-valve-box-riser.png",
      alt: "Gas valve box riser with lid",
      darkBg: false,
    },
    {
      category: "DRAINAGE",
      title: "Grates & trash racks",
      desc: "Galvanized steel, cut to size.",
      image: "/images/grates-trash-racks.png",
      alt: "Galvanized steel grate and trash rack",
      darkBg: false,
    },
    {
      category: "ADA",
      title: "Detectable warning plates",
      desc: "Cast iron, for curb ramps.",
      image: "/images/warning-plates.png",
      alt: "Yellow cast detectable warning plate",
      darkBg: false,
    },
    {
      category: "ON SITE",
      title: "Tools & accessories",
      desc: "Lid lifters, hooks, valve keys.",
      image: "/images/tools-accessories.png",
      alt: "Manhole cover lifting hook and accessories",
      darkBg: true, // Dark black/gray background #1A1A1A
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E5E5E5]" id="products">
      <div className="site-container">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#C41C1B]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                OUR PRODUCTS
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0A0A0A] leading-[1.08] tracking-[-0.01em] font-display">
              EVERY RISER <span className="text-[#E1201F]">THE<br />ROAD NEEDS.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-base sm:text-[18px] text-[#57544F] leading-[28px]">
              <strong className="text-[#0A0A0A] font-semibold">
                Manhole, catch basin, valve box and specialty risers,
              </strong>{" "}
              plus the grates, plates and tools that go with them. This is a first look. The full catalog has{" "}
              <strong className="text-[#0A0A0A] font-semibold">
                sizes, drawings and 3D views for every part.
              </strong>
            </p>
          </div>
        </div>

        {/* Bento Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-10">
          {/* 1. Large Hero Product Card (Spans 2 cols, 2 rows on lg) */}
          <a
            href="#quote"
            className="lg:col-span-2 lg:row-span-2 border border-[#E5E5E5] bg-white flex flex-col justify-between group hover:border-[#C41C1B] transition-colors shadow-sm overflow-hidden"
          >
            {/* Top Media Container */}
            <div
              className="relative h-[340px] sm:h-[460px] flex items-center justify-center p-6 overflow-hidden"
              style={{
                background: "radial-gradient(circle at center, #D32F2F 0%, #A81817 100%)",
              }}
            >
              <span className="absolute top-6 left-6 z-10 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-[0.16em] px-3 py-1.5 leading-none">
                CATCH BASIN
              </span>
              <div className="relative w-full h-full max-h-[380px]">
                <Image
                  src="/images/catch-basin-assembly.png"
                  alt="Catch basin riser assembly: grate, riser frame and existing frame stacked"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 660px"
                  priority
                />
              </div>
            </div>

            {/* Bottom Content Container */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl sm:text-[32px] font-extrabold text-[#0A0A0A] uppercase tracking-tight font-display leading-[1.25] mb-3">
                  CATCH BASIN RISER ASSEMBLIES
                </h3>
                <p className="text-sm sm:text-base text-[#5C5B57] leading-relaxed mb-6">
                  Square and rectangular risers that stack between the grate and the frame you already have. Made to your grate size, so they drop in and stay put.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#0A0A0A] text-xs font-semibold rounded-sm">
                    Square
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#0A0A0A] text-xs font-semibold rounded-sm">
                    Rectangular
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#0A0A0A] text-xs font-semibold rounded-sm">
                    Curb inlet
                  </span>
                  <span className="px-2.5 py-1 bg-[#F4F2EE] text-[#0A0A0A] text-xs font-semibold rounded-sm">
                    Two-grate
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <span className="text-sm font-semibold text-[#C41C1B] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View catch basin risers <span>&rarr;</span>
                </span>
              </div>
            </div>
          </a>

          {/* 2 to 9: Eight Smaller Product Cards */}
          {smallProducts.map((prod) => (
            <a
              key={prod.title}
              href="#quote"
              className="border border-[#E5E5E5] bg-white flex flex-col justify-between group hover:border-[#C41C1B] transition-colors shadow-sm overflow-hidden"
            >
              {/* Media Container */}
              <div
                className="relative h-[237px] flex items-center justify-center p-4 overflow-hidden"
                style={{
                  background: prod.darkBg
                    ? "radial-gradient(circle at center, #262626 0%, #141414 100%)"
                    : "radial-gradient(circle at center, #D32F2F 0%, #A81817 100%)",
                }}
              >
                <span className="absolute top-4 left-4 z-10 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 leading-none">
                  {prod.category}
                </span>
                <div className="relative w-full h-full">
                  <Image
                    src={prod.image}
                    alt={prod.alt}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 318px"
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-1 font-heading leading-snug">
                    {prod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5B57] leading-relaxed mb-4">
                    {prod.desc}
                  </p>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#C41C1B] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner: 192 Parts */}
        <div className="bg-[#0A0A0A] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-[28px] font-extrabold text-white uppercase tracking-tight font-display leading-[1.2] mb-2">
              192 PARTS. EVERY SIZE, DRAWING AND 3D VIEW.
            </h3>
            <p className="text-sm sm:text-base text-[#C4C4C4] leading-relaxed">
              See every product in detail, spin it in 3D, check the dimensions and download the CAD file. Or take the whole catalog with you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
            <a
              href="#quote"
              className="bg-[#E1201F] hover:bg-[#C41C1B] text-white font-semibold text-base px-8 py-3.5 inline-flex items-center gap-2 transition-colors"
            >
              <span>See All Products</span>
              <span>&rarr;</span>
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-base border-b border-[#E1201F] pb-0.5 transition-colors"
            >
              <Download className="w-4 h-4 text-[#C41C1B]" />
              <span>Catalog (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
