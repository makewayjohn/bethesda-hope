"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

type Gathering = {
  id: string;
  time: string;
  ampm: string;
  title: string;
  summary: string;
  badge: string;
  details: string[];
};

const wordGatherings: Gathering[] = [
  {
    id: "morning-devotion",
    time: "10",
    ampm: "AM",
    title: "Morning devotion",
    summary: "Scripture reading and sharing",
    badge: "DAILY",
    details: [
      "A short, focused time around God's Word to start the day grounded — Scripture reading, reflection, and brief sharing.",
      "Open to anyone, students and staff alike. Come as you are, even between classes.",
      "Usually 30–40 minutes, followed by short prayer for the day ahead.",
    ],
  },
  {
    id: "sunday-worship",
    time: "3",
    ampm: "PM",
    title: "Sunday worship",
    summary: "Main service — worship, Word, prayer, fellowship",
    badge: "SUNDAY",
    details: [
      "Our main weekly gathering — worship, a message from God's Word, prayer, and fellowship together.",
      "Includes time for new faces to be welcomed and connected with a small group or leader.",
      "Fellowship and food usually follow the service — stay and meet the community.",
    ],
  },
];

const spiritGatherings: Gathering[] = [
  {
    id: "evening-prayer",
    time: "8",
    ampm: "PM",
    title: "Evening prayer",
    summary: "Intercession for the church and the nations",
    badge: "DAILY",
    details: [
      "A daily evening gathering devoted to prayer — for the church, for students' needs, and for the nations represented in our community.",
      "A space to bring personal burdens, give thanks, and intercede together.",
      "Quieter and more intimate than Sunday worship — come even just to sit and pray.",
    ],
  },
  {
    id: "friday-service",
    time: "7",
    ampm: "PM",
    title: "Friday service",
    summary: "Spirit-led worship, prayer ministry, encountering God",
    badge: "FRIDAY",
    details: [
      "An extended time of Spirit-led worship and prayer ministry to close out the week in God's presence.",
      "Includes space for personal prayer ministry — for healing, breakthrough, and encountering God.",
      "Often runs longer than other gatherings as the Spirit leads.",
    ],
  },
];

function GatheringCard({
  item,
  accent,
}: {
  item: Gathering;
  accent: "orange" | "teal";
}) {
  const [open, setOpen] = useState(false);
  const color =
    accent === "orange"
      ? "text-brand-orange bg-brand-orange/8"
      : "text-brand-teal bg-brand-teal/8";

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="w-full text-left bg-white rounded-xl border border-zinc-100 p-5 hover:border-zinc-200 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="font-display text-2xl font-medium text-zinc-900 w-24">
            {item.time} <span className="text-base text-zinc-300">{item.ampm}</span>
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">{item.title}</h3>
            <p className="text-sm text-zinc-500">{item.summary}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-center">
          <span
            className={`text-xs tracking-[2px] px-3 py-1 rounded-full font-medium ${color}`}
          >
            {item.badge}
          </span>
          <svg
            className={`w-4 h-4 text-zinc-300 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 pt-4 border-t border-zinc-100">
            {item.details.map((d, i) => (
              <li
                key={i}
                className="text-sm text-zinc-500 leading-relaxed flex gap-2"
              >
                <span className={accent === "orange" ? "text-brand-orange" : "text-brand-teal"}>
                  &bull;
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

export default function WorshipPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 px-6 flex items-end min-h-[60vh]">
        <Image
          src="/images/group_worship.jpeg"
          alt="Bethesda Hope Church worship gathering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-brand-orange mb-6">WORSHIP</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-white">
            Worship is a celebration.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mt-6 max-w-xl mx-auto">
            A celebration of the salvation Jesus gave us. A conversation with
            God. A place to be recharged, renewed, and filled with joy.
          </p>
        </div>
      </section>

      {/* Weekly rhythm at a glance */}
      <section className="py-14 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-6 text-center">
              YOUR WEEK WITH US
            </p>
            <div className="grid grid-cols-7 gap-1.5 sm:gap-3">
              {[
                { d: "MON", sunday: false, friday: false },
                { d: "TUE", sunday: false, friday: false },
                { d: "WED", sunday: false, friday: false },
                { d: "THU", sunday: false, friday: false },
                { d: "FRI", sunday: false, friday: true },
                { d: "SAT", sunday: false, friday: false },
                { d: "SUN", sunday: true, friday: false },
              ].map((day) => (
                <div
                  key={day.d}
                  className={`rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center gap-1.5 sm:gap-2 ${
                    day.sunday
                      ? "bg-brand-orange/10"
                      : day.friday
                      ? "bg-brand-teal/10"
                      : "bg-zinc-50"
                  }`}
                >
                  <span
                    className={`text-[10px] sm:text-xs font-medium tracking-wide ${
                      day.sunday
                        ? "text-brand-orange"
                        : day.friday
                        ? "text-brand-teal"
                        : "text-zinc-400"
                    }`}
                  >
                    {day.d}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" title="Morning devotion 10AM" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" title="Evening prayer 8PM" />
                  {day.sunday && (
                    <span className="hidden sm:block text-[10px] text-brand-orange font-medium text-center leading-tight mt-1">
                      Worship
                      <br />3PM
                    </span>
                  )}
                  {day.friday && (
                    <span className="hidden sm:block text-[10px] text-brand-teal font-medium text-center leading-tight mt-1">
                      Service
                      <br />7PM
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                Word
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                Spirit
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Schedule overview - clear table */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-3">
              WEEKLY SCHEDULE
            </p>
            <p className="text-sm text-zinc-400 mb-10">
              Tap a gathering for more details.
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
                {wordGatherings.map((g) => (
                  <GatheringCard key={g.id} item={g} accent="orange" />
                ))}
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
                {spiritGatherings.map((g) => (
                  <GatheringCard key={g.id} item={g} accent="teal" />
                ))}
              </div>
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
                27 Norios Aghmarti
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
