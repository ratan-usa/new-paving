import React from "react";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

export function LocationsSection() {
  const offices = [
    {
      city: "Melville, New York",
      badge: "NY",
      address: "105 Maxess Road, Melville, NY 11747",
      phone: "(631) 458-1111",
      hours: "Mon–Fri, 7 AM–5 PM ET · Will-call pickup",
    },
    {
      city: "Stuart, Florida",
      badge: "FL",
      address: "850 NW Federal Highway, Stuart, FL 34994",
      phone: "(772) 297-0700",
      hours: "Mon–Fri, 7 AM–5 PM ET · Will-call pickup",
    },
    {
      city: "Toronto, Ontario",
      badge: "ON",
      address: "1 Yonge Street, Toronto, ON M5E 1R4",
      phone: "(438) 805-9990",
      hours: "Mon–Fri, 7 AM–5 PM ET · Sales office",
    },
  ];

  return (
    <section className="bg-[#F4F2EE] py-20 lg:py-24 border-b border-[#E6E2DA]" id="locations">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C41C1B]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Offices &amp; locations
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase text-[#0A0A0A] leading-tight lg:leading-[52px] tracking-[-0.01em]">
              Close to <span className="text-[#E1201F]">your job.</span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-base sm:text-[18px] text-[#57544F] leading-relaxed lg:leading-[28px]">
              Three offices, one sales desk. We ship palletized freight across the US and Canada, with will-call pickup in Melville and Stuart on 24 hours&apos; notice.
            </p>
          </div>
        </div>

        {/* 2 Column Layout: Map (Left) and 3 Location Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Stylized Map */}
          <div className="lg:col-span-6 bg-[#121316] border border-[#23262D] relative min-h-[520px] lg:min-h-full flex flex-col justify-between overflow-hidden shadow-sm">
            {/* SVG Map of Eastern North America */}
            <div className="absolute inset-0 w-full h-full">
              <svg
                viewBox="0 0 600 620"
                className="w-full h-full object-cover select-none"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                {/* Background water */}
                <rect width="600" height="620" fill="#121316" />

                {/* Subtle map grid lines */}
                <path
                  d="M0 150 H600 M0 300 H600 M0 450 H600 M150 0 V620 M300 0 V620 M450 0 V620"
                  stroke="#1E2128"
                  strokeWidth="0.75"
                  strokeDasharray="4 6"
                />

                {/* Eastern US & Canada stylized landmass geometry */}
                <g fill="#1F2229" stroke="#2B2F3A" strokeWidth="1">
                  {/* Canada / Ontario / Quebec */}
                  <path d="M 120 0 L 600 0 L 600 240 L 530 200 L 480 230 L 440 190 L 390 220 L 330 210 L 290 170 L 220 180 L 160 140 L 140 80 Z" />

                  {/* Great Lakes Cutouts */}
                  <path
                    d="M 230 150 Q 260 170 280 160 Q 270 190 240 180 Z"
                    fill="#121316"
                    stroke="#2B2F3A"
                    strokeWidth="1"
                  />
                  <path
                    d="M 285 165 Q 320 185 340 175 Q 330 205 295 195 Z"
                    fill="#121316"
                    stroke="#2B2F3A"
                    strokeWidth="1"
                  />
                  <path
                    d="M 290 200 Q 325 210 345 205 Q 335 220 300 215 Z"
                    fill="#121316"
                    stroke="#2B2F3A"
                    strokeWidth="1"
                  />

                  {/* Northeast & Mid-Atlantic & South */}
                  <path d="M 140 80 L 160 140 L 220 180 L 200 280 L 180 340 L 160 420 L 180 480 L 260 480 L 290 540 L 300 580 L 320 540 L 300 480 L 340 420 L 380 360 L 400 320 L 430 280 L 480 230 L 530 200 L 600 240 L 600 620 L 0 620 L 0 0 Z" />

                  {/* State / Province accent divider lines */}
                  <path
                    d="M 180 340 L 380 360 M 160 420 L 340 420 M 200 280 L 400 320 M 220 180 L 290 215 L 430 280"
                    stroke="#262A34"
                    strokeWidth="0.8"
                    fill="none"
                  />
                </g>
              </svg>
            </div>

            {/* Pins and Labels Overlay */}
            <div className="relative z-10 w-full h-full min-h-[520px] pointer-events-none">
              {/* Pin 1: Toronto, ON */}
              <div
                className="absolute flex items-center gap-2.5 pointer-events-auto"
                style={{ top: "26%", left: "42%", transform: "translate(-100%, -50%)" }}
              >
                <div className="bg-white text-[#0A0A0A] font-bold text-[12px] px-2.5 py-1 shadow-md uppercase tracking-wider whitespace-nowrap">
                  Toronto, ON
                </div>
                <div className="relative flex items-center justify-center">
                  <span className="w-5 h-5 rounded-full bg-[#C41C1B] border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                </div>
              </div>

              {/* Pin 2: Melville, NY */}
              <div
                className="absolute flex items-center gap-2.5 pointer-events-auto"
                style={{ top: "37%", left: "61%", transform: "translate(0, -50%)" }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-5 h-5 rounded-full bg-[#C41C1B] border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                </div>
                <div className="bg-white text-[#0A0A0A] font-bold text-[12px] px-2.5 py-1 shadow-md uppercase tracking-wider whitespace-nowrap">
                  Melville, NY
                </div>
              </div>

              {/* Pin 3: Stuart, FL */}
              <div
                className="absolute flex items-center gap-2.5 pointer-events-auto"
                style={{ top: "84%", left: "48%", transform: "translate(0, -50%)" }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-5 h-5 rounded-full bg-[#C41C1B] border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                </div>
                <div className="bg-white text-[#0A0A0A] font-bold text-[12px] px-2.5 py-1 shadow-md uppercase tracking-wider whitespace-nowrap">
                  Stuart, FL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Office Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
            {offices.map((off) => (
              <div
                key={off.city}
                className="border border-[#E6E2DA] bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[#C41C1B]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-snug">
                      {off.city}
                    </h3>
                    <span className="bg-[#0A0A0A] text-white text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider">
                      {off.badge}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-[14px] leading-[22px]">
                    <div className="flex items-start gap-2.5 text-[#5C5B57]">
                      <MapPin className="h-4 w-4 text-[#C41C1B] shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#0A0A0A] font-bold">
                      <Phone className="h-4 w-4 text-[#C41C1B] shrink-0" />
                      <a
                        href={`tel:${off.phone.replace(/[^0-9]/g, "")}`}
                        className="hover:text-[#C41C1B] transition-colors"
                      >
                        {off.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#5C5B57]">
                      <Clock className="h-4 w-4 text-[#C41C1B] shrink-0" />
                      <span>{off.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group w-fit"
                  >
                    <span>Get directions</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
