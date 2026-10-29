import React from "react";

export function TopBar() {
  return (
    <div className="bg-black text-[#9C9C9C] text-xs font-semibold h-10 border-b border-white/[0.08] flex items-center">
      <div className="site-container flex items-center justify-between">
        <nav className="flex items-center gap-6" aria-label="Audience quick links">
          <a
            href="#who-we-serve"
            className="hover:text-white transition-colors"
          >
            Paving Contractors
          </a>
          <a
            href="#who-we-serve"
            className="hover:text-white transition-colors"
          >
            Municipalities &amp; DOTs
          </a>
          <a
            href="#who-we-serve"
            className="hover:text-white transition-colors"
          >
            Utilities
          </a>
          <a
            href="#who-we-serve"
            className="hover:text-white transition-colors"
          >
            Engineers
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <span>
            <span className="text-white">Pro Desk</span>
            <span className="text-[#9C9C9C]"> Mon–Fri, 7 AM–5 PM ET</span>
          </span>
          <span className="text-[#5C5B57]">·</span>
          <span className="text-[#9C9C9C]">
            Melville, NY · Stuart, FL · Toronto, ON
          </span>
        </div>
      </div>
    </div>
  );
}

