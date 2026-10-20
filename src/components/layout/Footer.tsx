import React from "react";
import { EVENT_CONFIG } from "@/config/event";
import { ExternalLink, Calendar, MapPin, ShieldAlert } from "lucide-react";

export function Footer() {
  const currentYear = EVENT_CONFIG.dates.year;

  const footerNav = [
    { label: "Event Overview", href: "#overview" },
    { label: "Activities & Tracks", href: "#activities" },
    { label: "Who Should Attend", href: "#audience" },
    { label: "Project Showcase", href: "#showcase" },
    { label: "3-Day Schedule", href: "#schedule" },
    { label: "Prizes & Opportunities", href: "#opportunities" },
    { label: "Frequently Asked Questions", href: "#faq" },
  ];

  return (
    <footer className="bg-[#050B15] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Identity & Scope (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span>
              <span className="font-extrabold text-base tracking-tight text-white">
                DISCOVERY SERIES
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#10233E] text-[#60A5FA] border border-blue-500/30">
                {EVENT_CONFIG.edition}
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              An independent community and digital product concept for the announced {EVENT_CONFIG.name} at {EVENT_CONFIG.institution.name}.
            </p>

            <div className="space-y-1.5 pt-1 text-slate-400 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{EVENT_CONFIG.dates.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>{EVENT_CONFIG.institution.name}, Ado-Ekiti, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Page Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration & Official Portal (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Participation
            </div>
            <p className="text-xs text-slate-300">
              Registration is open to university students across Nigeria.
            </p>
            <a
              href={EVENT_CONFIG.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              <span>Official Microsoft Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Detailed Concept Status & Intellectual Property Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <div className="p-4 rounded-xl bg-[#0B1628] border border-slate-800 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-300 leading-relaxed">
              <span className="font-semibold text-amber-300 uppercase font-mono mr-1">
                Concept & Trademark Notice:
              </span>
              {EVENT_CONFIG.disclaimer.fullDisclosure}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <div>
              © {currentYear} Discovery Series EKSU Community Concept. Built with pride for African technology innovators.
            </div>
            <div className="flex items-center gap-1">
              <span>Crafted for EKSU builders & innovators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
