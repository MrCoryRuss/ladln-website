"use client";
import { Lang, translations } from "@/lib/i18n";
import { newsItems } from "@/lib/news";
import { Calendar, Monitor, Sun } from "lucide-react";

const featureIcons = [Monitor, Sun];

export default function News({ lang }: { lang: Lang }) {
  const t = translations[lang].news;

  return (
    <section id="news" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {lang === "en" ? "Latest" : "Lo Último"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            {t.heading}
          </h2>
          <p className="text-stone-600 max-w-3xl leading-relaxed">{t.intro}</p>
        </div>

        {/* Featured community-impact stories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.featured.map((f, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-stone-200 p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-terracotta" />
                </div>
                <h3 className="font-bold text-stone-800 text-lg mb-3">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>

        {/* Recent updates */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newsItems.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-3">
                <Calendar size={12} />
                {item.date}
              </div>
              <h3 className="font-bold text-stone-800 text-sm leading-snug mb-2 flex-1">
                {lang === "en" ? item.title_en : item.title_es}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                {lang === "en" ? item.excerpt_en : item.excerpt_es}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
