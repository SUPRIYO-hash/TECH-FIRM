import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQS_DATA } from "../data/faqs";

interface FaqSectionProps {
  onContactClick: () => void;
}

export function FaqSection({ onContactClick }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-types");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative border-t border-white/[0.05] bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Header & Quick Action */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne'] tracking-tight mb-4">
                Straightforward answers to common questions.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Everything you need to know about our design standards, timelines, pricing rationale, and collaboration workflow.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Have a unique question?</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                If your specific requirement isn't addressed here, reach out to our studio directly for clarification.
              </p>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
              >
                <span>Ask Us Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS_DATA.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-neutral-900/60 border-neutral-700/80 shadow-md"
                      : "bg-neutral-900/20 border-neutral-800/60 hover:border-neutral-700/60"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/[0.04]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
