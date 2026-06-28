import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-zinc-900 to-black" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white/10 text-sm tracking-widest">
          WORSHIP PHOTO HERE
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pb-16 sm:pb-20 w-full">
        <p className="text-brand-orange text-xs font-medium tracking-[4px] mb-4 sm:mb-5">
          TBILISI, GEORGIA
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.08]">
          Bringing hope
          <br />
          to the nations.
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Link
            href="/new-here"
            className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
          >
            Plan your visit
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/sermons"
            className="border border-white/30 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors text-center"
          >
            Watch online
          </Link>
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-20 sm:py-32 px-6">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">WELCOME</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-zinc-900">
            You belong here
            <br className="hidden sm:block" />
            <span className="font-display italic"> before</span> you believe
            here.
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            We are medical students, young dreamers, and seekers from India,
            Pakistan, Africa, and beyond — becoming family in Jesus in the heart
            of Tbilisi.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange mt-8 hover:underline"
          >
            Learn more about us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ServiceTimesSection() {
  return (
    <section className="bg-zinc-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
            JOIN US THIS WEEK
          </p>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="animate-on-scroll bg-white rounded-2xl p-8 sm:p-10 border border-zinc-100 group hover:border-brand-orange/20 transition-colors">
              <p className="text-xs tracking-[3px] text-zinc-400 mb-4">
                SUNDAY WORSHIP
              </p>
              <p className="font-display text-5xl sm:text-6xl font-medium text-zinc-900 tracking-tight">
                3 <span className="text-2xl text-zinc-300">PM</span>
              </p>
              <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
                Main service with worship, Word, and prayer.
                <br />
                Everyone is welcome.
              </p>
              <Link
                href="/worship"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange mt-6 hover:underline"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="animate-on-scroll bg-white rounded-2xl p-8 sm:p-10 border border-zinc-100 group hover:border-brand-teal/20 transition-colors">
              <p className="text-xs tracking-[3px] text-zinc-400 mb-4">
                FRIDAY SERVICE
              </p>
              <p className="font-display text-5xl sm:text-6xl font-medium text-zinc-900 tracking-tight">
                7 <span className="text-2xl text-zinc-300">PM</span>
              </p>
              <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
                Bible study, fellowship, and deeper connection.
                <br />
                Come grow with us.
              </p>
              <Link
                href="/worship"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal mt-6 hover:underline"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PhotoGridSection() {
  const photos = [
    { label: "Sunday worship", span: "col-span-2 row-span-2 aspect-auto min-h-[280px] sm:min-h-[360px]" },
    { label: "Fellowship", span: "aspect-square" },
    { label: "Bible study", span: "aspect-square" },
    { label: "Summer camp", span: "aspect-square" },
    { label: "Outreach", span: "aspect-square" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xs tracking-[4px] text-zinc-400">
              LIFE AT BETHESDA HOPE
            </p>
            <Link
              href="/about"
              className="text-sm font-medium text-brand-orange hover:underline inline-flex items-center gap-1"
            >
              See all
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {photos.map((p) => (
              <div
                key={p.label}
                className={`${p.span} bg-zinc-100 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center hover:bg-zinc-200/80 transition-colors cursor-pointer`}
              >
                <svg
                  className="w-8 h-8 text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="text-xs text-zinc-400 mt-2">{p.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PillarsSection() {
  const pillars = [
    {
      num: "01",
      title: "Identity",
      desc: "You are not defined by people's words, but by Christ's.",
      accent: "orange" as const,
    },
    {
      num: "02",
      title: "Community",
      desc: "Not consuming church, but becoming family in Jesus.",
      accent: "teal" as const,
    },
    {
      num: "03",
      title: "Leadership",
      desc: "Knowing God, knowing yourself, knowing your neighbor.",
      accent: "teal" as const,
    },
    {
      num: "04",
      title: "Mission",
      desc: "Your dorm, hospital, and nation — your entire life is mission.",
      accent: "orange" as const,
    },
  ];

  return (
    <section className="bg-brand-dark py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[4px] text-white/30 mb-10">
            WHAT DRIVES US
          </p>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="animate-on-scroll bg-white/5 rounded-2xl p-7 sm:p-8 relative overflow-hidden group hover:bg-white/[0.08] transition-colors"
              >
                <span className="absolute top-5 right-6 font-display text-5xl font-medium text-white/[0.04] italic">
                  {p.num}
                </span>
                <span
                  className={`inline-block px-3.5 py-1 rounded-full text-xs font-medium mb-3 ${
                    p.accent === "orange"
                      ? "bg-brand-orange/20 text-brand-orange"
                      : "bg-brand-teal/20 text-brand-teal"
                  }`}
                >
                  {p.title}
                </span>
                <p className="text-[15px] text-white/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-24 sm:py-36 px-6">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-900 leading-snug tracking-tight">
            &ldquo;Bethesda Hope and I are
            <br className="hidden sm:block" /> the glory and joy of Jesus&rdquo;
          </p>
          <span className="inline-block mt-8 bg-brand-orange/8 text-brand-orange px-5 py-1.5 rounded-full text-xs font-medium tracking-wide">
            1 Thessalonians 2:19–20
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-20 px-6">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white tracking-tight">
              Ready to come home?
            </h2>
            <p className="text-sm text-white/40 mt-2">
              22 Norios Aghmarti, Tbilisi, Georgia
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/new-here"
              className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
            >
              Join us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border border-white/15 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/5 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServiceTimesSection />
      <PhotoGridSection />
      <PillarsSection />
      <VisionSection />
      <CTASection />
    </>
  );
}
