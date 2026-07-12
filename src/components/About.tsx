"use client";

import { Lang, translations } from "@/lib/i18n";

type Member = {
  name: string;
  roleEn: string;
  roleEs: string;
  bioEn: string;
  bioEs: string;
  image: string;
};

const board: Member[] = [
  {
    name: "Cory Russell",
    roleEn: "Chief Technology Officer",
    roleEs: "Director de Tecnologia",
    bioEn:
      "Cory supports the organization with technology leadership, strategy, and a strong commitment to educational opportunity.",
    bioEs:
      "Cory apoya a la organizacion con liderazgo tecnologico, estrategia y un fuerte compromiso con la oportunidad educativa.",
    image: "/board/cory-russell.jpg",
  },
  {
    name: "Tracy Russell",
    roleEn: "Secretary",
    roleEs: "Secretaria",
    bioEn:
      "Tracy brings a strong belief in lifelong learning and helps guide the board with steady volunteer leadership.",
    bioEs:
      "Tracy aporta una fuerte conviccion en el aprendizaje continuo y ayuda a guiar a la junta con liderazgo voluntario.",
    image: "/board/tracy-russell.jpg",
  },
  {
    name: "Terri Wolfe",
    roleEn: "Treasurer",
    roleEs: "Tesorera",
    bioEn:
      "Terri oversees finance, compliance, reporting, and stewardship with deep nonprofit and CPA experience.",
    bioEs:
      "Terri supervisa finanzas, cumplimiento, reportes y administracion con amplia experiencia como CPA y en organizaciones sin fines de lucro.",
    image: "/board/terri-wolfe.png",
  },
  {
    name: "John Rovens",
    roleEn: "Director of Resource Development",
    roleEs: "Director de Desarrollo de Recursos",
    bioEn:
      "John leads donor development, events, volunteer engagement, and membership growth for Los Amigos.",
    bioEs:
      "John dirige el desarrollo de donantes, eventos, voluntariado y crecimiento de membresia para Los Amigos.",
    image: "/board/john-rovens.png",
  },
  {
    name: "Sally Thompson",
    roleEn: "",
    roleEs: "",
    bioEn: "",
    bioEs: "",
    image: "/board/sally-thompson.png",
  },
  {
    name: "KJ",
    roleEn: "",
    roleEs: "",
    bioEn: "",
    bioEs: "",
    image: "/board/kj.png",
  },
];

export default function About({ lang }: { lang: Lang }) {
  const tm = translations[lang].mission;
  const heading = lang === "en" ? "Board of Directors" : "Junta Directiva";
  const subtext =
    lang === "en"
      ? "Meet the volunteer leaders helping guide Los Amigos de Los Ninos, Mulege."
      : "Conoce a los lideres voluntarios que ayudan a guiar a Los Amigos de Los Ninos, Mulege.";

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

        <div
          id="board"
          className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 mb-2">
            {heading}
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed max-w-3xl">{subtext}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {board.map((m) => {
              const role = lang === "en" ? m.roleEn : m.roleEs;
              const bio = lang === "en" ? m.bioEn : m.bioEs;

              return (
                <div
                  key={m.name}
                  className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full aspect-[4/5] object-cover bg-stone-100"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-3">
                    <div className="font-bold text-xl text-stone-800">{m.name}</div>
                    {role ? (
                      <div className="text-sm font-semibold text-terracotta uppercase tracking-wider">
                        {role}
                      </div>
                    ) : null}
                    {bio ? (
                      <p className="text-stone-600 leading-relaxed text-sm">{bio}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
