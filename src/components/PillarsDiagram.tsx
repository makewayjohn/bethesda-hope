import Image from "next/image";

type Pillar = {
  title: string;
  desc: string;
  accent: "orange" | "teal";
};

// Order matches the quadrants in /images/pillars_art.png: top-left, top-right, bottom-left, bottom-right
const pillars: Pillar[] = [
  {
    title: "Identity",
    desc: "You are not defined by people's words, but by Christ's.",
    accent: "orange",
  },
  {
    title: "Community",
    desc: "Not consuming church, but becoming family in Jesus.",
    accent: "teal",
  },
  {
    title: "Leadership",
    desc: "Knowing God, knowing yourself, knowing your neighbor.",
    accent: "orange",
  },
  {
    title: "Mission",
    desc: "Your dorm, hospital, and nation — your entire life is mission.",
    accent: "teal",
  },
];

export default function PillarsDiagram() {
  return (
    <div>
      {/* Illustration */}
      <div className="max-w-xs sm:max-w-sm mx-auto relative rounded-2xl overflow-hidden">
        <Image
          src="/images/pillars_art.png"
          alt="Jesus at the center, with Identity, Community, Leadership, and Mission radiating outward"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <p className="text-center text-xs text-white/30 tracking-[2px] mt-4">
        JESUS AT THE CENTER
      </p>

      {/* Labels, matched to the illustration's quadrants */}
      <div className="grid grid-cols-2 gap-4 mt-10 sm:mt-14 max-w-md mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="text-center sm:text-left">
            <p
              className={`text-xs font-medium tracking-wide mb-1 ${
                p.accent === "orange" ? "text-brand-orange" : "text-brand-teal"
              }`}
            >
              {p.title}
            </p>
            <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
