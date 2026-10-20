import { EVENT_SCHEDULE_DAYS } from "@/config/event";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

export function Schedule() {
  return (
    <section id="schedule" className="bg-[#F0F9FF] text-[#002D5B] py-16 md:py-24 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-sky-100 text-[#002D5B] uppercase tracking-wider mb-3">
            3-Day Programme Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#002D5B] leading-tight">
            October 28–30, 2026: Three days structured for momentum.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            The Discovery Series follows an intentional three-stage progression: from kickoff problem framing and team formation, to deep technical build sprints, concluding with live talent demonstrations.
          </p>
        </div>

        {/* Schedule Notice Badge */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F97316] shrink-0" />
            <span>
              <strong>Schedule Status:</strong> 3-Day Dates & Core Themes are confirmed. Minute-by-minute room schedules, speaker rosters, and judging rubrics will be announced closer to the event date.
            </span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-sky-50 text-[#002D5B] font-bold border border-sky-200 shrink-0">
            DATES: CONFIRMED
          </span>
        </div>

        {/* 3-Day Cards Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EVENT_SCHEDULE_DAYS.map((day) => (
            <div
              key={day.dayNumber}
              className="rounded-2xl bg-white border border-sky-100 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Day Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-sky-50 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#002D5B] text-white font-mono font-bold text-xs flex items-center justify-center">
                      0{day.dayNumber}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {day.dayOfWeek}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#1D4ED8]">
                    {day.dateStr}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1628] leading-snug">
                    {day.theme}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {day.summary}
                  </p>
                </div>

                {/* Focus tracks */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Core Focus Tracks:
                  </div>
                  <div className="space-y-2">
                    {day.focusTracks.map((track, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-700 bg-[#F8F7F3] p-2 rounded-lg border border-[#EDEAE0]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{track}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{day.statusNotice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
