"use client";
import { Lang, translations } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const ti = translations[lang].impact;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sand via-stone-50 to-desert-light">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-12 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            🌵 {t.tagline}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 leading-tight mb-4">
            Los Amigos de{" "}
            <span className="text-terracotta">Los Niños</span>
          </h1>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#donate"
              className="bg-terracotta hover:bg-terracotta-dark text-white font-bold px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t.cta_donate}
            </a>
            <a
              href="#students"
              className="bg-white hover:bg-stone-50 text-stone-700 font-semibold px-6 py-3 rounded-full shadow border border-stone-200 transition-all hover:shadow-md"
            >
              {t.cta_students}
            </a>
          </div>
        </div>
      </div>

      {/* Impact stats bar */}
      <div className="relative bg-terracotta text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: ti.stat1_num, label: ti.stat1_label },
            { num: ti.stat2_num, label: ti.stat2_label },
            { num: ti.stat3_num, label: ti.stat3_label },
            { num: ti.stat4_num, label: ti.stat4_label },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold">{s.num}</span>
              <span className="text-sm text-white/80 font-medium mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
