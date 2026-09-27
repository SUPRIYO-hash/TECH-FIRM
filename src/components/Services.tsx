import { ArrowRight, Check } from "lucide-react";
import { SERVICES_DATA } from "../data/services";

interface ServicesProps {
  onRequestService: (serviceTitle: string) => void;
}

export function Services({ onRequestService }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Capabilities & Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
            Everything your business needs to establish authority online.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            From initial strategy and bespoke design to fast, standards-compliant coding and launch configuration.
          </p>
        </div>

        {/* Editorial Services List */}
        <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="py-10 group hover:bg-neutral-900/20 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number & Title */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="text-sm font-mono text-neutral-500 font-medium">
                    {service.number}.
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs text-sky-400 font-medium mt-1">
                      {service.outcome}
                    </div>
                  </div>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="text-xs text-neutral-400">
                    <span className="text-neutral-300 font-medium">Ideal for: </span>
                    {service.idealFor}
                  </div>
                </div>

                {/* Deliverables Checklist & CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onRequestService(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
