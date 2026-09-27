import { useState, useEffect } from "react";
import { Cookie, Settings, Check, X } from "lucide-react";

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export function CookieBanner({ onOpenCookiePolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nexora_cookie_consent");
    if (!saved) {
      // Small natural delay so banner doesn't flicker on immediate render
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "nexora_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      "nexora_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "nexora_cookie_consent",
      JSON.stringify({ necessary: true, analytics: analyticsConsent, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-7 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-9 sm:max-w-md z-50 p-5 rounded-2xl bg-[#0B0F19] border border-neutral-800 shadow-2xl text-neutral-300 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sky-400 shrink-0">
          <Cookie className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white tracking-tight">
            Privacy & Cookie Preferences
          </h3>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            We use strictly necessary storage to remember preferences. We do not use intrusive cross-site tracking or advertising cookies. Review our{" "}
            <button
              onClick={onOpenCookiePolicy}
              className="text-sky-400 underline hover:text-sky-300 cursor-pointer"
            >
              Cookie Policy
            </button>{" "}
            for full transparency.
          </p>
        </div>
      </div>

      {showPreferences ? (
        <div className="my-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <div className="font-semibold text-white">Strictly Necessary</div>
              <div className="text-[11px] text-neutral-400">Essential for security & session settings</div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">Always Active</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800">
            <div>
              <div className="font-semibold text-white">Performance / Analytics</div>
              <div className="text-[11px] text-neutral-400">Helps us evaluate device responsiveness</div>
            </div>
            <input
              type="checkbox"
              checked={analyticsConsent}
              onChange={(e) => setAnalyticsConsent(e.target.checked)}
              className="rounded border-neutral-700 bg-neutral-950 text-sky-500 focus:ring-sky-400 w-4 h-4 cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSavePreferences}
              className="w-full py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors cursor-pointer"
            >
              Save Custom Choices
            </button>
          </div>
        </div>
      ) : null}

      {/* Balanced, Non-manipulative buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-800/80">
        <button
          onClick={handleRejectNonEssential}
          className="flex-1 px-3 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
        >
          Reject Non-Essential
        </button>

        <button
          onClick={handleAcceptAll}
          className="flex-1 px-3 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
        >
          Accept All
        </button>

        <button
          onClick={() => setShowPreferences(!showPreferences)}
          aria-label="Manage cookie preferences"
          className="p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
          title="Preferences"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
