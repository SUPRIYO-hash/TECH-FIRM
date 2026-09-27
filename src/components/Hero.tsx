import { useState } from "react";
import { ArrowRight, Laptop, Tablet, Smartphone, CheckCircle2, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export function Hero({ onExploreWork, onStartProject }: HeroProps) {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activePreviewTab, setActivePreviewTab] = useState<number>(0);

  const previewSites = [
    {
      name: "Aura Wellness",
      category: "Salons & Beauty",
      themeColor: "#0EA5E9",
      headline: "Holistic Aesthetics & Skin Therapy",
      subline: "Bespoke clinical treatments curated for cellular radiance.",
      badge: "Open for Bookings",
      navItems: ["Treatments", "Pricing", "Book Online"],
      cta: "Schedule Consultation",
      tagline: "4.9 Client Rating · Instant Confirmation"
    },
    {
      name: "Kaviar Bistro",
      category: "Restaurants & Cafés",
      themeColor: "#F59E0B",
      headline: "Artisan Slow Food & Micro-Roastery",
      subline: "Seasonal plates and single-origin coffee served all day.",
      badge: "Tonight's Tasting Available",
      navItems: ["Menu", "Wine List", "Reserve"],
      cta: "Reserve a Table",
      tagline: "Fresh Farm-to-Table · Downtown Hub"
    },
    {
      name: "Solstice Expeditions",
      category: "Travel & Tourism",
      themeColor: "#10B981",
      headline: "Curated Expeditions to Untamed Horizons",
      subline: "Small-group high-altitude treks and coastal retreats.",
      badge: "Upcoming Treks 2026",
      navItems: ["Destinations", "Itineraries", "Gear"],
      cta: "View Itineraries",
      tagline: "Certified Naturalists · Eco Standard"
    }
  ];

  const currentPreview = previewSites[activePreviewTab];

  return (
    <section id="home" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background subtle atmospheric radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/[0.04] blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/[0.03] blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtle text label without pill enclosure */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-neutral-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Web Design & Development Studio</span>
            <span aria-hidden="true">·</span>
            <span>Available for New Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Syne'] leading-[1.1] text-balance mb-6">
            Websites that make your business look ready for what's next.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            {SITE_CONFIG.brandName} creates fast, responsive, and thoughtfully designed websites for salons, restaurants, travel agencies, local businesses, and modern service practices.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white rounded-lg hover:bg-neutral-100 active:scale-[0.98] transition-all cursor-pointer shadow-md group"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900/90 border border-neutral-700/80 rounded-lg hover:bg-neutral-800 hover:text-white active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start a Project</span>
            </button>
          </div>

          {/* Quality trust signals - unboxed inline list */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              100% Mobile Responsive
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              Fast Page Speed
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              Search-Ready Foundations
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              Tailored Architecture
            </span>
          </div>
        </div>

        {/* Interactive Studio Preview Window */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Preview Controller Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-2">
            {/* Site switcher tabs */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg">
              {previewSites.map((site, index) => (
                <button
                  key={site.name}
                  onClick={() => setActivePreviewTab(index)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activePreviewTab === index
                      ? "bg-neutral-800 text-white shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {site.name}
                </button>
              ))}
            </div>

            {/* Device Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg">
              <button
                onClick={() => setDeviceMode("desktop")}
                aria-label="Desktop preview mode"
                className={`p-1.5 text-xs rounded-md transition-colors cursor-pointer ${
                  deviceMode === "desktop" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
                }`}
                title="Desktop View"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode("tablet")}
                aria-label="Tablet preview mode"
                className={`p-1.5 text-xs rounded-md transition-colors cursor-pointer ${
                  deviceMode === "tablet" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode("mobile")}
                aria-label="Mobile preview mode"
                className={`p-1.5 text-xs rounded-md transition-colors cursor-pointer ${
                  deviceMode === "mobile" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Browser Frame */}
          <div
            className={`mx-auto transition-all duration-300 rounded-xl border border-neutral-800 bg-[#0C1019] shadow-2xl shadow-black/60 overflow-hidden ${
              deviceMode === "desktop"
                ? "w-full max-w-5xl"
                : deviceMode === "tablet"
                ? "w-full max-w-[720px]"
                : "w-full max-w-[360px]"
            }`}
          >
            {/* Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800/80">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
              </div>

              {/* URL Address Pill */}
              <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-neutral-800 rounded text-[11px] text-neutral-400 font-mono max-w-[280px] sm:max-w-[380px] truncate">
                <span className="text-emerald-400 text-[9px]">https://</span>
                <span className="text-neutral-300 truncate">
                  demo.nexorastudios.com/{currentPreview.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-neutral-500 font-mono hidden sm:inline">
                  {deviceMode.toUpperCase()} VIEW
                </span>
              </div>
            </div>

            {/* Simulated Live Website Viewport */}
            <div className="p-5 sm:p-8 bg-gradient-to-b from-[#0e1320] to-[#0A0D15] min-h-[340px] sm:min-h-[400px] flex flex-col justify-between">
              {/* Simulated Sub-Site Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: currentPreview.themeColor }}
                  />
                  <span className="text-sm font-bold text-white tracking-tight">
                    {currentPreview.name}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-xs text-neutral-400">
                  {currentPreview.navItems.map((item) => (
                    <span key={item} className="hover:text-neutral-200 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-semibold px-2.5 py-1 rounded bg-white/[0.08] text-white">
                  {currentPreview.cta}
                </div>
              </div>

              {/* Simulated Hero Body */}
              <div className="py-8 sm:py-12 max-w-xl">
                <div className="text-[11px] font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                  {currentPreview.category}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 font-['Syne']">
                  {currentPreview.headline}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {currentPreview.subline}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onExploreWork}
                    className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white rounded hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    Explore Case Study
                  </button>
                  <span className="text-xs text-neutral-400">
                    {currentPreview.tagline}
                  </span>
                </div>
              </div>

              {/* Simulated Feature Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
                <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-[10px] text-neutral-400 mb-0.5">Interaction</div>
                  <div className="text-xs font-medium text-neutral-200">Fluid Transitions</div>
                </div>
                <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-[10px] text-neutral-400 mb-0.5">Load Performance</div>
                  <div className="text-xs font-medium text-emerald-400">Under 0.9s on 4G</div>
                </div>
                <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-[10px] text-neutral-400 mb-0.5">Responsiveness</div>
                  <div className="text-xs font-medium text-neutral-200">Zero Overflow Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
