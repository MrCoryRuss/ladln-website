"use client";

import { Lang } from "@/lib/i18n";

const ZEFFY_DONATION_URL =
  "https://www.zeffy.com/en-US/donation-form/e9d1770e-2cc7-46f7-adaa-8f75075e4633";
const ZEFFY_MEMBERSHIP_URL =
  "https://www.zeffy.com/en-US/ticketing/62867cd2-9ea8-43e3-9fd0-e5ca734151f8";

const content = {
  en: {
    heading: "Support Our Students",
    intro: "Give once or monthly. Every gift funds scholarships for students in Mulegé.",
    donate_now: "Donate Now",
    recurring: "Monthly giving is preferred — it keeps scholarships steady year-round.",
    member_heading: "Become a Member",
    member_intro: "Join with a simple annual membership and help shape our mission.",
    individual_name: "Individual Membership",
    individual_amount: "$75 per year",
    couple_name: "Couple Membership",
    couple_amount: "$150 per year",
    join: "Join Now",
    renew: "Memberships renew automatically through Zeffy unless cancelled.",
  },
  es: {
    heading: "Apoya a Nuestros Estudiantes",
    intro: "Dona una vez o mensualmente. Cada donativo financia becas para estudiantes de Mulegé.",
    donate_now: "Donar Ahora",
    recurring: "Se prefiere la donación mensual — sostiene las becas todo el año.",
    member_heading: "Hazte Miembro",
    member_intro: "Únete con una membresía anual sencilla y ayuda a dar forma a nuestra misión.",
    individual_name: "Membresía Individual",
    individual_amount: "$75 por año",
    couple_name: "Membresía de Pareja",
    couple_amount: "$150 por año",
    join: "Únete Ahora",
    renew: "Las membresías se renuevan automáticamente a través de Zeffy a menos que canceles.",
  },
} as const;

export default function Donate({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <section id="donate" className="py-20 bg-terracotta text-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Donate Now — primary */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t.heading}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{t.intro}</p>
          <a
            href={ZEFFY_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-terracotta font-extrabold text-lg px-10 py-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-stone-100"
          >
            {t.donate_now}
          </a>
          <p className="text-white/70 text-sm mt-4">{t.recurring}</p>
        </div>

        {/* Become a Member */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold mb-2">{t.member_heading}</h3>
            <p className="text-white/80 text-sm max-w-lg mx-auto">{t.member_intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 flex flex-col text-center">
              <div className="text-lg font-bold">{t.individual_name}</div>
              <div className="text-3xl font-extrabold mt-2 mb-6">{t.individual_amount}</div>
              <a
                href={ZEFFY_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-white text-terracotta font-bold py-3 px-6 rounded-full shadow-md transition-all hover:bg-stone-100 hover:shadow-lg"
              >
                {t.join}
              </a>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-7 flex flex-col text-center">
              <div className="text-lg font-bold">{t.couple_name}</div>
              <div className="text-3xl font-extrabold mt-2 mb-6">{t.couple_amount}</div>
              <a
                href={ZEFFY_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-white text-terracotta font-bold py-3 px-6 rounded-full shadow-md transition-all hover:bg-stone-100 hover:shadow-lg"
              >
                {t.join}
              </a>
            </div>
          </div>

          <p className="text-center text-white/60 text-xs mt-8">{t.renew}</p>
        </div>
      </div>
    </section>
  );
}
