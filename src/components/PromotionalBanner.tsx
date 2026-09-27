import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG, isPromotionalOfferActive } from "../config/siteConfig";

interface PromotionalBannerProps {
  onClaimOffer?: () => void;
}

export function PromotionalBanner({ onClaimOffer }: PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if offer is active and unexpired
    const active = isPromotionalOfferActive();
    if (!active) {
      setIsVisible(false);
      return;
    }

    // Check if dismissed in this browser session
    const dismissed = sessionStorage.getItem("nexora_promo_dismissed");
    if (dismissed !== "true") {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("nexora_promo_dismissed", "true");
  };

  const handleAction = () => {
    if (onClaimOffer) {
      onClaimOffer();
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Promotional Announcement"
      className="relative z-40 bg-gradient-to-r from-amber-950/40 via-neutral-900 to-indigo-950/30 border-b border-amber-500/20 px-8 sm:px-12 py-2.5 text-xs text-neutral-300 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center text-center gap-x-3 gap-y-1.5">
        <div className="inline-flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" aria-hidden="true" />
            {SITE_CONFIG.promotionalOffer.title}
          </span>
          <span className="text-neutral-200 font-medium">
            Basic website from ₹{SITE_CONFIG.promotionalOffer.discountedPrice.toLocaleString()} with a free domain
          </span>
          <span className="text-neutral-400 hidden sm:inline">
            · Valid until Dashami ({new Date(SITE_CONFIG.promotionalOffer.endDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })})
          </span>
          <span className="text-[11px] text-neutral-400 hidden lg:inline">
            · {SITE_CONFIG.promotionalOffer.termsNotice}
          </span>
        </div>

        <button
          onClick={handleAction}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group"
        >
          <span>Inquire About Offer</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </button>
      </div>

      <button
        onClick={handleDismiss}
        aria-label="Dismiss festive offer banner"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
