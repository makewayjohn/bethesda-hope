import Link from "next/link";

export default function WorshipPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">WORSHIP</p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            Gather. Worship. Be renewed.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            Whether it&apos;s your first time or you&apos;ve been with us from the beginning, there is a place for you.
          </p>
        </div>
      </section>

      {/* Service times */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-10 border border-zinc-100">
            <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-zinc-900">Sunday worship</h2>
            <p className="text-5xl font-medium text-zinc-900 tracking-tight mt-4">
              3:00 <span className="text-2xl text-zinc-400">PM</span>
            </p>
            <p className="text-sm text-zinc-500 mt-6 leading-relaxed">
              Our main gathering. We worship together, hear from God&apos;s Word, and pray as a community. Whether you&apos;re a believer or just exploring, you are welcome.
            </p>
            <div className="mt-6 pt-6 border-t border-zinc-100">
              <p className="text-xs tracking-[2px] text-zinc-400 mb-2">WHAT TO EXPECT</p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-orange" />
                  Worship through music and prayer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-orange" />
                  Bible-centered teaching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-orange" />
                  Fellowship and connection
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 border border-zinc-100">
            <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-zinc-900">Friday service</h2>
            <p className="text-5xl font-medium text-zinc-900 tracking-tight mt-4">
              7:00 <span className="text-2xl text-zinc-400">PM</span>
            </p>
            <p className="text-sm text-zinc-500 mt-6 leading-relaxed">
              A more intimate gathering for deeper study of God&apos;s Word, prayer, and fellowship. This is where we grow closer to God and to each other.
            </p>
            <div className="mt-6 pt-6 border-t border-zinc-100">
              <p className="text-xs tracking-[2px] text-zinc-400 mb-2">WHAT TO EXPECT</p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-teal" />
                  In-depth Bible study
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-teal" />
                  Small group discussion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-teal" />
                  Prayer and encouragement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[4px] text-white/30 mb-4">LOCATION</p>
            <h3 className="text-2xl font-medium text-white">22 Norios Aghmarti</h3>
            <p className="text-sm text-white/40 mt-2">Tbilisi, Georgia</p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
          >
            Get directions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
