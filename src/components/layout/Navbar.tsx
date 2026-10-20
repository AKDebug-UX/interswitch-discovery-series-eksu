"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EVENT_CONFIG } from "@/config/event";
import { Menu, X, ExternalLink, Calendar, MapPin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Activities", href: "#activities" },
    { label: "Who Should Attend", href: "#audience" },
    { label: "Showcase", href: "#showcase" },
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#opportunities" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top concept disclosure strip */}
      <div className="bg-[#070E1B] text-slate-300 border-b border-slate-800/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
              {EVENT_CONFIG.disclaimer.badge}
            </span>
            <span className="hidden sm:inline text-slate-400">
              Community web presentation for {EVENT_CONFIG.dates.display} at {EVENT_CONFIG.institution.name}
            </span>
            <span className="sm:hidden text-slate-400">
              {EVENT_CONFIG.dates.display} · {EVENT_CONFIG.institution.shortName}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#60A5FA]" />
              {EVENT_CONFIG.institution.city}, Nigeria
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#F97316]" />
              {EVENT_CONFIG.dates.daysCount} Days of Innovation
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1628]/95 backdrop-blur-md shadow-xl border-b border-slate-800"
            : "bg-[#0B1628] border-b border-slate-800/60"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Project identity */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse"></span>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#60A5FA] transition-colors">
                  DISCOVERY SERIES
                </span>
                <span className="px-1.5 py-0.5 rounded text-[11px] font-bold bg-[#10233E] text-[#60A5FA] border border-blue-500/30 uppercase tracking-wide">
                  {EVENT_CONFIG.edition}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider pl-4">
                {EVENT_CONFIG.institution.shortName} · ADO-EKITI
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={EVENT_CONFIG.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-md shadow-orange-950/40 hover:shadow-orange-900/60 hover:-translate-y-0.5"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" aria-hidden="true" />
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0B1628] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <a
                href={EVENT_CONFIG.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#F97316] text-white text-sm font-semibold tracking-wide shadow-md"
              >
                <span>Complete Official Registration</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-slate-400 px-2 pt-1">
                Directs to the official Microsoft Forms application for EKSU participants.
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
