import React from "react";
import { Truck, Landmark, Droplet, Ruler } from "lucide-react";

export function AudienceSection() {
  const audiences = [
    {
      title: "Paving contractors",
      need: "Parts on site the morning you pave.",
      checks: [
        "Stock sizes ready to ship",
        "Delivery to your yard or the job",
      ],
      linkText: "For contractors",
      icon: Truck,
    },
    {
      title: "Municipalities & DOTs",
      need: "Parts that match your standard details.",
      checks: [
        "Spec sheets and certificates for review",
        "Pricing for annual contracts",
      ],
      linkText: "For agencies",
      icon: Landmark,
    },
    {
      title: "Utility companies",
      need: "Valves you can still reach after paving.",
      checks: [
        "Valve box and gas risers",
        "Made to your box size",
      ],
      linkText: "For utilities",
      icon: Droplet,
    },
    {
      title: "Engineers & specifiers",
      need: "Data you can drop into a spec.",
      checks: [
        "Drawings and CAD files, free",
        "Help sizing from field data",
      ],
      linkText: "For engineers",
      icon: Ruler,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] section-pad border-b border-[#262626]" id="who-we-serve">
      <div className="site-container">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F04442]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F04442] leading-4">
                WHO WE SERVE
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight lg:leading-[52px] tracking-[-0.01em] font-display">
              BUILT FOR THE<br />
              PEOPLE <span className="text-[#F04442]">WHO PAVE.</span>
            </h2>
          </div>
          <div className="lg:pt-6 text-base sm:text-[18px] text-[#C4C4C4] leading-relaxed lg:leading-[28px]">
            <p>
              Contractors, cities, utilities and engineers all buy risers for different reasons. Here&apos;s what each of them gets from us.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.title}
                className="rounded-none border border-[#262626] bg-[#141414] p-6 sm:p-7 flex flex-col justify-between hover:border-[#383838] transition-colors min-h-[410px]"
              >
                <div>
                  {/* Solid Red Square Icon Box (Figma: Background 48x48 fills: ["#e1201f"]) */}
                  <div className="h-12 w-12 bg-[#E1201F] flex items-center justify-center text-white mb-6">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] font-bold text-white mb-4 leading-[28px]">
                    {aud.title}
                  </h3>

                  {/* You Need Block - consistent min-h to align checkmarks across all cards */}
                  <div className="mb-6 min-h-[72px] sm:min-h-[80px]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9C9C9C] block mb-1 leading-4">
                      YOU NEED
                    </span>
                    <p className="text-[14px] sm:text-[15px] text-[#E5E5E5] leading-[22px]">
                      {aud.need}
                    </p>
                  </div>

                  {/* Checkmark List */}
                  <ul className="space-y-3 mb-8">
                    {aud.checks.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-[#F04442] shrink-0 mt-0.5"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 8.5l3.5 3.5 6.5-7" />
                        </svg>
                        <span className="text-[13px] sm:text-[14px] text-[#C4C4C4] leading-[20px]">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Link */}
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-white/80 transition-colors pt-4 border-t border-[#262626]/60"
                >
                  <span>{aud.linkText}</span>
                  <svg
                    className="w-4 h-4 text-[#F04442] shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
