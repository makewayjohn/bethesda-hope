import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ConnectPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">CONNECT</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            Get connected.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            There are many ways to grow and serve at Bethesda Hope. Find the
            right place for you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Small groups",
                  desc: "Life is better together. Join a small group and grow deeper in community and God's Word.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                  color: "brand-teal",
                },
                {
                  title: "S.O.W.E.R. discipleship",
                  desc: "Our discipleship track — Seek God, Obey God, Witness Christ, Equip Disciples, Reproduce Leaders.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                  color: "brand-orange",
                },
                {
                  title: "C.R.O.S.S. training",
                  desc: "Connect, Rejoice, Obey, Share, Start new ecclesia — our mission-focused training path.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  ),
                  color: "brand-teal",
                },
                {
                  title: "Worship team",
                  desc: "Use your musical gifts to lead others into God's presence every Sunday and Friday.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                  ),
                  color: "brand-orange",
                },
                {
                  title: "Women's ministry",
                  desc: "A safe space for women to encourage one another, pray, and grow together in faith.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                  color: "brand-teal",
                },
                {
                  title: "Serve & volunteer",
                  desc: "From greeting to setup to prayer — there's a place for everyone to serve.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                    </svg>
                  ),
                  color: "brand-orange",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="animate-on-scroll bg-white rounded-2xl p-8 border border-zinc-100 group hover:border-zinc-200 transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      item.color === "brand-orange"
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "bg-brand-teal/10 text-brand-teal"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-medium text-white tracking-tight">
              Ready to take the next step?
            </h2>
            <p className="text-sm text-white/40 mt-3">
              Reach out via WhatsApp or visit us this Sunday.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link
                href="/new-here"
                className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
              >
                I&apos;m new
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="border border-white/15 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/5 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
