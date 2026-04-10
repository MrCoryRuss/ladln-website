"use client";
import { Lang, translations } from "@/lib/i18n";
import { hsStudents, gradProfiles } from "@/lib/students";
import { Quote } from "lucide-react";

export default function Students({ lang }: { lang: Lang }) {
  const t = translations[lang].students;

  return (
    <section id="students" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {lang === "en" ? "Class of 2025–2026" : "Generación 2025–2026"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-3">
            {t.heading}
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">{t.intro}</p>
        </div>

        {/* High school students */}
        <h3 className="text-xl font-bold text-stone-700 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-terracotta inline-block" />
          {t.hs_heading}
        </h3>

        {(["seniors", "juniors", "sophomores"] as const).map((group) => (
          <div key={group} className="mb-8">
            <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
              {t[group]}
            </div>
            <div className="flex flex-wrap gap-2">
              {hsStudents[group].map((name) => (
                <div
                  key={name}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 font-medium shadow-sm hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Graduate profiles */}
        <h3 className="text-xl font-bold text-stone-700 mt-14 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-gold inline-block" />
          {t.grad_heading}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {gradProfiles.map((g) => (
            <div
              key={g.name}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {g.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-800">{g.name}</div>
                  <div className="text-xs text-stone-500">
                    {lang === "en" ? `Class of ${g.year}` : `Graduado(a) ${g.year}`}
                  </div>
                </div>
              </div>
              <div className="text-sm text-terracotta font-medium mb-3">
                {lang === "en" ? g.degree_en : g.degree_es}
              </div>
              <div className="relative pl-4 border-l-2 border-stone-200">
                <Quote size={12} className="absolute -left-1.5 top-0 text-stone-300 fill-stone-300" />
                <p className="text-stone-600 italic text-sm leading-relaxed">
                  {lang === "en" ? g.quote_en : g.quote_es}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
