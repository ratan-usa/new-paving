import React from "react";
import { ArrowRight, Camera } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="bg-[#F4F2EE] py-20 lg:py-24 border-b border-[#E6E2DA]" id="projects">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C41C1B]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Projects &amp; testimonials
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase text-[#0A0A0A] leading-tight lg:leading-[52px] tracking-[-0.01em]">
              Proven on<br />
              <span className="text-[#E1201F]">real roads.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 max-w-xl lg:pb-1">
            <p className="text-base sm:text-[18px] text-[#57544F] leading-relaxed lg:leading-[28px]">
              Real jobs and real customers, shared with their permission.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group"
            >
              <span>All projects</span>
              <ArrowRight className="h-4 w-4 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-[#E6E2DA] flex flex-col justify-between">
            {/* Top Placeholder Image */}
            <div className="bg-[#E3DFD8] h-[269px] flex flex-col items-center justify-center p-6 text-[#8A8985] gap-3 select-none">
              <Camera className="w-8 h-8 text-[#8A8985] stroke-[1.75]" />
              <span className="text-[12px] font-bold tracking-widest text-[#8A8985] uppercase">
                Job photo
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3">
                  <span className="inline-block border border-dashed border-[#C41C1B] px-1.5 py-0.5 text-[12px] font-bold uppercase tracking-wider text-[#C41C1B]">
                    [CITY, STATE]
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-[28px] mb-6 min-h-[56px]">
                  <span className="border border-dashed border-[#0A0A0A] px-1 py-0.5 mr-1 font-bold">
                    [Number]
                  </span>{" "}
                  manholes raised in one overlay
                </h3>
              </div>

              <div className="border-t border-[#DEDAD2] pt-4 space-y-2 text-[14px] leading-[20px]">
                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Problem</span>
                  <div className="text-[#57544F]">
                    <span className="border border-dashed border-[#57544F] px-1 py-0.5 text-[#57544F] mr-1 inline-block">
                      [Length]
                    </span>{" "}
                    mill-and-fill, every cover left low
                  </div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Product</span>
                  <div className="text-[#57544F]">Adjustable manhole risers</div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Result</span>
                  <div className="text-[#57544F]">
                    <span className="border border-dashed border-[#57544F] px-1 py-0.5 text-[#57544F] inline-block">
                      [Lane reopened the same day]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E6E2DA] flex flex-col justify-between">
            {/* Top Placeholder Image */}
            <div className="bg-[#E3DFD8] h-[269px] flex flex-col items-center justify-center p-6 text-[#8A8985] gap-3 select-none">
              <Camera className="w-8 h-8 text-[#8A8985] stroke-[1.75]" />
              <span className="text-[12px] font-bold tracking-widest text-[#8A8985] uppercase">
                Job photo
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3">
                  <span className="inline-block border border-dashed border-[#C41C1B] px-1.5 py-0.5 text-[12px] font-bold uppercase tracking-wider text-[#C41C1B]">
                    [CITY, STATE]
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-[28px] mb-6 min-h-[56px]">
                  <span className="border border-dashed border-[#0A0A0A] px-1 py-0.5 mr-1 font-bold">
                    [Number]
                  </span>{" "}
                  catch basins raised without rebuilding
                </h3>
              </div>

              <div className="border-t border-[#DEDAD2] pt-4 space-y-2 text-[14px] leading-[20px]">
                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Problem</span>
                  <div className="text-[#57544F]">
                    Non-standard frames on a tight schedule
                  </div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Product</span>
                  <div className="text-[#57544F]">Fabricated steel risers</div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Result</span>
                  <div className="text-[#57544F]">
                    <span className="border border-dashed border-[#57544F] px-1 py-0.5 text-[#57544F] inline-block">
                      [Result]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E6E2DA] flex flex-col justify-between">
            {/* Top Placeholder Image */}
            <div className="bg-[#E3DFD8] h-[269px] flex flex-col items-center justify-center p-6 text-[#8A8985] gap-3 select-none">
              <Camera className="w-8 h-8 text-[#8A8985] stroke-[1.75]" />
              <span className="text-[12px] font-bold tracking-widest text-[#8A8985] uppercase">
                Job photo
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3">
                  <span className="inline-block border border-dashed border-[#C41C1B] px-1.5 py-0.5 text-[12px] font-bold uppercase tracking-wider text-[#C41C1B]">
                    [UTILITY OR AGENCY]
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-[28px] mb-6 min-h-[56px]">
                  <span className="border border-dashed border-[#0A0A0A] px-1 py-0.5 mr-1 font-bold">
                    [Number]
                  </span>{" "}
                  valve boxes kept reachable
                </h3>
              </div>

              <div className="border-t border-[#DEDAD2] pt-4 space-y-2 text-[14px] leading-[20px]">
                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Problem</span>
                  <div className="text-[#57544F]">
                    Valves buried under new asphalt
                  </div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Product</span>
                  <div className="text-[#57544F]">Valve box risers</div>
                </div>

                <div className="grid grid-cols-[68px_1fr] items-start gap-2">
                  <span className="font-semibold text-[#0A0A0A]">Result</span>
                  <div className="text-[#57544F]">
                    <span className="border border-dashed border-[#57544F] px-1 py-0.5 text-[#57544F] inline-block">
                      [Result]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote Banner */}
        <div className="bg-white border border-[#E6E2DA] p-8 sm:p-12 shadow-sm flex items-start gap-6 sm:gap-10">
          <span className="font-serif text-[72px] sm:text-[96px] text-[#E1201F] leading-[0.75] select-none shrink-0 pt-2 font-normal">
            “
          </span>
          <div className="flex-1 max-w-4xl">
            <blockquote className="text-lg sm:text-[22px] font-medium text-[#0A0A0A] leading-relaxed sm:leading-[32px] mb-4">
              <span className="border border-dashed border-[#0A0A0A] p-1 inline-block">
                [Quote from a paving contractor: a job where the risers fit and the crew kept paving.]
              </span>
            </blockquote>

            <div className="text-[14px] flex items-center gap-2 mb-6">
              <span className="border border-dashed border-[#0A0A0A] px-1 py-0.5 font-semibold text-[#0A0A0A] inline-block">
                [Name]
              </span>
              <span className="text-[#57544F]">·</span>
              <span className="border border-dashed border-[#57544F] px-1 py-0.5 text-[#57544F] inline-block">
                [Title, Company, City]
              </span>
            </div>

            {/* Indicator bars */}
            <div className="flex items-center gap-2" aria-label="Quote carousel navigation">
              <div className="w-14 h-1 bg-[#0A0A0A] rounded-full" />
              <div className="w-6 h-1 bg-[#CACACA] rounded-full" />
              <div className="w-6 h-1 bg-[#CACACA] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
