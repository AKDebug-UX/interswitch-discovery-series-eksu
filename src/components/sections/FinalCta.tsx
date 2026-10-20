"use client";

import React, { useState } from "react";
import { EVENT_CONFIG } from "@/config/event";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Download,
  Copy,
  Check,
} from "lucide-react";

export function FinalCta() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(EVENT_CONFIG.registration.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#070E1B] text-white py-20 md:py-28 border-b border-slate-800">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-hairline opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-[#10233E] border border-blue-500/30 text-xs text-blue-300 font-mono">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
            {EVENT_CONFIG.dates.display}
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
            {EVENT_CONFIG.institution.name}, Ado-Ekiti
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Claim your seat at the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-sky-300">
              EKSU Discovery Series
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Take part in 3 days of collaborative building, technical masterclasses, and project showcasing. Open to all students passionate about technology and African innovation.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-base font-bold tracking-wide transition-all duration-200 shadow-xl shadow-orange-950/60 hover:shadow-orange-900 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <span>Proceed to Official Registration Form</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#10233E] hover:bg-[#162F52] text-slate-200 border border-slate-700 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Registration Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Form Link</span>
              </>
            )}
          </button>
        </div>

        {/* Calendar save quick options */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="font-mono text-slate-500 uppercase tracking-wider">Save Event Dates:</span>
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 underline underline-offset-4 flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            Add to Google Calendar
          </a>
          <span className="text-slate-700">·</span>
          <button
            type="button"
            onClick={downloadIcsFile}
            className="hover:text-orange-300 underline underline-offset-4 flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5 text-orange-400" />
            Download iCal / Outlook (.ics)
          </button>
        </div>

        {/* Registration Disclaimer */}
        <p className="text-xs text-slate-400 max-w-xl mx-auto pt-4 border-t border-slate-800/80">
          Registration is hosted securely on the official Microsoft Forms platform managed by event organizers. No sensitive information or passwords are asked on this conceptual website.
        </p>
      </div>
    </section>
  );
}
