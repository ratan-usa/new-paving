"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

export function ResourcesSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const resourceCards = [
    {
      tag: "PDF · DWG",
      image: "/images/two-grate-combo-riser.png",
      title: "Catalog & CAD files",
      desc: "Spec sheets and drawings for all 192 parts.",
      linkText: "Download",
      href: "#quote",
      isFaqCard: false,
    },
    {
      tag: "VIDEO",
      image: "/images/mechanical-expansion-riser.png",
      title: "Installation guides",
      desc: "Short videos and printable steps for each riser.",
      linkText: "Watch",
      href: "#quote",
      isFaqCard: false,
    },
    {
      tag: "TOOL",
      image: "/images/manhole-ring.png",
      title: "Riser height calculator",
      desc: "Work out the rise from milling and overlay depth.",
      linkText: "Calculate",
      href: "#how-to-measure",
      isFaqCard: false,
    },
    {
      tag: "FAQ",
      title: "Questions & answers",
      desc: "Stacking, sizing, lead times and more.",
      linkText: "Read",
      href: "#faq",
      isFaqCard: true,
    },
  ];

  const blogPosts = [
    {
      tag: "Guide",
      title: "Adjustable manhole risers: a practical guide",
      href: "#quote",
    },
    {
      tag: "Materials",
      title: "Steel or cast iron catch basin risers?",
      href: "#quote",
    },
    {
      tag: "Maintenance",
      title: "How to stop manhole covers rattling",
      href: "#quote",
    },
  ];

  const faqs = [
    {
      question: "Do I have to remove the frame to install a riser?",
      answer:
        "No. The riser sits on the seat of the existing frame and the cover goes back on top at the new height. No excavation and no new concrete.",
    },
    {
      question: "How do I know what size riser to order?",
      answer:
        "Measure four dimensions: cover diameter (A), thickness (B), inside clear opening (C), and height to raise (D). An engineer will confirm the right catalog part or fabricate to match.",
    },
    {
      question: "Can risers be stacked?",
      answer:
        "Yes. Fixed risers can be stacked up to 6 inches, with interlocking seats to prevent shifting under traffic.",
    },
    {
      question: "Do you make sizes that aren't in the catalog?",
      answer:
        "Yes. Our fabrication shop creates custom risers, curb inlets, sloped/tapered rings and double-grate frames from field measurements.",
    },
    {
      question: "How fast can you ship?",
      answer:
        "Standard 192 catalog sizes ship within 24 hours. Will-call pickup is also available in Melville, NY and Stuart, FL on 24 hours' notice.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-[#E5E5E5]" id="resources">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C41C1B]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#C41C1B] leading-4">
                Resources
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[48px] uppercase text-[#0A0A0A] leading-tight lg:leading-[52px] tracking-[-0.01em]">
              Size it. Spec<br />
              it. <span className="text-[#E1201F]">Install it.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 max-w-xl lg:pb-1">
            <p className="text-base sm:text-[18px] text-[#5C5B57] leading-relaxed lg:leading-[28px]">
              Everything you need to choose and fit a riser. Free to download, no sign-up.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group"
            >
              <span>All resources</span>
              <ArrowRight className="h-4 w-4 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 4 Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {resourceCards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#E5E5E5] bg-white flex flex-col justify-between overflow-hidden shadow-sm hover:border-[#C41C1B]/40 transition-colors"
            >
              {/* Top Banner Image / Graphic */}
              <div
                className={`relative h-[198px] flex items-center justify-center p-4 overflow-hidden ${
                  card.isFaqCard
                    ? "bg-[#1A1A1A]"
                    : "bg-gradient-to-tr from-[#9B1C1C] via-[#C82425] to-[#E1201F]"
                }`}
              >
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#0A0A0A] text-white text-[12px] font-bold px-2.5 py-0.5 uppercase tracking-wider inline-block">
                    {card.tag}
                  </span>
                </div>

                {/* Card Artwork */}
                {card.isFaqCard ? (
                  <div className="font-display font-extrabold text-[96px] text-white leading-none select-none">
                    ?
                  </div>
                ) : (
                  card.image && (
                    <div className="relative w-full h-[130px] flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-[#0A0A0A] leading-[28px] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-[#5C5B57] leading-[24px]">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4">
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#C41C1B] hover:opacity-80 transition-opacity group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Split Section: Blog (Left) & Common Questions (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-4" id="faq">
          {/* Left Column: Latest from the blog */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C5B57] block mb-4">
              Latest from the blog
            </span>

            <div className="border-t border-[#E5E5E5]">
              {blogPosts.map((post, idx) => (
                <a
                  key={idx}
                  href={post.href}
                  className="py-4 border-b border-[#E5E5E5] flex items-center justify-between group hover:bg-[#FAFAFA] transition-colors pr-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-28 shrink-0 text-[12px] font-bold uppercase tracking-wider text-[#C41C1B]">
                      {post.tag}
                    </span>
                    <span className="text-[16px] font-semibold text-[#0A0A0A] group-hover:text-[#C41C1B] transition-colors">
                      {post.title}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#5C5B57] group-hover:text-[#C41C1B] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group"
              >
                <span>All articles</span>
                <ArrowRight className="h-4 w-4 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Common questions */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C5B57] block mb-4">
              Common questions
            </span>

            <div className="border-t border-[#E5E5E5]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#E5E5E5]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 flex items-center justify-between text-left group"
                    >
                      <span className="text-[16px] font-semibold text-[#0A0A0A] group-hover:text-[#C41C1B] transition-colors pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ArrowUp className="h-4 w-4 text-[#C41C1B] shrink-0" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-[#C41C1B] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-[15px] text-[#5C5B57] leading-[24px]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#0A0A0A] border-b border-[#E1201F] pb-0.5 hover:opacity-80 transition-opacity group"
              >
                <span>All questions</span>
                <ArrowRight className="h-4 w-4 text-[#C41C1B] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
