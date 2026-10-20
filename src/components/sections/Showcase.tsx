import React from "react";
import { EVENT_CONFIG } from "@/config/event";
import { ArrowUpRight, Info } from "lucide-react";

export function Showcase() {
  const illustrativeExamples = [
    {
      category: "AgriTech & Rural Commerce",
      title: "AgriTrack: Distributed Farm-to-Market Inventory",
      conceptType: "Illustrative Concept Example",
      description:
        "An offline-first mobile sync tool enabling smallholder farming collectives across Ekiti state to aggregate crop yields and eliminate middleman price exploitation.",
      techStack: ["Next.js", "SQLite/IndexedDB", "USSD Fallback"],
      stage: "Prototype Concept",
    },
    {
      category: "Campus Micro-Fintech",
      title: "CampusPay: Frictionless Micro-Settlement for Students",
      conceptType: "Illustrative Concept Example",
      description:
        "A lightweight payment gateway simulation demonstrating low-bandwidth QR codes and virtual debit cards tailored for student vendors and campus services.",
      techStack: ["API Gateway", "Interswitch API Sandbox", "React Native"],
      stage: "Hackathon Sprint Model",
    },
    {
      category: "Health Logistics & Public Good",
      title: "ColdTrace: Solar Cold-Chain Temperature Sensor",
      conceptType: "Illustrative Concept Example",
      description:
        "An embedded IoT sensor connected to a web telemetry dashboard monitoring critical vaccine temperatures across community health outposts in rural councils.",
      techStack: ["ESP32 Hardware", "MQTT", "Tailwind Dashboard"],
      stage: "Hardware Capstone Idea",
    },
  ];

  return (
    <section id="showcase" className="bg-[#002D5B] text-white py-16 md:py-24 border-b border-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-semibold bg-[#001E3D] text-cyan-300 border border-cyan-500/30 uppercase tracking-wider mb-3">
            Project & Talent Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From classroom capstones to market-ready prototypes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sky-100 leading-relaxed">
            Every year, Nigerian universities generate thousands of brilliant final-year projects that sit on library shelves.
            The Discovery Series provides the stage to bring those ideas into the open, test them with mentors, and explore sustainable venture pathways.
          </p>
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#001E3D]/80 border border-amber-500/40 flex items-start gap-3 text-xs text-amber-200/90">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-300 uppercase tracking-wider font-mono mr-1">
              Illustrative Demonstrations Notice:
            </span>
            The project cards below are illustrative problem archetypes representing the types of campus solutions participants can bring to the showcase.
            Actual showcase entries will be submitted and presented live by participating student teams during the event.
          </div>
        </div>

        {/* Illustrative Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {illustrativeExamples.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#001E3D]/90 border border-sky-700/60 p-6 flex flex-col justify-between hover:border-cyan-400 transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.conceptType}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-sky-100/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-800/80 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00142A] text-sky-300 border border-sky-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-sky-300 flex items-center justify-between">
                  <span>Scope:</span>
                  <span className="text-white font-medium">{item.stage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Enhancement Vision: Student Innovation Repository */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#10233E] via-[#0E1E36] to-[#122744] border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="font-mono text-xs uppercase tracking-wider text-blue-300 font-semibold">
                Future Ecosystem Vision (Concept Enhancement)
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              An Open Digital Showcase for EKSU Alumni Builders
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We envision a persistent digital archive where every prototype built during the Discovery Series can be indexed, allowing regional investors, alumni networks, and technology recruiters to discover student talent year-round.
            </p>
          </div>

          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold tracking-wide transition-colors"
          >
            <span>Register Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
