export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-zinc-400 mb-6">CONTACT</p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-zinc-900">
            We&apos;d love to hear from you.
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-zinc-100 text-center">
            <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-900">Visit us</h3>
            <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
              22 Norios Aghmarti
              <br />
              Tbilisi, Georgia
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-zinc-100 text-center">
            <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-900">Email</h3>
            <a href="mailto:makewayjohn@gmail.com" className="text-sm text-brand-teal mt-2 inline-block hover:underline">
              makewayjohn@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-zinc-100 text-center">
            <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-900">WhatsApp</h3>
            <p className="text-sm text-zinc-500 mt-2">
              Message us directly
            </p>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[2/1] bg-zinc-100 rounded-2xl flex items-center justify-center">
            <p className="text-sm text-zinc-400">Google Maps embed</p>
          </div>
        </div>
      </section>

      {/* Service times reminder */}
      <section className="bg-brand-dark py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[4px] text-white/30 mb-6">SERVICE TIMES</p>
          <div className="flex flex-col sm:flex-row justify-center gap-12">
            <div>
              <p className="text-3xl font-medium text-white">Sunday</p>
              <p className="text-brand-orange text-lg mt-1">3:00 PM</p>
            </div>
            <div className="hidden sm:block w-px bg-white/10" />
            <div>
              <p className="text-3xl font-medium text-white">Friday</p>
              <p className="text-brand-teal text-lg mt-1">7:00 PM</p>
            </div>
          </div>
          <p className="text-sm text-white/30 mt-8">22 Norios Aghmarti, Tbilisi, Georgia</p>
        </div>
      </section>
    </>
  );
}
