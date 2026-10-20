"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { EVENT_CONFIG } from "@/config/event";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";
import {
  ExternalLink,
  ArrowDown,
  Calendar,
  MapPin,
  ShieldCheck,
  Download,
  Sparkles,
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

  const flyerBadges = [
    { label: "Entrepreneurship Workshop", style: "badge-cyan" },
    { label: "Design Thinking Session", style: "badge-orange-gradient" },
    { label: "Hackathon", style: "badge-navy" },
    { label: "Product Integration Session", style: "badge-cyan" },
    { label: "Grand Pitch", style: "badge-orange-gradient" },
    { label: "Amazing Prizes to be won", style: "badge-navy" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0284C7] via-[#0369A1] to-[#002D5B] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b border-sky-800">
      {/* Radiating Concentric Discovery Ripple Rings from official poster */}
      <div className="absolute inset-0 bg-radar-rings pointer-events-none opacity-80" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Event Branding (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Headline with exact flyer identity */}
            <div className="space-y-3">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#F97316] to-[#EF4444] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md uppercase">
                With Ekiti State University
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Interswitch{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-200">
                  Discovery Series
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-xl">
              Three days of technology, creativity, and entrepreneurship at Ekiti State University.
              Bring your ideas, sharpen your skills, and connect with people who can help you take them further.
            </p>

            {/* Official Program Highlights Strip matching exact flyer badges */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono text-cyan-200 uppercase tracking-widest font-bold">
                Program Highlights:
              </div>
              <div className="flex flex-wrap gap-2">
                {flyerBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${badge.style} transition-transform hover:scale-105`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Event Key Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#002D5B]/80 backdrop-blur-sm border border-sky-600/40 shadow-sm">
                <Calendar className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-sky-300 uppercase tracking-wider">Event Dates</div>
                  <div className="text-sm font-bold text-white">Oct 28th – 30th, 2026</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#002D5B]/80 backdrop-blur-sm border border-sky-600/40 shadow-sm">
                <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-sky-300 uppercase tracking-wider">Host Campus</div>
                  <div className="text-sm font-bold text-white">
                    Ekiti State University, Ado-Ekiti
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#F97316] hover:from-[#DC2626] hover:to-[#EA580C] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-xl shadow-orange-950/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <span>Register on Official Portal</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#002D5B] hover:bg-[#003870] text-sky-100 hover:text-white border border-sky-600/50 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  <span>3-Day Programme</span>
                  <ArrowDown className="w-4 h-4 text-sky-300" />
                </a>

                {/* Calendar Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCalMenuOpen(!calMenuOpen)}
                    aria-label="Add event to calendar"
                    className="p-3.5 rounded-xl bg-[#002D5B] hover:bg-[#003870] text-sky-200 hover:text-white border border-sky-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>

                  {calMenuOpen && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-56 rounded-xl bg-[#002D5B] border border-sky-600/60 shadow-2xl z-50 p-2 text-xs">
                      <a
                        href={getGoogleCalendarUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setCalMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sky-100 hover:bg-sky-800 hover:text-white"
                      >
                        <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                        <span>Google Calendar</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          downloadIcsFile();
                          setCalMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sky-100 hover:bg-sky-800 hover:text-white"
                      >
                        <Download className="w-3.5 h-3.5 text-orange-400" />
                        <span>Download iCal / Outlook (.ics)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Official Link confirmation */}
            <p className="text-xs text-sky-200/90 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>
                Free participation for verified students · Directs securely to the official Microsoft Forms portal.
              </span>
            </p>
          </div>

          {/* Right Column: Visual Poster Card & Live Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Authentic Poster Showcase */}
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl overflow-hidden group">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-inner bg-[#002D5B]">
                <Image
                  src="/images/official-poster.jpg"
                  alt="Official Interswitch Discovery Series with Ekiti State University Poster"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>

              {/* Poster caption strip */}
              <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-xs font-mono text-sky-200">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Official Event Poster
                </span>
                <span className="text-white font-bold">EKSU · 2026</span>
              </div>
            </div>

            {/* Real-Time Countdown Card */}
            <div className="rounded-2xl bg-[#002D5B]/90 backdrop-blur-md border border-sky-600/40 p-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-sky-800/80 pb-3 mb-3">
                <span className="text-xs font-mono text-sky-300 uppercase tracking-wider font-semibold">
                  Countdown to Event Kickoff
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-900/80 text-cyan-300 border border-sky-700">
                  OCTOBER 28, 2026
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#001E3D] rounded-xl p-2.5 border border-sky-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.days}</div>
                  <div className="text-[10px] uppercase font-mono text-sky-300">Days</div>
                </div>
                <div className="bg-[#001E3D] rounded-xl p-2.5 border border-sky-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.hours}</div>
                  <div className="text-[10px] uppercase font-mono text-sky-300">Hours</div>
                </div>
                <div className="bg-[#001E3D] rounded-xl p-2.5 border border-sky-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.minutes}</div>
                  <div className="text-[10px] uppercase font-mono text-sky-300">Mins</div>
                </div>
                <div className="bg-[#001E3D] rounded-xl p-2.5 border border-sky-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{timeLeft.seconds}</div>
                  <div className="text-[10px] uppercase font-mono text-sky-300">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
