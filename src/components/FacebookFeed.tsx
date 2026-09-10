"use client";

import { Lang, translations } from "@/lib/i18n";

const FB_PAGE = "https://www.facebook.com/ladlnmulege";
const PLUGIN_URL =
  "https://www.facebook.com/plugins/page.php?href=" +
  encodeURIComponent(FB_PAGE) +
  "&tabs=timeline&width=340&height=650&small_header=false" +
  "&adapt_container_width=true&hide_cover=false&show_facepile=true";

export default function FacebookFeed({ lang }: { lang: Lang }) {
  const t = translations[lang].facebook;

  return (
    <section id="facebook" className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terracotta" />
          </span>
          {lang === "en" ? "Live from Mulegé" : "En Vivo desde Mulegé"}
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-2">
          {t.heading}
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto mb-8">{t.intro}</p>

        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white max-w-4xl mx-auto">
          <iframe
            src={PLUGIN_URL}
            title="Los Amigos de Los Niños Facebook page"
            className="w-full block"
            style={{ height: 650, border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>

        <div className="mt-6">
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full shadow-sm border border-stone-200 bg-white transition-all hover:shadow-md"
            style={{ color: "#1877F2" }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
