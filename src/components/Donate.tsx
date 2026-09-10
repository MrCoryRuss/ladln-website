"use client";
import { Lang, translations } from "@/lib/i18n";
import { CreditCard, Heart } from "lucide-react";

const ZEFFY_DONATION_URL =
  "https://www.zeffy.com/en-US/donation-form/e9d1770e-2cc7-46f7-adaa-8f75075e4633";

export default function Donate({ lang }: { lang: Lang }) {
  const t = translations[lang].donate;

  return (
    <section id="donate" className="py-20 bg-terracotta text-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t.heading}</h2>
          <p className="text-white/80 max-w-2xl mx-auto">{t.intro}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white/15 border-2 border-white/40 rounded-3xl p-8 relative shadow-lg">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-stone-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
            <Heart size={11} className="fill-stone-900" />
            {lang === "en" ? "No fees — 100% to students" : "Sin comisiones — 100% a estudiantes"}
          </div>
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mb-4 mt-2">
            <CreditCard size={20} className="text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">{t.zeffy_heading}</h3>
          <p className="text-white/80 text-sm mb-6">{t.zeffy_body}</p>
          <a
            href={ZEFFY_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-white text-terracotta font-bold py-3 px-4 rounded-full hover:bg-stone-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.zeffy_btn}
          </a>
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/60 text-xs max-w-3xl mx-auto leading-relaxed">
            {t.partners_note}
          </p>
        </div>
      </div>
    </section>
  );
}
