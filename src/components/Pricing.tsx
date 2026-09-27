import { ArrowRight, Check, HelpCircle } from "lucide-react";
import { SITE_CONFIG, isPromotionalOfferActive } from "../config/siteConfig";

interface PricingProps {
  onRequestQuote: (tierName?: string) => void;
}

export function Pricing({ onRequestQuote }: PricingProps) {
  const isPromoActive = isPromotionalOfferActive();

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter Business Site",
      priceLabel: `Starting from ₹${SITE_CONFIG.standardStartingPrice.toLocaleString()}`,
      promoNote: isPromoActive
        ? `Festive promotional offer: from ₹${SITE_CONFIG.promotionalOffer.discountedPrice.toLocaleString()} with qualifying domain`
        : null,
      description: "Ideal for local shops, salons, cafés, and professionals needing a clean, authoritative single-page digital home.",
      deliverables: [
        "Single-page responsive layout",
        "Mobile-first responsive architecture",
        "Business hours, address, and Google Maps",
        "Click-to-call & WhatsApp integration",
        "Contact & lead inquiry form",
        "Basic SEO setup & meta tags",
        "Domain & hosting configuration guidance"
      ],
      idealFor: "Salons, neighbourhood restaurants, local trades, personal brands"
    },
    {
      id: "commercial",
      name: "Commercial Growth Platform",
      priceLabel: "Custom Quote Based on Scope",
      subPriceHint: "Typically tailored around page volume and custom workflows",
      description: "Designed for established service businesses, clinics, and hospitality brands requiring multi-page depth and booking flows.",
      deliverables: [
        "Multi-page architecture (Up to 5–8 pages)",
        "Service catalog or dynamic food menu",
        "Interactive appointment / reservation intake",
        "Fast image galleries & case studies",
        "Advanced schema markup & OpenGraph cards",
        "Custom branded visual system",
        "Post-launch verification & support"
      ],
      featured: true,
      idealFor: "Boutique hotels, travel agencies, aesthetic clinics, consulting firms"
    },
    {
      id: "bespoke",
      name: "Bespoke Web Platform",
      priceLabel: "Tailored to Specifications",
      subPriceHint: "Engineered around custom interactive logic & integrations",
      description: "For startups, enterprise practices, and unique digital platforms needing specialized interfaces, calculators, or custom logic.",
      deliverables: [
        "Tailored web application interface",
        "Custom quote calculators / multi-step forms",
        "API & third-party service connections",
        "Performance optimization (< 0.8s LCP)",
        "Comprehensive accessibility audit (WCAG AA)",
        "Priority development turnaround",
        "Dedicated onboarding & handover"
      ],
      idealFor: "Logistics networks, corporate practices, tech startups, high-volume portals"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Transparent Pricing Structure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
            Clear, honest pricing with zero hidden surprises.
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Every project is tailored to its requirements. Contact us for the current offer and final quote.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between p-7 rounded-2xl transition-all duration-300 ${
                tier.featured
                  ? "bg-neutral-900/80 border-2 border-sky-500/40 shadow-xl shadow-sky-950/20 relative"
                  : "bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500 text-slate-950">
                  Most Requested
                </div>
              )}

              <div>
                <div className="text-xs font-medium text-neutral-400 mb-1">
                  {tier.name}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-['Syne'] tracking-tight mb-2">
                  {tier.priceLabel}
                </div>

                {tier.promoNote && (
                  <div className="text-xs font-medium text-amber-300 mb-3 p-2 rounded bg-amber-500/10 border border-amber-500/20">
                    {tier.promoNote}
                  </div>
                )}

                {tier.subPriceHint && (
                  <div className="text-xs text-neutral-400 mb-3">
                    {tier.subPriceHint}
                  </div>
                )}

                <p className="text-xs text-neutral-300 leading-relaxed mb-6 pt-2 border-t border-neutral-800">
                  {tier.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Included Scope
                  </div>
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-200">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onRequestQuote(tier.name)}
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    tier.featured
                      ? "bg-white text-slate-950 hover:bg-neutral-100 shadow-md"
                      : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                  }`}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center text-[11px] text-neutral-400 mt-2.5">
                  Best for: {tier.idealFor}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Factors Explanatory Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-neutral-900/30 border border-neutral-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            <span>How Final Project Quotes Are Calculated</span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
            We don't use arbitrary pricing. Because every business has unique scale and goals, your final proposal is estimated based on explicit technical factors:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-neutral-300">
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 1</div>
              <div className="font-semibold text-white mt-0.5">Page Volume</div>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 2</div>
              <div className="font-semibold text-white mt-0.5">Custom Features</div>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 3</div>
              <div className="font-semibold text-white mt-0.5">Content & Copy</div>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 4</div>
              <div className="font-semibold text-white mt-0.5">3P Integrations</div>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 5</div>
              <div className="font-semibold text-white mt-0.5">Domain Setup</div>
            </div>
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[10px] text-neutral-400">Factor 6</div>
              <div className="font-semibold text-white mt-0.5">Hosting Plan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
