import React from "react";
import { Download, ArrowRight } from "lucide-react";

export function MeasureSection() {
  const measurements = [
    {
      badge: "A",
      isAccent: false,
      title: "Cover diameter",
      desc: "Measure straight across the top of the cover.",
    },
    {
      badge: "B",
      isAccent: false,
      title: "Cover thickness",
      desc: "Measure the edge of the cover where it sits in the frame.",
    },
    {
      badge: "C",
      isAccent: false,
      title: "Inside clear opening",
      desc: "Measure the open space inside the frame, below the seat.",
    },
    {
      badge: "D",
      isAccent: true,
      title: "Height to raise",
      desc: "How far the cover has to come up to meet the new surface.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-24 border-b border-[#262626] text-white" id="how-to-measure">
      <div className="site-container">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F04442]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#F04442] leading-4">
                What we need from you
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase leading-tight lg:leading-[52px] tracking-[-0.01em] mb-10">
              <span className="text-white">
                Four<br />
                measurements.<br />
              </span>
              <span className="text-[#E1201F]">
                One<br />
                accurate quote.
              </span>
            </h2>

            {/* 4 Measurements List */}
            <div className="divide-y divide-[#262626] border-t border-b border-[#262626] mb-8">
              {measurements.map((m) => (
                <div key={m.badge} className="py-4 sm:py-5 flex items-start gap-4">
                  <div
                    className={`w-8 h-8 flex items-center justify-center font-bold text-[14px] shrink-0 ${
                      m.isAccent
                        ? "bg-[#E1201F] text-white"
                        : "bg-white text-[#0A0A0A]"
                    }`}
                  >
                    {m.badge}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-white leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-[15px] text-[#C4C4C4] leading-[24px] mt-0.5">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice Box */}
            <div className="bg-[#141414] border border-[#262626] p-5 sm:p-6 mb-8">
              <p className="text-[14px] sm:text-[15px] text-[#A3A3A3] leading-[24px]">
                <strong className="font-semibold text-white">
                  Ordering something other than a manhole riser?
                </strong>{" "}
                Catch basin and valve box risers, grates, plates and custom parts all
                work the same way: send the size of what&apos;s in the road, its
                thickness, the clear opening and the rise you need. A photo of the
                maker&apos;s name cast on the frame helps too.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold text-white border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity"
              >
                <Download className="h-4 w-4 text-[#F04442]" />
                <span>Measuring sheet (PDF)</span>
              </a>

              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 text-[15px] sm:text-[16px] font-semibold text-white hover:opacity-80 transition-opacity group"
              >
                <span>Send your measurements</span>
                <ArrowRight className="h-4 w-4 text-[#F04442] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: White Technical CAD Blueprint Card */}
          <div className="lg:col-span-6 bg-white border border-[#E5E5E5] p-6 sm:p-8 text-[#0A0A0A] shadow-md">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E5E5]">
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C5B57]">
                Section through a manhole frame
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C5B57]">
                Not to scale
              </span>
            </div>

            {/* SVG Diagram matching Figma 1:1461 */}
            <div className="w-full flex items-center justify-center py-2">
              <svg
                viewBox="0 0 608 340"
                className="w-full h-auto max-w-[608px] select-none"
                fill="none"
              >
                <defs>
                  {/* Arrow markers for black dimension lines */}
                  <marker
                    id="dim-arrow-start"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="6 0, 0 3, 6 6" fill="#0A0A0A" />
                  </marker>
                  <marker
                    id="dim-arrow-end"
                    markerWidth="6"
                    markerHeight="6"
                    refX="1"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 3, 0 6" fill="#0A0A0A" />
                  </marker>

                  {/* Arrow markers for red dimension D */}
                  <marker
                    id="dim-arrow-start-d"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="6 0, 0 3, 6 6" fill="#0A0A0A" />
                  </marker>
                  <marker
                    id="dim-arrow-end-d"
                    markerWidth="6"
                    markerHeight="6"
                    refX="1"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 3, 0 6" fill="#0A0A0A" />
                  </marker>
                </defs>

                {/* Ground Cut Fills */}
                <rect x="20" y="112" width="87" height="180" fill="#F4F2EE" />
                <rect x="501" y="112" width="87" height="180" fill="#F4F2EE" />

                {/* Asphalt top blocks */}
                <rect x="20" y="77" width="87" height="35" fill="#3A3A3A" />
                <rect x="501" y="77" width="87" height="35" fill="#3A3A3A" />

                {/* Concrete Frame Sections */}
                {/* Left Frame Body */}
                <rect x="107" y="112" width="35" height="180" fill="#B5B4B0" />
                <rect x="142" y="132" width="41" height="23" fill="#B5B4B0" />

                {/* Right Frame Body */}
                <rect x="425" y="132" width="41" height="23" fill="#B5B4B0" />
                <rect x="466" y="112" width="35" height="180" fill="#B5B4B0" />

                {/* Seated Manhole Cover */}
                <rect x="126" y="109" width="356" height="23" fill="#0A0A0A" />

                {/* Red dashed NEW SURFACE line */}
                <line
                  x1="70"
                  y1="77"
                  x2="501"
                  y2="77"
                  stroke="#E1201F"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* NEW SURFACE text */}
                <text
                  x="510"
                  y="70"
                  fill="#5C5B57"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="0.05em"
                >
                  NEW SURFACE
                </text>

                {/* DIMENSION A: Cover diameter */}
                {/* Vertical Extension Guides */}
                <line x1="126" y1="109" x2="126" y2="40" stroke="#9C9C9C" strokeWidth="1" />
                <line x1="482" y1="109" x2="482" y2="40" stroke="#9C9C9C" strokeWidth="1" />

                {/* Dimension Line A */}
                <line
                  x1="132"
                  y1="40"
                  x2="476"
                  y2="40"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  markerStart="url(#dim-arrow-start)"
                  markerEnd="url(#dim-arrow-end)"
                />

                {/* Badge A */}
                <rect x="291" y="27" width="26" height="26" fill="#0A0A0A" />
                <text
                  x="304"
                  y="45"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                >
                  A
                </text>

                {/* DIMENSION B: Cover thickness */}
                {/* White vertical indicator on cover edge */}
                <line x1="440" y1="109" x2="440" y2="132" stroke="#FFFFFF" strokeWidth="1.5" />
                {/* Pointer Line */}
                <polyline
                  points="440,120 458,88 472,88"
                  stroke="#0A0A0A"
                  strokeWidth="1.2"
                  fill="none"
                />
                {/* Badge B */}
                <rect x="474" y="76" width="26" height="25" fill="#0A0A0A" />
                <text
                  x="487"
                  y="93"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                >
                  B
                </text>

                {/* DIMENSION C: Inside clear opening */}
                {/* Vertical dashed guide lines */}
                <line
                  x1="183"
                  y1="155"
                  x2="183"
                  y2="228"
                  stroke="#9C9C9C"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="425"
                  y1="155"
                  x2="425"
                  y2="228"
                  stroke="#9C9C9C"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />

                {/* Dimension Line C */}
                <line
                  x1="189"
                  y1="210"
                  x2="419"
                  y2="210"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  markerStart="url(#dim-arrow-start)"
                  markerEnd="url(#dim-arrow-end)"
                />

                {/* Badge C */}
                <rect x="291" y="197" width="26" height="26" fill="#0A0A0A" />
                <text
                  x="304"
                  y="215"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                >
                  C
                </text>

                {/* DIMENSION D: Height to raise */}
                {/* Vertical Dimension Line from cover top (109) to new surface (77) */}
                <line
                  x1="220"
                  y1="82"
                  x2="220"
                  y2="104"
                  stroke="#0A0A0A"
                  strokeWidth="1.5"
                  markerStart="url(#dim-arrow-start-d)"
                  markerEnd="url(#dim-arrow-end-d)"
                />

                {/* Badge D */}
                <rect x="230" y="81" width="26" height="25" fill="#E1201F" />
                <text
                  x="243"
                  y="98"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                >
                  D
                </text>

                {/* Bottom label */}
                <text
                  x="304"
                  y="275"
                  textAnchor="middle"
                  fill="#5C5B57"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="0.08em"
                >
                  EXISTING FRAME STAYS IN PLACE
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
