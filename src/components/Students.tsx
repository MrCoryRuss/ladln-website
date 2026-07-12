"use client";
import Image from "next/image";
import { Lang, translations } from "@/lib/i18n";
import { hsStudents, gradProfiles } from "@/lib/students";
import { Quote, PlayCircle } from "lucide-react";

const GRAD_VIDEO_ID = "zOYbe2wPBOw";

const highSchoolGraduateFeature = {
  en: {
    title: "2026 High School Graduates",
    intro:
      "We are immensely proud of our Los Amigos scholarship students in the CECyTE (high school) class of 2026! Their hard work, perseverance, and dedication have carried them to this milestone and we couldn’t be prouder to celebrate them.",
    body:
      "Each of these students represents hope for a brighter future in Mulegé and beyond. They’ve grown into thoughtful, capable young people ready to take on their next adventure, and we are honored to have been part of their journey through the scholarship program.",
    closing:
      "Felicidades! Congratulations, graduates! Thanks to our members and donors for your continued support.",
  },
  es: {
    title: "Graduados de Preparatoria 2026",
    intro:
      "¡Estamos inmensamente orgullosos de nuestros becarios de Los Amigos en la generación 2026 de CECyTE (preparatoria)! Su trabajo duro, perseverancia y dedicación los han llevado a este logro, y no podríamos estar más orgullosos de celebrarlos.",
    body:
      "Cada uno de estos estudiantes representa esperanza para un futuro más brillante en Mulegé y más allá. Se han convertido en jóvenes reflexivos y capaces, listos para emprender su próxima aventura, y nos sentimos honrados de haber sido parte de su camino a través del programa de becas.",
    closing:
      "¡Felicidades! ¡Congratulations, graduates! Gracias a nuestros miembros y donantes por su continuo apoyo.",
  },
} as const;

const highSchoolGraduates2026 = [
  {
    name: "Antonio Alexander Gutiérrez Leyva",
    image: "/students/2026-high-school-graduates/antonio-alexander-gutierrez-leyva.png",
  },
  {
    name: "Ismael Carrizosa Rosales",
    image: "/students/2026-high-school-graduates/ismael-carrizosa-rosales.png",
  },
  {
    name: "Axel Emir Osuna Peralta",
    image: "/students/2026-high-school-graduates/axel-emir-osuna-peralta.png",
  },
  {
    name: "Natalia León Castro",
    image: "/students/2026-high-school-graduates/natalia-leon-castro.png",
  },
  {
    name: "Yosef Kalel Martínez Mateo",
    image: "/students/2026-high-school-graduates/yosef-kalel-martinez-mateo.png",
  },
  {
    name: "Guillermo Hernández Osuna",
    image: "/students/2026-high-school-graduates/guillermo-hernandez-osuna.png",
  },
  {
    name: "Santiago Meza Corral",
    image: "/students/2026-high-school-graduates/santiago-meza-corral.png",
  },
  {
    name: "Javier Ernesto Sahagún Gutiérrez",
    image: "/students/2026-high-school-graduates/javier-ernesto-sahagun-gutierrez.png",
  },
  {
    name: "Jovanna Ariadna García Meza",
    image: "/students/2026-high-school-graduates/jovanna-ariadna-garcia-meza.png",
  },
];

export default function Students({ lang }: { lang: Lang }) {
  const t = translations[lang].students;
  const feature = highSchoolGraduateFeature[lang];

  return (
    <section id="students" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {lang === "en" ? "Class of 2025-2026" : "Generación 2025-2026"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-3">
            {t.heading}
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">{t.intro}</p>
        </div>

        {/* 1. CECyTE High School Success Stories */}
        <h3
          id="success-highschool"
          className="text-xl font-bold text-stone-700 mb-6 flex items-center gap-2 scroll-mt-24"
        >
          <span className="w-1 h-6 rounded-full bg-terracotta inline-block" />
          {t.hs_heading}
        </h3>

        {/* Featured 2026 high school graduates story from the old website */}
        <article className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm mb-10">
          <div className="max-w-3xl mb-6">
            <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
              {lang === "en" ? "Featured Story" : "Historia Destacada"}
            </div>
            <h4 className="text-2xl font-extrabold text-stone-800 mb-3">{feature.title}</h4>
            <p className="text-stone-600 leading-relaxed mb-4">{feature.intro}</p>
            <p className="text-stone-600 leading-relaxed mb-4">{feature.body}</p>
            <p className="text-stone-600 leading-relaxed font-medium">{feature.closing}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highSchoolGraduates2026.map((student) => (
              <div
                key={student.name}
                className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={640}
                  height={800}
                  className="w-full aspect-[4/5] object-cover bg-stone-100"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
                <div className="p-3 text-sm font-semibold text-stone-700 text-center">
                  {student.name}
                </div>
              </div>
            ))}
          </div>
        </article>

        {(["seniors", "juniors", "sophomores"] as const).map((group) => (
          <div key={group} className="mb-8">
            <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
              {t[group]}
            </div>
            <div className="flex flex-wrap gap-2">
              {hsStudents[group].map((name) => (
                <div
                  key={name}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 font-medium shadow-sm hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 2. University Success Stories */}
        <h3
          id="success-university"
          className="text-xl font-bold text-stone-700 mt-14 mb-6 flex items-center gap-2 scroll-mt-24"
        >
          <span className="w-1 h-6 rounded-full bg-sky-600 inline-block" />
          {t.univ_heading}
        </h3>
        <div className="bg-white border border-dashed border-stone-300 rounded-2xl p-8 text-center text-stone-500 text-sm mb-4">
          {t.univ_coming}
        </div>

        {/* 3. Graduates' Success Stories */}
        <h3 className="text-xl font-bold text-stone-700 mt-14 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full bg-gold inline-block" />
          {t.grad_heading}
        </h3>

        {/* Featured graduate video */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-black max-w-3xl">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${GRAD_VIDEO_ID}`}
                title={t.grad_heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-stone-500">
            <PlayCircle size={13} className="text-terracotta" />
            {lang === "en"
              ? "Watch one of our graduates share their story"
              : "Mira a uno de nuestros graduados compartir su historia"}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {gradProfiles.map((g) => (
            <div
              key={g.name}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {g.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-800">{g.name}</div>
                  <div className="text-xs text-stone-500">
                    {lang === "en" ? `Class of ${g.year}` : `Graduado(a) ${g.year}`}
                  </div>
                </div>
              </div>
              <div className="text-sm text-terracotta font-medium mb-3">
                {lang === "en" ? g.degree_en : g.degree_es}
              </div>
              <div className="relative pl-4 border-l-2 border-stone-200">
                <Quote size={12} className="absolute -left-1.5 top-0 text-stone-300 fill-stone-300" />
                <p className="text-stone-600 italic text-sm leading-relaxed">
                  {lang === "en" ? g.quote_en : g.quote_es}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
