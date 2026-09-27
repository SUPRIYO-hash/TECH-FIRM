import { ArrowLeft, Compass } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface NotFoundPageProps {
  onBackToHome: () => void;
}

export function NotFoundPage({ onBackToHome }: NotFoundPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400 mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-white font-['Syne'] tracking-tight">
            Looks like this page took a wrong turn.
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            The page or project preview you are looking for does not exist or has been relocated within our studio directory.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-slate-900 bg-white hover:bg-neutral-100 transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-slate-900" />
            <span>Back to {SITE_CONFIG.brandName}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
