import { useEffect } from "react";
import { X, ShieldAlert } from "lucide-react";
import { LEGAL_DOCUMENTS, LegalDocument } from "../data/legalDocs";
import { SITE_CONFIG } from "../config/siteConfig";

interface LegalModalProps {
  documentId: string | null;
  onClose: () => void;
}

export function LegalModal({ documentId, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (documentId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [documentId, onClose]);

  if (!documentId) return null;

  const doc: LegalDocument | undefined = LEGAL_DOCUMENTS[documentId];
  if (!doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[88vh] bg-[#0A0D15] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60">
          <div>
            <h2 id="legal-modal-title" className="text-lg font-bold text-white tracking-tight">
              {doc.title}
            </h2>
            <div className="text-xs text-neutral-400">
              {SITE_CONFIG.brandName} · Last Updated: {doc.lastUpdated}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close legal document"
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Disclaimer Notice */}
        <div className="px-6 py-3 bg-neutral-900/40 border-b border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-400">
          <ShieldAlert className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            This document outlines operational principles and does not constitute formal legal advice.
          </span>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {doc.sections.map((section, idx) => (
            <section key={idx} className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                {section.heading}
              </h3>
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-neutral-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-800 bg-neutral-900/60 flex items-center justify-between text-xs text-neutral-400">
          <span>Inquiries: {SITE_CONFIG.contactEmail}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
