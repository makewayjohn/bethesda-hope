type Pillar = {
  title: string;
  desc: string;
  accent: "orange" | "teal";
  icon: "identity" | "community" | "leadership" | "mission";
};

const pillars: Pillar[] = [
  {
    title: "Identity",
    desc: "You are not defined by people's words, but by Christ's.",
    accent: "orange",
    icon: "identity",
  },
  {
    title: "Community",
    desc: "Not consuming church, but becoming family in Jesus.",
    accent: "teal",
    icon: "community",
  },
  {
    title: "Leadership",
    desc: "Knowing God, knowing yourself, knowing your neighbor.",
    accent: "teal",
    icon: "leadership",
  },
  {
    title: "Mission",
    desc: "Your dorm, hospital, and nation — your entire life is mission.",
    accent: "orange",
    icon: "mission",
  },
];

// Positions on a 400x400 viewBox: top, right, bottom, left
const positions = [
  { x: 200, y: 70 },
  { x: 330, y: 200 },
  { x: 200, y: 330 },
  { x: 70, y: 200 },
];

function PillarIcon({ icon }: { icon: Pillar["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "identity":
      return (
        <svg viewBox="0 0 24 24" {...common} className="w-6 h-6 sm:w-7 sm:h-7">
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 20c.8-3.5 3.6-5.5 6.5-5.5s5.7 2 6.5 5.5" />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 24 24" {...common} className="w-6 h-6 sm:w-7 sm:h-7">
          <circle cx="8.5" cy="8.5" r="2.5" />
          <circle cx="16" cy="9.5" r="2" />
          <path d="M3.5 19c.6-2.8 2.6-4.5 5-4.5s4.4 1.7 5 4.5" />
          <path d="M14.5 14.8c1.9.2 3.5 1.7 4 4.2" />
        </svg>
      );
    case "leadership":
      return (
        <svg viewBox="0 0 24 24" {...common} className="w-6 h-6 sm:w-7 sm:h-7">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8.5l1.5 3 3 .3-2.3 2 .7 3-2.9-1.7-2.9 1.7.7-3-2.3-2 3-.3z" />
        </svg>
      );
    case "mission":
      return (
        <svg viewBox="0 0 24 24" {...common} className="w-6 h-6 sm:w-7 sm:h-7">
          <path d="M4.5 19.5l6-1.5 9-9a2.1 2.1 0 00-3-3l-9 9-1.5 6z" />
          <path d="M14 6l4 4" />
        </svg>
      );
  }
}

export default function PillarsDiagram() {
  return (
    <div>
      {/* Radial diagram */}
      <div className="max-w-md mx-auto">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          {/* connecting lines */}
          {positions.map((pos, i) => (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={pos.x}
              y2={pos.y}
              stroke="white"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
          ))}

          {/* center hub */}
          <circle cx="200" cy="200" r="48" fill="white" fillOpacity="0.06" />
          <circle
            cx="200"
            cy="200"
            r="48"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
          />
          <text
            x="200"
            y="196"
            textAnchor="middle"
            className="fill-white font-display italic"
            fontSize="17"
          >
            Jesus
          </text>
          <text
            x="200"
            y="214"
            textAnchor="middle"
            className="fill-white/40"
            fontSize="9"
            letterSpacing="2"
          >
            AT THE CENTER
          </text>

          {/* pillar nodes */}
          {pillars.map((p, i) => {
            const pos = positions[i];
            const color = p.accent === "orange" ? "#FF9F43" : "#0EA5A4";
            return (
              <g key={p.title}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="42"
                  fill={color}
                  fillOpacity="0.12"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="42"
                  fill="none"
                  stroke={color}
                  strokeOpacity="0.5"
                />
                <foreignObject
                  x={pos.x - 14}
                  y={pos.y - 30}
                  width="28"
                  height="28"
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ color }}
                  >
                    <PillarIcon icon={p.icon} />
                  </div>
                </foreignObject>
                <text
                  x={pos.x}
                  y={pos.y + 14}
                  textAnchor="middle"
                  className="fill-white font-medium"
                  fontSize="13"
                >
                  {p.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Descriptions below, color-matched */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-14 max-w-3xl mx-auto">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
          >
            <span
              className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                p.accent === "orange" ? "bg-brand-orange" : "bg-brand-teal"
              }`}
            />
            <div>
              <p
                className={`text-xs font-medium mb-1 ${
                  p.accent === "orange" ? "text-brand-orange" : "text-brand-teal"
                }`}
              >
                {p.title}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
