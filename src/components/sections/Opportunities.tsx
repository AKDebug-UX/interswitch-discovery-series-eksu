import React from "react";
import { EVENT_CONFIG } from "@/config/event";
import { Gift, Award, Compass, Users2, ShieldAlert, ExternalLink } from "lucide-react";

export function Opportunities() {
  const opportunityPillars = [
    {
      icon: <Gift className="w-6 h-6 text-[#F97316]" />,
      title: "Prizes & Recognition Gifts",
      tag: "As Announced by Organizers",
      description:
        "The official event announcement confirms prizes and gifts for standout student teams and active participants. Specific award categories and criteria will be announced during the event sessions.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#60A5FA]" />,
      title: "Project & Talent Visibility",
      tag: "Ecosystem Exposure",
      description:
        "Present your technical prototypes and creative solutions directly before visiting technology practitioners, alumni founders, and community judges looking for top engineering potential.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-emerald-400" />,
      title: "Industry Mentorship Access",
      tag: "Direct Guidance",
      description:
        "Connect with engineering leaders and product experts who can provide candid critique on your code architecture, product usability, and pathways toward professional careers.",
    },
    {
      icon: <Compass className="w-6 h-6 text-purple-400" />,
      title: "Entrepreneurship Pathways",
      tag: "Venture Exploration",
      description:
        "Discover frameworks for turning campus research and capstone experiments into viable startup concepts, with exposure to foundational startup incubation methods.",
    },
  ];

  return (
    <section id="opportunities" className="bg-[#0B1628] text-white py-16 md:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#10233E] text-orange-400 border border-orange-500/30 uppercase tracking-wider mb-3">
            Incentives & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Prizes, recognition, and pathways for student innovators.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            While building and learning are at the center of the series, participants also have the opportunity
            to earn prizes, gain public recognition for their work, and establish valuable ecosystem relationships.
          </p>
        </div>

        {/* Responsible disclosure banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#10233E]/70 border border-slate-700 flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Official Announcement Note:</strong> While prizes and gifts are confirmed by the official announcement, specific cash amounts, award tiers, and individual placement offers are determined solely by event organizers and will be revealed during the event. We deliberately present only verified facts.
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunityPillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#10233E]/60 border border-slate-800 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#0B1628] border border-slate-700">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#10233E] to-[#142A4E] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">Ready to compete and showcase your abilities?</div>
            <div className="text-xs text-slate-300">Registration is open to all university students via Microsoft Forms.</div>
          </div>
          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-md"
          >
            <span>Register for the Event</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
