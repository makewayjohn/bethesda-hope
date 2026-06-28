"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrayerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">PRAYER</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            We&apos;d love to pray for you.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mt-6 max-w-xl mx-auto">
            Whatever you&apos;re going through, you don&apos;t have to carry it
            alone. Share your prayer request and our community will lift you up.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-brand-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-medium text-zinc-900">
                  Thank you for sharing.
                </h2>
                <p className="text-sm text-zinc-500 mt-3 max-w-md mx-auto leading-relaxed">
                  Your prayer request has been received. Our community will be
                  praying for you. God hears you and He is near.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-brand-orange hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Your name{" "}
                    <span className="text-zinc-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="You can stay anonymous"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Email{" "}
                    <span className="text-zinc-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="If you'd like us to follow up"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prayer"
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Your prayer request
                  </label>
                  <textarea
                    id="prayer"
                    rows={6}
                    required
                    placeholder="Share what's on your heart..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors bg-white resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="private"
                    className="mt-1 rounded border-zinc-300"
                  />
                  <label
                    htmlFor="private"
                    className="text-sm text-zinc-500"
                  >
                    Keep my request private (only the pastoral team will see it)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Submit prayer request
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-zinc-50 py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display italic text-2xl sm:text-3xl text-zinc-900 leading-snug">
              &ldquo;Be still, and know that I am God.&rdquo;
            </p>
            <span className="inline-block mt-6 bg-brand-teal/10 text-brand-teal px-5 py-1.5 rounded-full text-xs font-medium">
              Psalm 46:10
            </span>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
