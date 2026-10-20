import React from "react";
import { EVENT_ACTIVITIES } from "@/config/event";
import { Code2, Terminal, Users, Sparkles, Rocket, CheckCircle2 } from "lucide-react";

export function Activities() {
  const getIcon = (id: string) => {
    switch (id) {
      case "hackathons":
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case "workshops":
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      case "mentorship":
        return <Users className="w-6 h-6 text-amber-400" />;
      case "showcase":
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case "opportunities":
        return <Rocket className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const hackathon = EVENT_ACTIVITIES[0];
  const workshops = EVENT_ACTIVITIES[1];
  const mentorship = EVENT_ACTIVITIES[2];
  const showcase = EVENT_ACTIVITIES[3];
  const opportunities = EVENT_ACTIVITIES[4];

  return (
    <section id="activities" className="bg-[#0B1628] text-white py-16 md:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#10233E] text-blue-400 border border-blue-500/30 uppercase tracking-wider mb-3">
            Confirmed Event Tracks
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Designed for builders, thinkers, and problem solvers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every session of the Pan-African Discovery Series is engineered to provide tangible practical value—from
            rapid hackathon sprints to one-on-one code critique and founder guidance.
          </p>
        </div>

        {/* Varied Editorial Layout */}
        <div className="mt-12 space-y-6">
          {/* Flagship Track: Hackathon Sprint (Full Width Hero Card) */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#10233E] via-[#0E1E36] to-[#0B1628] border border-blue-500/30 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-500/40">
                    {getIcon("hackathons")}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-blue-300 font-semibold">
                    {hackathon.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {hackathon.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {hackathon.fullDesc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {hackathon.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0B1628]/90 rounded-xl p-5 border border-slate-700/80 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Track Focus</span>
                  <span className="text-emerald-400">Collaborative Sprint</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded bg-[#10233E] border border-slate-800">
                    <span className="font-semibold text-white block mb-0.5">Multidisciplinary Teams:</span>
                    Pair up with programmers, UI/UX designers, and business strategists to solve real problems.
                  </div>
                  <div className="p-2.5 rounded bg-[#10233E] border border-slate-800">
                    <span className="font-semibold text-white block mb-0.5">Real Problem Statements:</span>
                    Tackle friction in digital commerce, identity, payments, and distributed African infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Split: Workshops & Mentorship */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Workshops */}
            <div className="rounded-2xl bg-[#10233E]/80 border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40">
                  {getIcon("workshops")}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  {workshops.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {workshops.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {workshops.fullDesc}
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-800">
                {workshops.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentorship & Networking */}
            <div className="rounded-2xl bg-[#10233E]/80 border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-500/40">
                  {getIcon("mentorship")}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  {mentorship.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {mentorship.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {mentorship.fullDesc}
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-800">
                {mentorship.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2-Column Split: Showcase & Entrepreneurship */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project & Talent Showcasing */}
            <div className="rounded-2xl bg-[#10233E]/80 border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/40">
                  {getIcon("showcase")}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-semibold">
                  {showcase.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {showcase.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {showcase.fullDesc}
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-800">
                {showcase.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Innovation & Entrepreneurship */}
            <div className="rounded-2xl bg-[#10233E]/80 border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-lg bg-rose-950/80 border border-rose-500/40">
                  {getIcon("opportunities")}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold">
                  {opportunities.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {opportunities.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {opportunities.fullDesc}
              </p>
              <ul className="space-y-2 pt-2 border-t border-slate-800">
                {opportunities.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
