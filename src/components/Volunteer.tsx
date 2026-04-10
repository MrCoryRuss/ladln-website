"use client";
import { Lang, translations } from "@/lib/i18n";
import { Heart } from "lucide-react";

export default function Volunteer({ lang }: { lang: Lang }) {
  const t = translations[lang].volunteer;

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-5">
          <Heart size={24} className="text-terracotta" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
          {t.heading}
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed mb-8">{t.body}</p>
        <a
          href="mailto:losamigosmulege@gmail.com"
          className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-bold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          {t.cta}
        </a>
        <div className="mt-4 text-sm text-stone-500">
          <a href="mailto:losamigosmulege@gmail.com" className="hover:text-terracotta transition-colors">
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
