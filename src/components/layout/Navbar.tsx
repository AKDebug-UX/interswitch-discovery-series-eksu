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
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#opportunities" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#002D5B]/95 backdrop-blur-md shadow-xl border-b border-sky-800/60"
            : "bg-[#002D5B] border-b border-sky-900/40"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Project identity matching flyer */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] animate-pulse"></span>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#00A3E0] transition-colors">
                  DISCOVERY SERIES
                </span>
              </div>
              <span className="text-[11px] font-mono text-sky-300 tracking-wider pl-4">
                INTERSWITCH
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-sky-100 hover:text-white hover:bg-white/10 transition-colors"
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
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] hover:from-[#DC2626] hover:to-[#EA580C] text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-md shadow-orange-950/40 hover:-translate-y-0.5"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" aria-hidden="true" />
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-sky-200 hover:text-white hover:bg-sky-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
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
          <div className="lg:hidden border-t border-sky-800/80 bg-[#002D5B] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-sky-100 hover:bg-sky-800/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-sky-800/80 space-y-2">
              <a
                href={EVENT_CONFIG.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white text-sm font-bold tracking-wide shadow-md"
              >
                <span>Complete Official Registration</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-sky-300 px-2 pt-1">
                Directs to the official Microsoft Forms application for EKSU participants.
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
