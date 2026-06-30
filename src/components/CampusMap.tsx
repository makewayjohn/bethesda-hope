"use client";

import { useState } from "react";

type Campus = {
  name: string;
  top: string;
  left: string;
};

const campuses: Campus[] = [
  { name: "Tbilisi State Medical University", top: "38%", left: "46%" },
  { name: "New Vision University", top: "55%", left: "58%" },
  { name: "David Tvildiani Medical University", top: "47%", left: "62%" },
  { name: "Geomedi University", top: "62%", left: "40%" },
  { name: "University of Georgia", top: "44%", left: "34%" },
];

export default function CampusMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-100">
      <iframe
        title="Map of Tbilisi, Georgia"
        src="https://maps.google.com/maps?q=Tbilisi,Georgia&z=12&output=embed"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* pin overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {campuses.map((c) => (
          <div
            key={c.name}
            className="absolute pointer-events-auto -translate-x-1/2 -translate-y-full"
            style={{ top: c.top, left: c.left }}
          >
            <button
              type="button"
              onClick={() => setActive(active === c.name ? null : c.name)}
              aria-label={c.name}
              className="group relative flex flex-col items-center"
            >
              <svg
                viewBox="0 0 24 32"
                className="w-7 h-9 drop-shadow-md text-brand-orange"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" />
                <circle cx="12" cy="12" r="5" fill="white" />
              </svg>
              {active === c.name && (
                <span className="absolute bottom-full mb-1 whitespace-nowrap bg-zinc-950 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
                  {c.name}
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
