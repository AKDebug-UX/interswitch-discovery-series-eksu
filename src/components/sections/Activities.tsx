import React from "react";
import { EVENT_ACTIVITIES } from "@/config/event";
import { CheckCircle2 } from "lucide-react";

export function Activities() {
  const getBadgeClass = (style: "cyan" | "orange-gradient" | "navy") => {
    switch (style) {
      case "cyan":
        return "badge-cyan";
      case "orange-gradient":
        return "badge-orange-gradient";
      case "navy":
        return "badge-navy";
      default:
        return "badge-cyan";
    }
  };

  return (
    <section id="activities" className="bg-[#002D5B] text-white py-16 md:py-24 border-b border-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#001E3D] text-cyan-300 border border-cyan-500/30 uppercase tracking-wider mb-3">
            Official Program Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Six confirmed pillars for African student innovators.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sky-100 leading-relaxed">
            Every session of the Interswitch Discovery Series with Ekiti State University is engineered to provide tangible practical value—from design thinking clinics to technical integration and the grand pitch.
          </p>
        </div>

        {/* 6 Grid Cards Matching Flyer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="rounded-2xl bg-[#001E3D]/80 border border-sky-700/60 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-500 transition-all duration-200 shadow-lg hover:shadow-cyan-950/40 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold ${getBadgeClass(
                      activity.badgeStyle
                    )}`}
                  >
                    {activity.title}
                  </span>
                  <span className="font-mono text-[11px] text-sky-300 uppercase tracking-wider">
                    {activity.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-sm text-sky-100/90 leading-relaxed">
                  {activity.fullDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-800/80 space-y-2">
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-sky-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
