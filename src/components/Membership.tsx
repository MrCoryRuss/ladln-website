"use client";
import { Lang, translations } from "@/lib/i18n";
import { CheckCircle } from "lucide-react";

const ZEFFY_MEMBERSHIP_URL =
  "https://www.zeffy.com/en-US/ticketing/62867cd2-9ea8-43e3-9fd0-e5ca734151f8";

const tierColors: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  amber: {
    bg: "from-amber-50 to-amber-100/50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
  },
  slate: {
    bg: "from-slate-50 to-slate-100/50",
    border: "border-slate-200",
    badge: "bg-slate-200 text-slate-700",
    text: "text-slate-600",
  },
  yellow: {
    bg: "from-yellow-50 to-yellow-100/50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    text: "text-yellow-600",
  },
  sky: {
    bg: "from-sky-50 to-sky-100/50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
    text: "text-sky-600",
  },
};

export default function Membership({ lang }: { lang: Lang }) {
  const t = translations[lang].membership;

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {lang === "en" ? "Make a Difference" : "Marca la Diferencia"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-3">
            {t.heading}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">{t.intro}</p>
        </div>

        {/* How membership supports education */}
        <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100 mb-12 space-y-4">
          <h3 className="text-xl font-bold text-stone-800">{t.how_heading}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{t.how_body1}</p>
          <p className="text-stone-600 text-sm leading-relaxed">{t.how_body2}</p>
          <p className="text-stone-600 text-sm leading-relaxed font-medium">{t.how_body3}</p>
        </div>

        {/* Membership tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {t.tiers.map((tier, i) => {
            const c = tierColors[tier.color] ?? tierColors.amber;
            return (
              <div
                key={`${tier.name}-${tier.amount}-${i}`}
                className={`rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} p-6 flex flex-col`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mb-3 ${c.badge}`}
                >
                  {tier.name}
                </div>
                <div className={`text-3xl font-extrabold ${c.text} mb-4`}>{tier.amount}</div>
                <ul className="space-y-2 flex-1">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle size={14} className={`${c.text} mt-0.5 shrink-0`} />
                      <span className="text-stone-600 text-xs leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-stone-500 mb-12">{t.renew_note}</p>

        {/* Non-member donors */}
        <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100 mb-10">
          <h3 className="text-lg font-bold text-stone-800 mb-3">{t.non_member_heading}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{t.non_member}</p>
        </div>

        <div className="text-center">
          <a
            href={ZEFFY_MEMBERSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-bold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
