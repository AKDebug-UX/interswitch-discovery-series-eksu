import Link from "next/link";
import { EVENT_CONFIG } from "@/config/event";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1628] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#10233E] border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
            404 · Page Not Found
          </div>
          <h1 className="text-3xl font-extrabold text-white">
            Lost in the Discovery Grid?
          </h1>
          <p className="text-sm text-slate-300">
            The page or route you are looking for does not exist on this event presentation. Return to the main EKSU Discovery Series overview.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold tracking-wide transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={EVENT_CONFIG.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10233E] hover:bg-[#162F52] text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
          >
            <span>Official Registration</span>
          </a>
        </div>
      </div>
    </div>
  );
}
