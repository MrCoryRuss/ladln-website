"use client";

import Image from "next/image";
import { Lang } from "@/lib/i18n";

type Member = {
  name: string;
  titleEn: string;
  titleEs: string;
  image: string;
  summaryEn: string;
  summaryEs: string;
};

const content = {
  en: {
    eyebrow: "Since 1976",
    heading: "About Us",
    body: "Los Amigos de Los Niños, Mulegé is a 501(c)(3) nonprofit that has provided scholarships and educational support to students in Mulegé, Baja California Sur since 1976 — more than 525 high school and university graduates and counting.",
    keypoints: [
      "525+ high school and university graduates since 1976",
      "65+ students supported each year — 34 high school, 31 university",
      "100% volunteer-run, so every gift goes directly to students",
    ],
    hs: "34 CECyTE high school scholarships, plus laptops, computer lab, and classroom funding",
    univ: "31 university scholarships of up to 4.5 years of tuition and support",
    board_heading: "Our Board of Directors",
    board_intro:
      "An all-volunteer board guides our mission, finances, and strategy, ensuring every gift serves Mulegé students.",
  },
  es: {
    eyebrow: "Desde 1976",
    heading: "Nosotros",
    body: "Los Amigos de Los Niños, Mulegé es una organización sin fines de lucro 501(c)(3) que desde 1976 ha otorgado becas y apoyo educativo a estudiantes de Mulegé, Baja California Sur — más de 525 graduados de preparatoria y universidad y contando.",
    keypoints: [
      "Más de 525 graduados de preparatoria y universidad desde 1976",
      "Más de 65 estudiantes apoyados cada año — 34 de preparatoria, 31 de universidad",
      "100% dirigido por voluntarios, para que cada donativo llegue directamente a los estudiantes",
    ],
    hs: "34 becas de preparatoria CECyTE, más laptops, laboratorio de cómputo y financiamiento para el aula",
    univ: "31 becas universitarias de hasta 4.5 años de colegiatura y apoyo",
    board_heading: "Nuestra Junta Directiva",
    board_intro:
      "Una junta totalmente voluntaria guía nuestra misión, finanzas y estrategia, asegurando que cada donativo sirva a los estudiantes de Mulegé.",
  },
} as const;

const members: Member[] = [
  {
    name: "Cory Russell",
    titleEn: "Director of Technology & Acting President",
    titleEs: "Director de Tecnología y Presidente Interino",
    image: "/board/cory-russell.jpg",
    summaryEn:
      "Cory brings technology leadership, entrepreneurship, and a belief in educational access to Los Amigos.",
    summaryEs:
      "Cory aporta liderazgo tecnológico, experiencia empresarial y una convicción en el acceso educativo a Los Amigos.",
  },
  {
    name: "John Rovens",
    titleEn: "Director of Resource Development",
    titleEs: "Director de Desarrollo de Recursos",
    image: "/board/john-rovens.png",
    summaryEn:
      "John leads donor acquisition, event planning, volunteerism, and membership development for Los Amigos.",
    summaryEs:
      "John dirige la adquisición de donantes, la planificación de eventos, el voluntariado y el desarrollo de membresía para Los Amigos.",
  },
  {
    name: "Sally Thomsen",
    titleEn: "Director of Program Development",
    titleEs: "Directora de Desarrollo de Programas",
    image: "/board/sally-thomsen.png",
    summaryEn:
      "Sally leads scholarship recruitment, selection, student liaison coordination, and CECyTE program development.",
    summaryEs:
      "Sally dirige el reclutamiento y selección de becarios, la coordinación de enlaces estudiantiles y el desarrollo de programas con CECyTE.",
  },
  {
    name: "Terri Wolfe",
    titleEn: "Treasurer",
    titleEs: "Tesorera",
    image: "/board/terri-wolfe.png",
    summaryEn:
      "Terri oversees financial systems, banking relationships, funds distribution, and statutory reporting and compliance.",
    summaryEs:
      "Terri supervisa los sistemas financieros, relaciones bancarias, distribución de fondos y cumplimiento legal y fiscal.",
  },
  {
    name: "Tracy Russell",
    titleEn: "Secretary",
    titleEs: "Secretaria",
    image: "/board/tracy-russell.jpg",
    summaryEn:
      "Tracy brings a strong belief in discipline, growth, lifelong learning, and opportunity for Mulegé students.",
    summaryEs:
      "Tracy aporta una fuerte convicción en la disciplina, el crecimiento, el aprendizaje permanente y las oportunidades para estudiantes de Mulegé.",
  },
  {
    name: "Kathy (KJ) Jackson",
    titleEn: "Director of Resource Development",
    titleEs: "Directora de Desarrollo de Recursos",
    image: "/board/kj.png",
    summaryEn:
      "KJ leads an initiative to build deeper relationships with Spanish-speaking students and citizens in Mulegé.",
    summaryEs:
      "KJ lidera una iniciativa para establecer relaciones más profundas con estudiantes y ciudadanos hispanohablantes de Mulegé.",
  },
];

export default function About({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {t.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-4">
            {t.heading}
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg">{t.body}</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {t.keypoints.map((k) => (
            <li
              key={k.slice(0, 40)}
              className="flex items-start gap-3 bg-stone-50 border border-stone-100 rounded-2xl p-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
              <span className="text-stone-600 text-sm leading-relaxed">{k}</span>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-stone-200 p-6">
            <h3 className="text-lg font-bold text-stone-800 mb-2">
              {lang === "en" ? "High School" : "Preparatoria"}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t.hs}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 p-6">
            <h3 className="text-lg font-bold text-stone-800 mb-2">
              {lang === "en" ? "University" : "Universidad"}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t.univ}</p>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-extrabold text-stone-800 mb-2">{t.board_heading}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{t.board_intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => {
              const title = lang === "en" ? member.titleEn : member.titleEs;
              const summary = lang === "en" ? member.summaryEn : member.summaryEs;
              return (
                <div
                  key={member.name}
                  className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-20 h-20 rounded-xl object-cover bg-stone-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-stone-800 leading-tight">{member.name}</h4>
                      <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mt-1">
                        {title}
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
