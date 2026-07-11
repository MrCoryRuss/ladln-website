"use client";
import Image from "next/image";
import { Lang } from "@/lib/i18n";

const content = {
      en: {
              tagline: "Supporting students in Mulege, Baja California Sur, Mexico since 1976",
              subtitle:
                        "Los Amigos de Los Ninos, Mulege, provides educational scholarships and support that help students build brighter futures and strengthen the Mulege community.",
              ctaDonate: "Donate Now",
              ctaStudents: "Student Success Stories",
              stats: [
                  { num: "65", label: "Current Scholarships" },
                  { num: "34", label: "High School Students" },
                  { num: "31", label: "University Students" },
                  { num: "100%", label: "Volunteer-Run" },
                      ],
      },
      es: {
              tagline: "Apoyando a estudiantes en Mulege, Baja California Sur, Mexico desde 1976",
              subtitle:
                        "Los Amigos de Los Ninos, Mulege, brinda becas educativas y apoyo que ayudan a los estudiantes a construir un futuro mas brillante y a fortalecer a la comunidad de Mulege.",
              ctaDonate: "Donar Ahora",
              ctaStudents: "Historias de Exito",
              stats: [
                  { num: "65", label: "Becas Actuales" },
                  { num: "34", label: "Estudiantes de Preparatoria" },
                  { num: "31", label: "Estudiantes Universitarios" },
                  { num: "100%", label: "Dirigido por Voluntarios" },
                      ],
      },
} as const;

export default function Hero({ lang }: { lang: Lang }) {
      const t = content[lang];

  return (
          <section className="relative overflow-hidden bg-white">
                <div
                            className="h-1 w-full"
                            style={{ background: "linear-gradient(to right, #7A9B33, #253E80, #6D63C7, #F46A6A)" }}
                          />
          
                <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                  <div className="shrink-0 flex flex-col items-center">
                                              <Image
                                                                src="/logo.jpg"
                                                                alt="Los Amigos de Los Ninos, Mulege"
                                                                width={180}
                                                                height={180}
                                                                className="rounded-2xl shadow-md"
                                                                priority
                                                              />
                                  </div>div>
                        
                                  <div className="text-center md:text-left">
                                              <div
                                                                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
                                                                style={{ backgroundColor: "#EEF3FF", color: "#253E80" }}
                                                              >
                                                  {t.tagline}
                                              </div>div>
                                              <h1
                                                                className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
                                                                style={{ color: "#333333" }}
                                                              >
                                                            Los Amigos de <span style={{ color: "#F46A6A" }}>los Ninos</span>span>
                                                            <br />
                                                            <span style={{ color: "#253E80" }}>Mulege</span>span>
                                              </h1>h1>
                                              <p
                                                                className="text-lg mb-8 leading-relaxed max-w-2xl"
                                                                style={{ color: "#555555" }}
                                                              >
                                                  {t.subtitle}
                                              </p>p>
                                              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                            <a
                                                                                href="#donate"
                                                                                className="font-bold px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 text-white"
                                                                                style={{ backgroundColor: "#253E80" }}
                                                                              >
                                                                {t.ctaDonate}
                                                            </a>a>
                                                            <a
                                                                                href="#students"
                                                                                className="bg-white font-semibold px-6 py-3 rounded-full shadow border border-stone-200 transition-all hover:shadow-md"
                                                                                style={{ color: "#253E80" }}
                                                                              >
                                                                {t.ctaStudents}
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </div>div>
          
                <div className="text-white" style={{ backgroundColor: "#253E80" }}>
                        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {t.stats.map((s) => (
                          <div key={s.label} className="flex flex-col">
                                        <span className="text-2xl md:text-3xl font-extrabold">{s.num}</span>span>
                                        <span
                                                            className="text-sm font-medium mt-0.5"
                                                            style={{ color: "rgba(255,255,255,0.8)" }}
                                                          >
                                            {s.label}
                                        </span>span>
                          </div>div>
                        ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
