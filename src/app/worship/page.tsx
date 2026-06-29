import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function WorshipPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">WORSHIP</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            Worship is a celebration.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            A celebration of the salvation Jesus gave us. A conversation with
            God. A place to be recharged, renewed, and filled with joy.
          </p>
        </div>
      </section>

      {/* Schedule overview - clear table */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
              WEEKLY SCHEDULE
            </p>

            {/* Word-focused */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-zinc-900">
                    The Word
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Hearing, understanding, and living out God&apos;s Word together
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl border border-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-2xl font-medium text-zinc-900 w-24">
                      10 <span className="text-base text-zinc-300">AM</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900">
                        Morning devotion
                      </h3>
                      <p className="text-sm text-zinc-500">
                        Scripture reading and sharing
                      </p>
                    </div>
                  </div>
                  <span className="text-xs tracking-[2px] text-brand-orange bg-brand-orange/8 px-3 py-1 rounded-full font-medium self-start sm:self-center">
                    DAILY
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-2xl font-medium text-zinc-900 w-24">
                      3 <span className="text-base text-zinc-300">PM</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900">
                        Sunday worship
                      </h3>
                      <p className="text-sm text-zinc-500">
                        Main service — worship, Word, prayer, fellowship
                      </p>
                    </div>
                  </div>
                  <span className="text-xs tracking-[2px] text-brand-orange bg-brand-orange/8 px-3 py-1 rounded-full font-medium self-start sm:self-center">
                    SUNDAY
                  </span>
                </div>
              </div>
            </div>

            {/* Spirit-focused */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-zinc-900">
                    The Spirit
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Encountering God&apos;s presence through prayer and worship
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl border border-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-2xl font-medium text-zinc-900 w-24">
                      8 <span className="text-base text-zinc-300">PM</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900">
                        Evening prayer
                      </h3>
                      <p className="text-sm text-zinc-500">
                        Intercession for the church and the nations
                      </p>
                    </div>
                  </div>
                  <span className="text-xs tracking-[2px] text-brand-teal bg-brand-teal/8 px-3 py-1 rounded-full font-medium self-start sm:self-center">
                    DAILY
                  </span>
                </div>
                <div className="bg-white rounded-xl border border-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-2xl font-medium text-zinc-900 w-24">
                      7 <span className="text-base text-zinc-300">PM</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900">
                        Friday service
                      </h3>
                      <p className="text-sm text-zinc-500">
                        Spirit-led worship, prayer ministry, encountering God
                      </p>
                    </div>
                  </div>
                  <span className="text-xs tracking-[2px] text-brand-teal bg-brand-teal/8 px-3 py-1 rounded-full font-medium self-start sm:self-center">
                    FRIDAY
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* At a glance summary */}
      <section className="bg-zinc-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-8">
              AT A GLANCE
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="pb-3 text-xs tracking-[2px] text-zinc-400 font-medium">
                      WHEN
                    </th>
                    <th className="pb-3 text-xs tracking-[2px] text-zinc-400 font-medium">
                      WHAT
                    </th>
                    <th className="pb-3 text-xs tracking-[2px] text-zinc-400 font-medium">
                      TIME
                    </th>
                    <th className="pb-3 text-xs tracking-[2px] text-zinc-400 font-medium">
                      FOCUS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="py-4 text-zinc-900 font-medium">Every day</td>
                    <td className="py-4 text-zinc-600">Morning devotion</td>
                    <td className="py-4 text-zinc-900 font-medium">10:00 AM</td>
                    <td className="py-4">
                      <span className="text-xs bg-brand-orange/8 text-brand-orange px-2.5 py-0.5 rounded-full">
                        Word
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-zinc-900 font-medium">Every day</td>
                    <td className="py-4 text-zinc-600">Evening prayer</td>
                    <td className="py-4 text-zinc-900 font-medium">8:00 PM</td>
                    <td className="py-4">
                      <span className="text-xs bg-brand-teal/8 text-brand-teal px-2.5 py-0.5 rounded-full">
                        Spirit
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-zinc-900 font-medium">Sunday</td>
                    <td className="py-4 text-zinc-600">Sunday worship</td>
                    <td className="py-4 text-zinc-900 font-medium">3:00 PM</td>
                    <td className="py-4">
                      <span className="text-xs bg-brand-orange/8 text-brand-orange px-2.5 py-0.5 rounded-full">
                        Word
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-zinc-900 font-medium">Friday</td>
                    <td className="py-4 text-zinc-600">Friday service</td>
                    <td className="py-4 text-zinc-900 font-medium">7:00 PM</td>
                    <td className="py-4">
                      <span className="text-xs bg-brand-teal/8 text-brand-teal px-2.5 py-0.5 rounded-full">
                        Spirit
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display italic text-2xl sm:text-3xl text-zinc-900 leading-snug">
              &ldquo;The kingdom of God is not a matter of talk but of
              power.&rdquo;
            </p>
            <span className="inline-block mt-6 bg-brand-teal/10 text-brand-teal px-5 py-1.5 rounded-full text-xs font-medium">
              1 Corinthians 4:20
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* Location */}
      <section className="bg-zinc-950 py-20 px-6">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs tracking-[4px] text-white/30 mb-4">
                LOCATION
              </p>
              <h3 className="font-display text-2xl font-medium text-white">
                22 Norios Aghmarti
              </h3>
              <p className="text-sm text-white/40 mt-2">Tbilisi, Georgia</p>
            </div>
            <Link
              href="/contact"
              className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
            >
              Get directions
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
    </>
  );
}
