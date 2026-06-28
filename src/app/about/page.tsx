import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">ABOUT US</p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            We are Bethesda Hope Church.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            A Christ-centered community raising up disciples among the nations
            in Tbilisi, Georgia.
          </p>
        </div>
      </section>

      {/* Photo placeholder */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto -mt-4">
          <div className="aspect-video bg-zinc-200 rounded-2xl flex items-center justify-center">
            <p className="text-sm text-zinc-400">Church family photo</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">OUR STORY</p>
          <div className="space-y-6 text-base text-zinc-600 leading-relaxed">
            <p>
              Bethesda Hope Church was born in the heart of Tbilisi, Georgia — a
              city where young people from across the globe come to study
              medicine, pursue their dreams, and search for meaning.
            </p>
            <p>
              Most of our members are medical students from India, along with
              young people from Pakistan, Africa, and other nations. We come from
              different cultures, speak different languages, and carry different
              stories — but we are united in one thing: the love of Jesus
              Christ.
            </p>
            <p>
              Our church is not just a place to attend on Sundays. It is a
              community where people encounter Jesus, discover their identity as
              children of God, grow together through the messy and beautiful
              process of community life, and are sent out as witnesses wherever
              they go.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-white/30 mb-6">
            2025 VISION
          </p>
          <p className="text-2xl sm:text-3xl font-medium text-white leading-snug font-serif italic">
            &ldquo;Bethesda Hope and I are the glory and joy of Jesus&rdquo;
          </p>
          <p className="text-sm text-white/40 mt-4">
            1 Thessalonians 2:19-20
          </p>
        </div>
      </section>

      {/* Mission flow */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
            OUR JOURNEY
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Identity",
                desc: "Discover who you are in Christ — not by people's words, but by His.",
              },
              {
                step: "02",
                title: "Renewal",
                desc: "Let the gospel renew your mind, emotions, and self-image.",
              },
              {
                step: "03",
                title: "Community",
                desc: "Grow together as family — broken people becoming whole in Jesus.",
              },
              {
                step: "04",
                title: "Mission",
                desc: "Be sent as a witness to your dorm, hospital, and nation.",
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <span className="text-4xl font-medium text-zinc-100 group-hover:text-brand-orange/20 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-lg font-medium text-zinc-900 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-2xl bg-zinc-200 flex-shrink-0 flex items-center justify-center">
            <p className="text-sm text-zinc-400">Pastor photo</p>
          </div>
          <div>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-3">
              OUR PASTOR
            </p>
            <h3 className="text-2xl font-medium text-zinc-900">
              Pastor John
            </h3>
            <p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-lg">
              Pastor John and his family serve in Tbilisi, Georgia, living among
              and walking alongside the young people God has brought to this
              city. His heart is to see every student discover who they are in
              Christ and be sent out as a missionary in their own life.
            </p>
            <a
              href="https://www.instagram.com/makewayjohn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange mt-4 hover:underline"
            >
              @makewayjohn
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-medium text-zinc-900 tracking-tight">
          Come as you are.
        </h2>
        <p className="text-zinc-500 mt-3">
          We&apos;d love to meet you this Sunday at 3 PM.
        </p>
        <Link
          href="/new-here"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium mt-8 hover:bg-orange-600 transition-colors"
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
      </section>
    </>
  );
}
