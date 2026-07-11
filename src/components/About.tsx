"use client";

import { createElement as h } from "react";
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
        bioEn: "Cory supports the organization with technology leadership, strategy, and a strong commitment to educational opportunity.",
        bioEs: "Cory apoya a la organizacion con liderazgo tecnologico, estrategia y un fuerte compromiso con la oportunidad educativa.",
        image: "https://www.genspark.ai/api/files/s/tMlnBUZg",
  },
  {
        name: "Tracy Russell",
        roleEn: "Secretary",
        roleEs: "Secretaria",
        bioEn: "Tracy brings a strong belief in lifelong learning and helps guide the board with steady volunteer leadership.",
        bioEs: "Tracy aporta una fuerte conviccion en el aprendizaje continuo y ayuda a guiar a la junta con liderazgo voluntario.",
        image: "https://www.genspark.ai/api/files/s/7qIHviDa",
  },
  {
        name: "Terri Wolfe",
        roleEn: "Treasurer",
        roleEs: "Tesorera",
        bioEn: "Terri oversees finance, compliance, reporting, and stewardship with deep nonprofit and CPA experience.",
        bioEs: "Terri supervisa finanzas, cumplimiento, reportes y administracion con amplia experiencia como CPA y en organizaciones sin fines de lucro.",
        image: "https://www.genspark.ai/api/files/s/5Uu8vxoo",
  },
  {
        name: "John Rovers",
        roleEn: "Director of Resource Development",
        roleEs: "Director de Desarrollo de Recursos",
        bioEn: "John leads donor development, events, volunteer engagement, and membership growth for Los Amigos.",
        bioEs: "John dirige el desarrollo de donantes, eventos, voluntariado y crecimiento de membresia para Los Amigos.",
        image: "https://www.genspark.ai/api/files/s/ESH1T9Gn",
  },
  ];

export default function About({ lang }: { lang: Lang }) {
    const tm = translations[lang].mission;
    const heading = lang === "en" ? "Board of Directors" : "Junta Directiva";
    const subtext =
          lang === "en"
        ? "Meet the volunteer leaders helping guide Los Amigos de Los Ninos, Mulege."
            : "Conoce a los lideres voluntarios que ayudan a guiar a Los Amigos de Los Ninos, Mulege.";

  return h(
        "section",
    { id: "about", className: "py-20 bg-white" },
        h(
                "div",
          { className: "max-w-6xl mx-auto px-4 space-y-16" },
                h(
                          "div",
                  { className: "max-w-3xl" },
                          h("div", { className: "text-terracotta font-semibold text-sm uppercase tracking-wider mb-2" }, "Since 1976"),
                          h("h2", { className: "text-3xl md:text-4xl font-extrabold text-stone-800 mb-4" }, tm.heading),
                          h("p", { className: "text-stone-600 leading-relaxed text-lg" }, tm.body),
                        ),
                h(
                          "div",
                  { id: "board", className: "bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100" },
                          h("h2", { className: "text-2xl md:text-3xl font-extrabold text-stone-800 mb-2" }, heading),
                          h("p", { className: "text-stone-600 mb-8 leading-relaxed max-w-3xl" }, subtext),
                          h(
                                      "div",
                            { className: "grid md:grid-cols-2 gap-6" },
                                      ...board.map((m) =>
                                                    h(
                                                                    "div",
                                                      { key: m.name, className: "bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm" },
                                                                    h("img", { src: m.image, alt: m.name, className: "w-full aspect-[4/5] object-cover bg-stone-100", loading: "lazy" }),
                                                                    h(
                                                                                      "div",
                                                                      { className: "p-6 space-y-3" },
                                                                                      h("div", { className: "font-bold text-xl text-stone-800" }, m.name),
                                                                                      h("div", { className: "text-sm font-semibold text-terracotta uppercase tracking-wider" }, lang === "en" ? m.roleEn : m.roleEs),
                                                                                      h("p", { className: "text-stone-600 leading-relaxed text-sm" }, lang === "en" ? m.bioEn : m.bioEs),
                                                                                    ),
                                                                  ),
                                                             ),
                                    ),
                        ),
              ),
      );
}
