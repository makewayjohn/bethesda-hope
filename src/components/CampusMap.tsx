type Campus = {
  name: string;
  top: string;
  left: string;
  side: "left" | "right";
};

const campuses: Campus[] = [
  { name: "Tbilisi State Medical University", top: "30%", left: "48%", side: "right" },
  { name: "Tbilisi State University (TSU)", top: "40%", left: "30%", side: "left" },
  { name: "Petre Shotadze Tbilisi Medical Academy", top: "58%", left: "44%", side: "left" },
  { name: "David Tvildiani Medical University", top: "47%", left: "64%", side: "right" },
  { name: "New Vision University", top: "60%", left: "60%", side: "right" },
  { name: "Caucasus International University", top: "70%", left: "34%", side: "left" },
  { name: "University of Georgia", top: "36%", left: "62%", side: "right" },
  { name: "European University", top: "20%", left: "38%", side: "left" },
  { name: "Teaching University Geomedi", top: "65%", left: "20%", side: "left" },
];

const church = { name: "Bethesda Hope Church", top: "50%", left: "48%" };

function CampusPin({ name, side }: { name: string; side: "left" | "right" }) {
  return (
    <div
      className={`flex items-center gap-1.5 ${
        side === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <svg
        viewBox="0 0 24 32"
        className="w-5 h-7 shrink-0 drop-shadow-md text-red-600"
        fill="currentColor"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" />
        <circle cx="12" cy="12" r="5" fill="white" />
      </svg>
      <span className="whitespace-nowrap bg-zinc-950 text-white text-xs sm:text-sm font-medium px-2.5 py-1.5 rounded-md shadow-md">
        {name}
      </span>
    </div>
  );
}

function ChurchPin({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-2xl sm:text-3xl drop-shadow-md leading-none"
        role="img"
        aria-label="Church"
      >
        ⛪
      </span>
      <span className="whitespace-nowrap bg-white border-2 border-zinc-900 text-zinc-900 text-sm sm:text-base font-bold px-3 py-1.5 rounded-md shadow-md">
        {name}
      </span>
    </div>
  );
}

export default function CampusMap() {
  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-100">
      <iframe
        title="Map of Tbilisi, Georgia"
        src="https://maps.google.com/maps?q=Tbilisi,Georgia&z=12&output=embed"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* pin overlay */}
      <div className="absolute inset-0">
        {/* church pin, distinct */}
        <div
          className="absolute -translate-x-1/2 -translate-y-full z-10"
          style={{ top: church.top, left: church.left }}
        >
          <ChurchPin name={church.name} />
        </div>

        {campuses.map((c) => (
          <div
            key={c.name}
            className="absolute -translate-y-full"
            style={{
              top: c.top,
              left: c.left,
              transform:
                c.side === "right"
                  ? "translate(0, -100%)"
                  : "translate(-100%, -100%)",
            }}
          >
            <CampusPin name={c.name} side={c.side} />
          </div>
        ))}
      </div>
    </div>
  );
}
