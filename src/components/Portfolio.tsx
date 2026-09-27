import { useState } from "react";
import { ExternalLink, Eye, ArrowUpRight, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectItem } from "../data/projects";

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenLiveWebsite: (project: ProjectItem) => void;
  onRequestBuild?: (projectName: string) => void;
}

export function Portfolio({ onSelectProject, onOpenLiveWebsite, onRequestBuild }: PortfolioProps) {
  const [allocationFilter, setAllocationFilter] = useState<"all" | "completed" | "potential">("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const completedProjects = PROJECTS_DATA.filter((p) => p.projectStatus === "completed");
  const potentialProjects = PROJECTS_DATA.filter((p) => p.projectStatus === "on_demand_potential");

  // Filter based on allocation and category
  const filteredCompleted = completedProjects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const filteredPotential = potentialProjects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const handleRequest = (projectName: string) => {
    if (onRequestBuild) {
      onRequestBuild(`Custom Website like ${projectName}`);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="work" className="py-20 md:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Project Allocations & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              Delivered Work & Potential Projects
            </h2>
          </div>
          <p className="text-sm text-neutral-300 max-w-lg leading-relaxed">
            We maintain total transparency: see what has been <strong className="text-white">completed and delivered</strong> (this live portfolio platform & our salon booking dashboard) alongside <strong className="text-sky-300">potential project architectures</strong> that we can build and launch for you on request.
          </p>
        </div>

        {/* Primary Allocation Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2 mb-6">
          <button
            onClick={() => setAllocationFilter("all")}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
              allocationFilter === "all"
                ? "bg-white text-slate-900"
                : "bg-neutral-900/70 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700"
            }`}
          >
            <span>All Projects</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
              allocationFilter === "all" ? "bg-slate-200 text-slate-900" : "bg-neutral-800 text-neutral-400"
            }`}>
              {PROJECTS_DATA.length}
            </span>
          </button>

          <button
            onClick={() => setAllocationFilter("completed")}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
              allocationFilter === "completed"
                ? "bg-emerald-500 text-slate-950 font-bold"
                : "bg-neutral-900/70 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Completed Work</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
              allocationFilter === "completed" ? "bg-emerald-600 text-white" : "bg-neutral-800 text-neutral-400"
            }`}>
              {completedProjects.length} Real Builds
            </span>
          </button>

          <button
            onClick={() => setAllocationFilter("potential")}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
              allocationFilter === "potential"
                ? "bg-sky-500 text-slate-950 font-bold"
                : "bg-neutral-900/70 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Available on Demand (Potential)</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
              allocationFilter === "potential" ? "bg-sky-600 text-white" : "bg-neutral-800 text-neutral-400"
            }`}>
              {potentialProjects.length} Concepts
            </span>
          </button>
        </div>

        {/* Secondary Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold"
                  : "bg-neutral-900/40 text-neutral-400 border border-neutral-800/80 hover:text-white hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ALLOCATION 1: COMPLETED & DELIVERED PRODUCTION WORK */}
        {(allocationFilter === "all" || allocationFilter === "completed") && filteredCompleted.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Delivered Production Projects (Made by Us)</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                      Live References
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Real websites engineered and launched by us: including our agency portfolio platform (accessible directly at this address) and a dedicated salon appointment system.
                  </p>
                </div>
              </div>
              <span className="text-xs text-emerald-300 font-mono font-medium shrink-0">
                {filteredCompleted.length} Production {filteredCompleted.length === 1 ? "Project" : "Projects"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {filteredCompleted.map((project) => (
                <article
                  key={project.id}
                  className="group rounded-2xl bg-[#0E1422] border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden shadow-2xl shadow-emerald-950/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Visual Mockup Preview */}
                    <div
                      className="lg:col-span-7 bg-gradient-to-b from-[#121826] to-[#0A0D15] p-6 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        </div>
                        <div className="text-xs font-mono text-emerald-400 truncate font-semibold">
                          ★ Real Client Build
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {project.heroMockup.bannerHighlights[0].value}
                        </span>
                      </div>

                      <div className="py-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                            {project.industry}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                            Delivered Project
                          </span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white font-['Syne'] tracking-tight group-hover:text-sky-300 transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                          {project.fullDescription}
                        </p>

                        <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {project.keyFeatures.slice(0, 3).map((f) => (
                            <div key={f} className="text-xs text-neutral-300 flex items-center gap-1.5 bg-black/40 p-2 rounded-lg border border-neutral-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="truncate">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-white/[0.06]">
                        <span className="text-emerald-400 font-medium">● Complete Live Operational System</span>
                        <span className="text-sky-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                          Open Interactive Staging Demo <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900/60">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold">
                          Delivered Deliverables
                        </div>
                        <ul className="space-y-2 mb-6">
                          {project.deliverables.map((item) => (
                            <li key={item} className="text-xs text-neutral-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-3.5 rounded-xl bg-black/50 border border-neutral-800 space-y-1 mb-6">
                          <div className="text-[11px] text-neutral-400 font-mono">Live Web Address Reference</div>
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-sky-400 font-mono underline break-all flex items-center gap-1"
                            >
                              <span>{project.liveUrl}</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          ) : (
                            <div className="text-xs text-amber-300 font-mono italic">
                              [Address will be added here once provided by owner]
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="flex-1 py-2.5 px-4 bg-white text-slate-900 hover:bg-neutral-100 rounded-xl font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <Eye className="w-4 h-4 text-slate-900" />
                          <span>Inspect Live Demo</span>
                        </button>
                        <button
                          onClick={() => onOpenLiveWebsite(project)}
                          className="flex-1 py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <span>{project.liveUrl ? "Visit Live Site" : "Live Address Pending"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ALLOCATION 2: POTENTIAL PROJECTS (AVAILABLE ON DEMAND) */}
        {(allocationFilter === "all" || allocationFilter === "potential") && filteredPotential.length > 0 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30 mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Potential Projects (Available on Demand)</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">
                      If Clients Ask, We Build
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Functional prototypes and tailored industry architectures. If you need any of these website types, we can customize and build it for your business.
                  </p>
                </div>
              </div>
              <span className="text-xs text-sky-300 font-mono font-medium shrink-0">
                Starting ₹1,200 + ₹300/mo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPotential.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-sky-500/40 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/40"
                >
                  {/* Card Visual Header / Browser Mockup */}
                  <div
                    className="relative bg-gradient-to-b from-[#121826] to-[#0A0D15] p-5 border-b border-neutral-800/80 overflow-hidden cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    {/* Mockup Topbar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="w-2 h-2 rounded-full bg-neutral-700" />
                        <span className="w-2 h-2 rounded-full bg-neutral-700" />
                        <span className="w-2 h-2 rounded-full bg-neutral-700" />
                      </div>
                      <div className="text-[10px] font-mono text-sky-400 font-medium">
                        On-Demand Concept
                      </div>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: project.themeColor }}
                      />
                    </div>

                    {/* Mockup Canvas Preview */}
                    <div className="py-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400">
                          {project.industry}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300 font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30">
                          ⚡ Available on Demand
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white font-['Syne'] tracking-tight group-hover:text-sky-300 transition-colors line-clamp-1">
                        {project.heroMockup.tagline}
                      </h4>
                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                        <span className="font-medium text-neutral-300">
                          {project.metricsOrHighlight || "Ready to Build"}
                        </span>
                        <span className="text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Inspect Prototype <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900/90 border border-neutral-700 rounded-lg shadow-lg">
                        Click to Inspect Prototype
                      </span>
                    </div>
                  </div>

                  {/* Card Meta & Actions */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                        <span className="text-neutral-300 font-medium">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-sky-400">Potential Build</span>
                      </div>

                      <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                        {project.name}
                      </h4>

                      <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Interactive CTAs: Request This Build vs View Prototype */}
                    <div className="pt-4 border-t border-neutral-800/80 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white hover:text-sky-300 hover:bg-neutral-800/80 rounded-md transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-sky-400" />
                          <span>Inspect Prototype</span>
                        </button>

                        <button
                          onClick={() => onOpenLiveWebsite(project)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer group/link"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3 text-neutral-400 group-hover/link:text-white transition-colors" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRequest(project.name)}
                        className="w-full py-2 px-3 rounded-lg bg-sky-500/15 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/30 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>I Want a Website Like This ↗</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredCompleted.length === 0 && filteredPotential.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 text-neutral-400">
            <p className="text-sm">No projects match the selected category & allocation.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setAllocationFilter("all");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
