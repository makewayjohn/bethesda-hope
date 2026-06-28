import ScrollReveal from "@/components/ScrollReveal";

export default function SermonsPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">SERMONS</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            Watch & listen.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            Missed a Sunday? Catch up on recent messages and be encouraged by
            God&apos;s Word wherever you are.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
              RECENT SERMONS
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="animate-on-scroll group cursor-pointer"
                >
                  <div className="aspect-video bg-zinc-100 rounded-xl flex items-center justify-center group-hover:bg-zinc-200 transition-colors relative overflow-hidden">
                    <svg
                      className="w-10 h-10 text-zinc-300 group-hover:text-brand-orange transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-zinc-400">June 2026</p>
                    <h3 className="text-base font-medium text-zinc-900 mt-1 group-hover:text-brand-orange transition-colors">
                      Sermon title here
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">Pastor John</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <a
                href="https://www.youtube.com/@bethesdahopechurch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-display italic text-2xl sm:text-3xl text-white leading-snug">
              &ldquo;The kingdom of God is not a matter of talk but of
              power.&rdquo;
            </p>
            <span className="inline-block mt-6 bg-brand-orange/20 text-brand-orange px-5 py-1.5 rounded-full text-xs font-medium">
              1 Corinthians 4:20
            </span>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
