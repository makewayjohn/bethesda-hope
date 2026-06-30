import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end bg-zinc-900">
      <Image
        src="/images/vision2026.jpeg"
        alt="2026 Vision: Walking as God's Beloved"
        fill
        priority
        className="object-contain"
      />
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
            JOIN US
          </p>
        </ScrollReveal>
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="animate-on-scroll bg-white rounded-2xl p-6 border border-zinc-100 group hover:border-brand-orange/20 transition-colors">
              <span className="text-xs tracking-[2px] text-brand-orange font-medium">WORD</span>
              <h3 className="text-base font-medium text-zinc-900 mt-2">Morning devotion</h3>
              <p className="font-display text-3xl font-medium text-zinc-900 tracking-tight mt-2">
                10 <span className="text-lg text-zinc-300">AM</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">Daily</p>
            </div>
            <div className="animate-on-scroll bg-white rounded-2xl p-6 border border-zinc-100 group hover:border-brand-orange/20 transition-colors">
              <span className="text-xs tracking-[2px] text-brand-orange font-medium">WORD</span>
              <h3 className="text-base font-medium text-zinc-900 mt-2">Sunday worship</h3>
              <p className="font-display text-3xl font-medium text-zinc-900 tracking-tight mt-2">
                3 <span className="text-lg text-zinc-300">PM</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">Every Sunday</p>
            </div>
            <div className="animate-on-scroll bg-white rounded-2xl p-6 border border-zinc-100 group hover:border-brand-teal/20 transition-colors">
              <span className="text-xs tracking-[2px] text-brand-teal font-medium">SPIRIT</span>
              <h3 className="text-base font-medium text-zinc-900 mt-2">Evening prayer</h3>
              <p className="font-display text-3xl font-medium text-zinc-900 tracking-tight mt-2">
                8 <span className="text-lg text-zinc-300">PM</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">Daily</p>
            </div>
            <div className="animate-on-scroll bg-white rounded-2xl p-6 border border-zinc-100 group hover:border-brand-teal/20 transition-colors">
              <span className="text-xs tracking-[2px] text-brand-teal font-medium">SPIRIT</span>
              <h3 className="text-base font-medium text-zinc-900 mt-2">Friday service</h3>
              <p className="font-display text-3xl font-medium text-zinc-900 tracking-tight mt-2">
                7 <span className="text-lg text-zinc-300">PM</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">Every Friday</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-center mt-8">
            <Link
              href="/worship"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:underline"
            >
              See all gatherings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">
            2026 VISION
          </p>
          <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-900 leading-snug tracking-tight">
            &ldquo;Walking as God&apos;s Beloved
            <br className="hidden sm:block" /> — I am a Beloved Child of God&rdquo;
          </p>
          <span className="inline-block mt-8 bg-brand-orange/8 text-brand-orange px-5 py-1.5 rounded-full text-xs font-medium tracking-wide">
            Zephaniah 3:17
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

function VisionTimelineSection() {
  const years = [
    {
      year: "2024",
      verse: "The disciples were filled with joy and the Holy Spirit.",
      ref: "Acts 13:52",
      theme: "Joy & the Holy Spirit",
      highlights: [
        "Bethesda Hope Winter Camp launched — students leading prayer, worship, and outreach together.",
        "Bethesda Hope Cricket Tournament began, bringing Indian students together across teams to build friendship and share the gospel.",
        "Weekly worship, discipleship, and community life grew steadily among medical students from India and beyond.",
      ],
    },
    {
      year: "2025",
      verse: "Bethesda Hope and I are the glory and joy of Jesus.",
      ref: "1 Thessalonians 2:19–20",
      theme: "Glory & Joy",
      highlights: [
        "Korea Vision Trip — 8 Indian students served alongside a Korean church for 8 days, leading VBS for kids and youth.",
        "2nd Bethesda Hope Winter Camp — about 80 students gathered to seek God's glory and joy together.",
        "Two students, Sweetlin and Nithin, were baptized — stepping into new life in Christ.",
        "Mother-tongue prayer meetings began — Telugu, Tamil, Hindi, and Malayalam worship led by the students themselves.",
        "Cricket Tournament 2.0 — 18 teams and 162 young men competed, connected, and heard the gospel, with proceeds funding student scholarships.",
        "Many new freshmen arrived already believers, and former new believers grew into leaders who now disciple others.",
      ],
    },
    {
      year: "2026",
      verse: "Walking as God's Beloved — I am a Beloved Child of God.",
      ref: "Zephaniah 3:17",
      theme: "Beloved Identity",
      highlights: [],
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[4px] text-zinc-400 mb-3 text-center">
            OUR JOURNEY WITH GOD
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-zinc-900 tracking-tight text-center mb-16">
            How God has led us, year by year.
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {years.map((item, i) => (
              <ScrollReveal key={item.year}>
                <div
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 top-1 w-14 h-14 -translate-x-0 sm:-translate-x-1/2 rounded-full bg-brand-orange flex items-center justify-center z-10 shadow-lg shadow-brand-orange/20">
                    <span className="text-white text-xs font-medium">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex-1 sm:hidden" />

                  <div
                    className={`ml-20 sm:ml-0 flex-1 ${
                      i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-zinc-100 inline-block w-full sm:w-auto sm:max-w-sm">
                      <p className="text-xs font-medium text-brand-orange tracking-wide mb-2">
                        {item.theme}
                      </p>
                      <p className="font-display italic text-lg text-zinc-900 leading-snug">
                        &ldquo;{item.verse}&rdquo;
                      </p>
                      <p className="text-xs text-zinc-400 mt-3">{item.ref}</p>

                      {item.highlights.length > 0 && (
                        <ul
                          className={`mt-5 space-y-2.5 text-left ${
                            i % 2 === 0 ? "sm:text-left" : ""
                          }`}
                        >
                          {item.highlights.map((h, idx) => (
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
                      )}
                    </div>
                  </div>

                  <div className="hidden sm:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
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
      <VisionTimelineSection />
      <CTASection />
    </>
  );
}
