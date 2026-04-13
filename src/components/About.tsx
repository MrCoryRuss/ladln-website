"use client";
import { Lang, translations } from "@/lib/i18n";
import { BookOpen, Home, Laptop, Star, Mail } from "lucide-react";

// Placeholder board members — to be replaced with real data
const boardEN = [
  { name: "Board Members", role: "Coming Soon", email: "losamigosmulege@gmail.com" },
];

const boardES = [
  { name: "Miembros de la Junta", role: "Próximamente", email: "losamigosmulege@gmail.com" },
];

export default function About({ lang }: { lang: Lang }) {
  const tm = translations[lang].mission;
  const board = lang === "en" ? boardEN : boardES;
  const boardHeading = lang === "en" ? "Board of Directors" : "Junta Directiva";
  const boardSubtext =
    lang === "en"
      ? "Meet the dedicated volunteers who guide Los Amigos de Los Niños, Mulegé."
      : "Conoce a los voluntarios dedicados que guían a Los Amigos de Los Niños, Mulegé.";

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

        {/* Board of Directors */}
        <div id="board" className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 mb-2">
            {boardHeading}
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed max-w-2xl">{boardSubtext}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {board.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-stone-200 rounded-2xl px-5 py-4 shadow-sm flex flex-col gap-1"
              >
                <div className="font-semibold text-stone-800">{member.name}</div>
                <div className="text-sm text-terracotta font-medium">{member.role}</div>
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-stone-500 hover:text-terracotta transition-colors flex items-center gap-1 mt-1"
                >
                  <Mail size={11} />
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
