import React from "react";

export function SpecsSection() {
  const specs = [
    {
      org: "ASTM",
      code: "A48",
      desc: "Gray iron, Class 35B",
    },
    {
      org: "ASTM",
      code: "A536",
      desc: "Ductile iron",
    },
    {
      org: "ASTM",
      code: "A36",
      desc: "Structural steel",
    },
    {
      org: "AASHTO",
      code: "H-20",
      desc: "Highway traffic loading",
    },
    {
      org: "ADA",
      code: "705",
      desc: "Detectable warning plates",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E5E5E5]" id="specs">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Heading + Description + Link) */}
          <div className="lg:col-span-5 max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#C41C1B]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                STANDARDS & CERTIFICATIONS
              </span>
            </div>
            <h2 className="uppercase text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A0A0A] leading-[1.1] tracking-[-0.01em] mb-4 font-display">
              MADE TO THE<br />
              SPECS <span className="text-[#E1201F]">ON</span><br />
              <span className="text-[#E1201F]">YOUR DRAWINGS.</span>
            </h2>
            <p className="text-base sm:text-[16px] text-[#5C5B57] leading-[24px] mb-5">
              Material certificates come with every order. Test reports are ready for your submittal.
            </p>
            <div>
              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-[#0A0A0A] hover:text-[#E1201F] border-b border-[#E1201F] pb-0.5 transition-colors group"
              >
                <span>Certificates & test reports</span>
                <span className="text-[#C41C1B] font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 Spec Cards in a Single Row) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {specs.map((item) => (
                <div
                  key={item.code}
                  className="rounded-none border border-[#262626] flex flex-col items-center justify-between min-h-[178px] p-4 text-center shadow-sm relative overflow-hidden group hover:border-[#383838] transition-colors"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 45%, rgba(0, 0, 0, 0) 70%), #0A0A0A",
                  }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9C9C9C] block pt-1">
                    {item.org}
                  </span>

                  <div className="my-1">
                    <span className="text-2xl sm:text-[32px] font-extrabold text-white font-display tracking-tight block leading-none">
                      {item.code}
                    </span>
                  </div>

                  <div className="w-full flex flex-col items-center">
                    <div className="w-full h-px bg-[#E1201F] mb-2.5" />
                    <p className="text-[12px] sm:text-[13px] text-[#C4C4C4] font-normal leading-[16px] sm:leading-[18px] min-h-[34px] flex items-center justify-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
