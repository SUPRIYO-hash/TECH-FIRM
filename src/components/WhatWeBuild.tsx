import { ArrowRight, Check } from "lucide-react";
import { WHAT_WE_BUILD_CATEGORIES, CategoryItem } from "../data/categories";

interface WhatWeBuildProps {
  onSelectCategory: (categoryTitle: string) => void;
}

export function WhatWeBuild({ onSelectCategory }: WhatWeBuildProps) {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/[0.05] bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
            Websites purpose-built for your specific business model.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            We don't believe in one-size-fits-all templates. A salon requires instant mobile booking; a restaurant needs dynamic visual menus; an advisory firm requires high-trust practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_BUILD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-200 group"
            >
              <div>
                <div className="text-[11px] font-mono text-sky-400 mb-2">
                  {cat.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {cat.description}
                </p>

                <div className="space-y-1.5 mb-5 pt-3 border-t border-neutral-800">
                  {cat.commonFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <Check className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/60">
                <button
                  onClick={() => onSelectCategory(cat.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>Explore {cat.title}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
