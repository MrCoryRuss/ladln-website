"use client";
import { Lang, translations } from "@/lib/i18n";
import { BookOpen, Home, Laptop, Star } from "lucide-react";

export default function About({ lang }: { lang: Lang }) {
  const tm = translations[lang].mission;
  const te = translations[lang].education;

  const icons = [BookOpen, Home, Laptop, Star];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
              Since 1976
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
              {tm.heading}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-6">{tm.body}</p>
            <h3 className="font-bold text-stone-700 text-lg mb-3">{tm.subheading}</h3>
            <ul className="space-y-3">
              {tm.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-7 h-7 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-terracotta" />
                    </div>
                    <span className="text-stone-600">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Visual card */}
          <div className="bg-gradient-to-br from-sand to-desert-light rounded-3xl p-8 border border-stone-200 shadow-sm">
            <blockquote className="text-stone-700 italic text-lg leading-relaxed mb-4">
              "Thanks to God mainly, but with your help, I finished my studies. Now it is like a seed that was watered little by little — the tree was growing and now we have its fruits."
            </blockquote>
            <div className="text-sm font-semibold text-terracotta">
              — Abraham Mendoza Osuna
            </div>
            <div className="text-xs text-stone-500">First LADLN student, 1996 · Architect</div>
          </div>
        </div>

        {/* Education system */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 mb-3">
            {te.heading}
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed max-w-2xl">{te.body}</p>
          <div className="flex flex-wrap gap-3">
            {te.levels.map((level, i) => (
              <div
                key={level.name}
                className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-terracotta flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{level.name}</div>
                  <div className="text-xs text-stone-500">{level.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
