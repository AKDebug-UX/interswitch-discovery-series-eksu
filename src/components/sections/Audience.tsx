"use client";

import React, { useState } from "react";
import { AUDIENCE_GROUPS } from "@/config/event";
import {
  Code,
  Palette,
  Cpu,
  TrendingUp,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Audience() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const icons = [
    <Code key="0" className="w-5 h-5" />,
    <Palette key="1" className="w-5 h-5" />,
    <Cpu key="2" className="w-5 h-5" />,
    <TrendingUp key="3" className="w-5 h-5" />,
    <Compass key="4" className="w-5 h-5" />,
  ];

  const current = AUDIENCE_GROUPS[selectedIdx];

  return (
    <section id="audience" className="bg-[#F8F7F3] text-[#202631] py-16 md:py-24 border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#EAE6DC] text-[#10233E] uppercase tracking-wider mb-3">
            Who Should Attend
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1628] leading-tight">
            Every craft has a place in the build cycle.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Whether you already ship production code, design interfaces in Figma, crunch data models, or are looking for your first tech direction—this series offers pathways tailored to where you are.
          </p>
        </div>

        {/* Interactive Persona Tabs and Detailed Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Audience Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
              Select Your Profile:
            </div>
            {AUDIENCE_GROUPS.map((group, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#0B1628] text-white border-[#0B1628] shadow-lg shadow-slate-900/10 scale-[1.01]"
                      : "bg-white text-slate-700 border-[#E2DFD6] hover:bg-[#F3F0E6] hover:text-[#0B1628]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? "bg-[#10233E] text-[#60A5FA]"
                          : "bg-slate-100 text-slate-600 group-hover:text-[#0B1628]"
                      }`}
                    >
                      {icons[idx]}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">{group.role}</div>
                      <div
                        className={`text-xs mt-0.5 line-clamp-1 ${
                          isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {group.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive
                        ? "text-[#F97316] translate-x-1"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Experience Deep Dive (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2DFD6] p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8]">
                  {icons[selectedIdx]}
                </span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                    Focused Track
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1628]">
                    {current.role}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Beginners & Experienced Welcome
              </span>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              {current.description}
            </p>

            {/* What you gain */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                What You Gain From The 3 Days
              </h4>
              <div className="space-y-2.5">
                {current.whatYouGain.map((gain, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{gain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Activities */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-semibold">
                Recommended Programme Highlights:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.recommendedActivities.map((act, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F7F3] border border-[#DDD8CB] text-xs font-medium text-slate-800"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                    {act}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
