"use client";

import { useState } from "react";

type Props = {
  year: string;
  verse: string;
  verseRef: string;
  theme: string;
  highlights: string[];
  align: "left" | "right";
};

export default function YearCard({
  year,
  verse,
  verseRef,
  theme,
  highlights,
  align,
}: Props) {
  const [open, setOpen] = useState(false);
  const hasHighlights = highlights.length > 0;

  return (
    <button
      type="button"
      onClick={() => hasHighlights && setOpen((v) => !v)}
      className={`text-left bg-white rounded-2xl p-6 border border-zinc-100 inline-block w-full sm:w-auto sm:max-w-sm ${
        hasHighlights ? "cursor-pointer hover:border-zinc-200" : "cursor-default"
      } transition-colors`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium text-brand-orange tracking-wide mb-2">
          {theme}
        </p>
        {hasHighlights && (
          <svg
            className={`w-4 h-4 text-zinc-300 shrink-0 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      <p className="font-display italic text-lg text-zinc-900 leading-snug">
        &ldquo;{verse}&rdquo;
      </p>
      <p className="text-xs text-zinc-400 mt-3">{verseRef}</p>

      {hasHighlights && (
        <>
          {!open && (
            <p className="text-xs text-zinc-400 mt-4">
              Tap to see what God did in {year} &darr;
            </p>
          )}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2.5 text-left pt-4 border-t border-zinc-100">
                {highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-zinc-500 leading-relaxed flex gap-2"
                  >
                    <span className="text-brand-orange mt-1.5 shrink-0">
                      &bull;
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
