import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import CampusHopeSignup from "@/components/CampusHopeSignup";
import CampusMap from "@/components/CampusMap";

export default function CampusHopePage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 flex items-end min-h-[70vh]">
        <Image
          src="/images/campus_hope.jpeg"
          alt="Campus Hope outreach at a Tbilisi university"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-brand-orange mb-6">
            CAMPUS HOPE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-white">
            Bringing hope to the campus, one student at a time.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mt-6 max-w-xl mx-auto">
            Once a week, we go out to the universities of Tbilisi — meeting
            students, praying blessing over them, and loving our neighbors the
            way Jesus taught us to.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-6">
              WHAT IS CAMPUS HOPE
            </p>
            <div className="space-y-6 text-base text-zinc-600 leading-relaxed">
              <p>
                Campus Hope is our weekly outreach to the universities of
                Tbilisi. We go out to the campuses, meet students where they
                are, and offer a simple gift: a blessing prayer, freely given,
                no strings attached.
              </p>
              <p>
                Our goal is campus evangelization — to see the gospel reach
                every student in this city. But more than a program, it&apos;s
                an act of obedience to what Jesus called the greatest
                commandment: to love our neighbor.
              </p>
              <p>
                Our church is made up of students from many different
                universities across Tbilisi. Through Campus Hope, we pray for
                one another, bless each other, and help students in need —
                wherever they are, whatever they&apos;re facing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ministry areas */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[4px] text-zinc-400 mb-3 text-center">
              CAMPUS MINISTRY
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-zinc-900 tracking-tight text-center mb-14">
              How we serve the campus.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <CampusMap />
            <div className="flex items-center justify-center gap-5 mt-4 mb-14 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                Medical universities
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                Bethesda Hope Church
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Campus Outreach",
                  desc: "Going out to meet students on campus and share the love of Jesus.",
                },
                {
                  title: "New Student Support",
                  desc: "Helping freshmen settle into a new city, culture, and university life.",
                },
                {
                  title: "Student Care & Mentoring",
                  desc: "Walking alongside students personally — life, faith, and everything between.",
                },
                {
                  title: "Academic Counseling & Support",
                  desc: "Encouraging and supporting students through the pressures of medical school.",
                },
                {
                  title: "Prayer Request Care",
                  desc: "Keeping track of students' prayer needs and following up faithfully.",
                },
                {
                  title: "Campus Ministry Planning",
                  desc: "Planning and leading the weekly outreach and campus-focused events.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="animate-on-scroll bg-zinc-50 rounded-2xl p-6 border border-zinc-100"
                >
                  <h3 className="text-base font-medium text-zinc-900">
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

      {/* Sign up */}
      <CampusHopeSignup />

      {/* Verse */}
      <section className="bg-brand-dark py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl font-medium text-white leading-snug font-serif italic">
              &ldquo;Love your neighbor as yourself.&rdquo;
            </p>
            <p className="text-sm text-white/40 mt-4">Mark 12:31</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
