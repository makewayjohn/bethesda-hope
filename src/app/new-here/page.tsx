import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function NewHerePage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">
            WELCOME
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            We&apos;re so glad you&apos;re here.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            Whether you&apos;re exploring faith for the first time or looking
            for a church home in Tbilisi, you are welcome exactly as you are.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
              WHAT TO EXPECT
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Show up",
                  desc: "Come as you are. No dress code, no pressure. We meet Sundays at 3 PM and Fridays at 7 PM at 22 Norios Aghmarti.",
                },
                {
                  step: "02",
                  title: "Be welcomed",
                  desc: "Our greeters will help you find a seat. The service is in English. Expect worship music, prayer, and a message from God's Word.",
                },
                {
                  step: "03",
                  title: "Stay connected",
                  desc: "After service, stick around for fellowship. We'd love to get to know you. Join our WhatsApp group to stay in the loop.",
                },
              ].map((item) => (
                <div key={item.step} className="animate-on-scroll">
                  <span className="font-display text-4xl font-medium text-zinc-100 italic">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-900 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-10">
              COMMON QUESTIONS
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="space-y-6">
              {[
                {
                  q: "What language is the service in?",
                  a: "English. Our community includes people from India, Pakistan, Africa, Georgia, and beyond — English unites us.",
                },
                {
                  q: "Do I need to be a Christian to come?",
                  a: "Not at all. You belong here before you believe here. We welcome everyone — seekers, doubters, and explorers.",
                },
                {
                  q: "What should I wear?",
                  a: "Whatever makes you comfortable. There is no dress code.",
                },
                {
                  q: "How long is the service?",
                  a: "About 1.5 to 2 hours. We worship, hear from God's Word, and pray together.",
                },
                {
                  q: "Is there anything for newcomers?",
                  a: "Yes! Introduce yourself to anyone — we're a small, friendly community. Pastor John would love to meet you personally.",
                },
                {
                  q: "Where exactly are you located?",
                  a: "22 Norios Aghmarti, Tbilisi, Georgia. We're easy to find — message us on WhatsApp if you need directions.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="animate-on-scroll bg-white rounded-xl p-6 border border-zinc-100"
                >
                  <h3 className="font-medium text-zinc-900">{item.q}</h3>
                  <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display italic text-2xl sm:text-3xl text-zinc-900 leading-snug">
              &ldquo;Weeping may stay for the night, but rejoicing comes in the
              morning.&rdquo;
            </p>
            <span className="inline-block mt-6 bg-brand-teal/10 text-brand-teal px-5 py-1.5 rounded-full text-xs font-medium">
              Psalm 30:5
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-medium text-white tracking-tight">
              See you this Sunday.
            </h2>
            <p className="text-sm text-white/40 mt-3">
              3:00 PM · 22 Norios Aghmarti, Tbilisi
            </p>
            <div className="flex justify-center gap-4 mt-8">
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
              <Link
                href="/contact"
                className="border border-white/15 text-white px-8 py-3.5 rounded-full text-sm hover:bg-white/5 transition-colors"
              >
                Message us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
