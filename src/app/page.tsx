import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Activities } from "@/components/sections/Activities";
import { Audience } from "@/components/sections/Audience";
import { Showcase } from "@/components/sections/Showcase";
import { Schedule } from "@/components/sections/Schedule";
import { Opportunities } from "@/components/sections/Opportunities";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#002D5B] text-white">
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <Overview />
        <Activities />
        <Audience />
        <Showcase />
        <Schedule />
        <Opportunities />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
