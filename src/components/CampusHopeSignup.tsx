"use client";

const WHATSAPP_NUMBER = "995551021982";
const DEFAULT_MESSAGE =
  "🙋 Campus Hope — Sign Up\n\nI'd like to join the weekly Campus Hope outreach. Here's a bit about me:\n";

export default function CampusHopeSignup() {
  const handleOpen = () => {
    const text = encodeURIComponent(DEFAULT_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section className="bg-white py-16 sm:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[4px] text-zinc-400 mb-3 text-center">
          JOIN US
        </p>

        <button
          type="button"
          onClick={handleOpen}
          className="group w-full flex flex-col sm:flex-row items-center gap-5 sm:gap-8 bg-zinc-950 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 text-left hover:bg-zinc-900 transition-colors"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-brand-orange flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Want to come with us?
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mt-2 max-w-md mx-auto sm:mx-0">
              Tap to message us on WhatsApp — we&apos;ll send you the next
              Campus Hope outreach date and meeting point.
            </p>
          </div>
          <div className="shrink-0 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
