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

function PinLabel({
  name,
  side,
  color,
}: {
  name: string;
  side: "left" | "right";
  color: "red" | "orange";
}) {
  return (
    <div
      className={`flex items-center gap-1.5 ${
        side === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <svg
        viewBox="0 0 24 32"
        className={`w-5 h-7 shrink-0 drop-shadow-md ${
          color === "red" ? "text-red-600" : "text-brand-orange"
        }`}
        fill="currentColor"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" />
        <circle cx="12" cy="12" r="5" fill="white" />
      </svg>
      <span className="whitespace-nowrap bg-white border border-zinc-200 text-zinc-700 text-[11px] sm:text-xs font-medium px-2 py-1 rounded-md shadow-sm">
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
        {/* church pin, distinct color */}
        <div
          className="absolute -translate-x-1/2 -translate-y-full z-10"
          style={{ top: church.top, left: church.left }}
        >
          <PinLabel name={church.name} side="right" color="orange" />
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
            <PinLabel name={c.name} side={c.side} color="red" />
          </div>
        ))}
      </div>
    </div>
  );
}
