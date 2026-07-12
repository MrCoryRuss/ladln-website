"use client";
import { Lang, translations } from "@/lib/i18n";
import { Heart, Globe, Users, Megaphone, DollarSign, GraduationCap } from "lucide-react";

const icons = [Globe, Megaphone, Users, DollarSign, GraduationCap];

export default function Volunteer({ lang }: { lang: Lang }) {
  const t = translations[lang].volunteer;

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-5">
            <Heart size={24} className="text-terracotta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            {t.heading}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            {t.body}
          </p>
          <p className="text-stone-500 leading-relaxed max-w-3xl mx-auto text-sm">{t.body2}</p>
        </div>

        <h3 className="text-xl font-bold text-stone-700 mb-6 text-center">
          {t.opportunities_heading}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {t.opportunities.map((op, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={op.title}
                className="bg-stone-50 border border-stone-100 rounded-2xl p-6"
              >
                <div className="w-9 h-9 rounded-full bg-terracotta/10 flex items-center justify-center mb-3">
                  <Icon size={17} className="text-terracotta" />
                </div>
                <div className="font-bold text-stone-800 mb-1.5">{op.title}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{op.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={`mailto:${t.contact}`}
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-bold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
          <div className="mt-4 text-sm text-stone-500">
            <a
              href={`mailto:${t.contact}`}
              className="hover:text-terracotta transition-colors"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
