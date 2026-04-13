"use client";
import Image from "next/image";
import { Lang, translations } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const ti = translations[lang].impact;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle top border stripe using brand colors */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #7A9B33, #253E80, #6D63C7, #F46A6A)" }} />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Logo */}
          <div className="shrink-0 flex flex-col items-center">
            <Image
              src="/logo.jpg"
              alt="Los Amigos de Los Niños, Mulegé"
              width={180}
              height={180}
              className="rounded-2xl shadow-md"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
              style={{ backgroundColor: "#EEF3FF", color: "#253E80" }}
            >
              🌵 {t.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ color: "#333333" }}>
              Los Amigos de{" "}
              <span style={{ color: "#F46A6A" }}>los Niños</span>
              <br />
              <span style={{ color: "#253E80" }}>Mulegé</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: "#555555" }}>
              {t.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#donate"
                className="font-bold px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 text-white"
                style={{ backgroundColor: "#253E80" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2e61")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#253E80")}
              >
                {t.cta_donate}
              </a>
              <a
                href="#students"
                className="bg-white font-semibold px-6 py-3 rounded-full shadow border border-stone-200 transition-all hover:shadow-md"
                style={{ color: "#253E80" }}
              >
                {t.cta_students}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impact stats bar */}
      <div className="text-white" style={{ backgroundColor: "#253E80" }}>
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: ti.stat1_num, label: ti.stat1_label },
            { num: ti.stat2_num, label: ti.stat2_label },
            { num: ti.stat3_num, label: ti.stat3_label },
            { num: ti.stat4_num, label: ti.stat4_label },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold">{s.num}</span>
              <span className="text-sm font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
