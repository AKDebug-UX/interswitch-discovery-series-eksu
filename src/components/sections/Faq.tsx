"use client";

import React, { useState } from "react";
import { FAQ_ITEMS, EVENT_CONFIG } from "@/config/event";
import { ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F8F7F3] text-[#202631] py-16 md:py-24 border-b border-[#E5E0D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#EAE6DC] text-[#10233E] uppercase tracking-wider mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1628]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Transparent answers grounded solely in the verified event announcement. If you need further assistance, please refer to the official registration channel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#E2DFD6] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0B1628] flex items-center gap-2.5">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#F97316]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in-50 duration-150"
                  >
                    <p>{item.answer}</p>
                    {item.question.includes("register") && (
                      <div className="mt-3">
                        <a
                          href={EVENT_CONFIG.registration.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] underline underline-offset-4"
                        >
                          <span>Open Microsoft Forms Registration Portal</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote on official channels */}
        <div className="mt-8 p-4 rounded-xl bg-[#EDEAE0] border border-[#DDD8CB] flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Still have questions? Check with the official registration form for organizer contacts.</span>
          </div>
          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0B1628] hover:text-[#1D4ED8] flex items-center gap-1"
          >
            <span>Official Registration Form</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
