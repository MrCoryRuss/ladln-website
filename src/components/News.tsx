"use client";
import { Lang, translations } from "@/lib/i18n";
import { newsItems } from "@/lib/news";
import { Calendar } from "lucide-react";

export default function News({ lang }: { lang: Lang }) {
  const t = translations[lang].news;

  return (
    <section id="news" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
              {lang === "en" ? "Latest" : "Lo Último"}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800">{t.heading}</h2>
          </div>
          <a
            href="https://ladlnmulege.org/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm text-terracotta font-semibold hover:underline"
          >
            {t.read_more}
          </a>
        </div>

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

        <div className="sm:hidden text-center mt-6">
          <a
            href="https://ladlnmulege.org/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta font-semibold"
          >
            {t.read_more}
          </a>
        </div>
      </div>
    </section>
  );
}
