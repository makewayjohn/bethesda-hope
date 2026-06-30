import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    num: "01",
    title: "A family, not a crowd",
    desc: "We are not just a gathering. We are a spiritual family — people from different nations, cultures, and backgrounds worshiping Jesus together.",
    accent: "orange" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8.5" cy="8.5" r="2.5" />
        <circle cx="16" cy="9.5" r="2" />
        <path d="M3.5 19c.6-2.8 2.6-4.5 5-4.5s4.4 1.7 5 4.5" />
        <path d="M14.5 14.8c1.9.2 3.5 1.7 4 4.2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Jesus-centered worship",
    desc: "Our worship is focused on encountering Jesus, hearing His Word, and experiencing the presence and love of God — not performance.",
    accent: "teal" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V6l11-2v12" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Discipleship that grows you",
    desc: "We help students, young people, and families grow in faith, identity, leadership, and purpose through the Word of God.",
    accent: "teal" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5l1.8 3.7 4 .6-3 2.9.7 4-3.5-1.9-3.5 1.9.7-4-3-2.9 4-.6z" />
        <path d="M5 20c1.5-2 4-3 7-3s5.5 1 7 3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Mission beyond borders",
    desc: "We believe God is raising a people in Georgia to bless India, Korea, and the nations. We live for mission, not just survival.",
    accent: "orange" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.2 3.3 5 3.3 8s-1.1 5.8-3.3 8c-2.2-2.2-3.3-5-3.3-8S9.8 6.2 12 4z" />
      </svg>
    ),
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[4px] text-zinc-400 mb-3 text-center">
            WHY JOIN US
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-zinc-900 tracking-tight text-center mb-12 sm:mb-16">
            Why join Bethesda Hope Church?
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="animate-on-scroll bg-zinc-50 rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:bg-zinc-100/70 transition-colors"
              >
                <span className="absolute top-4 right-5 font-display text-4xl sm:text-5xl font-medium text-zinc-900/[0.04] italic">
                  {r.num}
                </span>
                <span
                  className={`inline-flex w-10 h-10 rounded-full mb-4 items-center justify-center ${
                    r.accent === "orange"
                      ? "bg-brand-orange/15 text-brand-orange"
                      : "bg-brand-teal/15 text-brand-teal"
                  }`}
                >
                  <span className="w-5 h-5">{r.icon}</span>
                </span>
                <h3 className="text-base sm:text-lg font-medium text-zinc-900">
                  {r.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-2">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
