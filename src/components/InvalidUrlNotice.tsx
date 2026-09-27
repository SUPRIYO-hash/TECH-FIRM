import { AlertTriangle, Globe, ArrowRight, X } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

interface InvalidUrlNoticeProps {
  attemptedUrl: string;
  projectName: string;
  onLaunchStagingDemo: () => void;
  onClose: () => void;
}

export function InvalidUrlNotice({
  attemptedUrl,
  projectName,
  onLaunchStagingDemo,
  onClose,
}: InvalidUrlNoticeProps) {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="invalid-url-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-[#0D111A] border border-neutral-800 rounded-2xl p-6 text-xs text-neutral-300 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span id="invalid-url-title">Domain DNS Resolution Status</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-neutral-300 leading-relaxed">
            The external production domain for <span className="font-semibold text-white">{projectName}</span> (<code className="text-amber-300 bg-neutral-900 px-1.5 py-0.5 rounded font-mono text-[11px]">{attemptedUrl}</code>) is currently undergoing DNS delegation or is hosted in our internal client staging cluster.
          </p>

          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Direct Staging Access Available</span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              You can explore the complete, live, interactive responsive client website directly in the {SITE_CONFIG.brandName} staging viewer with active forms and booking flows.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2.5 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Dismiss
          </button>

          <button
            onClick={() => {
              onClose();
              onLaunchStagingDemo();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
          >
            <span>Open Staging Preview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
