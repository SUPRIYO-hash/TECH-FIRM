import { useState } from "react";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectItem } from "../data/projects";

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenLiveWebsite: (project: ProjectItem) => void;
}

export function Portfolio({ onSelectProject, onOpenLiveWebsite }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight">
              Real websites created for real businesses.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Explore live and delivered digital environments crafted by NEXORA  Studios. Each solution is built custom to its industry requirements.
          </p>
        </div>

        {/* Filter Tabs - Interactive segmented control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-white text-slate-900 shadow-sm font-semibold"
                  : "bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/40"
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
                  <div className="text-[10px] font-mono text-neutral-500 truncate max-w-[170px]">
                    {project.liveUrl.replace("https://", "")}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.themeColor }}
                  />
                </div>

                {/* Mockup Canvas Preview */}
                <div className="py-4 space-y-3">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-sky-400">
                    {project.industry}
                  </div>
                  <h3 className="text-base font-bold text-white font-['Syne'] tracking-tight group-hover:text-sky-300 transition-colors line-clamp-1">
                    {project.heroMockup.tagline}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-medium text-neutral-300">
                      {project.metricsOrHighlight || "Custom Architecture"}
                    </span>
                    <span className="text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Inspect Demo <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900/90 border border-neutral-700 rounded-lg shadow-lg">
                    Click to Open Preview
                  </span>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separators (anti-pill) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-neutral-300 font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Responsive Web</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Interactive CTAs */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white hover:text-sky-300 hover:bg-neutral-800/80 rounded-md transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Preview</span>
                  </button>

                  <button
                    onClick={() => onOpenLiveWebsite(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400 group-hover/link:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
