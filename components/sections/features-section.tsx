import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="bg-[#0A0A0A] section-pad border-b border-[#262626] text-white" id="features">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="eyebrow-line" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F04442] leading-4">
              Why our risers hold
            </span>
          </div>
          <h2 className="uppercase text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-white leading-tight lg:leading-[60px] tracking-[-0.01em] mb-4">
            Zero shifting. Flawless grades.<br className="hidden sm:inline" />{" "}
            <span className="text-[#F04442]">Built to last.</span>
          </h2>
          <p className="text-base sm:text-[18px] text-[#C4C4C4] leading-relaxed lg:leading-[28px]">
            A riser has one job: keep the cover flush with the road for as long as the road lasts. Here's how ours do it.
          </p>
        </div>

        {/* Top 3 Core Features Columns with Red Top Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-[#262626] mb-16">
          {/* Feature 01 */}
          <div className="pt-6 border-t-2 border-brand-red flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold text-brand-red font-heading">01</span>
              <span className="text-lg font-bold text-white font-heading">Zero shifting</span>
            </div>
            <div className="space-y-4 text-sm text-[#C4C4C4] leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Locked to the frame.</strong> Adjustable rings expand against the casting with a steel screw, so there's no mortar to crack and nothing to work loose.
              </p>
              <p>
                Machined seats. The cover sits flat and tight, so it doesn't rock or rattle under traffic.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="pt-6 border-t-2 border-brand-red flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold text-brand-red font-heading">02</span>
              <span className="text-lg font-bold text-white font-heading">Flawless grades</span>
            </div>
            <div className="space-y-4 text-sm text-[#C4C4C4] leading-relaxed">
              <p>
                Rises in 1/4" steps from 3/4" up, so the cover finishes flush with the new surface, not close to it.
              </p>
              <p>
                Sloped and tapered rings follow the crown on cambered roads.
              </p>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="pt-6 border-t-2 border-brand-red flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold text-brand-red font-heading">03</span>
              <span className="text-lg font-bold text-white font-heading">Built to last</span>
            </div>
            <div className="space-y-4 text-sm text-[#C4C4C4] leading-relaxed">
              <p>
                Gray iron, ductile iron and A36 steel, black-coated or hot-dip galvanized against salt and water.
              </p>
              <p>
                Low profile. Set flush, so traffic and snowplow blades ride straight over.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Showcase: Adjustment Products */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Adjustment products
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                The parts that keep the promise.
              </h3>
              <p className="text-sm text-[#9C9C9C]">
                Each one exists to stop a cover shifting or sitting off grade.
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:underline shrink-0"
            >
              <span>All adjustment products</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-lg border border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-brand-red/40 transition-colors">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Zero shifting
                </span>
                <div className="relative h-36 rounded bg-[#1F1F1F] border border-[#262626] overflow-hidden mb-4">
                  <Image
                    src="/images/adjustable-riser.png"
                    alt="Expanding steel rings"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Expanding steel rings</h4>
                <p className="text-xs text-[#9C9C9C]">
                  A steel screw locks the ring inside round frames.
                </p>
              </div>
              <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline mt-6">
                <span>View</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-brand-red/40 transition-colors">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Zero shifting
                </span>
                <div className="relative h-36 rounded bg-[#1F1F1F] border border-[#262626] overflow-hidden mb-4">
                  <Image
                    src="/images/mechanical-expansion-riser.png"
                    alt="Screw-adjust risers"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Screw-adjust risers</h4>
                <p className="text-xs text-[#9C9C9C]">
                  Set screws take up a worn or uneven frame.
                </p>
              </div>
              <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline mt-6">
                <span>View</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-brand-red/40 transition-colors">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Flawless grades
                </span>
                <div className="relative h-36 rounded bg-[#1F1F1F] border border-[#262626] overflow-hidden mb-4">
                  <Image
                    src="/images/catch-basin-frame.png"
                    alt="Catch basin riser frames"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Catch basin riser frames</h4>
                <p className="text-xs text-[#9C9C9C]">
                  Square and rectangular, in 1/4" rise steps.
                </p>
              </div>
              <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline mt-6">
                <span>View</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-brand-red/40 transition-colors">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Flawless grades
                </span>
                <div className="relative h-36 rounded bg-[#1F1F1F] border border-[#262626] overflow-hidden mb-4">
                  <Image
                    src="/images/fixed-riser.png"
                    alt="Sloped and tapered rings"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Sloped & tapered rings</h4>
                <p className="text-xs text-[#9C9C9C]">
                  Thicker on one side to follow a road crown. Made to order.
                </p>
              </div>
              <a href="#quote" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:underline mt-6">
                <span>Ask about a slope</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
