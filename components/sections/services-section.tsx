import React from "react";
import { ArrowRight, Wrench, Ruler, FileCheck, Truck } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Custom fabrication",
      desc: "Send a drawing or field sizes and we'll make a riser, grate or frame to match. One piece or a full project.",
      icon: Wrench,
    },
    {
      title: "Engineering help",
      desc: "We check your measurements, recommend fixed or adjustable, and catch problems before anything is made.",
      icon: Ruler,
    },
    {
      title: "Submittal packages",
      desc: "Spec sheets, drawings and material certificates, put together for your bid or agency review.",
      icon: FileCheck,
    },
    {
      title: "Jobsite delivery",
      desc: "Palletized freight to your yard or straight to the job, or will-call pickup in Melville and Stuart.",
      icon: Truck,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-[#E5E5E5]" id="services">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C41C1B]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Services &amp; solutions
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase text-[#0A0A0A] leading-tight lg:leading-[52px] tracking-[-0.01em]">
              More than a<br />
              <span className="text-[#E1201F]">parts counter.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 max-w-xl lg:pb-1">
            <p className="text-base sm:text-[18px] text-[#5C5B57] leading-relaxed lg:leading-[28px]">
              The work around the part: getting the size right, getting it approved, and getting it to the job on time.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group"
            >
              <span>All services</span>
              <ArrowRight className="h-4 w-4 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="border border-[#E5E5E5] bg-white p-6 sm:p-7 flex flex-col justify-between min-h-[270px] shadow-sm hover:border-[#C41C1B]/40 transition-colors"
              >
                <div>
                  <div className="h-12 w-12 bg-[#E1201F] text-white flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-[28px] mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-[15px] text-[#5C5B57] leading-[24px]">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
