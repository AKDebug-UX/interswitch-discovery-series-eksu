import React from "react";
import { EVENT_CONFIG } from "@/config/event";
import { Compass, Users2, Shield, CalendarCheck, MapPin } from "lucide-react";

export function Overview() {
  return (
    <section id="overview" className="bg-[#F8F7F3] text-[#202631] py-16 md:py-24 border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#EAE6DC] text-[#10233E] uppercase tracking-wider mb-3">
            Event Blueprint & Scope
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1628] leading-tight">
            Connecting campus ambition to Africa&apos;s technological frontier.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            The {EVENT_CONFIG.name} at {EVENT_CONFIG.institution.name} brings together
            students across engineering, design, data, and entrepreneurship for three focused days of learning,
            building, and community.
          </p>
        </div>

        {/* 4-Pillar Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2DFD6] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-4">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-700 uppercase tracking-wider">Duration</div>
            <h3 className="text-xl font-bold text-[#0B1628] mt-1">3 Full Days</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              October 28–30, 2026. A structured arc spanning kickoff ideation, intensive hack sprints, and live showcase presentations.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2DFD6] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-[#EA580C] mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-700 uppercase tracking-wider">Host Campus</div>
            <h3 className="text-xl font-bold text-[#0B1628] mt-1">EKSU, Ado-Ekiti</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Hosted in the heart of Ekiti State, providing an accessible central gathering ground for regional student innovators and creators.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2DFD6] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-700 uppercase tracking-wider">Focus Areas</div>
            <h3 className="text-xl font-bold text-[#0B1628] mt-1">Tech & Enterprise</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Bridging hands-on software development with sustainable digital entrepreneurship, fintech architecture, and modern product design.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2DFD6] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <Users2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-700 uppercase tracking-wider">Ecosystem Link</div>
            <h3 className="text-xl font-bold text-[#0B1628] mt-1">Direct Mentorship</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Interacting with seasoned software engineers, product architects, and startup mentors offering actionable career and technical guidance.
            </p>
          </div>
        </div>

        {/* Factual Integrity Banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#EDEAE0] border border-[#DDD8CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                Venue & Schedule Notice
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Exact campus hall allocations, workshop rooms, and daily commencement hours will be communicated to registered attendees through the official channels prior to kickoff.
              </p>
            </div>
          </div>
          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-md bg-[#0B1628] hover:bg-[#10233E] text-white text-xs font-semibold tracking-wide transition-colors"
          >
            Register on Official Form
          </a>
        </div>
      </div>
    </section>
  );
}
