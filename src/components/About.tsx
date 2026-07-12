"use client";

import { Lang, translations } from "@/lib/i18n";

export default function About({ lang }: { lang: Lang }) {
  const tm = translations[lang].mission;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="max-w-3xl">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            Since 1976
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            {tm.heading}
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg">{tm.body}</p>
        </div>

        {/* Why we do what we do */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-stone-50 rounded-2xl p-7 border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-3">{tm.why_heading}</h3>
            <p className="text-stone-600 leading-relaxed text-sm">{tm.why_body}</p>
          </div>
          <div className="bg-stone-50 rounded-2xl p-7 border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-3">{tm.funding_heading}</h3>
            <p className="text-stone-600 leading-relaxed text-sm">{tm.funding_body}</p>
          </div>
        </div>

        {/* Key points */}
        <div>
          <h3 className="text-xl font-bold text-stone-800 mb-5">{tm.keypoints_heading}</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {tm.keypoints.map((kp) => (
              <li
                key={kp.slice(0, 40)}
                className="flex items-start gap-3 bg-white border border-stone-200 rounded-xl p-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                <span className="text-stone-600 text-sm leading-relaxed">{kp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2025-2026 scholarships */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-stone-200 p-7">
            <h3 className="text-lg font-bold text-stone-800 mb-2">{tm.hs_heading}</h3>
            <p className="text-stone-500 text-sm mb-4">{tm.hs_intro}</p>
            <ul className="space-y-2.5">
              {tm.hs_items.map((item) => (
                <li key={item.slice(0, 40)} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span className="text-stone-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-stone-200 p-7">
            <h3 className="text-lg font-bold text-stone-800 mb-2">{tm.univ_heading}</h3>
            <ul className="space-y-2.5 mt-4">
              {tm.univ_items.map((item) => (
                <li key={item.slice(0, 40)} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span className="text-stone-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education, the road to a better future */}
        <div className="max-w-3xl">
          <h3 className="text-xl font-bold text-stone-800 mb-3">{tm.road_heading}</h3>
          <p className="text-stone-600 leading-relaxed text-sm mb-4">{tm.road_body1}</p>
          <p className="text-stone-600 leading-relaxed text-sm">{tm.road_body2}</p>
        </div>
      </div>
    </section>
  );
}
