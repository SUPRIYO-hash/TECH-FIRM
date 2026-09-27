import { useState, useEffect } from "react";
import { X, ExternalLink, Laptop, Tablet, Smartphone, Check, Sparkles } from "lucide-react";
import { ProjectItem } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilarProject: (projectName: string) => void;
  onOpenLiveWebsite: (project: ProjectItem) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilarProject, onOpenLiveWebsite }: ProjectModalProps) {
  const [deviceViewport, setDeviceViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0A0E17] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-neutral-800/80 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: project.themeColor }}
            />
            <div>
              <h2 id="modal-project-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.name}
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.industry}</span>
              </div>
            </div>
          </div>

          {/* Device Preview Controller */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-neutral-950 border border-neutral-800 rounded-lg">
            <button
              onClick={() => setDeviceViewport("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                deviceViewport === "desktop" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceViewport("tablet")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                deviceViewport === "tablet" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceViewport("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                deviceViewport === "mobile" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenLiveWebsite(project);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors cursor-pointer"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              aria-label="Close project preview"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-7 space-y-8">
          {/* Simulated Responsive Viewport Canvas */}
          <div className="flex justify-center bg-black/50 p-4 sm:p-8 rounded-xl border border-neutral-800/80">
            <div
              className={`transition-all duration-300 rounded-xl border border-neutral-700/80 bg-[#0B0F1A] shadow-xl overflow-hidden ${
                deviceViewport === "desktop"
                  ? "w-full max-w-4xl"
                  : deviceViewport === "tablet"
                  ? "w-full max-w-[640px]"
                  : "w-full max-w-[340px]"
              }`}
            >
              {/* Browser Window Chrome */}
              <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="px-3 py-0.5 bg-black/60 rounded text-[11px] font-mono text-neutral-400 truncate max-w-[260px]">
                  {project.liveUrl}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono uppercase">
                  {deviceViewport}
                </div>
              </div>

              {/* Mockup Canvas Screen Content */}
              <div className="p-6 sm:p-10 space-y-6">
                {/* Brand Navigation in Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: project.heroMockup.accentColor }}
                    />
                    <span className="text-sm font-bold text-white tracking-tight">
                      {project.name}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-xs text-neutral-400">
                    {project.heroMockup.navItems.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-white">
                    {project.heroMockup.ctaLabel}
                  </span>
                </div>

                {/* Hero Showcase Block */}
                <div className="py-6 max-w-lg">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
                    {project.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 mb-2 font-['Syne']">
                    {project.heroMockup.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {project.heroMockup.subtext}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold text-slate-900 bg-white shadow-sm">
                    {project.heroMockup.ctaLabel}
                  </div>
                </div>

                {/* Highlights / Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
                  {project.heroMockup.bannerHighlights.map((hl) => (
                    <div
                      key={hl.label}
                      className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800"
                    >
                      <div className="text-[11px] text-neutral-400">{hl.label}</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{hl.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {/* Left 2 Cols: Description and Key Features */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  Project Overview
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Key Technical & UX Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800/80 text-xs text-neutral-300"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Scope Deliverables & Inquiry CTA */}
            <div className="space-y-6 bg-neutral-900/40 p-5 rounded-xl border border-neutral-800/80">
              <div>
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  Delivered Services
                </h3>
                <div className="space-y-1.5">
                  {project.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="text-xs font-medium text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-xs text-neutral-400 mb-1">Live Web Address</div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenLiveWebsite(project);
                  }}
                  className="text-xs font-mono text-sky-400 hover:underline break-all inline-flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>{project.liveUrl}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => {
                    onClose();
                    onRequestSimilarProject(project.name);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                  <span>Request Similar Website</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
