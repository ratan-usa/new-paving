"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Mail, Upload, Ruler, FileCheck, Truck, ArrowRight, ChevronDown } from "lucide-react";

export function QuoteSection() {
  const [activeTab, setActiveTab] = useState<"job" | "bulk">("job");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-24 overflow-hidden text-white" id="quote">
      {/* Red Background Accent for Right Half */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] bg-[#C41C1B] pointer-events-none z-0" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Content & Contact) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#F04442]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#F04442] leading-4">
                Let&apos;s build together
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase leading-tight lg:leading-[52px] tracking-[-0.01em] mb-6">
              <span className="text-white">
                Send the frame<br />
                size.{" "}
              </span>
              <span className="text-[#E1201F]">
                We&apos;ll<br />
                handle the rest.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-[18px] text-[#A3A3A3] leading-relaxed lg:leading-[28px] mb-8">
              Price, lead time and a spec sheet, back within{" "}
              <span className="inline-block border border-dashed border-[#8A8985] px-1 py-0.5 text-white font-medium">
                [one business day]
              </span>
              . Buying for a season or a whole city? Ask for bulk pricing and we&apos;ll
              set up contractor rates.
            </p>

            {/* 3 Direct Contact Rows */}
            <div className="divide-y divide-[#262626] border-y border-[#262626] mb-10">
              <a
                href="tel:6314581111"
                className="flex items-center gap-4 py-4 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="h-12 w-12 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#C41C1B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8985] block">
                    Call the Pro Desk
                  </span>
                  <strong className="text-[16px] text-white font-bold group-hover:text-[#E1201F] transition-colors">
                    (631) 458-1111
                  </strong>
                </div>
              </a>

              <a
                href="https://wa.me/15162521111"
                className="flex items-center gap-4 py-4 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="h-12 w-12 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#C41C1B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8985] block">
                    WhatsApp a site photo
                  </span>
                  <strong className="text-[16px] text-white font-bold group-hover:text-[#E1201F] transition-colors">
                    +1 516 252 1111
                  </strong>
                </div>
              </a>

              <a
                href="mailto:sales@pavingrisers.com"
                className="flex items-center gap-4 py-4 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="h-12 w-12 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#C41C1B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8985] block">
                    Email drawings
                  </span>
                  <strong className="text-[16px] text-white font-bold group-hover:text-[#E1201F] transition-colors">
                    sales@pavingrisers.com
                  </strong>
                </div>
              </a>
            </div>

            {/* 3 Workflow Step Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-[#C41C1B] bg-[#141414] p-4 flex flex-col justify-between min-h-[140px]">
                <Ruler className="h-5 w-5 text-[#C41C1B]" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C41C1B] block mb-1">
                    STEP 01
                  </span>
                  <p className="text-[13px] font-semibold text-white leading-snug">
                    We check your measurements
                  </p>
                </div>
              </div>

              <div className="border border-[#C41C1B] bg-[#141414] p-4 flex flex-col justify-between min-h-[140px]">
                <FileCheck className="h-5 w-5 text-[#C41C1B]" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C41C1B] block mb-1">
                    STEP 02
                  </span>
                  <p className="text-[13px] font-semibold text-white leading-snug">
                    You get price and lead time
                  </p>
                </div>
              </div>

              <div className="border border-[#C41C1B] bg-[#141414] p-4 flex flex-col justify-between min-h-[140px]">
                <Truck className="h-5 w-5 text-[#C41C1B]" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C41C1B] block mb-1">
                    STEP 03
                  </span>
                  <p className="text-[13px] font-semibold text-white leading-snug">
                    We ship to your yard or job
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 shadow-2xl text-[#0A0A0A]">
              {/* Segmented Control Tabs */}
              <div className="grid grid-cols-2 border border-[#0A0A0A] mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("job")}
                  className={`p-3.5 text-left transition-colors ${
                    activeTab === "job"
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-white text-[#0A0A0A] hover:bg-gray-50 border-r border-[#0A0A0A]"
                  }`}
                >
                  <span className="block text-[14px] font-bold">Quote a job</span>
                  <span
                    className={`block text-[12px] mt-0.5 ${
                      activeTab === "job" ? "text-[#A3A3A3]" : "text-[#5C5B57]"
                    }`}
                  >
                    One project or structure list
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("bulk")}
                  className={`p-3.5 text-left transition-colors ${
                    activeTab === "bulk"
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-white text-[#0A0A0A] hover:bg-gray-50"
                  }`}
                >
                  <span className="block text-[14px] font-bold">Bulk pricing</span>
                  <span
                    className={`block text-[12px] mt-0.5 ${
                      activeTab === "bulk" ? "text-[#A3A3A3]" : "text-[#5C5B57]"
                    }`}
                  >
                    Contractors &amp; municipalities
                  </span>
                </button>
              </div>

              <p className="text-[13px] sm:text-[14px] text-[#5C5B57] mb-6">
                Takes about 2 minutes. Fields marked optional can be skipped.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-gray-50 border border-[#E5E5E5]">
                  <h4 className="text-xl font-bold text-[#0A0A0A] mb-2">Quote Request Received</h4>
                  <p className="text-sm text-[#5C5B57]">
                    An engineer will review your specifications and contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="w-full h-11 px-3.5 py-2 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                        Company or agency
                      </label>
                      <input
                        type="text"
                        className="w-full h-11 px-3.5 py-2 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                        Work email
                      </label>
                      <input
                        type="email"
                        className="w-full h-11 px-3.5 py-2 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        className="w-full h-11 px-3.5 py-2 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                      Product
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-11 px-3.5 py-2 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] appearance-none pr-10 cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>Choose a product</option>
                        <option value="fixed">Manhole Riser - Solid Cast (Fixed)</option>
                        <option value="adjustable">Manhole Riser - Expanding Steel (Adjustable)</option>
                        <option value="catch-basin">Catch Basin Riser Assemblies</option>
                        <option value="valve-box">Valve Box Risers</option>
                        <option value="custom">Specialty / Custom Fabricated</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5C5B57] pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0A0A0A] mb-1.5">
                      Frame size, quantity and rise
                    </label>
                    <textarea
                      placeholder='e.g. 40 manholes, 24" frames, 2" rise, paving on May 12'
                      rows={3}
                      className="w-full p-3.5 text-[14px] bg-white border border-[#D0C9C0] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] resize-none"
                      required
                    />
                  </div>

                  {/* Dropzone */}
                  <div className="border border-dashed border-[#8A8985] p-4 flex items-center gap-4 bg-white hover:border-[#0A0A0A] transition-colors cursor-pointer">
                    <Upload className="h-5 w-5 text-[#C41C1B] shrink-0" />
                    <div>
                      <span className="block text-[13px] font-bold text-[#0A0A0A]">
                        Attach drawings or photos (optional)
                      </span>
                      <span className="block text-[12px] text-[#5C5B57]">
                        PDF, JPG, DWG or a structure list, up to 20 MB
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#E1201F] hover:bg-[#C41C1B] text-white font-bold text-[16px] h-12 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Get My Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Centered Privacy footnote */}
                  <div className="pt-2 text-center text-[12px] text-[#5C5B57]">
                    We only use your details to reply to this request.{" "}
                    <a href="#privacy" className="underline hover:text-[#0A0A0A]">
                      Privacy policy
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
