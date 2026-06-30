"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "995551021982";

export default function UrgentPrayerSection() {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");

  const canSend = request.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    const lines = [
      "🙏 Urgent Prayer Request",
      name.trim() ? `From: ${name.trim()}` : null,
      "",
      request.trim(),
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section className="bg-white py-20 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[4px] text-zinc-400 mb-3 text-center">
          PRAYER
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-zinc-900 tracking-tight text-center">
          Need urgent prayer?
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mt-4 text-center max-w-md mx-auto">
          Send your request below and it will be sent directly to our pastor
          on WhatsApp — we will pray for you right away.
        </p>

        <div className="mt-10 bg-zinc-50 rounded-2xl border border-zinc-100 p-6 sm:p-8">
          <label className="block text-xs font-medium text-zinc-400 tracking-wide mb-2">
            YOUR NAME (OPTIONAL)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John"
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-brand-orange/40 transition-colors"
          />

          <label className="block text-xs font-medium text-zinc-400 tracking-wide mb-2 mt-5">
            YOUR PRAYER REQUEST
          </label>
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Share what's on your heart..."
            rows={4}
            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-brand-orange/40 transition-colors resize-none"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={!canSend}
            className="w-full mt-6 bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-orange"
          >
            Send via WhatsApp
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
          <p className="text-xs text-zinc-400 text-center mt-4">
            This opens WhatsApp with your message pre-filled — just hit send.
          </p>
        </div>
      </div>
    </section>
  );
}
