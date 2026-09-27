import { Check } from "lucide-react";
import { PROCESS_STEPS } from "../data/process";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 relative border-t border-white/[0.05] bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
            A disciplined six-phase process from first spark to live launch.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            We follow a structured, collaborative workflow designed to eliminate guesswork, respect your time, and deliver a reliable website on schedule.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-mono font-bold text-sky-400/90">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-neutral-300 mb-3">
                  {step.tagline}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  Key Milestones
                </div>
                {step.activities.map((act) => (
                  <div key={act} className="flex items-start gap-2 text-[11px] text-neutral-300">
                    <Check className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
