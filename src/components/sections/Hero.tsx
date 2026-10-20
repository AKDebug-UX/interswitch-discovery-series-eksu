"use client";

import React, { useState, useEffect } from "react";
import { EVENT_CONFIG } from "@/config/event";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";
import {
  ExternalLink,
  ArrowDown,
  Calendar,
  MapPin,
  ShieldCheck,
  Download,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [calMenuOpen, setCalMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-10-28T09:00:00+01:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B1628] text-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-hairline opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Primary Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10233E] border border-blue-500/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span>
              <span className="font-mono text-blue-300 font-medium tracking-wide">
                INTERSWITCH DISCOVERY SERIES · EKSU 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-2xl">
              Your next big idea deserves to be{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                discovered.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Three days of technology, creativity, and entrepreneurship at Ekiti State University.
              Bring your prototypes, sharpen your engineering craft, and connect with mentors who can help turn student ambition into real-world impact.
            </p>

            {/* Event Key Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10233E]/70 border border-slate-700/60">
                <Calendar className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Dates Confirmed</div>
                  <div className="text-sm font-semibold text-white">{EVENT_CONFIG.dates.display}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10233E]/70 border border-slate-700/60">
                <MapPin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Institution & Campus</div>
                  <div className="text-sm font-semibold text-white">
                    {EVENT_CONFIG.institution.name}, Ado-Ekiti
                  </div>
                </div>
              </div>
            </div>

            {/* Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={EVENT_CONFIG.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-lg shadow-orange-950/50 hover:shadow-orange-900/80 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <span>Register on Official Portal</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#10233E] hover:bg-[#162F52] text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>3-Day Programme</span>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                </a>

                {/* Calendar Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCalMenuOpen(!calMenuOpen)}
                    aria-label="Add event to calendar"
                    className="p-3.5 rounded-lg bg-[#10233E] hover:bg-[#162F52] text-slate-300 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>

                  {calMenuOpen && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-56 rounded-md bg-[#10233E] border border-slate-700 shadow-xl z-50 p-1.5 text-xs">
                      <a
                        href={getGoogleCalendarUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setCalMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded text-slate-200 hover:bg-slate-800 hover:text-white"
                      >
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>Google Calendar</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          downloadIcsFile();
                          setCalMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 rounded text-slate-200 hover:bg-slate-800 hover:text-white"
                      >
                        <Download className="w-3.5 h-3.5 text-orange-400" />
                        <span>Download iCal / Outlook (.ics)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Transparent Note */}
            <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                Free participation for verified students · Directs securely to the official Microsoft Forms portal.
              </span>
            </p>
          </div>

          {/* Right Column: Architectural Builder Flight Deck (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#10233E] to-[#0B1628] border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-7 space-y-6">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider uppercase">
                    Event Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-300 px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800">
                  NODE: EKSU-2026
                </span>
              </div>

              {/* Countdown Grid */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Event Countdown to Kickoff
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-[#0B1628] rounded-lg p-2.5 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.days}</div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Days</div>
                  </div>
                  <div className="bg-[#0B1628] rounded-lg p-2.5 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.hours}</div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Hours</div>
                  </div>
                  <div className="bg-[#0B1628] rounded-lg p-2.5 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.minutes}</div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Mins</div>
                  </div>
                  <div className="bg-[#0B1628] rounded-lg p-2.5 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.seconds}</div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Secs</div>
                  </div>
                </div>
              </div>

              {/* Verified Pillars */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Confirmed Series Activities
                </div>
                <div className="space-y-2">
                  {[
                    { title: "Hackathons & Innovation Challenges", tag: "Sprint" },
                    { title: "Hands-on Technical Workshops", tag: "Deep Dive" },
                    { title: "Mentorship & Ecosystem Networking", tag: "Career" },
                    { title: "Project & Talent Showcasing", tag: "Stage" },
                    { title: "Innovation & Entrepreneurship Support", tag: "Venture" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#0B1628]/80 border border-slate-800/80 hover:border-slate-700 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="text-slate-200 font-medium">{item.title}</span>
                      </div>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Coordinates footnote */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>COORD: 7.7126° N, 5.2536° E</span>
                <span className="text-amber-400 font-medium">ADMISSION: FREE FOR STUDENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
